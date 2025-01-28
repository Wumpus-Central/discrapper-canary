r.d(n, {
    zS: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(411104);
var l = r(442837),
    u = r(570140),
    c = r(13245),
    d = r(615287),
    f = r(579806),
    p = r(710845),
    h = r(353926),
    _ = r(594190),
    m = r(928518),
    g = r(314897),
    E = r(626135),
    v = r(998502),
    y = r(145597),
    b = r(454991),
    I = r(32300),
    T = r(829907),
    S = r(388627),
    A = r(987650),
    C = r(501787),
    N = r(981631);
function R(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING');
})(i || (i = {}));
class O {
    constructor() {
        R(this, 'gpuBoostRequests', new Set()),
            R(this, 'isGPUBoosted', !1),
            R(this, 'toggleGPUBoost', (e, n) => {
                n ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            R(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            R(this, 'shouldBoostGPU', () => this.gpuBoostRequests.size > 0),
            R(this, 'flushGPUBoostRequests', async () => {
                var e, n, r;
                try {
                    let r = this.shouldBoostGPU();
                    if (this.isGPUBoosted === r) return;
                    let i = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getGpuProcessId) || void 0 === e ? void 0 : e.call(n));
                    if (null == i) return;
                    v.ZP.SetGPUBoostEnabledByPid(i, r) && (this.isGPUBoosted = r);
                } catch (e) {
                    (null === (r = e.message) || void 0 === r ? void 0 : r.includes('IPC method called after context was released')) && this.resetGPUBoosts(), D.error('Error during GPU boost request flush:', e), K(null != B ? B : y.R2, e);
                }
            });
    }
}
let D = new p.Z('OverlayStoreV3'),
    L = new Set(),
    x = new Set(),
    w = {},
    P = new O(),
    M = null,
    k = !1,
    U = null,
    B = null,
    G = null,
    Z = {};
class F {
    setClickZones(e) {
        if (!!k) {
            this.clickZones = e;
            try {
                null == M ||
                    M.setCaptureZones(
                        e.map((e) => ({
                            name: e.name,
                            left: e.left,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom
                        }))
                    );
            } catch (e) {
                D.error('Error setting capture zones:', e), K(null != B ? B : y.R2, e);
            }
        }
    }
    hasClickZones() {
        return this.clickZones.length > 0;
    }
    clearClickZones() {
        (this.clickZones = []), null == M || M.setCaptureZones([]);
    }
    constructor() {
        R(this, 'clickZones', []);
    }
}
let V = new F(),
    j = new Set();
function H(e) {
    var n;
    return null !== (n = w[e]) && void 0 !== n ? n : {};
}
function Y(e, n) {
    var r, i;
    let a = null === (r = w[e]) || void 0 === r ? void 0 : r.error,
        o = null === (i = w[e]) || void 0 === i ? void 0 : i.error_description;
    (w[e] = {
        ...w[e],
        ...n
    }),
        null != a && (w[e].error = a),
        null != o && (w[e].error_description = o);
}
function W(e) {
    var n, r;
    if (null != w[e]) return;
    let i = _.ZP.getGameForPID(e);
    w[e] = {
        overlay_method: d.gl[d.gl.OutOfProcess],
        success: !1,
        game_name: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
        game_id: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : null,
        error: null,
        error_description: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0
    };
}
function K(e, n) {
    if (e !== y.R2)
        Y(e, {
            host_crash_count: 1,
            error: n.message,
            error_description: n.stack
        });
}
function z(e, n) {
    if (e !== y.R2)
        Y(e, {
            renderer_crash_count: 1,
            error: n.message,
            error_description: n.stack
        });
}
function q(e) {
    try {
        if ((null == M || M.trackGame(e), W(e), L.has(e))) return;
        L.add(e), c.Z.updateOverlayState(e, d.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (n) {
        D.error('Error tracking game:', n), K(e, n);
    }
}
function Q(e) {
    try {
        null == M || M.untrackGame(e), L.delete(e), delete Z[e], D.verbose('Removing tracked game '.concat(e));
    } catch (n) {
        D.error('Error removing tracked game:', n), K(e, n);
    }
}
function X() {
    try {
        for (let e of L) null == M || M.untrackGame(e);
        L.clear(), (Z = {}), D.verbose('Cleared all tracked games');
    } catch (e) {
        D.error('Error clearing tracked games:', e), K(y.R2, e);
    }
}
function J() {
    return (0, I.NW)('overlay_store_v3', !1);
}
function $() {
    if (!k) {
        X();
        return;
    }
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => {
                var n, r;
                return null !== (r = null === (n = _.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
            })
            .map((e) => e.pid)
    );
    for (let n of new Set([...L].filter((n) => !e.has(n)))) Q(n);
    for (let e of L) q(e);
}
function ee(e) {
    if (null == M) {
        D.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let n = !e;
        M.setInteractionEnabled(n), P.toggleGPUBoost('OVERLAY_UNLOCKED', n);
    } catch (e) {
        D.error('Error during overlay lock:', e), K(null != B ? B : y.R2, e);
    }
}
function et(e) {
    let n = _.ZP.getGameForPID(e);
    c.Z.setAssociatedGame(null != B ? B : y.R2, e, n);
}
async function en(e) {
    D.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var n, r;
        await (0, S.fK)();
        let i = new Date().getTime();
        Y(e, {
            renderer_started: !0,
            graphics_info_after: await (0, T.hj)(e, 0)
        }),
            f.Z.window.setBackgroundThrottling(!1),
            v.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && P.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            et(e),
            (B = e),
            (0, y.tB)(e);
        let a = null !== (r = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(C.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
        return c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), Y(e, { renderer_started_after: new Date().getTime() - i }), a;
    } catch (n) {
        D.error('failed to create out of process overlay host window', n), z(e, n), c.Z.updateOverlayState(e, d.mM.OVERLAY_CRASHED_DISABLED);
    }
    return ei(e), '';
}
function er() {
    D.verbose('Destroying OOP host window'), P.resetGPUBoosts();
    try {
        var e;
        null === f.Z || void 0 === f.Z || null === (e = f.Z.window) || void 0 === e || e.close(C.OVERLAY_V3_KEY);
    } catch (e) {
        D.error('Error destroying overlay window:', e), K(null != B ? B : y.R2, e);
    }
    try {
        f.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        D.error('Error setting background throttling:', e), K(null != B ? B : y.R2, e);
    }
    eu(), x.clear(), null != B && ei(B), (B = null), (0, y.tB)(null != B ? B : y.R2);
}
function ei(e) {
    var n;
    let r = null !== (n = H(e).renderer_started_after) && void 0 !== n ? n : new Date().getTime();
    Y(e, { uptime_process_renderer: new Date().getTime() - r }), E.default.track(N.rMx.OVERLAY_HOOK_RESULT, H(e));
}
function ea(e) {
    try {
        D.verbose('Refreshing OOP host window for pid '.concat(e)), et(e), x.delete(null != B ? B : y.R2), (B = e), (0, y.tB)(null != B ? B : y.R2);
        let n = m.Z.getWindow(C.OVERLAY_V3_KEY),
            r = () =>
                new Promise((e) => {
                    null == n ||
                        n.requestAnimationFrame(() => {
                            let n = new MessageChannel();
                            (n.port1.onmessage = () => {
                                e();
                            }),
                                n.port2.postMessage(void 0);
                        });
                }),
            i = 0,
            a = () => {
                15 === i ? (null == M || M.readyToShow(e), c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), D.verbose('Showing overlay v3 for pid '.concat(e))) : ((i += 1), r().then(a));
            };
        a();
    } catch (e) {
        D.error('failed to refresh out of process overlay host window', e), K(null != B ? B : y.R2, e);
    }
}
function eo(e, n, r, i) {
    let a = m.Z.getWindow(C.OVERLAY_V3_KEY);
    if (null == a) return;
    let o = Math.ceil(r * a.innerWidth),
        s = Math.ceil(i * a.innerHeight),
        l = new MouseEvent(n, {
            screenX: o,
            screenY: s,
            clientX: o,
            clientY: s,
            bubbles: !0,
            view: a
        }),
        u = a.document.elementFromPoint(o, s);
    if (null == u) throw Error();
    u.dispatchEvent(l);
}
function es(e) {
    (U = e), c.Z.setFocusedPID(U);
}
function el(e) {
    eu();
}
function eu() {
    (U = null), c.Z.setFocusedPID(null);
}
function ec(e) {
    c.Z.successfullyShown(e), c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING);
}
let ed = (() => {
    let e = null;
    async function n() {
        if (!A.iP) throw (D.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await v.ZP.ensureModule('discord_desktop_overlay');
            let i = v.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(eo), i.setHostWindowCallbacks(en, er, ea), i.setFocusCallback(es), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, el), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, ec), (M = i), (0, y.vR)(!0), $();
        } catch (e) {
            throw (D.error('failed loading overlay module', e), (0, y.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function ef(e) {
    if (!!A.iP) {
        if (((k = e), null == M)) {
            ed();
            return;
        }
    }
}
function ep(e) {}
function eh(e) {}
function e_(e) {}
function em(e) {
    D.verbose('Updating OverlayMethod', e), e.overlayMethod === d.gl.OutOfProcess ? q(e.pid) : Q(e.pid);
}
function eg(e) {
    let { pid: n, error: r } = e;
    if (L.has(n)) {
        let e = 'string' == typeof r ? Error(r) : r;
        z(n, null != e ? e : Error('unknown error'));
    }
}
function eE(e) {
    P.toggleGPUBoost(e.reason, e.enabled);
}
function ev() {
    D.verbose('Maybe Enable Overlay'), J() ? ef(b.v.enabled && !b.v.legacyEnabled) : k && ((k = !1), (0, y.vR)(!1));
}
function ey(e) {
    let { enabled: n, legacyEnabled: r } = e;
    ef(n && !r);
}
function eb(e) {
    let { zones: n } = e;
    V.setClickZones(n);
}
function eI(e) {
    Z[e.pid] = e.overlayState;
}
function eT(e) {
    let { locked: n, pid: r } = e,
        i = Z[r];
    if (!n && i === d.mM.OVERLAY_CRASHED_DISABLED) return;
    if ((n ? x.delete(r) : x.add(r), null == G || (clearTimeout(G), (G = null), !n)))
        n
            ? ee(n)
            : (G = setTimeout(() => {
                  ee(n), (G = null);
              }, 100));
}
function eS(e) {
    let { region: n } = e;
    ee(!1);
}
function eA() {
    ee(!0);
}
function eC(e) {
    let { enabled: n, mode: r } = e;
    n ? j.add(r) : j.delete(r);
}
class eN extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, g.default, h.Z);
    }
    isInputLocked(e) {
        return !x.has(e);
    }
    isSupported() {
        return A.iP;
    }
    isOverlayV3Enabled() {
        return J();
    }
    isOverlayV3EnabledForPID(e) {
        return L.has(e);
    }
    get enabled() {
        return k;
    }
    hasRenderDebugMode(e) {
        return j.has(e);
    }
    getFocusedPID() {
        return U;
    }
    isFocused(e) {
        return null != U && e !== y.R2 && U === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == U ? null : null !== (e = _.ZP.getRunningGames().find((e) => e.pid === U)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return L.has(e);
    }
}
R(eN, 'displayName', 'OverlayStore-v3'),
    (n.ZP = new eN(u.Z, {
        CONNECTION_OPEN: ev,
        EXPERIMENT_OVERRIDE_BUCKET: ev,
        OVERLAY_SET_ENABLED: ey,
        GAME_LAUNCH_SUCCESS: ep,
        RUNNING_GAMES_CHANGE: eh,
        RUNNING_GAME_TOGGLE_OVERLAY: e_,
        OVERLAY_SET_CLICK_ZONES: eb,
        OVERLAY_SET_INPUT_LOCKED: eT,
        OVERLAY_ACTIVATE_REGION: eS,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eA,
        OVERLAY_RENDER_DEBUG_MODE: eC,
        OVERLAY_UPDATE_OVERLAY_METHOD: em,
        OVERLAY_UPDATE_OVERLAY_STATE: eI,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eE,
        OVERLAY_CRASHED: eg
    }));
