(n.r(t), n.d(t, { default: () => ek }), n(388685));
var r,
    i = n(442837),
    a = n(379649),
    o = n(570140),
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
    b = n(306381),
    y = n(542750),
    O = n(829907),
    v = n(624864),
    I = n(987650);
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let P = new u.Z('OverlayRenderStore'),
    w = l.R5.UNSET,
    D = !1,
    L = !1,
    x = !1,
    k = null,
    M = {},
    j = null,
    U = null,
    G = new Set([c.Jx.FULLSCREEN, c.Jx.BORDERLESS_FULLSCREEN, c.Jx.UNKNOWN, c.Jx.MINIMIZED]),
    B = new Set([c.Jx.MINIMIZED, c.Jx.UNKNOWN]),
    V = !1,
    F = [];
function Z() {
    return D;
}
function H() {
    return L;
}
function Y() {
    return H() || Z();
}
function W(e) {
    var t;
    return null != (t = M[e]) ? t : null;
}
function K() {
    return Object.keys(M).map(Number);
}
function z(e, t) {
    M = N(S({}, M), { [e]: S({}, t) });
}
function q(e) {
    delete M[e];
}
function X(e) {
    return null != M[e];
}
function Q(e, t, n) {
    let r = W(e);
    if (null == r) return void P.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
    ((r[t] = n), z(e, r));
}
function J() {
    return { startTrackingTimestamp: Date.now() };
}
function $(e, t) {
    let n = W(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case y.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case y.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case y.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    (Q(e, 'timer', r), ex.emitChange());
}
async function ee(e) {
    var t, n, r, i;
    let a = W(e);
    if (null != a) return a;
    let o = f.ZP.getGameForPID(e);
    if (null == o) return (P.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null);
    let s = (0, f.b6)(o),
        { enabledOOP: c, enabledLegacy: u } = s,
        d = C(s, ['enabledOOP', 'enabledLegacy']),
        _ = h.Z.getGameByName(o.name),
        p = null != (t = await (0, O.hj)(e, 0)) ? t : o.fullscreenType;
    P.verbose('Tracking game '.concat(e, ' for overlay'));
    let m = N(S({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == _ ? void 0 : _.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: l.mM.INITIALIZING,
        timer: J(),
        fullscreenType: p,
        previousFullscreenType: o.fullscreenType,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == _ ? void 0 : _.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1
    });
    return (z(e, m), ex.emitChange(), m);
}
function et(e, t) {
    var n, r;
    switch (w) {
        case l.R5.UNSET:
            break;
        case l.R5.IN_PROCESS_V2:
            return {
                source: _.d.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: l.gl.Hook
            };
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
    if (!Y())
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
    let a = (0, f.b6)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
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
        let e = (0, O.qT)(i),
            t = e.enabledLegacy && Z();
        return N(S({}, e), { overlayMethod: t ? e.overlayMethod : l.gl.Disabled });
    }
    if (!H() && Z()) {
        let e = (0, O.qT)(i);
        return N(S({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : l.gl.Disabled });
    }
    if (!(0, m.supportsOutOfProcess)()) return N(S({}, (0, O.qT)(i)), { source: _.d.NO_OUT_OF_PROCESS_SUPPORT });
    if (!a.enabledOOP && a.enabledLegacy)
        return Z()
            ? N(S({}, (0, O.qT)(i)), { source: _.d.LEGACY_ENABLED })
            : N(S({}, a), {
                  overlayMethod: l.gl.Disabled,
                  source: _.d.LEGACY_ENABLED
              });
    let o = null == (n = h.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, O.qc)(i) || v.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
    switch (t) {
        case c.Jx.MINIMIZED:
        case c.Jx.WINDOWED:
        case c.Jx.MAXIMIZED:
        case c.Jx.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && H(),
                t = a.enabledLegacy && Z(),
                n = s ? l.gl.OutOfProcessLimitedInteraction : l.gl.OutOfProcess;
            return N(S({}, a), {
                overlayMethod: e ? n : t ? (0, O.qT)(i).overlayMethod : l.gl.Disabled,
                source: _.d.FULL_SCREEN_TYPE
            });
        }
        case c.Jx.FULLSCREEN: {
            let e = (0, O.qT)(i),
                t = e.enabledLegacy && Z();
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
async function en(e) {
    if (X(e)) {
        (P.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await ed(new Set([e])));
        return;
    }
    if (!Y()) return void P.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
    if (null == (await ee(e))) return void P.error('Failed to track game '.concat(e));
    (Q(e, 'state', l.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), ex.emitChange(), P.verbose('Determining initial overlay method for pid '.concat(e)));
    let t = await ea(e);
    (P.verbose('Overlay method for pid '.concat(e, ': ').concat((0, O.P_)(t.overlayMethod))), $(e, y.zE.SCREEN_TYPE_RESOLUTION), await eo(e, t), ef(O.HD), (U = t.overlayMethod), ex.emitChange());
}
async function er(e) {
    var t, n, r;
    if (!X(e)) return void P.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
    P.verbose('Untracking game '.concat(e));
    let i = W(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : _.d.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: l.gl.Disabled
        };
    (await eo(e, a), q(e), ex.emitChange());
}
async function ei(e) {
    var t;
    let n = f.ZP.getGameForPID(e),
        r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : c.Jx.UNKNOWN;
    if (G.has(r)) {
        let t = await (0, O.hj)(e, (0, O.O0)('first_fullscreen'));
        (P.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (r = t));
    }
    return r;
}
async function ea(e) {
    let t = await ei(e);
    if (B.has(t)) {
        let n = await (0, O.hj)(e, (0, O.aW)('initial_status'));
        null != n && (t = n);
    }
    if (t === c.Jx.UNKNOWN) {
        let n = await (0, O.hj)(e, (0, O.aW)('initial_status'));
        null != n && (t = n);
    }
    let n = W(e);
    return null == n
        ? (P.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: _.d.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: l.gl.Disabled
          })
        : et(n, t);
}
function eo(e, t) {
    var n;
    let r = t.overlayMethod;
    return (
        Q(e, 'state', r === l.gl.Disabled ? l.mM.OVERLAY_DISABLED : l.mM.WAITING_FOR_MODULE_TRACKING),
        Q(e, 'overlayMethod', r),
        Q(e, 'source', t.source),
        Q(e, 'oopEnabled', t.enabledOOP),
        Q(e, 'legacyEnabled', t.enabledLegacy),
        P.verbose(
            'Updating overlay method for pid '
                .concat(e, ' "')
                .concat(null == (n = W(e)) ? void 0 : n.gameName, '" to ')
                .concat((0, O.P_)(r))
        ),
        ex.emitChange(),
        s.Z.updateOverlayMethod(e, r)
    );
}
async function es() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid)
        ),
        t = new Set(K()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) (await er(e), await (0, a._v)(16));
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) (await en(e), await (0, a._v)(16));
    let i = new Set([...t].filter((t) => e.has(t)));
    (await ed(i),
        (n.size > 0 || r.size > 0) &&
            P.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i
            }));
}
async function el(e) {
    let t = !1,
        n = W(e);
    if (null == n) return (P.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1);
    if (y.lT.has(n.state)) return (P.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1);
    let r = await (0, O.hj)(e, 0);
    if (null == r) return (P.error('Failed to get revised fullscreen type for pid '.concat(e)), !1);
    n.fullscreenType !== r &&
        (P.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r
        }),
        Q(e, 'previousFullscreenType', n.fullscreenType),
        Q(e, 'fullscreenType', r),
        ex.emitChange(),
        (t = !0));
    let i = et(n, r);
    if ((n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== l.gl.Disabled) || ((k === m.UNSET_PID || null === k) && n.state === l.mM.OVERLAY_RENDERING)) return t;
    let a = w === l.R5.OUT_OF_PROCESS_V3 || w === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = w === l.R5.IN_PROCESS_V2,
        s = (0, O.PD)(n, r, H()),
        c = (0, O.DH)(n, r, H());
    switch (
        (P.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: n.overlayMethod,
            revisedFullscreenType: r,
            previousFullscreenType: n.previousFullscreenType,
            newOverlayGameStatus: i,
            shouldSwitchToHook: c,
            shouldSwitchToOutOfProcess: s,
            isForcedInProcess: o,
            isForcedOutOfProcess: a,
            legacyEnabled: Z(),
            overlayEnabled: H()
        }),
        i.overlayMethod)
    ) {
        case l.gl.OutOfProcess:
        case l.gl.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (await eu(e, i));
            break;
        case l.gl.Hook:
            ((c && !a) || o || Z()) && (await ec(e, i));
            break;
        case l.gl.Disabled:
            await er(e);
    }
    return t;
}
function ec(e, t) {
    var n;
    return X(e) ? ((null == (n = W(e)) ? void 0 : n.overlayMethod) === l.gl.Hook ? (P.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (P.verbose('Enabling hook for pid '.concat(e)), Q(e, 'hasChangedRenderMode', !0), eo(e, t))) : (P.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function eu(e, t) {
    var n;
    return X(e) ? ((null == (n = W(e)) ? void 0 : n.overlayMethod) === t.overlayMethod ? (P.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (P.verbose('Enabling OOP for pid '.concat(e)), Q(e, 'hasChangedRenderMode', !0), eo(e, t))) : (P.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function ed(e) {
    let t = !1;
    for (let n of e) ((t = (await el(n)) || t), await (0, a._v)(16));
    t && (P.info('determineFullscreenOverlayMethodSwaps has changes'), ex.emitChange());
}
function ef(e) {
    null == j &&
        (__OVERLAY__ && P.error('Running Polling While in Overlay Context!'),
        (j = setTimeout(async () => {
            j = null;
            let e = K();
            e.length > 0 && (ef(O.HD), await ed(new Set(e)));
        }, e)));
}
async function e_(e, t) {
    if (!I.iP) return void P.verbose('setOverlayEnabled: not supported');
    P.info('setOverlayEnabled: supported', {
        newLegacyEnabled: e,
        newOopEnabled: t
    });
    let n = e !== D,
        r = t !== L;
    if (
        ((D = e),
        (L = t),
        g.v.update({
            legacyEnabled: D,
            oopEnabled: L
        }),
        P.info('setOverlayEnabled', {
            newOopEnabled: t,
            newLegacyEnabled: e
        }),
        L && r && (0, m.setOutOfProcessSupport)(!0),
        D || L)
    )
        (n && P.info('Legacy change'), r && P.info('OOP change'), eb());
    else for (let e of K()) (await er(e), await (0, a._v)(16));
}
function ep() {
    (es(), (x = !1), (U = null), eP());
}
function eh(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        P.info('handleOverlaySetEnabled', {
            legacyEnabled: t,
            oopEnabled: n
        }),
        e_(t, n),
        !0
    );
}
function em(e) {
    if (null != e.pids) for (let t of e.pids) en(t);
}
function eg(e) {
    for (let t of (__OVERLAY__ && P.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) en(t.pid);
    for (let t of e.removed) er(t.pid);
}
function eE(e) {
    if ((__OVERLAY__ && P.error('Running handleGameToggleOverlay While in Overlay Context!'), P.verbose('handleGameToggleOverlay', { action: e }), !Y())) {
        if ((P.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = W(t);
            if (null != n) return (eo(t, et(n, n.fullscreenType)), !0);
        }
        return !1;
    }
    if (!('pid' in e.game)) return (P.verbose('handleGameToggleOverlay: game is not a PersistGame'), es(), !0);
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (X(t)) {
        let e = W(t);
        ((null == e ? void 0 : e.legacyEnabled) !== n && Q(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== r && Q(t, 'oopEnabled', null != r && r));
    }
    let i = n && Z(),
        a = null != r && r && H();
    return (
        i || a
            ? (P.verbose('handleGameToggleOverlay: game enabled changed', {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a
              }),
              X(t) ? eb() : en(t))
            : er(t),
        !0
    );
}
async function eb() {
    (await ey(), await (0, a._v)(2000));
    let e = K(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e
        ]);
    for (let n of (P.info('Retracking '.concat(t.size, ' games (').concat(e.length, ' already tracked)')), t)) (await en(n), await (0, a._v)(16));
    P.info('Retracked '.concat(e.length, ' games'));
}
async function ey() {
    for (let e of K()) (await er(e), await (0, a._v)(16));
}
function eO(e) {
    return (P.error('Overlay reload for pid', { pid: e.pid }), eb(), !0);
}
function ev(e) {
    return (P.error('Overlay crashed for pid '.concat(e.pid)), !!X(e.pid) && (Q(e.pid, 'state', l.mM.OVERLAY_CRASHED), !0));
}
function eI(e) {
    return ((w = e.mode), eb(), !0);
}
function eT(e) {
    if (null != W(e.pid)) return (Q(e.pid, 'state', e.overlayState), P.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === l.mM.WAITING_FOR_OVERLAY_OPEN ? $(e.pid, y.zE.MODULE_TRACKING) : e.overlayState === l.mM.OVERLAY_RENDERING && $(e.pid, y.zE.OVERLAY_RENDERING), !0);
}
function eS() {
    return (eb(), !0);
}
function eA(e) {
    return (e.mode === b.G.TrackFocusPIDs && (V = e.enabled), !0);
}
function eN() {
    return ((F = []), !0);
}
function eC(e) {
    if (((k = e.pid), V)) {
        var t;
        F = [...F, [performance.now(), null != (t = e.pid) ? t : null]];
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function eR(e) {
    return (X(e.pid) && Q(e.pid, 'successfullyShown', !0), !0);
}
function eP() {
    d.Z.hasLoadedExperiments && !x && ((x = !0), e_(g.v.legacyEnabled, g.v.oopEnabled));
}
function ew() {
    ((x = !1), (U = null));
}
function eD() {
    ((x = !1), (U = null), ey());
}
class eL extends (r = i.ZP.Store) {
    initialize() {
        (this.waitFor(f.ZP, p.default, d.Z, v.Z), this.syncWith([d.Z], eP));
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return F;
    }
    getHasLoadedExperiments() {
        return x;
    }
    getForcedRenderMode() {
        return w;
    }
    isAnyOverlayRendering() {
        return Object.values(M).some((e) => e.state === l.mM.OVERLAY_RENDERING);
    }
    getOverlayMethod(e) {
        var t, n;
        return null != (n = null == (t = W(e)) ? void 0 : t.overlayMethod) ? n : l.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === l.gl.OutOfProcess || t === l.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = W(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return W(e);
    }
    getTrackedGames() {
        return M;
    }
    getGameOverlayStatus(e) {
        let t = W(e.pid);
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
            oopEnabled: H(),
            legacyEnabled: Z()
        };
    }
    getAnyGlobalEnabledOverlay() {
        return H() || Z();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1
            };
        let t = W(e.pid);
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
        if (null != e) return null != (n = null == (t = W(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return U;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(M).filter((e) => e.overlayMethod !== l.gl.Disabled && e.state === l.mM.OVERLAY_RENDERING);
    }
}
T(eL, 'displayName', 'OverlayRenderStore');
let ex = new eL(o.Z, {
        CONNECTION_OPEN: ep,
        LOGIN: ew,
        LOGOUT: eD,
        EXPERIMENT_OVERRIDE_BUCKET: ep,
        OVERLAY_SET_ENABLED: eh,
        GAME_LAUNCH_SUCCESS: em,
        RUNNING_GAMES_CHANGE: eg,
        RUNNING_GAME_TOGGLE_OVERLAY: eE,
        OVERLAY_FORCE_RENDER_MODE: eI,
        OVERLAY_UPDATE_OVERLAY_STATE: eT,
        OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eS,
        OVERLAY_CRASHED: ev,
        OVERLAY_RELOAD: eO,
        OVERLAY_FOCUSED: eC,
        OVERLAY_SUCCESSFULLY_SHOWN: eR,
        OVERLAY_RENDER_DEBUG_MODE: eA,
        OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eN
    }),
    ek = ex;
