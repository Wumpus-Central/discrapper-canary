"use strict";
n.d(t, { P: () => S });
var r = n(77729),
    i = n(626584),
    s = n(869146),
    a = n(837921),
    o = n(9302),
    l = n(206885),
    u = n(181435),
    c = n(48345),
    d = n(395011),
    _ = n(682763),
    f = n(96175),
    p = n(905555),
    h = n(237984),
    E = n(392164);
let m = new i.A("OverlayV3NativeModule");
function g(e, t, n) {
    (0, _._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: d.A.getPopoutInitializationStages(),
    }),
        (0, _.cS)(e, null != t ? (0, f.Oy)(t) : null, n);
}
function A(e) {
    (0, _._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: d.A.getPopoutInitializationStages() }),
        (0, _.C7)(e);
}
function I(e) {
    (0, _._r)(e, "successfully_shown", { popoutInitializationStages: d.A.getPopoutInitializationStages() }),
        (0, _.oW)(e);
}
function T(e) {
    (0, _._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: d.A.getPopoutInitializationStages(),
    }),
        (0, _.i0)(e);
}
class S {
    static instance = null;
    module = null;
    modulePromise = null;
    isCrashedDisabled = !1;
    lastAssociatedPID = null;
    trackedGamePids = new Set();
    static getInstance() {
        return null == this.instance && (this.instance = new S()), this.instance;
    }
    async initialize() {
        return await this.prepareOverlayModule();
    }
    getOverlayModule() {
        if (null == this.module) throw Error("Overlay module not loaded");
        return this.module;
    }
    destroy() {
        (this.module = null),
            (this.lastAssociatedPID = null),
            (this.trackedGamePids = new Set()),
            m.info("OverlayV3 Native Module destroyed");
    }
    getLastAssociatedPID() {
        return this.lastAssociatedPID;
    }
    prepareOverlayModule() {
        return (
            null != this.modulePromise || (this.modulePromise = this.loadOutOfProcessOverlayModule()),
            this.modulePromise
        );
    }
    async loadOutOfProcessOverlayModule() {
        if (!l.O) return void m.error("Attempted to load overlay on an unsupported platform.");
        m.info("Loading Out of Process Overlay Module");
        try {
            var e;
            await a.Ay.ensureModule("discord_desktop_overlay");
            let t = a.Ay.requireModule("discord_desktop_overlay");
            t.init(),
                t.setHostWindowCallbacks(
                    (e) => this.createOutOfProcessOverlayHostWindow(e),
                    () => this.destroyOutOfProcessOverlayHostWindow(),
                    (e) => this.refreshOutOfProcessOverlayHostWindow(e),
                ),
                (this.module = t),
                (0, _._r)(null, "module_loaded"),
                (0, o.setOutOfProcessSupport)(!0),
                (e = this.module),
                e.setFocusCallback?.(g),
                e.setFocusLostCallback?.(A),
                e.setSuccessfullyShownCallback?.(I),
                e.setOnWindowHandleInitializedCallback?.(T),
                (0, _._r)(null, "native_module_callbacks_setup"),
                m.verbose("Native module callbacks setup"),
                (0, _.Mi)(),
                m.info("OverlayV3 Module Loaded");
        } catch (e) {
            throw (
                (m.error("failed loading overlay module", e),
                (0, o.setOutOfProcessSupport)(!1),
                (0, _.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e)
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        m.verbose(`Creating OOP Host Window for pid ${e}`), (0, _.wX)(e);
        let t = null;
        try {
            (0, _._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: d.A.getPopoutInitializationStages(),
            }),
                await (0, p.H)(),
                (t = await this.openOverlayPopout()),
                await (0, _.hJ)(e),
                (0, _._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: d.A.getPopoutInitializationStages(),
                });
        } catch (t) {
            m.error("Error creating OOP host window:", t),
                (0, _._r)(e, "host_window_mounting_failed", { error: t }, u.QJ.Error);
        }
        try {
            r.A.window.setBackgroundThrottling(!1);
        } catch (t) {
            m.error("Error setting background throttling:", t),
                (0, _._r)(e, "background_throttling_setting_failed", { error: t }, u.QJ.Error);
        }
        let n = null;
        try {
            (n = await this.getNativeWindowHandleWithRetry()),
                c.A.resetWindowState(),
                (0, _._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: d.A.getPopoutInitializationStages(),
                }),
                await (0, _.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, _.i0)(!0));
        } catch (t) {
            m.error("Error getting native window handle:", t),
                (0, _.lo)(e, t, n),
                (0, _._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: d.A.getPopoutInitializationStages(),
                    },
                    u.QJ.Error,
                );
        }
        return (
            null == n
                ? (0, _.mD)(e, Error("Native window handle not found"), { crashType: "native", isCrashedDisabled: !0 })
                : (this.lastAssociatedPID = e),
            n ?? ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        m.verbose("Destroying OOP host window"), (0, _._r)(this.lastAssociatedPID, "host_window_destroyed");
        try {
            r.A?.window?.close(E.f), r.A?.window?.setBackgroundThrottling(!0), c.A.resetWindowState(!1);
        } catch (e) {
            m.error("Error closing overlay window:", e);
        }
        (0, _.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null);
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        m.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, _._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: d.A.getPopoutInitializationStages(),
            }),
            (0, _.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e);
    }
    async openOverlayPopout() {
        return await (0, h.o)(), await this.getWindowWithRetry();
    }
    async getWithRetry(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        for (let r = 0; r < n; r++) {
            let i = r + 1 >= n;
            try {
                let t = await e();
                if (null != t) return t;
            } catch (n) {
                if (i) throw n;
                let e = Math.pow(2, r + 1) * t;
                await new Promise((t) => setTimeout(t, e));
            }
        }
        return null;
    }
    async getWindowWithRetry() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return await this.getWithRetry(
            () => {
                let e = s.A.getWindow(E.f);
                if (null == e) throw Error("Overlay popout window not found");
                return Promise.resolve(e);
            },
            e,
            t,
        );
    }
    async getNativeWindowHandleWithRetry() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return await this.getWithRetry(
            async () => {
                let e = await r.A?.window?.getNativeHandle(E.f);
                return null != e ? (0, f.Oy)(e) : null;
            },
            e,
            t,
        );
    }
    getNativeBreadcrumbs(e, t) {
        this.module?.getBreadcrumbs?.(e, t);
    }
    getDebuggingState(e) {
        this.module?.getDebuggingState?.(e);
    }
    setDetailedLogging(e) {
        this.module?.setDetailedLogging?.(e);
    }
    version() {
        return this.module?.version ?? 0;
    }
    onNativePopoutShowInactiveSuccess() {
        this.module?.onPopoutShowInactive?.();
    }
    setRenderingWindowHandle(e, t) {
        this.module?.setRenderingWindowHandle?.(e), m.verbose(`Setting rendering window handle for pid ${t}: ${e}`);
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        this.module?.setLimitedInteraction?.(e), a.Ay.setFocusable(E.f, !e);
    }
    setCaptureZoneCallback(e) {
        this.module?.setCaptureZoneCallback?.(e);
    }
    setCaptureZones(e) {
        this.module?.setCaptureZones?.(e);
    }
    readyToShow(e) {
        this.module?.readyToShow?.(e);
    }
    trackGame(e) {
        null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, _.wb)(e));
    }
    untrackGame(e) {
        if (null == this.module) return;
        this.module.untrackGame(e), this.trackedGamePids.delete(e);
        let t = this.trackedGamePids.values().next().value;
        this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, _.Lt)(e);
    }
}
