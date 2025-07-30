(n.r(t), n.d(t, { default: () => eL }), n(388685));
var r,
    i = n(442837),
    a = n(379649),
    o = n(570140),
    s = n(13245),
    l = n(593472),
    c = n(710845),
    u = n(353926),
    d = n(594190),
    f = n(314897),
    _ = n(77498),
    p = n(145597),
    h = n(454991),
    m = n(837268),
    g = n(32300),
    E = n(542750),
    b = n(829907),
    y = n(624864),
    O = n(987650);
function v(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            }));
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
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
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let C = new c.Z('OverlayRenderStore'),
    R = m.R5.UNSET,
    P = !1,
    w = !1,
    D = !1,
    L = null,
    x = {},
    M = null,
    k = null,
    j = new Set([l.Jx.FULLSCREEN, l.Jx.BORDERLESS_FULLSCREEN, l.Jx.UNKNOWN, l.Jx.MINIMIZED]),
    U = new Set([l.Jx.MINIMIZED, l.Jx.UNKNOWN]),
    G = !1,
    B = [];
function V() {
    return P;
}
function F() {
    return w;
}
function Z() {
    return F() || V();
}
function H(e) {
    var t;
    return null != (t = x[e]) ? t : null;
}
function Y() {
    return Object.keys(x).map(Number);
}
function W(e, t) {
    x = S(I({}, x), { [e]: I({}, t) });
}
function K(e) {
    delete x[e];
}
function z(e) {
    return null != x[e];
}
function q(e, t, n) {
    let r = H(e);
    if (null == r) return void C.error('Tried to set property '.concat(t, ' to ').concat(n, ' for untracked pid ').concat(e));
    ((r[t] = n), W(e, r));
}
function X() {
    return { startTrackingTimestamp: Date.now() };
}
function Q(e, t) {
    let n = H(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case m.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case m.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case m.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    (q(e, 'timer', r), eD.emitChange());
}
async function J(e) {
    var t, n, r, i;
    let a = H(e);
    if (null != a) return a;
    let o = d.ZP.getGameForPID(e);
    if (null == o) return (C.error('Tried to track game '.concat(e, ' but it was not found in RunningGameStore')), null);
    let s = (0, d.b6)(o),
        { enabledOOP: l, enabledLegacy: c } = s,
        u = A(s, ['enabledOOP', 'enabledLegacy']),
        f = _.Z.getGameByName(o.name),
        p = null != (t = await (0, b.hj)(e, 0)) ? t : o.fullscreenType;
    C.verbose('Tracking game '.concat(e, ' for overlay'));
    let h = S(I({}, u), {
        pid: e,
        oopEnabled: l,
        legacyEnabled: c,
        applicationId: null != (n = null == f ? void 0 : f.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: m.mM.INITIALIZING,
        timer: X(),
        fullscreenType: p,
        previousFullscreenType: o.fullscreenType,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == f ? void 0 : f.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1
    });
    return (W(e, h), eD.emitChange(), h);
}
function $(e, t) {
    var n, r;
    switch (R) {
        case m.R5.UNSET:
            break;
        case m.R5.IN_PROCESS_V2:
            return {
                source: m.d0.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: m.gl.Hook
            };
        case m.R5.OUT_OF_PROCESS_V3:
            return {
                source: m.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: m.gl.OutOfProcess
            };
        case m.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: m.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: m.gl.OutOfProcessLimitedInteraction
            };
    }
    if (!Z())
        return {
            source: m.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.gl.Disabled
        };
    let i = d.ZP.getGameForPID(e.pid);
    if (null == i)
        return {
            source: m.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.gl.Disabled
        };
    let a = (0, d.b6)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.gl.Disabled
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: m.d0.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.gl.Disabled
        };
    if (!(0, g.NW)('determineOverlayMethod', !1)) {
        let e = (0, b.qT)(i),
            t = e.enabledLegacy && V();
        return S(I({}, e), { overlayMethod: t ? e.overlayMethod : m.gl.Disabled });
    }
    if (!F() && V()) {
        let e = (0, b.qT)(i);
        return S(I({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : m.gl.Disabled });
    }
    if (!(0, p.supportsOutOfProcess)()) return S(I({}, (0, b.qT)(i)), { source: m.d0.NO_OUT_OF_PROCESS_SUPPORT });
    if (!a.enabledOOP && a.enabledLegacy)
        return V()
            ? S(I({}, (0, b.qT)(i)), { source: m.d0.LEGACY_ENABLED })
            : S(I({}, a), {
                  overlayMethod: m.gl.Disabled,
                  source: m.d0.LEGACY_ENABLED
              });
    let o = null == (n = _.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, b.qc)(i) || y.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
    switch (t) {
        case l.Jx.MINIMIZED:
        case l.Jx.WINDOWED:
        case l.Jx.MAXIMIZED:
        case l.Jx.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && F(),
                t = a.enabledLegacy && V(),
                n = s ? m.gl.OutOfProcessLimitedInteraction : m.gl.OutOfProcess;
            return S(I({}, a), { overlayMethod: e ? n : t ? (0, b.qT)(i).overlayMethod : m.gl.Disabled });
        }
        case l.Jx.FULLSCREEN: {
            let e = (0, b.qT)(i),
                t = e.enabledLegacy && V();
            return S(I({}, e), { overlayMethod: t ? e.overlayMethod : m.gl.Disabled });
        }
        case l.Jx.UNKNOWN:
            return {
                source: m.d0.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: m.gl.Disabled
            };
        default:
            return {
                source: m.d0.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: m.gl.Disabled
            };
    }
}
async function ee(e) {
    if (z(e)) {
        (C.verbose('Skipping track for pid '.concat(e, ' - already tracked. Determining overlay method.')), await ec(new Set([e])));
        return;
    }
    if (!Z()) return void C.verbose('Skipping track for pid '.concat(e, ' - overlay is disabled'));
    let t = await J(e);
    if (null == t) return void C.error('Failed to track game '.concat(e));
    (q(e, 'state', m.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eD.emitChange(), C.verbose('Determining initial overlay method for pid '.concat(e)));
    let n = await er(e);
    (C.verbose('Overlay method for pid '.concat(e, ': ').concat((0, b.P_)(n.overlayMethod))), Q(e, m.zE.SCREEN_TYPE_RESOLUTION), await ei(e, n), eu(b.HD), (k = n.overlayMethod), eD.emitChange(), await s.Z.updateTrackedGame(e, t));
}
async function et(e) {
    var t, n, r;
    if (!z(e)) return void C.verbose('Skipping untrack for pid '.concat(e, ' - not tracked'));
    C.verbose('Untracking game '.concat(e));
    let i = H(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : m.d0.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: m.gl.Disabled
        };
    (await ei(e, a), K(e), eD.emitChange(), await s.Z.updateTrackedGame(e, null));
}
async function en(e) {
    var t;
    let n = d.ZP.getGameForPID(e),
        r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.Jx.UNKNOWN;
    if (j.has(r)) {
        let t = await (0, b.hj)(e, (0, b.O0)('first_fullscreen'));
        (C.verbose('Resolved fullscreen type for pid '.concat(e, ': ').concat(t)), null != t && (r = t));
    }
    return r;
}
async function er(e) {
    let t = await en(e);
    if (U.has(t)) {
        let n = await (0, b.hj)(e, (0, b.aW)('initial_status'));
        null != n && (t = n);
    }
    if (t === l.Jx.UNKNOWN) {
        let n = await (0, b.hj)(e, (0, b.aW)('initial_status'));
        null != n && (t = n);
    }
    let n = H(e);
    return null == n
        ? (C.error('Tried to determine initial overlay method for untracked pid '.concat(e)),
          {
              source: m.d0.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: m.gl.Disabled
          })
        : $(n, t);
}
async function ei(e, t) {
    var n;
    let r = t.overlayMethod;
    (q(e, 'state', r === m.gl.Disabled ? m.mM.OVERLAY_DISABLED : m.mM.WAITING_FOR_MODULE_TRACKING),
        q(e, 'overlayMethod', r),
        q(e, 'source', t.source),
        q(e, 'oopEnabled', t.enabledOOP),
        q(e, 'legacyEnabled', t.enabledLegacy),
        C.verbose(
            'Updating overlay method for pid '
                .concat(e, ' "')
                .concat(null == (n = H(e)) ? void 0 : n.gameName, '" to ')
                .concat((0, b.P_)(r))
        ),
        eD.emitChange());
    let i = H(e);
    return (null != i && (await s.Z.updateTrackedGame(e, i)), s.Z.updateOverlayMethod(e, r));
}
async function ea() {
    let e = new Set(
            d.ZP.getRunningGames()
                .filter((e) => d.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid)
        ),
        t = new Set(Y()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) (await et(e), await (0, a._v)(16));
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) (await ee(e), await (0, a._v)(16));
    let i = new Set([...t].filter((t) => e.has(t)));
    (await ec(i),
        (n.size > 0 || r.size > 0) &&
            C.verbose('Tracked games have changes', {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i
            }));
}
async function eo(e) {
    let t = !1,
        n = H(e);
    if (null == n) return (C.error('Tried to determine overlay method swap for untracked pid '.concat(e)), !1);
    if (E.l.has(n.state)) return (C.verbose('Skipping overlay method swap for pid '.concat(e, ' - state is ').concat(n.state)), !1);
    let r = await (0, b.hj)(e, 0);
    if (null == r) return (C.error('Failed to get revised fullscreen type for pid '.concat(e)), !1);
    n.fullscreenType !== r &&
        (C.verbose('Fullscreen type different in swap for pid '.concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r
        }),
        q(e, 'previousFullscreenType', n.fullscreenType),
        q(e, 'fullscreenType', r),
        eD.emitChange(),
        (t = !0));
    let i = $(n, r);
    if ((n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== m.gl.Disabled) || ((L === p.UNSET_PID || null === L) && n.state === m.mM.OVERLAY_RENDERING)) return t;
    let a = R === m.R5.OUT_OF_PROCESS_V3 || R === m.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = R === m.R5.IN_PROCESS_V2,
        s = (0, b.PD)(n, r, F()),
        l = (0, b.DH)(n, r, F());
    switch (
        (C.verbose('Overlay method different for pid '.concat(e), {
            oldOverlayMethod: n.overlayMethod,
            revisedFullscreenType: r,
            previousFullscreenType: n.previousFullscreenType,
            newOverlayGameStatus: i,
            shouldSwitchToHook: l,
            shouldSwitchToOutOfProcess: s,
            isForcedInProcess: o,
            isForcedOutOfProcess: a,
            legacyEnabled: V(),
            overlayEnabled: F()
        }),
        i.overlayMethod)
    ) {
        case m.gl.OutOfProcess:
        case m.gl.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (await el(e, i));
            break;
        case m.gl.Hook:
            ((l && !a) || o || V()) && (await es(e, i));
            break;
        case m.gl.Disabled:
            await et(e);
    }
    return t;
}
function es(e, t) {
    var n;
    return z(e) ? ((null == (n = H(e)) ? void 0 : n.overlayMethod) === m.gl.Hook ? (C.verbose('Hook requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (C.verbose('Enabling hook for pid '.concat(e)), q(e, 'hasChangedRenderMode', !0), ei(e, t))) : (C.verbose('Hook requested for untracked pid '.concat(e)), Promise.resolve());
}
function el(e, t) {
    var n;
    return z(e) ? ((null == (n = H(e)) ? void 0 : n.overlayMethod) === t.overlayMethod ? (C.verbose('OOP requested for pid '.concat(e, ' but already enabled')), Promise.resolve()) : (C.verbose('Enabling OOP for pid '.concat(e)), q(e, 'hasChangedRenderMode', !0), ei(e, t))) : (C.verbose('OOP requested for untracked pid '.concat(e)), Promise.resolve());
}
async function ec(e) {
    let t = !1;
    for (let n of e) ((t = (await eo(n)) || t), await (0, a._v)(16));
    t && (C.info('determineFullscreenOverlayMethodSwaps has changes'), eD.emitChange());
}
function eu(e) {
    null == M &&
        (__OVERLAY__ && C.error('Running Polling While in Overlay Context!'),
        (M = setTimeout(async () => {
            M = null;
            let e = Y();
            e.length > 0 && (eu(b.HD), await ec(new Set(e)));
        }, e)));
}
async function ed(e, t) {
    if (!O.iP) return void C.verbose('setOverlayEnabled: not supported');
    C.info('setOverlayEnabled: supported', {
        newLegacyEnabled: e,
        newOopEnabled: t
    });
    let n = e !== P,
        r = t !== w;
    if (
        ((P = e),
        (w = t),
        h.v.update({
            legacyEnabled: P,
            oopEnabled: w
        }),
        C.info('setOverlayEnabled', {
            newOopEnabled: t,
            newLegacyEnabled: e
        }),
        w && r && (0, p.setOutOfProcessSupport)(!0),
        P || w)
    )
        (n && C.info('Legacy change'), r && C.info('OOP change'), eg());
    else for (let e of Y()) (await et(e), await (0, a._v)(16));
}
function ef() {
    (ea(), (D = !1), (k = null), eC());
}
function e_(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        C.info('handleOverlaySetEnabled', {
            legacyEnabled: t,
            oopEnabled: n
        }),
        ed(t, n),
        !0
    );
}
function ep(e) {
    if (null != e.pids) for (let t of e.pids) ee(t);
}
function eh(e) {
    for (let t of (__OVERLAY__ && C.error('Running handleRunningGamesChange While in Overlay Context!'), e.added)) ee(t.pid);
    for (let t of e.removed) et(t.pid);
}
function em(e) {
    if ((__OVERLAY__ && C.error('Running handleGameToggleOverlay While in Overlay Context!'), C.verbose('handleGameToggleOverlay', { action: e }), !Z())) {
        if ((C.verbose('handleGameToggleOverlay: overlay not enabled'), 'pid' in e.game)) {
            let t = e.game.pid,
                n = H(t);
            if (null != n) return (ei(t, $(n, n.fullscreenType)), !0);
        }
        return !1;
    }
    if (!('pid' in e.game)) return (C.verbose('handleGameToggleOverlay: game is not a PersistGame'), ea(), !0);
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (z(t)) {
        let e = H(t);
        ((null == e ? void 0 : e.legacyEnabled) !== n && q(t, 'legacyEnabled', n), (null == e ? void 0 : e.oopEnabled) !== r && q(t, 'oopEnabled', null != r && r));
    }
    let i = n && V(),
        a = null != r && r && F();
    return (
        i || a
            ? (C.verbose('handleGameToggleOverlay: game enabled changed', {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a
              }),
              z(t) ? eg() : ee(t))
            : et(t),
        !0
    );
}
async function eg() {
    (await eE(), await (0, a._v)(2000));
    let e = Y(),
        t = new Set([
            ...d.ZP.getRunningGames()
                .filter((e) => d.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e
        ]);
    for (let n of (C.info('Retracking '.concat(t.size, ' games (').concat(e.length, ' already tracked)')), t)) (await ee(n), await (0, a._v)(16));
    C.info('Retracked '.concat(e.length, ' games'));
}
async function eE() {
    for (let e of Y()) (await et(e), await (0, a._v)(16));
}
function eb(e) {
    return (C.error('Overlay reload for pid', { pid: e.pid }), eg(), !0);
}
function ey(e) {
    return (C.error('Overlay crashed for pid '.concat(e.pid)), !!z(e.pid) && (q(e.pid, 'state', m.mM.OVERLAY_CRASHED), !0));
}
function eO(e) {
    return ((R = e.mode), eg(), !0);
}
function ev(e) {
    if (null != H(e.pid)) return (q(e.pid, 'state', e.overlayState), C.verbose('Updating overlay state for pid '.concat(e.pid, ' to ').concat(e.overlayState)), e.overlayState === m.mM.WAITING_FOR_OVERLAY_OPEN ? Q(e.pid, m.zE.MODULE_TRACKING) : e.overlayState === m.mM.OVERLAY_RENDERING && Q(e.pid, m.zE.OVERLAY_RENDERING), !0);
}
function eI() {
    return (eg(), !0);
}
function eT(e) {
    return (e.mode === m.GO.TrackFocusPIDs && (G = e.enabled), !0);
}
function eS() {
    return ((B = []), !0);
}
function eA(e) {
    if (((L = e.pid), G)) {
        var t;
        let n = [performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        B = [...B, n];
    }
    return !(0, p.isValidGamePID)(e.pid) || ((0, p.setPID)(e.pid), !0);
}
function eN(e) {
    z(e.pid) && q(e.pid, 'successfullyShown', !0);
    let t = H(e.pid);
    return null == t || (s.Z.updateTrackedGame(e.pid, t), !0);
}
function eC() {
    u.Z.hasLoadedExperiments && !D && ((D = !0), ed(h.v.legacyEnabled, h.v.oopEnabled));
}
function eR() {
    ((D = !1), (k = null));
}
function eP() {
    ((D = !1), (k = null), eE());
}
class ew extends (r = i.ZP.Store) {
    initialize() {
        (this.waitFor(d.ZP, f.default, u.Z, y.Z), this.syncWith([u.Z], eC));
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return B;
    }
    getHasLoadedExperiments() {
        return D;
    }
    getForcedRenderMode() {
        return R;
    }
    isAnyOverlayRendering() {
        return Object.values(x).some((e) => e.state === m.mM.OVERLAY_RENDERING);
    }
    getOverlayMethod(e) {
        var t, n;
        return null != (n = null == (t = H(e)) ? void 0 : t.overlayMethod) ? n : m.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === m.gl.OutOfProcess || t === m.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = H(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return H(e);
    }
    getTrackedGames() {
        return x;
    }
    getGameOverlayStatus(e) {
        let t = H(e.pid);
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
            oopEnabled: F(),
            legacyEnabled: V()
        };
    }
    getAnyGlobalEnabledOverlay() {
        return F() || V();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1
            };
        let t = H(e.pid);
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
        if (null != e) return null != (n = null == (t = H(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return k;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(x).filter((e) => e.overlayMethod !== m.gl.Disabled && e.state === m.mM.OVERLAY_RENDERING);
    }
}
v(ew, 'displayName', 'OverlayRenderStore');
let eD = new ew(
        o.Z,
        __OVERLAY__
            ? {}
            : {
                  CONNECTION_OPEN: ef,
                  LOGIN: eR,
                  LOGOUT: eP,
                  EXPERIMENT_OVERRIDE_BUCKET: ef,
                  OVERLAY_SET_ENABLED: e_,
                  GAME_LAUNCH_SUCCESS: ep,
                  RUNNING_GAMES_CHANGE: eh,
                  RUNNING_GAME_TOGGLE_OVERLAY: em,
                  OVERLAY_FORCE_RENDER_MODE: eO,
                  OVERLAY_UPDATE_OVERLAY_STATE: ev,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eI,
                  OVERLAY_CRASHED: ey,
                  OVERLAY_RELOAD: eb,
                  OVERLAY_FOCUSED: eA,
                  OVERLAY_SUCCESSFULLY_SHOWN: eN,
                  OVERLAY_RENDER_DEBUG_MODE: eT,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eS
              }
    ),
    eL = eD;
