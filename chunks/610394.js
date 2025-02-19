n.d(t, {
    ZP: () => ek,
    zS: () => A
}),
    n(47120),
    n(411104);
var r,
    i = n(442837),
    o = n(570140),
    a = n(13245),
    s = n(615287),
    l = n(579806),
    c = n(710845),
    u = n(353926),
    d = n(594190),
    f = n(928518),
    p = n(314897),
    _ = n(355863),
    h = n(626135),
    m = n(998502),
    g = n(145597),
    E = n(454991),
    v = n(32300),
    b = n(829907),
    y = n(388627),
    O = n(987650),
    S = n(501787),
    I = n(981631);
function T(e, t, n) {
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
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
var A = (function (e) {
    return (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), e;
})({});
class C {
    constructor() {
        T(this, 'gpuBoostRequests', new Set()),
            T(this, 'isGPUBoosted', !1),
            T(this, 'toggleGPUBoost', (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            T(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            T(this, 'shouldBoostGPU', () => this.gpuBoostRequests.size > 0),
            T(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getGpuProcessId) || void 0 === e ? void 0 : e.call(t));
                    if (null == r) return;
                    m.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eM.emitChange();
                } catch (e) {
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), R.error('Error during GPU boost request flush:', e), q(null != j ? j : g.R2, e);
                }
            });
    }
}
let R = new c.Z('OverlayStoreV3'),
    P = new Set(),
    w = new Set(),
    D = {},
    x = new C(),
    L = null,
    M = !1,
    k = null,
    j = null,
    U = null,
    G = null,
    B = {},
    Z = {},
    F = !1;
