r.d(n, {
    zS: function () {
        return i;
    }
});
var i,
    a,
    s = r(47120);
var o = r(411104);
var l = r(442837),
    u = r(570140),
    c = r(13245),
    d = r(615287),
    f = r(579806),
    _ = r(710845),
    h = r(353926),
    p = r(594190),
    m = r(928518),
    g = r(314897),
    E = r(626135),
    v = r(998502),
    I = r(145597),
    T = r(454991),
    b = r(32300),
    y = r(388627),
    S = r(987650),
    A = r(501787),
    N = r(981631);
function C(e, n, r) {
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
        C(this, 'gpuBoostRequests', new Set()),
            C(this, 'isGPUBoosted', !1),
            C(this, 'toggleGPUBoost', (e, n) => {
                n ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            C(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            C(this, 'shouldBoostGPU', () => this.gpuBoostRequests.size > 0),
            C(this, 'flushGPUBoostRequests', async () => {
                let e = this.shouldBoostGPU();
                if (this.isGPUBoosted === e) return;
                let n = await f.Z.processUtils.getGpuProcessId();
                if (null != n) v.ZP.SetGPUBoostEnabledByPid(n, e) && (this.isGPUBoosted = e);
            });
    }
}
let O = new _.Z('OverlayStoreV3'),
    D = new Set(),
    L = new Set(),
    x = {},
    w = new R(),
    P = null,
    M = !1,
    k = null,
    U = null,
    B = !1,
    G = !1,
    F = null;
function Z(e) {
    var n;
    return null !== (n = x[e]) && void 0 !== n ? n : {};
}
function V(e, n) {
    x[e] = {
        ...x[e],
        ...n
    };
}
function j(e) {
    var n, r;
    if (null != x[e]) return;
    let i = p.ZP.getGameForPID(e);
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
function H(e) {
    if ((null == P || P.trackGame(e), j(e), !D.has(e))) D.add(e), c.Z.updateOverlayState(e, d.mM.WAITING_FOR_OVERLAY_OPEN);
}
function Y(e) {
    null == P || P.untrackGame(e), D.delete(e), O.verbose('Removing tracked game '.concat(e));
}
function W() {
    for (let e of D) null == P || P.untrackGame(e);
    D.clear(), O.verbose('Cleared all tracked games');
}
function K() {
    return (0, b.NW)('overlay_store_v3', !1);
}
function z() {
    if (!M) {
        W();
        return;
    }
    let e = new Set(
        p.ZP.getRunningGames()
            .filter((e) => {
                var n, r;
                return null !== (r = null === (n = p.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
            })
            .map((e) => e.pid)
    );
    for (let n of new Set([...D].filter((n) => !e.has(n)))) Y(n);
    for (let e of D) H(e);
}
function q(e) {
    null == P || P.setInteractionEnabled(!e), w.toggleGPUBoost('OVERLAY_UNLOCKED', !e);
}
function Q(e) {
    let n = p.ZP.getGameForPID(e);
    c.Z.setAssociatedGame(null != U ? U : I.R2, e, n);
}
async function X(e) {
    var n, r, i;
    O.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        await (0, y.fK)();
        let i = new Date().getTime();
        V(e, { renderer_started: !0 }), f.Z.window.setBackgroundThrottling(!1), Q(e), (U = e), (0, I.tB)(U);
        let a = null !== (r = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(A.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
        return c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), V(e, { renderer_started_after: new Date().getTime() - i }), a;
    } catch (n) {
        O.error('failed to create out of process overlay host window', n),
            V(e, {
                renderer_crash_count: 1,
                error: null !== (i = null == n ? void 0 : n.message) && void 0 !== i ? i : 'unknown error'
            });
    }
    return E.default.track(N.rMx.OVERLAY_HOOK_RESULT, Z(e)), '';
}
function J() {
    var e;
    O.verbose('Destroying OOP host window'), null === f.Z || void 0 === f.Z || null === (e = f.Z.window) || void 0 === e || e.close(A.OVERLAY_V3_KEY), null != U && E.default.track(N.rMx.OVERLAY_HOOK_RESULT, Z(U)), (U = null), (0, I.tB)(null != U ? U : I.R2), f.Z.window.setBackgroundThrottling(!0), w.resetGPUBoosts();
}
function $(e) {
    O.verbose('Refreshing OOP host window for pid '.concat(e)), Q(e), L.delete(null != U ? U : I.R2), (U = e), (0, I.tB)(null != U ? U : I.R2);
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
            15 === i ? (null == P || P.readyToShow(e), O.verbose('Showing overlay v3 for pid '.concat(e))) : ((i += 1), r().then(a));
        };
    a();
}
function ee(e, n, r, i) {
    let a = m.Z.getWindow(A.OVERLAY_V3_KEY);
    if (null == a) return;
    let s = Math.ceil(r * a.innerWidth),
        o = Math.ceil(i * a.innerHeight),
        l = new MouseEvent(n, {
            screenX: s,
            screenY: o,
            clientX: s,
            clientY: o,
            bubbles: !0,
            view: a
        }),
        u = a.document.elementFromPoint(s, o);
    if (null == u) throw Error();
    u.dispatchEvent(l);
}
function et(e) {
    (k = e), c.Z.setFocusedPID(k);
}
function en(e) {
    (k = null), c.Z.setFocusedPID(null);
}
function er(e) {
    c.Z.successfullyShown(e);
}
let ei = (() => {
    let e = null;
    async function n() {
        if (!S.iP) throw (O.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await v.ZP.ensureModule('discord_desktop_overlay');
            let i = v.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(ee), i.setHostWindowCallbacks(X, J, $), i.setFocusCallback(et), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, en), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, er), (P = i), (0, I.vR)(!0), z();
        } catch (e) {
            throw (O.error('failed loading overlay module', e), (0, I.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function ea(e, n) {
    if (!!S.iP) {
        if (
            ((M = e),
            T.v.update({
                enabled: e,
                global: n
            }),
            null == P)
        ) {
            ei();
            return;
        }
    }
}
function es(e) {}
function eo(e) {}
function el(e) {}
function eu(e) {
    O.verbose('Updating OverlayMethod', e), e.overlayMethod === d.gl.OutOfProcess ? H(e.pid) : Y(e.pid);
}
function ec(e) {
    w.toggleGPUBoost(e.reason, e.enabled);
}
function ed() {
    O.verbose('Maybe Enable Overlay'), K() ? ea(T.v.enabled, T.v.global) : M && ((M = !1), (0, I.vR)(!1));
}
function ef(e) {
    let { enabled: n, global: r } = e;
    ea(n, r);
}
function e_(e) {
    let { zones: n } = e;
    if (!!M)
        null == P ||
            P.setCaptureZones(
                n.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }))
            );
}
function eh(e) {
    let { locked: n, pid: r } = e;
    if (!n && !D.has(r)) return;
    if ((n ? L.delete(r) : L.add(r), null == F || (clearTimeout(F), (F = null), !n)))
        n
            ? q(n)
            : (F = setTimeout(() => {
                  q(n), (F = null);
              }, 100));
}
function ep(e) {
    let { region: n } = e;
    q(!1);
}
function em() {
    q(!0);
}
function eg(e) {
    let { enabled: n } = e;
    B = n;
}
function eE(e) {
    let { enabled: n } = e;
    G = n;
}
class ev extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, g.default, h.Z);
    }
    isInputLocked(e) {
        return !L.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return K();
    }
    isOverlayV3EnabledForPID(e) {
        return D.has(e);
    }
    get enabled() {
        return M;
    }
    get clickZoneDebugMode() {
        return B;
    }
    get renderDebugMode() {
        return G;
    }
    getFocusedPID() {
        return k;
    }
    isReady(e) {
        return D.has(e);
    }
}
C(ev, 'displayName', 'OverlayStore-v3'),
    (n.ZP = new ev(u.Z, {
        CONNECTION_OPEN: ed,
        EXPERIMENT_OVERRIDE_BUCKET: ed,
        OVERLAY_SET_ENABLED: ef,
        GAME_LAUNCH_SUCCESS: es,
        RUNNING_GAMES_CHANGE: eo,
        RUNNING_GAME_TOGGLE_OVERLAY: el,
        OVERLAY_SET_CLICK_ZONES: e_,
        OVERLAY_SET_INPUT_LOCKED: eh,
        OVERLAY_ACTIVATE_REGION: ep,
        OVERLAY_DEACTIVATE_ALL_REGIONS: em,
        OVERLAY_CLICK_ZONE_DEBUG_MODE: eg,
        OVERLAY_RENDER_DEBUG_MODE: eE,
        OVERLAY_UPDATE_OVERLAY_METHOD: eu,
        OVERLAY_SET_GPU_BOOST_REQUESTED: ec
    }));
