n.d(t, {
    A8: () => w,
    Il: () => D,
    ZP: () => eH,
    zS: () => P
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
    _ = n(314897),
    p = n(355863),
    h = n(626135),
    m = n(998502),
    g = n(145597),
    E = n(454991),
    b = n(32300),
    y = n(306381),
    v = n(503522),
    O = n(829907),
    I = n(398269),
    S = n(987650),
    T = n(757744),
    N = n(501787),
    A = n(981631);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
var P = (function (e) {
    return (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), (e.OVERLAY_RENDERING = 'OVERLAY_RENDERING'), (e.DEV_FORCED_GPU_BOOST = 'DEV_FORCED_GPU_BOOST'), e;
})({});
let w = 'repaint-complete',
    D = 'request-repaint';
class L {
    constructor() {
        C(this, 'gpuBoostRequests', new Set()),
            C(this, 'isGPUBoosted', !1),
            C(this, 'isDisabledGPUBoost', !1),
            C(this, 'toggleGPUBoost', (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            C(this, 'toggleDisabledGPUBoost', (e) => {
                (this.isDisabledGPUBoost = e), this.flushGPUBoostRequests();
            }),
            C(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            C(this, 'shouldBoostGPU', () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            C(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === l.Z || void 0 === l.Z || null == (t = l.Z.processUtils) || null == (e = t.getGpuProcessId) ? void 0 : e.call(t));
                    if (null == r) return;
                    m.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eZ.emitChange();
                } catch (e) {
                    (null == (n = e.message) ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), x.error('Error during GPU boost request flush:', e), en(null != V ? V : g.UNSET_PID, e);
                }
            });
    }
}
let x = new c.Z('OverlayStoreV3'),
    M = new Set(),
    k = new Set(),
    j = {},
    U = new L(),
    G = null,
    B = !1,
    F = null,
    V = null,
    Z = null,
    H = null,
    W = {},
    Y = {},
    K = !1,
    z = s.R5.UNSET,
    q = 30000;
class Q {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }));
            null == G || G.setCaptureZones(t);
        } catch (e) {
            x.error('Error setting capture zones:', e);
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
        if (!B) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, q),
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
            null == G || G.setCaptureZones(n);
        } catch (e) {
            x.error('Error setting capture zones:', e), en(null != V ? V : g.UNSET_PID, e);
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
        this.clickZones.length > 0 || ((this.clickZones = [...this.focusLostStoredClickZones]), this._setCaptureZones(this.clickZones));
    }
    constructor() {
        C(this, 'clickZones', []), C(this, 'focusLostStoredClickZones', []), C(this, 'clickZoneTimers', {});
    }
}
let X = new Q(),
    J = new Set();
