let r;
n.d(t, {
    ZP: () => eC,
    i6: () => R,
}),
    n(388685),
    n(539854);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function C(e, t) {
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
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    R = [],
    P = [],
    w = "0",
    D = new Map(),
    x = new Map(),
    L = new Map(),
    j = new Map(),
    M = new Map();
function k(e, t) {
    return "".concat(t, ":").concat(e);
}
let U = new Map(),
    G = new Map(),
    B = new Map(),
    Z = new Map(),
    V = new Map(),
    F = new Map(),
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
    var t, n, r, i, a, o, s, l;
    let { location: u, applicationId: d, launchId: f, compositeInstanceId: _, participants: p, proxyTicket: h } = e,
        b = (0, m.ZP)(d);
    if (null == b) return;
    let y = (0, E.p)(u),
        O = null != y && null != (n = L.get(y)) ? n : R,
        v = null != O && 0 === O.length,
        I = null != (r = M.get(u.id)) ? r : R,
        T = I.find((e) => e.applicationId === d),
        A = p.map((e) => e.userId),
        N = c.default.getId(),
        P = A.some((e) => e === N),
        w = null == (t = p.find((e) => e.userId === N)) ? void 0 : t.sessionId,
        j = p.some((e) => (0, g.J)(e)),
        G = D.get(d),
        B = U.get(k(null != y ? y : null, d)),
        Z = null == B ? void 0 : B.launchParams,
        V = {
            applicationId: d,
            location: u,
            launchId: f,
            compositeInstanceId: _,
            url: b,
            userIds: new Set(A),
            participants: p,
            referrerId: null != (i = null == G ? void 0 : G.referrerId) ? i : null == Z ? void 0 : Z.referrerId,
            customId: null != (a = null == G ? void 0 : G.customId) ? a : null == Z ? void 0 : Z.customId,
            proxyTicket: h,
        };
    P &&
        null != G &&
        D.set(G.applicationId, C(S({}, G, V), { proxyTicket: null != (o = V.proxyTicket) ? o : G.proxyTicket }));
    let F = !j;
    null != G &&
    u.id === G.location.id &&
    d === G.applicationId &&
    ((!P && Array.from(G.userIds).some((e) => e === N)) || F)
        ? $(G)
        : P &&
          (null == G || G.applicationId !== d || G.location.id !== u.id) &&
          (w === c.default.getSessionId() &&
              ei({
                  applicationId: d,
                  launchId: f,
                  compositeInstanceId: _,
                  location: u,
                  participants: p,
                  isFirstActivityInChannel: v,
                  isStart: null == T,
                  referrerId: V.referrerId,
                  customId: V.customId,
                  inviterUserId: null == B ? void 0 : B.inviterUserId,
                  proxyTicket: V.proxyTicket,
              }),
          eg({
              channelId: null != y ? y : null,
              applicationId: d,
          }));
    let H = I.filter((e) => e.applicationId !== d);
    if ((A.length > 0 && H.push(V), M.set(u.id, H), null != y)) {
        let e = (null != (s = L.get(y)) ? s : []).filter((e) => e.applicationId !== d),
            t = X((0, E.j)(u)),
            n = (null != (l = x.get(t)) ? l : []).filter((e) => e.applicationId !== d || e.location.id !== u.id);
        A.length > 0 && (e.push(V), n.push(V)), L.set(y, e), x.set(t, n);
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
                    nonce: e.nonce,
                })),
            });
        });
}
function $(e) {
    D.delete(e.applicationId), _.S.dispatch(I.CkL.RELEASE_ACTIVITY_WEB_VIEW);
}
function ee(e) {
    let { guilds: t } = e;
    L.clear(), x.clear(), M.clear(), j.clear(), t.forEach((e) => J(e));
    let n = c.default.getId();
    for (let e of Array.from(D.values()))
        eA
            .getEmbeddedActivitiesForLocation(e.location)
            .some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || $(e);
}
function et(e) {
    let { guild: t } = e;
    J(t);
}
function en(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (t = L.get(r.id)) ? t : [];
    L.set(r.id, []);
    let a = X(r.guild_id),
        o = (null != (n = x.get(a)) ? n : []).filter((e) => (0, E.p)(e.location) !== r.id);
    x.set(a, o),
        i.forEach((e) => {
            M.delete(e.location.id);
        }),
        j.set(r.id, []);
}
function er(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e,
        o = (0, E.p)(i),
        s = U.get(k(null != o ? o : null, t));
    Q({
        location: i,
        applicationId: t,
        launchId: n,
        compositeInstanceId: r,
        participants: a.map((e) => ({
            userId: e.user_id,
            sessionId: e.session_id,
            nonce: e.nonce,
        })),
        proxyTicket: null == s ? void 0 : s.proxyTicket,
    });
}
function ei(e) {
    var t, n;
    let {
            applicationId: i,
            launchId: a,
            compositeInstanceId: s,
            location: l,
            participants: p,
            isFirstActivityInChannel: g,
            isStart: b,
            referrerId: O,
            customId: T,
            inviterUserId: S,
            proxyTicket: A,
        } = e,
        C = (0, m.ZP)(i),
        N = c.default.getSessionId();
    if (null == C || null == N || (null == (t = D.get(i)) ? void 0 : t.location.id) === l.id) return !1;
    let R = (0, E.p)(l),
        P = u.Z.getChannel(R),
        w = null == P ? void 0 : P.getGuildId();
    if (null == f.default.getCurrentUser() || (null == w && !(null != (n = null == P ? void 0 : P.isPrivate()) && n)))
        return !1;
    r = l;
    let x = {
        applicationId: i,
        url: C,
        userIds: new Set(p.map((e) => e.userId)),
        participants: p,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: s,
        location: l,
        referrerId: O,
        customId: T,
        proxyTicket: A,
    };
    D.set(i, x),
        _.S.dispatch(I.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: i,
            isFirstActivityInChannel: g,
            isStart: b,
            participants: p,
            embeddedActivity: x,
            inviterUserId: S,
        }),
        (0, h.R)()
            ? ((K = v.Ez.ACTIVITY_POPOUT_WINDOW),
              o.Z.wait(() => {
                  o.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
              }))
            : (K = R !== d.Z.getChannelId() || (0, y.Z)(R) ? v.Ez.PIP : v.Ez.PANEL),
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
    let r = D.get(null != (t = n.application_id) ? t : "");
    if (null == r) return !1;
    D.set(r.applicationId, S({}, r));
}
function el(e) {
    let { applicationId: t, config: n } = e,
        r = D.get(t);
    null != r && D.set(r.applicationId, C(S({}, r), { config: n }));
}
function ec(e) {
    let { guildId: t } = e,
        n = X(t),
        r = B.get(n);
    B.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs,
    }),
        (N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}
