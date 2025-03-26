let r;
n.d(t, {
    ZP: () => eR,
    i6: () => w
}),
    n(47120),
    n(653041),
    n(51350);
var i,
    o = n(252258),
    a = n(442837),
    s = n(570140),
    l = n(911969),
    c = n(895924),
    u = n(314897),
    d = n(592125),
    f = n(944486),
    _ = n(594174),
    p = n(585483),
    h = n(358085),
    m = n(636449),
    g = n(774226),
    E = n(155268),
    b = n(413458),
    v = n(16609),
    y = n(761122),
    O = n(917107),
    I = n(701488),
    S = n(918559),
    T = n(981631);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        surfacesToShowNewActivityIndicator: new Set()
    },
    w = [],
    D = [],
    L = '0',
    x = new Map(),
    M = new Map(),
    k = new Map(),
    j = new Map(),
    U = new Map();
function G(e, t) {
    return ''.concat(t, ':').concat(e);
}
let B = new Map(),
    F = new Map(),
    V = new Map(),
    Z = new Map(),
    H = new Map(),
    W = new Map(),
    Y = new Map(),
    K = 21600000,
    z = new Map(),
    q = S.Ez.DISCONNECTED,
    Q = S.MI.RESIZABLE,
    X = I.GM.NORMAL;
