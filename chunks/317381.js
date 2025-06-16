let r;
n.d(t, {
    ZP: () => eN,
    i6: () => R
}),
    n(388685),
    n(539854),
    n(825670);
var i,
    a = n(442837),
    o = n(570140),
    s = n(911969),
    l = n(895924),
    c = n(314897),
    u = n(592125),
    d = n(944486),
    f = n(594174),
    _ = n(585483),
    p = n(358085),
    h = n(636449),
    m = n(155268),
    g = n(413458),
    E = n(16609),
    b = n(761122),
    y = n(917107),
    O = n(701488),
    v = n(918559),
    I = n(981631);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        surfacesToShowNewActivityIndicator: new Set(),
        lastCheckedForBadgeableActivities: null
    },
    R = [],
    P = [],
    w = '0',
    D = new Map(),
    L = new Map(),
    x = new Map(),
    k = new Map(),
    M = new Map();
function j(e, t) {
    return ''.concat(t, ':').concat(e);
}
let U = new Map(),
    G = new Map(),
    B = new Map(),
    V = new Map(),
    F = new Map(),
    Z = new Map(),
    H = new Map(),
    Y = 21600000,
    W = new Map(),
    K = v.Ez.DISCONNECTED,
    z = v.MI.RESIZABLE,
    q = O.GM.NORMAL;
