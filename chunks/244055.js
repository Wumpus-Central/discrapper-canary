n.d(t, { A: () => H });
var i = n(855986),
    r = n(611599),
    a = n(73153),
    s = n(343446),
    l = n(9302),
    o = n(211753),
    d = n(206885),
    c = n(682763),
    u = n(77729),
    _ = n(626584),
    E = n(384077),
    A = n(869146),
    h = n(253400),
    f = n(181435),
    I = n(48345),
    p = n(661886),
    m = n(96175),
    g = n(237984),
    T = n(293432),
    S = n(392164);
let N = new r.Vy("OverlayV3NativeModuleUtils"),
    C = new _.A("OverlayV3NativeModule");
function O(e, t, n) {
    ((0, c._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: p.A.getPopoutInitializationStages(),
    }),
        (0, c.cS)(e, null != t ? (0, m.Oy)(t) : null, n));
}
function R(e) {
    ((0, c._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: p.A.getPopoutInitializationStages() }),
        (0, c.C7)(e));
}
function L(e) {
    ((0, c._r)(e, "successfully_shown", { popoutInitializationStages: p.A.getPopoutInitializationStages() }),
        (0, c.oW)(e));
}
function y(e) {
    ((0, c._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: p.A.getPopoutInitializationStages(),
    }),
        (0, c.i0)(e));
}
class D {
    static instance = null;
    module = null;
    modulePromise = null;
    isCrashedDisabled = !1;
    lastAssociatedPID = null;
    trackedGamePids = new Set();
    static getInstance() {
        return (null == this.instance && (this.instance = new D()), this.instance);
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
            C.info("OverlayV3 Native Module destroyed"));
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
        if (!d.O) return void C.error("Attempted to load overlay on an unsupported platform.");
        C.info("Loading Out of Process Overlay Module");
        try {
            var e;
            await h.Ay.ensureModule("discord_desktop_overlay");
            let t = h.Ay.requireModule("discord_desktop_overlay");
            (t.init(),
                t.setHostWindowCallbacks(
                    (e) => this.createOutOfProcessOverlayHostWindow(e),
                    () => this.destroyOutOfProcessOverlayHostWindow(),
                    (e) => this.refreshOutOfProcessOverlayHostWindow(e),
                ),
                (this.module = t),
                (0, c._r)(null, "module_loaded"),
                (0, l.wJ)(!0),
                (e = this.module),
                e.setFocusCallback?.(O),
                e.setFocusLostCallback?.(R),
                e.setSuccessfullyShownCallback?.(L),
                e.setOnWindowHandleInitializedCallback?.(y),
                (0, c._r)(null, "native_module_callbacks_setup"),
                C.verbose("Native module callbacks setup"),
                (0, c.Mi)(),
                C.info("OverlayV3 Module Loaded"));
        } catch (e) {
            throw (
                C.error("failed loading overlay module", e),
                (0, l.wJ)(!1),
                (0, c.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        (C.verbose(`Creating OOP Host Window for pid ${e}`), (0, c.wX)(e));
        let t = null;
        try {
            ((0, c._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: p.A.getPopoutInitializationStages(),
            }),
                await (async function () {
                    let e;
                    if (null == T.A.getWindow(S.f)) return;
                    N.warn("Waiting for previous overlay popout to be destroyed.");
                    let t = new Promise((e) => {
                        setTimeout(() => {
                            e();
                        }, 5e3);
                    });
                    function n() {
                        null == T.A.getWindow(S.f) && e?.();
                    }
                    let i = new Promise((t) => {
                        ((e = t), T.A.addChangeListener(n));
                    });
                    try {
                        await Promise.race([t, i]);
                    } finally {
                        T.A.removeChangeListener(n);
                    }
                    null != T.A.getWindow(S.f) && N.error("Previous overlay popout was not destroyed after 5 seconds!");
                })(),
                (t = await this.openOverlayPopout()),
                await (0, c.hJ)(e),
                (0, c._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: p.A.getPopoutInitializationStages(),
                }));
        } catch (t) {
            (C.error("Error creating OOP host window:", t),
                (0, c._r)(e, "host_window_mounting_failed", { error: t }, f.QJ.Error));
        }
        if (!(0, E.ZT)("overlay_v3_native_module"))
            try {
                u.A?.window?.setBackgroundThrottling(!1);
            } catch (t) {
                (C.error("Error setting background throttling:", t),
                    (0, c._r)(e, "background_throttling_setting_failed", { error: t }, f.QJ.Error));
            }
        let n = null;
        try {
            ((n = await this.getNativeWindowHandleWithRetry()),
                I.A.resetWindowState(),
                (0, c._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: p.A.getPopoutInitializationStages(),
                }),
                await (0, c.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, c.i0)(!0)));
        } catch (t) {
            (C.error("Error getting native window handle:", t),
                (0, c.lo)(e, t, n),
                (0, c._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: p.A.getPopoutInitializationStages(),
                    },
                    f.QJ.Error,
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
        (C.verbose("Destroying OOP host window"), (0, c._r)(this.lastAssociatedPID, "host_window_destroyed"));
        try {
            (u.A?.window?.close(S.f), u.A?.window?.setBackgroundThrottling(!0), I.A.resetWindowState(!1));
        } catch (e) {
            C.error("Error closing overlay window:", e);
        }
        ((0, c.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null));
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        (C.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, c._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: p.A.getPopoutInitializationStages(),
            }),
            (0, c.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e));
    }
    async openOverlayPopout() {
        return (await (0, g.o)(), await this.getWindowWithRetry());
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
                let e = A.A.getWindow(S.f);
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
                let e = await u.A?.window?.getNativeHandle(S.f);
                return null != e ? (0, m.Oy)(e) : null;
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
        (this.module?.setRenderingWindowHandle?.(e), C.verbose(`Setting rendering window handle for pid ${t}: ${e}`));
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        (this.module?.setLimitedInteraction?.(e), h.Ay.setFocusable(S.f, !e));
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
n(672396);
let b = new r.Vy("OverlayV3NativeModuleStore"),
    v = !1,
    P = !1,
    M = null,
    U = !1,
    w = null,
    G = null,
    x = () => (
        null == G &&
            (G = (async function () {
                (F(), (M = D.getInstance()));
                try {
                    (await M.initialize(), (v = !0));
                } catch (e) {
                    ((0, c._r)(null, "module_initialization_failed", { error: e }),
                        (v = !1),
                        (0, c.mD)(-1, e, { crashType: "native" }));
                } finally {
                    V.emitChange();
                }
            })()),
        G
    );
function k(e) {
    __OVERLAY__ || !d.O || (P !== e && ((P = e), e && (0, l.wJ)(!0)));
}
function F() {
    !__OVERLAY__ && d.O && ((w = null), (U = !1), b.verbose("Maybe Enable Overlay"), k(o.x.oopEnabled));
}
class B extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(s.A);
    }
    get isModuleLoading() {
        return null != G;
    }
    get isOverlayEnabled() {
        return P;
    }
    get isSupported() {
        return d.O;
    }
    get isModuleLoaded() {
        return v;
    }
    get isCrashedDisabled() {
        return U;
    }
    get errorMessage() {
        return w;
    }
    getNativeModule() {
        return M;
    }
}
let V = new B(
        a.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return (x(), !1);
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: F,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      ((w = null), k(t));
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return ((w = null), x(), !1);
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return (!0 === t && (U = !0), null != n && (w = n instanceof Error ? n.message : String(n)), !0);
                  },
              },
    ),
    H = V;
