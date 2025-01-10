let i;
r.d(n, {
    i6: function () {
        return D;
    }
});
var a,
    s = r(47120);
var o = r(653041);
var l = r(51350);
var u = r(442837),
    c = r(570140),
    d = r(911969),
    f = r(895924),
    _ = r(314897),
    h = r(592125),
    p = r(944486),
    m = r(594174),
    g = r(585483),
    E = r(358085),
    v = r(636449),
    I = r(155268),
    T = r(413458),
    b = r(16609),
    y = r(761122),
    S = r(917107),
    A = r(701488),
    N = r(918559),
    C = r(981631);
function R(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let O = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    D = [],
    L = [],
    x = '0',
    w = new Map(),
    P = new Map(),
    M = new Map(),
    k = new Map();
function U(e, n) {
    return ''.concat(e, ':').concat(n);
}
let B = new Map(),
    G = new Map(),
    F = new Map(),
    Z = new Map(),
    V = new Map(),
    j = new Map(),
    H = new Map(),
    Y = 21600000,
    W = new Map();
let K = N.Ez.DISCONNECTED,
    z = N.MI.RESIZABLE,
    q = A.GM.NORMAL;
function Q(e) {
    return null != e ? e : x;
}
function X(e) {
    var n, r, i, a, s, o, l, u;
    let { location: c, applicationId: d, launchId: f, compositeInstanceId: h, participants: p } = e,
        m = (0, I.Z)(d);
    if (null == m) return;
    let E = (0, b.p)(c),
        v = null != E && null !== (i = M.get(E)) && void 0 !== i ? i : D,
        y = null != v && 0 === v.length,
        S = null !== (a = k.get(c.id)) && void 0 !== a ? a : D,
        A = S.find((e) => e.applicationId === d),
        N = p.map((e) => e.userId),
        R = _.default.getId(),
        O = N.some((e) => e === R),
        L = null === (n = p.find((e) => e.userId === R)) || void 0 === n ? void 0 : n.sessionId,
        x = p.some((e) => (0, T.J)(e)),
        G = w.get(d),
        F = null === (r = B.get(U(null != E ? E : null, d))) || void 0 === r ? void 0 : r.launchParams,
        Z = {
            applicationId: d,
            location: c,
            launchId: f,
            compositeInstanceId: h,
            url: m,
            userIds: new Set(N),
            participants: p,
            referrerId: null !== (s = null == G ? void 0 : G.referrerId) && void 0 !== s ? s : null == F ? void 0 : F.referrerId,
            customId: null !== (o = null == G ? void 0 : G.customId) && void 0 !== o ? o : null == F ? void 0 : F.customId
        };
    O &&
        null != G &&
        w.set(G.applicationId, {
            ...G,
            ...Z
        });
    let V = !x;
    null != G && c.id === G.location.id && d === (null == G ? void 0 : G.applicationId) && ((!O && Array.from(G.userIds).some((e) => e === R)) || V)
        ? (w.delete(d), g.S.dispatch(C.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : O &&
          (null == G || G.applicationId !== d || G.location.id !== c.id) &&
          L === _.default.getSessionId() &&
          er({
              applicationId: d,
              launchId: f,
              compositeInstanceId: h,
              location: c,
              participants: p,
              isFirstActivityInChannel: y,
              isStart: null == A,
              referrerId: Z.referrerId,
              customId: Z.customId
          });
    let j = S.filter((e) => e.applicationId !== d);
    if ((N.length > 0 && j.push(Z), k.set(c.id, j), null != E)) {
        let e = (null !== (l = M.get(E)) && void 0 !== l ? l : []).filter((e) => e.applicationId !== d),
            n = Q((0, b.j)(c)),
            r = (null !== (u = P.get(n)) && void 0 !== u ? u : []).filter((e) => !(e.applicationId === d && e.location.id === c.id));
        N.length > 0 && (e.push(Z), r.push(Z)), M.set(E, e), P.set(n, r);
    }
}
function J(e) {
    let n = e.activity_instances;
    null == n ||
        n.forEach((e) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: s } = e;
            X({
                location: n,
                applicationId: r,
                launchId: i,
                compositeInstanceId: a,
                participants: s.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function $(e) {
    let { guilds: n } = e;
    M.clear(), P.clear(), k.clear(), n.forEach((e) => J(e));
}
function ee(e) {
    let { guild: n } = e;
    J(n);
}
function et(e) {
    var n, r;
    let { channel: i } = e,
        a = null !== (n = M.get(i.id)) && void 0 !== n ? n : [];
    M.set(i.id, []);
    let s = Q(i.guild_id),
        o = (null !== (r = P.get(s)) && void 0 !== r ? r : []).filter((e) => (0, b.p)(e.location) !== i.id);
    P.set(s, o),
        a.forEach((e) => {
            k.delete(e.location.id);
        });
}
function en(e) {
    let { applicationId: n, launchId: r, compositeInstanceId: i, location: a, participants: s } = e;
    X({
        location: a,
        applicationId: n,
        launchId: r,
        compositeInstanceId: i,
        participants: s.map((e) => ({
            userId: e.user_id,
            sessionId: e.session_id,
            nonce: e.nonce
        }))
    });
}
function er(e) {
    var n, r;
    let { applicationId: a, launchId: s, compositeInstanceId: o, location: l, participants: u, isFirstActivityInChannel: d, isStart: f, referrerId: E, customId: T } = e,
        y = (0, I.Z)(a),
        A = _.default.getSessionId();
    if (null == y || null == A || (null === (n = w.get(a)) || void 0 === n ? void 0 : n.location.id) === l.id) return !1;
    let R = (0, b.p)(l),
        O = h.Z.getChannel(R),
        D = null == O ? void 0 : O.getGuildId(),
        L = m.default.getCurrentUser();
    if ((null == D && !(null !== (r = null == O ? void 0 : O.isPrivate()) && void 0 !== r && r)) || null == L) return !1;
    i = l;
    let x = {
        applicationId: a,
        url: y,
        userIds: new Set(u.map((e) => e.userId)),
        participants: u,
        connectedSince: Date.now(),
        launchId: s,
        compositeInstanceId: o,
        location: l,
        referrerId: E,
        customId: T
    };
    w.set(a, x),
        g.S.dispatch(C.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: a,
            isFirstActivityInChannel: d,
            isStart: f,
            participants: u,
            embeddedActivity: x
        }),
        (0, v.R)()
            ? ((K = N.Ez.ACTIVITY_POPOUT_WINDOW),
              c.Z.wait(() => {
                  c.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (K = R !== p.Z.getChannelId() || (0, S.Z)(R) ? N.Ez.PIP : N.Ez.PANEL),
        W.set(eb(l.id, a), Date.now());
}
function ei(e) {
    let { applicationId: n } = e,
        r = w.get(n);
    w.delete(n), (null == r ? void 0 : r.location.id) === (null == i ? void 0 : i.id) && (i = void 0);
}
function ea(e) {
    let { layout: n } = e;
    q = n;
}
function es(e) {
    var n;
    let { activity: r } = e;
    if (null == r) return !1;
    let i = w.get(null !== (n = r.application_id) && void 0 !== n ? n : '');
    if (null == i) return !1;
    w.set(i.applicationId, { ...i });
}
function eo(e) {
    let { applicationId: n, config: r } = e,
        i = w.get(n);
    null != i &&
        w.set(i.applicationId, {
            ...i,
            config: r
        });
}
function el(e) {
    let { guildId: n } = e,
        r = Q(n),
        i = F.get(r);
    F.set(r, {
        isFetching: !0,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function eu(e) {
    let { guildId: n } = e,
        r = Q(n),
        i = F.get(r);
    F.set(r, {
        isFetching: !1,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function ec(e) {
    let { activities: n, now: r } = e;
    n.forEach((e) => {
        let n = e.application_id,
            i = e.client_platform_config[(0, y.Z)((0, E.getOS)())];
        if (null == i.label_until) return;
        let a = new Date(i.label_until).getTime();
        if (a < r) return;
        let s = O.seenNewActivities[n],
            o = Object.hasOwn(O.seenNewActivities, n),
            l = new Date(s).getTime() < a;
        i.label_type === d.ww.NEW && (!o || l) && ((O.shouldShowNewActivityIndicator = !0), (O.seenNewActivities[n] = i.label_until));
        let u = O.seenUpdatedActivities[n],
            c = Object.hasOwn(O.seenUpdatedActivities, n),
            f = new Date(u).getTime() < a;
        i.label_type === d.ww.UPDATED && (!c || f) && ((O.shouldShowNewActivityIndicator = !0), (O.seenUpdatedActivities[n] = i.label_until));
    });
}
function ed(e) {
    let { guildId: n, activities: r } = e,
        i = Q(n);
    G.set(i, r);
    let a = Date.now();
    ec({
        activities: r,
        now: a
    }),
        F.set(i, {
            isFetching: !1,
            lastFetchTimestampMs: a
        });
}
let ef = () => {
    O.shouldShowNewActivityIndicator = !1;
};
function e_(e) {
    let { applicationId: n, componentId: r, commandOrigin: i, launchParams: a, channelId: s } = e;
    B.set(U(s, n), {
        isLaunching: !0,
        componentId: r,
        launchParams: a
    }),
        (z = i === f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? N.MI.NO_CHAT : N.MI.RESIZABLE);
}
function eh(e) {
    let { applicationId: n, channelId: r } = e;
    O.everLaunchedActivities.add(n),
        em({
            applicationId: n,
            channelId: r
        });
}
function ep(e) {
    let { applicationId: n, channelId: r } = e;
    em({
        applicationId: n,
        channelId: r
    });
}
function em(e) {
    let { applicationId: n, channelId: r } = e;
    B.delete(U(r, n));
}
function eg(e) {
    let { applicationId: n, lockState: r, pictureInPictureLockState: i, gridLockState: a } = e;
    null == r ? Z.delete(n) : Z.set(n, r), null === i ? V.delete(n) : void 0 !== i && V.set(n, i), null === a ? j.delete(n) : void 0 !== a && j.set(n, a);
}
function eE(e) {
    let { activityPanelMode: n } = e;
    K = n;
}
function ev(e) {
    let { focusedActivityLayout: n } = e;
    z = n;
}
function eI(e) {
    let { applicationId: n, layoutMode: r } = e;
    H.set(n, r);
}
function eT(e) {
    let { channelId: n } = e;
    if (null == i) return;
    let r = (0, b.p)(i);
    if (null != r) r !== n && K === N.Ez.PANEL && (K = N.Ez.PIP);
}
function eb(e, n) {
    return ''.concat(e, ':').concat(n);
}
function ey(e) {
    let { key: n } = e;
    n === C.KJ3.ACTIVITY_POPOUT && (K = N.Ez.PIP);
}
class eS extends (a = u.ZP.PersistedStore) {
    initialize(e) {
        var n;
        let r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
        null != e &&
            (O = {
                ...e,
                everLaunchedActivities: r
            });
    }
    getState() {
        return O;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var n;
        return null == e ? null : null !== (n = Array.from(w.values()).find((n) => (0, b.p)(n.location) === e)) && void 0 !== n ? n : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var n;
        return null == e ? null : null !== (n = Array.from(w.values()).find((n) => n.location.id === e.id)) && void 0 !== n ? n : null;
    }
    getSelfEmbeddedActivities() {
        return w;
    }
    getEmbeddedActivitiesForGuild(e) {
        var n;
        return null !== (n = P.get(e)) && void 0 !== n ? n : D;
    }
    getEmbeddedActivitiesForChannel(e) {
        var n;
        return null !== (n = M.get(e)) && void 0 !== n ? n : D;
    }
    getEmbeddedActivitiesForLocation(e) {
        var n;
        return null !== (n = k.get(e.id)) && void 0 !== n ? n : D;
    }
    getEmbeddedActivitiesByChannel() {
        return M;
    }
    getEmbeddedActivityDurationMs(e, n) {
        let r = W.get(eb(e, n));
        return null == r ? null : Date.now() - r;
    }
    isLaunchingActivity() {
        return B.size > 0;
    }
    getShelfActivities(e) {
        var n;
        let r = Q(e);
        return null !== (n = G.get(r)) && void 0 !== n ? n : L;
    }
    getShelfFetchStatus(e) {
        let n = Q(e);
        return F.get(n);
    }
    shouldFetchShelf(e) {
        var n, r;
        let i = Q(e),
            a = null !== (n = F.get(i)) && void 0 !== n ? n : { isFetching: !1 },
            s = Date.now() - (null !== (r = null == a ? void 0 : a.lastFetchTimestampMs) && void 0 !== r ? r : 0) > Y;
        return !(null == a ? void 0 : a.isFetching) && s;
    }
    getOrientationLockStateForApp(e) {
        return Z.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var n;
        return null !== (n = V.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var n, r;
        return null !== (r = null !== (n = j.get(e)) && void 0 !== n ? n : V.get(e)) && void 0 !== r ? r : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return H.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != i) return (0, b.p)(i);
    }
    getConnectedActivityLocation() {
        return i;
    }
    getActivityPanelMode() {
        return K;
    }
    getFocusedLayout() {
        return z;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let n = this.getConnectedActivityChannelId();
        if (null != n) return null !== (e = this.getSelfEmbeddedActivityForChannel(n)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, n) {
        let r;
        if (void 0 !== n) {
            s: for (let [i, a] of M)
                for (let i of a)
                    if (i.applicationId === n && i.userIds.has(e)) {
                        r = i;
                        break s;
                    }
            return r;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return O.everLaunchedActivities.has(e);
    }
    getLaunchState(e, n) {
        if (null != e && null != n) return B.get(U(n, e));
    }
    getLaunchStates() {
        return B;
    }
    getActivityPopoutWindowLayout() {
        return q;
    }
}
R(eS, 'displayName', 'EmbeddedActivitiesStore'),
    R(eS, 'persistKey', 'EmbeddedActivities'),
    R(eS, 'migrations', [
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
            var n;
            let r = new Set(null !== (n = e.everLaunchedActivities) && void 0 !== n ? n : []);
            return {
                ...e,
                everLaunchedActivities: r
            };
        },
        (e) => (delete e.usersHavePlayedByApp, { ...e })
    ]);
let eA = new eS(c.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eI,
    CONNECTION_OPEN_SUPPLEMENTAL: $,
    GUILD_CREATE: ee,
    CHANNEL_DELETE: et,
    EMBEDDED_ACTIVITY_LAUNCH_START: e_,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eh,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: ep,
    EMBEDDED_ACTIVITY_CLOSE: ei,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: ea,
    EMBEDDED_ACTIVITY_UPDATE_V2: en,
    LOCAL_ACTIVITY_UPDATE: es,
    EMBEDDED_ACTIVITY_SET_CONFIG: eo,
    EMBEDDED_ACTIVITY_FETCH_SHELF: el,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ed,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eu,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: ef,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eg,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: eE,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: ev,
    CHANNEL_SELECT: eT,
    POPOUT_WINDOW_CLOSE: ey
});
n.ZP = eA;
