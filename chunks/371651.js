n.d(t, { Z: () => eC }), n(47120);
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
    O = !1,
    D = null,
    x = {},
    L = null,
    P = new Set([u.Jx.FULLSCREEN, u.Jx.BORDERLESS_FULLSCREEN, u.Jx.UNKNOWN, u.Jx.MINIMIZED]),
    w = new Set([u.Jx.MINIMIZED, u.Jx.UNKNOWN]),
    M = 5000,
    k = 8000,
    U = 12000;
function G() {
    return C;
}
function B() {
    return R;
}
function Z() {
    return B() || G();
}
function F(e) {
    var t;
    return null !== (t = x[e]) && void 0 !== t ? t : null;
}
function V() {
    return Object.keys(x).map(Number);
}
function j(e, t) {
    x = {
        ...x,
        [e]: { ...t }
    };
}
function H(e) {
    delete x[e];
}
function Y(e) {
    return null != x[e];
}
function W(e, t, n) {
    let i = F(e);
    if (null == i) {
        S.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
        return;
    }
    (i[t] = n), j(e, i);
}
function K() {
    return { startTrackingTimestamp: Date.now() };
}
function z(e, t) {
    let n = F(e);
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
    W(e, 'timer', i), eN.emitChange();
}
async function q(e) {
    var t, n, i, r;
    let a = F(e);
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
        timer: K(),
        fullscreenType: _,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null === (r = null == d ? void 0 : d.supportsOutOfProcessOverlay) || void 0 === r || r
    };
    return j(e, p), eN.emitChange(), p;
}
function Q(e) {
    return null == e
        ? {
              source: _.d.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          }
        : (0, f.b6)(e, A);
}
function X(e, t) {
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
    if (!Z())
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
    if (!B() && G()) {
        let e = Q(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : l.gl.Disabled
        };
    }
    if (!(0, E.NW)('determineOverlayMethod', !1)) {
        let e = Q(n),
            t = e.enabledLegacy && G();
        return {
            ...e,
            overlayMethod: t ? e.overlayMethod : l.gl.Disabled
        };
    }
    if (!(0, m.VS)())
        return {
            ...Q(n),
            source: _.d.NO_OUT_OF_PROCESS_SUPPORT
        };
    if (!i.enabledOOP && i.enabledLegacy)
        return G()
            ? {
                  ...Q(n),
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
            let e = i.enabledOOP && B(),
                t = i.enabledLegacy && G(),
                a = r ? l.gl.OutOfProcessLimitedInteraction : l.gl.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? a : t ? Q(n).overlayMethod : l.gl.Disabled,
                source: _.d.FULL_SCREEN_TYPE
            };
        }
        case u.Jx.FULLSCREEN: {
            let e = Q(n),
                t = e.enabledLegacy && G();
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
async function J(e) {
    if (Y(e)) {
        S.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await eo(new Set([e]));
        return;
    }
    if (!Z()) {
        S.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
        return;
    }
    if (null == (await q(e))) {
        S.error('Failed to track game '.concat(e));
        return;
    }
    W(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eN.emitChange(), S.verbose('Determining initial overlay method for pid '.concat(e));
    let t = await et(e);
    S.verbose('Overlay method for pid '.concat(e, ': ').concat((0, y.P_)(t.overlayMethod))), z(e, v.zE.SCREEN_TYPE_RESOLUTION), await en(e, t), el(M), eN.emitChange();
}
async function $(e) {
    var t, n, i;
    if (!Y(e)) {
        S.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    S.verbose('Untracking game '.concat(e));
    let r = F(e),
        a = {
            source: null !== (t = null == r ? void 0 : r.source) && void 0 !== t ? t : _.d.DEFAULT,
            enabledOOP: null !== (n = null == r ? void 0 : r.oopEnabled) && void 0 !== n && n,
            enabledLegacy: null !== (i = null == r ? void 0 : r.legacyEnabled) && void 0 !== i && i,
            overlayMethod: l.gl.Disabled
        };
    await en(e, a), H(e), eN.emitChange();
}
async function ee(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        i = null !== (t = null == n ? void 0 : n.fullscreenType) && void 0 !== t ? t : u.Jx.UNKNOWN;
    if (P.has(i)) {
        let t = await (0, y.hj)(e, k);
        S.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (i = t);
    }
    return i;
}
async function et(e) {
    let t = await ee(e);
    if (w.has(t)) {
        let n = await (0, y.hj)(e, U);
        null != n && (t = n);
    }
    if (t === u.Jx.UNKNOWN) {
        let n = await (0, y.hj)(e, U);
        null != n && (t = n);
    }
    let n = F(e);
    return null == n
        ? (S.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: _.d.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          })
        : X(n, t);
}
function en(e, t) {
    let n = t.overlayMethod;
    return W(e, 'state', n === l.gl.Disabled ? l.mM.OVERLAY_DISABLED : l.mM.WAITING_FOR_MODULE_TRACKING), W(e, 'overlayMethod', n), W(e, 'source', t.source), W(e, 'oopEnabled', t.enabledOOP), W(e, 'legacyEnabled', t.enabledLegacy), S.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, y.P_)(n))), eN.emitChange(), o.Z.updateOverlayMethod(e, n);
}
async function ei() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid)
        ),
        t = new Set(V()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await $(e), await (0, a._v)(100);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await J(e), await (0, a._v)(100);
    let r = new Set([...t].filter((t) => e.has(t)));
    await eo(r),
        (n.size > 0 || i.size > 0) &&
            S.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: r
            });
}
async function er(e) {
    let t = !1,
        n = F(e);
    if (null == n) return S.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (v.lT.has(n.state)) return S.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1;
    let i = await (0, y.hj)(e, 0);
    if (null == i) return S.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    n.fullscreenType !== i &&
        (S.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: i
        }),
        W(e, 'fullscreenType', i),
        eN.emitChange(),
        (t = !0));
    let r = X(n, i);
    if ((n.overlayMethod === r.overlayMethod && n.oopEnabled === r.enabledOOP && n.legacyEnabled === r.enabledLegacy && r.overlayMethod !== l.gl.Disabled) || (!(D !== m.R2 && null !== D) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let a = N === l.R5.OUT_OF_PROCESS_V2 || N === l.R5.OUT_OF_PROCESS_V3 || N === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
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
            legacyEnabled: G(),
            overlayEnabled: B()
        }),
        r.overlayMethod)
    ) {
        case l.gl.OutOfProcess:
        case l.gl.OutOfProcessLimitedInteraction:
            ((o && !s) || a) && (await es(e, r));
            break;
        case l.gl.Hook:
            ((u && !a) || s || G()) && (await ea(e, r));
            break;
        case l.gl.Disabled:
            await $(e);
    }
    return t;
}
function ea(e, t) {
    var n;
    return Y(e) ? ((null === (n = F(e)) || void 0 === n ? void 0 : n.overlayMethod) === l.gl.Hook ? (S.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling hook for pid '.concat(e)), W(e, 'hasChangedRenderMode', !0), en(e, t))) : (S.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function es(e, t) {
    var n;
    return Y(e) ? ((null === (n = F(e)) || void 0 === n ? void 0 : n.overlayMethod) === t.overlayMethod ? (S.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (S.verbose('Enabling OOP for pid '.concat(e)), W(e, 'hasChangedRenderMode', !0), en(e, t))) : (S.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function eo(e) {
    let t = !1;
    for (let n of e) (t = (await er(n)) || t), await (0, a._v)(100);
    t && (S.info('determineAllOverlayMethodSwaps has changes'), eN.emitChange());
}
function el(e) {
    null == L &&
        (__OVERLAY__ && S.error('Running Polling While in Overlay Context!'),
        (L = setTimeout(async () => {
            L = null;
            let e = V();
            e.length > 0 && (el(M), await eo(new Set(e)));
        }, e)));
}
async function eu(e, t) {
    if (!b.iP) {
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
        n && S.info('Legacy change'), i && S.info('OOP change'), ei();
    else for (let e of V()) await $(e), await (0, a._v)(100);
}
function ec() {
    ei(), (O = !1);
}
function ed(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return eu(t, n), !0;
}
function ef(e) {
    if (null != e.pids) for (let t of e.pids) J(t);
}
function e_(e) {
    for (let t of (__OVERLAY__ && S.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) J(t.pid);
    for (let t of e.removed) $(t.pid);
}
function ep(e) {
    if ((__OVERLAY__ && S.error('Running handleGameToggleOverlay While in Overlay Context!'), S.verbose('handleGameToggleOverlay', { action: e }), !Z())) {
        if ((S.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = F(t);
            if (null != n) return en(t, X(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!('pid' in e.game)) return S.verbose('handleGameToggleOverlay: game is not a PersistGame'), ei(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
    if (Y(t)) {
        let e = F(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && W(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== i && W(t, 'oopEnabled', null != i && i);
    }
    let r = n && G(),
        a = null != i && i && B();
    return (
        r || a
            ? (S.verbose('handleGameToggleOverlay: game enabled changed', {
                  pid: t,
                  legacyEnabled: r,
                  overlayV3Enabled: a
              }),
              Y(t) ? eh() : J(t))
            : $(t),
        !0
    );
}
async function eh() {
    let e = V();
    for (let t of (S.info('Retracking '.concat(e.length, ' games')), await em(), await (0, a._v)(2000), e)) await J(t), await (0, a._v)(100);
    S.info('Retracked '.concat(e.length, ' games'));
}
async function em() {
    for (let e of V()) await $(e), await (0, a._v)(100);
}
function eg(e) {
    return S.error('Overlay reload for pid', { pid: e.pid }), eh(), !0;
}
function eE(e) {
    return S.error('Overlay crashed for pid '.concat(e.pid)), !!Y(e.pid) && (W(e.pid, 'state', l.mM.OVERLAY_CRASHED), !0);
}
function ev(e) {
    return (N = e.mode), eh(), !0;
}
function ey(e) {
    if (null != F(e.pid)) return W(e.pid, 'state', e.overlayState), S.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? z(e.pid, v.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && z(e.pid, v.zE.OVERLAY_RENDERING), !0;
}
function eI(e) {
    D = e.pid;
}
function eb() {
    d.Z.hasLoadedExperiments && !O && ((O = !0), eu(g.v.legacyEnabled, g.v.oopEnabled));
}
function eT() {
    O = !1;
}
function eS() {
    (O = !1), em();
}
class eA extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, p.default, d.Z, I.ZP), this.syncWith([d.Z], eb);
    }
    getForcedRenderMode() {
        return N;
    }
    getOverlayMethod(e) {
        var t, n;
        return null !== (n = null === (t = F(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : l.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === l.gl.OutOfProcess || t === l.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null !== (n = null === (t = F(e)) || void 0 === t ? void 0 : t.hasChangedRenderMode) && void 0 !== n && n;
    }
    getTrackedGameByPid(e) {
        return F(e);
    }
    getTrackedGames() {
        return x;
    }
    getGameOverlayStatus(e) {
        let t = F(e.pid);
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
            oopEnabled: B(),
            legacyEnabled: G()
        };
    }
    getAnyGlobalEnabledOverlay() {
        return B() || G();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1
            };
        let t = F(e.pid);
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
        if (null != e) return null !== (n = null === (t = F(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : void 0;
    }
}
T(eA, 'displayName', 'OverlayRenderStore');
let eN = new eA(s.Z, {
        CONNECTION_OPEN: ec,
        LOGIN: eT,
        LOGOUT: eS,
        EXPERIMENT_OVERRIDE_BUCKET: ec,
        OVERLAY_SET_ENABLED: ed,
        GAME_LAUNCH_SUCCESS: ef,
        RUNNING_GAMES_CHANGE: e_,
        RUNNING_GAME_TOGGLE_OVERLAY: ep,
        OVERLAY_FORCE_RENDER_MODE: ev,
        OVERLAY_UPDATE_OVERLAY_STATE: ey,
        OVERLAY_CRASHED: eE,
        OVERLAY_RELOAD: eg,
        OVERLAY_FOCUSED: eI
    }),
    eC = eN;
