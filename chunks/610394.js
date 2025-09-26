let r;
n.d(t, {
    A8: () => M,
    Il: () => k,
    ZP: () => te,
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
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = "repaint-complete",
    k = "request-repaint";
class U {
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
                    E.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), e9.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        G.error("Error during GPU boost request flush:", e),
                        ep(null != q ? q : b.UNSET_PID, e);
                }
            });
    }
}
let G = new d.Z("OverlayStoreV3");
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.l6.Info;
    y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.OOPModule, e, r), e9.emitChange();
}
let Z = new Set(),
    F = new Set(),
    V = {},
    H = new U(),
    Y = new Set(),
    W = null,
    K = !1,
    z = null,
    q = null,
    X = null,
    Q = null,
    J = {},
    $ = {},
    ee = !1,
    et = I.R5.UNSET,
    en = null,
    er = null,
    ei = {
        popoutOpened: !1,
        windowHandleSentToNative: !1,
        hasUseEffectFired: !1,
        trackedPidFocused: !1,
        reactInitializationStarted: !1,
        cssLoaded: !1,
        showInactiveCalled: !1,
        allDone: !1,
        errorMessage: null,
    };
function ea() {
    ei = {
        popoutOpened: !1,
        windowHandleSentToNative: !1,
        hasUseEffectFired: !1,
        trackedPidFocused: !1,
        reactInitializationStarted: !1,
        cssLoaded: !1,
        showInactiveCalled: !1,
        allDone: !1,
        errorMessage: null,
    };
}
let eo = 30000;
class es {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            }));
            B(q, "capture_zones_set", { capture_zones: t }), null == W || W.setCaptureZones(t);
        } catch (e) {
            G.error("Error setting capture zones:", e), ep(null != q ? q : b.UNSET_PID, e);
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
        if (!K) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, eo),
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
            null == W || W.setCaptureZones(n);
        } catch (e) {
            G.error("Error setting capture zones:", e), ep(null != q ? q : b.UNSET_PID, e);
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
let el = new es(),
    ec = new Set();
function eu(e) {
    var t;
    return null != (t = V[e]) ? t : {};
}
function ed(e, t) {
    var n, r;
    let i = null == (n = V[e]) ? void 0 : n.error,
        a = null == (r = V[e]) ? void 0 : r.error_description;
    (V[e] = x({}, V[e], t)), null != i && (V[e].error = i), null != a && (V[e].error_description = a);
}
function ef(e) {
    var t, n, r;
    if (null != V[e]) return;
    let i = _.ZP.getGameOrTransformedSubgameForPID(e);
    V[e] = {
        overlay_method: I.gl[null != (t = $[e]) ? t : I.gl.OutOfProcess],
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
function e_(e, t) {
    let n = _.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function ep(e, t) {
    var n;
    e !== b.UNSET_PID &&
        (ed(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, O.V6)(t, $[e], { extra: e_(e, "host") }),
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
        el.clearClickZones(),
        e9.emitChange());
}
function eh(e, t) {
    var n;
    e !== b.UNSET_PID &&
        (ed(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, O.V6)(t, $[e], { extra: e_(e, "renderer") }),
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
        el.clearClickZones(),
        e9.emitChange());
}
function em(e, t) {
    try {
        if ((null != t && ($[e] = t), null == W || W.trackGame(e), ef(e), Z.has(e))) return;
        Z.add(e),
            B(e, "game_tracked", { newOverlayMethod: null != t ? I.gl[t] : null }),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_POPOUT_OPEN);
    } catch (t) {
        G.error("Error tracking game:", t), ep(e, t);
    }
}
function eg(e) {
    try {
        null == W || W.untrackGame(e),
            Z.delete(e),
            delete J[e],
            delete $[e],
            G.verbose("Removing tracked game ".concat(e)),
            Y.delete(e);
    } catch (t) {
        G.error("Error removing tracked game:", t), ep(e, t);
    }
}
function eE() {
    try {
        for (let e of Z) null == W || W.untrackGame(e);
        Z.clear(), (J = {}), ($ = {}), Y.clear(), G.verbose("Cleared all tracked games");
    } catch (e) {
        G.error("Error clearing tracked games:", e), ep(b.UNSET_PID, e);
    }
}
function eb() {
    return (0, T.NW)("overlay_store_v3", !1);
}
function ey() {
    if (!K) return void eE();
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => _.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...Z].filter((t) => !e.has(t)))) eg(t);
    for (let e of Z) em(e);
}
function eO(e) {
    if (null == W) return void G.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        W.setInteractionEnabled(t), H.toggleGPUBoost(I.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        G.error("Error during overlay lock:", e), ep(null != q ? q : b.UNSET_PID, e);
    }
}
function ev(e) {
    let t = _.ZP.getGameOrTransformedSubgameForPID(e);
    c.Z.setAssociatedGame(null != q ? q : b.UNSET_PID, e, t);
}
async function eI() {
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
            G.error("Error getting native window handle, retrying...", e);
        }
        if (a) {
            G.error("Failed to get native window handle, giving up");
            break;
        }
        G.info("Failed to get window handle on attempt ".concat(i + 1, " of ").concat(t));
        let o = Math.pow(2, i + 1) * e;
        await new Promise((e) => setTimeout(e, o));
    }
    return null;
}
async function eT(e) {
    G.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        ed(e, n),
            ea(),
            (X = null),
            B(e, "renderer_window_mounting_started", n),
            await (0, C.f)(et),
            (ei = j(x({}, ei), { popoutOpened: !0 }));
        let r = {
            renderer_started: !0,
            fullscreen_type: await (0, A.hj)(e, 0),
            graphics_info_after: new Date().getTime() - t,
        };
        ed(e, r),
            B(e, "renderer_window_mounted", r),
            u.Z.window.setBackgroundThrottling(!1),
            E.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                H.toggleGPUBoost(I.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            H.toggleGPUBoost(I.zS.OVERLAY_RENDERING, !0),
            ev(e),
            (q = e),
            (0, b.setPID)(e),
            G.info("Getting Native Handle for pid", e);
        let i = await eI();
        if (null == i)
            return (
                G.error("Failed to get native handle for pid", e),
                ep(e, Error("Failed to get native handle for pid")),
                ""
            );
        G.info("Native Handle for pid ".concat(e, ":"), i),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
        let a = { renderer_started_after: new Date().getTime() - t };
        return (
            B(e, "renderer_started", a),
            ed(e, a),
            eZ(!1),
            S.Z.resetWindowState(),
            (null == W ? void 0 : W.setOnWindowHandleInitializedCallback) == null && eG(!0),
            i
        );
    } catch (t) {
        G.error("failed to create out of process overlay host window", t),
            eh(e, t),
            c.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED_DISABLED),
            (ei = j(x({}, ei), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + t }));
    } finally {
        e9.emitChange();
    }
    return eA(e), "";
}
function eS() {
    G.verbose("Destroying OOP host window"), H.resetGPUBoosts();
    try {
        var e;
        null === u.Z || void 0 === u.Z || null == (e = u.Z.window) || e.close(P.$J);
    } catch (e) {
        G.error("Error destroying overlay window:", e), ep(null != q ? q : b.UNSET_PID, e);
    }
    try {
        u.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        G.error("Error setting background throttling:", e), ep(null != q ? q : b.UNSET_PID, e);
    }
    eD(),
        F.clear(),
        S.Z.resetWindowState(!1),
        null != q && eA(q),
        (q = null),
        (0, b.setPID)(null != q ? q : b.UNSET_PID),
        ea(),
        e9.emitChange();
}
function eA(e) {
    g.default.track(w.rMx.OVERLAY_HOOK_RESULT, eu(e));
}
function eC(e) {
    try {
        G.verbose("Refreshing OOP host window for pid ".concat(e)),
            B(e, "renderer_window_refreshing_started"),
            ev(e),
            F.delete(null != q ? q : b.UNSET_PID),
            (q = e),
            (0, b.setPID)(null != q ? q : b.UNSET_PID);
        let t = p.Z.getWindow(P.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === M && (window.removeEventListener("message", n), e());
                    };
                    window.addEventListener("message", n),
                        null == t || t.postMessage(k, "*"),
                        setTimeout(() => {
                            let e = new MessageEvent("message", { data: M });
                            n(e);
                        }, 100);
                }),
            r = 0,
            i = () => {
                15 === r
                    ? (el.clearClickZones(),
                      B(e, "renderer_window_refreshing_finished"),
                      null == W || W.readyToShow(e),
                      c.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING),
                      G.verbose("Showing overlay v3 for pid ".concat(e)))
                    : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        G.error("failed to refresh out of process overlay host window", e), ep(null != q ? q : b.UNSET_PID, e);
    } finally {
        e9.emitChange();
    }
}
function eN(e, t, n, r) {
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
function eR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? el.storeClickZones() : el.refreshClickZones(),
        e !== z &&
            B(e, "renderer_window_focus_flushed", {
                focusedPID: z,
                isUntracked: t,
            }),
        null != e)
    ) {
        let t = $[e] === I.gl.OutOfProcessLimitedInteraction;
        if (t !== X) {
            X = t;
            try {
                "function" == typeof (null == W ? void 0 : W.setLimitedInteraction)
                    ? (G.info("Setting limited interaction", t),
                      B(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      W.setLimitedInteraction(t),
                      E.ZP.setFocusable(P.$J, !t))
                    : G.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                G.error("Error setting limited interaction mode:", t), ep(e, t);
            }
        }
    }
    c.Z.setFocusedPID(0 === e ? null : e, t);
}
function eP(e) {
    eR(e), e9.emitChange(), e !== z && G.info("OverlayStore: Focused new PID", e);
}
function ew(e) {
    eD(), e9.emitChange();
}
function eD() {
    eR(null, !0), e9.emitChange();
}
function ex(e) {
    return (z = e.pid), !0;
}
function eL(e) {
    if (!Y.has(e) || !ei.allDone) return;
    let t = eu(e).mounting_started_at;
    ed(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        c.Z.successfullyShown(e);
}
function ej() {
    var e;
    (ei = j(x({}, ei), { showInactiveCalled: !0 })), null == W || null == (e = W.onPopoutShowInactive) || e.call(W);
}
function eM() {
    (ei = j(x({}, ei), { allDone: !0 })),
        Y.forEach((e) => {
            eL(e);
        });
}
function ek(e) {
    let { update: t } = e;
    ei = x({}, ei, t);
}
function eU(e) {
    B(e, "_successfullyShownCallback"), Y.add(e), eL(e);
}
function eG(e) {
    (ei = j(x({}, ei), { windowHandleSentToNative: e })),
        e && c.Z.updateOverlayState((0, b.getPID)(), I.mM.WAITING_FOR_REACT_INITIALIZATION),
        e9.emitChange();
}
let eB = (() => {
    let e = null;
    async function t() {
        if (!N.iP) return void G.error("Attempted to load overlay on an unsupported platform.");
        G.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n, r;
            await E.ZP.ensureModule("discord_desktop_overlay");
            let i = E.ZP.requireModule("discord_desktop_overlay");
            null == i || null == (e = i.init) || e.call(i),
                i.setCaptureZoneCallback(eN),
                i.setHostWindowCallbacks(eT, eS, eC),
                i.setFocusCallback(eP),
                null == (t = i.setFocusLostCallback) || t.call(i, ew),
                null == (n = i.setSuccessfullyShownCallback) || n.call(i, eU),
                null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eG),
                (W = i),
                (0, b.setOutOfProcessSupport)(!0),
                ey(),
                G.info("OverlayV3 Module Loaded"),
                B((0, b.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (G.error("failed loading overlay module", e),
                (0, b.setOutOfProcessSupport)(!1),
                (0, O.V6)(e, I.gl.OutOfProcess, { extra: e_(null != q ? q : b.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eZ(e) {
    B((0, b.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == W || W.setInteractionEnabled(e);
}
function eF(e) {
    if (N.iP && ((K = e), null == W && eb())) return void eB();
}
async function eV(e) {
    e.overlayMethod === I.gl.OutOfProcess || e.overlayMethod === I.gl.OutOfProcessLimitedInteraction
        ? (null == W && (await eB()), em(e.pid, e.overlayMethod))
        : eg(e.pid),
        e9.emitChange();
}
function eH(e) {
    G.verbose("Updating OverlayMethod", e), eV(e);
}
function eY(e) {
    let { pid: t, error: n } = e;
    Z.has(t) && eh(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function eW(e) {
    H.toggleGPUBoost(e.reason, e.enabled);
}
function eK() {
    G.verbose("Maybe Enable Overlay"),
        eb() ? (eF(v.v.oopEnabled), (0, b.setOutOfProcessSupport)(!0), eB()) : K && eF(!1);
}
function ez(e) {
    let { oopEnabled: t } = e;
    eF(t);
}
function eq(e) {
    let { zones: t } = e;
    el.setClickZones(t);
}
function eX(e) {
    J[e.pid] = e.overlayState;
}
function eQ(e) {
    let { locked: t, pid: n } = e,
        r = J[n];
    if (t || r !== I.mM.OVERLAY_CRASHED_DISABLED) {
        if (
            (B(n, "setInputLocked called", { locked: t }),
            t ? F.delete(n) : F.add(n),
            null != Q && (clearTimeout(Q), (Q = null), t))
        )
            return;
        t
            ? eO(t)
            : (Q = setTimeout(() => {
                  eO(t), (Q = null);
              }, 100));
    }
}
function eJ(e) {
    let { region: t } = e;
    eO(!1);
}
function e$() {
    eO(!0);
}
function e0(e) {
    let { enabled: t, mode: n } = e;
    t ? ec.add(n) : ec.delete(n),
        n === I.GO.DisabledGPUBoost && H.toggleDisabledGPUBoost(t),
        n === I.GO.ForceGPUBoost && H.toggleGPUBoost(I.zS.DEV_FORCED_GPU_BOOST, t);
}
function e1() {
    f.Z.hasLoadedExperiments && !ee && ((ee = !0), eK());
}
function e2() {
    ee = !1;
}
function e3(e) {
    let { mode: t } = e;
    et = t;
}
let e4 = 3000,
    e8 = 100;
function e5(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != en) return !1;
        en = setInterval(() => {
            null == W ||
                W.getBreadcrumbs({ minBreadcrumbId: y.JC.getLatestBreadcrumbId() }, (e) => {
                    let { breadcrumbs: t } = e;
                    for (let e of t) y.JC.addNativeBreadcrumb(e, y.C7.NativeOOP, (0, b.getPID)());
                    e9.emitChange();
                });
        }, e4);
    } else clearInterval(en), (en = null);
}
function e6(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != er) return !1;
        er = setInterval(() => {
            var e;
            null == W ||
                null == (e = W.getDebuggingState) ||
                e.call(W, (e) => {
                    o()(r, e) || ((r = e), e9.emitChange());
                });
        }, e8);
    } else clearInterval(er), (er = null);
}
class e7 extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z), this.syncWith([f.Z], e1);
    }
    DEV_getOverlayLoggingBreadcrumbs(e) {
        return y.JC.getBreadcrumbs(e);
    }
    DEV_isOverlayModuleLoggingEnabled() {
        return null != en;
    }
    DEV_getDebuggingState() {
        return r;
    }
    DEV_isStateDebuggingEnabled() {
        return null != er;
    }
    isInputLocked(e) {
        return !F.has(e);
    }
    isSupported() {
        return N.iP;
    }
    isOverlayV3Enabled() {
        return eb();
    }
    isOverlayV3EnabledForPID(e) {
        return Z.has(e);
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
        return K;
    }
    hasRenderDebugMode(e) {
        return ec.has(e);
    }
    getFocusedPID() {
        return z;
    }
    isFocused(e) {
        return null != z && e !== b.UNSET_PID && (!!Z.has(e) || e === b.DEV_PID) && z === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == z ? null : null != (e = _.ZP.getGameOrTransformedSubgameForPID(z)) ? e : null;
    }
    isReady(e) {
        return Z.has(e);
    }
    isGPUBoosted() {
        return H.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = J[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = $[e]) ? t : null;
    }
    isWindowHandleInitialized() {
        return ei.windowHandleSentToNative;
    }
    getInitializationStages() {
        return ei;
    }
}
D(e7, "displayName", "OverlayStore-v3");
let e9 = new e7(
        l.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: e2,
                  LOGOUT: e2,
                  EXPERIMENT_OVERRIDE_BUCKET: eK,
                  OVERLAY_SET_ENABLED: ez,
                  OVERLAY_FORCE_RENDER_MODE: e3,
                  OVERLAY_SET_CLICK_ZONES: eq,
                  OVERLAY_SET_INPUT_LOCKED: eQ,
                  OVERLAY_ACTIVATE_REGION: eJ,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: e$,
                  OVERLAY_RENDER_DEBUG_MODE: e0,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eH,
                  OVERLAY_UPDATE_OVERLAY_STATE: eX,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eW,
                  OVERLAY_CRASHED: eY,
                  OVERLAY_FOCUSED: ex,
                  OVERLAY_SET_MODULE_LOGGING: e5,
                  OVERLAY_SET_STATE_DEBUGGING: e6,
                  OVERLAY_OOP_UI_INITIALIZED: eM,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ej,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: ek,
              },
    ),
    te = e9;
