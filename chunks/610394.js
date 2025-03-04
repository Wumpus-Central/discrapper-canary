n.d(t, {
    A8: () => P,
    Il: () => w,
    ZP: () => eZ,
    zS: () => R
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
    v = n(32300),
    b = n(306381),
    y = n(503522),
    O = n(829907),
    S = n(398269),
    I = n(987650),
    T = n(501787),
    N = n(981631);
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
var R = (function (e) {
    return (e.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED = 'HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED'), (e.OVERLAY_UNLOCKED = 'OVERLAY_UNLOCKED'), (e.OVERLAY_VIDEO_STREAM_RENDERING = 'OVERLAY_VIDEO_STREAM_RENDERING'), (e.OVERLAY_RENDERING = 'OVERLAY_RENDERING'), (e.DEV_FORCED_GPU_BOOST = 'DEV_FORCED_GPU_BOOST'), e;
})({});
let P = 'repaint-complete',
    w = 'request-repaint';
class D {
    constructor() {
        A(this, 'gpuBoostRequests', new Set()),
            A(this, 'isGPUBoosted', !1),
            A(this, 'isDisabledGPUBoost', !1),
            A(this, 'toggleGPUBoost', (e, t) => {
                t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests();
            }),
            A(this, 'toggleDisabledGPUBoost', (e) => {
                (this.isDisabledGPUBoost = e), this.flushGPUBoostRequests();
            }),
            A(this, 'resetGPUBoosts', () => {
                this.gpuBoostRequests.clear(), this.flushGPUBoostRequests();
            }),
            A(this, 'shouldBoostGPU', () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0),
            A(this, 'flushGPUBoostRequests', async () => {
                var e, t, n;
                try {
                    let n = this.shouldBoostGPU();
                    if (this.isGPUBoosted === n) return;
                    let r = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getGpuProcessId) || void 0 === e ? void 0 : e.call(t));
                    if (null == r) return;
                    m.ZP.SetGPUBoostEnabledByPid(r, n) && (this.isGPUBoosted = n), eF.emitChange();
                } catch (e) {
                    (null === (n = e.message) || void 0 === n ? void 0 : n.includes('IPC method called after context was released')) && this.resetGPUBoosts(), L.error('Error during GPU boost request flush:', e), et(null != V ? V : g.UNSET_PID, e);
                }
            });
    }
}
let L = new c.Z('OverlayStoreV3'),
    x = new Set(),
    M = new Set(),
    k = {},
    j = new D(),
    U = null,
    G = !1,
    B = null,
    V = null,
    F = null,
    Z = null,
    H = {},
    W = {},
    Y = !1,
    K = s.R5.UNSET,
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
            L.error('Error setting capture zones:', e);
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
        if (!G) {
            if (0 === this.clickZones.length) return;
            this.clearClickZones();
            return;
        }
        (this.clickZones = e), (this.focusLostStoredClickZones = [...e]);
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
                    return (this.clickZoneTimers[e.name] = t), n;
                });
            null == U || U.setCaptureZones(n);
        } catch (e) {
            L.error('Error setting capture zones:', e), et(null != V ? V : g.UNSET_PID, e);
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
        A(this, 'clickZones', []), A(this, 'focusLostStoredClickZones', []), A(this, 'clickZoneTimers', {});
    }
}
let Q = new q(),
    X = new Set();
