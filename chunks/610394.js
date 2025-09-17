n.d(t, {
    A8: () => w,
    Il: () => D,
    ZP: () => e1,
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
                    h.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), e0.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        L.error("Error during GPU boost request flush:", e),
                        el(null != H ? H : m.UNSET_PID, e);
                }
            });
    }
}
let L = new l.Z("OverlayStoreV3");
function j(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.l6.Info;
    g.JC.addModuleBreadcrumb(t, null != n ? n : {}, g.C7.OOPModule, e, r), e0.emitChange();
}
let M = new Set(),
    k = new Set(),
    U = {},
    G = new x(),
    B = new Set(),
    Z = null,
    F = !1,
    V = null,
    H = null,
    Y = null,
    W = null,
    K = {},
    z = {},
    q = !1,
    X = y.R5.UNSET,
    Q = null,
    J = !1,
    $ = !1,
    ee = 30000;
class et {
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
            L.error("Error setting capture zones:", e), el(null != H ? H : m.UNSET_PID, e);
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
        if (!F) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, ee),
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
            L.error("Error setting capture zones:", e), el(null != H ? H : m.UNSET_PID, e);
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
let en = new et(),
    er = new Set();
function ei(e) {
    var t;
    return null != (t = U[e]) ? t : {};
}
function ea(e, t) {
    var n, r;
    let i = null == (n = U[e]) ? void 0 : n.error,
        a = null == (r = U[e]) ? void 0 : r.error_description;
    (U[e] = P({}, U[e], t)), null != i && (U[e].error = i), null != a && (U[e].error_description = a);
}
function eo(e) {
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
function es(e, t) {
    let n = u.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function el(e, t) {
    var n;
    e !== m.UNSET_PID &&
        (ea(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, E.V6)(t, z[e], { extra: es(e, "host") }),
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
        en.clearClickZones(),
        e0.emitChange());
}
function ec(e, t) {
    var n;
    e !== m.UNSET_PID &&
        (ea(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, E.V6)(t, z[e], { extra: es(e, "renderer") }),
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
        en.clearClickZones(),
        e0.emitChange());
}
function eu(e, t) {
    try {
        if ((null != t && (z[e] = t), null == Z || Z.trackGame(e), eo(e), M.has(e))) return;
        M.add(e),
            j(e, "game_tracked", { newOverlayMethod: null != t ? y.gl[t] : null }),
            o.Z.updateOverlayState(e, y.mM.WAITING_FOR_POPOUT_OPEN);
    } catch (t) {
        L.error("Error tracking game:", t), el(e, t);
    }
}
function ed(e) {
    try {
        null == Z || Z.untrackGame(e),
            M.delete(e),
            delete K[e],
            delete z[e],
            L.verbose("Removing tracked game ".concat(e)),
            B.delete(e);
    } catch (t) {
        L.error("Error removing tracked game:", t), el(e, t);
    }
}
function ef() {
    try {
        for (let e of M) null == Z || Z.untrackGame(e);
        M.clear(), (K = {}), (z = {}), B.clear(), L.verbose("Cleared all tracked games");
    } catch (e) {
        L.error("Error clearing tracked games:", e), el(m.UNSET_PID, e);
    }
}
function e_() {
    return (0, O.NW)("overlay_store_v3", !1);
}
function ep() {
    if (!F) return void ef();
    let e = new Set(
        u.ZP.getRunningGames()
            .filter((e) => u.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...M].filter((t) => !e.has(t)))) ed(t);
    for (let e of M) eu(e);
}
function eh(e) {
    if (null == Z) return void L.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        Z.setInteractionEnabled(t), G.toggleGPUBoost(y.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        L.error("Error during overlay lock:", e), el(null != H ? H : m.UNSET_PID, e);
    }
}
function em(e) {
    let t = u.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != H ? H : m.UNSET_PID, e, t);
}
async function eg() {
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
async function eE(e) {
    L.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        ea(e, n), ($ = !1), (Y = null), j(e, "renderer_window_mounting_started", n), await (0, T.f)(X);
        let r = {
            renderer_started: !0,
            fullscreen_type: await (0, I.hj)(e, 0),
            graphics_info_after: new Date().getTime() - t,
        };
        ea(e, r),
            j(e, "renderer_window_mounted", r),
            s.Z.window.setBackgroundThrottling(!1),
            h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                G.toggleGPUBoost(y.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            G.toggleGPUBoost(y.zS.OVERLAY_RENDERING, !0),
            em(e),
            (H = e),
            (0, m.setPID)(e),
            L.info("Getting Native Handle for pid", e);
        let i = await eg();
        if (null == i)
            return (
                L.error("Failed to get native handle for pid", e),
                el(e, Error("Failed to get native handle for pid")),
                ""
            );
        L.info("Native Handle for pid ".concat(e, ":"), i),
            o.Z.updateOverlayState(e, y.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
        let a = { renderer_started_after: new Date().getTime() - t };
        return (
            j(e, "renderer_started", a),
            ea(e, a),
            eL(!1),
            v.Z.resetWindowState(),
            (null == Z ? void 0 : Z.setOnWindowHandleInitializedCallback) == null && eD(!0),
            i
        );
    } catch (t) {
        L.error("failed to create out of process overlay host window", t),
            ec(e, t),
            o.Z.updateOverlayState(e, y.mM.OVERLAY_CRASHED_DISABLED);
    }
    return ey(e), "";
}
function eb() {
    L.verbose("Destroying OOP host window"), G.resetGPUBoosts();
    try {
        var e;
        null === s.Z || void 0 === s.Z || null == (e = s.Z.window) || e.close(C.$J);
    } catch (e) {
        L.error("Error destroying overlay window:", e), el(null != H ? H : m.UNSET_PID, e);
    }
    try {
        s.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        L.error("Error setting background throttling:", e), el(null != H ? H : m.UNSET_PID, e);
    }
    eA(),
        k.clear(),
        v.Z.resetWindowState(!1),
        null != H && ey(H),
        (H = null),
        (0, m.setPID)(null != H ? H : m.UNSET_PID),
        ($ = !1),
        (null == Z ? void 0 : Z.setOnWindowHandleInitializedCallback) == null && eD(!1);
}
function ey(e) {
    p.default.track(N.rMx.OVERLAY_HOOK_RESULT, ei(e));
}
function eO(e) {
    try {
        L.verbose("Refreshing OOP host window for pid ".concat(e)),
            j(e, "renderer_window_refreshing_started"),
            em(e),
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
                    ? (en.clearClickZones(),
                      j(e, "renderer_window_refreshing_finished"),
                      null == Z || Z.readyToShow(e),
                      o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING),
                      L.verbose("Showing overlay v3 for pid ".concat(e)))
                    : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        L.error("failed to refresh out of process overlay host window", e), el(null != H ? H : m.UNSET_PID, e);
    }
}
function ev(e, t, n, r) {
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
function eI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? en.storeClickZones() : en.refreshClickZones(),
        e !== V &&
            j(e, "renderer_window_focus_flushed", {
                focusedPID: V,
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
                L.error("Error setting limited interaction mode:", t), el(e, t);
            }
        }
    }
    o.Z.setFocusedPID(0 === e ? null : e, t);
}
function eT(e) {
    eI(e), e0.emitChange(), e !== V && L.info("OverlayStore: Focused new PID", e);
}
function eS(e) {
    eA(), e0.emitChange();
}
function eA() {
    eI(null, !0), e0.emitChange();
}
function eC(e) {
    return (V = e.pid), !0;
}
function eN(e) {
    if (!B.has(e) || !$) return;
    let t = ei(e).mounting_started_at;
    ea(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        o.Z.successfullyShown(e);
}
function eR() {
    var e;
    return null == Z || null == (e = Z.onPopoutShowInactive) || e.call(Z), !1;
}
function eP() {
    ($ = !0),
        B.forEach((e) => {
            eN(e);
        });
}
function ew(e) {
    j(e, "_successfullyShownCallback"), B.add(e), eN(e);
}
function eD(e) {
    (J = e), e && o.Z.updateOverlayState((0, m.getPID)(), y.mM.WAITING_FOR_REACT_INITIALIZATION), e0.emitChange();
}
let ex = (() => {
    let e = null;
    async function t() {
        if (!S.iP) return void L.error("Attempted to load overlay on an unsupported platform.");
        L.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n, r;
            await h.ZP.ensureModule("discord_desktop_overlay");
            let i = h.ZP.requireModule("discord_desktop_overlay");
            null == i || null == (e = i.init) || e.call(i),
                i.setCaptureZoneCallback(ev),
                i.setHostWindowCallbacks(eE, eb, eO),
                i.setFocusCallback(eT),
                null == (t = i.setFocusLostCallback) || t.call(i, eS),
                null == (n = i.setSuccessfullyShownCallback) || n.call(i, ew),
                null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eD),
                (Z = i),
                (0, m.setOutOfProcessSupport)(!0),
                ep(),
                L.info("OverlayV3 Module Loaded"),
                j((0, m.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (L.error("failed loading overlay module", e),
                (0, m.setOutOfProcessSupport)(!1),
                (0, E.V6)(e, y.gl.OutOfProcess, { extra: es(null != H ? H : m.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eL(e) {
    j((0, m.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == Z || Z.setInteractionEnabled(e);
}
function ej(e) {
    if (S.iP && ((F = e), null == Z && e_())) return void ex();
}
async function eM(e) {
    e.overlayMethod === y.gl.OutOfProcess || e.overlayMethod === y.gl.OutOfProcessLimitedInteraction
        ? (null == Z && (await ex()), eu(e.pid, e.overlayMethod))
        : ed(e.pid),
        e0.emitChange();
}
function ek(e) {
    L.verbose("Updating OverlayMethod", e), eM(e);
}
function eU(e) {
    let { pid: t, error: n } = e;
    M.has(t) && ec(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function eG(e) {
    G.toggleGPUBoost(e.reason, e.enabled);
}
function eB() {
    L.verbose("Maybe Enable Overlay"),
        e_() ? (ej(b.v.oopEnabled), (0, m.setOutOfProcessSupport)(!0), ex()) : F && ej(!1);
}
function eZ(e) {
    let { oopEnabled: t } = e;
    ej(t);
}
function eF(e) {
    let { zones: t } = e;
    en.setClickZones(t);
}
function eV(e) {
    K[e.pid] = e.overlayState;
}
function eH(e) {
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
            ? eh(t)
            : (W = setTimeout(() => {
                  eh(t), (W = null);
              }, 100));
    }
}
function eY(e) {
    let { region: t } = e;
    eh(!1);
}
function eW() {
    eh(!0);
}
function eK(e) {
    let { enabled: t, mode: n } = e;
    t ? er.add(n) : er.delete(n),
        n === y.GO.DisabledGPUBoost && G.toggleDisabledGPUBoost(t),
        n === y.GO.ForceGPUBoost && G.toggleGPUBoost(y.zS.DEV_FORCED_GPU_BOOST, t);
}
function ez() {
    c.Z.hasLoadedExperiments && !q && ((q = !0), eB());
}
function eq() {
    q = !1;
}
function eX(e) {
    let { mode: t } = e;
    X = t;
}
let eQ = 3000;
function eJ(e) {
    let { enabled: t } = e;
    t
        ? (Q = setInterval(() => {
              null == Z ||
                  Z.getBreadcrumbs({ minBreadcrumbId: g.JC.getLatestBreadcrumbId() }, (e) => {
                      let { breadcrumbs: t } = e;
                      for (let e of t) g.JC.addNativeBreadcrumb(e, g.C7.NativeOOP, (0, m.getPID)());
                      e0.emitChange();
                  });
          }, eQ))
        : clearInterval(Q);
}
class e$ extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, f.default, c.Z), this.syncWith([c.Z], ez);
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
        return e_();
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
        return F;
    }
    hasRenderDebugMode(e) {
        return er.has(e);
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
        return null != (t = K[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = z[e]) ? t : null;
    }
    isWindowHandleInitialized() {
        return J;
    }
}
R(e$, "displayName", "OverlayStore-v3");
let e0 = new e$(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: eq,
                  LOGOUT: eq,
                  EXPERIMENT_OVERRIDE_BUCKET: eB,
                  OVERLAY_SET_ENABLED: eZ,
                  OVERLAY_FORCE_RENDER_MODE: eX,
                  OVERLAY_SET_CLICK_ZONES: eF,
                  OVERLAY_SET_INPUT_LOCKED: eH,
                  OVERLAY_ACTIVATE_REGION: eY,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eW,
                  OVERLAY_RENDER_DEBUG_MODE: eK,
                  OVERLAY_UPDATE_OVERLAY_METHOD: ek,
                  OVERLAY_UPDATE_OVERLAY_STATE: eV,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eG,
                  OVERLAY_CRASHED: eU,
                  OVERLAY_FOCUSED: eC,
                  OVERLAY_SET_MODULE_LOGGING: eJ,
                  OVERLAY_OOP_UI_INITIALIZED: eP,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eR,
              },
    ),
    e1 = e0;
