(n.d(t, {
    A8: () => D,
    Il: () => L,
    ZP: () => ez,
    zS: () => w
}),
    n(388685),
    n(415506));
var r,
    i = n(442837),
    a = n(570140),
    o = n(13245),
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
    E = n(41534),
    b = n(454991),
    y = n(32300),
    O = n(306381),
    v = n(503522),
    I = n(829907),
    T = n(398269),
    S = n(987650),
    A = n(757744),
    N = n(501787),
    C = n(981631);
function R(e, t, n) {
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
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            }));
    }
    return e;
}
var w = (function (e) {
    return ((e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), (e.OVERLAY_RENDERING = 'OVERLAY_RENDERING'), (e.DEV_FORCED_GPU_BOOST = 'DEV_FORCED_GPU_BOOST'), e);
})({});
let D = 'repaint-complete',
    L = 'request-repaint';
class x {
    constructor() {
        (R(this, 'gpuBoostRequests', new Set()),
            R(this, 'isGPUBoosted', !1),
            R(this, 'isDisabledGPUBoost', !1),
            R(this, 'toggleGPUBoost', (e, t) => {
                (t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests());
            }),
            R(this, 'toggleDisabledGPUBoost', (e) => {
                ((this.isDisabledGPUBoost = e), this.flushGPUBoostRequests());
            }),
            R(this, 'resetGPUBoosts', () => {
                (this.gpuBoostRequests.clear(), this.flushGPUBoostRequests());
            }),
            R(this, 'shouldBoostGPU', () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            R(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === l.Z || void 0 === l.Z || null == (t = l.Z.processUtils) || null == (e = t.getGpuProcessId) ? void 0 : e.call(t));
                    if (null == r) return;
                    (m.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eK.emitChange());
                } catch (e) {
                    ((null == (n = e.message) ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), M.error('Error during GPU boost request flush:', e), ei(null != Z ? Z : g.UNSET_PID, e));
                }
            }));
    }
}
let M = new c.Z('OverlayStoreV3'),
    k = new Set(),
    j = new Set(),
    U = {},
    G = new x(),
    B = null,
    V = !1,
    F = null,
    Z = null,
    H = null,
    Y = null,
    W = {},
    K = {},
    z = !1,
    q = s.R5.UNSET,
    X = 30000;
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
            null == B || B.setCaptureZones(t);
        } catch (e) {
            (M.error('Error setting capture zones:', e), ei(null != Z ? Z : g.UNSET_PID, e));
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
        (this.hasStoredClickZones() || ((this.clickZones = n), this._setCaptureZones(n)), (this.focusLostStoredClickZones = [...n]));
    }
    setClickZones(e) {
        if (!V) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        ((this.clickZones = e), (this.focusLostStoredClickZones = [...e]));
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, X),
                n = e.map((e) => {
                    let n = {
                        name: e.name,
                        left: e.left,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom
                    };
                    return ((this.clickZoneTimers[e.name] = t), n);
                });
            null == B || B.setCaptureZones(n);
        } catch (e) {
            (M.error('Error setting capture zones:', e), ei(null != Z ? Z : g.UNSET_PID, e));
        }
    }
    clearClickZones() {
        for (let e of Object.values(this.clickZoneTimers)) null != e && clearTimeout(e);
        ((this.clickZoneTimers = {}), (this.clickZones = []), (this.focusLostStoredClickZones = []), this._setCaptureZones([]));
    }
    storeClickZones() {
        0 !== this.clickZones.length && ((this.focusLostStoredClickZones = [...this.clickZones]), (this.clickZones = []), this._setCaptureZones([]));
    }
    refreshClickZones() {
        this.clickZones.length > 0 || ((this.clickZones = [...this.focusLostStoredClickZones]), this._setCaptureZones(this.clickZones));
    }
    constructor() {
        (R(this, 'clickZones', []), R(this, 'focusLostStoredClickZones', []), R(this, 'clickZoneTimers', {}));
    }
}
let J = new Q(),
    $ = new Set();
