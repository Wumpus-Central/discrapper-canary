n.d(t, {
    ZP: () => ew,
    zS: () => N
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
    p = n(355863),
    h = n(626135),
    m = n(998502),
    g = n(145597),
    E = n(454991),
    v = n(32300),
    y = n(829907),
    I = n(388627),
    T = n(987650),
    b = n(501787),
    S = n(981631);
function A(e, t, n) {
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
var N = (function (e) {
    return (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), e;
})({});
class C {
    constructor() {
        A(this, 'gpuBoostRequests', new Set()),
            A(this, 'isGPUBoosted', !1),
            A(this, 'toggleGPUBoost', (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            A(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            A(this, 'shouldBoostGPU', () => this.gpuBoostRequests.size > 0),
            A(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let i = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getGpuProcessId) || void 0 === e ? void 0 : e.call(t));
                    if (null == i) return;
                    m.ZP.SetGPUBoostEnabledByPid(i, n) && (this.isGPUBoosted = n);
                } catch (e) {
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), R.error('Error during GPU boost request flush:', e), K(null != k ? k : g.R2, e);
                }
            });
    }
}
let R = new u.Z('OverlayStoreV3'),
    O = new Set(),
    D = new Set(),
    L = {},
    x = new C(),
    P = null,
    w = !1,
    M = null,
    k = null,
    U = null,
    G = {},
    B = {},
    Z = !1;
class F {
    setClickZones(e) {
        if (w) {
            this.clickZones = e;
            try {
                let t = e.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }));
                null == P || P.setCaptureZones(t);
            } catch (e) {
                R.error('Error setting capture zones:', e), K(null != k ? k : g.R2, e);
            }
        }
    }
    hasClickZones() {
        return this.clickZones.length > 0;
    }
    clearClickZones() {
        (this.clickZones = []), null == P || P.setCaptureZones([]);
    }
    constructor() {
        A(this, 'clickZones', []);
    }
}
let V = new F(),
    j = new Set();
