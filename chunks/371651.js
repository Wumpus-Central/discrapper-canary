n.r(t), n.d(t, { default: () => eR }), n(47120);
var r,
    i = n(442837),
    o = n(379649),
    a = n(570140),
    s = n(13245),
    l = n(615287),
    c = n(593472),
    u = n(710845),
    d = n(353926),
    f = n(594190),
    _ = n(370862),
    p = n(314897),
    h = n(77498),
    m = n(145597),
    g = n(454991),
    E = n(32300),
    b = n(542750),
    y = n(829907),
    v = n(624864),
    O = n(987650);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = new u.Z('OverlayRenderStore'),
    P = l.R5.UNSET,
    w = !1,
    D = !1,
    L = !1,
    x = null,
    M = {},
    k = null,
    j = null,
    U = new Set([c.Jx.FULLSCREEN, c.Jx.BORDERLESS_FULLSCREEN, c.Jx.UNKNOWN, c.Jx.MINIMIZED]),
    G = new Set([c.Jx.MINIMIZED, c.Jx.UNKNOWN]);
function B() {
    return w;
}
function F() {
    return D;
}
function V() {
    return F() || B();
}
function Z(e) {
    var t;
    return null != (t = M[e]) ? t : null;
}
function H() {
    return Object.keys(M).map(Number);
}
function W(e, t) {
    M = N(S({}, M), { [e]: S({}, t) });
}
function Y(e) {
    delete M[e];
}
function K(e) {
    return null != M[e];
}
function z(e, t, n) {
    let r = Z(e);
    if (null == r) return void R.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
    (r[t] = n), W(e, r);
}
function q() {
    return { startTrackingTimestamp: Date.now() };
}
function Q(e, t) {
    let n = Z(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case b.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case b.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case b.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    z(e, 'timer', r), eC.emitChange();
}
async function X(e) {
    var t, n, r, i;
    let o = Z(e);
    if (null != o) return o;
    let a = f.ZP.getGameForPID(e);
    if (null == a) return R.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let s = (0, f.b6)(a),
        { enabledOOP: c, enabledLegacy: u } = s,
        d = A(s, ['enabledOOP', 'enabledLegacy']),
        _ = h.Z.getGameByName(a.name),
        p = null != (t = await (0, y.hj)(e, 0)) ? t : a.fullscreenType;
    R.verbose('Tracking game '.concat(e, ' for overlay'));
    let m = N(S({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == _ ? void 0 : _.id) ? n : null,
        gameName: null != (r = a.name) ? r : null,
        state: l.mM.INITIALIZING,
        timer: q(),
        fullscreenType: p,
        previousFullscreenType: a.fullscreenType,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == _ ? void 0 : _.supportsOutOfProcessOverlay) || i
    });
    return W(e, m), eC.emitChange(), m;
}
function J(e, t) {
    var n, r;
    switch (P) {
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
    if (!V())
        return {
            source: _.d.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    let i = f.ZP.getGameForPID(e.pid);
    if (null == i)
        return {
            source: _.d.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    let o = (0, f.b6)(i);
    if (!(o.enabledLegacy || o.enabledOOP))
        return {
            source: o.source,
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
        let e = (0, y.qT)(i),
            t = e.enabledLegacy && B();
        return N(S({}, e), { overlayMethod: t ? e.overlayMethod : l.gl.Disabled });
    }
    if (!F() && B()) {
        let e = (0, y.qT)(i);
        return N(S({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : l.gl.Disabled });
    }
    if (!(0, m.supportsOutOfProcess)()) return N(S({}, (0, y.qT)(i)), { source: _.d.NO_OUT_OF_PROCESS_SUPPORT });
    if (!o.enabledOOP && o.enabledLegacy)
        return B()
            ? N(S({}, (0, y.qT)(i)), { source: _.d.LEGACY_ENABLED })
            : N(S({}, o), {
                  overlayMethod: l.gl.Disabled,
                  source: _.d.LEGACY_ENABLED
              });
    let a = null == (n = h.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, y.qc)(i) || v.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : a);
    switch (t) {
        case c.Jx.MINIMIZED:
        case c.Jx.WINDOWED:
        case c.Jx.MAXIMIZED:
        case c.Jx.BORDERLESS_FULLSCREEN: {
            let e = o.enabledOOP && F(),
                t = o.enabledLegacy && B(),
                n = s ? l.gl.OutOfProcessLimitedInteraction : l.gl.OutOfProcess;
            return N(S({}, o), {
                overlayMethod: e ? n : t ? (0, y.qT)(i).overlayMethod : l.gl.Disabled,
                source: _.d.FULL_SCREEN_TYPE
            });
        }
        case c.Jx.FULLSCREEN: {
            let e = (0, y.qT)(i),
                t = e.enabledLegacy && B();
            return N(S({}, e), {
                overlayMethod: t ? e.overlayMethod : l.gl.Disabled,
                source: _.d.FULL_SCREEN_TYPE
            });
        }
        case c.Jx.UNKNOWN:
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
    if (K(e)) {
        R.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await el(new Set([e]));
        return;
    }
    if (!V()) return void R.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
    if (null == (await X(e))) return void R.error('Failed to track game '.concat(e));
    z(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eC.emitChange(), R.verbose('Determining initial overlay method for pid '.concat(e));
    let t = await en(e);
    R.verbose('Overlay method for pid '.concat(e, ': ').concat((0, y.P_)(t.overlayMethod))), Q(e, b.zE.SCREEN_TYPE_RESOLUTION), await er(e, t), ec(y.HD), (j = t.overlayMethod), eC.emitChange();
}
async function ee(e) {
    var t, n, r;
    if (!K(e)) return void R.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
    R.verbose('Untracking game '.concat(e));
    let i = Z(e),
        o = {
            source: null != (t = null == i ? void 0 : i.source) ? t : _.d.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: l.gl.Disabled
        };
    await er(e, o), Y(e), eC.emitChange();
}
async function et(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : c.Jx.UNKNOWN;
    if (U.has(r)) {
        let t = await (0, y.hj)(e, y.X8);
        R.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (r = t);
    }
    return r;
}
async function en(e) {
    let t = await et(e);
    if (G.has(t)) {
        let n = await (0, y.hj)(e, y.tY);
        null != n && (t = n);
    }
    if (t === c.Jx.UNKNOWN) {
        let n = await (0, y.hj)(e, y.tY);
        null != n && (t = n);
    }
    let n = Z(e);
    return null == n
        ? (R.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: _.d.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          })
        : J(n, t);
}
function er(e, t) {
    var n;
    let r = t.overlayMethod;
    return (
        z(e, 'state', r === l.gl.Disabled ? l.mM.OVERLAY_DISABLED : l.mM.WAITING_FOR_MODULE_TRACKING),
        z(e, 'overlayMethod', r),
        z(e, 'source', t.source),
        z(e, 'oopEnabled', t.enabledOOP),
        z(e, 'legacyEnabled', t.enabledLegacy),
        R.verbose(
            'Updating overlay method for pid '
                .concat(e, ' "')
                .concat(null == (n = Z(e)) ? void 0 : n.gameName, '" to ')
                .concat((0, y.P_)(r))
        ),
        eC.emitChange(),
        s.Z.updateOverlayMethod(e, r)
    );
}
async function ei() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid)
        ),
        t = new Set(H()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await ee(e), await (0, o._v)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await $(e), await (0, o._v)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await el(i),
        (n.size > 0 || r.size > 0) &&
            R.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i
            });
}
async function eo(e) {
    let t = !1,
        n = Z(e);
    if (null == n) return R.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (b.lT.has(n.state)) return R.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1;
    let r = await (0, y.hj)(e, 0);
    if (null == r) return R.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    n.fullscreenType !== r &&
        (R.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r
        }),
        z(e, 'previousFullscreenType', n.fullscreenType),
        z(e, 'fullscreenType', r),
        eC.emitChange(),
        (t = !0));
    let i = J(n, r);
    if ((n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== l.gl.Disabled) || ((x === m.UNSET_PID || null === x) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let o = P === l.R5.OUT_OF_PROCESS_V2 || P === l.R5.OUT_OF_PROCESS_V3 || P === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        a = P === l.R5.IN_PROCESS_V2,
        s = (0, y.PD)(n, r, F()),
        c = (0, y.DH)(n, r, F());
    switch (
        (R.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: n.overlayMethod,
            revisedFullscreenType: r,
            previousFullscreenType: n.previousFullscreenType,
            newOverlayGameStatus: i,
            shouldSwitchToHook: c,
            shouldSwitchToOutOfProcess: s,
            isForcedInProcess: a,
            isForcedOutOfProcess: o,
            legacyEnabled: B(),
            overlayEnabled: F()
        }),
        i.overlayMethod)
    ) {
        case l.gl.OutOfProcess:
        case l.gl.OutOfProcessLimitedInteraction:
            ((s && !a) || o) && (await es(e, i));
            break;
        case l.gl.Hook:
            ((c && !o) || a || B()) && (await ea(e, i));
            break;
        case l.gl.Disabled:
            await ee(e);
    }
    return t;
}
function ea(e, t) {
    var n;
    return K(e) ? ((null == (n = Z(e)) ? void 0 : n.overlayMethod) === l.gl.Hook ? (R.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (R.verbose('Enabling hook for pid '.concat(e)), z(e, 'hasChangedRenderMode', !0), er(e, t))) : (R.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function es(e, t) {
    var n;
    return K(e) ? ((null == (n = Z(e)) ? void 0 : n.overlayMethod) === t.overlayMethod ? (R.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (R.verbose('Enabling OOP for pid '.concat(e)), z(e, 'hasChangedRenderMode', !0), er(e, t))) : (R.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function el(e) {
    let t = !1;
    for (let n of e) (t = (await eo(n)) || t), await (0, o._v)(16);
    t && (R.info('determineFullscreenOverlayMethodSwaps has changes'), eC.emitChange());
}
function ec(e) {
    null == k &&
        (__OVERLAY__ && R.error('Running Polling While in Overlay Context!'),
        (k = setTimeout(async () => {
            k = null;
            let e = H();
            e.length > 0 && (ec(y.HD), await el(new Set(e)));
        }, e)));
}
async function eu(e, t) {
    if (!O.iP) return void R.verbose('setOverlayEnabled: not supported');
    R.info('setOverlayEnabled: supported', {
        newLegacyEnabled: e,
        newOopEnabled: t
    });
    let n = e !== w,
        r = t !== D;
    if (
        ((w = e),
        (D = t),
        g.v.update({
            legacyEnabled: w,
            oopEnabled: D
        }),
        R.info('setOverlayEnabled', {
            newOopEnabled: t,
            newLegacyEnabled: e
        }),
        D && r && (0, m.setOutOfProcessSupport)(!0),
        w || D)
    )
        n && R.info('Legacy change'), r && R.info('OOP change'), em();
    else for (let e of H()) await ee(e), await (0, o._v)(16);
}
function ed() {
    ei(), (L = !1), (j = null), eS();
}
function ef(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        R.info('handleOverlaySetEnabled', {
            legacyEnabled: t,
            oopEnabled: n
        }),
        eu(t, n),
        !0
    );
}
function e_(e) {
    if (null != e.pids) for (let t of e.pids) $(t);
}
function ep(e) {
    for (let t of (__OVERLAY__ && R.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) $(t.pid);
    for (let t of e.removed) ee(t.pid);
}
function eh(e) {
    if ((__OVERLAY__ && R.error('Running handleGameToggleOverlay While in Overlay Context!'), R.verbose('handleGameToggleOverlay', { action: e }), !V())) {
        if ((R.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = Z(t);
            if (null != n) return er(t, J(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!('pid' in e.game)) return R.verbose('handleGameToggleOverlay: game is not a PersistGame'), ei(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (K(t)) {
        let e = Z(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && z(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== r && z(t, 'oopEnabled', null != r && r);
    }
    let i = n && B(),
        o = null != r && r && F();
    return (
        i || o
            ? (R.verbose('handleGameToggleOverlay: game enabled changed', {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: o
              }),
              K(t) ? em() : $(t))
            : ee(t),
        !0
    );
}
async function em() {
    await eg(), await (0, o._v)(2000);
    let e = H(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e
        ]);
    for (let n of (R.info('Retracking '.concat(t.size, ' games (').concat(e.length, ' already tracked)')), t)) await $(n), await (0, o._v)(16);
    R.info('Retracked '.concat(e.length, ' games'));
}
async function eg() {
    for (let e of H()) await ee(e), await (0, o._v)(16);
}
function eE(e) {
    return R.error('Overlay reload for pid', { pid: e.pid }), em(), !0;
}
function eb(e) {
    return R.error('Overlay crashed for pid '.concat(e.pid)), !!K(e.pid) && (z(e.pid, 'state', l.mM.OVERLAY_CRASHED), !0);
}
function ey(e) {
    return (P = e.mode), em(), !0;
}
function ev(e) {
    if (null != Z(e.pid)) return z(e.pid, 'state', e.overlayState), R.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? Q(e.pid, b.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && Q(e.pid, b.zE.OVERLAY_RENDERING), !0;
}
function eO() {
    return em(), !0;
}
function eI(e) {
    x = e.pid;
}
function eS() {
    d.Z.hasLoadedExperiments && !L && ((L = !0), eu(g.v.legacyEnabled, g.v.oopEnabled));
}
function eT() {
    (L = !1), (j = null);
}
function eN() {
    (L = !1), (j = null), eg();
}
class eA extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, p.default, d.Z, v.Z), this.syncWith([d.Z], eS);
    }
    getHasLoadedExperiments() {
        return L;
    }
    getForcedRenderMode() {
        return P;
    }
    getOverlayMethod(e) {
        var t, n;
        return null != (n = null == (t = Z(e)) ? void 0 : t.overlayMethod) ? n : l.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === l.gl.OutOfProcess || t === l.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = Z(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return Z(e);
    }
    getTrackedGames() {
        return M;
    }
    getGameOverlayStatus(e) {
        let t = Z(e.pid);
        return null == t
            ? null
            : S(
                  {
                      enabledOOP: t.oopEnabled,
                      enabledLegacy: t.legacyEnabled
                  },
                  t
              );
    }
    getGlobalEnabledStatus() {
        return {
            oopEnabled: F(),
            legacyEnabled: B()
        };
    }
    getAnyGlobalEnabledOverlay() {
        return F() || B();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1
            };
        let t = Z(e.pid);
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
        if (null != e) return null != (n = null == (t = Z(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return j;
    }
}
I(eA, 'displayName', 'OverlayRenderStore');
let eC = new eA(a.Z, {
        CONNECTION_OPEN: ed,
        LOGIN: eT,
        LOGOUT: eN,
        EXPERIMENT_OVERRIDE_BUCKET: ed,
        OVERLAY_SET_ENABLED: ef,
        GAME_LAUNCH_SUCCESS: e_,
        RUNNING_GAMES_CHANGE: ep,
        RUNNING_GAME_TOGGLE_OVERLAY: eh,
        OVERLAY_FORCE_RENDER_MODE: ey,
        OVERLAY_UPDATE_OVERLAY_STATE: ev,
        OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eO,
        OVERLAY_CRASHED: eb,
        OVERLAY_RELOAD: eE,
        OVERLAY_FOCUSED: eI
    }),
    eR = eC;
