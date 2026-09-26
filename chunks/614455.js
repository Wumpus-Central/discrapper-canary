n.d(t, { A: () => B });
var i = n(17928),
    r = n(941426),
    a = n(228366),
    s = n(736056),
    l = n(9302),
    o = n(211753),
    d = n(206885),
    c = n(682763),
    u = n(77729),
    _ = n(626584),
    E = n(869146),
    A = n(19575),
    h = n(181435),
    I = n(48345),
    f = n(489277),
    p = n(96175),
    T = n(905555),
    m = n(237984),
    g = n(392164);
let S = new _.A("OverlayV3NativeModule");
function N(e, t, n) {
    ((0, c._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: f.A.getPopoutInitializationStages(),
    }),
        (0, c.cS)(e, null != t ? (0, p.Oy)(t) : null, n));
}
function C(e) {
    ((0, c._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: f.A.getPopoutInitializationStages() }),
        (0, c.C7)(e));
}
function O(e) {
    ((0, c._r)(e, "successfully_shown", { popoutInitializationStages: f.A.getPopoutInitializationStages() }),
        (0, c.oW)(e));
}
function R(e) {
    ((0, c._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: f.A.getPopoutInitializationStages(),
    }),
        (0, c.i0)(e));
}
class L {
    static instance = null;
    module = null;
    modulePromise = null;
    isCrashedDisabled = !1;
    lastAssociatedPID = null;
    trackedGamePids = new Set();
    static getInstance() {
        return (null == this.instance && (this.instance = new L()), this.instance);
    }
    async initialize() {
        return await this.prepareOverlayModule();
    }
    getOverlayModule() {
        if (null == this.module) throw Error("Overlay module not loaded");
        return this.module;
    }
    destroy() {
        ((this.module = null),
            (this.lastAssociatedPID = null),
            (this.trackedGamePids = new Set()),
            S.info("OverlayV3 Native Module destroyed"));
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
        if (!d.O) return void S.error("Attempted to load overlay on an unsupported platform.");
        S.info("Loading Out of Process Overlay Module");
        try {
            var e;
            await A.Ay.ensureModule("discord_desktop_overlay");
            let t = A.Ay.requireModule("discord_desktop_overlay");
            (t.init(),
                t.setHostWindowCallbacks(
                    (e) => this.createOutOfProcessOverlayHostWindow(e),
                    () => this.destroyOutOfProcessOverlayHostWindow(),
                    (e) => this.refreshOutOfProcessOverlayHostWindow(e),
                ),
                (this.module = t),
                (0, c._r)(null, "module_loaded"),
                (0, l.setOutOfProcessSupport)(!0),
                (e = this.module),
                e.setFocusCallback?.(N),
                e.setFocusLostCallback?.(C),
                e.setSuccessfullyShownCallback?.(O),
                e.setOnWindowHandleInitializedCallback?.(R),
                (0, c._r)(null, "native_module_callbacks_setup"),
                S.verbose("Native module callbacks setup"),
                (0, c.Mi)(),
                S.info("OverlayV3 Module Loaded"));
        } catch (e) {
            throw (
                S.error("failed loading overlay module", e),
                (0, l.setOutOfProcessSupport)(!1),
                (0, c.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        (S.verbose(`Creating OOP Host Window for pid ${e}`), (0, c.wX)(e));
        let t = null;
        try {
            ((0, c._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: f.A.getPopoutInitializationStages(),
            }),
                await (0, T.H)(),
                (t = await this.openOverlayPopout()),
                await (0, c.hJ)(e),
                (0, c._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: f.A.getPopoutInitializationStages(),
                }));
        } catch (t) {
            (S.error("Error creating OOP host window:", t),
                (0, c._r)(e, "host_window_mounting_failed", { error: t }, h.QJ.Error));
        }
        try {
            u.A?.window?.setBackgroundThrottling(!1);
        } catch (t) {
            (S.error("Error setting background throttling:", t),
                (0, c._r)(e, "background_throttling_setting_failed", { error: t }, h.QJ.Error));
        }
        let n = null;
        try {
            ((n = await this.getNativeWindowHandleWithRetry()),
                I.A.resetWindowState(),
                (0, c._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: f.A.getPopoutInitializationStages(),
                }),
                await (0, c.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, c.i0)(!0)));
        } catch (t) {
            (S.error("Error getting native window handle:", t),
                (0, c.lo)(e, t, n),
                (0, c._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: f.A.getPopoutInitializationStages(),
                    },
                    h.QJ.Error,
                ));
        }
        return (
            null == n
                ? (0, c.mD)(e, Error("Native window handle not found"), { crashType: "native", isCrashedDisabled: !0 })
                : (this.lastAssociatedPID = e),
            n ?? ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        (S.verbose("Destroying OOP host window"), (0, c._r)(this.lastAssociatedPID, "host_window_destroyed"));
        try {
            (u.A?.window?.close(g.f), u.A?.window?.setBackgroundThrottling(!0), I.A.resetWindowState(!1));
        } catch (e) {
            S.error("Error closing overlay window:", e);
        }
        ((0, c.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null));
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        (S.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, c._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: f.A.getPopoutInitializationStages(),
            }),
            (0, c.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e));
    }
    async openOverlayPopout() {
        return (await (0, m.o)(), await this.getWindowWithRetry());
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
                let e = E.A.getWindow(g.f);
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
                let e = await u.A?.window?.getNativeHandle(g.f);
                return null != e ? (0, p.Oy)(e) : null;
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
        (this.module?.setRenderingWindowHandle?.(e), S.verbose(`Setting rendering window handle for pid ${t}: ${e}`));
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        (this.module?.setLimitedInteraction?.(e), A.Ay.setFocusable(g.f, !e));
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
        (this.module.untrackGame(e), this.trackedGamePids.delete(e));
        let t = this.trackedGamePids.values().next().value;
        (this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, c.Lt)(e));
    }
}
let y = new r.Vy("OverlayV3NativeModuleStore"),
    D = !1,
    v = !1,
    b = null,
    M = !1,
    P = null,
    U = null,
    w = (() => {
        async function e() {
            (x(), (b = L.getInstance()));
            try {
                (await b.initialize(), (D = !0));
            } catch (e) {
                ((0, c._r)(null, "module_initialization_failed", { error: e }),
                    (D = !1),
                    (0, c.mD)(l.UNSET_PID, e, { crashType: "native" }));
            } finally {
                F.emitChange();
            }
        }
        return () => (null == U && (U = e()), U);
    })();
function G(e) {
    __OVERLAY__ || !d.O || (v !== e && ((v = e), e && (0, l.setOutOfProcessSupport)(!0)));
}
function x() {
    !__OVERLAY__ && d.O && ((P = null), (M = !1), y.verbose("Maybe Enable Overlay"), G(o.x.oopEnabled));
}
class k extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(s.A);
    }
    get isModuleLoading() {
        return null != U;
    }
    get isOverlayEnabled() {
        return v;
    }
    get isSupported() {
        return d.O;
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
        return b;
    }
}
let F = new k(
        a.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return (w(), !1);
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: x,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      ((P = null), G(t));
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return ((P = null), w(), !1);
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return (!0 === t && (M = !0), null != n && (P = n instanceof Error ? n.message : String(n)), !0);
                  },
              },
    ),
    B = F;
