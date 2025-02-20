n.d(t, {
    ZP: () => ej,
    zS: () => C
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
    b = n(306381),
    y = n(829907),
    O = n(388627),
    S = n(987650),
    I = n(501787),
    T = n(981631);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
var C = (function (e) {
    return (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), (e.DEV_FORCED_GPU_BOOST = 'DEV_FORCED_GPU_BOOST'), e;
})({});
class R {
    constructor() {
        N(this, 'gpuBoostRequests', new Set()),
            N(this, 'isGPUBoosted', !1),
            N(this, 'isDisabledGPUBoost', !1),
            N(this, 'toggleGPUBoost', (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            N(this, 'toggleDisabledGPUBoost', (e) => {
                (this.isDisabledGPUBoost = e), this.flushGPUBoostRequests();
            }),
            N(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            N(this, 'shouldBoostGPU', () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            N(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getGpuProcessId) || void 0 === e ? void 0 : e.call(t));
                    if (null == r) return;
                    m.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), ek.emitChange();
                } catch (e) {
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), P.error('Error during GPU boost request flush:', e), Q(null != U ? U : g.R2, e);
                }
            });
    }
}
let P = new c.Z('OverlayStoreV3'),
    w = new Set(),
    D = new Set(),
    x = {},
    L = new R(),
    M = null,
    k = !1,
    j = null,
    U = null,
    G = null,
    B = null,
    Z = {},
    F = {},
    V = !1;
class H {
    setClickZones(e) {
        if (k) {
            this.clickZones = e;
            try {
                let t = e.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }));
                null == M || M.setCaptureZones(t);
            } catch (e) {
                P.error('Error setting capture zones:', e), Q(null != U ? U : g.R2, e);
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
        N(this, 'clickZones', []);
    }
}
let W = new H(),
    Y = new Set();
