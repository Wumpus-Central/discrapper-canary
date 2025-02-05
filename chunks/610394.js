n.d(t, {
    ZP: () => eR,
    zS: () => A
}),
    n(47120),
    n(411104);
var i,
    r = n(442837),
    a = n(570140),
    s = n(13245),
    o = n(615287),
    l = n(579806),
    u = n(710845),
    c = n(353926),
    d = n(594190),
    f = n(928518),
    _ = n(314897),
    p = n(626135),
    h = n(998502),
    m = n(145597),
    g = n(454991),
    E = n(32300),
    v = n(829907),
    y = n(388627),
    I = n(987650),
    b = n(501787),
    T = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var A = (function (e) {
    return (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), e;
})({});
class N {
    constructor() {
        S(this, 'gpuBoostRequests', new Set()),
            S(this, 'isGPUBoosted', !1),
            S(this, 'toggleGPUBoost', (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            S(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            S(this, 'shouldBoostGPU', () => this.gpuBoostRequests.size > 0),
            S(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let i = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getGpuProcessId) || void 0 === e ? void 0 : e.call(t));
                    if (null == i) return;
                    h.ZP.SetGPUBoostEnabledByPid(i, n) && (this.isGPUBoosted = n);
                } catch (e) {
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), C.error('Error during GPU boost request flush:', e), Y(null != M ? M : m.R2, e);
                }
            });
    }
}
let C = new u.Z('OverlayStoreV3'),
    R = new Set(),
    O = new Set(),
    D = {},
    x = new N(),
    L = null,
    P = !1,
    w = null,
    M = null,
    k = null,
    U = {},
    G = {};
class B {
    setClickZones(e) {
        if (P) {
            this.clickZones = e;
            try {
                let t = e.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }));
                null == L || L.setCaptureZones(t);
            } catch (e) {
                C.error('Error setting capture zones:', e), Y(null != M ? M : m.R2, e);
            }
        }
    }
    hasClickZones() {
        return this.clickZones.length > 0;
    }
    clearClickZones() {
        (this.clickZones = []), null == L || L.setCaptureZones([]);
    }
    constructor() {
        S(this, 'clickZones', []);
    }
}
let Z = new B(),
    F = new Set();
