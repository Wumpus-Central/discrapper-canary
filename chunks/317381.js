let i;
n.d(t, {
    ZP: () => eT,
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
    x = new Map(),
    L = new Map(),
    P = new Map();
function w(e, t) {
    return ''.concat(e, ':').concat(t);
}
let M = new Map(),
    k = new Map(),
    U = new Map(),
    G = new Map(),
    B = new Map(),
    Z = new Map(),
    F = new Map(),
    V = 21600000,
    j = new Map(),
    H = b.Ez.DISCONNECTED,
    Y = b.MI.RESIZABLE,
    W = T.GM.NORMAL;
function K(e) {
    return null != e ? e : O;
}
function z(e) {
    var t, n, i, r, a, s, o;
    let { location: l, applicationId: c, launchId: d, compositeInstanceId: f, participants: p } = e,
        h = (0, g.Z)(c);
    if (null == h) return;
    let m = (0, v.p)(l),
        y = null != m && null !== (n = L.get(m)) && void 0 !== n ? n : C,
        I = null != y && 0 === y.length,
        T = null !== (i = P.get(l.id)) && void 0 !== i ? i : C,
        b = T.find((e) => e.applicationId === c),
        A = p.map((e) => e.userId),
        N = u.default.getId(),
        R = A.some((e) => e === N),
        O = null === (t = p.find((e) => e.userId === N)) || void 0 === t ? void 0 : t.sessionId,
        k = p.some((e) => (0, E.J)(e)),
        U = D.get(c),
        G = M.get(w(null != m ? m : null, c)),
        B = null == G ? void 0 : G.launchParams,
        Z = {
            applicationId: c,
            location: l,
            launchId: d,
            compositeInstanceId: f,
            url: h,
            userIds: new Set(A),
            participants: p,
            referrerId: null !== (r = null == U ? void 0 : U.referrerId) && void 0 !== r ? r : null == B ? void 0 : B.referrerId,
            customId: null !== (a = null == U ? void 0 : U.customId) && void 0 !== a ? a : null == B ? void 0 : B.customId
        };
    R &&
        null != U &&
        D.set(U.applicationId, {
            ...U,
            ...Z
        });
    let F = !k;
    null != U && l.id === U.location.id && c === (null == U ? void 0 : U.applicationId) && ((!R && Array.from(U.userIds).some((e) => e === N)) || F)
        ? (D.delete(c), _.S.dispatch(S.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : R &&
          (null == U || U.applicationId !== c || U.location.id !== l.id) &&
          O === u.default.getSessionId() &&
          ee({
              applicationId: c,
              launchId: d,
              compositeInstanceId: f,
              location: l,
              participants: p,
              isFirstActivityInChannel: I,
              isStart: null == b,
              referrerId: Z.referrerId,
              customId: Z.customId,
              inviterUserId: null == G ? void 0 : G.inviterUserId
          });
    let V = T.filter((e) => e.applicationId !== c);
    if ((A.length > 0 && V.push(Z), P.set(l.id, V), null != m)) {
        let e = (null !== (s = L.get(m)) && void 0 !== s ? s : []).filter((e) => e.applicationId !== c),
            t = K((0, v.j)(l)),
            n = (null !== (o = x.get(t)) && void 0 !== o ? o : []).filter((e) => !(e.applicationId === c && e.location.id === l.id));
        A.length > 0 && (e.push(Z), n.push(Z)), L.set(m, e), x.set(t, n);
    }
}
function q(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: i, composite_instance_id: r, participants: a } = e;
            z({
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
function Q(e) {
    let { guilds: t } = e;
    L.clear(), x.clear(), P.clear(), t.forEach((e) => q(e));
}
function X(e) {
    let { guild: t } = e;
    q(t);
}
function J(e) {
    var t, n;
    let { channel: i } = e,
        r = null !== (t = L.get(i.id)) && void 0 !== t ? t : [];
    L.set(i.id, []);
    let a = K(i.guild_id),
        s = (null !== (n = x.get(a)) && void 0 !== n ? n : []).filter((e) => (0, v.p)(e.location) !== i.id);
    x.set(a, s),
        r.forEach((e) => {
            P.delete(e.location.id);
        });
}
function $(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: i, location: r, participants: a } = e;
    z({
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
function ee(e) {
    var t, n;
    let { applicationId: r, launchId: a, compositeInstanceId: o, location: l, participants: p, isFirstActivityInChannel: E, isStart: y, referrerId: T, customId: A, inviterUserId: N } = e,
        C = (0, g.Z)(r),
        R = u.default.getSessionId();
    if (null == C || null == R || (null === (t = D.get(r)) || void 0 === t ? void 0 : t.location.id) === l.id) return !1;
    let O = (0, v.p)(l),
        x = c.Z.getChannel(O),
        L = null == x ? void 0 : x.getGuildId();
    if (null == f.default.getCurrentUser() || (!(0, m.sq)() && null == L && !(null !== (n = null == x ? void 0 : x.isPrivate()) && void 0 !== n && n))) return !1;
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
            ? ((H = b.Ez.ACTIVITY_POPOUT_WINDOW),
              s.Z.wait(() => {
                  s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (H = O !== d.Z.getChannelId() || (0, I.Z)(O) ? b.Ez.PIP : b.Ez.PANEL),
        j.set(ev(l.id, r), Date.now());
}
function et(e) {
    let { applicationId: t } = e,
        n = D.get(t);
    D.delete(t), (null == n ? void 0 : n.location.id) === (null == i ? void 0 : i.id) && (i = void 0);
}
function en(e) {
    let { layout: t } = e;
    W = t;
}
function ei(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let i = D.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
    if (null == i) return !1;
    D.set(i.applicationId, { ...i });
}
function er(e) {
    let { applicationId: t, config: n } = e,
        i = D.get(t);
    null != i &&
        D.set(i.applicationId, {
            ...i,
            config: n
        });
}
function ea(e) {
    let { guildId: t } = e,
        n = K(t),
        i = U.get(n);
    U.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function es(e) {
    let { guildId: t } = e,
        n = K(t),
        i = U.get(n);
    U.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function eo(e) {
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
function el(e) {
    let { guildId: t, activities: n } = e,
        i = K(t);
    k.set(i, n);
    let r = Date.now();
    eo({
        activities: n,
        now: r
    }),
        U.set(i, {
            isFetching: !1,
            lastFetchTimestampMs: r
        });
}
let eu = () => {
    N.shouldShowNewActivityIndicator = !1;
};
function ec(e) {
    let { applicationId: t, componentId: n, commandOrigin: i, launchParams: r, channelId: a, inviterUserId: s } = e;
    M.set(w(a, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: s,
        launchParams: r
    }),
        (Y = i === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? b.MI.NO_CHAT : b.MI.RESIZABLE);
}
function ed(e) {
    let { applicationId: t, channelId: n } = e;
    N.everLaunchedActivities.add(t),
        e_({
            applicationId: t,
            channelId: n
        });
}
function ef(e) {
    let { applicationId: t, channelId: n } = e;
    e_({
        applicationId: t,
        channelId: n
    });
}
function e_(e) {
    let { applicationId: t, channelId: n } = e;
    M.delete(w(n, t));
}
function ep(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: i, gridLockState: r } = e;
    null == n ? G.delete(t) : G.set(t, n), null === i ? B.delete(t) : void 0 !== i && B.set(t, i), null === r ? Z.delete(t) : void 0 !== r && Z.set(t, r);
}
function eh(e) {
    let { activityPanelMode: t } = e;
    H = t;
}
function em(e) {
    let { focusedActivityLayout: t } = e;
    Y = t;
}
function eg(e) {
    let { applicationId: t, layoutMode: n } = e;
    F.set(t, n);
}
function eE(e) {
    let { channelId: t } = e;
    if (null == i) return;
    let n = (0, v.p)(i);
    null != n && n !== t && H === b.Ez.PANEL && (H = b.Ez.PIP);
}
function ev(e, t) {
    return ''.concat(e, ':').concat(t);
}
function ey(e) {
    let { key: t } = e;
    t === S.KJ3.ACTIVITY_POPOUT && (H = b.Ez.PIP);
}
class eI extends (r = a.ZP.PersistedStore) {
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
        return null == e ? null : null !== (t = Array.from(D.values()).find((t) => (0, v.p)(t.location) === e)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(D.values()).find((t) => t.location.id === e.id)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivities() {
        return D;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = x.get(e)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = L.get(e)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null !== (t = P.get(e.id)) && void 0 !== t ? t : C;
    }
    getEmbeddedActivitiesByChannel() {
        return L;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = j.get(ev(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return M.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = K(e);
        return null !== (t = k.get(n)) && void 0 !== t ? t : R;
    }
    getShelfFetchStatus(e) {
        let t = K(e);
        return U.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let i = K(e),
            r = null !== (t = U.get(i)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == r ? void 0 : r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > V;
        return !(null == r ? void 0 : r.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return G.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = B.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = Z.get(e)) && void 0 !== t ? t : B.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return F.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != i) return (0, v.p)(i);
    }
    getConnectedActivityLocation() {
        return i;
    }
    getActivityPanelMode() {
        return H;
    }
    getFocusedLayout() {
        return Y;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null !== (e = this.getSelfEmbeddedActivityForLocation(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [i, r] of P)
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
        if (null != e && null != t) return M.get(w(t, e));
    }
    getLaunchStates() {
        return M;
    }
    getActivityPopoutWindowLayout() {
        return W;
    }
}
A(eI, 'displayName', 'EmbeddedActivitiesStore'),
    A(eI, 'persistKey', 'EmbeddedActivities'),
    A(eI, 'migrations', [
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
let eT = new eI(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eg,
    CONNECTION_OPEN_SUPPLEMENTAL: Q,
    GUILD_CREATE: X,
    CHANNEL_DELETE: J,
    EMBEDDED_ACTIVITY_LAUNCH_START: ec,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ed,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: ef,
    EMBEDDED_ACTIVITY_CLOSE: et,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: en,
    EMBEDDED_ACTIVITY_UPDATE_V2: $,
    LOCAL_ACTIVITY_UPDATE: ei,
    EMBEDDED_ACTIVITY_SET_CONFIG: er,
    EMBEDDED_ACTIVITY_FETCH_SHELF: ea,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: el,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: es,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: eu,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: ep,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: eh,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: em,
    CHANNEL_SELECT: eE,
    POPOUT_WINDOW_CLOSE: ey
});