function ee(e) {
    var t;
    return null != (t = U[e]) ? t : {};
}
function et(e, t) {
    var n, r;
    let i = null == (n = U[e]) ? void 0 : n.error,
        a = null == (r = U[e]) ? void 0 : r.error_description;
    ((U[e] = P({}, U[e], t)), null != i && (U[e].error = i), null != a && (U[e].error_description = a));
}
function en(e) {
    var t, n, r;
    if (null != U[e]) return;
    let i = d.ZP.getGameForPID(e);
    U[e] = {
        overlay_method: s.gl[null != (t = K[e]) ? t : s.gl.OutOfProcess],
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
function er(e, t) {
    var n;
    return {
        crash_type: t,
        gameName: null == (n = d.ZP.getGameForPID(e)) ? void 0 : n.name
    };
}
function ei(e, t) {
    e !== g.UNSET_PID &&
        (et(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        (0, E.V)(t, K[e], { extra: er(e, 'host') }),
        J.clearClickZones());
}
function ea(e, t) {
    e !== g.UNSET_PID &&
        (et(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        (0, E.V)(t, K[e], { extra: er(e, 'renderer') }),
        J.clearClickZones());
}
function eo(e, t) {
    try {
        if ((null != t && (K[e] = t), null == B || B.trackGame(e), en(e), k.has(e))) return;
        (k.add(e), o.Z.updateOverlayState(e, s.mM.WAITING_FOR_OVERLAY_OPEN));
    } catch (t) {
        (M.error('Error tracking game:', t), ei(e, t));
    }
}
function es(e) {
    try {
        (null == B || B.untrackGame(e), k.delete(e), delete W[e], delete K[e], M.verbose('Removing tracked game '.concat(e)));
    } catch (t) {
        (M.error('Error removing tracked game:', t), ei(e, t));
    }
}
function el() {
    try {
        for (let e of k) null == B || B.untrackGame(e);
        (k.clear(), (W = {}), (K = {}), M.verbose('Cleared all tracked games'));
    } catch (e) {
        (M.error('Error clearing tracked games:', e), ei(g.UNSET_PID, e));
    }
}
function ec() {
    return (0, y.NW)('overlay_store_v3', !1);
}
function eu() {
    if (!V) return void el();
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...k].filter((t) => !e.has(t)))) es(t);
    for (let e of k) eo(e);
}
function ed(e) {
    if (null == B) return void M.warn('Overlay module not initialized during lock attempt');
    try {
        let t = !e;
        (B.setInteractionEnabled(t), G.toggleGPUBoost('OVERLAY_UNLOCKED', t));
    } catch (e) {
        (M.error('Error during overlay lock:', e), ei(null != Z ? Z : g.UNSET_PID, e));
    }
}
function ef(e) {
    let t = d.ZP.getGameForPID(e);
    o.Z.setAssociatedGame(null != Z ? Z : g.UNSET_PID, e, t);
}
async function e_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    for (let i = 0; i < t; i++) {
        let a = i + 1 >= t;
        try {
            var n, r;
            let e = null != (r = await (null === l.Z || void 0 === l.Z || null == (n = l.Z.window) ? void 0 : n.getNativeHandle(N.$J))) ? r : '';
            if ('' !== e) return e;
        } catch (e) {
            if (a) throw e;
            M.error('Error getting native window handle, retrying...', e);
        }
        if (a) {
            M.error('Failed to get native window handle, giving up');
            break;
        }
        M.info('Failed to get window handle on attempt '.concat(i + 1, ' of ').concat(t));
        let o = Math.pow(2, i + 1) * e;
        await new Promise((e) => setTimeout(e, o));
    }
    return null;
}
async function ep(e) {
    M.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        let t = new Date().getTime();
        (et(e, { mounting_started_at: t }),
            (H = null),
            await (0, T.f)(q),
            et(e, {
                renderer_started: !0,
                fullscreen_type: await (0, I.hj)(e, 0),
                graphics_info_after: new Date().getTime() - t
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && G.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            G.toggleGPUBoost('OVERLAY_RENDERING', !0),
            ef(e),
            (Z = e),
            (0, g.setPID)(e),
            M.info('Getting Native Handle for pid', e));
        let n = await e_();
        if (null == n) return (M.error('Failed to get native handle for pid', e), ei(e, Error('Failed to get native handle for pid')), '');
        return (M.info('Native Handle for pid '.concat(e, ':'), n), o.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), et(e, { renderer_started_after: new Date().getTime() - t }), eA(!1), v.Z.resetWindowState(), n);
    } catch (t) {
        (M.error('failed to create out of process overlay host window', t), ea(e, t), o.Z.updateOverlayState(e, s.mM.OVERLAY_CRASHED_DISABLED));
    }
    return (em(e), '');
}
function eh() {
    (M.verbose('Destroying OOP host window'), G.resetGPUBoosts());
    try {
        var e;
        null === l.Z || void 0 === l.Z || null == (e = l.Z.window) || e.close(N.$J);
    } catch (e) {
        (M.error('Error destroying overlay window:', e), ei(null != Z ? Z : g.UNSET_PID, e));
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        (M.error('Error setting background throttling:', e), ei(null != Z ? Z : g.UNSET_PID, e));
    }
    (ev(), j.clear(), v.Z.resetWindowState(!1), null != Z && em(Z), (Z = null), (0, g.setPID)(null != Z ? Z : g.UNSET_PID));
}
function em(e) {
    h.default.track(C.rMx.OVERLAY_HOOK_RESULT, ee(e));
}
function eg(e) {
    try {
        (M.verbose('Refreshing OOP host window for pid '.concat(e)), ef(e), j.delete(null != Z ? Z : g.UNSET_PID), (Z = e), (0, g.setPID)(null != Z ? Z : g.UNSET_PID));
        let t = f.Z.getWindow(N.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === D && (window.removeEventListener('message', n), e());
                    };
                    (window.addEventListener('message', n),
                        null == t || t.postMessage(L, '*'),
                        setTimeout(() => {
                            let e = new MessageEvent('message', { data: D });
                            n(e);
                        }, 100));
                }),
            r = 0,
            i = () => {
                15 === r ? (J.clearClickZones(), null == B || B.readyToShow(e), o.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), M.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        (M.error('failed to refresh out of process overlay host window', e), ei(null != Z ? Z : g.UNSET_PID, e));
    }
}
function eE(e, t, n, r) {
    let i = f.Z.getWindow(N.$J);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        o = Math.ceil(r * i.innerHeight),
        s = new MouseEvent(t, {
            screenX: a,
            screenY: o,
            clientX: a,
            clientY: o,
            bubbles: !0,
            view: i
        }),
        l = i.document.elementFromPoint(a, o);
    if (null == l) throw Error('No node found at point');
    l.dispatchEvent(s);
}
function eb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if ((null == e ? J.storeClickZones() : J.refreshClickZones(), null != e)) {
        let t = K[e] === s.gl.OutOfProcessLimitedInteraction;
        if (t !== H) {
            H = t;
            try {
                'function' == typeof (null == B ? void 0 : B.setLimitedInteraction) ? (M.info('Setting limited interaction', t), B.setLimitedInteraction(t), m.ZP.setFocusable(N.$J, !t)) : M.info('No setLimitedInteraction function found, skipping');
            } catch (t) {
                (M.error('Error setting limited interaction mode:', t), ei(e, t));
            }
        }
    }
    o.Z.setFocusedPID(0 === e ? null : e, t);
}
function ey(e) {
    (eb(e), eK.emitChange(), e !== F && M.info('OverlayStore: Focused new PID', e));
}
function eO(e) {
    (ev(), eK.emitChange());
}
function ev() {
    (eb(null, !0), eK.emitChange());
}
function eI(e) {
    return ((F = e.pid), !0);
}
function eT(e) {
    (o.Z.successfullyShown(e), o.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING));
    let t = ee(e).mounting_started_at;
    (et(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    }),
        eK.emitChange());
}
let eS = (() => {
    let e = null;
    async function t() {
        if (!S.iP) return void M.error('Attempted to load overlay on an unsupported platform.');
        M.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            (null == r || null == (e = r.init) || e.call(r), r.setCaptureZoneCallback(eE), r.setHostWindowCallbacks(ep, eh, eg), r.setFocusCallback(ey), null == (t = r.setFocusLostCallback) || t.call(r, eO), null == (n = r.setSuccessfullyShownCallback) || n.call(r, eT), (B = r), (0, g.setOutOfProcessSupport)(!0), eu(), M.info('OverlayV3 Module Loaded'));
        } catch (e) {
            throw (M.error('failed loading overlay module', e), (0, g.setOutOfProcessSupport)(!1), (0, E.V)(e, s.gl.OutOfProcess, { extra: er(null != Z ? Z : g.UNSET_PID, 'module_load') }), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eA(e) {
    null == B || B.setInteractionEnabled(e);
}
function eN(e) {
    if (S.iP && ((V = e), null == B && ec())) return void eS();
}
function eC(e) {}
function eR(e) {}
function eP(e) {}
async function ew(e) {
    (e.overlayMethod === s.gl.OutOfProcess || e.overlayMethod === s.gl.OutOfProcessLimitedInteraction ? (null == B && (await eS()), eo(e.pid, e.overlayMethod)) : es(e.pid), eK.emitChange());
}
function eD(e) {
    (M.verbose('Updating OverlayMethod', e), ew(e));
}
function eL(e) {
    let { pid: t, error: n } = e;
    k.has(t) && ea(t, n instanceof Error ? n : Error(null != n ? n : 'Unknown error'));
}
function ex(e) {
    G.toggleGPUBoost(e.reason, e.enabled);
}
function eM() {
    (M.verbose('Maybe Enable Overlay'), ec() ? (eN(b.v.oopEnabled), (0, g.setOutOfProcessSupport)(!0), eS()) : V && eN(!1));
}
function ek(e) {
    let { oopEnabled: t } = e;
    eN(t);
}
function ej(e) {
    let { zones: t } = e;
    J.setClickZones(t);
}
function eU(e) {
    W[e.pid] = e.overlayState;
}
function eG(e) {
    let { locked: t, pid: n } = e,
        r = W[n];
    if (t || r !== s.mM.OVERLAY_CRASHED_DISABLED) {
        if ((t ? j.delete(n) : j.add(n), null != Y && (clearTimeout(Y), (Y = null), t))) return;
        t
            ? ed(t)
            : (Y = setTimeout(() => {
                  (ed(t), (Y = null));
              }, 100));
    }
}
function eB(e) {
    let { region: t } = e;
    ed(!1);
}
function eV() {
    ed(!0);
}
function eF(e) {
    let { enabled: t, mode: n } = e;
    (t ? $.add(n) : $.delete(n), n === O.G.DisabledGPUBoost && G.toggleDisabledGPUBoost(t), n === O.G.ForceGPUBoost && G.toggleGPUBoost('DEV_FORCED_GPU_BOOST', t));
}
function eZ() {
    u.Z.hasLoadedExperiments && !z && ((z = !0), eM());
}
function eH() {
    z = !1;
}
function eY(e) {
    let { mode: t } = e;
    q = t;
}
class eW extends (r = i.ZP.Store) {
    initialize() {
        (this.waitFor(d.ZP, _.default, u.Z), this.syncWith([u.Z], eZ));
    }
    isInputLocked(e) {
        return !j.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return ec();
    }
    isOverlayV3EnabledForPID(e) {
        return k.has(e);
    }
    getWidgetByType(e) {
        let t = p.Z.getLayout(A.$S);
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
        return V;
    }
    hasRenderDebugMode(e) {
        return $.has(e);
    }
    getFocusedPID() {
        return F;
    }
    isFocused(e) {
        return null != F && e !== g.UNSET_PID && (!!k.has(e) || e === g.DEV_PID) && F === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == F ? null : null != (e = d.ZP.getGameForPID(F)) ? e : null;
    }
    isReady(e) {
        return k.has(e);
    }
    isGPUBoosted() {
        return G.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = W[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = K[e]) ? t : null;
    }
}
R(eW, 'displayName', 'OverlayStore-v3');
let eK = new eW(a.Z, {
        LOGIN: eH,
        LOGOUT: eH,
        EXPERIMENT_OVERRIDE_BUCKET: eM,
        OVERLAY_SET_ENABLED: ek,
        GAME_LAUNCH_SUCCESS: eC,
        RUNNING_GAMES_CHANGE: eR,
        RUNNING_GAME_TOGGLE_OVERLAY: eP,
        OVERLAY_FORCE_RENDER_MODE: eY,
        OVERLAY_SET_CLICK_ZONES: ej,
        OVERLAY_SET_INPUT_LOCKED: eG,
        OVERLAY_ACTIVATE_REGION: eB,
        OVERLAY_DEACTIVATE_ALL_REGIONS: eV,
        OVERLAY_RENDER_DEBUG_MODE: eF,
        OVERLAY_UPDATE_OVERLAY_METHOD: eD,
        OVERLAY_UPDATE_OVERLAY_STATE: eU,
        OVERLAY_SET_GPU_BOOST_REQUESTED: ex,
        OVERLAY_CRASHED: eL,
        OVERLAY_FOCUSED: eI
    }),
    ez = eK;
