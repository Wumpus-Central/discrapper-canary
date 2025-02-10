let i;
n.d(t, {
    ZP: () => eb,
    i6: () => C
}),
    n(47120),
    n(653041),
    n(51350);
var r,
    a = n(442837),
    s = n(570140),
    o = n(911969),
    l = n(895924),
    u = n(314897),
    c = n(592125),
    d = n(944486),
    f = n(594174),
    _ = n(585483),
    p = n(358085),
    h = n(636449),
    m = n(774226),
    g = n(155268),
    E = n(413458),
    v = n(16609),
    y = n(761122),
    I = n(917107),
    T = n(701488),
    b = n(918559),
    S = n(981631);
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
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    C = [],
    R = [],
    O = '0',
    D = new Map(),
    L = new Map(),
    x = new Map(),
    P = new Map(),
    w = new Map();
function M(e, t) {
    return ''.concat(e, ':').concat(t);
}
let k = new Map(),
    U = new Map(),
    G = new Map(),
    B = new Map(),
    Z = new Map(),
    F = new Map(),
    V = new Map(),
    j = 21600000,
    H = new Map(),
    Y = b.Ez.DISCONNECTED,
    W = b.MI.RESIZABLE,
    K = T.GM.NORMAL;
function z(e) {
    return null != e ? e : O;
}
function q(e) {
    var t, n, i, r, a, s, o, l;
    let { location: c, applicationId: d, launchId: f, compositeInstanceId: p, participants: h } = e,
        m = (0, g.Z)(d);
    if (null == m) return;
    let y = (0, v.pY)(c),
        I = null != y && null !== (n = x.get(y)) && void 0 !== n ? n : C,
        T = null != I && 0 === I.length,
        b = null !== (i = w.get(c.id)) && void 0 !== i ? i : C,
        A = b.find((e) => e.applicationId === d),
        N = h.map((e) => e.userId),
        R = u.default.getId(),
        O = N.some((e) => e === R),
        U = null === (t = h.find((e) => e.userId === R)) || void 0 === t ? void 0 : t.sessionId,
        G = h.some((e) => (0, E.J)(e)),
        B = D.get(d),
        Z = k.get(M(null != y ? y : null, d)),
        F = null == Z ? void 0 : Z.launchParams,
        V = {
            applicationId: d,
            location: c,
            launchId: f,
            compositeInstanceId: p,
            url: m,
            userIds: new Set(N),
            participants: h,
            referrerId: null !== (r = null == B ? void 0 : B.referrerId) && void 0 !== r ? r : null == F ? void 0 : F.referrerId,
            customId: null !== (a = null == B ? void 0 : B.customId) && void 0 !== a ? a : null == F ? void 0 : F.customId
        };
    O &&
        null != B &&
        D.set(B.applicationId, {
            ...B,
            ...V
        });
    let j = !G;
    null != B && c.id === B.location.id && d === (null == B ? void 0 : B.applicationId) && ((!O && Array.from(B.userIds).some((e) => e === R)) || j)
        ? (D.delete(d), _.S.dispatch(S.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : O &&
          (null == B || B.applicationId !== d || B.location.id !== c.id) &&
          U === u.default.getSessionId() &&
          et({
              applicationId: d,
              launchId: f,
              compositeInstanceId: p,
              location: c,
              participants: h,
              isFirstActivityInChannel: T,
              isStart: null == A,
              referrerId: V.referrerId,
              customId: V.customId,
              inviterUserId: null == Z ? void 0 : Z.inviterUserId
          });
    let H = b.filter((e) => e.applicationId !== d);
    N.length > 0 && H.push(V), w.set(c.id, H);
    let Y = (0, v.wq)(c);
    if (null != Y) {
        let e = (null !== (s = P.get(Y)) && void 0 !== s ? s : []).filter((e) => e.location.id !== c.id);
        N.length > 0 && e.push(V), P.set(Y, e);
    }
    if (null != y) {
        let e = (null !== (o = x.get(y)) && void 0 !== o ? o : []).filter((e) => e.applicationId !== d),
            t = z((0, v.jS)(c)),
            n = (null !== (l = L.get(t)) && void 0 !== l ? l : []).filter((e) => !(e.applicationId === d && e.location.id === c.id));
        N.length > 0 && (e.push(V), n.push(V)), x.set(y, e), L.set(t, n);
    }
}
function Q(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: i, composite_instance_id: r, participants: a } = e;
            q({
                location: t,
                applicationId: n,
                launchId: i,
                compositeInstanceId: r,
                participants: a.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function X(e) {
    let { guilds: t } = e;
    x.clear(), L.clear(), w.clear(), P.clear(), t.forEach((e) => Q(e));
}
function J(e) {
    let { guild: t } = e;
    Q(t);
}
function $(e) {
    var t, n;
    let { channel: i } = e,
        r = null !== (t = x.get(i.id)) && void 0 !== t ? t : [];
    x.set(i.id, []);
    let a = z(i.guild_id),
        s = (null !== (n = L.get(a)) && void 0 !== n ? n : []).filter((e) => (0, v.pY)(e.location) !== i.id);
    L.set(a, s),
        r.forEach((e) => {
            w.delete(e.location.id);
        }),
        P.set(i.id, []);
}
function ee(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: i, location: r, participants: a } = e;
    q({
        location: r,
        applicationId: t,
        launchId: n,
        compositeInstanceId: i,
        participants: a.map((e) => ({
            userId: e.user_id,
            sessionId: e.session_id,
            nonce: e.nonce
        }))
    });
}
function et(e) {
    var t, n;
    let { applicationId: r, launchId: a, compositeInstanceId: o, location: l, participants: p, isFirstActivityInChannel: E, isStart: y, referrerId: T, customId: A, inviterUserId: N } = e,
        C = (0, g.Z)(r),
        R = u.default.getSessionId();
    if (null == C || null == R || (null === (t = D.get(r)) || void 0 === t ? void 0 : t.location.id) === l.id) return !1;
    let O = (0, v.pY)(l),
        L = c.Z.getChannel(O),
        x = null == L ? void 0 : L.getGuildId();
    if (null == f.default.getCurrentUser() || (!(0, m.sq)() && null == x && !(null !== (n = null == L ? void 0 : L.isPrivate()) && void 0 !== n && n))) return !1;
    i = l;
    let P = {
        applicationId: r,
        url: C,
        userIds: new Set(p.map((e) => e.userId)),
        participants: p,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: o,
        location: l,
        referrerId: T,
        customId: A
    };
    D.set(r, P),
        _.S.dispatch(S.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: r,
            isFirstActivityInChannel: E,
            isStart: y,
            participants: p,
            embeddedActivity: P,
            inviterUserId: N
        }),
        (0, h.R)()
            ? ((Y = b.Ez.ACTIVITY_POPOUT_WINDOW),
              s.Z.wait(() => {
                  s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (Y = O !== d.Z.getChannelId() || (0, I.Z)(O) ? b.Ez.PIP : b.Ez.PANEL),
        H.set(ey(l.id, r), Date.now());
}
function en(e) {
    let { applicationId: t } = e,
        n = D.get(t);
    D.delete(t), (null == n ? void 0 : n.location.id) === (null == i ? void 0 : i.id) && (i = void 0);
}
function ei(e) {
    let { layout: t } = e;
    K = t;
}
function er(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let i = D.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
    if (null == i) return !1;
    D.set(i.applicationId, { ...i });
}
function ea(e) {
    let { applicationId: t, config: n } = e,
        i = D.get(t);
    null != i &&
        D.set(i.applicationId, {
            ...i,
            config: n
        });
}
function es(e) {
    let { guildId: t } = e,
        n = z(t),
        i = G.get(n);
    G.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function eo(e) {
    let { guildId: t } = e,
        n = z(t),
        i = G.get(n);
    G.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function el(e) {
    let { activities: t, now: n } = e;
    t.forEach((e) => {
        let t = e.application_id,
            i = e.client_platform_config[(0, y.Z)((0, p.getOS)())];
        if (null == i.label_until) return;
        let r = new Date(i.label_until).getTime();
        if (r < n) return;
        let a = N.seenNewActivities[t],
            s = Object.hasOwn(N.seenNewActivities, t),
            l = new Date(a).getTime() < r;
        i.label_type === o.ww.NEW && (!s || l) && ((N.shouldShowNewActivityIndicator = !0), (N.seenNewActivities[t] = i.label_until));
        let u = N.seenUpdatedActivities[t],
            c = Object.hasOwn(N.seenUpdatedActivities, t),
            d = new Date(u).getTime() < r;
        i.label_type === o.ww.UPDATED && (!c || d) && ((N.shouldShowNewActivityIndicator = !0), (N.seenUpdatedActivities[t] = i.label_until));
    });
}
function eu(e) {
    let { guildId: t, activities: n } = e,
        i = z(t);
    U.set(i, n);
    let r = Date.now();
    el({
        activities: n,
        now: r
    }),
        G.set(i, {
            isFetching: !1,
            lastFetchTimestampMs: r
        });
}
let ec = () => {
    N.shouldShowNewActivityIndicator = !1;
};
function ed(e) {
    let { applicationId: t, componentId: n, commandOrigin: i, launchParams: r, channelId: a, inviterUserId: s } = e;
    k.set(M(a, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: s,
        launchParams: r
    }),
        (W = i === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? b.MI.NO_CHAT : b.MI.RESIZABLE);
}
function ef(e) {
    let { applicationId: t, channelId: n } = e;
    N.everLaunchedActivities.add(t),
        ep({
            applicationId: t,
            channelId: n
        });
}
function e_(e) {
    let { applicationId: t, channelId: n } = e;
    ep({
        applicationId: t,
        channelId: n
    });
}
function ep(e) {
    let { applicationId: t, channelId: n } = e;
    k.delete(M(n, t));
}
function eh(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: i, gridLockState: r } = e;
    null == n ? B.delete(t) : B.set(t, n), null === i ? Z.delete(t) : void 0 !== i && Z.set(t, i), null === r ? F.delete(t) : void 0 !== r && F.set(t, r);
}
function em(e) {
    let { activityPanelMode: t } = e;
    Y = t;
}
function eg(e) {
    let { focusedActivityLayout: t } = e;
    W = t;
}
function eE(e) {
    let { applicationId: t, layoutMode: n } = e;
    V.set(t, n);
}
function ev(e) {
    let { channelId: t } = e;
    if (null == i) return;
    let n = (0, v.pY)(i);
    null != n && n !== t && Y === b.Ez.PANEL && (Y = b.Ez.PIP);
}
function ey(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eI(e) {
    let { key: t } = e;
    t === S.KJ3.ACTIVITY_POPOUT && (Y = b.Ez.PIP);
}
class eT extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e &&
            (N = {
                ...e,
                everLaunchedActivities: n
            });
    }
    getState() {
        return N;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(D.values()).find((t) => (0, v.pY)(t.location) === e)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(D.values()).find((t) => t.location.id === e.id)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivitiesForStartingChannel(e) {
        if (null != location) return Array.from(D.values()).find((t) => (0, v.wq)(t.location) === e);
    }
    getSelfEmbeddedActivities() {
        return D;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = L.get(e)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = x.get(e)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null !== (t = w.get(e.id)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null !== (t = P.get(e)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesByChannel() {
        return x;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = H.get(ey(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return k.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = z(e);
        return null !== (t = U.get(n)) && void 0 !== t ? t : R;
    }
    getShelfFetchStatus(e) {
        let t = z(e);
        return G.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let i = z(e),
            r = null !== (t = G.get(i)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == r ? void 0 : r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > j;
        return !(null == r ? void 0 : r.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return B.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = Z.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = F.get(e)) && void 0 !== t ? t : Z.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return V.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != i) return (0, v.pY)(i);
    }
    getConnectedActivityLocation() {
        return i;
    }
    getActivityPanelMode() {
        return Y;
    }
    getFocusedLayout() {
        return W;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null !== (e = this.getSelfEmbeddedActivityForLocation(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [i, r] of w)
                for (let i of r)
                    if (i.applicationId === t && i.userIds.has(e)) {
                        n = i;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return N.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return k.get(M(t, e));
    }
    getLaunchStates() {
        return k;
    }
    getActivityPopoutWindowLayout() {
        return K;
    }
}
A(eT, 'displayName', 'EmbeddedActivitiesStore'),
    A(eT, 'persistKey', 'EmbeddedActivities'),
    A(eT, 'migrations', [
        (e) => ({
            ...e,
            seenFeaturedActivities: [],
            shouldShowNewActivityIndicator: !1
        }),
        (e) => (delete e.seenFeaturedActivities, { ...e }),
        (e) => (delete e.seenActivities, { ...e }),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, { ...e }),
        (e) => ({
            ...e,
            seenNewActivities: {},
            seenUpdatedActivities: {}
        }),
        (e) => {
            var t;
            let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
            return {
                ...e,
                everLaunchedActivities: n
            };
        },
        (e) => (delete e.usersHavePlayedByApp, { ...e })
    ]);
let eb = new eT(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eE,
    CONNECTION_OPEN_SUPPLEMENTAL: X,
    GUILD_CREATE: J,
    CHANNEL_DELETE: $,
    EMBEDDED_ACTIVITY_LAUNCH_START: ed,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ef,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: e_,
    EMBEDDED_ACTIVITY_CLOSE: en,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: ei,
    EMBEDDED_ACTIVITY_UPDATE_V2: ee,
    LOCAL_ACTIVITY_UPDATE: er,
    EMBEDDED_ACTIVITY_SET_CONFIG: ea,
    EMBEDDED_ACTIVITY_FETCH_SHELF: es,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: eu,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eo,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: ec,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eh,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: em,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eg,
    CHANNEL_SELECT: ev,
    POPOUT_WINDOW_CLOSE: eI
});
