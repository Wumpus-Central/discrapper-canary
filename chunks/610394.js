n.d(t, {
    A8: () => w,
    Il: () => D,
    ZP: () => eQ,
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
                    h.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eX.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        L.error("Error during GPU boost request flush:", e),
                        ea(null != F ? F : m.UNSET_PID, e);
                }
            });
    }
}
let L = new l.Z("OverlayStoreV3");
function j(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.l6.Info;
    g.JC.addModuleBreadcrumb(t, null != n ? n : {}, g.C7.OOPModule, e, r), eX.emitChange();
}
let M = new Set(),
    k = new Set(),
    U = {},
    G = new x(),
    B = null,
    Z = !1,
    V = null,
    F = null,
    H = null,
    Y = null,
    W = {},
    K = {},
    z = !1,
    q = y.R5.UNSET,
    X = null,
    Q = 30000;
class J {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            }));
            j(F, "capture_zones_set", { capture_zones: t }), null == B || B.setCaptureZones(t);
        } catch (e) {
            L.error("Error setting capture zones:", e), ea(null != F ? F : m.UNSET_PID, e);
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
        if (!Z) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, Q),
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
            null == B || B.setCaptureZones(n);
        } catch (e) {
            L.error("Error setting capture zones:", e), ea(null != F ? F : m.UNSET_PID, e);
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
let $ = new J(),
    ee = new Set();
function et(e) {
    var t;
    return null != (t = U[e]) ? t : {};
}
function en(e, t) {
    var n, r;
    let i = null == (n = U[e]) ? void 0 : n.error,
        a = null == (r = U[e]) ? void 0 : r.error_description;
    (U[e] = P({}, U[e], t)), null != i && (U[e].error = i), null != a && (U[e].error_description = a);
}
function er(e) {
    var t, n, r;
    if (null != U[e]) return;
    let i = u.ZP.getGameOrTransformedSubgameForPID(e);
    U[e] = {
        overlay_method: y.gl[null != (t = K[e]) ? t : y.gl.OutOfProcess],
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
function ei(e, t) {
    let n = u.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function ea(e, t) {
    var n;
    e !== m.UNSET_PID &&
        (en(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, E.V6)(t, K[e], { extra: ei(e, "host") }),
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
        $.clearClickZones(),
        eX.emitChange());
}
function eo(e, t) {
    var n;
    e !== m.UNSET_PID &&
        (en(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, E.V6)(t, K[e], { extra: ei(e, "renderer") }),
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
        $.clearClickZones(),
        eX.emitChange());
}
function es(e, t) {
    try {
        if ((null != t && (K[e] = t), null == B || B.trackGame(e), er(e), M.has(e))) return;
        M.add(e),
            j(e, "game_tracked", { newOverlayMethod: null != t ? y.gl[t] : null }),
            o.Z.updateOverlayState(e, y.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        L.error("Error tracking game:", t), ea(e, t);
    }
}
function el(e) {
    try {
        null == B || B.untrackGame(e),
            M.delete(e),
            delete W[e],
            delete K[e],
            L.verbose("Removing tracked game ".concat(e));
    } catch (t) {
        L.error("Error removing tracked game:", t), ea(e, t);
    }
}
function ec() {
    try {
        for (let e of M) null == B || B.untrackGame(e);
        M.clear(), (W = {}), (K = {}), L.verbose("Cleared all tracked games");
    } catch (e) {
        L.error("Error clearing tracked games:", e), ea(m.UNSET_PID, e);
    }
}
function eu() {
    return (0, O.NW)("overlay_store_v3", !1);
}
function ed() {
    if (!Z) return void ec();
    let e = new Set(
        u.ZP.getRunningGames()
            .filter((e) => u.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...M].filter((t) => !e.has(t)))) el(t);
    for (let e of M) es(e);
}
function ef(e) {
    if (null == B) return void L.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        B.setInteractionEnabled(t), G.toggleGPUBoost(y.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        L.error("Error during overlay lock:", e), ea(null != F ? F : m.UNSET_PID, e);
    }
}
function e_(e) {
    let t = u.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != F ? F : m.UNSET_PID, e, t);
}
async function ep() {
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
async function eh(e) {
    L.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        en(e, n), (H = null), j(e, "renderer_window_mounting_started", n), await (0, T.f)(q);
        let r = {
            renderer_started: !0,
            fullscreen_type: await (0, I.hj)(e, 0),
            graphics_info_after: new Date().getTime() - t,
        };
        en(e, r),
            j(e, "renderer_window_mounted", r),
            s.Z.window.setBackgroundThrottling(!1),
            h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                G.toggleGPUBoost(y.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            G.toggleGPUBoost(y.zS.OVERLAY_RENDERING, !0),
            e_(e),
            (F = e),
            (0, m.setPID)(e),
            L.info("Getting Native Handle for pid", e);
        let i = await ep();
        if (null == i)
            return (
                L.error("Failed to get native handle for pid", e),
                ea(e, Error("Failed to get native handle for pid")),
                ""
            );
        L.info("Native Handle for pid ".concat(e, ":"), i), o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING);
        let a = { renderer_started_after: new Date().getTime() - t };
        return j(e, "renderer_started", a), en(e, a), eC(!1), v.Z.resetWindowState(), i;
    } catch (t) {
        L.error("failed to create out of process overlay host window", t),
            eo(e, t),
            o.Z.updateOverlayState(e, y.mM.OVERLAY_CRASHED_DISABLED);
    }
    return eg(e), "";
}
function em() {
    L.verbose("Destroying OOP host window"), G.resetGPUBoosts();
    try {
        var e;
        null === s.Z || void 0 === s.Z || null == (e = s.Z.window) || e.close(C.$J);
    } catch (e) {
        L.error("Error destroying overlay window:", e), ea(null != F ? F : m.UNSET_PID, e);
    }
    try {
        s.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        L.error("Error setting background throttling:", e), ea(null != F ? F : m.UNSET_PID, e);
    }
    eI(),
        k.clear(),
        v.Z.resetWindowState(!1),
        null != F && eg(F),
        (F = null),
        (0, m.setPID)(null != F ? F : m.UNSET_PID);
}
function eg(e) {
    p.default.track(N.rMx.OVERLAY_HOOK_RESULT, et(e));
}
function eE(e) {
    try {
        L.verbose("Refreshing OOP host window for pid ".concat(e)),
            j(e, "renderer_window_refreshing_started"),
            e_(e),
            k.delete(null != F ? F : m.UNSET_PID),
            (F = e),
            (0, m.setPID)(null != F ? F : m.UNSET_PID);
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
                    ? ($.clearClickZones(),
                      j(e, "renderer_window_refreshing_finished"),
                      null == B || B.readyToShow(e),
                      o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING),
                      L.verbose("Showing overlay v3 for pid ".concat(e)))
                    : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        L.error("failed to refresh out of process overlay host window", e), ea(null != F ? F : m.UNSET_PID, e);
    }
}
function eb(e, t, n, r) {
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
function ey(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? $.storeClickZones() : $.refreshClickZones(),
        e !== V &&
            j(e, "renderer_window_focus_flushed", {
                focusedPID: V,
                isUntracked: t,
            }),
        null != e)
    ) {
        let t = K[e] === y.gl.OutOfProcessLimitedInteraction;
        if (t !== H) {
            H = t;
            try {
                "function" == typeof (null == B ? void 0 : B.setLimitedInteraction)
                    ? (L.info("Setting limited interaction", t),
                      j(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      B.setLimitedInteraction(t),
                      h.ZP.setFocusable(C.$J, !t))
                    : L.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                L.error("Error setting limited interaction mode:", t), ea(e, t);
            }
        }
    }
    o.Z.setFocusedPID(0 === e ? null : e, t);
}
function eO(e) {
    ey(e), eX.emitChange(), e !== V && L.info("OverlayStore: Focused new PID", e);
}
function ev(e) {
    eI(), eX.emitChange();
}
function eI() {
    ey(null, !0), eX.emitChange();
}
function eT(e) {
    return (V = e.pid), !0;
}
function eS(e) {
    j(e, "_successfullyShownCallback"), o.Z.successfullyShown(e), o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING);
    let t = et(e).mounting_started_at;
    en(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        eX.emitChange();
}
let eA = (() => {
    let e = null;
    async function t() {
        if (!S.iP) return void L.error("Attempted to load overlay on an unsupported platform.");
        L.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n;
            await h.ZP.ensureModule("discord_desktop_overlay");
            let r = h.ZP.requireModule("discord_desktop_overlay");
            null == r || null == (e = r.init) || e.call(r),
                r.setCaptureZoneCallback(eb),
                r.setHostWindowCallbacks(eh, em, eE),
                r.setFocusCallback(eO),
                null == (t = r.setFocusLostCallback) || t.call(r, ev),
                null == (n = r.setSuccessfullyShownCallback) || n.call(r, eS),
                (B = r),
                (0, m.setOutOfProcessSupport)(!0),
                ed(),
                L.info("OverlayV3 Module Loaded"),
                j((0, m.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (L.error("failed loading overlay module", e),
                (0, m.setOutOfProcessSupport)(!1),
                (0, E.V6)(e, y.gl.OutOfProcess, { extra: ei(null != F ? F : m.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eC(e) {
    j((0, m.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == B || B.setInteractionEnabled(e);
}
function eN(e) {
    if (S.iP && ((Z = e), null == B && eu())) return void eA();
}
function eR(e) {}
function eP(e) {}
function ew(e) {}
async function eD(e) {
    e.overlayMethod === y.gl.OutOfProcess || e.overlayMethod === y.gl.OutOfProcessLimitedInteraction
        ? (null == B && (await eA()), es(e.pid, e.overlayMethod))
        : el(e.pid),
        eX.emitChange();
}
function ex(e) {
    L.verbose("Updating OverlayMethod", e), eD(e);
}
function eL(e) {
    let { pid: t, error: n } = e;
    M.has(t) && eo(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function ej(e) {
    G.toggleGPUBoost(e.reason, e.enabled);
}
function eM() {
    L.verbose("Maybe Enable Overlay"),
        eu() ? (eN(b.v.oopEnabled), (0, m.setOutOfProcessSupport)(!0), eA()) : Z && eN(!1);
}
function ek(e) {
    let { oopEnabled: t } = e;
    eN(t);
}
function eU(e) {
    let { zones: t } = e;
    $.setClickZones(t);
}
function eG(e) {
    W[e.pid] = e.overlayState;
}
function eB(e) {
    let { locked: t, pid: n } = e,
        r = W[n];
    if (t || r !== y.mM.OVERLAY_CRASHED_DISABLED) {
        if (
            (j(n, "setInputLocked called", { locked: t }),
            t ? k.delete(n) : k.add(n),
            null != Y && (clearTimeout(Y), (Y = null), t))
        )
            return;
        t
            ? ef(t)
            : (Y = setTimeout(() => {
                  ef(t), (Y = null);
              }, 100));
    }
}
function eZ(e) {
    let { region: t } = e;
    ef(!1);
}
function eV() {
    ef(!0);
}
function eF(e) {
    let { enabled: t, mode: n } = e;
    t ? ee.add(n) : ee.delete(n),
        n === y.GO.DisabledGPUBoost && G.toggleDisabledGPUBoost(t),
        n === y.GO.ForceGPUBoost && G.toggleGPUBoost(y.zS.DEV_FORCED_GPU_BOOST, t);
}
function eH() {
    c.Z.hasLoadedExperiments && !z && ((z = !0), eM());
}
function eY() {
    z = !1;
}
function eW(e) {
    let { mode: t } = e;
    q = t;
}
let eK = 3000;
function ez(e) {
    let { enabled: t } = e;
    t
        ? (X = setInterval(() => {
              null == B ||
                  B.getBreadcrumbs({ minBreadcrumbId: g.JC.getLatestBreadcrumbId() }, (e) => {
                      let { breadcrumbs: t } = e;
                      for (let e of t) g.JC.addNativeBreadcrumb(e, g.C7.NativeOOP, (0, m.getPID)());
                      eX.emitChange();
                  });
          }, eK))
        : clearInterval(X);
}
class eq extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, f.default, c.Z), this.syncWith([c.Z], eH);
    }
    DEV_getOverlayLoggingBreadcrumbs(e) {
        return g.JC.getBreadcrumbs(e);
    }
    DEV_isOverlayModuleLoggingEnabled() {
        return null != X;
    }
    isInputLocked(e) {
        return !k.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return eu();
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
        return Z;
    }
    hasRenderDebugMode(e) {
        return ee.has(e);
    }
    getFocusedPID() {
        return V;
    }
    isFocused(e) {
        return null != V && e !== m.UNSET_PID && (!!M.has(e) || e === m.DEV_PID) && V === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == V ? null : null != (e = u.ZP.getGameOrTransformedSubgameForPID(V)) ? e : null;
    }
    isReady(e) {
        return M.has(e);
    }
    isGPUBoosted() {
        return G.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = W[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = K[e]) ? t : null;
    }
}
R(eq, "displayName", "OverlayStore-v3");
let eX = new eq(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: eY,
                  LOGOUT: eY,
                  EXPERIMENT_OVERRIDE_BUCKET: eM,
                  OVERLAY_SET_ENABLED: ek,
                  GAME_LAUNCH_SUCCESS: eR,
                  RUNNING_GAMES_CHANGE: eP,
                  RUNNING_GAME_TOGGLE_OVERLAY: ew,
                  OVERLAY_FORCE_RENDER_MODE: eW,
                  OVERLAY_SET_CLICK_ZONES: eU,
                  OVERLAY_SET_INPUT_LOCKED: eB,
                  OVERLAY_ACTIVATE_REGION: eZ,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eV,
                  OVERLAY_RENDER_DEBUG_MODE: eF,
                  OVERLAY_UPDATE_OVERLAY_METHOD: ex,
                  OVERLAY_UPDATE_OVERLAY_STATE: eG,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: ej,
                  OVERLAY_CRASHED: eL,
                  OVERLAY_FOCUSED: eT,
                  OVERLAY_SET_MODULE_LOGGING: ez,
              },
    ),
    eQ = eX;
