"use strict";
n.d(t, { P: () => N });
var i = n(77729),
    r = n(626584),
    s = n(869146),
    a = n(19575),
    o = n(9302),
    l = n(206885),
    _ = n(181435),
    d = n(48345),
    u = n(186427),
    c = n(489277),
    E = n(682763),
    h = n(96175),
    m = n(905555),
    f = n(237984),
    g = n(392164);
let I = new r.A("OverlayV3NativeModule");
function A(e, t, n) {
    (0, E._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: c.A.getPopoutInitializationStages(),
    }),
        (0, E.cS)(e, null != t ? (0, h.Oy)(t) : null, n);
}
function p(e) {
    (0, E._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: c.A.getPopoutInitializationStages() }),
        (0, E.C7)(e);
}
function T(e) {
    (0, E._r)(e, "successfully_shown", { popoutInitializationStages: c.A.getPopoutInitializationStages() }),
        (0, E.oW)(e);
}
function S(e) {
    (0, E._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: c.A.getPopoutInitializationStages(),
    }),
        (0, E.i0)(e);
}
class N {
    static instance = null;
    module = null;
    modulePromise = null;
    isCrashedDisabled = !1;
    lastAssociatedPID = null;
    trackedGamePids = new Set();
    static getInstance() {
        return null == this.instance && (this.instance = new N()), this.instance;
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
            I.info("OverlayV3 Native Module destroyed");
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
        if (!l.O) return void I.error("Attempted to load overlay on an unsupported platform.");
        I.info("Loading Out of Process Overlay Module");
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
                (0, E._r)(null, "module_loaded"),
                (0, o.setOutOfProcessSupport)(!0),
                (e = this.module),
                e.setFocusCallback?.(A),
                e.setFocusLostCallback?.(p),
                e.setSuccessfullyShownCallback?.(T),
                e.setOnWindowHandleInitializedCallback?.(S),
                (0, E._r)(null, "native_module_callbacks_setup"),
                I.verbose("Native module callbacks setup"),
                (0, E.Mi)(),
                I.info("OverlayV3 Module Loaded");
        } catch (e) {
            throw (
                (I.error("failed loading overlay module", e),
                (0, o.setOutOfProcessSupport)(!1),
                (0, E.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e)
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        I.verbose(`Creating OOP Host Window for pid ${e}`), (0, E.wX)(e);
        let t = null;
        try {
            (0, E._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: c.A.getPopoutInitializationStages(),
            }),
                await (0, m.H)(),
                (t = await this.openOverlayPopout()),
                await (0, E.hJ)(e),
                (0, E._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: c.A.getPopoutInitializationStages(),
                });
        } catch (t) {
            I.error("Error creating OOP host window:", t),
                (0, E._r)(e, "host_window_mounting_failed", { error: t }, _.QJ.Error);
        }
        try {
            i.A?.window?.setBackgroundThrottling(!1),
                i.A?.window?.setFrameRate?.(g.f, u.A.getOverlayFPSLimit() ?? 0),
                i.A?.window?.setFrameRate?.(null, u.A.getMainWindowFPSLimit() ?? 0);
        } catch (t) {
            I.error("Error setting background throttling:", t),
                (0, E._r)(e, "background_throttling_setting_failed", { error: t }, _.QJ.Error);
        }
        let n = null;
        try {
            (n = await this.getNativeWindowHandleWithRetry()),
                d.A.resetWindowState(),
                (0, E._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: c.A.getPopoutInitializationStages(),
                }),
                await (0, E.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, E.i0)(!0));
        } catch (t) {
            I.error("Error getting native window handle:", t),
                (0, E.lo)(e, t, n),
                (0, E._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: c.A.getPopoutInitializationStages(),
                    },
                    _.QJ.Error,
                );
        }
        return (
            null == n
                ? (0, E.mD)(e, Error("Native window handle not found"), { crashType: "native", isCrashedDisabled: !0 })
                : (this.lastAssociatedPID = e),
            n ?? ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        I.verbose("Destroying OOP host window"), (0, E._r)(this.lastAssociatedPID, "host_window_destroyed");
        try {
            i.A?.window?.close(g.f),
                i.A?.window?.setBackgroundThrottling(!0),
                i.A?.window?.setFrameRate?.(g.f, 0),
                i.A?.window?.setFrameRate?.(null, 0),
                d.A.resetWindowState(!1);
        } catch (e) {
            I.error("Error closing overlay window:", e);
        }
        (0, E.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null);
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        I.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, E._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: c.A.getPopoutInitializationStages(),
            }),
            (0, E.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e);
    }
    async openOverlayPopout() {
        return await (0, f.o)(), await this.getWindowWithRetry();
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
                let e = s.A.getWindow(g.f);
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
                let e = await i.A?.window?.getNativeHandle(g.f);
                return null != e ? (0, h.Oy)(e) : null;
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
        this.module?.setRenderingWindowHandle?.(e), I.verbose(`Setting rendering window handle for pid ${t}: ${e}`);
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        this.module?.setLimitedInteraction?.(e), a.Ay.setFocusable(g.f, !e);
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
        null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, E.wb)(e));
    }
    untrackGame(e) {
        if (null == this.module) return;
        this.module.untrackGame(e), this.trackedGamePids.delete(e);
        let t = this.trackedGamePids.values().next().value;
        this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, E.Lt)(e);
    }
}
