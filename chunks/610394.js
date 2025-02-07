n.d(t, {
    ZP: () => eD,
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
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), C.error('Error during GPU boost request flush:', e), W(null != M ? M : m.R2, e);
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
    G = {},
    B = !1;
class Z {
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
                C.error('Error setting capture zones:', e), W(null != M ? M : m.R2, e);
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
let F = new Z(),
    V = new Set();
function j(e) {
    var t;
    return null !== (t = D[e]) && void 0 !== t ? t : {};
}
function H(e, t) {
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
function Y(e) {
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
function W(e, t) {
    e !== m.R2 &&
        H(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function K(e, t) {
    e !== m.R2 &&
        H(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function z(e, t) {
    try {
        if ((null != t && (G[e] = t), null == L || L.trackGame(e), Y(e), R.has(e))) return;
        R.add(e), s.Z.updateOverlayState(e, o.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        C.error('Error tracking game:', t), W(e, t);
    }
}
function q(e) {
    try {
        null == L || L.untrackGame(e), R.delete(e), delete U[e], delete G[e], C.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        C.error('Error removing tracked game:', t), W(e, t);
    }
}
function Q() {
    try {
        for (let e of R) null == L || L.untrackGame(e);
        R.clear(), (U = {}), (G = {}), C.verbose('Cleared all tracked games');
    } catch (e) {
        C.error('Error clearing tracked games:', e), W(m.R2, e);
    }
}
function X() {
    return (0, E.NW)('overlay_store_v3', !1);
}
function J() {
    if (!P) {
        Q();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...R].filter((t) => !e.has(t)))) q(t);
    for (let e of R) z(e);
}
function $(e) {
    if (null == L) {
        C.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        L.setInteractionEnabled(t), x.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        C.error('Error during overlay lock:', e), W(null != M ? M : m.R2, e);
    }
}
function ee(e) {
    let t = d.ZP.getGameForPID(e);
    s.Z.setAssociatedGame(null != M ? M : m.R2, e, t);
}
async function et(e) {
    C.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        await (0, y.fK)();
        let i = new Date().getTime();
        H(e, {
            renderer_started: !0,
            graphics_info_after: await (0, v.hj)(e, 0)
        }),
            l.Z.window.setBackgroundThrottling(!1),
            h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && x.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            ee(e),
            (M = e),
            (0, m.tB)(e);
        let r = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(b.$J))) && void 0 !== n ? n : '';
        return s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING), H(e, { renderer_started_after: new Date().getTime() - i }), ef(!1), r;
    } catch (t) {
        C.error('failed to create out of process overlay host window', t), K(e, t), s.Z.updateOverlayState(e, o.mM.OVERLAY_CRASHED_DISABLED);
    }
    return ei(e), '';
}
function en() {
    C.verbose('Destroying OOP host window'), x.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(b.$J);
    } catch (e) {
        C.error('Error destroying overlay window:', e), W(null != M ? M : m.R2, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        C.error('Error setting background throttling:', e), W(null != M ? M : m.R2, e);
    }
    eu(), O.clear(), null != M && ei(M), (M = null), (0, m.tB)(null != M ? M : m.R2);
}
function ei(e) {
    var t;
    let n = null !== (t = j(e).renderer_started_after) && void 0 !== t ? t : new Date().getTime();
    H(e, { uptime_process_renderer: new Date().getTime() - n }), p.default.track(T.rMx.OVERLAY_HOOK_RESULT, j(e));
}
function er(e) {
    try {
        C.verbose('Refreshing OOP host window for pid '.concat(e)), ee(e), O.delete(null != M ? M : m.R2), (M = e), (0, m.tB)(null != M ? M : m.R2);
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
        C.error('failed to refresh out of process overlay host window', e), W(null != M ? M : m.R2, e);
    }
}
function ea(e, t, n, i) {
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
function es() {
    if (null != w)
        try {
            'function' == typeof (null == L ? void 0 : L.setLimitedInteraction) || C.info('No setLimitedInteraction function found, skipping');
        } catch (e) {
            C.error('Error setting limited interaction mode:', e);
        }
    s.Z.setFocusedPID(w);
}
function eo(e) {
    (w = e), es();
}
function el(e) {
    eu();
}
function eu() {
    (w = null), es();
}
function ec(e) {
    s.Z.successfullyShown(e), s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING);
}
let ed = (() => {
    let e = null;
    async function t() {
        if (!I.iP) throw (C.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, t, n;
            await h.ZP.ensureModule('discord_desktop_overlay');
            let i = h.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(ea), i.setHostWindowCallbacks(et, en, er), i.setFocusCallback(eo), null === (t = i.setFocusLostCallback) || void 0 === t || t.call(i, el), null === (n = i.setSuccessfullyShownCallback) || void 0 === n || n.call(i, ec), (L = i), (0, m.vR)(!0), J();
        } catch (e) {
            throw (C.error('failed loading overlay module', e), (0, m.vR)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function ef(e) {
    null == L || L.setInteractionEnabled(e);
}
function e_(e) {
    if (I.iP && ((P = e), null == L)) {
        ed();
        return;
    }
}
function ep(e) {}
function eh(e) {}
function em(e) {}
function eg(e) {
    C.verbose('Updating OverlayMethod', e), e.overlayMethod === o.gl.OutOfProcess || e.overlayMethod === o.gl.OutOfProcessLimitedInteraction ? z(e.pid, e.overlayMethod) : q(e.pid);
}
function eE(e) {
    let { pid: t, error: n } = e;
    if (R.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        K(t, null != e ? e : Error('unknown error'));
    }
}
function ev(e) {
    x.toggleGPUBoost(e.reason, e.enabled);
}
function ey() {
    C.verbose('Maybe Enable Overlay'), X() ? e_(g.v.oopEnabled) : P && ((P = !1), (0, m.vR)(!1));
}
function eI(e) {
    let { oopEnabled: t } = e;
    e_(t);
}
function eb(e) {
    let { zones: t } = e;
    F.setClickZones(t);
}
function eT(e) {
    U[e.pid] = e.overlayState;
}
function eS(e) {
    let { locked: t, pid: n } = e,
        i = U[n];
    if (t || i !== o.mM.OVERLAY_CRASHED_DISABLED)
        t ? O.delete(n) : O.add(n),
            (null == k || (clearTimeout(k), (k = null), !t)) &&
                (t
                    ? $(t)
                    : (k = setTimeout(() => {
                          $(t), (k = null);
                      }, 100)));
}
function eA(e) {
    let { region: t } = e;
    $(!1);
}
function eN() {
    $(!0);
}
function eC(e) {
    let { enabled: t, mode: n } = e;
    t ? V.add(n) : V.delete(n);
}
function eR() {
    c.Z.hasLoadedExperiments && !B && ((B = !0), ey());
}
class eO extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, _.default, c.Z), this.syncWith([c.Z], eR);
    }
    isInputLocked(e) {
        return !O.has(e);
    }
    isSupported() {
        return I.iP;
    }
    isOverlayV3Enabled() {
        return X();
    }
    isOverlayV3EnabledForPID(e) {
        return R.has(e);
    }
    get enabled() {
        return P;
    }
    hasRenderDebugMode(e) {
        return V.has(e);
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
S(eO, 'displayName', 'OverlayStore-v3');
let eD = new eO(a.Z, {
    EXPERIMENT_OVERRIDE_BUCKET: ey,
    OVERLAY_SET_ENABLED: eI,
    GAME_LAUNCH_SUCCESS: ep,
    RUNNING_GAMES_CHANGE: eh,
    RUNNING_GAME_TOGGLE_OVERLAY: em,
    OVERLAY_SET_CLICK_ZONES: eb,
    OVERLAY_SET_INPUT_LOCKED: eS,
    OVERLAY_ACTIVATE_REGION: eA,
    OVERLAY_DEACTIVATE_ALL_REGIONS: eN,
    OVERLAY_RENDER_DEBUG_MODE: eC,
    OVERLAY_UPDATE_OVERLAY_METHOD: eg,
    OVERLAY_UPDATE_OVERLAY_STATE: eT,
    OVERLAY_SET_GPU_BOOST_REQUESTED: ev,
    OVERLAY_CRASHED: eE
});
