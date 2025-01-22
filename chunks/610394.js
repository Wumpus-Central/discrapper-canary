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
    B = null;
class G {
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
let Z = new G(),
    F = new Set();
function V(e) {
    var n;
    return null !== (n = x[e]) && void 0 !== n ? n : {};
}
function j(e, n) {
    x[e] = {
        ...x[e],
        ...n
    };
}
function H(e) {
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
function Y(e) {
    if ((null == P || P.trackGame(e), H(e), !D.has(e))) D.add(e), c.Z.updateOverlayState(e, d.mM.WAITING_FOR_OVERLAY_OPEN);
}
function W(e) {
    null == P || P.untrackGame(e), D.delete(e), O.verbose('Removing tracked game '.concat(e));
}
function K() {
    for (let e of D) null == P || P.untrackGame(e);
    D.clear(), O.verbose('Cleared all tracked games');
}
function z() {
    return (0, I.NW)('overlay_store_v3', !1);
}
function q() {
    if (!M) {
        K();
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
    for (let n of new Set([...D].filter((n) => !e.has(n)))) W(n);
    for (let e of D) Y(e);
}
function Q(e) {
    let n = !e;
    null == P || P.setInteractionEnabled(n), w.toggleGPUBoost('OVERLAY_UNLOCKED', n);
}
function X(e) {
    let n = _.ZP.getGameForPID(e);
    c.Z.setAssociatedGame(null != U ? U : y.R2, e, n);
}
async function J(e) {
    var n, r, i;
    O.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        await (0, T.fK)();
        let i = new Date().getTime();
        j(e, { renderer_started: !0 }), f.Z.window.setBackgroundThrottling(!1), X(e), (U = e), (0, y.tB)(U);
        let a = null !== (r = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(A.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
        return c.Z.updateOverlayState(e, d.mM.OVERLAY_RENDERING), j(e, { renderer_started_after: new Date().getTime() - i }), a;
    } catch (n) {
        O.error('failed to create out of process overlay host window', n),
            j(e, {
                renderer_crash_count: 1,
                error: null !== (i = null == n ? void 0 : n.message) && void 0 !== i ? i : 'unknown error'
            });
    }
    return E.default.track(C.rMx.OVERLAY_HOOK_RESULT, V(e)), '';
}
function $() {
    var e;
    O.verbose('Destroying OOP host window'), null === f.Z || void 0 === f.Z || null === (e = f.Z.window) || void 0 === e || e.close(A.OVERLAY_V3_KEY), null != U && E.default.track(C.rMx.OVERLAY_HOOK_RESULT, V(U)), (U = null), (0, y.tB)(null != U ? U : y.R2), ei(), f.Z.window.setBackgroundThrottling(!0), w.resetGPUBoosts();
}
function ee(e) {
    O.verbose('Refreshing OOP host window for pid '.concat(e)), X(e), L.delete(null != U ? U : y.R2), (U = e), (0, y.tB)(null != U ? U : y.R2);
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
function et(e, n, r, i) {
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
function en(e) {
    (k = e), c.Z.setFocusedPID(k);
}
function er(e) {
    ei();
}
function ei() {
    (k = null), c.Z.setFocusedPID(null);
}
function ea(e) {
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
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(et), i.setHostWindowCallbacks(J, $, ee), i.setFocusCallback(en), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, er), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, ea), (P = i), (0, y.vR)(!0), q();
        } catch (e) {
            throw (O.error('failed loading overlay module', e), (0, y.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function es(e) {
    if (!!S.iP) {
        if (((M = e), null == P)) {
            eo();
            return;
        }
    }
}
function el(e) {}
function eu(e) {}
function ec(e) {}
function ed(e) {
    O.verbose('Updating OverlayMethod', e), e.overlayMethod === d.gl.OutOfProcess ? Y(e.pid) : W(e.pid);
}
function ef(e) {
    w.toggleGPUBoost(e.reason, e.enabled);
}
function ep() {
    O.verbose('Maybe Enable Overlay'), z() ? es(b.v.enabled && !b.v.legacyEnabled) : M && ((M = !1), (0, y.vR)(!1));
}
function eh(e) {
    let { enabled: n, legacyEnabled: r } = e;
    es(n && !r);
}
function e_(e) {
    let { zones: n } = e;
    Z.setClickZones(n);
}
function em(e) {
    let { locked: n, pid: r } = e;
    if ((n ? L.delete(r) : L.add(r), null == B || (clearTimeout(B), (B = null), !n)))
        n
            ? Q(n)
            : (B = setTimeout(() => {
                  Q(n), (B = null);
              }, 100));
}
function eg(e) {
    let { region: n } = e;
    Q(!1);
}
function eE() {
    Q(!0);
}
function ev(e) {
    let { enabled: n, mode: r } = e;
    n ? F.add(r) : F.delete(r);
}
class ey extends (a = l.ZP.Store) {
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
        return z();
    }
    isOverlayV3EnabledForPID(e) {
        return D.has(e);
    }
    get enabled() {
        return M;
    }
    hasRenderDebugMode(e) {
        return F.has(e);
    }
    getFocusedPID() {
        return k;
    }
    isReady(e) {
        return D.has(e);
    }
}
N(ey, 'displayName', 'OverlayStore-v3'),
    (n.ZP = new ey(u.Z, {
        CONNECTION_OPEN: ep,
        EXPERIMENT_OVERRIDE_BUCKET: ep,
        OVERLAY_SET_ENABLED: eh,
        GAME_LAUNCH_SUCCESS: el,
        RUNNING_GAMES_CHANGE: eu,
        RUNNING_GAME_TOGGLE_OVERLAY: ec,
        OVERLAY_SET_CLICK_ZONES: e_,
        OVERLAY_SET_INPUT_LOCKED: em,
        OVERLAY_ACTIVATE_REGION: eg,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eE,
        OVERLAY_RENDER_DEBUG_MODE: ev,
        OVERLAY_UPDATE_OVERLAY_METHOD: ed,
        OVERLAY_SET_GPU_BOOST_REQUESTED: ef
    }));
