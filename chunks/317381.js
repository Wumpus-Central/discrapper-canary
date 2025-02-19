let r;
n.d(t, {
    ZP: () => eN,
    i6: () => P
}),
    n(47120),
    n(653041),
    n(51350);
var i,
    o = n(442837),
    a = n(570140),
    s = n(911969),
    l = n(895924),
    c = n(314897),
    u = n(592125),
    d = n(944486),
    f = n(594174),
    p = n(585483),
    _ = n(358085),
    h = n(636449),
    m = n(774226),
    g = n(155268),
    E = n(413458),
    v = n(16609),
    b = n(761122),
    y = n(917107),
    O = n(701488),
    S = n(918559),
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
let R = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    P = [],
    w = [],
    D = '0',
    x = new Map(),
    L = new Map(),
    M = new Map(),
    k = new Map(),
    j = new Map();
function U(e, t) {
    return ''.concat(e, ':').concat(t);
}
let G = new Map(),
    B = new Map(),
    Z = new Map(),
    F = new Map(),
    V = new Map(),
    H = new Map(),
    W = new Map(),
    Y = 21600000,
    K = new Map(),
    z = S.Ez.DISCONNECTED,
    q = S.MI.RESIZABLE,
    Q = O.GM.NORMAL;
function X(e) {
    return null != e ? e : D;
}
function J(e) {
    var t, n, r, i, o, a, s, l;
    let { location: u, applicationId: d, launchId: f, compositeInstanceId: _, participants: h } = e,
        m = (0, g.ZP)(d);
    if (null == m) return;
    let b = (0, v.pY)(u),
        y = null != b && null !== (n = M.get(b)) && void 0 !== n ? n : P,
        O = null != y && 0 === y.length,
        S = null !== (r = j.get(u.id)) && void 0 !== r ? r : P,
        T = S.find((e) => e.applicationId === d),
        A = h.map((e) => e.userId),
        C = c.default.getId(),
        R = A.some((e) => e === C),
        w = null === (t = h.find((e) => e.userId === C)) || void 0 === t ? void 0 : t.sessionId,
        D = h.some((e) => (0, E.J)(e)),
        B = x.get(d),
        Z = G.get(U(null != b ? b : null, d)),
        F = null == Z ? void 0 : Z.launchParams,
        V = {
            applicationId: d,
            location: u,
            launchId: f,
            compositeInstanceId: _,
            url: m,
            userIds: new Set(A),
            participants: h,
            referrerId: null !== (i = null == B ? void 0 : B.referrerId) && void 0 !== i ? i : null == F ? void 0 : F.referrerId,
            customId: null !== (o = null == B ? void 0 : B.customId) && void 0 !== o ? o : null == F ? void 0 : F.customId
        };
    R && null != B && x.set(B.applicationId, N({}, B, V));
    let H = !D;
    null != B && u.id === B.location.id && d === (null == B ? void 0 : B.applicationId) && ((!R && Array.from(B.userIds).some((e) => e === C)) || H)
        ? (x.delete(d), p.S.dispatch(I.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : R &&
          (null == B || B.applicationId !== d || B.location.id !== u.id) &&
          w === c.default.getSessionId() &&
          ei({
              applicationId: d,
              launchId: f,
              compositeInstanceId: _,
              location: u,
              participants: h,
              isFirstActivityInChannel: O,
              isStart: null == T,
              referrerId: V.referrerId,
              customId: V.customId,
              inviterUserId: null == Z ? void 0 : Z.inviterUserId
          });
    let W = S.filter((e) => e.applicationId !== d);
    A.length > 0 && W.push(V), j.set(u.id, W);
    let Y = (0, v.wq)(u);
    if (null != Y) {
        let e = (null !== (a = k.get(Y)) && void 0 !== a ? a : []).filter((e) => e.location.id !== u.id);
        A.length > 0 && e.push(V), k.set(Y, e);
    }
    if (null != b) {
        let e = (null !== (s = M.get(b)) && void 0 !== s ? s : []).filter((e) => e.applicationId !== d),
            t = X((0, v.jS)(u)),
            n = (null !== (l = L.get(t)) && void 0 !== l ? l : []).filter((e) => e.applicationId !== d || e.location.id !== u.id);
        A.length > 0 && (e.push(V), n.push(V)), M.set(b, e), L.set(t, n);
    }
}
function $(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: o } = e;
            J({
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
function ee(e) {
    let { guilds: t } = e;
    M.clear(), L.clear(), j.clear(), k.clear(), t.forEach((e) => $(e));
}
function et(e) {
    let { guild: t } = e;
    $(t);
}
function en(e) {
    var t, n;
    let { channel: r } = e,
        i = null !== (t = M.get(r.id)) && void 0 !== t ? t : [];
    M.set(r.id, []);
    let o = X(r.guild_id),
        a = (null !== (n = L.get(o)) && void 0 !== n ? n : []).filter((e) => (0, v.pY)(e.location) !== r.id);
    L.set(o, a),
        i.forEach((e) => {
            j.delete(e.location.id);
        }),
        k.set(r.id, []);
}
function er(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: o } = e;
    J({
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
function ei(e) {
    var t, n;
    let { applicationId: i, launchId: o, compositeInstanceId: s, location: l, participants: _, isFirstActivityInChannel: E, isStart: b, referrerId: O, customId: T, inviterUserId: N } = e,
        A = (0, g.ZP)(i),
        C = c.default.getSessionId();
    if (null == A || null == C || (null === (t = x.get(i)) || void 0 === t ? void 0 : t.location.id) === l.id) return !1;
    let R = (0, v.pY)(l),
        P = u.Z.getChannel(R),
        w = null == P ? void 0 : P.getGuildId();
    if (null == f.default.getCurrentUser() || (!(0, m.sq)() && null == w && !(null !== (n = null == P ? void 0 : P.isPrivate()) && void 0 !== n && n))) return !1;
    r = l;
    let D = {
        applicationId: i,
        url: A,
        userIds: new Set(_.map((e) => e.userId)),
        participants: _,
        connectedSince: Date.now(),
        launchId: o,
        compositeInstanceId: s,
        location: l,
        referrerId: O,
        customId: T
    };
    x.set(i, D),
        p.S.dispatch(I.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: i,
            isFirstActivityInChannel: E,
            isStart: b,
            participants: _,
            embeddedActivity: D,
            inviterUserId: N
        }),
        (0, h.R)()
            ? ((z = S.Ez.ACTIVITY_POPOUT_WINDOW),
              a.Z.wait(() => {
                  a.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (z = R !== d.Z.getChannelId() || (0, y.Z)(R) ? S.Ez.PIP : S.Ez.PANEL),
        K.set(eS(l.id, i), Date.now());
}
function eo(e) {
    let { applicationId: t } = e,
        n = x.get(t);
    x.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function ea(e) {
    let { layout: t } = e;
    Q = t;
}
function es(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = x.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
    if (null == r) return !1;
    x.set(r.applicationId, N({}, r));
}
function el(e) {
    let { applicationId: t, config: n } = e,
        r = x.get(t);
    null != r && x.set(r.applicationId, C(N({}, r), { config: n }));
}
function ec(e) {
    let { guildId: t } = e,
        n = X(t),
        r = Z.get(n);
    Z.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function eu(e) {
    let { guildId: t } = e,
        n = X(t),
        r = Z.get(n);
    Z.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function ed(e) {
    let { activities: t, now: n } = e;
    t.forEach((e) => {
        let t = e.application_id,
            r = e.client_platform_config[(0, b.Z)((0, _.getOS)())];
        if (null == r.label_until) return;
        let i = new Date(r.label_until).getTime();
        if (i < n) return;
        let o = R.seenNewActivities[t],
            a = Object.hasOwn(R.seenNewActivities, t),
            l = new Date(o).getTime() < i;
        r.label_type === s.ww.NEW && (!a || l) && ((R.shouldShowNewActivityIndicator = !0), (R.seenNewActivities[t] = r.label_until));
        let c = R.seenUpdatedActivities[t],
            u = Object.hasOwn(R.seenUpdatedActivities, t),
            d = new Date(c).getTime() < i;
        r.label_type === s.ww.UPDATED && (!u || d) && ((R.shouldShowNewActivityIndicator = !0), (R.seenUpdatedActivities[t] = r.label_until));
    });
}
function ef(e) {
    let { guildId: t, activities: n } = e,
        r = X(t);
    B.set(r, n);
    let i = Date.now();
    ed({
        activities: n,
        now: i
    }),
        Z.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i
        });
}
let ep = () => {
    R.shouldShowNewActivityIndicator = !1;
};
function e_(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: o, inviterUserId: a } = e;
    G.set(U(o, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: a,
        launchParams: i
    }),
        (q = r === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? S.MI.NO_CHAT : S.MI.RESIZABLE);
}
function eh(e) {
    let { applicationId: t, channelId: n } = e;
    R.everLaunchedActivities.add(t),
        eg({
            applicationId: t,
            channelId: n
        });
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
    G.delete(U(n, t));
}
function eE(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? F.delete(t) : F.set(t, n), null === r ? V.delete(t) : void 0 !== r && V.set(t, r), null === i ? H.delete(t) : void 0 !== i && H.set(t, i);
}
function ev(e) {
    let { activityPanelMode: t } = e;
    z = t;
}
function eb(e) {
    let { focusedActivityLayout: t } = e;
    q = t;
}
function ey(e) {
    let { applicationId: t, layoutMode: n } = e;
    W.set(t, n);
}
function eO(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, v.pY)(r);
    null != n && n !== t && z === S.Ez.PANEL && (z = S.Ez.PIP);
}
function eS(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eI(e) {
    let { key: t } = e;
    t === I.KJ3.ACTIVITY_POPOUT && (z = S.Ez.PIP);
}
class eT extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e && (R = C(N({}, e), { everLaunchedActivities: n }));
    }
    getState() {
        return R;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(x.values()).find((t) => (0, v.pY)(t.location) === e)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(x.values()).find((t) => t.location.id === e.id)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivitiesForStartingChannel(e) {
        if (null != location) return Array.from(x.values()).find((t) => (0, v.wq)(t.location) === e);
    }
    getSelfEmbeddedActivities() {
        return x;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = L.get(e)) && void 0 !== t ? t : P;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = M.get(e)) && void 0 !== t ? t : P;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null !== (t = j.get(e.id)) && void 0 !== t ? t : P;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null !== (t = k.get(e)) && void 0 !== t ? t : P;
    }
    getEmbeddedActivitiesByChannel() {
        return M;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = K.get(eS(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return G.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = X(e);
        return null !== (t = B.get(n)) && void 0 !== t ? t : w;
    }
    getShelfFetchStatus(e) {
        let t = X(e);
        return Z.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = X(e),
            i = null !== (t = Z.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            o = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > Y;
        return !(null == i ? void 0 : i.isFetching) && o;
    }
    getOrientationLockStateForApp(e) {
        return F.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = V.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = H.get(e)) && void 0 !== t ? t : V.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return W.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, v.pY)(r);
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
        return null !== (e = this.getSelfEmbeddedActivityForLocation(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [r, i] of j)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return R.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return G.get(U(t, e));
    }
    getLaunchStates() {
        return G;
    }
    getActivityPopoutWindowLayout() {
        return Q;
    }
}
T(eT, 'displayName', 'EmbeddedActivitiesStore'),
    T(eT, 'persistKey', 'EmbeddedActivities'),
    T(eT, 'migrations', [
        (e) =>
            C(N({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }),
        (e) => (delete e.seenFeaturedActivities, N({}, e)),
        (e) => (delete e.seenActivities, N({}, e)),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, N({}, e)),
        (e) =>
            C(N({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {}
            }),
        (e) => {
            var t;
            let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
            return C(N({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, N({}, e))
    ]);
let eN = new eT(a.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: ey,
    CONNECTION_OPEN_SUPPLEMENTAL: ee,
    GUILD_CREATE: et,
    CHANNEL_DELETE: en,
    EMBEDDED_ACTIVITY_LAUNCH_START: e_,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eh,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: em,
    EMBEDDED_ACTIVITY_CLOSE: eo,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: ea,
    EMBEDDED_ACTIVITY_UPDATE_V2: er,
    LOCAL_ACTIVITY_UPDATE: es,
    EMBEDDED_ACTIVITY_SET_CONFIG: el,
    EMBEDDED_ACTIVITY_FETCH_SHELF: ec,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ef,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eu,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: ep,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eE,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: ev,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eb,
    CHANNEL_SELECT: eO,
    POPOUT_WINDOW_CLOSE: eI
});
