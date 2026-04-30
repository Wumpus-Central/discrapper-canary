"use strict";
n.d(t, { A: () => B });
var i = n(17928),
    r = n(941426),
    s = n(228366),
    a = n(736056),
    o = n(9302),
    l = n(211753),
    u = n(206885),
    c = n(682763),
    d = n(77729),
    _ = n(626584),
    f = n(869146),
    h = n(19575),
    p = n(181435),
    E = n(48345),
    m = n(186427),
    g = n(489277),
    A = n(96175),
    I = n(905555),
    T = n(237984),
    S = n(392164);
let N = new _.A("OverlayV3NativeModule");
function y(e, t, n) {
    (0, c._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: g.A.getPopoutInitializationStages(),
    }),
        (0, c.cS)(e, null != t ? (0, A.Oy)(t) : null, n);
}
function C(e) {
    (0, c._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: g.A.getPopoutInitializationStages() }),
        (0, c.C7)(e);
}
function v(e) {
    (0, c._r)(e, "successfully_shown", { popoutInitializationStages: g.A.getPopoutInitializationStages() }),
        (0, c.oW)(e);
}
function O(e) {
    (0, c._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: g.A.getPopoutInitializationStages(),
    }),
        (0, c.i0)(e);
}
class R {
    static instance = null;
    module = null;
    modulePromise = null;
    isCrashedDisabled = !1;
    lastAssociatedPID = null;
    trackedGamePids = new Set();
    static getInstance() {
        return null == this.instance && (this.instance = new R()), this.instance;
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
            N.info("OverlayV3 Native Module destroyed");
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
        if (!u.O) return void N.error("Attempted to load overlay on an unsupported platform.");
        N.info("Loading Out of Process Overlay Module");
        try {
            var e;
            await h.Ay.ensureModule("discord_desktop_overlay");
            let t = h.Ay.requireModule("discord_desktop_overlay");
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
                e.setFocusCallback?.(y),
                e.setFocusLostCallback?.(C),
                e.setSuccessfullyShownCallback?.(v),
                e.setOnWindowHandleInitializedCallback?.(O),
                (0, c._r)(null, "native_module_callbacks_setup"),
                N.verbose("Native module callbacks setup"),
                (0, c.Mi)(),
                N.info("OverlayV3 Module Loaded");
        } catch (e) {
            throw (
                (N.error("failed loading overlay module", e),
                (0, o.setOutOfProcessSupport)(!1),
                (0, c.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e)
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        N.verbose(`Creating OOP Host Window for pid ${e}`), (0, c.wX)(e);
        let t = null;
        try {
            (0, c._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: g.A.getPopoutInitializationStages(),
            }),
                await (0, I.H)(),
                (t = await this.openOverlayPopout()),
                await (0, c.hJ)(e),
                (0, c._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: g.A.getPopoutInitializationStages(),
                });
        } catch (t) {
            N.error("Error creating OOP host window:", t),
                (0, c._r)(e, "host_window_mounting_failed", { error: t }, p.QJ.Error);
        }
        try {
            d.A?.window?.setBackgroundThrottling(!1),
                d.A?.window?.setFrameRate?.(S.f, m.A.getOverlayFPSLimit() ?? 0),
                d.A?.window?.setFrameRate?.(null, m.A.getMainWindowFPSLimit() ?? 0);
        } catch (t) {
            N.error("Error setting background throttling:", t),
                (0, c._r)(e, "background_throttling_setting_failed", { error: t }, p.QJ.Error);
        }
        let n = null;
        try {
            (n = await this.getNativeWindowHandleWithRetry()),
                E.A.resetWindowState(),
                (0, c._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: g.A.getPopoutInitializationStages(),
                }),
                await (0, c.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, c.i0)(!0));
        } catch (t) {
            N.error("Error getting native window handle:", t),
                (0, c.lo)(e, t, n),
                (0, c._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: g.A.getPopoutInitializationStages(),
                    },
                    p.QJ.Error,
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
        N.verbose("Destroying OOP host window"), (0, c._r)(this.lastAssociatedPID, "host_window_destroyed");
        try {
            d.A?.window?.close(S.f),
                d.A?.window?.setBackgroundThrottling(!0),
                d.A?.window?.setFrameRate?.(S.f, 0),
                d.A?.window?.setFrameRate?.(null, 0),
                E.A.resetWindowState(!1);
        } catch (e) {
            N.error("Error closing overlay window:", e);
        }
        (0, c.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null);
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        N.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, c._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: g.A.getPopoutInitializationStages(),
            }),
            (0, c.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e);
    }
    async openOverlayPopout() {
        return await (0, T.o)(), await this.getWindowWithRetry();
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
                let e = f.A.getWindow(S.f);
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
                let e = await d.A?.window?.getNativeHandle(S.f);
                return null != e ? (0, A.Oy)(e) : null;
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
        this.module?.setRenderingWindowHandle?.(e), N.verbose(`Setting rendering window handle for pid ${t}: ${e}`);
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        this.module?.setLimitedInteraction?.(e), h.Ay.setFocusable(S.f, !e);
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
let b = new r.Vy("OverlayV3NativeModuleStore"),
    D = !1,
    L = !1,
    w = null,
    M = !1,
    P = null,
    x = null,
    U = (() => {
        async function e() {
            G(), (w = R.getInstance());
            try {
                await w.initialize(), (D = !0);
            } catch (e) {
                (0, c._r)(null, "module_initialization_failed", { error: e }),
                    (D = !1),
                    (0, c.mD)(o.UNSET_PID, e, { crashType: "native" });
            } finally {
                V.emitChange();
            }
        }
        return () => (null == x && (x = e()), x);
    })();
function k(e) {
    __OVERLAY__ || !u.O || (L !== e && ((L = e), e && (0, o.setOutOfProcessSupport)(!0)));
}
function G() {
    !__OVERLAY__ && u.O && ((P = null), (M = !1), b.verbose("Maybe Enable Overlay"), k(l.x.oopEnabled));
}
class F extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(a.A);
    }
    get isModuleLoading() {
        return null != x;
    }
    get isOverlayEnabled() {
        return L;
    }
    get isSupported() {
        return u.O;
    }
    get isModuleLoaded() {
        return D;
    }
    get isCrashedDisabled() {
        return M;
    }
    get errorMessage() {
        return P;
    }
    getNativeModule() {
        return w;
    }
}
let V = new F(
        s.h,
        __OVERLAY__ || !u.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return U(), !1;
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: G,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      (P = null), k(t);
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return (P = null), U(), !1;
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return !0 === t && (M = !0), null != n && (P = n instanceof Error ? n.message : String(n)), !0;
                  },
              },
    ),
    B = V;
