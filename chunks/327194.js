"use strict";
n.d(t, { P: () => S });
var i = n(77729),
    r = n(626584),
    s = n(869146),
    a = n(19575),
    o = n(9302),
    l = n(206885),
    d = n(181435),
    _ = n(48345),
    u = n(489277),
    c = n(682763),
    E = n(96175),
    h = n(905555),
    m = n(237984),
    f = n(392164);
let g = new r.A("OverlayV3NativeModule");
function p(e, t, n) {
    (0, c._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: u.A.getPopoutInitializationStages(),
    }),
        (0, c.cS)(e, null != t ? (0, E.Oy)(t) : null, n);
}
function A(e) {
    (0, c._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: u.A.getPopoutInitializationStages() }),
        (0, c.C7)(e);
}
function I(e) {
    (0, c._r)(e, "successfully_shown", { popoutInitializationStages: u.A.getPopoutInitializationStages() }),
        (0, c.oW)(e);
}
function T(e) {
    (0, c._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: u.A.getPopoutInitializationStages(),
    }),
        (0, c.i0)(e);
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
            g.info("OverlayV3 Native Module destroyed");
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
        if (!l.O) return void g.error("Attempted to load overlay on an unsupported platform.");
        g.info("Loading Out of Process Overlay Module");
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
                (0, c._r)(null, "module_loaded"),
                (0, o.setOutOfProcessSupport)(!0),
                (e = this.module),
                e.setFocusCallback?.(p),
                e.setFocusLostCallback?.(A),
                e.setSuccessfullyShownCallback?.(I),
                e.setOnWindowHandleInitializedCallback?.(T),
                (0, c._r)(null, "native_module_callbacks_setup"),
                g.verbose("Native module callbacks setup"),
                (0, c.Mi)(),
                g.info("OverlayV3 Module Loaded");
        } catch (e) {
            throw (
                (g.error("failed loading overlay module", e),
                (0, o.setOutOfProcessSupport)(!1),
                (0, c.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e)
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        g.verbose(`Creating OOP Host Window for pid ${e}`), (0, c.wX)(e);
        let t = null;
        try {
            (0, c._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: u.A.getPopoutInitializationStages(),
            }),
                await (0, h.H)(),
                (t = await this.openOverlayPopout()),
                await (0, c.hJ)(e),
                (0, c._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: u.A.getPopoutInitializationStages(),
                });
        } catch (t) {
            g.error("Error creating OOP host window:", t),
                (0, c._r)(e, "host_window_mounting_failed", { error: t }, d.QJ.Error);
        }
        try {
            i.A.window.setBackgroundThrottling(!1);
        } catch (t) {
            g.error("Error setting background throttling:", t),
                (0, c._r)(e, "background_throttling_setting_failed", { error: t }, d.QJ.Error);
        }
        let n = null;
        try {
            (n = await this.getNativeWindowHandleWithRetry()),
                _.A.resetWindowState(),
                (0, c._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: u.A.getPopoutInitializationStages(),
                }),
                await (0, c.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, c.i0)(!0));
        } catch (t) {
            g.error("Error getting native window handle:", t),
                (0, c.lo)(e, t, n),
                (0, c._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: u.A.getPopoutInitializationStages(),
                    },
                    d.QJ.Error,
                );
        }
        return (
            null == n
                ? (0, c.mD)(e, Error("Native window handle not found"), { crashType: "native", isCrashedDisabled: !0 })
                : (this.lastAssociatedPID = e),
            n ?? ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        g.verbose("Destroying OOP host window"), (0, c._r)(this.lastAssociatedPID, "host_window_destroyed");
        try {
            i.A?.window?.close(f.f), i.A?.window?.setBackgroundThrottling(!0), _.A.resetWindowState(!1);
        } catch (e) {
            g.error("Error closing overlay window:", e);
        }
        (0, c.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null);
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        g.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, c._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: u.A.getPopoutInitializationStages(),
            }),
            (0, c.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e);
    }
    async openOverlayPopout() {
        return await (0, m.o)(), await this.getWindowWithRetry();
    }
    async getWithRetry(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        for (let i = 0; i < n; i++) {
            let r = i + 1 >= n;
            try {
                let t = await e();
                if (null != t) return t;
            } catch (n) {
                if (r) throw n;
                let e = Math.pow(2, i + 1) * t;
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
                let e = s.A.getWindow(f.f);
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
                let e = await i.A?.window?.getNativeHandle(f.f);
                return null != e ? (0, E.Oy)(e) : null;
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
        this.module?.setRenderingWindowHandle?.(e), g.verbose(`Setting rendering window handle for pid ${t}: ${e}`);
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        this.module?.setLimitedInteraction?.(e), a.Ay.setFocusable(f.f, !e);
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
        null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, c.wb)(e));
    }
    untrackGame(e) {
        if (null == this.module) return;
        this.module.untrackGame(e), this.trackedGamePids.delete(e);
        let t = this.trackedGamePids.values().next().value;
        this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, c.Lt)(e);
    }
}
