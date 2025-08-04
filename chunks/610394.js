(n.d(t, {
    A8: () => P,
    Il: () => w,
    ZP: () => eW
}),
    n(388685),
    n(415506));
var r,
    i = n(442837),
    a = n(570140),
    o = n(13245),
    s = n(579806),
    l = n(710845),
    c = n(353926),
    u = n(594190),
    d = n(928518),
    f = n(314897),
    _ = n(355863),
    p = n(626135),
    h = n(998502),
    m = n(145597),
    g = n(41534),
    E = n(454991),
    b = n(837268),
    y = n(32300),
    O = n(503522),
    v = n(829907),
    I = n(398269),
    T = n(987650),
    S = n(757744),
    A = n(501787),
    N = n(981631);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            }));
    }
    return e;
}
let P = 'repaint-complete',
    w = 'request-repaint';
class D {
    constructor() {
        (C(this, 'gpuBoostRequests', new Set()),
            C(this, 'isGPUBoosted', !1),
            C(this, 'isDisabledGPUBoost', !1),
            C(this, 'toggleGPUBoost', (e, t) => {
                (t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests());
            }),
            C(this, 'toggleDisabledGPUBoost', (e) => {
                ((this.isDisabledGPUBoost = e), this.flushGPUBoostRequests());
            }),
            C(this, 'resetGPUBoosts', () => {
                (this.gpuBoostRequests.clear(), this.flushGPUBoostRequests());
            }),
            C(this, 'shouldBoostGPU', () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            C(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === s.Z || void 0 === s.Z || null == (t = s.Z.processUtils) || null == (e = t.getGpuProcessId) ? void 0 : e.call(t));
                    if (null == r) return;
                    (h.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eY.emitChange());
                } catch (e) {
                    ((null == (n = e.message) ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), L.error('Error during GPU boost request flush:', e), en(null != V ? V : m.UNSET_PID, e));
                }
            }));
    }
}
let L = new l.Z('OverlayStoreV3'),
    x = new Set(),
    k = new Set(),
    M = {},
    j = new D(),
    U = null,
    G = !1,
    B = null,
    V = null,
    F = null,
    Z = null,
    H = {},
    Y = {},
    W = !1,
    K = b.R5.UNSET,
    z = 30000;
class q {
    _setCaptureZones(e) {
        try {
            let t = e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }));
            null == U || U.setCaptureZones(t);
        } catch (e) {
            (L.error('Error setting capture zones:', e), en(null != V ? V : m.UNSET_PID, e));
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
        if (!G) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        ((this.clickZones = e), (this.focusLostStoredClickZones = [...e]));
        try {
            let t = setTimeout(() => {
                    this.triggerClickZoneTimer(t);
                }, z),
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
            null == U || U.setCaptureZones(n);
        } catch (e) {
            (L.error('Error setting capture zones:', e), en(null != V ? V : m.UNSET_PID, e));
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
        (C(this, 'clickZones', []), C(this, 'focusLostStoredClickZones', []), C(this, 'clickZoneTimers', {}));
    }
}
let X = new q(),
    Q = new Set();
