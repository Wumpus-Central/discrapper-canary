let r;
n.d(t, {
    A8: () => L,
    Il: () => j,
    ZP: () => e6,
}),
    n(388685),
    n(415506);
var i,
    a = n(348327),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    c = n(13245),
    u = n(579806),
    d = n(710845),
    f = n(353926),
    _ = n(594190),
    p = n(928518),
    h = n(314897),
    m = n(355863),
    g = n(626135),
    E = n(998502),
    b = n(145597),
    y = n(427860),
    O = n(41534),
    v = n(454991),
    I = n(837268),
    T = n(32300),
    S = n(503522),
    A = n(829907),
    C = n(398269),
    N = n(987650),
    R = n(757744),
    P = n(501787),
    w = n(981631);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
let L = "repaint-complete",
    j = "request-repaint";
class M {
    constructor() {
        D(this, "gpuBoostRequests", new Set()),
            D(this, "isGPUBoosted", !1),
            D(this, "isDisabledGPUBoost", !1),
            D(this, "toggleGPUBoost", (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            D(this, "toggleDisabledGPUBoost", (e) => {
                (this.isDisabledGPUBoost = e), this.flushGPUBoostRequests();
            }),
            D(this, "resetGPUBoosts", () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            D(this, "shouldBoostGPU", () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            D(this, "flushGPUBoostRequests", async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === u.Z ||
                    void 0 === u.Z ||
                    null == (t = u.Z.processUtils) ||
                    null == (e = t.getGpuProcessId)
                        ? void 0
                        : e.call(t));
                    if (null == r) return;
                    E.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), e5.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        k.error("Error during GPU boost request flush:", e),
                        ef(null != K ? K : b.UNSET_PID, e);
                }
            });
    }
}
let k = new d.Z("OverlayStoreV3");
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.l6.Info;
    y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.OOPModule, e, r), e5.emitChange();
}
let G = new Set(),
    B = new Set(),
    Z = {},
    F = new M(),
    V = new Set(),
    H = null,
    Y = !1,
    W = null,
    K = null,
    z = null,
    q = null,
    X = {},
    Q = {},
    J = !1,
    $ = I.R5.UNSET,
    ee = null,
    et = null,
    en = !1,
    er = !1,
    ei = 30000;
class ea {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            }));
            U(K, "capture_zones_set", { capture_zones: t }), null == H || H.setCaptureZones(t);
        } catch (e) {
            k.error("Error setting capture zones:", e), ef(null != K ? K : b.UNSET_PID, e);
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
        if (!Y) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, ei),
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
            null == H || H.setCaptureZones(n);
        } catch (e) {
            k.error("Error setting capture zones:", e), ef(null != K ? K : b.UNSET_PID, e);
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
        D(this, "clickZones", []), D(this, "focusLostStoredClickZones", []), D(this, "clickZoneTimers", {});
    }
}
let eo = new ea(),
    es = new Set();
