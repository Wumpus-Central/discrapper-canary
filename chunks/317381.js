let r;
n.d(t, {
    ZP: () => ew,
    i6: () => P,
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
    p = n(585483),
    _ = n(358085),
    m = n(636449),
    h = n(155268),
    g = n(413458),
    E = n(16609),
    b = n(761122),
    y = n(917107),
    O = n(701488),
    v = n(918559),
    S = n(981631);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    P = [],
    R = [],
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
    G = new Set(),
    Z = new Map(),
    F = new Map(),
    B = new Map(),
    V = new Map(),
    H = new Map(),
    Y = new Map(),
    W = 21600000,
    K = new Map(),
    z = v.Ez.DISCONNECTED,
    q = v.MI.RESIZABLE,
    Q = O.GM.NORMAL;
function X(e) {
    return null != e ? e : w;
}
function J(e) {
    var t, n, r, i, a, o, s, l;
    let { location: u, applicationId: d, launchId: f, compositeInstanceId: p, participants: _, proxyTicket: m } = e,
        b = (0, h.ZP)(d);
    if (null == b) return;
    let y = (0, E.p)(u),
        O = null != y && null != (n = L.get(y)) ? n : P,
        v = null != O && 0 === O.length,
        S = null != (r = M.get(u.id)) ? r : P,
        I = S.find((e) => e.applicationId === d),
        C = _.map((e) => e.userId),
        N = c.default.getId(),
        R = C.some((e) => e === N),
        w = null == (t = _.find((e) => e.userId === N)) ? void 0 : t.sessionId,
        j = _.some((e) => (0, g.J)(e)),
        G = D.get(d),
        Z = U.get(k(null != y ? y : null, d)),
        F = null == Z ? void 0 : Z.launchParams,
        B = {
            applicationId: d,
            location: u,
            launchId: f,
            compositeInstanceId: p,
            url: b,
            userIds: new Set(C),
            participants: _,
            referrerId: null != (i = null == G ? void 0 : G.referrerId) ? i : null == F ? void 0 : F.referrerId,
            customId: null != (a = null == G ? void 0 : G.customId) ? a : null == F ? void 0 : F.customId,
            proxyTicket: m,
        };
    R &&
        null != G &&
        D.set(G.applicationId, A(T({}, G, B), { proxyTicket: null != (o = B.proxyTicket) ? o : G.proxyTicket }));
    let V = !j;
    null != G &&
    u.id === G.location.id &&
    d === G.applicationId &&
    ((!R && Array.from(G.userIds).some((e) => e === N)) || V)
        ? ee(G)
        : R &&
          (null == G || G.applicationId !== d || G.location.id !== u.id) &&
          (w === c.default.getSessionId() &&
              ea({
                  applicationId: d,
                  launchId: f,
                  compositeInstanceId: p,
                  location: u,
                  participants: _,
                  isFirstActivityInChannel: v,
                  isStart: null == I,
                  referrerId: B.referrerId,
                  customId: B.customId,
                  inviterUserId: null == Z ? void 0 : Z.inviterUserId,
                  proxyTicket: B.proxyTicket,
              }),
          eO({
              channelId: null != y ? y : null,
              applicationId: d,
          }));
    let H = S.filter((e) => e.applicationId !== d);
    if ((C.length > 0 && H.push(B), M.set(u.id, H), null != y)) {
        let e = (null != (s = L.get(y)) ? s : []).filter((e) => e.applicationId !== d),
            t = X((0, E.j)(u)),
            n = (null != (l = x.get(t)) ? l : []).filter((e) => e.applicationId !== d || e.location.id !== u.id);
        C.length > 0 && (e.push(B), n.push(B)), L.set(y, e), x.set(t, n);
    }
}
function $(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: a } = e;
            J({
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
function ee(e) {
    D.delete(e.applicationId), p.S.dispatch(S.CkL.RELEASE_ACTIVITY_WEB_VIEW);
}
function et(e) {
    let { guilds: t } = e;
    L.clear(), x.clear(), M.clear(), j.clear(), t.forEach((e) => $(e));
    let n = c.default.getId();
    for (let e of Array.from(D.values()))
        eR
            .getEmbeddedActivitiesForLocation(e.location)
            .some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || ee(e);
}
function en(e) {
    let { guild: t } = e;
    $(t);
}
function er(e) {
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
function ei(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e,
        o = (0, E.p)(i),
        s = U.get(k(null != o ? o : null, t));
    J({
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
function ea(e) {
    var t, n;
    let {
            applicationId: i,
            launchId: a,
            compositeInstanceId: s,
            location: l,
            participants: _,
            isFirstActivityInChannel: g,
            isStart: b,
            referrerId: O,
            customId: I,
            inviterUserId: T,
            proxyTicket: C,
        } = e,
        A = (0, h.ZP)(i),
        N = c.default.getSessionId();
    if (null == A || null == N || (null == (t = D.get(i)) ? void 0 : t.location.id) === l.id) return !1;
    let P = (0, E.p)(l),
        R = u.Z.getChannel(P),
        w = null == R ? void 0 : R.getGuildId();
    if (null == f.default.getCurrentUser() || (null == w && !(null != (n = null == R ? void 0 : R.isPrivate()) && n)))
        return !1;
    r = l;
    let x = {
        applicationId: i,
        url: A,
        userIds: new Set(_.map((e) => e.userId)),
        participants: _,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: s,
        location: l,
        referrerId: O,
        customId: I,
        proxyTicket: C,
    };
    D.set(i, x),
        p.S.dispatch(S.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: i,
            isFirstActivityInChannel: g,
            isStart: b,
            participants: _,
            embeddedActivity: x,
            inviterUserId: T,
        }),
        (0, m.R)()
            ? ((z = v.Ez.ACTIVITY_POPOUT_WINDOW),
              o.Z.wait(() => {
                  o.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
              }))
            : (z = P !== d.Z.getChannelId() || (0, y.Z)(P) ? v.Ez.PIP : v.Ez.PANEL),
        K.set(eA(l.id, i), Date.now());
}
function eo(e) {
    let { applicationId: t } = e,
        n = D.get(t);
    D.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function es(e) {
    let { layout: t } = e;
    Q = t;
}
function el(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = D.get(null != (t = n.application_id) ? t : "");
    if (null == r) return !1;
    D.set(r.applicationId, T({}, r));
}
function ec(e) {
    let { applicationId: t, config: n } = e,
        r = D.get(t);
    null != r && D.set(r.applicationId, A(T({}, r), { config: n }));
}
function eu(e) {
    let { guildId: t } = e,
        n = X(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs,
    }),
        (N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}
function ed(e) {
    let { guildId: t } = e,
        n = X(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs,
    });
}
function ef(e) {
    let { activities: t, now: n } = e,
        r = (0, b.Z)((0, _.getOS)()),
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
function ep(e) {
    let { guildId: t, activities: n } = e,
        r = X(t);
    Z.set(r, n);
    let i = Date.now();
    ef({
        activities: n,
        now: i,
    }),
        F.set(r, {
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
        (q = r === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? v.MI.NO_CHAT : v.MI.RESIZABLE);
}
function em(e) {
    let { applicationId: t, channelId: n, proxyTicket: r } = e,
        i = k(n, t),
        a = U.get(i);
    null != a && U.set(i, A(T({}, a), { proxyTicket: r }));
}
function eh(e) {
    let { applicationId: t, proxyTicket: n } = e,
        r = D.get(t);
    if (null == r) return !1;
    D.set(t, A(T({}, r), { proxyTicket: n }));
}
function eg(e) {
    let { applicationId: t, refreshing: n } = e;
    n ? G.add(t) : G.delete(t);
}
function eE(e) {
    let { applicationId: t } = e;
    N.everLaunchedActivities.add(t);
}
function eb(e) {
    let { applicationId: t, channelId: n } = e;
    eO({
        applicationId: t,
        channelId: n,
    }),
        G.delete(t);
}
function ey(e) {
    let { applicationId: t, channelId: n } = e;
    eO({
        applicationId: t,
        channelId: n,
    }),
        G.delete(t);
}
function eO(e) {
    let { applicationId: t, channelId: n } = e;
    U.delete(k(n, t));
}
function ev(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? B.delete(t) : B.set(t, n),
        null === r ? V.delete(t) : void 0 !== r && V.set(t, r),
        null === i ? H.delete(t) : void 0 !== i && H.set(t, i);
}
function eS(e) {
    let { activityPanelMode: t } = e;
    z = t;
}
function eI(e) {
    let { focusedActivityLayout: t } = e;
    q = t;
}
function eT(e) {
    let { applicationId: t, layoutMode: n } = e;
    Y.set(t, n);
}
function eC(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, E.p)(r);
    null != n && n !== t && z === v.Ez.PANEL && (z = v.Ez.PIP);
}
function eA(e, t) {
    return "".concat(e, ":").concat(t);
}
function eN(e) {
    let { key: t } = e;
    t === S.KJ3.ACTIVITY_POPOUT && (z = v.Ez.PIP);
}
class eP extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(c.default, u.Z, d.Z, f.default);
        let n = new Set(null != (t = null == e ? void 0 : e.everLaunchedActivities) ? t : []);
        null != e && (N = A(T({}, e), { everLaunchedActivities: n }));
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
        return null != (t = x.get(e)) ? t : P;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null != (t = L.get(e)) ? t : P;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null != (t = M.get(e.id)) ? t : P;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null != (t = j.get(e)) ? t : P;
    }
    getEmbeddedActivitiesByChannel() {
        return L;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = K.get(eA(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return U.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = X(e);
        return null != (t = Z.get(n)) ? t : R;
    }
    getShelfFetchStatus(e) {
        let t = X(e);
        return F.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = X(e),
            i = null != (t = F.get(r)) ? t : { isFetching: !1 },
            a = Date.now() - (null != (n = null == i ? void 0 : i.lastFetchTimestampMs) ? n : 0) > W;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return B.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null != (t = V.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null != (n = null != (t = H.get(e)) ? t : V.get(e)) ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return Y.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, E.p)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return z;
    }
    getFocusedLayout() {
        return q;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null != (e = this.getSelfEmbeddedActivityForLocation(t)) ? e : void 0;
    }
    isProxyTicketRefreshing(e) {
        return G.has(e);
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
        return Q;
    }
}
I(eP, "displayName", "EmbeddedActivitiesStore"),
    I(eP, "persistKey", "EmbeddedActivities"),
    I(eP, "migrations", [
        (e) =>
            A(T({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1,
            }),
        (e) => (delete e.seenFeaturedActivities, T({}, e)),
        (e) => (delete e.seenActivities, T({}, e)),
        (e) => (
            delete e.currentFreeActivity,
            delete e.lastFreeActivityRotationTimestampMs,
            delete e.freePeriodActivities,
            delete e.shouldShowFreeActivityIndicator,
            T({}, e)
        ),
        (e) =>
            A(T({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {},
            }),
        (e) => {
            var t;
            let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
            return A(T({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, T({}, e)),
        (e) => (
            (e.surfacesToShowNewActivityIndicator = new Set()),
            e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(s.eR.VOICE_LAUNCHER),
            delete e.shouldShowNewActivityIndicator,
            T({}, e)
        ),
        (e) => A(T({}, e), { lastCheckedForBadgeableActivities: null }),
        (e) => (delete e.surfacesToShowNewActivityIndicator, A(T({}, e), { dateRangesForSurfaces: {} })),
    ]);
let eR = new eP(o.Z, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eT,
        CONNECTION_OPEN_SUPPLEMENTAL: et,
        GUILD_CREATE: en,
        CHANNEL_DELETE: er,
        EMBEDDED_ACTIVITY_LAUNCH_START: e_,
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: em,
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: eh,
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: eg,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eE,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: eb,
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: ey,
        EMBEDDED_ACTIVITY_CLOSE: eo,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: es,
        EMBEDDED_ACTIVITY_UPDATE_V2: ei,
        LOCAL_ACTIVITY_UPDATE: el,
        EMBEDDED_ACTIVITY_SET_CONFIG: ec,
        EMBEDDED_ACTIVITY_FETCH_SHELF: eu,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ep,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ed,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: ev,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: eS,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eI,
        CHANNEL_SELECT: eC,
        POPOUT_WINDOW_CLOSE: eN,
    }),
    ew = eR;