function J(e) {
    var t;
    return null != (t = M[e]) ? t : {};
}
function $(e, t) {
    var n, r;
    let i = null == (n = M[e]) ? void 0 : n.error,
        a = null == (r = M[e]) ? void 0 : r.error_description;
    ((M[e] = R({}, M[e], t)), null != i && (M[e].error = i), null != a && (M[e].error_description = a));
}
function ee(e) {
    var t, n, r;
    if (null != M[e]) return;
    let i = u.ZP.getGameForPID(e);
    M[e] = {
        overlay_method: b.gl[null != (t = Y[e]) ? t : b.gl.OutOfProcess],
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
function et(e, t) {
    var n;
    return {
        crash_type: t,
        gameName: null == (n = u.ZP.getGameForPID(e)) ? void 0 : n.name
    };
}
function en(e, t) {
    e !== m.UNSET_PID &&
        ($(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        (0, g.V6)(t, Y[e], { extra: et(e, 'host') }),
        X.clearClickZones());
}
function er(e, t) {
    e !== m.UNSET_PID &&
        ($(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        (0, g.V6)(t, Y[e], { extra: et(e, 'renderer') }),
        X.clearClickZones());
}
function ei(e, t) {
    try {
        if ((null != t && (Y[e] = t), null == U || U.trackGame(e), ee(e), x.has(e))) return;
        (x.add(e), o.Z.updateOverlayState(e, b.mM.WAITING_FOR_OVERLAY_OPEN));
    } catch (t) {
        (L.error('Error tracking game:', t), en(e, t));
    }
}
function ea(e) {
    try {
        (null == U || U.untrackGame(e), x.delete(e), delete H[e], delete Y[e], L.verbose('Removing tracked game '.concat(e)));
    } catch (t) {
        (L.error('Error removing tracked game:', t), en(e, t));
    }
}
function eo() {
    try {
        for (let e of x) null == U || U.untrackGame(e);
        (x.clear(), (H = {}), (Y = {}), L.verbose('Cleared all tracked games'));
    } catch (e) {
        (L.error('Error clearing tracked games:', e), en(m.UNSET_PID, e));
    }
}
function es() {
    return (0, y.NW)('overlay_store_v3', !1);
}
function el() {
    if (!G) return void eo();
    let e = new Set(
        u.ZP.getRunningGames()
            .filter((e) => u.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...x].filter((t) => !e.has(t)))) ea(t);
    for (let e of x) ei(e);
}
function ec(e) {
    if (null == U) return void L.warn('Overlay module not initialized during lock attempt');
    try {
        let t = !e;
        (U.setInteractionEnabled(t), j.toggleGPUBoost(b.zS.OVERLAY_UNLOCKED, t));
    } catch (e) {
        (L.error('Error during overlay lock:', e), en(null != V ? V : m.UNSET_PID, e));
    }
}
function eu(e) {
    let t = u.ZP.getGameForPID(e);
    o.Z.setAssociatedGame(null != V ? V : m.UNSET_PID, e, t);
}
async function ed() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    for (let i = 0; i < t; i++) {
        let a = i + 1 >= t;
        try {
            var n, r;
            let e = null != (r = await (null === s.Z || void 0 === s.Z || null == (n = s.Z.window) ? void 0 : n.getNativeHandle(A.$J))) ? r : '';
            if ('' !== e) return e;
        } catch (e) {
            if (a) throw e;
            L.error('Error getting native window handle, retrying...', e);
        }
        if (a) {
            L.error('Failed to get native window handle, giving up');
            break;
        }
        L.info('Failed to get window handle on attempt '.concat(i + 1, ' of ').concat(t));
        let o = Math.pow(2, i + 1) * e;
        await new Promise((e) => setTimeout(e, o));
    }
    return null;
}
async function ef(e) {
    L.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        let t = new Date().getTime();
        ($(e, { mounting_started_at: t }),
            (F = null),
            await (0, I.f)(K),
            $(e, {
                renderer_started: !0,
                fullscreen_type: await (0, v.hj)(e, 0),
                graphics_info_after: new Date().getTime() - t
            }),
            s.Z.window.setBackgroundThrottling(!1),
            h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && j.toggleGPUBoost(b.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
            j.toggleGPUBoost(b.zS.OVERLAY_RENDERING, !0),
            eu(e),
            (V = e),
            (0, m.setPID)(e),
            L.info('Getting Native Handle for pid', e));
        let n = await ed();
        if (null == n) return (L.error('Failed to get native handle for pid', e), en(e, Error('Failed to get native handle for pid')), '');
        return (L.info('Native Handle for pid '.concat(e, ':'), n), o.Z.updateOverlayState(e, b.mM.OVERLAY_RENDERING), $(e, { renderer_started_after: new Date().getTime() - t }), eT(!1), O.Z.resetWindowState(), n);
    } catch (t) {
        (L.error('failed to create out of process overlay host window', t), er(e, t), o.Z.updateOverlayState(e, b.mM.OVERLAY_CRASHED_DISABLED));
    }
    return (ep(e), '');
}
function e_() {
    (L.verbose('Destroying OOP host window'), j.resetGPUBoosts());
    try {
        var e;
        null === s.Z || void 0 === s.Z || null == (e = s.Z.window) || e.close(A.$J);
    } catch (e) {
        (L.error('Error destroying overlay window:', e), en(null != V ? V : m.UNSET_PID, e));
    }
    try {
        s.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        (L.error('Error setting background throttling:', e), en(null != V ? V : m.UNSET_PID, e));
    }
    (ey(), k.clear(), O.Z.resetWindowState(!1), null != V && ep(V), (V = null), (0, m.setPID)(null != V ? V : m.UNSET_PID));
}
function ep(e) {
    p.default.track(N.rMx.OVERLAY_HOOK_RESULT, J(e));
}
function eh(e) {
    try {
        (L.verbose('Refreshing OOP host window for pid '.concat(e)), eu(e), k.delete(null != V ? V : m.UNSET_PID), (V = e), (0, m.setPID)(null != V ? V : m.UNSET_PID));
        let t = d.Z.getWindow(A.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === P && (window.removeEventListener('message', n), e());
                    };
                    (window.addEventListener('message', n),
                        null == t || t.postMessage(w, '*'),
                        setTimeout(() => {
                            let e = new MessageEvent('message', { data: P });
                            n(e);
                        }, 100));
                }),
            r = 0,
            i = () => {
                15 === r ? (X.clearClickZones(), null == U || U.readyToShow(e), o.Z.updateOverlayState(e, b.mM.OVERLAY_RENDERING), L.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        (L.error('failed to refresh out of process overlay host window', e), en(null != V ? V : m.UNSET_PID, e));
    }
}
function em(e, t, n, r) {
    let i = d.Z.getWindow(A.$J);
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
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if ((null == e ? X.storeClickZones() : X.refreshClickZones(), null != e)) {
        let t = Y[e] === b.gl.OutOfProcessLimitedInteraction;
        if (t !== F) {
            F = t;
            try {
                'function' == typeof (null == U ? void 0 : U.setLimitedInteraction) ? (L.info('Setting limited interaction', t), U.setLimitedInteraction(t), h.ZP.setFocusable(A.$J, !t)) : L.info('No setLimitedInteraction function found, skipping');
            } catch (t) {
                (L.error('Error setting limited interaction mode:', t), en(e, t));
            }
        }
    }
    o.Z.setFocusedPID(0 === e ? null : e, t);
}
function eE(e) {
    (eg(e), eY.emitChange(), e !== B && L.info('OverlayStore: Focused new PID', e));
}
function eb(e) {
    (ey(), eY.emitChange());
}
function ey() {
    (eg(null, !0), eY.emitChange());
}
function eO(e) {
    return ((B = e.pid), !0);
}
function ev(e) {
    (o.Z.successfullyShown(e), o.Z.updateOverlayState(e, b.mM.OVERLAY_RENDERING));
    let t = J(e).mounting_started_at;
    ($(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    }),
        eY.emitChange());
}
let eI = (() => {
    let e = null;
    async function t() {
        if (!T.iP) return void L.error('Attempted to load overlay on an unsupported platform.');
        L.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await h.ZP.ensureModule('discord_desktop_overlay');
            let r = h.ZP.requireModule('discord_desktop_overlay');
            (null == r || null == (e = r.init) || e.call(r), r.setCaptureZoneCallback(em), r.setHostWindowCallbacks(ef, e_, eh), r.setFocusCallback(eE), null == (t = r.setFocusLostCallback) || t.call(r, eb), null == (n = r.setSuccessfullyShownCallback) || n.call(r, ev), (U = r), (0, m.setOutOfProcessSupport)(!0), el(), L.info('OverlayV3 Module Loaded'));
        } catch (e) {
            throw (L.error('failed loading overlay module', e), (0, m.setOutOfProcessSupport)(!1), (0, g.V6)(e, b.gl.OutOfProcess, { extra: et(null != V ? V : m.UNSET_PID, 'module_load') }), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eT(e) {
    null == U || U.setInteractionEnabled(e);
}
function eS(e) {
    if (T.iP && ((G = e), null == U && es())) return void eI();
}
function eA(e) {}
function eN(e) {}
function eC(e) {}
async function eR(e) {
    (e.overlayMethod === b.gl.OutOfProcess || e.overlayMethod === b.gl.OutOfProcessLimitedInteraction ? (null == U && (await eI()), ei(e.pid, e.overlayMethod)) : ea(e.pid), eY.emitChange());
}
function eP(e) {
    (L.verbose('Updating OverlayMethod', e), eR(e));
}
function ew(e) {
    let { pid: t, error: n } = e;
    x.has(t) && er(t, n instanceof Error ? n : Error(null != n ? n : 'Unknown error'));
}
function eD(e) {
    j.toggleGPUBoost(e.reason, e.enabled);
}
function eL() {
    (L.verbose('Maybe Enable Overlay'), es() ? (eS(E.v.oopEnabled), (0, m.setOutOfProcessSupport)(!0), eI()) : G && eS(!1));
}
function ex(e) {
    let { oopEnabled: t } = e;
    eS(t);
}
function ek(e) {
    let { zones: t } = e;
    X.setClickZones(t);
}
function eM(e) {
    H[e.pid] = e.overlayState;
}
function ej(e) {
    let { locked: t, pid: n } = e,
        r = H[n];
    if (t || r !== b.mM.OVERLAY_CRASHED_DISABLED) {
        if ((t ? k.delete(n) : k.add(n), null != Z && (clearTimeout(Z), (Z = null), t))) return;
        t
            ? ec(t)
            : (Z = setTimeout(() => {
                  (ec(t), (Z = null));
              }, 100));
    }
}
function eU(e) {
    let { region: t } = e;
    ec(!1);
}
function eG() {
    ec(!0);
}
function eB(e) {
    let { enabled: t, mode: n } = e;
    (t ? Q.add(n) : Q.delete(n), n === b.GO.DisabledGPUBoost && j.toggleDisabledGPUBoost(t), n === b.GO.ForceGPUBoost && j.toggleGPUBoost(b.zS.DEV_FORCED_GPU_BOOST, t));
}
function eV() {
    c.Z.hasLoadedExperiments && !W && ((W = !0), eL());
}
function eF() {
    W = !1;
}
function eZ(e) {
    let { mode: t } = e;
    K = t;
}
class eH extends (r = i.ZP.Store) {
    initialize() {
        (this.waitFor(u.ZP, f.default, c.Z), this.syncWith([c.Z], eV));
    }
    isInputLocked(e) {
        return !k.has(e);
    }
    isSupported() {
        return T.iP;
    }
    isOverlayV3Enabled() {
        return es();
    }
    isOverlayV3EnabledForPID(e) {
        return x.has(e);
    }
    getWidgetByType(e) {
        let t = _.Z.getLayout(S.$S);
        if (null != t) {
            let r = t.widgets.find((t) => {
                let n = _.Z.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != r) {
                var n;
                return null != (n = _.Z.getWidget(r)) ? n : null;
            }
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    get enabled() {
        return G;
    }
    hasRenderDebugMode(e) {
        return Q.has(e);
    }
    getFocusedPID() {
        return B;
    }
    isFocused(e) {
        return null != B && e !== m.UNSET_PID && (!!x.has(e) || e === m.DEV_PID) && B === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == B ? null : null != (e = u.ZP.getGameForPID(B)) ? e : null;
    }
    isReady(e) {
        return x.has(e);
    }
    isGPUBoosted() {
        return j.isGPUBoosted;
    }
    getOverlayState(e) {
        var t;
        return null != (t = H[e]) ? t : null;
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = Y[e]) ? t : null;
    }
}
C(eH, 'displayName', 'OverlayStore-v3');
let eY = new eH(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: eF,
                  LOGOUT: eF,
                  EXPERIMENT_OVERRIDE_BUCKET: eL,
                  OVERLAY_SET_ENABLED: ex,
                  GAME_LAUNCH_SUCCESS: eA,
                  RUNNING_GAMES_CHANGE: eN,
                  RUNNING_GAME_TOGGLE_OVERLAY: eC,
                  OVERLAY_FORCE_RENDER_MODE: eZ,
                  OVERLAY_SET_CLICK_ZONES: ek,
                  OVERLAY_SET_INPUT_LOCKED: ej,
                  OVERLAY_ACTIVATE_REGION: eU,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eG,
                  OVERLAY_RENDER_DEBUG_MODE: eB,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eP,
                  OVERLAY_UPDATE_OVERLAY_STATE: eM,
                  OVERLAY_SET_GPU_BOOST_REQUESTED: eD,
                  OVERLAY_CRASHED: ew,
                  OVERLAY_FOCUSED: eO
              }
    ),
    eW = eY;
