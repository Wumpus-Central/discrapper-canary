let r;
n.d(t, {
    A8: () => M,
    Il: () => k,
    ZP: () => tt,
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
function L(e) {
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
function x(e, t) {
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
            : x(Object(t)).forEach(function (n) {
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
                    E.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), te.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        G.error("Error during GPU boost request flush:", e),
                        eh(null != X ? X : b.UNSET_PID, e);
                }
            });
    }
}
let G = new d.Z("OverlayStoreV3");
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.l6.Info;
    y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.OOPModule, e, r), te.emitChange();
}
function Z(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.l6.Info;
    y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.Flux, e, r), te.emitChange();
}
let F = new Set(),
    V = new Set(),
    H = {},
    Y = new U(),
    W = new Set(),
    K = null,
    z = !1,
    q = null,
    X = null,
    Q = null,
    J = null,
    $ = {},
    ee = {},
    et = !1,
    en = I.R5.UNSET,
    er = null,
    ei = null,
    ea = {
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
function eo() {
    ea = {
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
let es = 30000;
class el {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            }));
            B(X, "capture_zones_set", {
                capture_zones: t,
                rawZones: e,
            }),
                null == K || K.setCaptureZones(t);
        } catch (e) {
            G.error("Error setting capture zones:", e), eh(null != X ? X : b.UNSET_PID, e);
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
        if (!z) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, es),
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
            null == K || K.setCaptureZones(n);
        } catch (e) {
            G.error("Error setting capture zones:", e), eh(null != X ? X : b.UNSET_PID, e);
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
let ec = new el(),
    eu = new Set();
function ed(e) {
    var t;
    return null != (t = H[e]) ? t : {};
}
function ef(e, t) {
    var n, r;
    let i = null == (n = H[e]) ? void 0 : n.error,
        a = null == (r = H[e]) ? void 0 : r.error_description;
    (H[e] = L({}, H[e], t)), null != i && (H[e].error = i), null != a && (H[e].error_description = a);
}
function e_(e) {
    var t, n, r;
    if (null != H[e]) return;
    let i = _.ZP.getGameOrTransformedSubgameForPID(e);
    H[e] = {
        overlay_method: I.gl[null != (t = ee[e]) ? t : I.gl.OutOfProcess],
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
function ep(e, t) {
    let n = _.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function eh(e, t) {
    var n;
    e !== b.UNSET_PID &&
        (ef(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, O.V6)(t, ee[e], { extra: ep(e, "host") }),
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
        ec.clearClickZones(),
        te.emitChange());
}
function em(e, t) {
    var n;
    e !== b.UNSET_PID &&
        (ef(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        }),
        (0, O.V6)(t, ee[e], { extra: ep(e, "renderer") }),
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
        ec.clearClickZones(),
        te.emitChange());
}
function eg(e, t) {
    try {
        if ((null != t && (ee[e] = t), null == K || K.trackGame(e), e_(e), F.has(e))) return;
        F.add(e),
            Z(e, "maybeTrackGame", { newOverlayMethod: null != t ? I.gl[t] : null }),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_POPOUT_OPEN);
    } catch (t) {
        G.error("Error tracking game:", t), eh(e, t);
    }
}
function eE(e) {
    try {
        let t = ee[e],
            n = $[e];
        Z(e, "removeTrackedGame", {
            overlayMethod: null != t ? I.gl[t] : null,
            overlayState: n,
        }),
            null == K || K.untrackGame(e),
            F.delete(e),
            delete $[e],
            delete ee[e],
            G.verbose("Removing tracked game ".concat(e)),
            W.delete(e);
    } catch (t) {
        G.error("Error removing tracked game:", t), eh(e, t);
    }
}
function eb() {
    try {
        for (let e of F) null == K || K.untrackGame(e);
        F.clear(), B(null, "clearTrackedGames"), ($ = {}), (ee = {}), W.clear(), G.verbose("Cleared all tracked games");
    } catch (e) {
        G.error("Error clearing tracked games:", e), eh(b.UNSET_PID, e);
    }
}
function ey() {
    return (0, T.NW)("overlay_store_v3", !1);
}
function eO() {
    if (!z) return void eb();
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => _.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...F].filter((t) => !e.has(t)))) eE(t);
    for (let e of F) eg(e);
}
function ev(e) {
    if (null == K) return void G.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        K.setInteractionEnabled(t), Y.toggleGPUBoost(I.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        G.error("Error during overlay lock:", e), eh(null != X ? X : b.UNSET_PID, e);
    }
}
function eI(e) {
    let t = _.ZP.getGameOrTransformedSubgameForPID(e);
    c.Z.setAssociatedGame(null != X ? X : b.UNSET_PID, e, t);
}
async function eT() {
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
async function eS(e) {
    G.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        ef(e, n),
            eo(),
            (Q = null),
            B(e, "renderer_window_mounting_started", {
                mountingAnalyticsData: n,
                popoutInitializationStages: ea,
            }),
            await (0, C.f)(en),
            (ea = j(L({}, ea), { popoutOpened: !0 }));
        let r = {
            renderer_started: !0,
            fullscreen_type: await (0, A.hj)(e, 0),
            graphics_info_after: new Date().getTime() - t,
        };
        ef(e, r),
            B(e, "renderer_window_mounted", {
                rendererWindowMountedAnalyticsData: r,
                popoutInitializationStages: ea,
            }),
            u.Z.window.setBackgroundThrottling(!1),
            E.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                Y.toggleGPUBoost(I.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            Y.toggleGPUBoost(I.zS.OVERLAY_RENDERING, !0),
            eI(e),
            (X = e),
            (0, b.setPID)(e),
            G.info("Getting Native Handle for pid", e);
        let i = await eT();
        if (null == i)
            return (
                G.error("Failed to get native handle for pid", e),
                eh(e, Error("Failed to get native handle for pid")),
                ""
            );
        G.info("Native Handle for pid ".concat(e, ":"), i),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
        let a = { renderer_started_after: new Date().getTime() - t };
        return (
            B(e, "renderer_started", {
                rendererStartedAnalyticsData: a,
                popoutInitializationStages: ea,
            }),
            ef(e, a),
            eF(!1),
            S.Z.resetWindowState(),
            (null == K ? void 0 : K.setOnWindowHandleInitializedCallback) == null && eB(!0),
            i
        );
    } catch (t) {
        G.error("failed to create out of process overlay host window", t),
            em(e, t),
            c.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED_DISABLED),
            (ea = j(L({}, ea), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + t })),
            B(e, "renderer_window_mounting_failed", {
                error: t,
                popoutInitializationStages: ea,
            });
    } finally {
        te.emitChange();
    }
    return eC(e), "";
}
function eA() {
    G.verbose("Destroying OOP host window"), Y.resetGPUBoosts();
    try {
        var e;
        null === u.Z || void 0 === u.Z || null == (e = u.Z.window) || e.close(P.$J);
    } catch (e) {
        G.error("Error destroying overlay window:", e), eh(null != X ? X : b.UNSET_PID, e);
    }
    try {
        u.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        G.error("Error setting background throttling:", e), eh(null != X ? X : b.UNSET_PID, e);
    }
    eL(),
        V.clear(),
        S.Z.resetWindowState(!1),
        null != X && eC(X),
        (X = null),
        (0, b.setPID)(null != X ? X : b.UNSET_PID),
        eo(),
        te.emitChange();
}
function eC(e) {
    g.default.track(w.rMx.OVERLAY_HOOK_RESULT, ed(e));
}
function eN(e) {
    try {
        G.verbose("Refreshing OOP host window for pid ".concat(e)),
            B(e, "renderer_window_refreshing_started"),
            eI(e),
            V.delete(null != X ? X : b.UNSET_PID),
            (X = e),
            (0, b.setPID)(null != X ? X : b.UNSET_PID);
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
                    ? (ec.clearClickZones(),
                      B(e, "renderer_window_refreshing_finished"),
                      null == K || K.readyToShow(e),
                      c.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING),
                      G.verbose("Showing overlay v3 for pid ".concat(e)))
                    : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        G.error("failed to refresh out of process overlay host window", e), eh(null != X ? X : b.UNSET_PID, e);
    } finally {
        te.emitChange();
    }
}
function eR(e, t, n, r) {
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
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? ec.storeClickZones() : ec.refreshClickZones(),
        e !== q &&
            B(e, "renderer_window_focus_flushed", {
                focusedPID: q,
                isUntracked: t,
            }),
        null != e)
    ) {
        let t = ee[e] === I.gl.OutOfProcessLimitedInteraction;
        if (t !== Q) {
            Q = t;
            try {
                "function" == typeof (null == K ? void 0 : K.setLimitedInteraction)
                    ? (G.info("Setting limited interaction", t),
                      B(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      K.setLimitedInteraction(t),
                      E.ZP.setFocusable(P.$J, !t))
                    : G.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                G.error("Error setting limited interaction mode:", t), eh(e, t);
            }
        }
    }
    c.Z.setFocusedPID(0 === e ? null : e, t);
}
function ew(e) {
    B(null != q ? q : null, "focus_callback", {
        callbackPid: e,
        currentFocusedPID: q,
    }),
        eP(e),
        te.emitChange(),
        e !== q && G.info("OverlayStore: Focused new PID", e);
}
function eD(e) {
    null != q &&
        B(q, "focus_lost_callback", {
            focusedPID: q,
            lostPid: e,
        }),
        eL(),
        te.emitChange();
}
function eL() {
    eP(null, !0), te.emitChange();
}
function ex(e) {
    return Z(null != q ? q : null, "overlay_focused", { focusedPID: e.pid }), (q = e.pid), !0;
}
function ej(e) {
    if (!W.has(e) || !ea.allDone) return;
    let t = ed(e).mounting_started_at;
    ef(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        c.Z.successfullyShown(e);
}
function eM() {
    var e;
    (ea = j(L({}, ea), { showInactiveCalled: !0 })), null == K || null == (e = K.onPopoutShowInactive) || e.call(K);
}
function ek() {
    (ea = j(L({}, ea), { allDone: !0 })),
        W.forEach((e) => {
            ej(e);
        });
}
function eU(e) {
    let { update: t } = e;
    ea = L({}, ea, t);
}
function eG(e) {
    B(e, "_successfullyShownCallback"), W.add(e), ej(e);
}
function eB(e) {
    (ea = j(L({}, ea), { windowHandleSentToNative: e })),
        e && c.Z.updateOverlayState((0, b.getPID)(), I.mM.WAITING_FOR_REACT_INITIALIZATION),
        te.emitChange();
}
let eZ = (() => {
    let e = null;
    async function t() {
        if (!N.iP) return void G.error("Attempted to load overlay on an unsupported platform.");
        G.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n, r;
            await E.ZP.ensureModule("discord_desktop_overlay");
            let i = E.ZP.requireModule("discord_desktop_overlay");
            null == i || null == (e = i.init) || e.call(i),
                i.setCaptureZoneCallback(eR),
                i.setHostWindowCallbacks(eS, eA, eN),
                i.setFocusCallback(ew),
                null == (t = i.setFocusLostCallback) || t.call(i, eD),
                null == (n = i.setSuccessfullyShownCallback) || n.call(i, eG),
                null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eB),
                (K = i),
                (0, b.setOutOfProcessSupport)(!0),
                eO(),
                c.Z.setRenderDebugMode(!0, I.GO.TrackFocusPIDs),
                G.info("OverlayV3 Module Loaded"),
                B((0, b.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (G.error("failed loading overlay module", e),
                (0, b.setOutOfProcessSupport)(!1),
                (0, O.V6)(e, I.gl.OutOfProcess, { extra: ep(null != X ? X : b.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eF(e) {
    Z((0, b.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == K || K.setInteractionEnabled(e);
}
function eV(e) {
    if (N.iP && ((z = e), null == K && ey())) return void eZ();
}
async function eH(e) {
    e.overlayMethod === I.gl.OutOfProcess || e.overlayMethod === I.gl.OutOfProcessLimitedInteraction
        ? (null == K && (await eZ()), eg(e.pid, e.overlayMethod))
        : eE(e.pid),
        te.emitChange();
}
function eY(e) {
    G.verbose("Updating OverlayMethod", e), eH(e);
}
function eW(e) {
    let { pid: t, error: n } = e;
    F.has(t) && em(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function eK(e) {
    Y.toggleGPUBoost(e.reason, e.enabled);
}
function ez() {
    G.verbose("Maybe Enable Overlay"),
        ey() ? (eV(v.v.oopEnabled), (0, b.setOutOfProcessSupport)(!0), eZ()) : z && eV(!1);
}
function eq(e) {
    let { oopEnabled: t } = e;
    eV(t);
}
function eX(e) {
    let { zones: t } = e;
    ec.setClickZones(t);
}
function eQ(e) {
    $[e.pid] = e.overlayState;
}
function eJ(e) {
    let { locked: t, pid: n } = e,
        r = $[n];
    if (t || r !== I.mM.OVERLAY_CRASHED_DISABLED) {
        if (
            (Z(n, "setInputLocked called", { locked: t }),
            t ? V.delete(n) : V.add(n),
            null != J && (clearTimeout(J), (J = null), t))
        )
            return;
        t
            ? ev(t)
            : (J = setTimeout(() => {
                  ev(t), (J = null);
              }, 100));
    }
}
function e$(e) {
    let { region: t } = e;
    Z(null != q ? q : null, "activate_region", { region: t }), ev(!1);
}
function e0() {
    Z(null != q ? q : null, "deactivate_all_regions"), ev(!0);
}
function e1(e) {
    let { enabled: t, mode: n } = e;
    t ? eu.add(n) : eu.delete(n),
        n === I.GO.DisabledGPUBoost && Y.toggleDisabledGPUBoost(t),
        n === I.GO.ForceGPUBoost && Y.toggleGPUBoost(I.zS.DEV_FORCED_GPU_BOOST, t);
}
function e2() {
    f.Z.hasLoadedExperiments && !et && ((et = !0), ez());
}
function e3() {
    et = !1;
}
function e4(e) {
    let { mode: t } = e;
    en = t;
}
let e8 = 3000,
    e5 = 100;
function e6(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != er) return !1;
        er = setInterval(() => {
            null == K ||
                K.getBreadcrumbs({ minBreadcrumbId: y.JC.getLatestBreadcrumbId() }, (e) => {
                    let { breadcrumbs: t } = e;
                    for (let e of t) y.JC.addNativeBreadcrumb(e, y.C7.NativeOOP, (0, b.getPID)());
                    te.emitChange();
                });
        }, e8);
    } else clearInterval(er), (er = null);
}
function e7(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != ei) return !1;
        ei = setInterval(() => {
            var e;
            null == K ||
                null == (e = K.getDebuggingState) ||
                e.call(K, (e) => {
                    o()(r, e) || ((r = e), te.emitChange());
                });
        }, e5);
    } else clearInterval(ei), (ei = null);
}
class e9 extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z), this.syncWith([f.Z], e2);
    }
    DEV_getOverlayLoggingBreadcrumbs(e) {
        return y.JC.getBreadcrumbs(e);
    }
    DEV_isOverlayModuleLoggingEnabled() {
        return null != er;
    }
    DEV_getDebuggingState() {
        return r;
    }
    DEV_isStateDebuggingEnabled() {
        return null != ei;
    }
    isInputLocked(e) {
        return !V.has(e);
    }
    isSupported() {
        return N.iP;
    }
    isOverlayV3Enabled() {
        return ey();
    }
    isOverlayV3EnabledForPID(e) {
        return F.has(e);
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
        return z;
    }
    hasRenderDebugMode(e) {
        return eu.has(e);
    }
    getFocusedPID() {
        return q;
    }
    isFocused(e) {
        return null != q && e !== b.UNSET_PID && (!!F.has(e) || e === b.DEV_PID) && q === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == q ? null : null != (e = _.ZP.getGameOrTransformedSubgameForPID(q)) ? e : null;
    }
    isReady(e) {
        return !!F.has(e) && $[e] === I.mM.OVERLAY_RENDERING;
    }
    isGPUBoosted() {
        return Y.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = $[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = ee[e]) ? t : null;
    }
    isWindowHandleInitialized() {
        return ea.windowHandleSentToNative;
    }
    getInitializationStages() {
        return ea;
    }
}
D(e9, "displayName", "OverlayStore-v3");
let te = new e9(
        l.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: e3,
                  LOGOUT: e3,
                  EXPERIMENT_OVERRIDE_BUCKET: ez,
                  OVERLAY_SET_ENABLED: eq,
                  OVERLAY_FORCE_RENDER_MODE: e4,
                  OVERLAY_SET_CLICK_ZONES: eX,
                  OVERLAY_SET_INPUT_LOCKED: eJ,
                  OVERLAY_ACTIVATE_REGION: e$,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: e0,
                  OVERLAY_RENDER_DEBUG_MODE: e1,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eY,
                  OVERLAY_UPDATE_OVERLAY_STATE: eQ,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eK,
                  OVERLAY_CRASHED: eW,
                  OVERLAY_FOCUSED: ex,
                  OVERLAY_SET_MODULE_LOGGING: e6,
                  OVERLAY_SET_STATE_DEBUGGING: e7,
                  OVERLAY_OOP_UI_INITIALIZED: ek,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eM,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: eU,
              },
    ),
    tt = te;
