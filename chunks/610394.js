let r;
n.d(t, { ZP: () => ti }), n(388685), n(415506);
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
                    E.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), tr.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) &&
                        this.resetGPUBoosts(),
                        k.error("Error during GPU boost request flush:", e),
                        eh(null != X ? X : b.UNSET_PID, e);
                }
            });
    }
}
let k = new d.Z("OverlayStoreV3");
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.l6.Info;
    y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.OOPModule, e, r), tr.emitChange();
}
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.l6.Info;
    y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.Flux, e, r), tr.emitChange();
}
let B = new Set(),
    Z = new Set(),
    F = {},
    V = new M(),
    H = new Set(),
    Y = null,
    W = !1,
    K = null,
    z = null,
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
            U(X, "capture_zones_set", {
                capture_zones: t,
                rawZones: e,
            }),
                null == Y || Y.setCaptureZones(t);
        } catch (e) {
            k.error("Error setting capture zones:", e), eh(null != X ? X : b.UNSET_PID, e);
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
        if (!W) {
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
            null == Y || Y.setCaptureZones(n);
        } catch (e) {
            k.error("Error setting capture zones:", e), eh(null != X ? X : b.UNSET_PID, e);
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
    return null != (t = F[e]) ? t : {};
}
function ef(e, t) {
    var n, r;
    let i = null == (n = F[e]) ? void 0 : n.error,
        a = null == (r = F[e]) ? void 0 : r.error_description;
    (F[e] = L({}, F[e], t)), null != i && (F[e].error = i), null != a && (F[e].error_description = a);
}
function e_(e) {
    var t, n, r;
    if (null != F[e]) return;
    let i = _.ZP.getGameOrTransformedSubgameForPID(e);
    F[e] = {
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
        tr.emitChange());
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
        tr.emitChange());
}
function eg(e, t) {
    try {
        if ((null != t && (ee[e] = t), null == Y || Y.trackGame(e), e_(e), B.has(e))) return;
        B.add(e),
            G(e, "maybeTrackGame", { newOverlayMethod: null != t ? I.gl[t] : null }),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_POPOUT_OPEN);
    } catch (t) {
        k.error("Error tracking game:", t), eh(e, t);
    }
}
function eE(e) {
    try {
        let t = ee[e],
            n = $[e];
        G(e, "removeTrackedGame", {
            overlayMethod: null != t ? I.gl[t] : null,
            overlayState: n,
        }),
            null == Y || Y.untrackGame(e),
            B.delete(e),
            delete $[e],
            delete ee[e],
            k.verbose("Removing tracked game ".concat(e)),
            H.delete(e);
    } catch (t) {
        k.error("Error removing tracked game:", t), eh(e, t);
    }
}
function eb() {
    try {
        for (let e of B) null == Y || Y.untrackGame(e);
        B.clear(), U(null, "clearTrackedGames"), ($ = {}), (ee = {}), H.clear(), k.verbose("Cleared all tracked games");
    } catch (e) {
        k.error("Error clearing tracked games:", e), eh(b.UNSET_PID, e);
    }
}
function ey() {
    return (0, T.NW)("overlay_store_v3", !1);
}
function eO() {
    if (!W) return void eb();
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => _.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...B].filter((t) => !e.has(t)))) eE(t);
    for (let e of B) eg(e);
}
function ev(e) {
    if (null == Y) return void k.warn("Overlay module not initialized during lock attempt");
    try {
        let t = !e;
        Y.setInteractionEnabled(t), V.toggleGPUBoost(I.zS.OVERLAY_UNLOCKED, t);
    } catch (e) {
        k.error("Error during overlay lock:", e), eh(null != X ? X : b.UNSET_PID, e);
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
async function eS(e) {
    k.verbose("Creating OOP Host Window for pid ".concat(e));
    try {
        let t = new Date().getTime(),
            n = { mounting_started_at: t };
        ef(e, n),
            eo(),
            (Q = null),
            U(e, "renderer_window_mounting_started", {
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
            U(e, "renderer_window_mounted", {
                rendererWindowMountedAnalyticsData: r,
                popoutInitializationStages: ea,
            }),
            u.Z.window.setBackgroundThrottling(!1),
            E.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                V.toggleGPUBoost(I.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            V.toggleGPUBoost(I.zS.OVERLAY_RENDERING, !0),
            eI(e),
            (X = e),
            (0, b.setPID)(e),
            k.info("Getting Native Handle for pid", e);
        let i = await eT();
        if (null == i)
            return (
                k.error("Failed to get native handle for pid", e),
                eh(e, Error("Failed to get native handle for pid")),
                ""
            );
        k.info("Native Handle for pid ".concat(e, ":"), i),
            c.Z.updateOverlayState(e, I.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
        let a = { renderer_started_after: new Date().getTime() - t };
        return (
            U(e, "renderer_started", {
                rendererStartedAnalyticsData: a,
                popoutInitializationStages: ea,
            }),
            ef(e, a),
            eY(!1),
            S.Z.resetWindowState(),
            (null == Y ? void 0 : Y.setOnWindowHandleInitializedCallback) == null && eV(!0),
            i
        );
    } catch (t) {
        k.error("failed to create out of process overlay host window", t),
            em(e, t),
            c.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED_DISABLED),
            (ea = j(L({}, ea), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + t })),
            U(e, "renderer_window_mounting_failed", {
                error: t,
                popoutInitializationStages: ea,
            });
    } finally {
        tr.emitChange();
    }
    return eC(e), "";
}
function eA() {
    k.verbose("Destroying OOP host window"), V.resetGPUBoosts();
    try {
        var e;
        null === u.Z || void 0 === u.Z || null == (e = u.Z.window) || e.close(P.$J);
    } catch (e) {
        k.error("Error destroying overlay window:", e), eh(null != X ? X : b.UNSET_PID, e);
    }
    try {
        u.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        k.error("Error setting background throttling:", e), eh(null != X ? X : b.UNSET_PID, e);
    }
    ex(),
        Z.clear(),
        S.Z.resetWindowState(!1),
        null != X && eC(X),
        (X = null),
        (0, b.setPID)(null != X ? X : b.UNSET_PID),
        eo(),
        tr.emitChange();
}
function eC(e) {
    g.default.track(w.rMx.OVERLAY_HOOK_RESULT, ed(e));
}
function eN(e) {
    try {
        k.verbose("Refreshing OOP host window for pid ".concat(e)),
            U(e, "renderer_window_refreshing_started"),
            (q = e),
            eI(e),
            Z.delete(null != X ? X : b.UNSET_PID),
            (X = e),
            (0, b.setPID)(null != X ? X : b.UNSET_PID),
            eR();
    } catch (e) {
        k.error("failed to refresh out of process overlay host window", e), eh(null != X ? X : b.UNSET_PID, e);
    } finally {
        tr.emitChange();
    }
}
function eR() {
    null != q &&
        z === q &&
        ((q = null),
        ec.clearClickZones(),
        U(z, "renderer_window_refreshing_finished"),
        null == Y || Y.readyToShow(z),
        c.Z.updateOverlayState(z, I.mM.OVERLAY_RENDERING),
        k.verbose("Showing overlay v3 for pid ".concat(z)));
}
function eP(e, t, n, r) {
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
function ew(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (null == e ? ec.storeClickZones() : ec.refreshClickZones(),
        e !== K &&
            U(e, "renderer_window_focus_flushed", {
                focusedPID: K,
                isUntracked: t,
            }),
        null != e)
    ) {
        let t = ee[e] === I.gl.OutOfProcessLimitedInteraction;
        if (t !== Q) {
            Q = t;
            try {
                "function" == typeof (null == Y ? void 0 : Y.setLimitedInteraction)
                    ? (k.info("Setting limited interaction", t),
                      U(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      Y.setLimitedInteraction(t),
                      E.ZP.setFocusable(P.$J, !t))
                    : k.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                k.error("Error setting limited interaction mode:", t), eh(e, t);
            }
        }
    }
    c.Z.setFocusedPID(0 === e ? null : e, t);
}
function eD(e) {
    U(null != K ? K : null, "focus_callback", {
        callbackPid: e,
        currentFocusedPID: K,
    }),
        ew(e),
        tr.emitChange(),
        e !== K && k.info("OverlayStore: Focused new PID", e);
}
function eL(e) {
    null != K &&
        U(K, "focus_lost_callback", {
            focusedPID: K,
            lostPid: e,
        }),
        ex(),
        tr.emitChange();
}
function ex() {
    ew(null, !0), tr.emitChange();
}
function ej(e) {
    return G(null != K ? K : null, "overlay_focused", { focusedPID: e.pid }), (K = e.pid), !0;
}
function eM(e) {
    if (!H.has(e) || !ea.allDone) return;
    let t = ed(e).mounting_started_at;
    ef(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0,
    }),
        c.Z.successfullyShown(e);
}
function ek() {
    var e;
    (ea = j(L({}, ea), { showInactiveCalled: !0 })), null == Y || null == (e = Y.onPopoutShowInactive) || e.call(Y);
}
function eU() {
    (ea = j(L({}, ea), { allDone: !0 })),
        H.forEach((e) => {
            eM(e);
        });
}
function eG(e) {
    let { update: t } = e;
    ea = L({}, ea, t);
}
function eB(e) {
    var t;
    let { enabled: n } = e;
    null == Y || null == (t = Y.setDetailedLogging) || t.call(Y, n);
}
function eZ(e) {
    let { pid: t } = e;
    (z = t), eR();
}
function eF(e) {
    U(e, "_successfullyShownCallback"), H.add(e), eM(e);
}
function eV(e) {
    (ea = j(L({}, ea), { windowHandleSentToNative: e })),
        e && c.Z.updateOverlayState((0, b.getPID)(), I.mM.WAITING_FOR_REACT_INITIALIZATION),
        tr.emitChange();
}
let eH = (() => {
    let e = null;
    async function t() {
        if (!N.iP) return void k.error("Attempted to load overlay on an unsupported platform.");
        k.info("Loading Out of Process Overlay Module");
        try {
            var e, t, n, r;
            await E.ZP.ensureModule("discord_desktop_overlay");
            let i = E.ZP.requireModule("discord_desktop_overlay");
            null == i || null == (e = i.init) || e.call(i),
                i.setCaptureZoneCallback(eP),
                i.setHostWindowCallbacks(eS, eA, eN),
                i.setFocusCallback(eD),
                null == (t = i.setFocusLostCallback) || t.call(i, eL),
                null == (n = i.setSuccessfullyShownCallback) || n.call(i, eF),
                null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eV),
                (Y = i),
                (0, b.setOutOfProcessSupport)(!0),
                eO(),
                c.Z.setRenderDebugMode(!0, I.GO.TrackFocusPIDs),
                k.info("OverlayV3 Module Loaded"),
                U((0, b.getPID)(), "overlay_v3_module_loaded");
        } catch (e) {
            throw (
                (k.error("failed loading overlay module", e),
                (0, b.setOutOfProcessSupport)(!1),
                (0, O.V6)(e, I.gl.OutOfProcess, { extra: ep(null != X ? X : b.UNSET_PID, "module_load") }),
                e)
            );
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eY(e) {
    G((0, b.getPID)(), "setInteractionEnabled called", { interactionEnabled: e }),
        null == Y || Y.setInteractionEnabled(e);
}
function eW(e) {
    if (N.iP && ((W = e), null == Y && ey())) return void eH();
}
async function eK(e) {
    e.overlayMethod === I.gl.OutOfProcess || e.overlayMethod === I.gl.OutOfProcessLimitedInteraction
        ? (null == Y && (await eH()), eg(e.pid, e.overlayMethod))
        : eE(e.pid),
        tr.emitChange();
}
function ez(e) {
    k.verbose("Updating OverlayMethod", e), eK(e);
}
function eq(e) {
    let { pid: t, error: n } = e;
    B.has(t) && em(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"));
}
function eX(e) {
    V.toggleGPUBoost(e.reason, e.enabled);
}
function eQ() {
    k.verbose("Maybe Enable Overlay"),
        ey() ? (eW(v.v.oopEnabled), (0, b.setOutOfProcessSupport)(!0), eH()) : W && eW(!1);
}
function eJ(e) {
    let { oopEnabled: t } = e;
    eW(t);
}
function e$(e) {
    let { zones: t } = e;
    ec.setClickZones(t);
}
function e0(e) {
    $[e.pid] = e.overlayState;
}
function e1(e) {
    let { locked: t, pid: n } = e,
        r = $[n];
    if (t || r !== I.mM.OVERLAY_CRASHED_DISABLED) {
        if (
            (G(n, "setInputLocked called", { locked: t }),
            t ? Z.delete(n) : Z.add(n),
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
function e2(e) {
    let { region: t } = e;
    G(null != K ? K : null, "activate_region", { region: t }), ev(!1);
}
function e3() {
    G(null != K ? K : null, "deactivate_all_regions"), ev(!0);
}
function e4(e) {
    let { enabled: t, mode: n } = e;
    t ? eu.add(n) : eu.delete(n),
        n === I.GO.DisabledGPUBoost && V.toggleDisabledGPUBoost(t),
        n === I.GO.ForceGPUBoost && V.toggleGPUBoost(I.zS.DEV_FORCED_GPU_BOOST, t);
}
function e8() {
    f.Z.hasLoadedExperiments && !et && ((et = !0), eQ());
}
function e5() {
    et = !1;
}
function e6(e) {
    let { mode: t } = e;
    en = t;
}
let e7 = 3000,
    e9 = 100;
function te(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != er) return !1;
        er = setInterval(() => {
            null == Y ||
                Y.getBreadcrumbs({ minBreadcrumbId: y.JC.getLatestBreadcrumbId() }, (e) => {
                    let { breadcrumbs: t } = e;
                    for (let e of t) y.JC.addNativeBreadcrumb(e, y.C7.NativeOOP, (0, b.getPID)());
                    tr.emitChange();
                });
        }, e7);
    } else clearInterval(er), (er = null);
}
function tt(e) {
    let { enabled: t } = e;
    if (t) {
        if (null != ei) return !1;
        ei = setInterval(() => {
            var e;
            null == Y ||
                null == (e = Y.getDebuggingState) ||
                e.call(Y, (e) => {
                    o()(r, e) || ((r = e), tr.emitChange());
                });
        }, e9);
    } else clearInterval(ei), (ei = null);
}
class tn extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z), this.syncWith([f.Z], e8);
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
        return !Z.has(e);
    }
    isSupported() {
        return N.iP;
    }
    isOverlayV3Enabled() {
        return ey();
    }
    isOverlayV3EnabledForPID(e) {
        return B.has(e);
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
        return W;
    }
    hasRenderDebugMode(e) {
        return eu.has(e);
    }
    getFocusedPID() {
        return K;
    }
    isFocused(e) {
        return null != K && e !== b.UNSET_PID && (!!B.has(e) || e === b.DEV_PID) && K === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == K ? null : null != (e = _.ZP.getGameOrTransformedSubgameForPID(K)) ? e : null;
    }
    isReady(e) {
        return !!B.has(e) && $[e] === I.mM.OVERLAY_RENDERING;
    }
    isGPUBoosted() {
        return V.isGPUBoosted;
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
D(tn, "displayName", "OverlayStore-v3");
let tr = new tn(
        l.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: e5,
                  LOGOUT: e5,
                  EXPERIMENT_OVERRIDE_BUCKET: eQ,
                  OVERLAY_SET_ENABLED: eJ,
                  OVERLAY_FORCE_RENDER_MODE: e6,
                  OVERLAY_SET_CLICK_ZONES: e$,
                  OVERLAY_SET_INPUT_LOCKED: e1,
                  OVERLAY_ACTIVATE_REGION: e2,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: e3,
                  OVERLAY_RENDER_DEBUG_MODE: e4,
                  OVERLAY_UPDATE_OVERLAY_METHOD: ez,
                  OVERLAY_UPDATE_OVERLAY_STATE: e0,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eX,
                  OVERLAY_CRASHED: eq,
                  OVERLAY_FOCUSED: ej,
                  OVERLAY_SET_MODULE_LOGGING: te,
                  OVERLAY_SET_STATE_DEBUGGING: tt,
                  OVERLAY_OOP_UI_INITIALIZED: eU,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ek,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: eG,
                  OVERLAY_SET_DETAILED_LOGGING: eB,
                  OVERLAY_UI_FOCUSED_PID: eZ,
              },
    ),
    ti = tr;
