"use strict";
n.d(t, { P: () => S });
var r = n(77729),
    i = n(626584),
    a = n(869146),
    s = n(837921),
    o = n(9302),
    l = n(181435),
    u = n(48345),
    c = n(395011),
    d = n(682763),
    _ = n(96175),
    f = n(905555),
    p = n(237984),
    h = n(672396),
    m = n(392164);
let g = new i.A("OverlayV3NativeModule");
function E(e, t, n) {
    (0, d._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: c.A.getPopoutInitializationStages(),
    }),
        (0, d.cS)(e, null != t ? (0, _.Oy)(t) : null, n);
}
function A(e) {
    (0, d._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: c.A.getPopoutInitializationStages() }),
        (0, d.C7)(e);
}
function I(e) {
    (0, d._r)(e, "successfully_shown", { popoutInitializationStages: c.A.getPopoutInitializationStages() }),
        (0, d.oW)(e);
}
function T(e) {
    (0, d._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: c.A.getPopoutInitializationStages(),
    }),
        (0, d.i0)(e);
}
function y(e) {
    e.setFocusCallback?.(E),
        e.setFocusLostCallback?.(A),
        e.setSuccessfullyShownCallback?.(I),
        e.setOnWindowHandleInitializedCallback?.(T),
        (0, d._r)(null, "native_module_callbacks_setup"),
        g.verbose("Native module callbacks setup");
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
        if (!h.OX) return void g.error("Attempted to load overlay on an unsupported platform.");
        g.info("Loading Out of Process Overlay Module");
        try {
            await s.Ay.ensureModule("discord_desktop_overlay");
            let e = s.Ay.requireModule("discord_desktop_overlay");
            e.init(),
                e.setHostWindowCallbacks(
                    (e) => this.createOutOfProcessOverlayHostWindow(e),
                    () => this.destroyOutOfProcessOverlayHostWindow(),
                    (e) => this.refreshOutOfProcessOverlayHostWindow(e),
                ),
                (this.module = e),
                (0, d._r)(null, "module_loaded"),
                (0, o.setOutOfProcessSupport)(!0),
                y(this.module),
                (0, d.Mi)(),
                g.info("OverlayV3 Module Loaded");
        } catch (e) {
            throw (
                (g.error("failed loading overlay module", e),
                (0, o.setOutOfProcessSupport)(!1),
                (0, d.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e)
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        g.verbose(`Creating OOP Host Window for pid ${e}`), (0, d.wX)(e);
        let t = null;
        try {
            (0, d._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: c.A.getPopoutInitializationStages(),
            }),
                await (0, f.H)(),
                (t = await this.openOverlayPopout()),
                await (0, d.hJ)(e),
                (0, d._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: c.A.getPopoutInitializationStages(),
                });
        } catch (t) {
            g.error("Error creating OOP host window:", t),
                (0, d._r)(e, "host_window_mounting_failed", { error: t }, l.QJ.Error);
        }
        try {
            r.A.window.setBackgroundThrottling(!1);
        } catch (t) {
            g.error("Error setting background throttling:", t),
                (0, d._r)(e, "background_throttling_setting_failed", { error: t }, l.QJ.Error);
        }
        let n = null;
        try {
            (n = await this.getNativeWindowHandleWithRetry()),
                u.A.resetWindowState(),
                (0, d._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: c.A.getPopoutInitializationStages(),
                }),
                await (0, d.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, d.i0)(!0));
        } catch (t) {
            g.error("Error getting native window handle:", t),
                (0, d.lo)(e, t, n),
                (0, d._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: c.A.getPopoutInitializationStages(),
                    },
                    l.QJ.Error,
                );
        }
        return (
            null == n
                ? (0, d.mD)(e, Error("Native window handle not found"), { crashType: "native", isCrashedDisabled: !0 })
                : (this.lastAssociatedPID = e),
            n ?? ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        g.verbose("Destroying OOP host window"), (0, d._r)(this.lastAssociatedPID, "host_window_destroyed");
        try {
            r.A?.window?.close(m.f), r.A?.window?.setBackgroundThrottling(!0), u.A.resetWindowState(!1);
        } catch (e) {
            g.error("Error closing overlay window:", e);
        }
        (0, d.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null);
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        g.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, d._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: c.A.getPopoutInitializationStages(),
            }),
            (0, d.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e);
    }
    async openOverlayPopout() {
        return await (0, p.o)(), await this.getWindowWithRetry();
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
                let e = a.A.getWindow(m.f);
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
                let e = await r.A?.window?.getNativeHandle(m.f);
                return null != e ? (0, _.Oy)(e) : null;
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
        this.module?.setLimitedInteraction?.(e), s.Ay.setFocusable(m.f, !e);
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
        null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, d.wb)(e));
    }
    untrackGame(e) {
        if (null == this.module) return;
        this.module.untrackGame(e), this.trackedGamePids.delete(e);
        let t = this.trackedGamePids.values().next().value;
        this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, d.Lt)(e);
    }
}