function X(e) {
    return null != e ? e : w;
}
function Q(e) {
    var t, n, r, i, a, o, s;
    let { location: l, applicationId: u, launchId: d, compositeInstanceId: f, participants: _ } = e,
        p = (0, m.ZP)(u);
    if (null == p) return;
    let h = (0, E.p)(l),
        b = null != h && null != (n = x.get(h)) ? n : R,
        y = null != b && 0 === b.length,
        O = null != (r = M.get(l.id)) ? r : R,
        v = O.find((e) => e.applicationId === u),
        I = _.map((e) => e.userId),
        T = c.default.getId(),
        A = I.some((e) => e === T),
        N = null == (t = _.find((e) => e.userId === T)) ? void 0 : t.sessionId,
        C = _.some((e) => (0, g.J)(e)),
        P = D.get(u),
        w = U.get(j(null != h ? h : null, u)),
        k = null == w ? void 0 : w.launchParams,
        G = {
            applicationId: u,
            location: l,
            launchId: d,
            compositeInstanceId: f,
            url: p,
            userIds: new Set(I),
            participants: _,
            referrerId: null != (i = null == P ? void 0 : P.referrerId) ? i : null == k ? void 0 : k.referrerId,
            customId: null != (a = null == P ? void 0 : P.customId) ? a : null == k ? void 0 : k.customId
        };
    A && null != P && D.set(P.applicationId, S({}, P, G));
    let B = !C;
    null != P && l.id === P.location.id && u === P.applicationId && ((!A && Array.from(P.userIds).some((e) => e === T)) || B)
        ? $(P)
        : A &&
          (null == P || P.applicationId !== u || P.location.id !== l.id) &&
          (N === c.default.getSessionId() &&
              ei({
                  applicationId: u,
                  launchId: d,
                  compositeInstanceId: f,
                  location: l,
                  participants: _,
                  isFirstActivityInChannel: y,
                  isStart: null == v,
                  referrerId: G.referrerId,
                  customId: G.customId,
                  inviterUserId: null == w ? void 0 : w.inviterUserId
              }),
          eg({
              channelId: null != h ? h : null,
              applicationId: u
          }));
    let V = O.filter((e) => e.applicationId !== u);
    if ((I.length > 0 && V.push(G), M.set(l.id, V), null != h)) {
        let e = (null != (o = x.get(h)) ? o : []).filter((e) => e.applicationId !== u),
            t = X((0, E.j)(l)),
            n = (null != (s = L.get(t)) ? s : []).filter((e) => e.applicationId !== u || e.location.id !== l.id);
        I.length > 0 && (e.push(G), n.push(G)), x.set(h, e), L.set(t, n);
    }
}
function J(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: a } = e;
            Q({
                location: t,
                applicationId: n,
                launchId: r,
                compositeInstanceId: i,
                participants: a.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function $(e) {
    D.delete(e.applicationId), _.S.dispatch(I.CkL.RELEASE_ACTIVITY_WEB_VIEW);
}
function ee(e) {
    let { guilds: t } = e;
    x.clear(), L.clear(), M.clear(), k.clear(), t.forEach((e) => J(e));
    let n = c.default.getId();
    for (let e of Array.from(D.values())) eA.getEmbeddedActivitiesForLocation(e.location).some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || $(e);
}
function et(e) {
    let { guild: t } = e;
    J(t);
}
function en(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (t = x.get(r.id)) ? t : [];
    x.set(r.id, []);
    let a = X(r.guild_id),
        o = (null != (n = L.get(a)) ? n : []).filter((e) => (0, E.p)(e.location) !== r.id);
    L.set(a, o),
        i.forEach((e) => {
            M.delete(e.location.id);
        }),
        k.set(r.id, []);
}
function er(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
    Q({
        location: i,
        applicationId: t,
        launchId: n,
        compositeInstanceId: r,
        participants: a.map((e) => ({
            userId: e.user_id,
            sessionId: e.session_id,
            nonce: e.nonce
        }))
    });
}
function ei(e) {
    var t, n;
    let { applicationId: i, launchId: a, compositeInstanceId: s, location: l, participants: p, isFirstActivityInChannel: g, isStart: b, referrerId: O, customId: T, inviterUserId: S } = e,
        A = (0, m.ZP)(i),
        N = c.default.getSessionId();
    if (null == A || null == N || (null == (t = D.get(i)) ? void 0 : t.location.id) === l.id) return !1;
    let C = (0, E.p)(l),
        R = u.Z.getChannel(C),
        P = null == R ? void 0 : R.getGuildId();
    if (null == f.default.getCurrentUser() || (null == P && !(null != (n = null == R ? void 0 : R.isPrivate()) && n))) return !1;
    r = l;
    let w = {
        applicationId: i,
        url: A,
        userIds: new Set(p.map((e) => e.userId)),
        participants: p,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: s,
        location: l,
        referrerId: O,
        customId: T
    };
    D.set(i, w),
        _.S.dispatch(I.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: i,
            isFirstActivityInChannel: g,
            isStart: b,
            participants: p,
            embeddedActivity: w,
            inviterUserId: S
        }),
        (0, h.R)()
            ? ((K = v.Ez.ACTIVITY_POPOUT_WINDOW),
              o.Z.wait(() => {
                  o.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (K = C !== d.Z.getChannelId() || (0, y.Z)(C) ? v.Ez.PIP : v.Ez.PANEL),
        W.set(eI(l.id, i), Date.now());
}
function ea(e) {
    let { applicationId: t } = e,
        n = D.get(t);
    D.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function eo(e) {
    let { layout: t } = e;
    q = t;
}
function es(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = D.get(null != (t = n.application_id) ? t : '');
    if (null == r) return !1;
    D.set(r.applicationId, S({}, r));
}
function el(e) {
    let { applicationId: t, config: n } = e,
        r = D.get(t);
    null != r && D.set(r.applicationId, N(S({}, r), { config: n }));
}
function ec(e) {
    let { guildId: t } = e,
        n = X(t),
        r = B.get(n);
    B.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    }),
        (C.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}
function eu(e) {
    let { guildId: t } = e,
        n = X(t),
        r = B.get(n);
    B.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function ed(e) {
    let { activities: t, now: n } = e;
    t.forEach((e) => {
        let t = e.application_id,
            r = e.client_platform_config[(0, b.Z)((0, p.getOS)())];
        if (null == r.label_until) return;
        let i = new Date(r.label_until).getTime();
        if (i < n) return;
        let a = C.seenNewActivities[t],
            o = Object.hasOwn(C.seenNewActivities, t),
            l = new Date(a).getTime() < i;
        r.label_type === s.ww.NEW &&
            (!o || l) &&
            (Object.values(s.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || C.surfacesToShowNewActivityIndicator.add(e);
            }),
            (C.seenNewActivities[t] = r.label_until));
        let c = C.seenUpdatedActivities[t],
            u = Object.hasOwn(C.seenUpdatedActivities, t),
            d = new Date(c).getTime() < i;
        r.label_type === s.ww.UPDATED &&
            (!u || d) &&
            (Object.values(s.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || C.surfacesToShowNewActivityIndicator.add(e);
            }),
            (C.seenUpdatedActivities[t] = r.label_until));
    });
}
function ef(e) {
    let { guildId: t, activities: n } = e,
        r = X(t);
    G.set(r, n);
    let i = Date.now();
    ed({
        activities: n,
        now: i
    }),
        B.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i
        });
}
let e_ = () => {
    C.surfacesToShowNewActivityIndicator.clear();
};
function ep(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: a, inviterUserId: o } = e;
    U.set(j(a, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: o,
        launchParams: i
    }),
        (z = r === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? v.MI.NO_CHAT : v.MI.RESIZABLE);
}
function eh(e) {
    let { applicationId: t } = e;
    C.everLaunchedActivities.add(t);
}
function em(e) {
    let { applicationId: t, channelId: n } = e;
    eg({
        applicationId: t,
        channelId: n
    });
}
function eg(e) {
    let { applicationId: t, channelId: n } = e;
    U.delete(j(n, t));
}
function eE(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? V.delete(t) : V.set(t, n), null === r ? F.delete(t) : void 0 !== r && F.set(t, r), null === i ? Z.delete(t) : void 0 !== i && Z.set(t, i);
}
function eb(e) {
    let { activityPanelMode: t } = e;
    K = t;
}
function ey(e) {
    let { focusedActivityLayout: t } = e;
    z = t;
}
function eO(e) {
    let { applicationId: t, layoutMode: n } = e;
    H.set(t, n);
}
function ev(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, E.p)(r);
    null != n && n !== t && K === v.Ez.PANEL && (K = v.Ez.PIP);
}
function eI(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eT(e) {
    let { key: t } = e;
    t === I.KJ3.ACTIVITY_POPOUT && (K = v.Ez.PIP);
}
class eS extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        let r = new Set(null != (t = null == e ? void 0 : e.everLaunchedActivities) ? t : []),
            i = new Set(null != (n = null == e ? void 0 : e.surfacesToShowNewActivityIndicator) ? n : []);
        null != e &&
            (C = N(S({}, e), {
                everLaunchedActivities: r,
                surfacesToShowNewActivityIndicator: i
            }));
    }
    getState() {
        return C;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null != (t = Array.from(D.values()).find((t) => (0, E.p)(t.location) === e)) ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null != (t = Array.from(D.values()).find((t) => t.location.id === e.id)) ? t : null;
    }
    getSelfEmbeddedActivities() {
        return D;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null != (t = L.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null != (t = x.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null != (t = M.get(e.id)) ? t : R;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null != (t = k.get(e)) ? t : R;
    }
    getEmbeddedActivitiesByChannel() {
        return x;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = W.get(eI(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return U.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = X(e);
        return null != (t = G.get(n)) ? t : P;
    }
    getShelfFetchStatus(e) {
        let t = X(e);
        return B.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = X(e),
            i = null != (t = B.get(r)) ? t : { isFetching: !1 },
            a = Date.now() - (null != (n = null == i ? void 0 : i.lastFetchTimestampMs) ? n : 0) > Y;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return V.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null != (t = F.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null != (n = null != (t = Z.get(e)) ? t : F.get(e)) ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return H.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, E.p)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return K;
    }
    getFocusedLayout() {
        return z;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null != (e = this.getSelfEmbeddedActivityForLocation(t)) ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [r, i] of M)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return C.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return U.get(j(null != t ? t : null, e));
    }
    getLaunchStates() {
        return U;
    }
    getActivityPopoutWindowLayout() {
        return q;
    }
}
T(eS, 'displayName', 'EmbeddedActivitiesStore'),
    T(eS, 'persistKey', 'EmbeddedActivities'),
    T(eS, 'migrations', [
        (e) =>
            N(S({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }),
        (e) => (delete e.seenFeaturedActivities, S({}, e)),
        (e) => (delete e.seenActivities, S({}, e)),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, S({}, e)),
        (e) =>
            N(S({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {}
            }),
        (e) => {
            var t;
            let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
            return N(S({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, S({}, e)),
        (e) => ((e.surfacesToShowNewActivityIndicator = new Set()), e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(s.eR.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, S({}, e)),
        (e) => N(S({}, e), { lastCheckedForBadgeableActivities: null })
    ]);
let eA = new eS(o.Z, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eO,
        CONNECTION_OPEN_SUPPLEMENTAL: ee,
        GUILD_CREATE: et,
        CHANNEL_DELETE: en,
        EMBEDDED_ACTIVITY_LAUNCH_START: ep,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eh,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: em,
        EMBEDDED_ACTIVITY_CLOSE: ea,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: eo,
        EMBEDDED_ACTIVITY_UPDATE_V2: er,
        LOCAL_ACTIVITY_UPDATE: es,
        EMBEDDED_ACTIVITY_SET_CONFIG: el,
        EMBEDDED_ACTIVITY_FETCH_SHELF: ec,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ef,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eu,
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: e_,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eE,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: eb,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: ey,
        CHANNEL_SELECT: ev,
        POPOUT_WINDOW_CLOSE: eT
    }),
    eN = eA;
