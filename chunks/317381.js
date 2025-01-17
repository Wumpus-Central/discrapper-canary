let i;
r.d(n, {
    i6: function () {
        return L;
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
    I = r(774226),
    T = r(155268),
    b = r(413458),
    y = r(16609),
    S = r(761122),
    A = r(917107),
    N = r(701488),
    C = r(918559),
    R = r(981631);
function O(e, n, r) {
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
let D = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    L = [],
    x = [],
    w = '0',
    P = new Map(),
    M = new Map(),
    k = new Map(),
    U = new Map();
function B(e, n) {
    return ''.concat(e, ':').concat(n);
}
let G = new Map(),
    F = new Map(),
    Z = new Map(),
    V = new Map(),
    j = new Map(),
    H = new Map(),
    Y = new Map(),
    W = 21600000,
    K = new Map();
let z = C.Ez.DISCONNECTED,
    q = C.MI.RESIZABLE,
    Q = N.GM.NORMAL;
function X(e) {
    return null != e ? e : w;
}
function J(e) {
    var n, r, i, a, s, o, l;
    let { location: u, applicationId: c, launchId: d, compositeInstanceId: f, participants: h } = e,
        p = (0, T.Z)(c);
    if (null == p) return;
    let m = (0, y.p)(u),
        E = null != m && null !== (r = k.get(m)) && void 0 !== r ? r : L,
        v = null != E && 0 === E.length,
        I = null !== (i = U.get(u.id)) && void 0 !== i ? i : L,
        S = I.find((e) => e.applicationId === c),
        A = h.map((e) => e.userId),
        N = _.default.getId(),
        C = A.some((e) => e === N),
        O = null === (n = h.find((e) => e.userId === N)) || void 0 === n ? void 0 : n.sessionId,
        D = h.some((e) => (0, b.J)(e)),
        x = P.get(c),
        w = G.get(B(null != m ? m : null, c)),
        F = null == w ? void 0 : w.launchParams,
        Z = {
            applicationId: c,
            location: u,
            launchId: d,
            compositeInstanceId: f,
            url: p,
            userIds: new Set(A),
            participants: h,
            referrerId: null !== (a = null == x ? void 0 : x.referrerId) && void 0 !== a ? a : null == F ? void 0 : F.referrerId,
            customId: null !== (s = null == x ? void 0 : x.customId) && void 0 !== s ? s : null == F ? void 0 : F.customId
        };
    C &&
        null != x &&
        P.set(x.applicationId, {
            ...x,
            ...Z
        });
    let V = !D;
    null != x && u.id === x.location.id && c === (null == x ? void 0 : x.applicationId) && ((!C && Array.from(x.userIds).some((e) => e === N)) || V)
        ? (P.delete(c), g.S.dispatch(R.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : C &&
          (null == x || x.applicationId !== c || x.location.id !== u.id) &&
          O === _.default.getSessionId() &&
          ei({
              applicationId: c,
              launchId: d,
              compositeInstanceId: f,
              location: u,
              participants: h,
              isFirstActivityInChannel: v,
              isStart: null == S,
              referrerId: Z.referrerId,
              customId: Z.customId,
              inviterUserId: null == w ? void 0 : w.inviterUserId
          });
    let j = I.filter((e) => e.applicationId !== c);
    if ((A.length > 0 && j.push(Z), U.set(u.id, j), null != m)) {
        let e = (null !== (o = k.get(m)) && void 0 !== o ? o : []).filter((e) => e.applicationId !== c),
            n = X((0, y.j)(u)),
            r = (null !== (l = M.get(n)) && void 0 !== l ? l : []).filter((e) => !(e.applicationId === c && e.location.id === u.id));
        A.length > 0 && (e.push(Z), r.push(Z)), k.set(m, e), M.set(n, r);
    }
}
function $(e) {
    let n = e.activity_instances;
    null == n ||
        n.forEach((e) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: s } = e;
            J({
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
function ee(e) {
    let { guilds: n } = e;
    k.clear(), M.clear(), U.clear(), n.forEach((e) => $(e));
}
function et(e) {
    let { guild: n } = e;
    $(n);
}
function en(e) {
    var n, r;
    let { channel: i } = e,
        a = null !== (n = k.get(i.id)) && void 0 !== n ? n : [];
    k.set(i.id, []);
    let s = X(i.guild_id),
        o = (null !== (r = M.get(s)) && void 0 !== r ? r : []).filter((e) => (0, y.p)(e.location) !== i.id);
    M.set(s, o),
        a.forEach((e) => {
            U.delete(e.location.id);
        });
}
function er(e) {
    let { applicationId: n, launchId: r, compositeInstanceId: i, location: a, participants: s } = e;
    J({
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
function ei(e) {
    var n, r;
    let { applicationId: a, launchId: s, compositeInstanceId: o, location: l, participants: u, isFirstActivityInChannel: d, isStart: f, referrerId: E, customId: b, inviterUserId: S } = e,
        N = (0, T.Z)(a),
        O = _.default.getSessionId();
    if (null == N || null == O || (null === (n = P.get(a)) || void 0 === n ? void 0 : n.location.id) === l.id) return !1;
    let D = (0, y.p)(l),
        L = h.Z.getChannel(D),
        x = null == L ? void 0 : L.getGuildId();
    if (null == m.default.getCurrentUser() || (!(0, I.s)() && null == x && !(null !== (r = null == L ? void 0 : L.isPrivate()) && void 0 !== r && r))) return !1;
    i = l;
    let w = {
        applicationId: a,
        url: N,
        userIds: new Set(u.map((e) => e.userId)),
        participants: u,
        connectedSince: Date.now(),
        launchId: s,
        compositeInstanceId: o,
        location: l,
        referrerId: E,
        customId: b
    };
    P.set(a, w),
        g.S.dispatch(R.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: a,
            isFirstActivityInChannel: d,
            isStart: f,
            participants: u,
            embeddedActivity: w,
            inviterUserId: S
        }),
        (0, v.R)()
            ? ((z = C.Ez.ACTIVITY_POPOUT_WINDOW),
              c.Z.wait(() => {
                  c.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (z = D !== p.Z.getChannelId() || (0, A.Z)(D) ? C.Ez.PIP : C.Ez.PANEL),
        K.set(ey(l.id, a), Date.now());
}
function ea(e) {
    let { applicationId: n } = e,
        r = P.get(n);
    P.delete(n), (null == r ? void 0 : r.location.id) === (null == i ? void 0 : i.id) && (i = void 0);
}
function es(e) {
    let { layout: n } = e;
    Q = n;
}
function eo(e) {
    var n;
    let { activity: r } = e;
    if (null == r) return !1;
    let i = P.get(null !== (n = r.application_id) && void 0 !== n ? n : '');
    if (null == i) return !1;
    P.set(i.applicationId, { ...i });
}
function el(e) {
    let { applicationId: n, config: r } = e,
        i = P.get(n);
    null != i &&
        P.set(i.applicationId, {
            ...i,
            config: r
        });
}
function eu(e) {
    let { guildId: n } = e,
        r = X(n),
        i = Z.get(r);
    Z.set(r, {
        isFetching: !0,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function ec(e) {
    let { guildId: n } = e,
        r = X(n),
        i = Z.get(r);
    Z.set(r, {
        isFetching: !1,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function ed(e) {
    let { activities: n, now: r } = e;
    n.forEach((e) => {
        let n = e.application_id,
            i = e.client_platform_config[(0, S.Z)((0, E.getOS)())];
        if (null == i.label_until) return;
        let a = new Date(i.label_until).getTime();
        if (a < r) return;
        let s = D.seenNewActivities[n],
            o = Object.hasOwn(D.seenNewActivities, n),
            l = new Date(s).getTime() < a;
        i.label_type === d.ww.NEW && (!o || l) && ((D.shouldShowNewActivityIndicator = !0), (D.seenNewActivities[n] = i.label_until));
        let u = D.seenUpdatedActivities[n],
            c = Object.hasOwn(D.seenUpdatedActivities, n),
            f = new Date(u).getTime() < a;
        i.label_type === d.ww.UPDATED && (!c || f) && ((D.shouldShowNewActivityIndicator = !0), (D.seenUpdatedActivities[n] = i.label_until));
    });
}
function ef(e) {
    let { guildId: n, activities: r } = e,
        i = X(n);
    F.set(i, r);
    let a = Date.now();
    ed({
        activities: r,
        now: a
    }),
        Z.set(i, {
            isFetching: !1,
            lastFetchTimestampMs: a
        });
}
let e_ = () => {
    D.shouldShowNewActivityIndicator = !1;
};
function eh(e) {
    let { applicationId: n, componentId: r, commandOrigin: i, launchParams: a, channelId: s, inviterUserId: o } = e;
    G.set(B(s, n), {
        isLaunching: !0,
        componentId: r,
        inviterUserId: o,
        launchParams: a
    }),
        (q = i === f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? C.MI.NO_CHAT : C.MI.RESIZABLE);
}
function ep(e) {
    let { applicationId: n, channelId: r } = e;
    D.everLaunchedActivities.add(n),
        eg({
            applicationId: n,
            channelId: r
        });
}
function em(e) {
    let { applicationId: n, channelId: r } = e;
    eg({
        applicationId: n,
        channelId: r
    });
}
function eg(e) {
    let { applicationId: n, channelId: r } = e;
    G.delete(B(r, n));
}
function eE(e) {
    let { applicationId: n, lockState: r, pictureInPictureLockState: i, gridLockState: a } = e;
    null == r ? V.delete(n) : V.set(n, r), null === i ? j.delete(n) : void 0 !== i && j.set(n, i), null === a ? H.delete(n) : void 0 !== a && H.set(n, a);
}
function ev(e) {
    let { activityPanelMode: n } = e;
    z = n;
}
function eI(e) {
    let { focusedActivityLayout: n } = e;
    q = n;
}
function eT(e) {
    let { applicationId: n, layoutMode: r } = e;
    Y.set(n, r);
}
function eb(e) {
    let { channelId: n } = e;
    if (null == i) return;
    let r = (0, y.p)(i);
    if (null != r) r !== n && z === C.Ez.PANEL && (z = C.Ez.PIP);
}
function ey(e, n) {
    return ''.concat(e, ':').concat(n);
}
function eS(e) {
    let { key: n } = e;
    n === R.KJ3.ACTIVITY_POPOUT && (z = C.Ez.PIP);
}
class eA extends (a = u.ZP.PersistedStore) {
    initialize(e) {
        var n;
        let r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
        null != e &&
            (D = {
                ...e,
                everLaunchedActivities: r
            });
    }
    getState() {
        return D;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var n;
        return null == e ? null : null !== (n = Array.from(P.values()).find((n) => (0, y.p)(n.location) === e)) && void 0 !== n ? n : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var n;
        return null == e ? null : null !== (n = Array.from(P.values()).find((n) => n.location.id === e.id)) && void 0 !== n ? n : null;
    }
    getSelfEmbeddedActivities() {
        return P;
    }
    getEmbeddedActivitiesForGuild(e) {
        var n;
        return null !== (n = M.get(e)) && void 0 !== n ? n : L;
    }
    getEmbeddedActivitiesForChannel(e) {
        var n;
        return null !== (n = k.get(e)) && void 0 !== n ? n : L;
    }
    getEmbeddedActivitiesForLocation(e) {
        var n;
        return null !== (n = U.get(e.id)) && void 0 !== n ? n : L;
    }
    getEmbeddedActivitiesByChannel() {
        return k;
    }
    getEmbeddedActivityDurationMs(e, n) {
        let r = K.get(ey(e, n));
        return null == r ? null : Date.now() - r;
    }
    isLaunchingActivity() {
        return G.size > 0;
    }
    getShelfActivities(e) {
        var n;
        let r = X(e);
        return null !== (n = F.get(r)) && void 0 !== n ? n : x;
    }
    getShelfFetchStatus(e) {
        let n = X(e);
        return Z.get(n);
    }
    shouldFetchShelf(e) {
        var n, r;
        let i = X(e),
            a = null !== (n = Z.get(i)) && void 0 !== n ? n : { isFetching: !1 },
            s = Date.now() - (null !== (r = null == a ? void 0 : a.lastFetchTimestampMs) && void 0 !== r ? r : 0) > W;
        return !(null == a ? void 0 : a.isFetching) && s;
    }
    getOrientationLockStateForApp(e) {
        return V.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var n;
        return null !== (n = j.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var n, r;
        return null !== (r = null !== (n = H.get(e)) && void 0 !== n ? n : j.get(e)) && void 0 !== r ? r : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return Y.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != i) return (0, y.p)(i);
    }
    getConnectedActivityLocation() {
        return i;
    }
    getActivityPanelMode() {
        return z;
    }
    getFocusedLayout() {
        return q;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let n = this.getConnectedActivityLocation();
        return null !== (e = this.getSelfEmbeddedActivityForLocation(n)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, n) {
        let r;
        if (void 0 !== n) {
            o: for (let [i, a] of U)
                for (let i of a)
                    if (i.applicationId === n && i.userIds.has(e)) {
                        r = i;
                        break o;
                    }
            return r;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return D.everLaunchedActivities.has(e);
    }
    getLaunchState(e, n) {
        if (null != e && null != n) return G.get(B(n, e));
    }
    getLaunchStates() {
        return G;
    }
    getActivityPopoutWindowLayout() {
        return Q;
    }
}
O(eA, 'displayName', 'EmbeddedActivitiesStore'),
    O(eA, 'persistKey', 'EmbeddedActivities'),
    O(eA, 'migrations', [
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
let eN = new eA(c.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eT,
    CONNECTION_OPEN_SUPPLEMENTAL: ee,
    GUILD_CREATE: et,
    CHANNEL_DELETE: en,
    EMBEDDED_ACTIVITY_LAUNCH_START: eh,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ep,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: em,
    EMBEDDED_ACTIVITY_CLOSE: ea,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: es,
    EMBEDDED_ACTIVITY_UPDATE_V2: er,
    LOCAL_ACTIVITY_UPDATE: eo,
    EMBEDDED_ACTIVITY_SET_CONFIG: el,
    EMBEDDED_ACTIVITY_FETCH_SHELF: eu,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ef,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ec,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: e_,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eE,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: ev,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eI,
    CHANNEL_SELECT: eb,
    POPOUT_WINDOW_CLOSE: eS
});
n.ZP = eN;
