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
        C(this, 'clickZones', []);
    }
}
let V = new Z();
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
function W(e) {
    if ((null == P || P.trackGame(e), Y(e), !D.has(e))) D.add(e), c.Z.updateOverlayState(e, d.mM.WAITING_FOR_OVERLAY_OPEN);
}
function K(e) {
    null == P || P.untrackGame(e), D.delete(e), O.verbose('Removing tracked game '.concat(e));
}
function z() {
    for (let e of D) null == P || P.untrackGame(e);
    D.clear(), O.verbose('Cleared all tracked games');
}
function q() {
    return (0, b.NW)('overlay_store_v3', !1);
}
function Q() {
    if (!M) {
        z();
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
    for (let n of new Set([...D].filter((n) => !e.has(n)))) K(n);
    for (let e of D) W(e);
}
function X(e) {
    let n = !e;
    null == P || P.setInteractionEnabled(n), w.toggleGPUBoost('OVERLAY_UNLOCKED', n);
}
function J(e) {
    let n = p.ZP.getGameForPID(e);
    c.Z.setAssociatedGame(null != U ? U : I.R2, e, n);
}
async function $(e) {
    var n, r, i;
    O.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        await (0, y.fK)();
        let i = new Date().getTime();
        H(e, { renderer_started: !0 }), f.Z.window.setBackgroundThrottling(!1), J(e), (U = e), (0, I.tB)(U);
        let a = null !== (r = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(A.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
        return c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), H(e, { renderer_started_after: new Date().getTime() - i }), a;
    } catch (n) {
        O.error('failed to create out of process overlay host window', n),
            H(e, {
                renderer_crash_count: 1,
                error: null !== (i = null == n ? void 0 : n.message) && void 0 !== i ? i : 'unknown error'
            });
    }
    return E.default.track(N.rMx.OVERLAY_HOOK_RESULT, j(e)), '';
}
function ee() {
    var e;
    O.verbose('Destroying OOP host window'), null === f.Z || void 0 === f.Z || null === (e = f.Z.window) || void 0 === e || e.close(A.OVERLAY_V3_KEY), null != U && E.default.track(N.rMx.OVERLAY_HOOK_RESULT, j(U)), (U = null), (0, I.tB)(null != U ? U : I.R2), ea(), f.Z.window.setBackgroundThrottling(!0), w.resetGPUBoosts();
}
function et(e) {
    O.verbose('Refreshing OOP host window for pid '.concat(e)), J(e), L.delete(null != U ? U : I.R2), (U = e), (0, I.tB)(null != U ? U : I.R2);
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
function en(e, n, r, i) {
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
function er(e) {
    (k = e), c.Z.setFocusedPID(k);
}
function ei(e) {
    ea();
}
function ea() {
    (k = null), c.Z.setFocusedPID(null);
}
function es(e) {
    c.Z.successfullyShown(e);
}
let eo = (() => {
    let e = null;
    async function n() {
        if (!S.iP) throw (O.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await v.ZP.ensureModule('discord_desktop_overlay');
            let i = v.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(en), i.setHostWindowCallbacks($, ee, et), i.setFocusCallback(er), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, ei), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, es), (P = i), (0, I.vR)(!0), Q();
        } catch (e) {
            throw (O.error('failed loading overlay module', e), (0, I.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function el(e, n) {
    if (!!S.iP) {
        if (
            ((M = e),
            T.v.update({
                enabled: e,
                global: n
            }),
            null == P)
        ) {
            eo();
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
function e_(e) {
    w.toggleGPUBoost(e.reason, e.enabled);
}
function eh() {
    O.verbose('Maybe Enable Overlay'), q() ? el(T.v.enabled, T.v.global) : M && ((M = !1), (0, I.vR)(!1));
}
function ep(e) {
    let { enabled: n, global: r } = e;
    el(n, r);
}
function em(e) {
    let { zones: n } = e;
    V.setClickZones(n);
}
function eg(e) {
    let { locked: n, pid: r } = e;
    if (!n && !D.has(r)) return;
    if ((n ? L.delete(r) : L.add(r), null == F || (clearTimeout(F), (F = null), !n)))
        n
            ? X(n)
            : (F = setTimeout(() => {
                  X(n), (F = null);
              }, 100));
}
function eE(e) {
    let { region: n } = e;
    X(!1);
}
function ev() {
    X(!0);
}
function eI(e) {
    let { enabled: n } = e;
    B = n;
}
function eT(e) {
    let { enabled: n } = e;
    G = n;
}
class eb extends (a = l.ZP.Store) {
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
        return q();
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
C(eb, 'displayName', 'OverlayStore-v3'),
    (n.ZP = new eb(u.Z, {
        CONNECTION_OPEN: eh,
        EXPERIMENT_OVERRIDE_BUCKET: eh,
        OVERLAY_SET_ENABLED: ep,
        GAME_LAUNCH_SUCCESS: eu,
        RUNNING_GAMES_CHANGE: ec,
        RUNNING_GAME_TOGGLE_OVERLAY: ed,
        OVERLAY_SET_CLICK_ZONES: em,
        OVERLAY_SET_INPUT_LOCKED: eg,
        OVERLAY_ACTIVATE_REGION: eE,
        OVERLAY_DEACTIVATE_ALL_REGIONS: ev,
        OVERLAY_CLICK_ZONE_DEBUG_MODE: eI,
        OVERLAY_RENDER_DEBUG_MODE: eT,
        OVERLAY_UPDATE_OVERLAY_METHOD: ef,
        OVERLAY_SET_GPU_BOOST_REQUESTED: e_
    }));
