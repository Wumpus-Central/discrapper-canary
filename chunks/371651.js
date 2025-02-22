n.r(t), n.d(t, { default: () => eC }), n(47120);
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
    p = n(370862),
    _ = n(314897),
    h = n(77498),
    m = n(145597),
    g = n(454991),
    E = n(32300),
    v = n(542750),
    b = n(829907),
    y = n(610394),
    O = n(987650);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
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
    x = !1,
    L = null,
    M = {},
    k = null,
    j = null,
    U = new Set([c.Jx.FULLSCREEN, c.Jx.BORDERLESS_FULLSCREEN, c.Jx.UNKNOWN, c.Jx.MINIMIZED]),
    G = new Set([c.Jx.MINIMIZED, c.Jx.UNKNOWN]);
function B() {
    return w;
}
function Z() {
    return D;
}
function F() {
    return Z() || B();
}
function V(e) {
    var t;
    return null !== (t = M[e]) && void 0 !== t ? t : null;
}
function H() {
    return Object.keys(M).map(Number);
}
function W(e, t) {
    M = N(I({}, M), { [e]: I({}, t) });
}
function Y(e) {
    delete M[e];
}
function K(e) {
    return null != M[e];
}
function z(e, t, n) {
    let r = V(e);
    if (null == r) {
        R.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
        return;
    }
    (r[t] = n), W(e, r);
}
function q() {
    return { startTrackingTimestamp: Date.now() };
}
function Q(e, t) {
    let n = V(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case v.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case v.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case v.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    z(e, 'timer', r), eA.emitChange();
}
async function X(e) {
    var t, n, r, i;
    let o = V(e);
    if (null != o) return o;
    let a = f.ZP.getGameForPID(e);
    if (null == a) return R.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null;
    let s = (0, f.b6)(a),
        { enabledOOP: c, enabledLegacy: u } = s,
        d = A(s, ['enabledOOP', 'enabledLegacy']),
        p = h.Z.getGameByName(a.name),
        _ = null !== (t = await (0, b.hj)(e, 0)) && void 0 !== t ? t : a.fullscreenType;
    R.verbose('Tracking game '.concat(e, ' for overlay'));
    let m = N(I({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null !== (n = null == p ? void 0 : p.id) && void 0 !== n ? n : null,
        gameName: null !== (r = a.name) && void 0 !== r ? r : null,
        state: l.mM.INITIALIZING,
        timer: q(),
        fullscreenType: _,
        previousFullscreenType: a.fullscreenType,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null === (i = null == p ? void 0 : p.supportsOutOfProcessOverlay) || void 0 === i || i
    });
    return W(e, m), eA.emitChange(), m;
}
function J(e, t) {
    switch (P) {
        case l.R5.UNSET:
            break;
        case l.R5.IN_PROCESS_V2:
            return {
                source: p.d.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: l.gl.Hook
            };
        case l.R5.OUT_OF_PROCESS_V2:
        case l.R5.OUT_OF_PROCESS_V3:
            return {
                source: p.d.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: l.gl.OutOfProcess
            };
        case l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: p.d.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: l.gl.OutOfProcessLimitedInteraction
            };
    }
    if (!F())
        return {
            source: p.d.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    let n = f.ZP.getGameForPID(e.pid);
    if (null == n)
        return {
            source: p.d.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    let r = (0, f.b6)(n);
    if (!(r.enabledLegacy || r.enabledOOP))
        return {
            source: r.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: p.d.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: l.gl.Disabled
        };
    if (!(0, E.NW)('determineOverlayMethod', !1)) {
        let e = (0, b.qT)(n),
            t = e.enabledLegacy && B();
        return N(I({}, e), { overlayMethod: t ? e.overlayMethod : l.gl.Disabled });
    }
    if (!Z() && B()) {
        let e = (0, b.qT)(n);
        return N(I({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : l.gl.Disabled });
    }
    if (!(0, m.VS)()) return N(I({}, (0, b.qT)(n)), { source: p.d.NO_OUT_OF_PROCESS_SUPPORT });
    if (!r.enabledOOP && r.enabledLegacy)
        return B()
            ? N(I({}, (0, b.qT)(n)), { source: p.d.LEGACY_ENABLED })
            : N(I({}, r), {
                  overlayMethod: l.gl.Disabled,
                  source: p.d.LEGACY_ENABLED
              });
    let i = (0, b.qc)(n);
    switch (t) {
        case c.Jx.MINIMIZED:
        case c.Jx.WINDOWED:
        case c.Jx.MAXIMIZED:
        case c.Jx.BORDERLESS_FULLSCREEN: {
            let e = r.enabledOOP && Z(),
                t = r.enabledLegacy && B(),
                o = i ? l.gl.OutOfProcessLimitedInteraction : l.gl.OutOfProcess;
            return N(I({}, r), {
                overlayMethod: e ? o : t ? (0, b.qT)(n).overlayMethod : l.gl.Disabled,
                source: p.d.FULL_SCREEN_TYPE
            });
        }
        case c.Jx.FULLSCREEN: {
            let e = (0, b.qT)(n),
                t = e.enabledLegacy && B();
            return N(I({}, e), {
                overlayMethod: t ? e.overlayMethod : l.gl.Disabled,
                source: p.d.FULL_SCREEN_TYPE
            });
        }
        case c.Jx.UNKNOWN:
            return {
                source: p.d.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: l.gl.Disabled
            };
        default:
            return {
                source: p.d.DEFAULT,
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
    if (!F()) {
        R.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
        return;
    }
    if (null == (await X(e))) {
        R.error('Failed to track game '.concat(e));
        return;
    }
    z(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eA.emitChange(), R.verbose('Determining initial overlay method for pid '.concat(e));
    let t = await en(e);
    R.verbose('Overlay method for pid '.concat(e, ': ').concat((0, b.P_)(t.overlayMethod))), Q(e, v.zE.SCREEN_TYPE_RESOLUTION), await er(e, t), ec(b.HD), (j = t.overlayMethod), eA.emitChange();
}
async function ee(e) {
    var t, n, r;
    if (!K(e)) {
        R.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    R.verbose('Untracking game '.concat(e));
    let i = V(e),
        o = {
            source: null !== (t = null == i ? void 0 : i.source) && void 0 !== t ? t : p.d.DEFAULT,
            enabledOOP: null !== (n = null == i ? void 0 : i.oopEnabled) && void 0 !== n && n,
            enabledLegacy: null !== (r = null == i ? void 0 : i.legacyEnabled) && void 0 !== r && r,
            overlayMethod: l.gl.Disabled
        };
    await er(e, o), Y(e), eA.emitChange();
}
async function et(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        r = null !== (t = null == n ? void 0 : n.fullscreenType) && void 0 !== t ? t : c.Jx.UNKNOWN;
    if (U.has(r)) {
        let t = await (0, b.hj)(e, b.X8);
        R.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (r = t);
    }
    return r;
}
async function en(e) {
    let t = await et(e);
    if (G.has(t)) {
        let n = await (0, b.hj)(e, b.tY);
        null != n && (t = n);
    }
    if (t === c.Jx.UNKNOWN) {
        let n = await (0, b.hj)(e, b.tY);
        null != n && (t = n);
    }
    let n = V(e);
    return null == n
        ? (R.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: p.d.NO_TRACKED_GAME,
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
                .concat(null === (n = V(e)) || void 0 === n ? void 0 : n.gameName, '" to ')
                .concat((0, b.P_)(r))
        ),
        eA.emitChange(),
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
        n = V(e);
    if (null == n) return R.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (v.lT.has(n.state)) return R.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1;
    let r = await (0, b.hj)(e, 0);
    if (null == r) return R.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    n.fullscreenType !== r &&
        (R.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r
        }),
        z(e, 'previousFullscreenType', n.fullscreenType),
        z(e, 'fullscreenType', r),
        eA.emitChange(),
        (t = !0));
    let i = J(n, r);
    if ((n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== l.gl.Disabled) || ((L === m.R2 || null === L) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let o = P === l.R5.OUT_OF_PROCESS_V2 || P === l.R5.OUT_OF_PROCESS_V3 || P === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        a = P === l.R5.IN_PROCESS_V2,
        s = (0, b.PD)(n, r, Z()),
        c = (0, b.DH)(n, r, Z());
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
            overlayEnabled: Z()
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
    return K(e) ? ((null === (n = V(e)) || void 0 === n ? void 0 : n.overlayMethod) === l.gl.Hook ? (R.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (R.verbose('Enabling hook for pid '.concat(e)), z(e, 'hasChangedRenderMode', !0), er(e, t))) : (R.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function es(e, t) {
    var n;
    return K(e) ? ((null === (n = V(e)) || void 0 === n ? void 0 : n.overlayMethod) === t.overlayMethod ? (R.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (R.verbose('Enabling OOP for pid '.concat(e)), z(e, 'hasChangedRenderMode', !0), er(e, t))) : (R.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function el(e) {
    let t = !1;
    for (let n of e) (t = (await eo(n)) || t), await (0, o._v)(16);
    t && (R.info('determineFullscreenOverlayMethodSwaps has changes'), eA.emitChange());
}
function ec(e) {
    null == k &&
        (__OVERLAY__ && R.error('Running Polling While in Overlay Context!'),
        (k = setTimeout(async () => {
            k = null;
            let e = H();
            e.length > 0 && (ec(b.HD), await el(new Set(e)));
        }, e)));
}
async function eu(e, t) {
    if (O.iP)
        R.info('setOverlayEnabled: supported', {
            newLegacyEnabled: e,
            newOopEnabled: t
        });
    else {
        R.verbose('setOverlayEnabled: not supported');
        return;
    }
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
        D && r && (0, m.vR)(!0),
        w || D)
    )
        n && R.info('Legacy change'), r && R.info('OOP change'), em();
    else for (let e of H()) await ee(e), await (0, o._v)(16);
}
function ed() {
    ei(), (x = !1), (j = null), eS();
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
function ep(e) {
    if (null != e.pids) for (let t of e.pids) $(t);
}
function e_(e) {
    for (let t of (__OVERLAY__ && R.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) $(t.pid);
    for (let t of e.removed) ee(t.pid);
}
function eh(e) {
    if ((__OVERLAY__ && R.error('Running handleGameToggleOverlay While in Overlay Context!'), R.verbose('handleGameToggleOverlay', { action: e }), !F())) {
        if ((R.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = V(t);
            if (null != n) return er(t, J(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!('pid' in e.game)) return R.verbose('handleGameToggleOverlay: game is not a PersistGame'), ei(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (K(t)) {
        let e = V(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && z(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== r && z(t, 'oopEnabled', null != r && r);
    }
    let i = n && B(),
        o = null != r && r && Z();
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
function ev(e) {
    return R.error('Overlay crashed for pid '.concat(e.pid)), !!K(e.pid) && (z(e.pid, 'state', l.mM.OVERLAY_CRASHED), !0);
}
function eb(e) {
    return (P = e.mode), em(), !0;
}
function ey(e) {
    if (null != V(e.pid)) return z(e.pid, 'state', e.overlayState), R.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? Q(e.pid, v.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && Q(e.pid, v.zE.OVERLAY_RENDERING), !0;
}
function eO(e) {
    L = e.pid;
}
function eS() {
    d.Z.hasLoadedExperiments && !x && ((x = !0), eu(g.v.legacyEnabled, g.v.oopEnabled));
}
function eI() {
    (x = !1), (j = null);
}
function eT() {
    (x = !1), (j = null), eg();
}
class eN extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, _.default, d.Z, y.ZP), this.syncWith([d.Z], eS);
    }
    getHasLoadedExperiments() {
        return x;
    }
    getForcedRenderMode() {
        return P;
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
        return M;
    }
    getGameOverlayStatus(e) {
        let t = V(e.pid);
        return null == t
            ? null
            : I(
                  {
                      enabledOOP: t.oopEnabled,
                      enabledLegacy: t.legacyEnabled
                  },
                  t
              );
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
        return j;
    }
}
S(eN, 'displayName', 'OverlayRenderStore');
let eA = new eN(a.Z, {
        CONNECTION_OPEN: ed,
        LOGIN: eI,
        LOGOUT: eT,
        EXPERIMENT_OVERRIDE_BUCKET: ed,
        OVERLAY_SET_ENABLED: ef,
        GAME_LAUNCH_SUCCESS: ep,
        RUNNING_GAMES_CHANGE: e_,
        RUNNING_GAME_TOGGLE_OVERLAY: eh,
        OVERLAY_FORCE_RENDER_MODE: eb,
        OVERLAY_UPDATE_OVERLAY_STATE: ey,
        OVERLAY_CRASHED: ev,
        OVERLAY_RELOAD: eE,
        OVERLAY_FOCUSED: eO
    }),
    eC = eA;