function J(e) {
    var t;
    return null !== (t = k[e]) && void 0 !== t ? t : {};
}
function $(e, t) {
    var n, r;
    let i = null === (n = k[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = k[e]) || void 0 === r ? void 0 : r.error_description;
    (k[e] = C({}, k[e], t)), null != i && (k[e].error = i), null != o && (k[e].error_description = o);
}
function ee(e) {
    var t, n, r;
    if (null != k[e]) return;
    let i = d.ZP.getGameForPID(e);
    k[e] = {
        overlay_method: s.gl[null !== (t = W[e]) && void 0 !== t ? t : s.gl.OutOfProcess],
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
function et(e, t) {
    e !== g.UNSET_PID &&
        ($(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        Q.clearClickZones());
}
function en(e, t) {
    e !== g.UNSET_PID &&
        ($(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack
        }),
        Q.clearClickZones());
}
function er(e, t) {
    try {
        if ((null != t && (W[e] = t), null == U || U.trackGame(e), ee(e), x.has(e))) return;
        x.add(e), a.Z.updateOverlayState(e, s.mM.WAITING_FOR_OVERLAY_OPEN);
    } catch (t) {
        L.error('Error tracking game:', t), et(e, t);
    }
}
function ei(e) {
    try {
        null == U || U.untrackGame(e), x.delete(e), delete H[e], delete W[e], L.verbose('Removing tracked game '.concat(e));
    } catch (t) {
        L.error('Error removing tracked game:', t), et(e, t);
    }
}
function eo() {
    try {
        for (let e of x) null == U || U.untrackGame(e);
        x.clear(), (H = {}), (W = {}), L.verbose('Cleared all tracked games');
    } catch (e) {
        L.error('Error clearing tracked games:', e), et(g.UNSET_PID, e);
    }
}
function ea() {
    return (0, v.NW)('overlay_store_v3', !1);
}
function es() {
    if (!G) {
        eo();
        return;
    }
    let e = new Set(
        d.ZP.getRunningGames()
            .filter((e) => d.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid)
    );
    for (let t of new Set([...x].filter((t) => !e.has(t)))) ei(t);
    for (let e of x) er(e);
}
function el(e) {
    if (null == U) {
        L.warn('Overlay module not initialized during lock attempt');
        return;
    }
    try {
        let t = !e;
        U.setInteractionEnabled(t), j.toggleGPUBoost('OVERLAY_UNLOCKED', t);
    } catch (e) {
        L.error('Error during overlay lock:', e), et(null != V ? V : g.UNSET_PID, e);
    }
}
function ec(e) {
    let t = d.ZP.getGameForPID(e);
    a.Z.setAssociatedGame(null != V ? V : g.UNSET_PID, e, t);
}
async function eu(e) {
    L.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        var t, n;
        let r = new Date().getTime();
        $(e, { mounting_started_at: r }),
            (F = null),
            await (0, S.f)(K),
            $(e, {
                renderer_started: !0,
                fullscreen_type: await (0, O.hj)(e, 0),
                graphics_info_after: new Date().getTime() - r
            }),
            l.Z.window.setBackgroundThrottling(!1),
            m.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && j.toggleGPUBoost('HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED', !0),
            j.toggleGPUBoost('OVERLAY_RENDERING', !0),
            ec(e),
            (V = e),
            (0, g.setPID)(e),
            L.info('Getting Native Handle for pid', e);
        let i = null !== (n = await (null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(T.$J))) && void 0 !== n ? n : '';
        return L.info('Native Handle for pid '.concat(e, ':'), i), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), $(e, { renderer_started_after: new Date().getTime() - r }), ey(!1), y.Z.resetWindowState(), i;
    } catch (t) {
        L.error('failed to create out of process overlay host window', t), en(e, t), a.Z.updateOverlayState(e, s.mM.OVERLAY_CRASHED_DISABLED);
    }
    return ef(e), '';
}
function ed() {
    L.verbose('Destroying OOP host window'), j.resetGPUBoosts();
    try {
        var e;
        null === l.Z || void 0 === l.Z || null === (e = l.Z.window) || void 0 === e || e.close(T.$J);
    } catch (e) {
        L.error('Error destroying overlay window:', e), et(null != V ? V : g.UNSET_PID, e);
    }
    try {
        l.Z.window.setBackgroundThrottling(!0);
    } catch (e) {
        L.error('Error setting background throttling:', e), et(null != V ? V : g.UNSET_PID, e);
    }
    eE(), M.clear(), y.Z.resetWindowState(!1), null != V && ef(V), (V = null), (0, g.setPID)(null != V ? V : g.UNSET_PID);
}
function ef(e) {
    h.default.track(N.rMx.OVERLAY_HOOK_RESULT, J(e));
}
function e_(e) {
    try {
        L.verbose('Refreshing OOP host window for pid '.concat(e)), ec(e), M.delete(null != V ? V : g.UNSET_PID), (V = e), (0, g.setPID)(null != V ? V : g.UNSET_PID);
        let t = f.Z.getWindow(T.$J),
            n = () =>
                new Promise((e) => {
                    let n = (t) => {
                        t.data === P && (window.removeEventListener('message', n), e());
                    };
                    window.addEventListener('message', n),
                        null == t || t.postMessage(w, '*'),
                        setTimeout(() => {
                            let e = new MessageEvent('message', { data: P });
                            n(e);
                        }, 100);
                }),
            r = 0,
            i = () => {
                15 === r ? (Q.clearClickZones(), null == U || U.readyToShow(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING), L.verbose('Showing overlay v3 for pid '.concat(e))) : ((r += 1), n().then(i));
            };
        i();
    } catch (e) {
        L.error('failed to refresh out of process overlay host window', e), et(null != V ? V : g.UNSET_PID, e);
    }
}
function ep(e, t, n, r) {
    let i = f.Z.getWindow(T.$J);
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
function eh() {
    if ((null == B ? Q.storeClickZones() : Q.refreshClickZones(), null != B)) {
        let e = W[B] === s.gl.OutOfProcessLimitedInteraction;
        if (e !== F) {
            F = e;
            try {
                'function' == typeof (null == U ? void 0 : U.setLimitedInteraction) ? (L.info('Setting limited interaction', e), U.setLimitedInteraction(e), m.ZP.setFocusable(T.$J, !e)) : L.info('No setLimitedInteraction function found, skipping');
            } catch (e) {
                L.error('Error setting limited interaction mode:', e);
            }
        }
    }
    a.Z.setFocusedPID(B);
}
function em(e) {
    (B = e), eh();
}
function eg(e) {
    eE();
}
function eE() {
    (B = null), eh();
}
function ev(e) {
    a.Z.successfullyShown(e), a.Z.updateOverlayState(e, s.mM.OVERLAY_RENDERING);
    let t = J(e).mounting_started_at;
    $(e, {
        total_mount_time_ms: null != t ? new Date().getTime() - t : void 0,
        success: !0
    });
}
let eb = (() => {
    let e = null;
    async function t() {
        if (!I.iP) {
            L.error('Attempted to load overlay on an unsupported platform.');
            return;
        }
        L.info('Loading Out of Process Overlay Module');
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(ep), r.setHostWindowCallbacks(eu, ed, e_), r.setFocusCallback(em), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, eg), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, ev), (U = r), (0, g.setOutOfProcessSupport)(!0), es(), L.info('OverlayV3 Module Loaded');
        } catch (e) {
            throw (L.error('failed loading overlay module', e), (0, g.setOutOfProcessSupport)(!1), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function ey(e) {
    null == U || U.setInteractionEnabled(e);
}
function eO(e) {
    if (I.iP && ((G = e), null == U && ea())) {
        eb();
        return;
    }
}
function eS(e) {}
function eI(e) {}
function eT(e) {}
async function eN(e) {
    e.overlayMethod === s.gl.OutOfProcess || e.overlayMethod === s.gl.OutOfProcessLimitedInteraction ? (null == U && (await eb()), er(e.pid, e.overlayMethod)) : ei(e.pid), eF.emitChange();
}
function eA(e) {
    L.verbose('Updating OverlayMethod', e), eN(e);
}
function eC(e) {
    let { pid: t, error: n } = e;
    if (x.has(t)) {
        let e = 'string' == typeof n ? Error(n) : n;
        en(t, null != e ? e : Error('unknown error'));
    }
}
function eR(e) {
    j.toggleGPUBoost(e.reason, e.enabled);
}
function eP() {
    L.verbose('Maybe Enable Overlay'), ea() ? (eO(E.v.oopEnabled), (0, g.setOutOfProcessSupport)(!0), eb()) : G && eO(!1);
}
function ew(e) {
    let { oopEnabled: t } = e;
    eO(t);
}
function eD(e) {
    let { zones: t } = e;
    Q.setClickZones(t);
}
function eL(e) {
    H[e.pid] = e.overlayState;
}
function ex(e) {
    let { locked: t, pid: n } = e,
        r = H[n];
    if (t || r !== s.mM.OVERLAY_CRASHED_DISABLED)
        t ? M.delete(n) : M.add(n),
            (null == Z || (clearTimeout(Z), (Z = null), !t)) &&
                (t
                    ? el(t)
                    : (Z = setTimeout(() => {
                          el(t), (Z = null);
                      }, 100)));
}
function eM(e) {
    let { region: t } = e;
    el(!1);
}
function ek() {
    el(!0);
}
function ej(e) {
    let { enabled: t, mode: n } = e;
    t ? X.add(n) : X.delete(n), n === b.G.DisabledGPUBoost && j.toggleDisabledGPUBoost(t), n === b.G.ForceGPUBoost && j.toggleGPUBoost('DEV_FORCED_GPU_BOOST', t);
}
function eU() {
    u.Z.hasLoadedExperiments && !Y && ((Y = !0), eP());
}
function eG() {
    Y = !1;
}
function eB(e) {
    let { mode: t } = e;
    K = t;
}
class eV extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, _.default, u.Z), this.syncWith([u.Z], eU);
    }
    isInputLocked(e) {
        return !M.has(e);
    }
    isSupported() {
        return I.iP;
    }
    isOverlayV3Enabled() {
        return ea();
    }
    isOverlayV3EnabledForPID(e) {
        return x.has(e);
    }
    isPinned(e) {
        let t = p.Z.getLayout(T.OVERLAY_V3_LAYOUT_ID);
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
        return G;
    }
    hasRenderDebugMode(e) {
        return X.has(e);
    }
    getFocusedPID() {
        return B;
    }
    isFocused(e) {
        return null != B && e !== g.UNSET_PID && B === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == B ? null : null !== (e = d.ZP.getRunningGames().find((e) => e.pid === B)) && void 0 !== e ? e : null;
    }
    isReady(e) {
        return x.has(e);
    }
    isGPUBoosted() {
        return j.isGPUBoosted;
    }
}
A(eV, 'displayName', 'OverlayStore-v3');
let eF = new eV(o.Z, {
        LOGIN: eG,
        LOGOUT: eG,
        EXPERIMENT_OVERRIDE_BUCKET: eP,
        OVERLAY_SET_ENABLED: ew,
        GAME_LAUNCH_SUCCESS: eS,
        RUNNING_GAMES_CHANGE: eI,
        RUNNING_GAME_TOGGLE_OVERLAY: eT,
        OVERLAY_FORCE_RENDER_MODE: eB,
        OVERLAY_SET_CLICK_ZONES: eD,
        OVERLAY_SET_INPUT_LOCKED: ex,
        OVERLAY_ACTIVATE_REGION: eM,
        OVERLAY_DEACTIVATE_ALL_REGIONS: ek,
        OVERLAY_RENDER_DEBUG_MODE: ej,
        OVERLAY_UPDATE_OVERLAY_METHOD: eA,
        OVERLAY_UPDATE_OVERLAY_STATE: eL,
        OVERLAY_SET_GPU_BOOST_REQUESTED: eR,
        OVERLAY_CRASHED: eC
    }),
    eZ = eF;