function el(e) {
    var t;
    return null != (t = Z[e]) ? t : {};
}
function ec(e, t) {
    var n, r;
    let i = null == (n = Z[e]) ? void 0 : n.error,
        a = null == (r = Z[e]) ? void 0 : r.error_description;
    (Z[e] = x({}, Z[e], t)), null != i && (Z[e].error = i), null != a && (Z[e].error_description = a);
}
function eu(e) {
    var t, n, r;
    if (null != Z[e]) return;
    let i = _.ZP.getGameOrTransformedSubgameForPID(e);
    Z[e] = {
        overlay_method: I.gl[null != (t = Q[e]) ? t : I.gl.OutOfProcess],
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
function ed(e, t) {
    let n = _.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function ef(e, t) {
    var n;
    e !== b.UNSET_PID &&
        (ec(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, O.V6)(t, Q[e], { extra: ed(e, "host") }),
        y.JC.addModuleBreadcrumb(
            "host_crash",
            {
                error: t.message,
                error_description: null != (n = t.stack) ? n : "",
            },
            y.C7.NativeOOP,
            e,
            y.l6.Error,
        ),
        eo.clearClickZones(),
        e5.emitChange());
}
function e_(e, t) {
    var n;
    e !== b.UNSET_PID &&
        (ec(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, O.V6)(t, Q[e], { extra: ed(e, "renderer") }),
        y.JC.addModuleBreadcrumb(
            "renderer_crash",
            {
                error: t.message,
                error_description: null != (n = t.stack) ? n : "",
            },
            y.C7.OOPModule,
            e,
            y.l6.Error,
        ),
        eo.clearClickZones(),
        e5.emitChange());
}
function ep(e, t) {
    try {
        if ((null != t && (Q[e] = t), null == H || H.trackGame(e), eu(e), G.has(e))) return;
        G.add(e),
            U(e, "game_tracked", { newOverlayMethod: null != t ? I.gl[t] : null }),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_POPOUT_OPEN);
    } catch (t) {
        k.error("Error tracking game:", t), ef(e, t);
    }
}
function eh(e) {
    try {
        null == H || H.untrackGame(e),
            G.delete(e),
            delete X[e],
            delete Q[e],
            k.verbose("Removing tracked game ".concat(e)),
            V.delete(e);
    } catch (t) {
        k.error("Error removing tracked game:", t), ef(e, t);
    }
}
function em() {
    try {
        for (let e of G) null == H || H.untrackGame(e);
        G.clear(), (X = {}), (Q = {}), V.clear(), k.verbose("Cleared all tracked games");
    } catch (e) {
        k.error("Error clearing tracked games:", e), ef(b.UNSET_PID, e);
    }
}
function eg() {
    return (0, T.NW)("overlay_store_v3", !1);
}
function eE() {
    if (!Y) return void em();
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => _.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...G].filter((t) => !e.has(t)))) eh(t);
    for (let e of G) ep(e);
}
function eb(e) {
    if (null == H) return void k.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        H.setInteractionEnabled(t), F.toggleGPUBoost(I.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        k.error("Error during overlay lock:", e), ef(null != K ? K : b.UNSET_PID, e);
    }
}
function ey(e) {
    let t = _.ZP.getGameOrTransformedSubgameForPID(e);
    c.Z.setAssociatedGame(null != K ? K : b.UNSET_PID, e, t);
}
async function eO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    for (let i = 0; i < t; i++) {
        let a = i + 1 >= t;
        try {
            var n, r;
            let e =
                null !=
                (r = await (null === u.Z || void 0 === u.Z || null == (n = u.Z.window)
                    ? void 0
                    : n.getNativeHandle(P.$J)))
                    ? r
                    : "";
            if ("" !== e) return e;
        } catch (e) {
            if (a) throw e;
            k.error("Error getting native window handle, retrying...", e);
        }
        if (a) {
            k.error("Failed to get native window handle, giving up");
            break;
        }
        k.info("Failed to get window handle on attempt ".concat(i + 1, " of ").concat(t));
        let o = Math.pow(2, i + 1) * e;
        await new Promise((e) => setTimeout(e, o));
    }
    return null;
}
async function ev(e) {
    k.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        ec(e, n), (er = !1), (z = null), U(e, "renderer_window_mounting_started", n), await (0, C.f)($);
        let r = {
            renderer_started: !0,
            fullscreen_type: await (0, A.hj)(e, 0),
            graphics_info_after: new Date().getTime() - t,
        };
        ec(e, r),
            U(e, "renderer_window_mounted", r),
            u.Z.window.setBackgroundThrottling(!1),
            E.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                F.toggleGPUBoost(I.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            F.toggleGPUBoost(I.zS.OVERLAY_RENDERING, !0),
            ey(e),
            (K = e),
            (0, b.setPID)(e),
            k.info("Getting Native Handle for pid", e);
        let i = await eO();
        if (null == i)
            return (
                k.error("Failed to get native handle for pid", e),
                ef(e, Error("Failed to get native handle for pid")),
                ""
            );
        k.info("Native Handle for pid ".concat(e, ":"), i),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
        let a = { renderer_started_after: new Date().getTime() - t };
        return (
            U(e, "renderer_started", a),
            ec(e, a),
            eU(!1),
            S.Z.resetWindowState(),
            (null == H ? void 0 : H.setOnWindowHandleInitializedCallback) == null && eM(!0),
            i
        );
    } catch (t) {
        k.error("failed to create out of process overlay host window", t),
            e_(e, t),
            c.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED_DISABLED);
    }
    return eT(e), "";
}
function eI() {
    k.verbose("Destroying OOP host window"), F.resetGPUBoosts();
    try {
        var e;
        null === u.Z || void 0 === u.Z || null == (e = u.Z.window) || e.close(P.$J);
    } catch (e) {
        k.error("Error destroying overlay window:", e), ef(null != K ? K : b.UNSET_PID, e);
    }
    try {
        u.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        k.error("Error setting background throttling:", e), ef(null != K ? K : b.UNSET_PID, e);
    }
    eP(),
        B.clear(),
        S.Z.resetWindowState(!1),
        null != K && eT(K),
        (K = null),
        (0, b.setPID)(null != K ? K : b.UNSET_PID),
        (er = !1),
        (null == H ? void 0 : H.setOnWindowHandleInitializedCallback) == null && eM(!1);
}
function eT(e) {
    g.default.track(w.rMx.OVERLAY_HOOK_RESULT, el(e));
}
function eS(e) {
    try {
        k.verbose("Refreshing OOP host window for pid ".concat(e)),
            U(e, "renderer_window_refreshing_started"),
            ey(e),
            B.delete(null != K ? K : b.UNSET_PID),
            (K = e),
            (0, b.setPID)(null != K ? K : b.UNSET_PID);
        let t = p.Z.getWindow(P.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === L && (window.removeEventListener("message", n), e());
                    };
                    window.addEventListener("message", n),
                        null == t || t.postMessage(j, "*"),
                        setTimeout(() => {
                            let e = new MessageEvent("message", { data: L });
                            n(e);
                        }, 100);
                }),
            r = 0,
            i = () => {
                15 === r
                    ? (eo.clearClickZones(),
                      U(e, "renderer_window_refreshing_finished"),
                      null == H || H.readyToShow(e),
                      c.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING),
                      k.verbose("Showing overlay v3 for pid ".concat(e)))
                    : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        k.error("failed to refresh out of process overlay host window", e), ef(null != K ? K : b.UNSET_PID, e);
    }
}
function eA(e, t, n, r) {
    let i = p.Z.getWindow(P.$J);
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
function eC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? eo.storeClickZones() : eo.refreshClickZones(),
        e !== W &&
            U(e, "renderer_window_focus_flushed", {
                focusedPID: W,
                isUntracked: t,
            }),
        null != e)
    ) {
        let t = Q[e] === I.gl.OutOfProcessLimitedInteraction;
        if (t !== z) {
            z = t;
            try {
                "function" == typeof (null == H ? void 0 : H.setLimitedInteraction)
                    ? (k.info("Setting limited interaction", t),
                      U(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      H.setLimitedInteraction(t),
                      E.ZP.setFocusable(P.$J, !t))
                    : k.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                k.error("Error setting limited interaction mode:", t), ef(e, t);
            }
        }
    }
    c.Z.setFocusedPID(0 === e ? null : e, t);
}
function eN(e) {
    eC(e), e5.emitChange(), e !== W && k.info("OverlayStore: Focused new PID", e);
}
function eR(e) {
    eP(), e5.emitChange();
}
function eP() {
    eC(null, !0), e5.emitChange();
}
function ew(e) {
    return (W = e.pid), !0;
}
function eD(e) {
    if (!V.has(e) || !er) return;
    let t = el(e).mounting_started_at;
    ec(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        c.Z.successfullyShown(e);
}
function ex() {
    var e;
    return null == H || null == (e = H.onPopoutShowInactive) || e.call(H), !1;
}
function eL() {
    (er = !0),
        V.forEach((e) => {
            eD(e);
        });
}
function ej(e) {
    U(e, "_successfullyShownCallback"), V.add(e), eD(e);
}
function eM(e) {
    (en = e), e && c.Z.updateOverlayState((0, b.getPID)(), I.mM.WAITING_FOR_REACT_INITIALIZATION), e5.emitChange();
}
let ek = (() => {
    let e = null;
    async function t() {
        if (!N.iP) return void k.error("Attempted to load overlay on an unsupported platform.");
        k.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n, r;
            await E.ZP.ensureModule("discord_desktop_overlay");
            let i = E.ZP.requireModule("discord_desktop_overlay");
            null == i || null == (e = i.init) || e.call(i),
                i.setCaptureZoneCallback(eA),
                i.setHostWindowCallbacks(ev, eI, eS),
                i.setFocusCallback(eN),
                null == (t = i.setFocusLostCallback) || t.call(i, eR),
                null == (n = i.setSuccessfullyShownCallback) || n.call(i, ej),
                null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eM),
                (H = i),
                (0, b.setOutOfProcessSupport)(!0),
                eE(),
                k.info("OverlayV3 Module Loaded"),
                U((0, b.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (k.error("failed loading overlay module", e),
                (0, b.setOutOfProcessSupport)(!1),
                (0, O.V6)(e, I.gl.OutOfProcess, { extra: ed(null != K ? K : b.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eU(e) {
    U((0, b.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == H || H.setInteractionEnabled(e);
}
function eG(e) {
    if (N.iP && ((Y = e), null == H && eg())) return void ek();
}
async function eB(e) {
    e.overlayMethod === I.gl.OutOfProcess || e.overlayMethod === I.gl.OutOfProcessLimitedInteraction
        ? (null == H && (await ek()), ep(e.pid, e.overlayMethod))
        : eh(e.pid),
        e5.emitChange();
}
function eZ(e) {
    k.verbose("Updating OverlayMethod", e), eB(e);
}
function eF(e) {
    let { pid: t, error: n } = e;
    G.has(t) && e_(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function eV(e) {
    F.toggleGPUBoost(e.reason, e.enabled);
}
function eH() {
    k.verbose("Maybe Enable Overlay"),
        eg() ? (eG(v.v.oopEnabled), (0, b.setOutOfProcessSupport)(!0), ek()) : Y && eG(!1);
}
function eY(e) {
    let { oopEnabled: t } = e;
    eG(t);
}
function eW(e) {
    let { zones: t } = e;
    eo.setClickZones(t);
}
function eK(e) {
    X[e.pid] = e.overlayState;
}
function ez(e) {
    let { locked: t, pid: n } = e,
        r = X[n];
    if (t || r !== I.mM.OVERLAY_CRASHED_DISABLED) {
        if (
            (U(n, "setInputLocked called", { locked: t }),
            t ? B.delete(n) : B.add(n),
            null != q && (clearTimeout(q), (q = null), t))
        )
            return;
        t
            ? eb(t)
            : (q = setTimeout(() => {
                  eb(t), (q = null);
              }, 100));
    }
}
function eq(e) {
    let { region: t } = e;
    eb(!1);
}
function eX() {
    eb(!0);
}
function eQ(e) {
    let { enabled: t, mode: n } = e;
    t ? es.add(n) : es.delete(n),
        n === I.GO.DisabledGPUBoost && F.toggleDisabledGPUBoost(t),
        n === I.GO.ForceGPUBoost && F.toggleGPUBoost(I.zS.DEV_FORCED_GPU_BOOST, t);
}
function eJ() {
    f.Z.hasLoadedExperiments && !J && ((J = !0), eH());
}
function e$() {
    J = !1;
}
function e0(e) {
    let { mode: t } = e;
    $ = t;
}
let e1 = 3000,
    e2 = 100;
function e3(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != ee) return !1;
        ee = setInterval(() => {
            null == H ||
                H.getBreadcrumbs({ minBreadcrumbId: y.JC.getLatestBreadcrumbId() }, (e) => {
                    let { breadcrumbs: t } = e;
                    for (let e of t) y.JC.addNativeBreadcrumb(e, y.C7.NativeOOP, (0, b.getPID)());
                    e5.emitChange();
                });
        }, e1);
    } else clearInterval(ee), (ee = null);
}
function e4(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != et) return !1;
        et = setInterval(() => {
            var e;
            null == H ||
                null == (e = H.getDebuggingState) ||
                e.call(H, (e) => {
                    o()(r, e) || ((r = e), e5.emitChange());
                });
        }, e2);
    } else clearInterval(et), (et = null);
}
class e8 extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z), this.syncWith([f.Z], eJ);
    }
    DEV_getOverlayLoggingBreadcrumbs(e) {
        return y.JC.getBreadcrumbs(e);
    }
    DEV_isOverlayModuleLoggingEnabled() {
        return null != ee;
    }
    DEV_getDebuggingState() {
        return r;
    }
    DEV_isStateDebuggingEnabled() {
        return null != et;
    }
    isInputLocked(e) {
        return !B.has(e);
    }
    isSupported() {
        return N.iP;
    }
    isOverlayV3Enabled() {
        return eg();
    }
    isOverlayV3EnabledForPID(e) {
        return G.has(e);
    }
    getWidgetByType(e) {
        let t = m.Z.getLayout(R.$S);
        if (null != t) {
            let r = t.widgets.find((t) => {
                let n = m.Z.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != r) {
                var n;
                return null != (n = m.Z.getWidget(r)) ? n : null;
            }
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    get enabled() {
        return Y;
    }
    hasRenderDebugMode(e) {
        return es.has(e);
    }
    getFocusedPID() {
        return W;
    }
    isFocused(e) {
        return null != W && e !== b.UNSET_PID && (!!G.has(e) || e === b.DEV_PID) && W === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == W ? null : null != (e = _.ZP.getGameOrTransformedSubgameForPID(W)) ? e : null;
    }
    isReady(e) {
        return G.has(e);
    }
    isGPUBoosted() {
        return F.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = X[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = Q[e]) ? t : null;
    }
    isWindowHandleInitialized() {
        return en;
    }
}
D(e8, "displayName", "OverlayStore-v3");
let e5 = new e8(
        l.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: e$,
                  LOGOUT: e$,
                  EXPERIMENT_OVERRIDE_BUCKET: eH,
                  OVERLAY_SET_ENABLED: eY,
                  OVERLAY_FORCE_RENDER_MODE: e0,
                  OVERLAY_SET_CLICK_ZONES: eW,
                  OVERLAY_SET_INPUT_LOCKED: ez,
                  OVERLAY_ACTIVATE_REGION: eq,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eX,
                  OVERLAY_RENDER_DEBUG_MODE: eQ,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eZ,
                  OVERLAY_UPDATE_OVERLAY_STATE: eK,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eV,
                  OVERLAY_CRASHED: eF,
                  OVERLAY_FOCUSED: ew,
                  OVERLAY_SET_MODULE_LOGGING: e3,
                  OVERLAY_SET_STATE_DEBUGGING: e4,
                  OVERLAY_OOP_UI_INITIALIZED: eL,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ex,
              },
    ),
    e6 = e5;
