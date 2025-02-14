n.r(t), n.d(t, { default: () => eR }), n(47120);
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
    T = n(987650);
function b(e, t, n) {
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
    O = !1,
    D = null,
    L = {},
    x = null,
    P = l.gl.Disabled,
    w = new Set([u.Jx.FULLSCREEN, u.Jx.BORDERLESS_FULLSCREEN, u.Jx.UNKNOWN, u.Jx.MINIMIZED]),
    M = new Set([u.Jx.MINIMIZED, u.Jx.UNKNOWN]),
    k = 5000,
    U = 8000,
    G = 12000;
function B() {
    return C;
}
function Z() {
    return R;
}
function F() {
    return Z() || B();
}
function V(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t ? t : null;
}
function j() {
    return Object.keys(L).map(Number);
}
function H(e, t) {
    L = {
        ...L,
        [e]: { ...t }
    };
}
function Y(e) {
    delete L[e];
}
function W(e) {
    return null != L[e];
}
function K(e, t, n) {
    let i = V(e);
    if (null == i) {
        S.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
        return;
    }
    (i[t] = n), H(e, i);
}
function z() {
    return { startTrackingTimestamp: Date.now() };
}
function q(e, t) {
    let n = V(e);
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
    K(e, 'timer', i), eC.emitChange();
}
async function Q(e) {
    var t, n, i, r;
    let a = V(e);
    if (null != a) return a;
    let s = f.ZP.getGameForPID(e);
    if (null == s) return S.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let { enabledOOP: o, enabledLegacy: u, ...c } = (0, f.b6)(s),
        d = h.Z.getGameByName(s.name),
        _ = null !== (t = await (0, y.hj)(e, 0)) && void 0 !== t ? t : s.fullscreenType;
    S.verbose('Tracking game '.concat(e, ' for overlay'));
    let p = {
        ...c,
        pid: e,
        oopEnabled: o,
        legacyEnabled: u,
        applicationId: null !== (n = null == d ? void 0 : d.id) && void 0 !== n ? n : null,
        gameName: null !== (i = s.name) && void 0 !== i ? i : null,
        state: l.mM.INITIALIZING,
        timer: z(),
        fullscreenType: _,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null === (r = null == d ? void 0 : d.supportsOutOfProcessOverlay) || void 0 === r || r
    };
    return H(e, p), eC.emitChange(), p;
}
function X(e) {
    return null == e
        ? {
              source: _.d.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          }
        : (0, f.b6)(e, A);
}
function J(e, t) {
    switch (N) {
        case l.R5.UNSET:
            break;
        case l.R5.IN_PROCESS_V2:
            return {
                source: _.d.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: l.gl.Hook
            };
        case l.R5.OUT_OF_PROCESS_V2:
        case l.R5.OUT_OF_PROCESS_V3:
            return {
                source: _.d.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: l.gl.OutOfProcess
            };
        case l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: _.d.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: l.gl.OutOfProcessLimitedInteraction
            };
    }
    if (!F())
        return {
            source: _.d.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    let n = f.ZP.getGameForPID(e.pid);
    if (null == n)
        return {
            source: _.d.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    let i = (0, f.b6)(n);
    if (!(i.enabledLegacy || i.enabledOOP))
        return {
            source: i.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: _.d.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    if (!(0, E.NW)('determineOverlayMethod', !1)) {
        let e = X(n),
            t = e.enabledLegacy && B();
        return {
            ...e,
            overlayMethod: t ? e.overlayMethod : l.gl.Disabled
        };
    }
    if (!Z() && B()) {
        let e = X(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : l.gl.Disabled
        };
    }
    if (!(0, m.VS)())
        return {
            ...X(n),
            source: _.d.NO_OUT_OF_PROCESS_SUPPORT
        };
    if (!i.enabledOOP && i.enabledLegacy)
        return B()
            ? {
                  ...X(n),
                  source: _.d.LEGACY_ENABLED
              }
            : {
                  ...i,
                  overlayMethod: l.gl.Disabled,
                  source: _.d.LEGACY_ENABLED
              };
    let r = (0, y.qc)(n);
    switch (t) {
        case u.Jx.MINIMIZED:
        case u.Jx.WINDOWED:
        case u.Jx.MAXIMIZED:
        case u.Jx.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && Z(),
                t = i.enabledLegacy && B(),
                a = r ? l.gl.OutOfProcessLimitedInteraction : l.gl.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? a : t ? X(n).overlayMethod : l.gl.Disabled,
                source: _.d.FULL_SCREEN_TYPE
            };
        }
        case u.Jx.FULLSCREEN: {
            let e = X(n),
                t = e.enabledLegacy && B();
            return {
                ...e,
                overlayMethod: t ? e.overlayMethod : l.gl.Disabled,
                source: _.d.FULL_SCREEN_TYPE
            };
        }
        case u.Jx.UNKNOWN:
            return {
                source: _.d.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: l.gl.Disabled
            };
        default:
            return {
                source: _.d.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: l.gl.Disabled
            };
    }
}
async function $(e) {
    if (W(e)) {
        S.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await el(new Set([e]));
        return;
    }
    if (!F()) {
        S.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
        return;
    }
    if (null == (await Q(e))) {
        S.error('Failed to track game '.concat(e));
        return;
    }
    K(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eC.emitChange(), S.verbose('Determining initial overlay method for pid '.concat(e));
    let t = await en(e);
    S.verbose('Overlay method for pid '.concat(e, ': ').concat((0, y.P_)(t.overlayMethod))), q(e, v.zE.SCREEN_TYPE_RESOLUTION), await ei(e, t), eu(k), (P = t.overlayMethod), eC.emitChange();
}
async function ee(e) {
    var t, n, i;
    if (!W(e)) {
        S.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    S.verbose('Untracking game '.concat(e));
    let r = V(e),
        a = {
            source: null !== (t = null == r ? void 0 : r.source) && void 0 !== t ? t : _.d.DEFAULT,
            enabledOOP: null !== (n = null == r ? void 0 : r.oopEnabled) && void 0 !== n && n,
            enabledLegacy: null !== (i = null == r ? void 0 : r.legacyEnabled) && void 0 !== i && i,
            overlayMethod: l.gl.Disabled
        };
    await ei(e, a), Y(e), eC.emitChange();
}
async function et(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        i = null !== (t = null == n ? void 0 : n.fullscreenType) && void 0 !== t ? t : u.Jx.UNKNOWN;
    if (w.has(i)) {
        let t = await (0, y.hj)(e, U);
        S.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (i = t);
    }
    return i;
}
async function en(e) {
    let t = await et(e);
    if (M.has(t)) {
        let n = await (0, y.hj)(e, G);
        null != n && (t = n);
    }
    if (t === u.Jx.UNKNOWN) {
        let n = await (0, y.hj)(e, G);
        null != n && (t = n);
    }
    let n = V(e);
    return null == n
        ? (S.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: _.d.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          })
        : J(n, t);
}
function ei(e, t) {
    let n = t.overlayMethod;
    return K(e, 'state', n === l.gl.Disabled ? l.mM.OVERLAY_DISABLED : l.mM.WAITING_FOR_MODULE_TRACKING), K(e, 'overlayMethod', n), K(e, 'source', t.source), K(e, 'oopEnabled', t.enabledOOP), K(e, 'legacyEnabled', t.enabledLegacy), S.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, y.P_)(n))), eC.emitChange(), o.Z.updateOverlayMethod(e, n);
}
async function er() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid)
        ),
        t = new Set(j()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await ee(e), await (0, a._v)(100);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await $(e), await (0, a._v)(100);
    let r = new Set([...t].filter((t) => e.has(t)));
    await el(r),
        (n.size > 0 || i.size > 0) &&
            S.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: r
            });
}
async function ea(e) {
    let t = !1,
        n = V(e);
    if (null == n) return S.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (v.lT.has(n.state)) return S.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1;
    let i = await (0, y.hj)(e, 0);
    if (null == i) return S.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    n.fullscreenType !== i &&
        (S.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: i
        }),
        K(e, 'fullscreenType', i),
        eC.emitChange(),
        (t = !0));
    let r = J(n, i);
    if ((n.overlayMethod === r.overlayMethod && n.oopEnabled === r.enabledOOP && n.legacyEnabled === r.enabledLegacy && r.overlayMethod !== l.gl.Disabled) || (!(D !== m.R2 && null !== D) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let a = N === l.R5.OUT_OF_PROCESS_V2 || N === l.R5.OUT_OF_PROCESS_V3 || N === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        s = N === l.R5.IN_PROCESS_V2,
        o = (0, y.PD)(n, i, Z()),
        u = (0, y.DH)(n, i, Z());
    switch (
        (S.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: n.overlayMethod,
            newOverlayGameStatus: r,
            shouldSwitchToHook: u,
            shouldSwitchToOutOfProcess: o,
            isForcedInProcess: s,
            isForcedOutOfProcess: a,
            legacyEnabled: B(),
            overlayEnabled: Z()
        }),
        r.overlayMethod)
    ) {
        case l.gl.OutOfProcess:
        case l.gl.OutOfProcessLimitedInteraction:
            ((o && !s) || a) && (await eo(e, r));
            break;
        case l.gl.Hook:
            ((u && !a) || s || B()) && (await es(e, r));
            break;
        case l.gl.Disabled:
            await ee(e);
    }
    return t;
}
function es(e, t) {
    var n;
    return W(e) ? ((null === (n = V(e)) || void 0 === n ? void 0 : n.overlayMethod) === l.gl.Hook ? (S.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling hook for pid '.concat(e)), K(e, 'hasChangedRenderMode', !0), ei(e, t))) : (S.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function eo(e, t) {
    var n;
    return W(e) ? ((null === (n = V(e)) || void 0 === n ? void 0 : n.overlayMethod) === t.overlayMethod ? (S.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling OOP for pid '.concat(e)), K(e, 'hasChangedRenderMode', !0), ei(e, t))) : (S.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function el(e) {
    let t = !1;
    for (let n of e) (t = (await ea(n)) || t), await (0, a._v)(100);
    t && (S.info('determineFullscreenOverlayMethodSwaps has changes'), eC.emitChange());
}
function eu(e) {
    null == x &&
        (__OVERLAY__ && S.error('Running Polling While in Overlay Context!'),
        (x = setTimeout(async () => {
            x = null;
            let e = j();
            e.length > 0 && (eu(k), await el(new Set(e)));
        }, e)));
}
async function ec(e, t) {
    if (!T.iP) {
        S.verbose('setOverlayEnabled: not supported');
        return;
    }
    let n = e !== C,
        i = t !== R;
    if (
        ((C = e),
        (R = t),
        g.v.update({
            legacyEnabled: C,
            oopEnabled: R
        }),
        S.info('setOverlayEnabled', {
            newOopEnabled: t,
            newLegacyEnabled: e
        }),
        R && i && (0, m.vR)(!0),
        C || R)
    )
        n && S.info('Legacy change'), i && S.info('OOP change'), em();
    else for (let e of j()) await ee(e), await (0, a._v)(100);
}
function ed() {
    er(), (O = !1);
}
function ef(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return ec(t, n), !0;
}
function e_(e) {
    if (null != e.pids) for (let t of e.pids) $(t);
}
function ep(e) {
    for (let t of (__OVERLAY__ && S.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) $(t.pid);
    for (let t of e.removed) ee(t.pid);
}
function eh(e) {
    if ((__OVERLAY__ && S.error('Running handleGameToggleOverlay While in Overlay Context!'), S.verbose('handleGameToggleOverlay', { action: e }), !F())) {
        if ((S.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = V(t);
            if (null != n) return ei(t, J(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!('pid' in e.game)) return S.verbose('handleGameToggleOverlay: game is not a PersistGame'), er(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
    if (W(t)) {
        let e = V(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && K(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== i && K(t, 'oopEnabled', null != i && i);
    }
    let r = n && B(),
        a = null != i && i && Z();
    return (
        r || a
            ? (S.verbose('handleGameToggleOverlay: game enabled changed', {
                  pid: t,
                  legacyEnabled: r,
                  overlayV3Enabled: a
              }),
              W(t) ? em() : $(t))
            : ee(t),
        !0
    );
}
async function em() {
    let e = j();
    for (let t of (S.info('Retracking '.concat(e.length, ' games')), await eg(), await (0, a._v)(2000), e)) await $(t), await (0, a._v)(100);
    S.info('Retracked '.concat(e.length, ' games'));
}
async function eg() {
    for (let e of j()) await ee(e), await (0, a._v)(100);
}
function eE(e) {
    return S.error('Overlay reload for pid', { pid: e.pid }), em(), !0;
}
function ev(e) {
    return S.error('Overlay crashed for pid '.concat(e.pid)), !!W(e.pid) && (K(e.pid, 'state', l.mM.OVERLAY_CRASHED), !0);
}
function ey(e) {
    return (N = e.mode), em(), !0;
}
function eI(e) {
    if (null != V(e.pid)) return K(e.pid, 'state', e.overlayState), S.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? q(e.pid, v.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && q(e.pid, v.zE.OVERLAY_RENDERING), !0;
}
function eT(e) {
    D = e.pid;
}
function eb() {
    d.Z.hasLoadedExperiments && !O && ((O = !0), ec(g.v.legacyEnabled, g.v.oopEnabled));
}
function eS() {
    O = !1;
}
function eA() {
    (O = !1), eg();
}
class eN extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, p.default, d.Z, I.ZP), this.syncWith([d.Z], eb);
    }
    getForcedRenderMode() {
        return N;
    }
    getOverlayMethod(e) {
        var t, n;
        return null !== (n = null === (t = V(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : l.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === l.gl.OutOfProcess || t === l.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null !== (n = null === (t = V(e)) || void 0 === t ? void 0 : t.hasChangedRenderMode) && void 0 !== n && n;
    }
    getTrackedGameByPid(e) {
        return V(e);
    }
    getTrackedGames() {
        return L;
    }
    getGameOverlayStatus(e) {
        let t = V(e.pid);
        return null == t
            ? null
            : {
                  enabledOOP: t.oopEnabled,
                  enabledLegacy: t.legacyEnabled,
                  ...t
              };
    }
    getGlobalEnabledStatus() {
        return {
            oopEnabled: Z(),
            legacyEnabled: B()
        };
    }
    getAnyGlobalEnabledOverlay() {
        return Z() || B();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1
            };
        let t = V(e.pid);
        return null == t
            ? {
                  oopEnabled: !1,
                  legacyEnabled: !1
              }
            : {
                  oopEnabled: t.oopEnabled,
                  legacyEnabled: t.legacyEnabled
              };
    }
    getRenderMethod(e) {
        var t, n;
        if (null != e) return null !== (n = null === (t = V(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return P;
    }
}
b(eN, 'displayName', 'OverlayRenderStore');
let eC = new eN(s.Z, {
        CONNECTION_OPEN: ed,
        LOGIN: eS,
        LOGOUT: eA,
        EXPERIMENT_OVERRIDE_BUCKET: ed,
        OVERLAY_SET_ENABLED: ef,
        GAME_LAUNCH_SUCCESS: e_,
        RUNNING_GAMES_CHANGE: ep,
        RUNNING_GAME_TOGGLE_OVERLAY: eh,
        OVERLAY_FORCE_RENDER_MODE: ey,
        OVERLAY_UPDATE_OVERLAY_STATE: eI,
        OVERLAY_CRASHED: ev,
        OVERLAY_RELOAD: eE,
        OVERLAY_FOCUSED: eT
    }),
    eR = eC;