function $(e) {
    var t;
    return null != (t = j[e]) ? t : {};
}
function ee(e, t) {
    var n, r;
    let i = null == (n = j[e]) ? void 0 : n.error,
        o = null == (r = j[e]) ? void 0 : r.error_description;
    (j[e] = R({}, j[e], t)), null != i && (j[e].error = i), null != o && (j[e].error_description = o);
}
function et(e) {
    var t, n, r;
    if (null != j[e]) return;
    let i = d.ZP.getGameForPID(e);
    j[e] = {
        overlay_method: s.gl[null != (t = Y[e]) ? t : s.gl.OutOfProcess],
        success: !1,
        game_name: null != (n = null == i ? void 0 : i.name) ? n : null,
        game_id: null != (r = null == i ? void 0 : i.id) ? r : null,
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
function en(e, t) {
    e !== g.UNSET_PID &&
        (ee(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        X.clearClickZones());
}
function er(e, t) {
    e !== g.UNSET_PID &&
        (ee(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        X.clearClickZones());
}
function ei(e, t) {
    try {
        if ((null != t && (Y[e] = t), null == G || G.trackGame(e), et(e), M.has(e))) return;
        M.add(e), a.Z.updateOverlayState(e, s.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        x.error('Error tracking game:', t), en(e, t);
    }
}
function eo(e) {
    try {
        null == G || G.untrackGame(e), M.delete(e), delete W[e], delete Y[e], x.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        x.error('Error removing tracked game:', t), en(e, t);
    }
}
function ea() {
    try {
        for (let e of M) null == G || G.untrackGame(e);
        M.clear(), (W = {}), (Y = {}), x.verbose('Cleared all tracked games');
    } catch (e) {
        x.error('Error clearing tracked games:', e), en(g.UNSET_PID, e);
    }
}
function es() {
    return (0, b.NW)('overlay_store_v3', !1);
}
function el() {
    if (!B) return void ea();
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...M].filter((t) => !e.has(t)))) eo(t);
    for (let e of M) ei(e);
}
function ec(e) {
    if (null == G) return void x.warn('Overlay module not initialized during lock attempt');
    try {
        let t = !e;
        G.setInteractionEnabled(t), U.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        x.error('Error during overlay lock:', e), en(null != V ? V : g.UNSET_PID, e);
    }
}
function eu(e) {
    let t = d.ZP.getGameForPID(e);
    a.Z.setAssociatedGame(null != V ? V : g.UNSET_PID, e, t);
}
async function ed(e) {
    x.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        let r = new Date().getTime();
        ee(e, { mounting_started_at: r }),
            (Z = null),
            await (0, I.f)(z),
            ee(e, {
                renderer_started: !0,
                fullscreen_type: await (0, O.hj)(e, 0),
                graphics_info_after: new Date().getTime() - r
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && U.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            U.toggleGPUBoost('OVERLAY_RENDERING', !0),
            eu(e),
            (V = e),
            (0, g.setPID)(e),
            x.info('Getting Native Handle for pid', e);
        let i = null != (n = await (null === l.Z || void 0 === l.Z || null == (t = l.Z.window) ? void 0 : t.getNativeHandle(N.$J))) ? n : '';
        if ('' === i) return x.error('Failed to get native handle for pid', e), en(e, Error('Failed to get native handle for pid')), '';
        return x.info('Native Handle for pid '.concat(e, ':'), i), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), ee(e, { renderer_started_after: new Date().getTime() - r }), eO(!1), v.Z.resetWindowState(), i;
    } catch (t) {
        x.error('failed to create out of process overlay host window', t), er(e, t), a.Z.updateOverlayState(e, s.mM.OVERLAY_CRASHED_DISABLED);
    }
    return e_(e), '';
}
function ef() {
    x.verbose('Destroying OOP host window'), U.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null == (e = l.Z.window) || e.close(N.$J);
    } catch (e) {
        x.error('Error destroying overlay window:', e), en(null != V ? V : g.UNSET_PID, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        x.error('Error setting background throttling:', e), en(null != V ? V : g.UNSET_PID, e);
    }
    eb(), k.clear(), v.Z.resetWindowState(!1), null != V && e_(V), (V = null), (0, g.setPID)(null != V ? V : g.UNSET_PID);
}
function e_(e) {
    h.default.track(A.rMx.OVERLAY_HOOK_RESULT, $(e));
}
function ep(e) {
    try {
        x.verbose('Refreshing OOP host window for pid '.concat(e)), eu(e), k.delete(null != V ? V : g.UNSET_PID), (V = e), (0, g.setPID)(null != V ? V : g.UNSET_PID);
        let t = f.Z.getWindow(N.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === w && (window.removeEventListener('message', n), e());
                    };
                    window.addEventListener('message', n),
                        null == t || t.postMessage(D, '*'),
                        setTimeout(() => {
                            let e = new MessageEvent('message', { data: w });
                            n(e);
                        }, 100);
                }),
            r = 0,
            i = () => {
                15 === r ? (X.clearClickZones(), null == G || G.readyToShow(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), x.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        x.error('failed to refresh out of process overlay host window', e), en(null != V ? V : g.UNSET_PID, e);
    }
}
function eh(e, t, n, r) {
    let i = f.Z.getWindow(N.$J);
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
function em() {
    if ((null == F ? X.storeClickZones() : X.refreshClickZones(), null != F)) {
        let e = Y[F] === s.gl.OutOfProcessLimitedInteraction;
        if (e !== Z) {
            Z = e;
            try {
                'function' == typeof (null == G ? void 0 : G.setLimitedInteraction) ? (x.info('Setting limited interaction', e), G.setLimitedInteraction(e), m.ZP.setFocusable(N.$J, !e)) : x.info('No setLimitedInteraction function found, skipping');
            } catch (e) {
                x.error('Error setting limited interaction mode:', e);
            }
        }
    }
    a.Z.setFocusedPID(F);
}
function eg(e) {
    (F = e), em(), eZ.emitChange();
}
function eE(e) {
    eb(), eZ.emitChange();
}
function eb() {
    (F = null), em(), eZ.emitChange();
}
function ey(e) {
    a.Z.successfullyShown(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING);
    let t = $(e).mounting_started_at;
    ee(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    }),
        eZ.emitChange();
}
let ev = (() => {
    let e = null;
    async function t() {
        if (!S.iP) return void x.error('Attempted to load overlay on an unsupported platform.');
        x.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null == (e = r.init) || e.call(r), r.setCaptureZoneCallback(eh), r.setHostWindowCallbacks(ed, ef, ep), r.setFocusCallback(eg), null == (t = r.setFocusLostCallback) || t.call(r, eE), null == (n = r.setSuccessfullyShownCallback) || n.call(r, ey), (G = r), (0, g.setOutOfProcessSupport)(!0), el(), x.info('OverlayV3 Module Loaded');
        } catch (e) {
            throw (x.error('failed loading overlay module', e), (0, g.setOutOfProcessSupport)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eO(e) {
    null == G || G.setInteractionEnabled(e);
}
function eI(e) {
    if (S.iP && ((B = e), null == G && es())) return void ev();
}
function eS(e) {}
function eT(e) {}
function eN(e) {}
async function eA(e) {
    e.overlayMethod === s.gl.OutOfProcess || e.overlayMethod === s.gl.OutOfProcessLimitedInteraction ? (null == G && (await ev()), ei(e.pid, e.overlayMethod)) : eo(e.pid), eZ.emitChange();
}
function eC(e) {
    x.verbose('Updating OverlayMethod', e), eA(e);
}
function eR(e) {
    let { pid: t, error: n } = e;
    if (M.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        er(t, null != e ? e : Error('unknown error'));
    }
}
function eP(e) {
    U.toggleGPUBoost(e.reason, e.enabled);
}
function ew() {
    x.verbose('Maybe Enable Overlay'), es() ? (eI(E.v.oopEnabled), (0, g.setOutOfProcessSupport)(!0), ev()) : B && eI(!1);
}
function eD(e) {
    let { oopEnabled: t } = e;
    eI(t);
}
function eL(e) {
    let { zones: t } = e;
    X.setClickZones(t);
}
function ex(e) {
    W[e.pid] = e.overlayState;
}
function eM(e) {
    let { locked: t, pid: n } = e,
        r = W[n];
    if (t || r !== s.mM.OVERLAY_CRASHED_DISABLED) {
        if ((t ? k.delete(n) : k.add(n), null != H && (clearTimeout(H), (H = null), t))) return;
        t
            ? ec(t)
            : (H = setTimeout(() => {
                  ec(t), (H = null);
              }, 100));
    }
}
function ek(e) {
    let { region: t } = e;
    ec(!1);
}
function ej() {
    ec(!0);
}
function eU(e) {
    let { enabled: t, mode: n } = e;
    t ? J.add(n) : J.delete(n), n === y.G.DisabledGPUBoost && U.toggleDisabledGPUBoost(t), n === y.G.ForceGPUBoost && U.toggleGPUBoost('DEV_FORCED_GPU_BOOST', t);
}
function eG() {
    u.Z.hasLoadedExperiments && !K && ((K = !0), ew());
}
function eB() {
    K = !1;
}
function eF(e) {
    let { mode: t } = e;
    z = t;
}
class eV extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, _.default, u.Z), this.syncWith([u.Z], eG);
    }
    isInputLocked(e) {
        return !k.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return es();
    }
    isOverlayV3EnabledForPID(e) {
        return M.has(e);
    }
    getWidgetByType(e) {
        let t = p.Z.getLayout(T.$);
        if (null != t) {
            let r = t.widgets.find((t) => {
                let n = p.Z.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != r) {
                var n;
                return null != (n = p.Z.getWidget(r)) ? n : null;
            }
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    get enabled() {
        return B;
    }
    hasRenderDebugMode(e) {
        return J.has(e);
    }
    getFocusedPID() {
        return F;
    }
    isFocused(e) {
        return null != F && e !== g.UNSET_PID && F === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == F ? null : null != (e = d.ZP.getRunningGames().find((e) => e.pid === F)) ? e : null;
    }
    isReady(e) {
        return M.has(e);
    }
    isGPUBoosted() {
        return U.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = W[e]) ? t : null;
    }
}
C(eV, 'displayName', 'OverlayStore-v3');
let eZ = new eV(o.Z, {
        LOGIN: eB,
        LOGOUT: eB,
        EXPERIMENT_OVERRIDE_BUCKET: ew,
        OVERLAY_SET_ENABLED: eD,
        GAME_LAUNCH_SUCCESS: eS,
        RUNNING_GAMES_CHANGE: eT,
        RUNNING_GAME_TOGGLE_OVERLAY: eN,
        OVERLAY_FORCE_RENDER_MODE: eF,
        OVERLAY_SET_CLICK_ZONES: eL,
        OVERLAY_SET_INPUT_LOCKED: eM,
        OVERLAY_ACTIVATE_REGION: ek,
        OVERLAY_DEACTIVATE_ALL_REGIONS: ej,
        OVERLAY_RENDER_DEBUG_MODE: eU,
        OVERLAY_UPDATE_OVERLAY_METHOD: eC,
        OVERLAY_UPDATE_OVERLAY_STATE: ex,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eP,
        OVERLAY_CRASHED: eR
    }),
    eH = eZ;
