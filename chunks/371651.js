var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(13245),
    u = r(615287),
    c = r(593472),
    d = r(710845),
    f = r(353926),
    _ = r(594190),
    h = r(314897),
    p = r(77498),
    m = r(145597),
    g = r(454991),
    E = r(32300),
    v = r(542750),
    I = r(829907),
    T = r(610394),
    b = r(987650);
function y(e, n, r) {
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
let S = new d.Z('OverlayRenderStore'),
    A = u.R5.UNSET,
    N = !1,
    C = !1,
    R = {},
    O = null,
    D = new Set([c.Jx.FULLSCREEN, c.Jx.BORDERLESS_FULLSCREEN, c.Jx.UNKNOWN, c.Jx.MINIMIZED]),
    L = new Set([c.Jx.MINIMIZED, c.Jx.UNKNOWN]),
    x = 5000,
    w = 3000,
    P = 10000;
function M(e) {
    var n;
    return null !== (n = R[e]) && void 0 !== n ? n : null;
}
function k() {
    return Object.keys(R).map(Number);
}
function U(e, n) {
    R = {
        ...R,
        [e]: { ...n }
    };
}
function B(e) {
    delete R[e];
}
function G(e) {
    return null != R[e];
}
function Z(e, n, r) {
    let i = M(e);
    if (null == i) {
        S.error('Tried to set property '.concat(n, ' to ').concat(r, ' for untracked pid ').concat(e));
        return;
    }
    (i[n] = r), U(e, i);
}
function F() {
    return { startTrackingTimestamp: Date.now() };
}
function V(e, n) {
    let r = M(e);
    if (null == r) return;
    let i = r.timer;
    switch (n) {
        case v.zE.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case v.zE.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case v.zE.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    Z(e, 'timer', i);
}
async function j(e) {
    var n, r, i;
    let a = M(e);
    if (null != a) return a;
    let s = _.ZP.getGameForPID(e);
    if (null == s) return S.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let o = (0, _.b6)(s),
        l = p.Z.getGameByName(s.name),
        c = null !== (n = await (0, I.hj)(e, 0)) && void 0 !== n ? n : s.fullscreenType;
    S.verbose('Tracking game '.concat(e, ' for overlay'));
    let d = {
        ...o,
        pid: e,
        applicationId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : null,
        gameName: null !== (i = s.name) && void 0 !== i ? i : null,
        state: u.mM.INITIALIZING,
        timer: F(),
        fullscreenType: c,
        hasChangedRenderMode: !1
    };
    return U(e, d), d;
}
function H(e, n) {
    switch (A) {
        case u.R5.UNSET:
            break;
        case u.R5.IN_PROCESS_V2:
            return u.gl.Hook;
        case u.R5.OUT_OF_PROCESS_V2:
        case u.R5.OUT_OF_PROCESS_V3:
            return u.gl.OutOfProcess;
    }
    if (!N) return u.gl.Disabled;
    if (C) return u.gl.Hook;
    let r = _.ZP.getGameForPID(e.pid);
    if ((null != r && !(0, _.b6)(r).enabled) || !e.enabled) return u.gl.Disabled;
    if (!(0, E.NW)('determineOverlayMethod', !1) || !(0, m.VS)()) return u.gl.Hook;
    switch (n) {
        case c.Jx.MINIMIZED:
        case c.Jx.WINDOWED:
        case c.Jx.MAXIMIZED:
        case c.Jx.BORDERLESS_FULLSCREEN:
            return u.gl.OutOfProcess;
        case c.Jx.UNKNOWN:
        case c.Jx.FULLSCREEN:
        default:
            return u.gl.Hook;
    }
}
async function Y(e) {
    if (G(e)) {
        S.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await ee(new Set([e]));
        return;
    }
    if (null == (await j(e))) {
        S.error('Failed to track game '.concat(e));
        return;
    }
    Z(e, 'state', u.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), S.verbose('Determining initial overlay method for pid '.concat(e));
    let n = await z(e);
    S.verbose('Overlay method for pid '.concat(e, ': ').concat((0, I.P_)(n))), V(e, v.zE.SCREEN_TYPE_RESOLUTION), q(e, n), et(x), ed.emitChange();
}
async function W(e) {
    if (!G(e)) {
        S.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    S.verbose('Untracking game '.concat(e)), await q(e, u.gl.Disabled), B(e), ed.emitChange();
}
async function K(e) {
    var n;
    let r = _.ZP.getGameForPID(e),
        i = null !== (n = null == r ? void 0 : r.fullscreenType) && void 0 !== n ? n : c.Jx.UNKNOWN;
    if (D.has(i)) {
        let n = await (0, I.hj)(e, w);
        S.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(n)), null != n && (i = n);
    }
    return i;
}
async function z(e) {
    let n = await K(e);
    if (L.has(n)) {
        let r = await (0, I.hj)(e, P);
        null != r && (n = r);
    }
    if (n === c.Jx.UNKNOWN) {
        let r = await (0, I.hj)(e, P);
        null != r && (n = r);
    }
    let r = M(e);
    return null == r ? (S.error('Tried to determine initial overlay method for untracked pid '.concat(e)), u.gl.Disabled) : H(r, n);
}
function q(e, n) {
    return Z(e, 'state', n === u.gl.Disabled ? u.mM.OVERLAY_DISABLED : u.mM.WAITING_FOR_MODULE_TRACKING), Z(e, 'overlayMethod', n), S.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, I.P_)(n))), l.Z.updateOverlayMethod(e, n);
}
function Q() {
    let e = new Set(
            _.ZP.getRunningGames()
                .filter((e) => {
                    var n, r;
                    return null !== (r = null === (n = _.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
                })
                .map((e) => e.pid)
        ),
        n = new Set(k()),
        r = new Set([...n].filter((n) => !e.has(n)));
    for (let e of r) W(e);
    let i = new Set([...e].filter((e) => !n.has(e)));
    for (let e of i) Y(e);
    let a = new Set([...n].filter((n) => e.has(n)));
    ee(a),
        (r.size > 0 || i.size > 0) &&
            S.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: r,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a
            });
}
async function X(e) {
    let n = !1,
        r = M(e);
    if (null == r) return S.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (v.lT.has(r.state)) return S.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(r.state)), !1;
    let i = await (0, I.hj)(e, 0);
    if (null == i) return S.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    r.fullscreenType !== i &&
        (S.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: i
        }),
        Z(e, 'fullscreenType', i),
        (n = !0));
    let a = H(r, i);
    if (r.overlayMethod === a) return n;
    let s = A === u.R5.OUT_OF_PROCESS_V2 || A === u.R5.OUT_OF_PROCESS_V3,
        o = A === u.R5.IN_PROCESS_V2,
        l = (0, I.PD)(r, i),
        c = (0, I.DH)(r, i);
    switch (
        (S.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: r.overlayMethod,
            newOverlayMethod: a,
            shouldSwitchToHook: c,
            shouldSwitchToOutOfProcess: l,
            isForcedInProcess: o,
            isForcedOutOfProcess: s,
            legacyEnabled: C
        }),
        a)
    ) {
        case u.gl.OutOfProcess:
            ((l && !o) || s) && (await $(e));
            break;
        case u.gl.Hook:
            ((c && !s) || o || C) && (await J(e));
            break;
        case u.gl.Disabled:
            await W(e);
    }
    return n;
}
function J(e) {
    var n;
    return G(e) ? ((null === (n = M(e)) || void 0 === n ? void 0 : n.overlayMethod) === u.gl.Hook ? (S.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling hook for pid '.concat(e)), Z(e, 'hasChangedRenderMode', !0), q(e, u.gl.Hook))) : (S.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function $(e) {
    var n;
    return G(e) ? ((null === (n = M(e)) || void 0 === n ? void 0 : n.overlayMethod) === u.gl.OutOfProcess ? (S.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling OOP for pid '.concat(e)), Z(e, 'hasChangedRenderMode', !0), q(e, u.gl.OutOfProcess))) : (S.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function ee(e) {
    let n = !1;
    for (let r of e) n = (await X(r)) || n;
    n && ed.emitChange();
}
function et(e) {
    if (null == O)
        __OVERLAY__ && S.error('Running Polling While in Overlay Context!'),
            (O = setTimeout(async () => {
                if (((O = null), !!(k().length > 0))) {
                    et(x);
                    await ee(new Set(k()));
                }
            }, e));
}
function en(e, n, r) {
    if (!b.iP) {
        S.verbose('setOverlayEnabled: not supported');
        return;
    }
    (N = e),
        (C = n),
        g.v.update({
            enabled: e,
            legacyEnabled: n,
            global: r
        }),
        (0, m.vR)(!0),
        Q();
}
function er() {
    Q();
}
function ei(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    en(n, r, i);
}
function ea(e) {
    if (null != e.pids) for (let n of e.pids) Y(n);
}
function es(e) {
    for (let n of (__OVERLAY__ && S.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) Y(n.pid);
    for (let n of e.removed) W(n.pid);
}
function eo(e) {
    if ((__OVERLAY__ && S.error('Running handleGameToggleOverlay While in Overlay Context!'), !N || !('pid' in e.game))) return;
    let n = e.game.pid;
    e.newEnabledValue ? Y(n) : B(n);
}
function el(e) {
    A = e.mode;
    let n = Object.keys(R).map(Number);
    Promise.all(n.map(W)).then(() => Promise.all(n.map(Y)));
}
function eu(e) {
    if (null != M(e.pid)) Z(e.pid, 'state', e.overlayState), S.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === u.mM.WAITING_FOR_OVERLAY_OPEN ? V(e.pid, v.zE.MODULE_TRACKING) : e.overlayState === u.mM.OVERLAY_RENDERING && V(e.pid, v.zE.OVERLAY_RENDERING);
}
class ec extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z, T.ZP), en(g.v.enabled, g.v.legacyEnabled, g.v.global);
    }
    getForcedRenderMode() {
        return A;
    }
    getOverlayMethod(e) {
        var n, r;
        return null !== (r = null === (n = M(e)) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : u.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        return this.getOverlayMethod(e) === u.gl.OutOfProcess;
    }
    hasChangedRenderMode(e) {
        var n, r;
        return null !== (r = null === (n = M(e)) || void 0 === n ? void 0 : n.hasChangedRenderMode) && void 0 !== r && r;
    }
    getTrackedGameByPid(e) {
        return M(e);
    }
    getTrackedGames() {
        return R;
    }
    getGameOverlayStatus(e) {
        let n = M(e.pid);
        return null == n ? null : n;
    }
    getEnabledStatus() {
        return {
            enabled: N,
            legacyEnabled: C
        };
    }
    getRenderMethod(e) {
        var n, r;
        if (null != e) return null !== (r = null === (n = M(e)) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : void 0;
    }
}
y(ec, 'displayName', 'OverlayRenderStore');
let ed = new ec(o.Z, {
    CONNECTION_OPEN: er,
    EXPERIMENT_OVERRIDE_BUCKET: er,
    OVERLAY_SET_ENABLED: ei,
    GAME_LAUNCH_SUCCESS: ea,
    RUNNING_GAMES_CHANGE: es,
    RUNNING_GAME_TOGGLE_OVERLAY: eo,
    OVERLAY_FORCE_RENDER_MODE: el,
    OVERLAY_UPDATE_OVERLAY_STATE: eu
});
n.Z = ed;
