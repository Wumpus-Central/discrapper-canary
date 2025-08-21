n.d(t, {
    A8: () => w,
    Il: () => D,
    ZP: () => e$,
}),
    n(388685),
    n(415506);
var r,
    i = n(442837),
    a = n(570140),
    o = n(13245),
    s = n(579806),
    l = n(710845),
    c = n(353926),
    u = n(594190),
    d = n(928518),
    f = n(314897),
    _ = n(355863),
    p = n(626135),
    h = n(998502),
    m = n(145597),
    g = n(427860),
    E = n(41534),
    b = n(454991),
    y = n(837268),
    O = n(32300),
    v = n(503522),
    I = n(829907),
    T = n(398269),
    S = n(987650),
    A = n(757744),
    C = n(501787),
    N = n(981631);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
let w = "repaint-complete",
    D = "request-repaint";
class x {
    constructor() {
        R(this, "gpuBoostRequests", new Set()),
            R(this, "isGPUBoosted", !1),
            R(this, "isDisabledGPUBoost", !1),
            R(this, "toggleGPUBoost", (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            R(this, "toggleDisabledGPUBoost", (e) => {
                (this.isDisabledGPUBoost = e), this.flushGPUBoostRequests();
            }),
            R(this, "resetGPUBoosts", () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            R(this, "shouldBoostGPU", () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            R(this, "flushGPUBoostRequests", async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === s.Z ||
                    void 0 === s.Z ||
                    null == (t = s.Z.processUtils) ||
                    null == (e = t.getGpuProcessId)
                        ? void 0
                        : e.call(t));
                    if (null == r) return;
                    h.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eJ.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        L.error("Error during GPU boost request flush:", e),
                        eo(null != H ? H : m.UNSET_PID, e);
                }
            });
    }
}
let L = new l.Z("OverlayStoreV3");
function j(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.l6.Info;
    g.JC.addModuleBreadcrumb(t, null != n ? n : {}, g.C7.OOPModule, e, r), eJ.emitChange();
}
let M = new Set(),
    k = new Set(),
    U = {},
    G = new x(),
    B = new Set(),
    Z = null,
    V = !1,
    F = null,
    H = null,
    Y = null,
    W = null,
    K = {},
    z = {},
    q = !1,
    X = y.R5.UNSET,
    Q = null,
    J = 30000;
class $ {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            }));
            j(H, "capture_zones_set", { capture_zones: t }), null == Z || Z.setCaptureZones(t);
        } catch (e) {
            L.error("Error setting capture zones:", e), eo(null != H ? H : m.UNSET_PID, e);
        }
    }
    getClickZoneByTimerId(e) {
        return Object.keys(this.clickZoneTimers).filter((t) => this.clickZoneTimers[t] === e);
    }
    hasStoredClickZones() {
        return this.focusLostStoredClickZones.length > 0 && 0 === this.clickZones.length;
    }
    triggerClickZoneTimer(e) {
        let t = this.getClickZoneByTimerId(e);
        for (let n of (null != e && clearTimeout(e), t)) delete this.clickZoneTimers[n];
        let n = this.focusLostStoredClickZones.filter((e) => !t.includes(e.name));
        this.hasStoredClickZones() || ((this.clickZones = n), this._setCaptureZones(n)),
            (this.focusLostStoredClickZones = [...n]);
    }
    setClickZones(e) {
        if (!V) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, J),
                n = e.map((e) => {
                    let n = {
                        name: e.name,
                        left: e.left,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                    };
                    return (this.clickZoneTimers[e.name] = t), n;
                });
            null == Z || Z.setCaptureZones(n);
        } catch (e) {
            L.error("Error setting capture zones:", e), eo(null != H ? H : m.UNSET_PID, e);
        }
    }
    clearClickZones() {
        for (let e of Object.values(this.clickZoneTimers)) null != e && clearTimeout(e);
        (this.clickZoneTimers = {}),
            (this.clickZones = []),
            (this.focusLostStoredClickZones = []),
            this._setCaptureZones([]);
    }
    storeClickZones() {
        0 !== this.clickZones.length &&
            ((this.focusLostStoredClickZones = [...this.clickZones]),
            (this.clickZones = []),
            this._setCaptureZones([]));
    }
    refreshClickZones() {
        this.clickZones.length > 0 ||
            ((this.clickZones = [...this.focusLostStoredClickZones]), this._setCaptureZones(this.clickZones));
    }
    constructor() {
        R(this, "clickZones", []), R(this, "focusLostStoredClickZones", []), R(this, "clickZoneTimers", {});
    }
}
let ee = new $(),
    et = new Set();
