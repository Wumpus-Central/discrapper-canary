n.d(t, {
    A8: () => R,
    Il: () => P,
    ZP: () => eB,
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
let R = 'repaint-complete',
    P = 'request-repaint';
class w {
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
                    m.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eG.emitChange();
                } catch (e) {
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), D.error('Error during GPU boost request flush:', e), $(null != B ? B : g.R2, e);
                }
            });
    }
}
let D = new c.Z('OverlayStoreV3'),
    x = new Set(),
    L = new Set(),
    M = {},
    k = new w(),
    j = null,
    U = !1,
    G = null,
    B = null,
    Z = null,
    F = null,
    V = {},
    H = {},
    W = !1,
    Y = 30000;
class K {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }));
            null == j || j.setCaptureZones(t);
        } catch (e) {
            D.error('Error setting capture zones:', e);
        }
    }
    getClickZoneByTimerId(e) {
        return Object.keys(this.clickZoneTimers).filter((t) => this.clickZoneTimers[t] === e);
    }
    hasStoredClickZones() {
        return this.focusLostStoredClickZones.length > 0 && 0 === this.clickZones.length;
    }
    triggerClickZoneTimer(e) {
        let t = this.getClickZoneByTimerId(e);
        for (let n of (null != e && clearTimeout(e), t)) delete this.clickZoneTimers[n];
        let n = this.focusLostStoredClickZones.filter((e) => !t.includes(e.name));
        this.hasStoredClickZones() || ((this.clickZones = n), this._setCaptureZones(n)), (this.focusLostStoredClickZones = [...n]);
    }
    setClickZones(e) {
        if (!U) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, Y),
                n = e.map((e) => {
                    let n = {
                        name: e.name,
                        left: e.left,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom
                    };
                    return (this.clickZoneTimers[e.name] = t), n;
                });
            null == j || j.setCaptureZones(n);
        } catch (e) {
            D.error('Error setting capture zones:', e), $(null != B ? B : g.R2, e);
        }
    }
    clearClickZones() {
        for (let e of Object.values(this.clickZoneTimers)) null != e && clearTimeout(e);
        (this.clickZoneTimers = {}), (this.clickZones = []), (this.focusLostStoredClickZones = []), this._setCaptureZones([]);
    }
    storeClickZones() {
        0 !== this.clickZones.length && ((this.focusLostStoredClickZones = [...this.clickZones]), (this.clickZones = []), this._setCaptureZones([]));
    }
    refreshClickZones() {
        !(this.clickZones.length > 0) && ((this.clickZones = [...this.focusLostStoredClickZones]), this._setCaptureZones(this.clickZones));
    }
    constructor() {
        N(this, 'clickZones', []), N(this, 'focusLostStoredClickZones', []), N(this, 'clickZoneTimers', {});
    }
}
let z = new K(),
    q = new Set();