function V(e) {
    var t;
    return null !== (t = D[e]) && void 0 !== t ? t : {};
}
function j(e, t) {
    var n, i;
    let r = null === (n = D[e]) || void 0 === n ? void 0 : n.error,
        a = null === (i = D[e]) || void 0 === i ? void 0 : i.error_description;
    (D[e] = {
        ...D[e],
        ...t
    }),
        null != r && (D[e].error = r),
        null != a && (D[e].error_description = a);
}
function H(e) {
    var t, n, i;
    if (null != D[e]) return;
    let r = d.ZP.getGameForPID(e);
    D[e] = {
        overlay_method: o.gl[null !== (t = G[e]) && void 0 !== t ? t : o.gl.OutOfProcess],
        success: !1,
        game_name: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : null,
        game_id: null !== (i = null == r ? void 0 : r.id) && void 0 !== i ? i : null,
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
function Y(e, t) {
    e !== m.R2 &&
        j(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function W(e, t) {
    e !== m.R2 &&
        j(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function K(e, t) {
    try {
        if ((null != t && (G[e] = t), null == L || L.trackGame(e), H(e), R.has(e))) return;
        R.add(e), s.Z.updateOverlayState(e, o.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        C.error('Error tracking game:', t), Y(e, t);
    }
}
function z(e) {
    try {
        null == L || L.untrackGame(e), R.delete(e), delete U[e], delete G[e], C.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        C.error('Error removing tracked game:', t), Y(e, t);
    }
}
function q() {
    try {
        for (let e of R) null == L || L.untrackGame(e);
        R.clear(), (U = {}), (G = {}), C.verbose('Cleared all tracked games');
    } catch (e) {
        C.error('Error clearing tracked games:', e), Y(m.R2, e);
    }
}
function Q() {
    return (0, E.NW)('overlay_store_v3', !1);
}
function X() {
    if (!P) {
        q();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => {
                var t, n;
                return null !== (n = null === (t = d.ZP.getGameOverlayStatus(e)) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
            })
            .map((e) => e.pid)
    );
    for (let t of new Set([...R].filter((t) => !e.has(t)))) z(t);
    for (let e of R) K(e);
}
function J(e) {
    if (null == L) {
        C.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        L.setInteractionEnabled(t), x.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        C.error('Error during overlay lock:', e), Y(null != M ? M : m.R2, e);
    }
}
function $(e) {
    let t = d.ZP.getGameForPID(e);
    s.Z.setAssociatedGame(null != M ? M : m.R2, e, t);
}
async function ee(e) {
    C.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        await (0, y.fK)();
        let i = new Date().getTime();
        j(e, {
            renderer_started: !0,
            graphics_info_after: await (0, v.hj)(e, 0)
        }),
            l.Z.window.setBackgroundThrottling(!1),
            h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && x.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            $(e),
            (M = e),
            (0, m.tB)(e);
        let r = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(b.$J))) && void 0 !== n ? n : '';
        return s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING), j(e, { renderer_started_after: new Date().getTime() - i }), ed(!1), r;
    } catch (t) {
        C.error('failed to create out of process overlay host window', t), W(e, t), s.Z.updateOverlayState(e, o.mM.OVERLAY_CRASHED_DISABLED);
    }
    return en(e), '';
}
function et() {
    C.verbose('Destroying OOP host window'), x.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(b.$J);
    } catch (e) {
        C.error('Error destroying overlay window:', e), Y(null != M ? M : m.R2, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        C.error('Error setting background throttling:', e), Y(null != M ? M : m.R2, e);
    }
    el(), O.clear(), null != M && en(M), (M = null), (0, m.tB)(null != M ? M : m.R2);
}
function en(e) {
    var t;
    let n = null !== (t = V(e).renderer_started_after) && void 0 !== t ? t : new Date().getTime();
    j(e, { uptime_process_renderer: new Date().getTime() - n }), p.default.track(T.rMx.OVERLAY_HOOK_RESULT, V(e));
}
function ei(e) {
    try {
        C.verbose('Refreshing OOP host window for pid '.concat(e)), $(e), O.delete(null != M ? M : m.R2), (M = e), (0, m.tB)(null != M ? M : m.R2);
        let t = f.Z.getWindow(b.$J),
            n = () =>
                new Promise((e) => {
                    null == t ||
                        t.requestAnimationFrame(() => {
                            let t = new MessageChannel();
                            (t.port1.onmessage = () => {
                                e();
                            }),
                                t.port2.postMessage(void 0);
                        });
                }),
            i = 0,
            r = () => {
                15 === i ? (null == L || L.readyToShow(e), s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING), C.verbose('Showing overlay v3 for pid '.concat(e))) : ((i += 1), n().then(r));
            };
        r();
    } catch (e) {
        C.error('failed to refresh out of process overlay host window', e), Y(null != M ? M : m.R2, e);
    }
}
function er(e, t, n, i) {
    let r = f.Z.getWindow(b.$J);
    if (null == r) return;
    let a = Math.ceil(n * r.innerWidth),
        s = Math.ceil(i * r.innerHeight),
        o = new MouseEvent(t, {
            screenX: a,
            screenY: s,
            clientX: a,
            clientY: s,
            bubbles: !0,
            view: r
        }),
        l = r.document.elementFromPoint(a, s);
    if (null == l) throw Error();
    l.dispatchEvent(o);
}
function ea() {
    if (null != w) {
        let t = G[w] === o.gl.OutOfProcessLimitedInteraction;
        try {
            var e;
            null == L || null === (e = L.setLimitedInteraction) || void 0 === e || e.call(L, t);
        } catch (e) {
            C.error('Error setting limited interaction mode:', e), Y(w, e);
        }
        h.ZP.setFocusable(b.$J, !t);
    }
    s.Z.setFocusedPID(w);
}
function es(e) {
    (w = e), ea();
}
function eo(e) {
    el();
}
function el() {
    (w = null), ea();
}
function eu(e) {
    s.Z.successfullyShown(e), s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING);
}
let ec = (() => {
    let e = null;
    async function t() {
        if (!I.iP) throw (C.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, t, n;
            await h.ZP.ensureModule('discord_desktop_overlay');
            let i = h.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(er), i.setHostWindowCallbacks(ee, et, ei), i.setFocusCallback(es), null === (t = i.setFocusLostCallback) || void 0 === t || t.call(i, eo), null === (n = i.setSuccessfullyShownCallback) || void 0 === n || n.call(i, eu), (L = i), (0, m.vR)(!0), X();
        } catch (e) {
            throw (C.error('failed loading overlay module', e), (0, m.vR)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function ed(e) {
    null == L || L.setInteractionEnabled(e);
}
function ef(e) {
    if (I.iP && ((P = e), null == L)) {
        ec();
        return;
    }
}
function e_(e) {}
function ep(e) {}
function eh(e) {}
function em(e) {
    C.verbose('Updating OverlayMethod', e), e.overlayMethod === o.gl.OutOfProcess || e.overlayMethod === o.gl.OutOfProcessLimitedInteraction ? K(e.pid, e.overlayMethod) : z(e.pid);
}
function eg(e) {
    let { pid: t, error: n } = e;
    if (R.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        W(t, null != e ? e : Error('unknown error'));
    }
}
function eE(e) {
    x.toggleGPUBoost(e.reason, e.enabled);
}
function ev() {
    C.verbose('Maybe Enable Overlay'), Q() ? ef(g.v.enabled && !g.v.legacyEnabled) : P && ((P = !1), (0, m.vR)(!1));
}
function ey(e) {
    let { enabled: t, legacyEnabled: n } = e;
    ef(t && !n);
}
function eI(e) {
    let { zones: t } = e;
    Z.setClickZones(t);
}
function eb(e) {
    U[e.pid] = e.overlayState;
}
function eT(e) {
    let { locked: t, pid: n } = e,
        i = U[n];
    if (t || i !== o.mM.OVERLAY_CRASHED_DISABLED)
        t ? O.delete(n) : O.add(n),
            (null == k || (clearTimeout(k), (k = null), !t)) &&
                (t
                    ? J(t)
                    : (k = setTimeout(() => {
                          J(t), (k = null);
                      }, 100)));
}
function eS(e) {
    let { region: t } = e;
    J(!1);
}
function eA() {
    J(!0);
}
function eN(e) {
    let { enabled: t, mode: n } = e;
    t ? F.add(n) : F.delete(n);
}
class eC extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, _.default, c.Z);
    }
    isInputLocked(e) {
        return !O.has(e);
    }
    isSupported() {
        return I.iP;
    }
    isOverlayV3Enabled() {
        return Q();
    }
    isOverlayV3EnabledForPID(e) {
        return R.has(e);
    }
    get enabled() {
        return P;
    }
    hasRenderDebugMode(e) {
        return F.has(e);
    }
    getFocusedPID() {
        return w;
    }
    isFocused(e) {
        return null != w && e !== m.R2 && w === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == w ? null : null !== (e = d.ZP.getRunningGames().find((e) => e.pid === w)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return R.has(e);
    }
}
S(eC, 'displayName', 'OverlayStore-v3');
let eR = new eC(a.Z, {
    CONNECTION_OPEN: ev,
    EXPERIMENT_OVERRIDE_BUCKET: ev,
    OVERLAY_SET_ENABLED: ey,
    GAME_LAUNCH_SUCCESS: e_,
    RUNNING_GAMES_CHANGE: ep,
    RUNNING_GAME_TOGGLE_OVERLAY: eh,
    OVERLAY_SET_CLICK_ZONES: eI,
    OVERLAY_SET_INPUT_LOCKED: eT,
    OVERLAY_ACTIVATE_REGION: eS,
    OVERLAY_DEACTIVATE_ALL_REGIONS: eA,
    OVERLAY_RENDER_DEBUG_MODE: eN,
    OVERLAY_UPDATE_OVERLAY_METHOD: em,
    OVERLAY_UPDATE_OVERLAY_STATE: eb,
    OVERLAY_SET_GPU_BOOST_REQUESTED: eE,
    OVERLAY_CRASHED: eg
});