function eu(e) {
    let { guildId: t } = e,
        n = X(t),
        r = B.get(n);
    B.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs,
    });
}
function ed(e) {
    let { activities: t, now: n } = e,
        r = (0, b.Z)((0, p.getOS)()),
        i = t.reduce((e, t) => {
            let i = t.client_platform_config[r];
            if (null == i.label_from || null == i.label_until) return e;
            let a = {
                    fromDate: i.label_from,
                    untilDate: i.label_until,
                },
                o = new Date(i.label_from).getTime(),
                l = new Date(i.label_until).getTime();
            return (
                o > n ||
                    l < n ||
                    Object.values(s.eR)
                        .filter((e) => !i.omit_badge_from_surfaces.includes(e))
                        .forEach((t) => {
                            let n = e[t];
                            (null == n || new Date(n.fromDate).getTime() < o) && (e[t] = a);
                        }),
                e
            );
        }, {});
    N.dateRangesForSurfaces = i;
}
function ef(e) {
    let { guildId: t, activities: n } = e,
        r = X(t);
    G.set(r, n);
    let i = Date.now();
    ed({
        activities: n,
        now: i,
    }),
        B.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i,
        });
}
function e_(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: a, inviterUserId: o } = e;
    U.set(k(a, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: o,
        launchParams: i,
    }),
        (z = r === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? v.MI.NO_CHAT : v.MI.RESIZABLE);
}
function ep(e) {
    let { applicationId: t, channelId: n, proxyTicket: r } = e,
        i = k(n, t),
        a = U.get(i);
    null != a && U.set(i, C(S({}, a), { proxyTicket: r }));
}
function eh(e) {
    let { applicationId: t } = e;
    N.everLaunchedActivities.add(t);
}
function em(e) {
    let { applicationId: t, channelId: n } = e;
    eg({
        applicationId: t,
        channelId: n,
    });
}
function eg(e) {
    let { applicationId: t, channelId: n } = e;
    U.delete(k(n, t));
}
function eE(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? Z.delete(t) : Z.set(t, n),
        null === r ? V.delete(t) : void 0 !== r && V.set(t, r),
        null === i ? F.delete(t) : void 0 !== i && F.set(t, i);
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
    return "".concat(e, ":").concat(t);
}
function eT(e) {
    let { key: t } = e;
    t === I.KJ3.ACTIVITY_POPOUT && (K = v.Ez.PIP);
}
class eS extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null != (t = null == e ? void 0 : e.everLaunchedActivities) ? t : []);
        null != e && (N = C(S({}, e), { everLaunchedActivities: n }));
    }
    getState() {
        return N;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e
            ? null
            : null != (t = Array.from(D.values()).find((t) => (0, E.p)(t.location) === e))
              ? t
              : null;
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
        return null != (t = x.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null != (t = L.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null != (t = M.get(e.id)) ? t : R;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null != (t = j.get(e)) ? t : R;
    }
    getEmbeddedActivitiesByChannel() {
        return L;
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
        return Z.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null != (t = V.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null != (n = null != (t = F.get(e)) ? t : V.get(e)) ? n : this.getOrientationLockStateForApp(e);
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
        return N.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return U.get(k(null != t ? t : null, e));
    }
    getLaunchStates() {
        return U;
    }
    getActivityPopoutWindowLayout() {
        return q;
    }
}
T(eS, "displayName", "EmbeddedActivitiesStore"),
    T(eS, "persistKey", "EmbeddedActivities"),
    T(eS, "migrations", [
        (e) =>
            C(S({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1,
            }),
        (e) => (delete e.seenFeaturedActivities, S({}, e)),
        (e) => (delete e.seenActivities, S({}, e)),
        (e) => (
            delete e.currentFreeActivity,
            delete e.lastFreeActivityRotationTimestampMs,
            delete e.freePeriodActivities,
            delete e.shouldShowFreeActivityIndicator,
            S({}, e)
        ),
        (e) =>
            C(S({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {},
            }),
        (e) => {
            var t;
            let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
            return C(S({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, S({}, e)),
        (e) => (
            (e.surfacesToShowNewActivityIndicator = new Set()),
            e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(s.eR.VOICE_LAUNCHER),
            delete e.shouldShowNewActivityIndicator,
            S({}, e)
        ),
        (e) => C(S({}, e), { lastCheckedForBadgeableActivities: null }),
        (e) => (delete e.surfacesToShowNewActivityIndicator, C(S({}, e), { dateRangesForSurfaces: {} })),
    ]);
let eA = new eS(o.Z, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eO,
        CONNECTION_OPEN_SUPPLEMENTAL: ee,
        GUILD_CREATE: et,
        CHANNEL_DELETE: en,
        EMBEDDED_ACTIVITY_LAUNCH_START: e_,
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: ep,
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
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eE,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: eb,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: ey,
        CHANNEL_SELECT: ev,
        POPOUT_WINDOW_CLOSE: eT,
    }),
    eC = eA;