function en(e) {
    var t;
    return null != (t = U[e]) ? t : {};
}
function er(e, t) {
    var n, r;
    let i = null == (n = U[e]) ? void 0 : n.error,
        a = null == (r = U[e]) ? void 0 : r.error_description;
    (U[e] = P({}, U[e], t)), null != i && (U[e].error = i), null != a && (U[e].error_description = a);
}
function ei(e) {
    var t, n, r;
    if (null != U[e]) return;
    let i = u.ZP.getGameOrTransformedSubgameForPID(e);
    U[e] = {
        overlay_method: y.gl[null != (t = z[e]) ? t : y.gl.OutOfProcess],
        success: !1,
        game_name: null != (n = null == i ? void 0 : i.name) ? n : null,
        game_id: null != (r = null == i ? void 0 : i.id) ? r : null,
        error: null,
        error_description: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0,
    };
}
function ea(e, t) {
    let n = u.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function eo(e, t) {
    var n;
    e !== m.UNSET_PID &&
        (er(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, E.V6)(t, z[e], { extra: ea(e, "host") }),
        g.JC.addModuleBreadcrumb(
            "host_crash",
            {
                error: t.message,
                error_description: null != (n = t.stack) ? n : "",
            },
            g.C7.NativeOOP,
            e,
            g.l6.Error,
        ),
        ee.clearClickZones(),
        eJ.emitChange());
}
function es(e, t) {
    var n;
    e !== m.UNSET_PID &&
        (er(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, E.V6)(t, z[e], { extra: ea(e, "renderer") }),
        g.JC.addModuleBreadcrumb(
            "renderer_crash",
            {
                error: t.message,
                error_description: null != (n = t.stack) ? n : "",
            },
            g.C7.OOPModule,
            e,
            g.l6.Error,
        ),
        ee.clearClickZones(),
        eJ.emitChange());
}
function el(e, t) {
    try {
        if ((null != t && (z[e] = t), null == Z || Z.trackGame(e), ei(e), M.has(e))) return;
        M.add(e),
            j(e, "game_tracked", { newOverlayMethod: null != t ? y.gl[t] : null }),
            o.Z.updateOverlayState(e, y.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        L.error("Error tracking game:", t), eo(e, t);
    }
}
function ec(e) {
    try {
        null == Z || Z.untrackGame(e),
            M.delete(e),
            delete K[e],
            delete z[e],
            B.delete(e),
            L.verbose("Removing tracked game ".concat(e));
    } catch (t) {
        L.error("Error removing tracked game:", t), eo(e, t);
    }
}
function eu() {
    try {
        for (let e of M) null == Z || Z.untrackGame(e);
        M.clear(), (K = {}), (z = {}), B.clear(), L.verbose("Cleared all tracked games");
    } catch (e) {
        L.error("Error clearing tracked games:", e), eo(m.UNSET_PID, e);
    }
}
function ed() {
    return (0, O.NW)("overlay_store_v3", !1);
}
function ef() {
    if (!V) return void eu();
    let e = new Set(
        u.ZP.getRunningGames()
            .filter((e) => u.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...M].filter((t) => !e.has(t)))) ec(t);
    for (let e of M) el(e);
}
function e_(e) {
    if (null == Z) return void L.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        Z.setInteractionEnabled(t), G.toggleGPUBoost(y.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        L.error("Error during overlay lock:", e), eo(null != H ? H : m.UNSET_PID, e);
    }
}
function ep(e) {
    let t = u.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != H ? H : m.UNSET_PID, e, t);
}
async function eh() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    for (let i = 0; i < t; i++) {
        let a = i + 1 >= t;
        try {
            var n, r;
            let e =
                null !=
                (r = await (null === s.Z || void 0 === s.Z || null == (n = s.Z.window)
                    ? void 0
                    : n.getNativeHandle(C.$J)))
                    ? r
                    : "";
            if ("" !== e) return e;
        } catch (e) {
            if (a) throw e;
            L.error("Error getting native window handle, retrying...", e);
        }
        if (a) {
            L.error("Failed to get native window handle, giving up");
            break;
        }
        L.info("Failed to get window handle on attempt ".concat(i + 1, " of ").concat(t));
        let o = Math.pow(2, i + 1) * e;
        await new Promise((e) => setTimeout(e, o));
    }
    return null;
}
async function em(e) {
    L.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        er(e, n), (Y = null), j(e, "renderer_window_mounting_started", n), await (0, T.f)(X);
        let r = {
            renderer_started: !0,
            fullscreen_type: await (0, I.hj)(e, 0),
            graphics_info_after: new Date().getTime() - t,
        };
        er(e, r),
            j(e, "renderer_window_mounted", r),
            s.Z.window.setBackgroundThrottling(!1),
            h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                G.toggleGPUBoost(y.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            G.toggleGPUBoost(y.zS.OVERLAY_RENDERING, !0),
            ep(e),
            (H = e),
            (0, m.setPID)(e),
            L.info("Getting Native Handle for pid", e);
        let i = await eh();
        if (null == i)
            return (
                L.error("Failed to get native handle for pid", e),
                eo(e, Error("Failed to get native handle for pid")),
                ""
            );
        L.info("Native Handle for pid ".concat(e, ":"), i), o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING);
        let a = { renderer_started_after: new Date().getTime() - t };
        return j(e, "renderer_started", a), er(e, a), eN(!1), v.Z.resetWindowState(), i;
    } catch (t) {
        L.error("failed to create out of process overlay host window", t),
            es(e, t),
            o.Z.updateOverlayState(e, y.mM.OVERLAY_CRASHED_DISABLED);
    }
    return eE(e), "";
}
function eg() {
    L.verbose("Destroying OOP host window"), G.resetGPUBoosts();
    try {
        var e;
        null === s.Z || void 0 === s.Z || null == (e = s.Z.window) || e.close(C.$J);
    } catch (e) {
        L.error("Error destroying overlay window:", e), eo(null != H ? H : m.UNSET_PID, e);
    }
    try {
        s.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        L.error("Error setting background throttling:", e), eo(null != H ? H : m.UNSET_PID, e);
    }
    eT(),
        k.clear(),
        v.Z.resetWindowState(!1),
        null != H && eE(H),
        (H = null),
        (0, m.setPID)(null != H ? H : m.UNSET_PID);
}
function eE(e) {
    p.default.track(N.rMx.OVERLAY_HOOK_RESULT, en(e));
}
function eb(e) {
    try {
        L.verbose("Refreshing OOP host window for pid ".concat(e)),
            j(e, "renderer_window_refreshing_started"),
            ep(e),
            k.delete(null != H ? H : m.UNSET_PID),
            (H = e),
            (0, m.setPID)(null != H ? H : m.UNSET_PID);
        let t = d.Z.getWindow(C.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === w && (window.removeEventListener("message", n), e());
                    };
                    window.addEventListener("message", n),
                        null == t || t.postMessage(D, "*"),
                        setTimeout(() => {
                            let e = new MessageEvent("message", { data: w });
                            n(e);
                        }, 100);
                }),
            r = 0,
            i = () => {
                15 === r
                    ? (ee.clearClickZones(),
                      j(e, "renderer_window_refreshing_finished"),
                      null == Z || Z.readyToShow(e),
                      o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING),
                      L.verbose("Showing overlay v3 for pid ".concat(e)))
                    : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        L.error("failed to refresh out of process overlay host window", e), eo(null != H ? H : m.UNSET_PID, e);
    }
}
function ey(e, t, n, r) {
    let i = d.Z.getWindow(C.$J);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        o = Math.ceil(r * i.innerHeight),
        s = new MouseEvent(t, {
            screenX: a,
            screenY: o,
            clientX: a,
            clientY: o,
            bubbles: !0,
            view: i,
        }),
        l = i.document.elementFromPoint(a, o);
    if (null == l) throw Error("No node found at point");
    l.dispatchEvent(s);
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? ee.storeClickZones() : ee.refreshClickZones(),
        e !== F &&
            j(e, "renderer_window_focus_flushed", {
                focusedPID: F,
                isUntracked: t,
            }),
        null != e)
    ) {
        let t = z[e] === y.gl.OutOfProcessLimitedInteraction;
        if (t !== Y) {
            Y = t;
            try {
                "function" == typeof (null == Z ? void 0 : Z.setLimitedInteraction)
                    ? (L.info("Setting limited interaction", t),
                      j(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      Z.setLimitedInteraction(t),
                      h.ZP.setFocusable(C.$J, !t))
                    : L.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                L.error("Error setting limited interaction mode:", t), eo(e, t);
            }
        }
    }
    o.Z.setFocusedPID(0 === e ? null : e, t);
}
function ev(e) {
    eO(e), eJ.emitChange(), e !== F && L.info("OverlayStore: Focused new PID", e);
}
function eI(e) {
    eT(), eJ.emitChange();
}
function eT() {
    eO(null, !0), eJ.emitChange();
}
function eS(e) {
    return (F = e.pid), !0;
}
function eA(e) {
    j(e, "_successfullyShownCallback"), o.Z.successfullyShown(e, !0), o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING);
    let t = en(e).mounting_started_at;
    er(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        eJ.emitChange();
}
let eC = (() => {
    let e = null;
    async function t() {
        if (!S.iP) return void L.error("Attempted to load overlay on an unsupported platform.");
        L.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n;
            await h.ZP.ensureModule("discord_desktop_overlay");
            let r = h.ZP.requireModule("discord_desktop_overlay");
            null == r || null == (e = r.init) || e.call(r),
                r.setCaptureZoneCallback(ey),
                r.setHostWindowCallbacks(em, eg, eb),
                r.setFocusCallback(ev),
                null == (t = r.setFocusLostCallback) || t.call(r, eI),
                null == (n = r.setSuccessfullyShownCallback) || n.call(r, eA),
                (Z = r),
                (0, m.setOutOfProcessSupport)(!0),
                ef(),
                L.info("OverlayV3 Module Loaded"),
                j((0, m.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (L.error("failed loading overlay module", e),
                (0, m.setOutOfProcessSupport)(!1),
                (0, E.V6)(e, y.gl.OutOfProcess, { extra: ea(null != H ? H : m.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eN(e) {
    j((0, m.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == Z || Z.setInteractionEnabled(e);
}
function eR(e) {
    if (S.iP && ((V = e), null == Z && ed())) return void eC();
}
function eP(e) {}
function ew(e) {}
function eD(e) {}
async function ex(e) {
    e.overlayMethod === y.gl.OutOfProcess || e.overlayMethod === y.gl.OutOfProcessLimitedInteraction
        ? (null == Z && (await eC()), el(e.pid, e.overlayMethod))
        : ec(e.pid),
        eJ.emitChange();
}
function eL(e) {
    L.verbose("Updating OverlayMethod", e), ex(e);
}
function ej(e) {
    let { pid: t, error: n } = e;
    M.has(t) && es(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function eM(e) {
    G.toggleGPUBoost(e.reason, e.enabled);
}
function ek() {
    L.verbose("Maybe Enable Overlay"),
        ed() ? (eR(b.v.oopEnabled), (0, m.setOutOfProcessSupport)(!0), eC()) : V && eR(!1);
}
function eU(e) {
    let { oopEnabled: t } = e;
    eR(t);
}
function eG(e) {
    let { zones: t } = e;
    ee.setClickZones(t);
}
function eB(e) {
    K[e.pid] = e.overlayState;
}
function eZ(e) {
    let { locked: t, pid: n } = e,
        r = K[n];
    if (t || r !== y.mM.OVERLAY_CRASHED_DISABLED) {
        if (
            (j(n, "setInputLocked called", { locked: t }),
            t ? k.delete(n) : k.add(n),
            null != W && (clearTimeout(W), (W = null), t))
        )
            return;
        t
            ? e_(t)
            : (W = setTimeout(() => {
                  e_(t), (W = null);
              }, 100));
    }
}
function eV(e) {
    let { region: t } = e;
    e_(!1);
}
function eF() {
    e_(!0);
}
function eH(e) {
    let { enabled: t, mode: n } = e;
    t ? et.add(n) : et.delete(n),
        n === y.GO.DisabledGPUBoost && G.toggleDisabledGPUBoost(t),
        n === y.GO.ForceGPUBoost && G.toggleGPUBoost(y.zS.DEV_FORCED_GPU_BOOST, t);
}
function eY() {
    c.Z.hasLoadedExperiments && !q && ((q = !0), ek());
}
function eW() {
    q = !1;
}
function eK(e) {
    let { mode: t } = e;
    X = t;
}
let ez = 3000;
function eq(e) {
    let { enabled: t } = e;
    t
        ? (Q = setInterval(() => {
              null == Z ||
                  Z.getBreadcrumbs({ minBreadcrumbId: g.JC.getLatestBreadcrumbId() }, (e) => {
                      let { breadcrumbs: t } = e;
                      for (let e of t) g.JC.addNativeBreadcrumb(e, g.C7.NativeOOP, (0, m.getPID)());
                      eJ.emitChange();
                  });
          }, ez))
        : clearInterval(Q);
}
function eX(e) {
    let { pid: t, isFromNative: n } = e;
    if (!n) return !1;
    B.add(t);
}
class eQ extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, f.default, c.Z), this.syncWith([c.Z], eY);
    }
    DEV_getOverlayLoggingBreadcrumbs(e) {
        return g.JC.getBreadcrumbs(e);
    }
    DEV_isOverlayModuleLoggingEnabled() {
        return null != Q;
    }
    isInputLocked(e) {
        return !k.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return ed();
    }
    isOverlayV3EnabledForPID(e) {
        return M.has(e);
    }
    getWidgetByType(e) {
        let t = _.Z.getLayout(A.$S);
        if (null != t) {
            let r = t.widgets.find((t) => {
                let n = _.Z.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != r) {
                var n;
                return null != (n = _.Z.getWidget(r)) ? n : null;
            }
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    get enabled() {
        return V;
    }
    hasRenderDebugMode(e) {
        return et.has(e);
    }
    getFocusedPID() {
        return F;
    }
    isFocused(e) {
        return null != F && e !== m.UNSET_PID && (!!M.has(e) || e === m.DEV_PID) && F === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == F ? null : null != (e = u.ZP.getGameOrTransformedSubgameForPID(F)) ? e : null;
    }
    isReady(e) {
        return M.has(e);
    }
    isGPUBoosted() {
        return G.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = K[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = z[e]) ? t : null;
    }
    isOverlaySuccessfullyShown(e) {
        return B.has(e);
    }
}
R(eQ, "displayName", "OverlayStore-v3");
let eJ = new eQ(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: eW,
                  LOGOUT: eW,
                  EXPERIMENT_OVERRIDE_BUCKET: ek,
                  OVERLAY_SET_ENABLED: eU,
                  GAME_LAUNCH_SUCCESS: eP,
                  RUNNING_GAMES_CHANGE: ew,
                  RUNNING_GAME_TOGGLE_OVERLAY: eD,
                  OVERLAY_FORCE_RENDER_MODE: eK,
                  OVERLAY_SET_CLICK_ZONES: eG,
                  OVERLAY_SET_INPUT_LOCKED: eZ,
                  OVERLAY_ACTIVATE_REGION: eV,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eF,
                  OVERLAY_RENDER_DEBUG_MODE: eH,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eL,
                  OVERLAY_UPDATE_OVERLAY_STATE: eB,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eM,
                  OVERLAY_CRASHED: ej,
                  OVERLAY_FOCUSED: eS,
                  OVERLAY_SET_MODULE_LOGGING: eq,
                  OVERLAY_SUCCESSFULLY_SHOWN: eX,
              },
    ),
    e$ = eJ;