function Q(e) {
    var t;
    return null !== (t = M[e]) && void 0 !== t ? t : {};
}
function X(e, t) {
    var n, r;
    let i = null === (n = M[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = M[e]) || void 0 === r ? void 0 : r.error_description;
    (M[e] = A({}, M[e], t)), null != i && (M[e].error = i), null != o && (M[e].error_description = o);
}
function J(e) {
    var t, n, r;
    if (null != M[e]) return;
    let i = d.ZP.getGameForPID(e);
    M[e] = {
        overlay_method: s.gl[null !== (t = H[e]) && void 0 !== t ? t : s.gl.OutOfProcess],
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
function $(e, t) {
    e !== g.R2 &&
        (X(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        z.clearClickZones());
}
function ee(e, t) {
    e !== g.R2 &&
        (X(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        z.clearClickZones());
}
function et(e, t) {
    try {
        if ((null != t && (H[e] = t), null == j || j.trackGame(e), J(e), x.has(e))) return;
        x.add(e), a.Z.updateOverlayState(e, s.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        D.error('Error tracking game:', t), $(e, t);
    }
}
function en(e) {
    try {
        null == j || j.untrackGame(e), x.delete(e), delete V[e], delete H[e], D.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        D.error('Error removing tracked game:', t), $(e, t);
    }
}
function er() {
    try {
        for (let e of x) null == j || j.untrackGame(e);
        x.clear(), (V = {}), (H = {}), D.verbose('Cleared all tracked games');
    } catch (e) {
        D.error('Error clearing tracked games:', e), $(g.R2, e);
    }
}
function ei() {
    return (0, v.NW)('overlay_store_v3', !1);
}
function eo() {
    if (!U) {
        er();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...x].filter((t) => !e.has(t)))) en(t);
    for (let e of x) et(e);
}
function ea(e) {
    if (null == j) {
        D.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        j.setInteractionEnabled(t), k.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        D.error('Error during overlay lock:', e), $(null != B ? B : g.R2, e);
    }
}
function es(e) {
    let t = d.ZP.getGameForPID(e);
    a.Z.setAssociatedGame(null != B ? B : g.R2, e, t);
}
async function el(e) {
    D.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        let r = new Date().getTime();
        X(e, { mounting_started_at: r }),
            (Z = null),
            await (0, O.fK)(),
            X(e, {
                renderer_started: !0,
                fullscreen_type: await (0, y.hj)(e, 0),
                graphics_info_after: new Date().getTime() - r
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && k.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            es(e),
            (B = e),
            (0, g.tB)(e),
            D.info('Getting Native Handle for pid', e);
        let i = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(I.$J))) && void 0 !== n ? n : '';
        return D.info('Native Handle for pid '.concat(e, ':'), i), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), X(e, { renderer_started_after: new Date().getTime() - r }), ev(!1), i;
    } catch (t) {
        D.error('failed to create out of process overlay host window', t), ee(e, t), a.Z.updateOverlayState(e, s.mM.OVERLAY_CRASHED_DISABLED);
    }
    return eu(e), '';
}
function ec() {
    D.verbose('Destroying OOP host window'), k.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(I.$J);
    } catch (e) {
        D.error('Error destroying overlay window:', e), $(null != B ? B : g.R2, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        D.error('Error setting background throttling:', e), $(null != B ? B : g.R2, e);
    }
    em(), L.clear(), null != B && eu(B), (B = null), (0, g.tB)(null != B ? B : g.R2);
}
function eu(e) {
    h.default.track(T.rMx.OVERLAY_HOOK_RESULT, Q(e));
}
function ed(e) {
    try {
        D.verbose('Refreshing OOP host window for pid '.concat(e)), es(e), L.delete(null != B ? B : g.R2), (B = e), (0, g.tB)(null != B ? B : g.R2);
        let t = f.Z.getWindow(I.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === R && (window.removeEventListener('message', n), e());
                    };
                    window.addEventListener('message', n),
                        null == t || t.postMessage(P, '*'),
                        setTimeout(() => {
                            let e = new MessageEvent('message', { data: R });
                            n(e);
                        }, 100);
                }),
            r = 0,
            i = () => {
                15 === r ? (z.clearClickZones(), null == j || j.readyToShow(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), D.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        D.error('failed to refresh out of process overlay host window', e), $(null != B ? B : g.R2, e);
    }
}
function ef(e, t, n, r) {
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
function ep() {
    if ((null == G ? z.storeClickZones() : z.refreshClickZones(), null != G)) {
        let e = H[G] === s.gl.OutOfProcessLimitedInteraction;
        if (e !== Z) {
            Z = e;
            try {
                'function' == typeof (null == j ? void 0 : j.setLimitedInteraction) ? (D.info('Setting limited interaction', e), j.setLimitedInteraction(e), m.ZP.setFocusable(I.$J, !e)) : D.info('No setLimitedInteraction function found, skipping');
            } catch (e) {
                D.error('Error setting limited interaction mode:', e);
            }
        }
    }
    a.Z.setFocusedPID(G);
}
function e_(e) {
    (G = e), ep();
}
function eh(e) {
    em();
}
function em() {
    (G = null), ep();
}
function eg(e) {
    a.Z.successfullyShown(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING);
    let t = Q(e).mounting_started_at;
    X(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    });
}
let eE = (() => {
    let e = null;
    async function t() {
        if (!S.iP) {
            D.error('Attempted to load overlay on an unsupported platform.');
            return;
        }
        D.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(ef), r.setHostWindowCallbacks(el, ec, ed), r.setFocusCallback(e_), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, eh), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, eg), (j = r), (0, g.vR)(!0), eo(), D.info('OverlayV3 Module Loaded');
        } catch (e) {
            throw (D.error('failed loading overlay module', e), (0, g.vR)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function ev(e) {
    null == j || j.setInteractionEnabled(e);
}
function eb(e) {
    if (S.iP && ((U = e), null == j && ei())) {
        eE();
        return;
    }
}
function ey(e) {}
function eO(e) {}
function eS(e) {}
async function eI(e) {
    e.overlayMethod === s.gl.OutOfProcess || e.overlayMethod === s.gl.OutOfProcessLimitedInteraction ? (null == j && (await eE()), et(e.pid, e.overlayMethod)) : en(e.pid), eG.emitChange();
}
function eT(e) {
    D.verbose('Updating OverlayMethod', e), eI(e);
}
function eN(e) {
    let { pid: t, error: n } = e;
    if (x.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        ee(t, null != e ? e : Error('unknown error'));
    }
}
function eA(e) {
    k.toggleGPUBoost(e.reason, e.enabled);
}
function eC() {
    D.verbose('Maybe Enable Overlay'), ei() ? (eb(E.v.oopEnabled), (0, g.vR)(!0), eE()) : U && eb(!1);
}
function eR(e) {
    let { oopEnabled: t } = e;
    eb(t);
}
function eP(e) {
    let { zones: t } = e;
    z.setClickZones(t);
}
function ew(e) {
    V[e.pid] = e.overlayState;
}
function eD(e) {
    let { locked: t, pid: n } = e,
        r = V[n];
    if (t || r !== s.mM.OVERLAY_CRASHED_DISABLED)
        t ? L.delete(n) : L.add(n),
            (null == F || (clearTimeout(F), (F = null), !t)) &&
                (t
                    ? ea(t)
                    : (F = setTimeout(() => {
                          ea(t), (F = null);
                      }, 100)));
}
function ex(e) {
    let { region: t } = e;
    ea(!1);
}
function eL() {
    ea(!0);
}
function eM(e) {
    let { enabled: t, mode: n } = e;
    t ? q.add(n) : q.delete(n), n === b.G.DisabledGPUBoost && k.toggleDisabledGPUBoost(t), n === b.G.ForceGPUBoost && k.toggleGPUBoost('DEV_FORCED_GPU_BOOST', t);
}
function ek() {
    u.Z.hasLoadedExperiments && !W && ((W = !0), eC());
}
function ej() {
    W = !1;
}
class eU extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, p.default, u.Z), this.syncWith([u.Z], ek);
    }
    isInputLocked(e) {
        return !L.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return ei();
    }
    isOverlayV3EnabledForPID(e) {
        return x.has(e);
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
        return U;
    }
    hasRenderDebugMode(e) {
        return q.has(e);
    }
    getFocusedPID() {
        return G;
    }
    isFocused(e) {
        return null != G && e !== g.R2 && G === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == G ? null : null !== (e = d.ZP.getRunningGames().find((e) => e.pid === G)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return x.has(e);
    }
    isGPUBoosted() {
        return k.isGPUBoosted;
    }
}
N(eU, 'displayName', 'OverlayStore-v3');
let eG = new eU(o.Z, {
        LOGIN: ej,
        LOGOUT: ej,
        EXPERIMENT_OVERRIDE_BUCKET: eC,
        OVERLAY_SET_ENABLED: eR,
        GAME_LAUNCH_SUCCESS: ey,
        RUNNING_GAMES_CHANGE: eO,
        RUNNING_GAME_TOGGLE_OVERLAY: eS,
        OVERLAY_SET_CLICK_ZONES: eP,
        OVERLAY_SET_INPUT_LOCKED: eD,
        OVERLAY_ACTIVATE_REGION: ex,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eL,
        OVERLAY_RENDER_DEBUG_MODE: eM,
        OVERLAY_UPDATE_OVERLAY_METHOD: eT,
        OVERLAY_UPDATE_OVERLAY_STATE: ew,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eA,
        OVERLAY_CRASHED: eN
    }),
    eB = eG;