function J(e) {
    return null != e ? e : L;
}
function $(e) {
    var t, n, r, i, o, a, s, l;
    let { location: c, applicationId: d, launchId: f, compositeInstanceId: _, participants: p } = e,
        h = (0, E.ZP)(d);
    if (null == h) return;
    let m = (0, v.pY)(c),
        g = null != m && null !== (n = k.get(m)) && void 0 !== n ? n : w,
        y = null != g && 0 === g.length,
        O = null !== (r = U.get(c.id)) && void 0 !== r ? r : w,
        I = O.find((e) => e.applicationId === d),
        S = p.map((e) => e.userId),
        T = u.default.getId(),
        A = S.some((e) => e === T),
        C = null === (t = p.find((e) => e.userId === T)) || void 0 === t ? void 0 : t.sessionId,
        R = p.some((e) => (0, b.J)(e)),
        P = x.get(d),
        D = B.get(G(null != m ? m : null, d)),
        L = null == D ? void 0 : D.launchParams,
        F = {
            applicationId: d,
            location: c,
            launchId: f,
            compositeInstanceId: _,
            url: h,
            userIds: new Set(S),
            participants: p,
            referrerId: null !== (i = null == P ? void 0 : P.referrerId) && void 0 !== i ? i : null == L ? void 0 : L.referrerId,
            customId: null !== (o = null == P ? void 0 : P.customId) && void 0 !== o ? o : null == L ? void 0 : L.customId
        };
    A && null != P && x.set(P.applicationId, N({}, P, F));
    let V = !R;
    null != P && c.id === P.location.id && d === P.applicationId && ((!A && Array.from(P.userIds).some((e) => e === T)) || V)
        ? et(P)
        : A &&
          (null == P || P.applicationId !== d || P.location.id !== c.id) &&
          (C === u.default.getSessionId() &&
              ea({
                  applicationId: d,
                  launchId: f,
                  compositeInstanceId: _,
                  location: c,
                  participants: p,
                  isFirstActivityInChannel: y,
                  isStart: null == I,
                  referrerId: F.referrerId,
                  customId: F.customId,
                  inviterUserId: null == D ? void 0 : D.inviterUserId
              }),
          eb({
              channelId: null != m ? m : null,
              applicationId: d
          }));
    let Z = O.filter((e) => e.applicationId !== d);
    S.length > 0 && Z.push(F), U.set(c.id, Z);
    let H = (0, v.wq)(c);
    if (null != H) {
        let e = (null !== (a = j.get(H)) && void 0 !== a ? a : []).filter((e) => e.location.id !== c.id);
        S.length > 0 && e.push(F), j.set(H, e);
    }
    if (null != m) {
        let e = (null !== (s = k.get(m)) && void 0 !== s ? s : []).filter((e) => e.applicationId !== d),
            t = J((0, v.jS)(c)),
            n = (null !== (l = M.get(t)) && void 0 !== l ? l : []).filter((e) => e.applicationId !== d || e.location.id !== c.id);
        S.length > 0 && (e.push(F), n.push(F)), k.set(m, e), M.set(t, n);
    }
}
function ee(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: o } = e;
            $({
                location: t,
                applicationId: n,
                launchId: r,
                compositeInstanceId: i,
                participants: o.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function et(e) {
    x.delete(e.applicationId), p.S.dispatch(T.CkL.RELEASE_ACTIVITY_WEB_VIEW);
}
function en(e) {
    let { guilds: t } = e;
    k.clear(), M.clear(), U.clear(), j.clear(), t.forEach((e) => ee(e));
    let n = u.default.getId();
    for (let e of Array.from(x.values())) eC.getEmbeddedActivitiesForLocation(e.location).some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || et(e);
}
function er(e) {
    let { guild: t } = e;
    ee(t);
}
function ei(e) {
    var t, n;
    let { channel: r } = e,
        i = null !== (t = k.get(r.id)) && void 0 !== t ? t : [];
    k.set(r.id, []);
    let o = J(r.guild_id),
        a = (null !== (n = M.get(o)) && void 0 !== n ? n : []).filter((e) => (0, v.pY)(e.location) !== r.id);
    M.set(o, a),
        i.forEach((e) => {
            U.delete(e.location.id);
        }),
        j.set(r.id, []);
}
function eo(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: o } = e;
    $({
        location: i,
        applicationId: t,
        launchId: n,
        compositeInstanceId: r,
        participants: o.map((e) => ({
            userId: e.user_id,
            sessionId: e.session_id,
            nonce: e.nonce
        }))
    });
}
function ea(e) {
    var t, n;
    let { applicationId: i, launchId: a, compositeInstanceId: l, location: c, participants: h, isFirstActivityInChannel: b, isStart: y, referrerId: I, customId: A, inviterUserId: N } = e,
        C = (0, E.ZP)(i),
        R = u.default.getSessionId();
    if (null == C || null == R || (null === (t = x.get(i)) || void 0 === t ? void 0 : t.location.id) === c.id) return !1;
    let P = (0, v.pY)(c),
        w = d.Z.getChannel(P),
        D = null == w ? void 0 : w.getGuildId();
    if (null == _.default.getCurrentUser() || (!(0, g.sq)() && null == D && !(null !== (n = null == w ? void 0 : w.isPrivate()) && void 0 !== n && n))) return !1;
    r = c;
    let L = {
        applicationId: i,
        url: C,
        userIds: new Set(h.map((e) => e.userId)),
        participants: h,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: l,
        location: c,
        referrerId: I,
        customId: A
    };
    x.set(i, L),
        p.S.dispatch(T.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: c,
            applicationId: i,
            isFirstActivityInChannel: b,
            isStart: y,
            participants: h,
            embeddedActivity: L,
            inviterUserId: N
        }),
        (0, m.R)({ isContextless: c.kind === o.E.CONTEXTLESS })
            ? ((q = S.Ez.ACTIVITY_POPOUT_WINDOW),
              s.Z.wait(() => {
                  s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (q = P !== f.Z.getChannelId() || (0, O.Z)(P) ? S.Ez.PIP : S.Ez.PANEL),
        z.set(eT(c.id, i), Date.now());
}
function es(e) {
    let { applicationId: t } = e,
        n = x.get(t);
    x.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function el(e) {
    let { layout: t } = e;
    X = t;
}
function ec(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = x.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
    if (null == r) return !1;
    x.set(r.applicationId, N({}, r));
}
function eu(e) {
    let { applicationId: t, config: n } = e,
        r = x.get(t);
    null != r && x.set(r.applicationId, R(N({}, r), { config: n }));
}
function ed(e) {
    let { guildId: t } = e,
        n = J(t),
        r = V.get(n);
    V.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function ef(e) {
    let { guildId: t } = e,
        n = J(t),
        r = V.get(n);
    V.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function e_(e) {
    let { activities: t, now: n } = e;
    t.forEach((e) => {
        let t = e.application_id,
            r = e.client_platform_config[(0, y.Z)((0, h.getOS)())];
        if (null == r.label_until) return;
        let i = new Date(r.label_until).getTime();
        if (i < n) return;
        let o = P.seenNewActivities[t],
            a = Object.hasOwn(P.seenNewActivities, t),
            s = new Date(o).getTime() < i;
        r.label_type === l.ww.NEW &&
            (!a || s) &&
            (Object.values(l.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || P.surfacesToShowNewActivityIndicator.add(e);
            }),
            (P.seenNewActivities[t] = r.label_until));
        let c = P.seenUpdatedActivities[t],
            u = Object.hasOwn(P.seenUpdatedActivities, t),
            d = new Date(c).getTime() < i;
        r.label_type === l.ww.UPDATED &&
            (!u || d) &&
            (Object.values(l.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || P.surfacesToShowNewActivityIndicator.add(e);
            }),
            (P.seenUpdatedActivities[t] = r.label_until));
    });
}
function ep(e) {
    let { guildId: t, activities: n } = e,
        r = J(t);
    F.set(r, n);
    let i = Date.now();
    e_({
        activities: n,
        now: i
    }),
        V.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i
        });
}
let eh = () => {
    P.surfacesToShowNewActivityIndicator.clear();
};
function em(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: o, inviterUserId: a } = e;
    B.set(G(o, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: a,
        launchParams: i
    }),
        (Q = r === c.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? S.MI.NO_CHAT : S.MI.RESIZABLE);
}
function eg(e) {
    let { applicationId: t } = e;
    P.everLaunchedActivities.add(t);
}
function eE(e) {
    let { applicationId: t, channelId: n } = e;
    eb({
        applicationId: t,
        channelId: n
    });
}
function eb(e) {
    let { applicationId: t, channelId: n } = e;
    null != n
        ? B.delete(G(n, t))
        : B.keys().forEach((e) => {
              e.startsWith(''.concat(t, ':')) && B.delete(e);
          });
}
function ev(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? Z.delete(t) : Z.set(t, n), null === r ? H.delete(t) : void 0 !== r && H.set(t, r), null === i ? W.delete(t) : void 0 !== i && W.set(t, i);
}
function ey(e) {
    let { activityPanelMode: t } = e;
    q = t;
}
function eO(e) {
    let { focusedActivityLayout: t } = e;
    Q = t;
}
function eI(e) {
    let { applicationId: t, layoutMode: n } = e;
    Y.set(t, n);
}
function eS(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, v.pY)(r);
    null != n && n !== t && q === S.Ez.PANEL && (q = S.Ez.PIP);
}
function eT(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eA(e) {
    let { key: t } = e;
    t === T.KJ3.ACTIVITY_POPOUT && (q = S.Ez.PIP);
}
class eN extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        let r = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []),
            i = new Set(null !== (n = null == e ? void 0 : e.surfacesToShowNewActivityIndicator) && void 0 !== n ? n : []);
        null != e &&
            (P = R(N({}, e), {
                everLaunchedActivities: r,
                surfacesToShowNewActivityIndicator: i
            }));
    }
    getState() {
        return P;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(x.values()).find((t) => (0, v.pY)(t.location) === e)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(x.values()).find((t) => t.location.id === e.id)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForStartingChannel(e) {
        if (null != e) return Array.from(x.values()).find((t) => (0, v.wq)(t.location) === e);
    }
    getSelfEmbeddedActivities() {
        return x;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = M.get(e)) && void 0 !== t ? t : w;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = k.get(e)) && void 0 !== t ? t : w;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null !== (t = U.get(e.id)) && void 0 !== t ? t : w;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null !== (t = j.get(e)) && void 0 !== t ? t : w;
    }
    getEmbeddedActivitiesByChannel() {
        return k;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = z.get(eT(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return B.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = J(e);
        return null !== (t = F.get(n)) && void 0 !== t ? t : D;
    }
    getShelfFetchStatus(e) {
        let t = J(e);
        return V.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = J(e),
            i = null !== (t = V.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            o = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > K;
        return !(null == i ? void 0 : i.isFetching) && o;
    }
    getOrientationLockStateForApp(e) {
        return Z.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = H.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = W.get(e)) && void 0 !== t ? t : H.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return Y.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, v.pY)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return q;
    }
    getFocusedLayout() {
        return Q;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null !== (e = this.getSelfEmbeddedActivityForLocation(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            s: for (let [r, i] of U)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break s;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return P.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return B.get(G(null != t ? t : null, e));
    }
    getLaunchStates() {
        return B;
    }
    getActivityPopoutWindowLayout() {
        return X;
    }
}
A(eN, 'displayName', 'EmbeddedActivitiesStore'),
    A(eN, 'persistKey', 'EmbeddedActivities'),
    A(eN, 'migrations', [
        (e) =>
            R(N({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }),
        (e) => (delete e.seenFeaturedActivities, N({}, e)),
        (e) => (delete e.seenActivities, N({}, e)),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, N({}, e)),
        (e) =>
            R(N({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {}
            }),
        (e) => {
            var t;
            let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
            return R(N({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, N({}, e)),
        (e) => ((e.surfacesToShowNewActivityIndicator = new Set()), e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(l.eR.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, N({}, e))
    ]);
let eC = new eN(s.Z, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eI,
        CONNECTION_OPEN_SUPPLEMENTAL: en,
        GUILD_CREATE: er,
        CHANNEL_DELETE: ei,
        EMBEDDED_ACTIVITY_LAUNCH_START: em,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eg,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: eE,
        EMBEDDED_ACTIVITY_CLOSE: es,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: el,
        EMBEDDED_ACTIVITY_UPDATE_V2: eo,
        LOCAL_ACTIVITY_UPDATE: ec,
        EMBEDDED_ACTIVITY_SET_CONFIG: eu,
        EMBEDDED_ACTIVITY_FETCH_SHELF: ed,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ep,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ef,
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: eh,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: ev,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: ey,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eO,
        CHANNEL_SELECT: eS,
        POPOUT_WINDOW_CLOSE: eA
    }),
    eR = eC;
