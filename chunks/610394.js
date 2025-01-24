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
    T = r(388627),
    S = r(987650),
    A = r(501787),
    C = r(981631);
function N(e, n, r) {
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
    (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING');
})(i || (i = {}));
class R {
    constructor() {
        N(this, 'gpuBoostRequests', new Set()),
            N(this, 'isGPUBoosted', !1),
            N(this, 'toggleGPUBoost', (e, n) => {
                n ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            N(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            N(this, 'shouldBoostGPU', () => this.gpuBoostRequests.size > 0),
            N(this, 'flushGPUBoostRequests', async () => {
                var e, n;
                let r = this.shouldBoostGPU();
                if (this.isGPUBoosted === r) return;
                let i = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.processUtils) || void 0 === n ? void 0 : null === (e = n.getGpuProcessId) || void 0 === e ? void 0 : e.call(n));
                if (null != i) v.ZP.SetGPUBoostEnabledByPid(i, r) && (this.isGPUBoosted = r);
            });
    }
}
let O = new p.Z('OverlayStoreV3'),
    D = new Set(),
    L = new Set(),
    x = {},
    w = new R(),
    P = null,
    M = !1,
    k = null,
    U = null,
    B = null,
    G = {};
class Z {
    setClickZones(e) {
        if (!!M)
            (this.clickZones = e),
                null == P ||
                    P.setCaptureZones(
                        e.map((e) => ({
                            name: e.name,
                            left: e.left,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom
                        }))
                    );
    }
    hasClickZones() {
        return this.clickZones.length > 0;
    }
    clearClickZones() {
        (this.clickZones = []), null == P || P.setCaptureZones([]);
    }
    constructor() {
        N(this, 'clickZones', []);
    }
}
let F = new Z(),
    V = new Set();
function j(e) {
    var n;
    return null !== (n = x[e]) && void 0 !== n ? n : {};
}
function H(e, n) {
    x[e] = {
        ...x[e],
        ...n
    };
}
function Y(e) {
    var n, r;
    if (null != x[e]) return;
    let i = _.ZP.getGameForPID(e);
    x[e] = {
        overlay_method: d.gl[d.gl.OutOfProcess],
        success: !1,
        error_description: null,
        game_name: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
        game_id: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : null,
        error: null,
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
function W(e) {
    if ((null == P || P.trackGame(e), Y(e), !D.has(e))) D.add(e), c.Z.updateOverlayState(e, d.mM.WAITING_FOR_OVERLAY_OPEN);
}
function K(e) {
    null == P || P.untrackGame(e), D.delete(e), delete G[e], O.verbose('Removing tracked game '.concat(e));
}
function z() {
    for (let e of D) null == P || P.untrackGame(e);
    D.clear(), (G = {}), O.verbose('Cleared all tracked games');
}
function q() {
    return (0, I.NW)('overlay_store_v3', !1);
}
function Q() {
    if (!M) {
        z();
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
    for (let n of new Set([...D].filter((n) => !e.has(n)))) K(n);
    for (let e of D) W(e);
}
function X(e) {
    let n = !e;
    null == P || P.setInteractionEnabled(n), w.toggleGPUBoost('OVERLAY_UNLOCKED', n);
}
function J(e) {
    let n = _.ZP.getGameForPID(e);
    c.Z.setAssociatedGame(null != U ? U : y.R2, e, n);
}
async function $(e) {
    var n, r, i;
    O.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        await (0, T.fK)();
        let i = new Date().getTime();
        H(e, { renderer_started: !0 }), f.Z.window.setBackgroundThrottling(!1), J(e), (U = e), (0, y.tB)(U);
        let a = null !== (r = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(A.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
        return c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), H(e, { renderer_started_after: new Date().getTime() - i }), a;
    } catch (n) {
        O.error('failed to create out of process overlay host window', n),
            H(e, {
                renderer_crash_count: 1,
                error: null !== (i = null == n ? void 0 : n.message) && void 0 !== i ? i : 'unknown error'
            });
    }
    return E.default.track(C.rMx.OVERLAY_HOOK_RESULT, j(e)), '';
}
function ee() {
    var e;
    O.verbose('Destroying OOP host window'), null === f.Z || void 0 === f.Z || null === (e = f.Z.window) || void 0 === e || e.close(A.OVERLAY_V3_KEY), null != U && E.default.track(C.rMx.OVERLAY_HOOK_RESULT, j(U)), (U = null), (0, y.tB)(null != U ? U : y.R2), ea(), f.Z.window.setBackgroundThrottling(!0), w.resetGPUBoosts();
}
function et(e) {
    O.verbose('Refreshing OOP host window for pid '.concat(e)), J(e), L.delete(null != U ? U : y.R2), (U = e), (0, y.tB)(null != U ? U : y.R2);
    let n = m.Z.getWindow(A.OVERLAY_V3_KEY),
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
            15 === i ? (null == P || P.readyToShow(e), c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), O.verbose('Showing overlay v3 for pid '.concat(e))) : ((i += 1), r().then(a));
        };
    a();
}
function en(e, n, r, i) {
    let a = m.Z.getWindow(A.OVERLAY_V3_KEY);
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
function er(e) {
    (k = e), c.Z.setFocusedPID(k);
}
function ei(e) {
    ea();
}
function ea() {
    (k = null), c.Z.setFocusedPID(null);
}
function eo(e) {
    c.Z.successfullyShown(e), c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING);
}
let es = (() => {
    let e = null;
    async function n() {
        if (!S.iP) throw (O.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await v.ZP.ensureModule('discord_desktop_overlay');
            let i = v.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(en), i.setHostWindowCallbacks($, ee, et), i.setFocusCallback(er), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, ei), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, eo), (P = i), (0, y.vR)(!0), Q();
        } catch (e) {
            throw (O.error('failed loading overlay module', e), (0, y.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function el(e) {
    if (!!S.iP) {
        if (((M = e), null == P)) {
            es();
            return;
        }
    }
}
function eu(e) {}
function ec(e) {}
function ed(e) {}
function ef(e) {
    O.verbose('Updating OverlayMethod', e), e.overlayMethod === d.gl.OutOfProcess ? W(e.pid) : K(e.pid);
}
function ep(e) {
    let { pid: n, error: r } = e;
    if (D.has(n)) {
        var i;
        H(n, {
            renderer_crash_count: 1,
            error: 'string' == typeof r ? r : null !== (i = null == r ? void 0 : r.message) && void 0 !== i ? i : 'unknown error'
        });
    }
}
function eh(e) {
    w.toggleGPUBoost(e.reason, e.enabled);
}
function e_() {
    O.verbose('Maybe Enable Overlay'), q() ? el(b.v.enabled && !b.v.legacyEnabled) : M && ((M = !1), (0, y.vR)(!1));
}
function em(e) {
    let { enabled: n, legacyEnabled: r } = e;
    el(n && !r);
}
function eg(e) {
    let { zones: n } = e;
    F.setClickZones(n);
}
function eE(e) {
    G[e.pid] = e.overlayState;
}
function ev(e) {
    let { locked: n, pid: r } = e,
        i = G[r];
    if (!n && i === d.mM.OVERLAY_CRASHED_DISABLED) return;
    if ((n ? L.delete(r) : L.add(r), null == B || (clearTimeout(B), (B = null), !n)))
        n
            ? X(n)
            : (B = setTimeout(() => {
                  X(n), (B = null);
              }, 100));
}
function ey(e) {
    let { region: n } = e;
    X(!1);
}
function eb() {
    X(!0);
}
function eI(e) {
    let { enabled: n, mode: r } = e;
    n ? V.add(r) : V.delete(r);
}
class eT extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, g.default, h.Z);
    }
    isInputLocked(e) {
        return !L.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return q();
    }
    isOverlayV3EnabledForPID(e) {
        return D.has(e);
    }
    get enabled() {
        return M;
    }
    hasRenderDebugMode(e) {
        return V.has(e);
    }
    getFocusedPID() {
        return k;
    }
    getFocusedRunningGame() {
        var e;
        return null == k ? null : null !== (e = _.ZP.getRunningGames().find((e) => e.pid === k)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return D.has(e);
    }
}
N(eT, 'displayName', 'OverlayStore-v3'),
    (n.ZP = new eT(u.Z, {
        CONNECTION_OPEN: e_,
        EXPERIMENT_OVERRIDE_BUCKET: e_,
        OVERLAY_SET_ENABLED: em,
        GAME_LAUNCH_SUCCESS: eu,
        RUNNING_GAMES_CHANGE: ec,
        RUNNING_GAME_TOGGLE_OVERLAY: ed,
        OVERLAY_SET_CLICK_ZONES: eg,
        OVERLAY_SET_INPUT_LOCKED: ev,
        OVERLAY_ACTIVATE_REGION: ey,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eb,
        OVERLAY_RENDER_DEBUG_MODE: eI,
        OVERLAY_UPDATE_OVERLAY_METHOD: ef,
        OVERLAY_UPDATE_OVERLAY_STATE: eE,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eh,
        OVERLAY_CRASHED: ep
    }));