class V {
    setClickZones(e) {
        if (M) {
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
                R.error('Error setting capture zones:', e), q(null != j ? j : g.R2, e);
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
        T(this, 'clickZones', []);
    }
}
let H = new V(),
    W = new Set();
function Y(e) {
    var t;
    return null !== (t = D[e]) && void 0 !== t ? t : {};
}
function K(e, t) {
    var n, r;
    let i = null === (n = D[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = D[e]) || void 0 === r ? void 0 : r.error_description;
    (D[e] = N({}, D[e], t)), null != i && (D[e].error = i), null != o && (D[e].error_description = o);
}
function z(e) {
    var t, n, r;
    if (null != D[e]) return;
    let i = d.ZP.getGameForPID(e);
    D[e] = {
        overlay_method: s.gl[null !== (t = Z[e]) && void 0 !== t ? t : s.gl.OutOfProcess],
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
function q(e, t) {
    e !== g.R2 &&
        K(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function Q(e, t) {
    e !== g.R2 &&
        K(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function X(e, t) {
    try {
        if ((null != t && (Z[e] = t), null == L || L.trackGame(e), z(e), P.has(e))) return;
        P.add(e), a.Z.updateOverlayState(e, s.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        R.error('Error tracking game:', t), q(e, t);
    }
}
function J(e) {
    try {
        null == L || L.untrackGame(e), P.delete(e), delete B[e], delete Z[e], R.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        R.error('Error removing tracked game:', t), q(e, t);
    }
}
function $() {
    try {
        for (let e of P) null == L || L.untrackGame(e);
        P.clear(), (B = {}), (Z = {}), R.verbose('Cleared all tracked games');
    } catch (e) {
        R.error('Error clearing tracked games:', e), q(g.R2, e);
    }
}
function ee() {
    return (0, v.NW)('overlay_store_v3', !1);
}
function et() {
    if (!M) {
        $();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...P].filter((t) => !e.has(t)))) J(t);
    for (let e of P) X(e);
}
function en(e) {
    if (null == L) {
        R.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        L.setInteractionEnabled(t), x.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        R.error('Error during overlay lock:', e), q(null != j ? j : g.R2, e);
    }
}
function er(e) {
    let t = d.ZP.getGameForPID(e);
    a.Z.setAssociatedGame(null != j ? j : g.R2, e, t);
}
async function ei(e) {
    R.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        let r = new Date().getTime();
        K(e, { mounting_started_at: r }),
            (U = null),
            await (0, y.fK)(),
            K(e, {
                renderer_started: !0,
                fullscreen_type: await (0, b.hj)(e, 0),
                graphics_info_after: new Date().getTime() - r
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && x.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            er(e),
            (j = e),
            (0, g.tB)(e),
            R.info('Getting Native Handle for pid', e);
        let i = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(S.$J))) && void 0 !== n ? n : '';
        return a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), K(e, { renderer_started_after: new Date().getTime() - r }), eh(!1), i;
    } catch (t) {
        R.error('failed to create out of process overlay host window', t), Q(e, t), a.Z.updateOverlayState(e, s.mM.OVERLAY_CRASHED_DISABLED);
    }
    return ea(e), '';
}
function eo() {
    R.verbose('Destroying OOP host window'), x.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(S.$J);
    } catch (e) {
        R.error('Error destroying overlay window:', e), q(null != j ? j : g.R2, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        R.error('Error setting background throttling:', e), q(null != j ? j : g.R2, e);
    }
    ef(), w.clear(), null != j && ea(j), (j = null), (0, g.tB)(null != j ? j : g.R2);
}
function ea(e) {
    h.default.track(I.rMx.OVERLAY_HOOK_RESULT, Y(e));
}
function es(e) {
    try {
        R.verbose('Refreshing OOP host window for pid '.concat(e)), er(e), w.delete(null != j ? j : g.R2), (j = e), (0, g.tB)(null != j ? j : g.R2);
        let t = f.Z.getWindow(S.$J),
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
            r = 0,
            i = () => {
                15 === r ? (null == L || L.readyToShow(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), R.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        R.error('failed to refresh out of process overlay host window', e), q(null != j ? j : g.R2, e);
    }
}
function el(e, t, n, r) {
    let i = f.Z.getWindow(S.$J);
    if (null == i) return;
    let o = Math.ceil(n * i.innerWidth),
        a = Math.ceil(r * i.innerHeight),
        s = new MouseEvent(t, {
            screenX: o,
            screenY: a,
            clientX: o,
            clientY: a,
            bubbles: !0,
            view: i
        }),
        l = i.document.elementFromPoint(o, a);
    if (null == l) throw Error();
    l.dispatchEvent(s);
}
function ec() {
    if (null != k) {
        let e = Z[k] === s.gl.OutOfProcessLimitedInteraction;
        if (e !== U) {
            U = e;
            try {
                'function' == typeof (null == L ? void 0 : L.setLimitedInteraction) ? (R.info('Setting limited interaction', e), L.setLimitedInteraction(e), m.ZP.setFocusable(S.$J, !e)) : R.info('No setLimitedInteraction function found, skipping');
            } catch (e) {
                R.error('Error setting limited interaction mode:', e);
            }
        }
    }
    a.Z.setFocusedPID(k);
}
function eu(e) {
    (k = e), ec();
}
function ed(e) {
    ef();
}
function ef() {
    (k = null), ec();
}
function ep(e) {
    a.Z.successfullyShown(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING);
    let t = Y(e).mounting_started_at;
    K(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    });
}
let e_ = (() => {
    let e = null;
    async function t() {
        if (!O.iP) {
            R.error('Attempted to load overlay on an unsupported platform.');
            return;
        }
        R.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(el), r.setHostWindowCallbacks(ei, eo, es), r.setFocusCallback(eu), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, ed), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, ep), (L = r), (0, g.vR)(!0), et(), R.info('OverlayV3 Module Loaded');
        } catch (e) {
            throw (R.error('failed loading overlay module', e), (0, g.vR)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eh(e) {
    null == L || L.setInteractionEnabled(e);
}
function em(e) {
    if (O.iP && ((M = e), null == L && ee())) {
        e_();
        return;
    }
}
function eg(e) {}
function eE(e) {}
function ev(e) {}
async function eb(e) {
    e.overlayMethod === s.gl.OutOfProcess || e.overlayMethod === s.gl.OutOfProcessLimitedInteraction ? (null == L && (await e_()), X(e.pid, e.overlayMethod)) : J(e.pid), eM.emitChange();
}
function ey(e) {
    R.verbose('Updating OverlayMethod', e), eb(e);
}
function eO(e) {
    let { pid: t, error: n } = e;
    if (P.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        Q(t, null != e ? e : Error('unknown error'));
    }
}
function eS(e) {
    x.toggleGPUBoost(e.reason, e.enabled);
}
function eI() {
    R.verbose('Maybe Enable Overlay'), ee() ? (em(E.v.oopEnabled), (0, g.vR)(!0), e_()) : M && em(!1);
}
function eT(e) {
    let { oopEnabled: t } = e;
    em(t);
}
function eN(e) {
    let { zones: t } = e;
    H.setClickZones(t);
}
function eA(e) {
    B[e.pid] = e.overlayState;
}
function eC(e) {
    let { locked: t, pid: n } = e,
        r = B[n];
    if (t || r !== s.mM.OVERLAY_CRASHED_DISABLED)
        t ? w.delete(n) : w.add(n),
            (null == G || (clearTimeout(G), (G = null), !t)) &&
                (t
                    ? en(t)
                    : (G = setTimeout(() => {
                          en(t), (G = null);
                      }, 100)));
}
function eR(e) {
    let { region: t } = e;
    en(!1);
}
function eP() {
    en(!0);
}
function ew(e) {
    let { enabled: t, mode: n } = e;
    t ? W.add(n) : W.delete(n);
}
function eD() {
    u.Z.hasLoadedExperiments && !F && ((F = !0), eI());
}
function ex() {
    F = !1;
}
class eL extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, p.default, u.Z), this.syncWith([u.Z], eD);
    }
    isInputLocked(e) {
        return !w.has(e);
    }
    isSupported() {
        return O.iP;
    }
    isOverlayV3Enabled() {
        return ee();
    }
    isOverlayV3EnabledForPID(e) {
        return P.has(e);
    }
    isPinned(e) {
        let t = _.Z.getLayout(S.OVERLAY_V3_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = _.Z.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    get enabled() {
        return M;
    }
    hasRenderDebugMode(e) {
        return W.has(e);
    }
    getFocusedPID() {
        return k;
    }
    isFocused(e) {
        return null != k && e !== g.R2 && k === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == k ? null : null !== (e = d.ZP.getRunningGames().find((e) => e.pid === k)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return P.has(e);
    }
    isGPUBoosted() {
        return x.isGPUBoosted;
    }
}
T(eL, 'displayName', 'OverlayStore-v3');
let eM = new eL(o.Z, {
        LOGIN: ex,
        LOGOUT: ex,
        EXPERIMENT_OVERRIDE_BUCKET: eI,
        OVERLAY_SET_ENABLED: eT,
        GAME_LAUNCH_SUCCESS: eg,
        RUNNING_GAMES_CHANGE: eE,
        RUNNING_GAME_TOGGLE_OVERLAY: ev,
        OVERLAY_SET_CLICK_ZONES: eN,
        OVERLAY_SET_INPUT_LOCKED: eC,
        OVERLAY_ACTIVATE_REGION: eR,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eP,
        OVERLAY_RENDER_DEBUG_MODE: ew,
        OVERLAY_UPDATE_OVERLAY_METHOD: ey,
        OVERLAY_UPDATE_OVERLAY_STATE: eA,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eS,
        OVERLAY_CRASHED: eO
    }),
    ek = eM;