function H(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t ? t : {};
}
function Y(e, t) {
    var n, i;
    let r = null === (n = L[e]) || void 0 === n ? void 0 : n.error,
        a = null === (i = L[e]) || void 0 === i ? void 0 : i.error_description;
    (L[e] = {
        ...L[e],
        ...t
    }),
        null != r && (L[e].error = r),
        null != a && (L[e].error_description = a);
}
function W(e) {
    var t, n, i;
    if (null != L[e]) return;
    let r = d.ZP.getGameForPID(e);
    L[e] = {
        overlay_method: o.gl[null !== (t = B[e]) && void 0 !== t ? t : o.gl.OutOfProcess],
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
function K(e, t) {
    e !== g.R2 &&
        Y(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function z(e, t) {
    e !== g.R2 &&
        Y(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function q(e, t) {
    try {
        if ((null != t && (B[e] = t), null == P || P.trackGame(e), W(e), O.has(e))) return;
        O.add(e), s.Z.updateOverlayState(e, o.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        R.error('Error tracking game:', t), K(e, t);
    }
}
function Q(e) {
    try {
        null == P || P.untrackGame(e), O.delete(e), delete G[e], delete B[e], R.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        R.error('Error removing tracked game:', t), K(e, t);
    }
}
function X() {
    try {
        for (let e of O) null == P || P.untrackGame(e);
        O.clear(), (G = {}), (B = {}), R.verbose('Cleared all tracked games');
    } catch (e) {
        R.error('Error clearing tracked games:', e), K(g.R2, e);
    }
}
function J() {
    return (0, v.NW)('overlay_store_v3', !1);
}
function $() {
    if (!w) {
        X();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...O].filter((t) => !e.has(t)))) Q(t);
    for (let e of O) q(e);
}
function ee(e) {
    if (null == P) {
        R.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        P.setInteractionEnabled(t), x.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        R.error('Error during overlay lock:', e), K(null != k ? k : g.R2, e);
    }
}
function et(e) {
    let t = d.ZP.getGameForPID(e);
    s.Z.setAssociatedGame(null != k ? k : g.R2, e, t);
}
async function en(e) {
    R.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        let i = new Date().getTime();
        Y(e, { mounting_started_at: i }),
            await (0, I.fK)(),
            Y(e, {
                renderer_started: !0,
                fullscreen_type: await (0, y.hj)(e, 0),
                graphics_info_after: new Date().getTime() - i
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && x.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            et(e),
            (k = e),
            (0, g.tB)(e),
            R.info('Getting Native Handle for pid', e);
        let r = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(b.$J))) && void 0 !== n ? n : '';
        return s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING), Y(e, { renderer_started_after: new Date().getTime() - i }), e_(!1), r;
    } catch (t) {
        R.error('failed to create out of process overlay host window', t), z(e, t), s.Z.updateOverlayState(e, o.mM.OVERLAY_CRASHED_DISABLED);
    }
    return er(e), '';
}
function ei() {
    R.verbose('Destroying OOP host window'), x.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(b.$J);
    } catch (e) {
        R.error('Error destroying overlay window:', e), K(null != k ? k : g.R2, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        R.error('Error setting background throttling:', e), K(null != k ? k : g.R2, e);
    }
    ec(), D.clear(), null != k && er(k), (k = null), (0, g.tB)(null != k ? k : g.R2);
}
function er(e) {
    h.default.track(S.rMx.OVERLAY_HOOK_RESULT, H(e));
}
function ea(e) {
    try {
        R.verbose('Refreshing OOP host window for pid '.concat(e)), et(e), D.delete(null != k ? k : g.R2), (k = e), (0, g.tB)(null != k ? k : g.R2);
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
                15 === i ? (null == P || P.readyToShow(e), s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING), R.verbose('Showing overlay v3 for pid '.concat(e))) : ((i += 1), n().then(r));
            };
        r();
    } catch (e) {
        R.error('failed to refresh out of process overlay host window', e), K(null != k ? k : g.R2, e);
    }
}
function es(e, t, n, i) {
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
function eo() {
    if (null != M)
        try {
            'function' == typeof (null == P ? void 0 : P.setLimitedInteraction) || R.info('No setLimitedInteraction function found, skipping');
        } catch (e) {
            R.error('Error setting limited interaction mode:', e);
        }
    s.Z.setFocusedPID(M);
}
function el(e) {
    (M = e), eo();
}
function eu(e) {
    ec();
}
function ec() {
    (M = null), eo();
}
function ed(e) {
    s.Z.successfullyShown(e), s.Z.updateOverlayState(e, o.mM.OVERLAY_RENDERING);
    let t = H(e).mounting_started_at;
    Y(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    });
}
let ef = (() => {
    let e = null;
    async function t() {
        if (!T.iP) {
            R.error('Attempted to load overlay on an unsupported platform.');
            return;
        }
        R.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let i = m.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(es), i.setHostWindowCallbacks(en, ei, ea), i.setFocusCallback(el), null === (t = i.setFocusLostCallback) || void 0 === t || t.call(i, eu), null === (n = i.setSuccessfullyShownCallback) || void 0 === n || n.call(i, ed), (P = i), (0, g.vR)(!0), $(), R.info('OverlayV3 Module Loaded');
        } catch (e) {
            throw (R.error('failed loading overlay module', e), (0, g.vR)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function e_(e) {
    null == P || P.setInteractionEnabled(e);
}
function ep(e) {
    if (T.iP && ((w = e), null == P && J())) {
        ef();
        return;
    }
}
function eh(e) {}
function em(e) {}
function eg(e) {}
async function eE(e) {
    e.overlayMethod === o.gl.OutOfProcess || e.overlayMethod === o.gl.OutOfProcessLimitedInteraction ? (null == P && (await ef()), q(e.pid, e.overlayMethod)) : Q(e.pid), eP.emitChange();
}
function ev(e) {
    R.verbose('Updating OverlayMethod', e), eE(e);
}
function ey(e) {
    let { pid: t, error: n } = e;
    if (O.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        z(t, null != e ? e : Error('unknown error'));
    }
}
function eI(e) {
    x.toggleGPUBoost(e.reason, e.enabled);
}
function eT() {
    R.verbose('Maybe Enable Overlay'), J() ? (ep(E.v.oopEnabled), (0, g.vR)(!0), ef()) : w && ep(!1);
}
function eb(e) {
    let { oopEnabled: t } = e;
    ep(t);
}
function eS(e) {
    let { zones: t } = e;
    V.setClickZones(t);
}
function eA(e) {
    G[e.pid] = e.overlayState;
}
function eN(e) {
    let { locked: t, pid: n } = e,
        i = G[n];
    if (t || i !== o.mM.OVERLAY_CRASHED_DISABLED)
        t ? D.delete(n) : D.add(n),
            (null == U || (clearTimeout(U), (U = null), !t)) &&
                (t
                    ? ee(t)
                    : (U = setTimeout(() => {
                          ee(t), (U = null);
                      }, 100)));
}
function eC(e) {
    let { region: t } = e;
    ee(!1);
}
function eR() {
    ee(!0);
}
function eO(e) {
    let { enabled: t, mode: n } = e;
    t ? j.add(n) : j.delete(n);
}
function eD() {
    c.Z.hasLoadedExperiments && !Z && ((Z = !0), eT());
}
function eL() {
    Z = !1;
}
class ex extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, _.default, c.Z), this.syncWith([c.Z], eD);
    }
    isInputLocked(e) {
        return !D.has(e);
    }
    isSupported() {
        return T.iP;
    }
    isOverlayV3Enabled() {
        return J();
    }
    isOverlayV3EnabledForPID(e) {
        return O.has(e);
    }
    isPinned(e) {
        let t = p.Z.getLayout(b.OVERLAY_V3_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = p.Z.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    get enabled() {
        return w;
    }
    hasRenderDebugMode(e) {
        return j.has(e);
    }
    getFocusedPID() {
        return M;
    }
    isFocused(e) {
        return null != M && e !== g.R2 && M === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == M ? null : null !== (e = d.ZP.getRunningGames().find((e) => e.pid === M)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return O.has(e);
    }
}
A(ex, 'displayName', 'OverlayStore-v3');
let eP = new ex(a.Z, {
        LOGIN: eL,
        LOGOUT: eL,
        EXPERIMENT_OVERRIDE_BUCKET: eT,
        OVERLAY_SET_ENABLED: eb,
        GAME_LAUNCH_SUCCESS: eh,
        RUNNING_GAMES_CHANGE: em,
        RUNNING_GAME_TOGGLE_OVERLAY: eg,
        OVERLAY_SET_CLICK_ZONES: eS,
        OVERLAY_SET_INPUT_LOCKED: eN,
        OVERLAY_ACTIVATE_REGION: eC,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eR,
        OVERLAY_RENDER_DEBUG_MODE: eO,
        OVERLAY_UPDATE_OVERLAY_METHOD: ev,
        OVERLAY_UPDATE_OVERLAY_STATE: eA,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eI,
        OVERLAY_CRASHED: ey
    }),
    ew = eP;
