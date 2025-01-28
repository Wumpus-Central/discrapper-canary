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
    _ = r(370862),
    m = r(314897),
    g = r(77498),
    E = r(145597),
    v = r(454991),
    y = r(32300),
    b = r(542750),
    I = r(829907),
    T = r(610394),
    S = r(987650);
function A(e, n, r) {
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
let C = new f.Z('OverlayRenderStore'),
    N = !0,
    R = c.R5.UNSET,
    O = !1,
    D = !1,
    L = null,
    x = {},
    w = null,
    P = new Set([d.Jx.FULLSCREEN, d.Jx.BORDERLESS_FULLSCREEN, d.Jx.UNKNOWN, d.Jx.MINIMIZED]),
    M = new Set([d.Jx.MINIMIZED, d.Jx.UNKNOWN]),
    k = 5000,
    U = 8000,
    B = 12000;
function G(e) {
    var n;
    return null !== (n = x[e]) && void 0 !== n ? n : null;
}
function Z() {
    return Object.keys(x).map(Number);
}
function F(e, n) {
    x = {
        ...x,
        [e]: { ...n }
    };
}
function V(e) {
    delete x[e];
}
function j(e) {
    return null != x[e];
}
function H(e, n, r) {
    let i = G(e);
    if (null == i) {
        C.error('Tried to set property '.concat(n, ' to ').concat(r, ' for untracked pid ').concat(e));
        return;
    }
    (i[n] = r), F(e, i);
}
function Y() {
    return { startTrackingTimestamp: Date.now() };
}
function W(e, n) {
    let r = G(e);
    if (null == r) return;
    let i = r.timer;
    switch (n) {
        case b.zE.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case b.zE.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case b.zE.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    H(e, 'timer', i);
}
async function K(e) {
    var n, r, i;
    let a = G(e);
    if (null != a) return a;
    let o = h.ZP.getGameForPID(e);
    if (null == o) return C.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let s = (0, h.b6)(o),
        l = g.Z.getGameByName(o.name),
        u = null !== (n = await (0, I.hj)(e, 0)) && void 0 !== n ? n : o.fullscreenType;
    C.verbose('Tracking game '.concat(e, ' for overlay'));
    let d = {
        ...s,
        pid: e,
        applicationId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : null,
        gameName: null !== (i = o.name) && void 0 !== i ? i : null,
        state: c.mM.INITIALIZING,
        timer: Y(),
        fullscreenType: u,
        hasChangedRenderMode: !1
    };
    return F(e, d), d;
}
function z(e) {
    return null == e
        ? {
              source: _.d.DEFAULT,
              enabled: !1,
              overlayMethod: c.gl.Disabled
          }
        : (0, h.b6)(e, N);
}
function q(e, n) {
    switch (R) {
        case c.R5.UNSET:
            break;
        case c.R5.IN_PROCESS_V2:
            return {
                source: _.d.DEV_OVERRIDE,
                enabled: !0,
                overlayMethod: c.gl.Hook
            };
        case c.R5.OUT_OF_PROCESS_V2:
        case c.R5.OUT_OF_PROCESS_V3:
            return {
                source: _.d.DEV_OVERRIDE,
                enabled: !0,
                overlayMethod: c.gl.OutOfProcess
            };
    }
    if (!O)
        return {
            source: _.d.DEFAULT,
            enabled: !1,
            overlayMethod: c.gl.Disabled
        };
    let r = h.ZP.getGameForPID(e.pid);
    if (null == r)
        return {
            source: _.d.DEFAULT,
            enabled: !1,
            overlayMethod: c.gl.Disabled
        };
    let i = (0, h.b6)(r);
    if (!i.enabled)
        return {
            source: i.source,
            enabled: !1,
            overlayMethod: c.gl.Disabled
        };
    if (!e.enabled)
        return {
            source: _.d.USER_OVERRIDE,
            enabled: !1,
            overlayMethod: c.gl.Disabled
        };
    if (!(0, y.NW)('determineOverlayMethod', !1)) return z(r);
    if (!(0, E.VS)())
        return {
            ...z(r),
            source: _.d.NO_OUT_OF_PROCESS_SUPPORT
        };
    if (D)
        return {
            ...z(r),
            source: _.d.LEGACY_ENABLED
        };
    switch (n) {
        case d.Jx.MINIMIZED:
        case d.Jx.WINDOWED:
        case d.Jx.MAXIMIZED:
        case d.Jx.BORDERLESS_FULLSCREEN:
            return {
                source: _.d.FULL_SCREEN_TYPE,
                enabled: !0,
                overlayMethod: c.gl.OutOfProcess
            };
        case d.Jx.FULLSCREEN:
            return {
                ...z(r),
                source: _.d.FULL_SCREEN_TYPE
            };
        case d.Jx.UNKNOWN:
            return {
                source: _.d.FULL_SCREEN_TYPE,
                enabled: !1,
                overlayMethod: c.gl.Disabled
            };
        default:
            return {
                source: _.d.DEFAULT,
                enabled: !1,
                overlayMethod: c.gl.Disabled
            };
    }
}
async function Q(e) {
    if (j(e)) {
        C.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await ea(new Set([e]));
        return;
    }
    if (!O) {
        C.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
        return;
    }
    if (null == (await K(e))) {
        C.error('Failed to track game '.concat(e));
        return;
    }
    H(e, 'state', c.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), C.verbose('Determining initial overlay method for pid '.concat(e));
    let n = await $(e);
    C.verbose('Overlay method for pid '.concat(e, ': ').concat((0, I.P_)(n.overlayMethod))), W(e, b.zE.SCREEN_TYPE_RESOLUTION), await ee(e, n), eo(k), ey.emitChange();
}
async function X(e) {
    var n;
    if (!j(e)) {
        C.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    C.verbose('Untracking game '.concat(e));
    let r = G(e),
        i = {
            source: null !== (n = null == r ? void 0 : r.source) && void 0 !== n ? n : _.d.DEFAULT,
            enabled: !1,
            overlayMethod: c.gl.Disabled
        };
    await ee(e, i), V(e), ey.emitChange();
}
async function J(e) {
    var n;
    let r = h.ZP.getGameForPID(e),
        i = null !== (n = null == r ? void 0 : r.fullscreenType) && void 0 !== n ? n : d.Jx.UNKNOWN;
    if (P.has(i)) {
        let n = await (0, I.hj)(e, U);
        C.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(n)), null != n && (i = n);
    }
    return i;
}
async function $(e) {
    let n = await J(e);
    if (M.has(n)) {
        let r = await (0, I.hj)(e, B);
        null != r && (n = r);
    }
    if (n === d.Jx.UNKNOWN) {
        let r = await (0, I.hj)(e, B);
        null != r && (n = r);
    }
    let r = G(e);
    return null == r
        ? (C.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: _.d.NO_TRACKED_GAME,
              enabled: !1,
              overlayMethod: c.gl.Disabled
          })
        : q(r, n);
}
function ee(e, n) {
    let r = n.overlayMethod;
    return H(e, 'state', r === c.gl.Disabled ? c.mM.OVERLAY_DISABLED : c.mM.WAITING_FOR_MODULE_TRACKING), H(e, 'overlayMethod', r), H(e, 'source', n.source), H(e, 'enabled', n.enabled), C.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, I.P_)(r))), u.Z.updateOverlayMethod(e, r);
}
async function et() {
    let e = new Set(
            h.ZP.getRunningGames()
                .filter((e) => {
                    var n, r;
                    return null !== (r = null === (n = h.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
                })
                .map((e) => e.pid)
        ),
        n = new Set(Z()),
        r = new Set([...n].filter((n) => !e.has(n)));
    for (let e of r) await X(e), await (0, s._v)(100);
    let i = new Set([...e].filter((e) => !n.has(e)));
    for (let e of i) await Q(e), await (0, s._v)(100);
    let a = new Set([...n].filter((n) => e.has(n)));
    await ea(a),
        (r.size > 0 || i.size > 0) &&
            C.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: r,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a
            });
}
async function en(e) {
    let n = !1,
        r = G(e);
    if (null == r) return C.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (b.lT.has(r.state)) return C.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(r.state)), !1;
    let i = await (0, I.hj)(e, 0);
    if (null == i) return C.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    r.fullscreenType !== i &&
        (C.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: i
        }),
        H(e, 'fullscreenType', i),
        (n = !0));
    let a = q(r, i);
    if ((r.overlayMethod === a.overlayMethod && r.enabled === a.enabled && a.overlayMethod !== c.gl.Disabled) || (!(L !== E.R2 && null !== L) && r.state === c.mM.OVERLAY_RENDERING)) return n;
    let o = R === c.R5.OUT_OF_PROCESS_V2 || R === c.R5.OUT_OF_PROCESS_V3,
        s = R === c.R5.IN_PROCESS_V2,
        l = (0, I.PD)(r, i),
        u = (0, I.DH)(r, i);
    switch (
        (C.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: r.overlayMethod,
            newOverlayGameStatus: a,
            shouldSwitchToHook: u,
            shouldSwitchToOutOfProcess: l,
            isForcedInProcess: s,
            isForcedOutOfProcess: o,
            legacyEnabled: D
        }),
        a.overlayMethod)
    ) {
        case c.gl.OutOfProcess:
            ((l && !s) || o) && (await ei(e, a));
            break;
        case c.gl.Hook:
            ((u && !o) || s || D) && (await er(e, a));
            break;
        case c.gl.Disabled:
            await X(e);
    }
    return n;
}
function er(e, n) {
    var r;
    return j(e) ? ((null === (r = G(e)) || void 0 === r ? void 0 : r.overlayMethod) === c.gl.Hook ? (C.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (C.verbose('Enabling hook for pid '.concat(e)), H(e, 'hasChangedRenderMode', !0), ee(e, n))) : (C.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function ei(e, n) {
    var r;
    return j(e) ? ((null === (r = G(e)) || void 0 === r ? void 0 : r.overlayMethod) === c.gl.OutOfProcess ? (C.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (C.verbose('Enabling OOP for pid '.concat(e)), H(e, 'hasChangedRenderMode', !0), ee(e, n))) : (C.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function ea(e) {
    let n = !1;
    for (let r of e) (n = (await en(r)) || n), await (0, s._v)(100);
    n && (C.info('determineAllOverlayMethodSwaps has changes'), ey.emitChange());
}
function eo(e) {
    if (null == w)
        __OVERLAY__ && C.error('Running Polling While in Overlay Context!'),
            (w = setTimeout(async () => {
                w = null;
                let e = Z();
                if (!!(e.length > 0)) {
                    eo(k);
                    await ea(new Set(e));
                }
            }, e));
}
async function es(e, n, r) {
    if (!S.iP) {
        C.verbose('setOverlayEnabled: not supported');
        return;
    }
    (O = e),
        (D = n),
        v.v.update({
            enabled: e,
            legacyEnabled: n,
            global: r
        });
    let i = n !== D;
    if (
        (C.info('setOverlayEnabled', {
            newOverlayEnabled: e,
            newLegacyEnabled: n,
            global: r
        }),
        e && !n && (0, E.vR)(!0),
        e)
    )
        i && C.info('Legacy change'), et();
    else for (let e of Z()) await X(e), await (0, s._v)(100);
}
function el() {
    et();
}
function eu(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    es(n, r, i);
}
function ec(e) {
    if (null != e.pids) for (let n of e.pids) Q(n);
}
function ed(e) {
    for (let n of (__OVERLAY__ && C.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) Q(n.pid);
    for (let n of e.removed) X(n.pid);
}
function ef(e) {
    if ((__OVERLAY__ && C.error('Running handleGameToggleOverlay While in Overlay Context!'), C.verbose('handleGameToggleOverlay', { action: e }), !O)) {
        C.verbose('handleGameToggleOverlay: overlay not enabled');
        return;
    }
    if (!('pid' in e.game)) {
        C.verbose('handleGameToggleOverlay: game is not a PersistGame'), et();
        return;
    }
    let n = e.game.pid;
    return e.newEnabledValue ? (j(n) ? en(n) : Q(n)) : X(n), !0;
}
async function ep() {
    let e = Z();
    for (let n of (C.info('Retracking '.concat(e.length, ' games')), e)) await X(n), await (0, s._v)(100);
    for (let n of (await (0, s._v)(2000), e)) await Q(n), await (0, s._v)(100);
    C.info('Retracked '.concat(e.length, ' games'));
}
function eh(e) {
    return C.error('Overlay reload for pid', { pid: e.pid }), ep(), !0;
}
function e_(e) {
    C.error('Overlay crashed for pid '.concat(e.pid)), j(e.pid) && H(e.pid, 'state', c.mM.OVERLAY_CRASHED);
}
function em(e) {
    return (R = e.mode), ep(), !0;
}
function eg(e) {
    if (null != G(e.pid)) H(e.pid, 'state', e.overlayState), C.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === c.mM.WAITING_FOR_OVERLAY_OPEN ? W(e.pid, b.zE.MODULE_TRACKING) : e.overlayState === c.mM.OVERLAY_RENDERING && W(e.pid, b.zE.OVERLAY_RENDERING);
}
function eE(e) {
    L = e.pid;
}
class ev extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, m.default, p.Z, T.ZP), es(v.v.enabled, v.v.legacyEnabled, v.v.global);
    }
    getForcedRenderMode() {
        return R;
    }
    getOverlayMethod(e) {
        var n, r;
        return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : c.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        return this.getOverlayMethod(e) === c.gl.OutOfProcess;
    }
    hasChangedRenderMode(e) {
        var n, r;
        return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.hasChangedRenderMode) && void 0 !== r && r;
    }
    getTrackedGameByPid(e) {
        return G(e);
    }
    getTrackedGames() {
        return x;
    }
    getGameOverlayStatus(e) {
        let n = G(e.pid);
        return null == n ? null : n;
    }
    getEnabledStatus() {
        return {
            enabled: O,
            legacyEnabled: D
        };
    }
    getRenderMethod(e) {
        var n, r;
        if (null != e) return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : void 0;
    }
}
A(ev, 'displayName', 'OverlayRenderStore');
let ey = new ev(l.Z, {
    CONNECTION_OPEN: el,
    EXPERIMENT_OVERRIDE_BUCKET: el,
    OVERLAY_SET_ENABLED: eu,
    GAME_LAUNCH_SUCCESS: ec,
    RUNNING_GAMES_CHANGE: ed,
    RUNNING_GAME_TOGGLE_OVERLAY: ef,
    OVERLAY_FORCE_RENDER_MODE: em,
    OVERLAY_UPDATE_OVERLAY_STATE: eg,
    OVERLAY_CRASHED: e_,
    OVERLAY_RELOAD: eh,
    OVERLAY_FOCUSED: eE
});
n.Z = ey;