function K(e) {
    var t;
    return null !== (t = x[e]) && void 0 !== t ? t : {};
}
function z(e, t) {
    var n, r;
    let i = null === (n = x[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = x[e]) || void 0 === r ? void 0 : r.error_description;
    (x[e] = A({}, x[e], t)), null != i && (x[e].error = i), null != o && (x[e].error_description = o);
}
function q(e) {
    var t, n, r;
    if (null != x[e]) return;
    let i = d.ZP.getGameForPID(e);
    x[e] = {
        overlay_method: s.gl[null !== (t = F[e]) && void 0 !== t ? t : s.gl.OutOfProcess],
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
function Q(e, t) {
    e !== g.R2 &&
        z(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function X(e, t) {
    e !== g.R2 &&
        z(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        });
}
function J(e, t) {
    try {
        if ((null != t && (F[e] = t), null == M || M.trackGame(e), q(e), w.has(e))) return;
        w.add(e), a.Z.updateOverlayState(e, s.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        P.error('Error tracking game:', t), Q(e, t);
    }
}
function $(e) {
    try {
        null == M || M.untrackGame(e), w.delete(e), delete Z[e], delete F[e], P.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        P.error('Error removing tracked game:', t), Q(e, t);
    }
}
function ee() {
    try {
        for (let e of w) null == M || M.untrackGame(e);
        w.clear(), (Z = {}), (F = {}), P.verbose('Cleared all tracked games');
    } catch (e) {
        P.error('Error clearing tracked games:', e), Q(g.R2, e);
    }
}
function et() {
    return (0, v.NW)('overlay_store_v3', !1);
}
function en() {
    if (!k) {
        ee();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...w].filter((t) => !e.has(t)))) $(t);
    for (let e of w) J(e);
}
function er(e) {
    if (null == M) {
        P.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        M.setInteractionEnabled(t), L.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        P.error('Error during overlay lock:', e), Q(null != U ? U : g.R2, e);
    }
}
function ei(e) {
    let t = d.ZP.getGameForPID(e);
    a.Z.setAssociatedGame(null != U ? U : g.R2, e, t);
}
async function eo(e) {
    P.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        let r = new Date().getTime();
        z(e, { mounting_started_at: r }),
            (G = null),
            await (0, O.fK)(),
            z(e, {
                renderer_started: !0,
                fullscreen_type: await (0, y.hj)(e, 0),
                graphics_info_after: new Date().getTime() - r
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && L.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            ei(e),
            (U = e),
            (0, g.tB)(e),
            P.info('Getting Native Handle for pid', e);
        let i = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(I.$J))) && void 0 !== n ? n : '';
        return a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), z(e, { renderer_started_after: new Date().getTime() - r }), em(!1), i;
    } catch (t) {
        P.error('failed to create out of process overlay host window', t), X(e, t), a.Z.updateOverlayState(e, s.mM.OVERLAY_CRASHED_DISABLED);
    }
    return es(e), '';
}
function ea() {
    P.verbose('Destroying OOP host window'), L.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(I.$J);
    } catch (e) {
        P.error('Error destroying overlay window:', e), Q(null != U ? U : g.R2, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        P.error('Error setting background throttling:', e), Q(null != U ? U : g.R2, e);
    }
    ep(), D.clear(), null != U && es(U), (U = null), (0, g.tB)(null != U ? U : g.R2);
}
function es(e) {
    h.default.track(T.rMx.OVERLAY_HOOK_RESULT, K(e));
}
function el(e) {
    try {
        P.verbose('Refreshing OOP host window for pid '.concat(e)), ei(e), D.delete(null != U ? U : g.R2), (U = e), (0, g.tB)(null != U ? U : g.R2);
        let t = f.Z.getWindow(I.$J),
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
                15 === r ? (null == M || M.readyToShow(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), P.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        P.error('failed to refresh out of process overlay host window', e), Q(null != U ? U : g.R2, e);
    }
}
function ec(e, t, n, r) {
    let i = f.Z.getWindow(I.$J);
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
function eu() {
    if (null != j) {
        let e = F[j] === s.gl.OutOfProcessLimitedInteraction;
        if (e !== G) {
            G = e;
            try {
                'function' == typeof (null == M ? void 0 : M.setLimitedInteraction) ? (P.info('Setting limited interaction', e), M.setLimitedInteraction(e), m.ZP.setFocusable(I.$J, !e)) : P.info('No setLimitedInteraction function found, skipping');
            } catch (e) {
                P.error('Error setting limited interaction mode:', e);
            }
        }
    }
    a.Z.setFocusedPID(j);
}
function ed(e) {
    (j = e), eu();
}
function ef(e) {
    ep();
}
function ep() {
    (j = null), eu();
}
function e_(e) {
    a.Z.successfullyShown(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING);
    let t = K(e).mounting_started_at;
    z(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    });
}
let eh = (() => {
    let e = null;
    async function t() {
        if (!S.iP) {
            P.error('Attempted to load overlay on an unsupported platform.');
            return;
        }
        P.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(ec), r.setHostWindowCallbacks(eo, ea, el), r.setFocusCallback(ed), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, ef), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, e_), (M = r), (0, g.vR)(!0), en(), P.info('OverlayV3 Module Loaded');
        } catch (e) {
            throw (P.error('failed loading overlay module', e), (0, g.vR)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function em(e) {
    null == M || M.setInteractionEnabled(e);
}
function eg(e) {
    if (S.iP && ((k = e), null == M && et())) {
        eh();
        return;
    }
}
function eE(e) {}
function ev(e) {}
function eb(e) {}
async function ey(e) {
    e.overlayMethod === s.gl.OutOfProcess || e.overlayMethod === s.gl.OutOfProcessLimitedInteraction ? (null == M && (await eh()), J(e.pid, e.overlayMethod)) : $(e.pid), ek.emitChange();
}
function eO(e) {
    P.verbose('Updating OverlayMethod', e), ey(e);
}
function eS(e) {
    let { pid: t, error: n } = e;
    if (w.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        X(t, null != e ? e : Error('unknown error'));
    }
}
function eI(e) {
    L.toggleGPUBoost(e.reason, e.enabled);
}
function eT() {
    P.verbose('Maybe Enable Overlay'), et() ? (eg(E.v.oopEnabled), (0, g.vR)(!0), eh()) : k && eg(!1);
}
function eN(e) {
    let { oopEnabled: t } = e;
    eg(t);
}
function eA(e) {
    let { zones: t } = e;
    W.setClickZones(t);
}
function eC(e) {
    Z[e.pid] = e.overlayState;
}
function eR(e) {
    let { locked: t, pid: n } = e,
        r = Z[n];
    if (t || r !== s.mM.OVERLAY_CRASHED_DISABLED)
        t ? D.delete(n) : D.add(n),
            (null == B || (clearTimeout(B), (B = null), !t)) &&
                (t
                    ? er(t)
                    : (B = setTimeout(() => {
                          er(t), (B = null);
                      }, 100)));
}
function eP(e) {
    let { region: t } = e;
    er(!1);
}
function ew() {
    er(!0);
}
function eD(e) {
    let { enabled: t, mode: n } = e;
    t ? Y.add(n) : Y.delete(n), n === b.G.DisabledGPUBoost && L.toggleDisabledGPUBoost(t), n === b.G.ForceGPUBoost && L.toggleGPUBoost('DEV_FORCED_GPU_BOOST', t);
}
function ex() {
    u.Z.hasLoadedExperiments && !V && ((V = !0), eT());
}
function eL() {
    V = !1;
}
class eM extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, p.default, u.Z), this.syncWith([u.Z], ex);
    }
    isInputLocked(e) {
        return !D.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return et();
    }
    isOverlayV3EnabledForPID(e) {
        return w.has(e);
    }
    isPinned(e) {
        let t = _.Z.getLayout(I.OVERLAY_V3_LAYOUT_ID);
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
        return k;
    }
    hasRenderDebugMode(e) {
        return Y.has(e);
    }
    getFocusedPID() {
        return j;
    }
    isFocused(e) {
        return null != j && e !== g.R2 && j === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == j ? null : null !== (e = d.ZP.getRunningGames().find((e) => e.pid === j)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return w.has(e);
    }
    isGPUBoosted() {
        return L.isGPUBoosted;
    }
}
N(eM, 'displayName', 'OverlayStore-v3');
let ek = new eM(o.Z, {
        LOGIN: eL,
        LOGOUT: eL,
        EXPERIMENT_OVERRIDE_BUCKET: eT,
        OVERLAY_SET_ENABLED: eN,
        GAME_LAUNCH_SUCCESS: eE,
        RUNNING_GAMES_CHANGE: ev,
        RUNNING_GAME_TOGGLE_OVERLAY: eb,
        OVERLAY_SET_CLICK_ZONES: eA,
        OVERLAY_SET_INPUT_LOCKED: eR,
        OVERLAY_ACTIVATE_REGION: eP,
        OVERLAY_DEACTIVATE_ALL_REGIONS: ew,
        OVERLAY_RENDER_DEBUG_MODE: eD,
        OVERLAY_UPDATE_OVERLAY_METHOD: eO,
        OVERLAY_UPDATE_OVERLAY_STATE: eC,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eI,
        OVERLAY_CRASHED: eS
    }),
    ej = ek;
