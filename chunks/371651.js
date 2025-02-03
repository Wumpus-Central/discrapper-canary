n.d(t, { Z: () => ev }), n(47120);
var i,
    r = n(442837),
    a = n(379649),
    s = n(570140),
    o = n(13245),
    l = n(615287),
    u = n(593472),
    c = n(710845),
    d = n(353926),
    f = n(594190),
    _ = n(370862),
    p = n(314897),
    h = n(77498),
    m = n(145597),
    g = n(454991),
    E = n(32300),
    v = n(542750),
    y = n(829907),
    I = n(610394),
    b = n(987650);
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
let S = new c.Z('OverlayRenderStore'),
    A = !0,
    N = l.R5.UNSET,
    C = !1,
    R = !1,
    O = null,
    D = {},
    x = null,
    L = new Set([u.Jx.FULLSCREEN, u.Jx.BORDERLESS_FULLSCREEN, u.Jx.UNKNOWN, u.Jx.MINIMIZED]),
    P = new Set([u.Jx.MINIMIZED, u.Jx.UNKNOWN]),
    w = 5000,
    M = 8000,
    k = 12000;
function U(e) {
    var t;
    return null !== (t = D[e]) && void 0 !== t ? t : null;
}
function G() {
    return Object.keys(D).map(Number);
}
function B(e, t) {
    D = {
        ...D,
        [e]: { ...t }
    };
}
function Z(e) {
    delete D[e];
}
function F(e) {
    return null != D[e];
}
function V(e, t, n) {
    let i = U(e);
    if (null == i) {
        S.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
        return;
    }
    (i[t] = n), B(e, i);
}
function j() {
    return { startTrackingTimestamp: Date.now() };
}
function H(e, t) {
    let n = U(e);
    if (null == n) return;
    let i = n.timer;
    switch (t) {
        case v.zE.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case v.zE.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case v.zE.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    V(e, 'timer', i);
}
async function Y(e) {
    var t, n, i;
    let r = U(e);
    if (null != r) return r;
    let a = f.ZP.getGameForPID(e);
    if (null == a) return S.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let s = (0, f.b6)(a),
        o = h.Z.getGameByName(a.name),
        u = null !== (t = await (0, y.hj)(e, 0)) && void 0 !== t ? t : a.fullscreenType;
    S.verbose('Tracking game '.concat(e, ' for overlay'));
    let c = {
        ...s,
        pid: e,
        applicationId: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : null,
        gameName: null !== (i = a.name) && void 0 !== i ? i : null,
        state: l.mM.INITIALIZING,
        timer: j(),
        fullscreenType: u,
        hasChangedRenderMode: !1
    };
    return B(e, c), c;
}
function W(e) {
    return null == e
        ? {
              source: _.d.DEFAULT,
              enabled: !1,
              overlayMethod: l.gl.Disabled
          }
        : (0, f.b6)(e, A);
}
function K(e, t) {
    switch (N) {
        case l.R5.UNSET:
            break;
        case l.R5.IN_PROCESS_V2:
            return {
                source: _.d.DEV_OVERRIDE,
                enabled: !0,
                overlayMethod: l.gl.Hook
            };
        case l.R5.OUT_OF_PROCESS_V2:
        case l.R5.OUT_OF_PROCESS_V3:
            return {
                source: _.d.DEV_OVERRIDE,
                enabled: !0,
                overlayMethod: l.gl.OutOfProcess
            };
    }
    if (!C)
        return {
            source: _.d.DEFAULT,
            enabled: !1,
            overlayMethod: l.gl.Disabled
        };
    let n = f.ZP.getGameForPID(e.pid);
    if (null == n)
        return {
            source: _.d.DEFAULT,
            enabled: !1,
            overlayMethod: l.gl.Disabled
        };
    let i = (0, f.b6)(n);
    if (!i.enabled)
        return {
            source: i.source,
            enabled: !1,
            overlayMethod: l.gl.Disabled
        };
    if (!e.enabled)
        return {
            source: _.d.USER_OVERRIDE,
            enabled: !1,
            overlayMethod: l.gl.Disabled
        };
    if (!(0, E.NW)('determineOverlayMethod', !1)) return W(n);
    if (!(0, m.VS)())
        return {
            ...W(n),
            source: _.d.NO_OUT_OF_PROCESS_SUPPORT
        };
    if (R)
        return {
            ...W(n),
            source: _.d.LEGACY_ENABLED
        };
    switch (t) {
        case u.Jx.MINIMIZED:
        case u.Jx.WINDOWED:
        case u.Jx.MAXIMIZED:
        case u.Jx.BORDERLESS_FULLSCREEN:
            return {
                source: _.d.FULL_SCREEN_TYPE,
                enabled: !0,
                overlayMethod: l.gl.OutOfProcess
            };
        case u.Jx.FULLSCREEN:
            return {
                ...W(n),
                source: _.d.FULL_SCREEN_TYPE
            };
        case u.Jx.UNKNOWN:
            return {
                source: _.d.FULL_SCREEN_TYPE,
                enabled: !1,
                overlayMethod: l.gl.Disabled
            };
        default:
            return {
                source: _.d.DEFAULT,
                enabled: !1,
                overlayMethod: l.gl.Disabled
            };
    }
}
async function z(e) {
    if (F(e)) {
        S.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await ei(new Set([e]));
        return;
    }
    if (!C) {
        S.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
        return;
    }
    if (null == (await Y(e))) {
        S.error('Failed to track game '.concat(e));
        return;
    }
    V(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), S.verbose('Determining initial overlay method for pid '.concat(e));
    let t = await X(e);
    S.verbose('Overlay method for pid '.concat(e, ': ').concat((0, y.P_)(t.overlayMethod))), H(e, v.zE.SCREEN_TYPE_RESOLUTION), await J(e, t), er(w), eE.emitChange();
}
async function q(e) {
    var t;
    if (!F(e)) {
        S.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    S.verbose('Untracking game '.concat(e));
    let n = U(e),
        i = {
            source: null !== (t = null == n ? void 0 : n.source) && void 0 !== t ? t : _.d.DEFAULT,
            enabled: !1,
            overlayMethod: l.gl.Disabled
        };
    await J(e, i), Z(e), eE.emitChange();
}
async function Q(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        i = null !== (t = null == n ? void 0 : n.fullscreenType) && void 0 !== t ? t : u.Jx.UNKNOWN;
    if (L.has(i)) {
        let t = await (0, y.hj)(e, M);
        S.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (i = t);
    }
    return i;
}
async function X(e) {
    let t = await Q(e);
    if (P.has(t)) {
        let n = await (0, y.hj)(e, k);
        null != n && (t = n);
    }
    if (t === u.Jx.UNKNOWN) {
        let n = await (0, y.hj)(e, k);
        null != n && (t = n);
    }
    let n = U(e);
    return null == n
        ? (S.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: _.d.NO_TRACKED_GAME,
              enabled: !1,
              overlayMethod: l.gl.Disabled
          })
        : K(n, t);
}
function J(e, t) {
    let n = t.overlayMethod;
    return V(e, 'state', n === l.gl.Disabled ? l.mM.OVERLAY_DISABLED : l.mM.WAITING_FOR_MODULE_TRACKING), V(e, 'overlayMethod', n), V(e, 'source', t.source), V(e, 'enabled', t.enabled), S.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, y.P_)(n))), o.Z.updateOverlayMethod(e, n);
}
async function $() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => {
                    var t, n;
                    return null !== (n = null === (t = f.ZP.getGameOverlayStatus(e)) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
                })
                .map((e) => e.pid)
        ),
        t = new Set(G()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await q(e), await (0, a._v)(100);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await z(e), await (0, a._v)(100);
    let r = new Set([...t].filter((t) => e.has(t)));
    await ei(r),
        (n.size > 0 || i.size > 0) &&
            S.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: r
            });
}
async function ee(e) {
    let t = !1,
        n = U(e);
    if (null == n) return S.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (v.lT.has(n.state)) return S.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1;
    let i = await (0, y.hj)(e, 0);
    if (null == i) return S.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    n.fullscreenType !== i &&
        (S.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: i
        }),
        V(e, 'fullscreenType', i),
        (t = !0));
    let r = K(n, i);
    if ((n.overlayMethod === r.overlayMethod && n.enabled === r.enabled && r.overlayMethod !== l.gl.Disabled) || (!(O !== m.R2 && null !== O) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let a = N === l.R5.OUT_OF_PROCESS_V2 || N === l.R5.OUT_OF_PROCESS_V3,
        s = N === l.R5.IN_PROCESS_V2,
        o = (0, y.PD)(n, i),
        u = (0, y.DH)(n, i);
    switch (
        (S.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: n.overlayMethod,
            newOverlayGameStatus: r,
            shouldSwitchToHook: u,
            shouldSwitchToOutOfProcess: o,
            isForcedInProcess: s,
            isForcedOutOfProcess: a,
            legacyEnabled: R
        }),
        r.overlayMethod)
    ) {
        case l.gl.OutOfProcess:
            ((o && !s) || a) && (await en(e, r));
            break;
        case l.gl.Hook:
            ((u && !a) || s || R) && (await et(e, r));
            break;
        case l.gl.Disabled:
            await q(e);
    }
    return t;
}
function et(e, t) {
    var n;
    return F(e) ? ((null === (n = U(e)) || void 0 === n ? void 0 : n.overlayMethod) === l.gl.Hook ? (S.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling hook for pid '.concat(e)), V(e, 'hasChangedRenderMode', !0), J(e, t))) : (S.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function en(e, t) {
    var n;
    return F(e) ? ((null === (n = U(e)) || void 0 === n ? void 0 : n.overlayMethod) === l.gl.OutOfProcess ? (S.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling OOP for pid '.concat(e)), V(e, 'hasChangedRenderMode', !0), J(e, t))) : (S.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function ei(e) {
    let t = !1;
    for (let n of e) (t = (await ee(n)) || t), await (0, a._v)(100);
    t && (S.info('determineAllOverlayMethodSwaps has changes'), eE.emitChange());
}
function er(e) {
    null == x &&
        (__OVERLAY__ && S.error('Running Polling While in Overlay Context!'),
        (x = setTimeout(async () => {
            x = null;
            let e = G();
            e.length > 0 && (er(w), await ei(new Set(e)));
        }, e)));
}
async function ea(e, t, n) {
    if (!b.iP) {
        S.verbose('setOverlayEnabled: not supported');
        return;
    }
    (C = e),
        (R = t),
        g.v.update({
            enabled: e,
            legacyEnabled: t,
            global: n
        });
    let i = t !== R;
    if (
        (S.info('setOverlayEnabled', {
            newOverlayEnabled: e,
            newLegacyEnabled: t,
            global: n
        }),
        e && !t && (0, m.vR)(!0),
        e)
    )
        i && S.info('Legacy change'), $();
    else for (let e of G()) await q(e), await (0, a._v)(100);
}
function es() {
    $();
}
function eo(e) {
    let { enabled: t, legacyEnabled: n, global: i } = e;
    ea(t, n, i);
}
function el(e) {
    if (null != e.pids) for (let t of e.pids) z(t);
}
function eu(e) {
    for (let t of (__OVERLAY__ && S.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) z(t.pid);
    for (let t of e.removed) q(t.pid);
}
function ec(e) {
    if ((__OVERLAY__ && S.error('Running handleGameToggleOverlay While in Overlay Context!'), S.verbose('handleGameToggleOverlay', { action: e }), !C)) {
        S.verbose('handleGameToggleOverlay: overlay not enabled');
        return;
    }
    if (!('pid' in e.game)) {
        S.verbose('handleGameToggleOverlay: game is not a PersistGame'), $();
        return;
    }
    let t = e.game.pid;
    return e.newEnabledValue ? (F(t) ? ee(t) : z(t)) : q(t), !0;
}
async function ed() {
    let e = G();
    for (let t of (S.info('Retracking '.concat(e.length, ' games')), e)) await q(t), await (0, a._v)(100);
    for (let t of (await (0, a._v)(2000), e)) await z(t), await (0, a._v)(100);
    S.info('Retracked '.concat(e.length, ' games'));
}
function ef(e) {
    return S.error('Overlay reload for pid', { pid: e.pid }), ed(), !0;
}
function e_(e) {
    S.error('Overlay crashed for pid '.concat(e.pid)), F(e.pid) && V(e.pid, 'state', l.mM.OVERLAY_CRASHED);
}
function ep(e) {
    return (N = e.mode), ed(), !0;
}
function eh(e) {
    null != U(e.pid) && (V(e.pid, 'state', e.overlayState), S.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? H(e.pid, v.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && H(e.pid, v.zE.OVERLAY_RENDERING));
}
function em(e) {
    O = e.pid;
}
class eg extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, p.default, d.Z, I.ZP), ea(g.v.enabled, g.v.legacyEnabled, g.v.global);
    }
    getForcedRenderMode() {
        return N;
    }
    getOverlayMethod(e) {
        var t, n;
        return null !== (n = null === (t = U(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : l.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        return this.getOverlayMethod(e) === l.gl.OutOfProcess;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null !== (n = null === (t = U(e)) || void 0 === t ? void 0 : t.hasChangedRenderMode) && void 0 !== n && n;
    }
    getTrackedGameByPid(e) {
        return U(e);
    }
    getTrackedGames() {
        return D;
    }
    getGameOverlayStatus(e) {
        let t = U(e.pid);
        return null == t ? null : t;
    }
    getEnabledStatus() {
        return {
            enabled: C,
            legacyEnabled: R
        };
    }
    getRenderMethod(e) {
        var t, n;
        if (null != e) return null !== (n = null === (t = U(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : void 0;
    }
}
T(eg, 'displayName', 'OverlayRenderStore');
let eE = new eg(s.Z, {
        CONNECTION_OPEN: es,
        EXPERIMENT_OVERRIDE_BUCKET: es,
        OVERLAY_SET_ENABLED: eo,
        GAME_LAUNCH_SUCCESS: el,
        RUNNING_GAMES_CHANGE: eu,
        RUNNING_GAME_TOGGLE_OVERLAY: ec,
        OVERLAY_FORCE_RENDER_MODE: ep,
        OVERLAY_UPDATE_OVERLAY_STATE: eh,
        OVERLAY_CRASHED: e_,
        OVERLAY_RELOAD: ef,
        OVERLAY_FOCUSED: em
    }),
    ev = eE;
