var i,
    a = r(47120);
var o = r(442837),
    s = r(379649),
    l = r(570140),
    u = r(13245),
    c = r(615287),
    d = r(593472),
    f = r(710845),
    p = r(353926),
    h = r(594190),
    _ = r(314897),
    m = r(77498),
    g = r(145597),
    E = r(454991),
    v = r(32300),
    y = r(542750),
    b = r(829907),
    I = r(610394),
    T = r(987650);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = new f.Z('OverlayRenderStore'),
    C = c.R5.UNSET,
    N = !1,
    R = !1,
    O = {},
    D = null,
    L = new Set([d.Jx.FULLSCREEN, d.Jx.BORDERLESS_FULLSCREEN, d.Jx.UNKNOWN, d.Jx.MINIMIZED]),
    x = new Set([d.Jx.MINIMIZED, d.Jx.UNKNOWN]),
    w = 5000,
    P = 3000,
    M = 10000;
function k(e) {
    var n;
    return null !== (n = O[e]) && void 0 !== n ? n : null;
}
function U() {
    return Object.keys(O).map(Number);
}
function B(e, n) {
    O = {
        ...O,
        [e]: { ...n }
    };
}
function G(e) {
    delete O[e];
}
function Z(e) {
    return null != O[e];
}
function F(e, n, r) {
    let i = k(e);
    if (null == i) {
        A.error('Tried to set property '.concat(n, ' to ').concat(r, ' for untracked pid ').concat(e));
        return;
    }
    (i[n] = r), B(e, i);
}
function V() {
    return { startTrackingTimestamp: Date.now() };
}
function j(e, n) {
    let r = k(e);
    if (null == r) return;
    let i = r.timer;
    switch (n) {
        case y.zE.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case y.zE.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case y.zE.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    F(e, 'timer', i);
}
async function H(e) {
    var n, r, i;
    let a = k(e);
    if (null != a) return a;
    let o = h.ZP.getGameForPID(e);
    if (null == o) return A.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let s = (0, h.b6)(o),
        l = m.Z.getGameByName(o.name),
        u = null !== (n = await (0, b.hj)(e, 0)) && void 0 !== n ? n : o.fullscreenType;
    A.verbose('Tracking game '.concat(e, ' for overlay'));
    let d = {
        ...s,
        pid: e,
        applicationId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : null,
        gameName: null !== (i = o.name) && void 0 !== i ? i : null,
        state: c.mM.INITIALIZING,
        timer: V(),
        fullscreenType: u,
        hasChangedRenderMode: !1
    };
    return B(e, d), d;
}
function Y(e, n) {
    switch (C) {
        case c.R5.UNSET:
            break;
        case c.R5.IN_PROCESS_V2:
            return c.gl.Hook;
        case c.R5.OUT_OF_PROCESS_V2:
        case c.R5.OUT_OF_PROCESS_V3:
            return c.gl.OutOfProcess;
    }
    if (!N) return c.gl.Disabled;
    if (R) return c.gl.Hook;
    let r = h.ZP.getGameForPID(e.pid);
    if (null != r) {
        let n = (0, h.b6)(r);
        if ((A.verbose('Overlay status for pid '.concat(e.pid, ': ').concat(n.enabled, ' from ').concat(n.source)), !n.enabled)) return c.gl.Disabled;
    }
    if (!e.enabled) return c.gl.Disabled;
    if (!(0, v.NW)('determineOverlayMethod', !1) || !(0, g.VS)()) return c.gl.Hook;
    switch (n) {
        case d.Jx.MINIMIZED:
        case d.Jx.WINDOWED:
        case d.Jx.MAXIMIZED:
        case d.Jx.BORDERLESS_FULLSCREEN:
            return c.gl.OutOfProcess;
        case d.Jx.UNKNOWN:
        case d.Jx.FULLSCREEN:
        default:
            return c.gl.Hook;
    }
}
async function W(e) {
    if (Z(e)) {
        A.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await et(new Set([e]));
        return;
    }
    if (null == (await H(e))) {
        A.error('Failed to track game '.concat(e));
        return;
    }
    F(e, 'state', c.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), A.verbose('Determining initial overlay method for pid '.concat(e));
    let n = await q(e);
    A.verbose('Overlay method for pid '.concat(e, ': ').concat((0, b.P_)(n))), j(e, y.zE.SCREEN_TYPE_RESOLUTION), Q(e, n), en(w), e_.emitChange();
}
async function K(e) {
    if (!Z(e)) {
        A.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    A.verbose('Untracking game '.concat(e)), await Q(e, c.gl.Disabled), G(e), e_.emitChange();
}
async function z(e) {
    var n;
    let r = h.ZP.getGameForPID(e),
        i = null !== (n = null == r ? void 0 : r.fullscreenType) && void 0 !== n ? n : d.Jx.UNKNOWN;
    if (L.has(i)) {
        let n = await (0, b.hj)(e, P);
        A.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(n)), null != n && (i = n);
    }
    return i;
}
async function q(e) {
    let n = await z(e);
    if (x.has(n)) {
        let r = await (0, b.hj)(e, M);
        null != r && (n = r);
    }
    if (n === d.Jx.UNKNOWN) {
        let r = await (0, b.hj)(e, M);
        null != r && (n = r);
    }
    let r = k(e);
    return null == r ? (A.error('Tried to determine initial overlay method for untracked pid '.concat(e)), c.gl.Disabled) : Y(r, n);
}
function Q(e, n) {
    return F(e, 'state', n === c.gl.Disabled ? c.mM.OVERLAY_DISABLED : c.mM.WAITING_FOR_MODULE_TRACKING), F(e, 'overlayMethod', n), A.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, b.P_)(n))), u.Z.updateOverlayMethod(e, n);
}
async function X() {
    let e = new Set(
            h.ZP.getRunningGames()
                .filter((e) => {
                    var n, r;
                    return null !== (r = null === (n = h.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
                })
                .map((e) => e.pid)
        ),
        n = new Set(U()),
        r = new Set([...n].filter((n) => !e.has(n)));
    await Promise.all([...r].map(K));
    let i = new Set([...e].filter((e) => !n.has(e)));
    await Promise.all([...i].map(W));
    let a = new Set([...n].filter((n) => e.has(n)));
    await et(a),
        (r.size > 0 || i.size > 0) &&
            A.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: r,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a
            });
}
async function J(e) {
    let n = !1,
        r = k(e);
    if (null == r) return A.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (y.lT.has(r.state)) return A.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(r.state)), !1;
    let i = await (0, b.hj)(e, 0);
    if (null == i) return A.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    r.fullscreenType !== i &&
        (A.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: i
        }),
        F(e, 'fullscreenType', i),
        (n = !0));
    let a = Y(r, i);
    if (r.overlayMethod === a) return n;
    let o = C === c.R5.OUT_OF_PROCESS_V2 || C === c.R5.OUT_OF_PROCESS_V3,
        s = C === c.R5.IN_PROCESS_V2,
        l = (0, b.PD)(r, i),
        u = (0, b.DH)(r, i);
    switch (
        (A.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: r.overlayMethod,
            newOverlayMethod: a,
            shouldSwitchToHook: u,
            shouldSwitchToOutOfProcess: l,
            isForcedInProcess: s,
            isForcedOutOfProcess: o,
            legacyEnabled: R
        }),
        a)
    ) {
        case c.gl.OutOfProcess:
            ((l && !s) || o) && (await ee(e));
            break;
        case c.gl.Hook:
            ((u && !o) || s || R) && (await $(e));
            break;
        case c.gl.Disabled:
            await K(e);
    }
    return n;
}
function $(e) {
    var n;
    return Z(e) ? ((null === (n = k(e)) || void 0 === n ? void 0 : n.overlayMethod) === c.gl.Hook ? (A.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (A.verbose('Enabling hook for pid '.concat(e)), F(e, 'hasChangedRenderMode', !0), Q(e, c.gl.Hook))) : (A.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function ee(e) {
    var n;
    return Z(e) ? ((null === (n = k(e)) || void 0 === n ? void 0 : n.overlayMethod) === c.gl.OutOfProcess ? (A.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (A.verbose('Enabling OOP for pid '.concat(e)), F(e, 'hasChangedRenderMode', !0), Q(e, c.gl.OutOfProcess))) : (A.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function et(e) {
    let n = !1;
    for (let r of e) n = (await J(r)) || n;
    n && e_.emitChange();
}
function en(e) {
    if (null == D)
        __OVERLAY__ && A.error('Running Polling While in Overlay Context!'),
            (D = setTimeout(async () => {
                if (((D = null), !!(U().length > 0))) {
                    en(w);
                    await et(new Set(U()));
                }
            }, e));
}
function er(e, n, r) {
    if (!T.iP) {
        A.verbose('setOverlayEnabled: not supported');
        return;
    }
    (N = e),
        (R = n),
        E.v.update({
            enabled: e,
            legacyEnabled: n,
            global: r
        }),
        e && !n && (0, g.vR)(!0),
        X();
}
function ei() {
    X();
}
function ea(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    er(n, r, i);
}
function eo(e) {
    if (null != e.pids) for (let n of e.pids) W(n);
}
function es(e) {
    for (let n of (__OVERLAY__ && A.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) W(n.pid);
    for (let n of e.removed) K(n.pid);
}
function el(e) {
    if ((__OVERLAY__ && A.error('Running handleGameToggleOverlay While in Overlay Context!'), A.verbose('handleGameToggleOverlay', { action: e }), !N)) {
        A.verbose('handleGameToggleOverlay: overlay not enabled');
        return;
    }
    if (!('pid' in e.game)) {
        A.verbose('handleGameToggleOverlay: game is not a PersistGame'), X();
        return;
    }
    let n = e.game.pid;
    return e.newEnabledValue ? (Z(n) ? J(n) : W(n)) : K(n), !0;
}
async function eu() {
    let e = U();
    A.info('Retracking '.concat(e.length, ' games')), await Promise.all(e.map(K)), await (0, s._v)(2000), await Promise.all(e.map(W)), A.info('Retracked '.concat(e.length, ' games'));
}
function ec(e) {
    return A.error('Overlay reload for pid', { pid: e.pid }), eu(), !0;
}
function ed(e) {
    A.error('Overlay crashed for pid '.concat(e.pid)), Z(e.pid) && F(e.pid, 'state', c.mM.OVERLAY_CRASHED);
}
function ef(e) {
    C = e.mode;
    let n = Object.keys(O).map(Number);
    Promise.all(n.map(K)).then(() => Promise.all(n.map(W)));
}
function ep(e) {
    if (null != k(e.pid)) F(e.pid, 'state', e.overlayState), A.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === c.mM.WAITING_FOR_OVERLAY_OPEN ? j(e.pid, y.zE.MODULE_TRACKING) : e.overlayState === c.mM.OVERLAY_RENDERING && j(e.pid, y.zE.OVERLAY_RENDERING);
}
class eh extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, _.default, p.Z, I.ZP), er(E.v.enabled, E.v.legacyEnabled, E.v.global);
    }
    getForcedRenderMode() {
        return C;
    }
    getOverlayMethod(e) {
        var n, r;
        return null !== (r = null === (n = k(e)) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : c.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        return this.getOverlayMethod(e) === c.gl.OutOfProcess;
    }
    hasChangedRenderMode(e) {
        var n, r;
        return null !== (r = null === (n = k(e)) || void 0 === n ? void 0 : n.hasChangedRenderMode) && void 0 !== r && r;
    }
    getTrackedGameByPid(e) {
        return k(e);
    }
    getTrackedGames() {
        return O;
    }
    getGameOverlayStatus(e) {
        let n = k(e.pid);
        return null == n ? null : n;
    }
    getEnabledStatus() {
        return {
            enabled: N,
            legacyEnabled: R
        };
    }
    getRenderMethod(e) {
        var n, r;
        if (null != e) return null !== (r = null === (n = k(e)) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : void 0;
    }
}
S(eh, 'displayName', 'OverlayRenderStore');
let e_ = new eh(l.Z, {
    CONNECTION_OPEN: ei,
    EXPERIMENT_OVERRIDE_BUCKET: ei,
    OVERLAY_SET_ENABLED: ea,
    GAME_LAUNCH_SUCCESS: eo,
    RUNNING_GAMES_CHANGE: es,
    RUNNING_GAME_TOGGLE_OVERLAY: el,
    OVERLAY_FORCE_RENDER_MODE: ef,
    OVERLAY_UPDATE_OVERLAY_STATE: ep,
    OVERLAY_CRASHED: ed,
    OVERLAY_RELOAD: ec
});
n.Z = e_;
