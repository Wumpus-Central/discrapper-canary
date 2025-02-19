n.r(t), n.d(t, { default: () => ex }), n(47120);
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
    P = !0,
    w = l.R5.UNSET,
    D = !1,
    x = !1,
    L = !1,
    M = null,
    k = {},
    j = null,
    U = l.gl.Disabled,
    G = new Set([c.Jx.FULLSCREEN, c.Jx.BORDERLESS_FULLSCREEN, c.Jx.UNKNOWN, c.Jx.MINIMIZED]),
    B = new Set([c.Jx.MINIMIZED, c.Jx.UNKNOWN]),
    Z = 5000,
    F = 8000,
    V = 12000;
function H() {
    return D;
}
function W() {
    return x;
}
function Y() {
    return W() || H();
}
function K(e) {
    var t;
    return null !== (t = k[e]) && void 0 !== t ? t : null;
}
function z() {
    return Object.keys(k).map(Number);
}
function q(e, t) {
    k = N(I({}, k), { [e]: I({}, t) });
}
function Q(e) {
    delete k[e];
}
function X(e) {
    return null != k[e];
}
function J(e, t, n) {
    let r = K(e);
    if (null == r) {
        R.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
        return;
    }
    (r[t] = n), q(e, r);
}
function $() {
    return { startTrackingTimestamp: Date.now() };
}
function ee(e, t) {
    let n = K(e);
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
    J(e, 'timer', r), eD.emitChange();
}
async function et(e) {
    var t, n, r, i;
    let o = K(e);
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
        timer: $(),
        fullscreenType: _,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null === (i = null == p ? void 0 : p.supportsOutOfProcessOverlay) || void 0 === i || i
    });
    return q(e, m), eD.emitChange(), m;
}
function en(e) {
    return null == e
        ? {
              source: p.d.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          }
        : (0, f.b6)(e, P);
}
function er(e, t) {
    switch (w) {
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
    if (!Y())
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
        let e = en(n),
            t = e.enabledLegacy && H();
        return N(I({}, e), { overlayMethod: t ? e.overlayMethod : l.gl.Disabled });
    }
    if (!W() && H()) {
        let e = en(n);
        return N(I({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : l.gl.Disabled });
    }
    if (!(0, m.VS)()) return N(I({}, en(n)), { source: p.d.NO_OUT_OF_PROCESS_SUPPORT });
    if (!r.enabledOOP && r.enabledLegacy)
        return H()
            ? N(I({}, en(n)), { source: p.d.LEGACY_ENABLED })
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
            let e = r.enabledOOP && W(),
                t = r.enabledLegacy && H(),
                o = i ? l.gl.OutOfProcessLimitedInteraction : l.gl.OutOfProcess;
            return N(I({}, r), {
                overlayMethod: e ? o : t ? en(n).overlayMethod : l.gl.Disabled,
                source: p.d.FULL_SCREEN_TYPE
            });
        }
        case c.Jx.FULLSCREEN: {
            let e = en(n),
                t = e.enabledLegacy && H();
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
async function ei(e) {
    if (X(e)) {
        R.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await ep(new Set([e]));
        return;
    }
    if (!Y()) {
        R.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
        return;
    }
    if (null == (await et(e))) {
        R.error('Failed to track game '.concat(e));
        return;
    }
    J(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eD.emitChange(), R.verbose('Determining initial overlay method for pid '.concat(e));
    let t = await es(e);
    R.verbose('Overlay method for pid '.concat(e, ': ').concat((0, b.P_)(t.overlayMethod))), ee(e, v.zE.SCREEN_TYPE_RESOLUTION), await el(e, t), e_(Z), (U = t.overlayMethod), eD.emitChange();
}
async function eo(e) {
    var t, n, r;
    if (!X(e)) {
        R.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
        return;
    }
    R.verbose('Untracking game '.concat(e));
    let i = K(e),
        o = {
            source: null !== (t = null == i ? void 0 : i.source) && void 0 !== t ? t : p.d.DEFAULT,
            enabledOOP: null !== (n = null == i ? void 0 : i.oopEnabled) && void 0 !== n && n,
            enabledLegacy: null !== (r = null == i ? void 0 : i.legacyEnabled) && void 0 !== r && r,
            overlayMethod: l.gl.Disabled
        };
    await el(e, o), Q(e), eD.emitChange();
}
async function ea(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        r = null !== (t = null == n ? void 0 : n.fullscreenType) && void 0 !== t ? t : c.Jx.UNKNOWN;
    if (G.has(r)) {
        let t = await (0, b.hj)(e, F);
        R.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (r = t);
    }
    return r;
}
async function es(e) {
    let t = await ea(e);
    if (B.has(t)) {
        let n = await (0, b.hj)(e, V);
        null != n && (t = n);
    }
    if (t === c.Jx.UNKNOWN) {
        let n = await (0, b.hj)(e, V);
        null != n && (t = n);
    }
    let n = K(e);
    return null == n
        ? (R.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: p.d.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          })
        : er(n, t);
}
function el(e, t) {
    let n = t.overlayMethod;
    return J(e, 'state', n === l.gl.Disabled ? l.mM.OVERLAY_DISABLED : l.mM.WAITING_FOR_MODULE_TRACKING), J(e, 'overlayMethod', n), J(e, 'source', t.source), J(e, 'oopEnabled', t.enabledOOP), J(e, 'legacyEnabled', t.enabledLegacy), R.verbose('Updating overlay method for pid '.concat(e, ' to ').concat((0, b.P_)(n))), eD.emitChange(), s.Z.updateOverlayMethod(e, n);
}
async function ec() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid)
        ),
        t = new Set(z()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await eo(e), await (0, o._v)(100);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await ei(e), await (0, o._v)(100);
    let i = new Set([...t].filter((t) => e.has(t)));
    await ep(i),
        (n.size > 0 || r.size > 0) &&
            R.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i
            });
}
async function eu(e) {
    let t = !1,
        n = K(e);
    if (null == n) return R.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1;
    if (v.lT.has(n.state)) return R.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1;
    let r = await (0, b.hj)(e, 0);
    if (null == r) return R.error('Failed to get revised fullscreen type for pid '.concat(e)), !1;
    n.fullscreenType !== r &&
        (R.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r
        }),
        J(e, 'fullscreenType', r),
        eD.emitChange(),
        (t = !0));
    let i = er(n, r);
    if ((n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== l.gl.Disabled) || ((M === m.R2 || null === M) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let o = w === l.R5.OUT_OF_PROCESS_V2 || w === l.R5.OUT_OF_PROCESS_V3 || w === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        a = w === l.R5.IN_PROCESS_V2,
        s = (0, b.PD)(n, r, W()),
        c = (0, b.DH)(n, r, W());
    switch (
        (R.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: n.overlayMethod,
            newOverlayGameStatus: i,
            shouldSwitchToHook: c,
            shouldSwitchToOutOfProcess: s,
            isForcedInProcess: a,
            isForcedOutOfProcess: o,
            legacyEnabled: H(),
            overlayEnabled: W()
        }),
        i.overlayMethod)
    ) {
        case l.gl.OutOfProcess:
        case l.gl.OutOfProcessLimitedInteraction:
            ((s && !a) || o) && (await ef(e, i));
            break;
        case l.gl.Hook:
            ((c && !o) || a || H()) && (await ed(e, i));
            break;
        case l.gl.Disabled:
            await eo(e);
    }
    return t;
}
function ed(e, t) {
    var n;
    return X(e) ? ((null === (n = K(e)) || void 0 === n ? void 0 : n.overlayMethod) === l.gl.Hook ? (R.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (R.verbose('Enabling hook for pid '.concat(e)), J(e, 'hasChangedRenderMode', !0), el(e, t))) : (R.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function ef(e, t) {
    var n;
    return X(e) ? ((null === (n = K(e)) || void 0 === n ? void 0 : n.overlayMethod) === t.overlayMethod ? (R.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (R.verbose('Enabling OOP for pid '.concat(e)), J(e, 'hasChangedRenderMode', !0), el(e, t))) : (R.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function ep(e) {
    let t = !1;
    for (let n of e) (t = (await eu(n)) || t), await (0, o._v)(100);
    t && (R.info('determineFullscreenOverlayMethodSwaps has changes'), eD.emitChange());
}
function e_(e) {
    null == j &&
        (__OVERLAY__ && R.error('Running Polling While in Overlay Context!'),
        (j = setTimeout(async () => {
            j = null;
            let e = z();
            e.length > 0 && (e_(Z), await ep(new Set(e)));
        }, e)));
}
async function eh(e, t) {
    if (!O.iP) {
        R.verbose('setOverlayEnabled: not supported');
        return;
    }
    let n = e !== D,
        r = t !== x;
    if (
        ((D = e),
        (x = t),
        g.v.update({
            legacyEnabled: D,
            oopEnabled: x
        }),
        R.info('setOverlayEnabled', {
            newOopEnabled: t,
            newLegacyEnabled: e
        }),
        x && r && (0, m.vR)(!0),
        D || x)
    )
        n && R.info('Legacy change'), r && R.info('OOP change'), ey();
    else for (let e of z()) await eo(e), await (0, o._v)(100);
}
function em() {
    ec(), (L = !1);
}
function eg(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return eh(t, n), !0;
}
function eE(e) {
    if (null != e.pids) for (let t of e.pids) ei(t);
}
function ev(e) {
    for (let t of (__OVERLAY__ && R.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) ei(t.pid);
    for (let t of e.removed) eo(t.pid);
}
function eb(e) {
    if ((__OVERLAY__ && R.error('Running handleGameToggleOverlay While in Overlay Context!'), R.verbose('handleGameToggleOverlay', { action: e }), !Y())) {
        if ((R.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = K(t);
            if (null != n) return el(t, er(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!('pid' in e.game)) return R.verbose('handleGameToggleOverlay: game is not a PersistGame'), ec(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (X(t)) {
        let e = K(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && J(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== r && J(t, 'oopEnabled', null != r && r);
    }
    let i = n && H(),
        o = null != r && r && W();
    return (
        i || o
            ? (R.verbose('handleGameToggleOverlay: game enabled changed', {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: o
              }),
              X(t) ? ey() : ei(t))
            : eo(t),
        !0
    );
}
async function ey() {
    await eO(), await (0, o._v)(2000);
    let e = z(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e
        ]);
    for (let n of (R.info('Retracking '.concat(t.size, ' games (').concat(e.length, ' already tracked)')), t)) await ei(n), await (0, o._v)(100);
    R.info('Retracked '.concat(e.length, ' games'));
}
async function eO() {
    for (let e of z()) await eo(e), await (0, o._v)(100);
}
function eS(e) {
    return R.error('Overlay reload for pid', { pid: e.pid }), ey(), !0;
}
function eI(e) {
    return R.error('Overlay crashed for pid '.concat(e.pid)), !!X(e.pid) && (J(e.pid, 'state', l.mM.OVERLAY_CRASHED), !0);
}
function eT(e) {
    return (w = e.mode), ey(), !0;
}
function eN(e) {
    if (null != K(e.pid)) return J(e.pid, 'state', e.overlayState), R.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? ee(e.pid, v.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && ee(e.pid, v.zE.OVERLAY_RENDERING), !0;
}
function eA(e) {
    M = e.pid;
}
function eC() {
    d.Z.hasLoadedExperiments && !L && ((L = !0), eh(g.v.legacyEnabled, g.v.oopEnabled));
}
function eR() {
    L = !1;
}
function eP() {
    (L = !1), eO();
}
class ew extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, _.default, d.Z, y.ZP), this.syncWith([d.Z], eC);
    }
    getForcedRenderMode() {
        return w;
    }
    getOverlayMethod(e) {
        var t, n;
        return null !== (n = null === (t = K(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : l.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === l.gl.OutOfProcess || t === l.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null !== (n = null === (t = K(e)) || void 0 === t ? void 0 : t.hasChangedRenderMode) && void 0 !== n && n;
    }
    getTrackedGameByPid(e) {
        return K(e);
    }
    getTrackedGames() {
        return k;
    }
    getGameOverlayStatus(e) {
        let t = K(e.pid);
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
            oopEnabled: W(),
            legacyEnabled: H()
        };
    }
    getAnyGlobalEnabledOverlay() {
        return W() || H();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1
            };
        let t = K(e.pid);
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
        if (null != e) return null !== (n = null === (t = K(e)) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return U;
    }
}
S(ew, 'displayName', 'OverlayRenderStore');
let eD = new ew(a.Z, {
        CONNECTION_OPEN: em,
        LOGIN: eR,
        LOGOUT: eP,
        EXPERIMENT_OVERRIDE_BUCKET: em,
        OVERLAY_SET_ENABLED: eg,
        GAME_LAUNCH_SUCCESS: eE,
        RUNNING_GAMES_CHANGE: ev,
        RUNNING_GAME_TOGGLE_OVERLAY: eb,
        OVERLAY_FORCE_RENDER_MODE: eT,
        OVERLAY_UPDATE_OVERLAY_STATE: eN,
        OVERLAY_CRASHED: eI,
        OVERLAY_RELOAD: eS,
        OVERLAY_FOCUSED: eA
    }),
    ex = eD;
