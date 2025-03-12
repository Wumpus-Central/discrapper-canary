let r;
n.d(t, {
    ZP: () => eA,
    i6: () => w
}),
    n(47120),
    n(653041),
    n(51350);
var i,
    o = n(115911),
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
    v = n(413458),
    b = n(16609),
    y = n(761122),
    O = n(917107),
    I = n(701488),
    S = n(918559),
    T = n(981631);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
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
        shouldShowNewActivityIndicator: !1
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
    return ''.concat(e, ':').concat(t);
}
let B = new Map(),
    V = new Map(),
    F = new Map(),
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
    let { location: c, applicationId: d, launchId: f, compositeInstanceId: _, participants: h } = e,
        m = (0, E.ZP)(d);
    if (null == m) return;
    let g = (0, b.pY)(c),
        y = null != g && null !== (n = k.get(g)) && void 0 !== n ? n : w,
        O = null != y && 0 === y.length,
        I = null !== (r = U.get(c.id)) && void 0 !== r ? r : w,
        S = I.find((e) => e.applicationId === d),
        N = h.map((e) => e.userId),
        C = u.default.getId(),
        R = N.some((e) => e === C),
        P = null === (t = h.find((e) => e.userId === C)) || void 0 === t ? void 0 : t.sessionId,
        D = h.some((e) => (0, v.J)(e)),
        L = x.get(d),
        V = B.get(G(null != g ? g : null, d)),
        F = null == V ? void 0 : V.launchParams,
        Z = {
            applicationId: d,
            location: c,
            launchId: f,
            compositeInstanceId: _,
            url: m,
            userIds: new Set(N),
            participants: h,
            referrerId: null !== (i = null == L ? void 0 : L.referrerId) && void 0 !== i ? i : null == F ? void 0 : F.referrerId,
            customId: null !== (o = null == L ? void 0 : L.customId) && void 0 !== o ? o : null == F ? void 0 : F.customId
        };
    R && null != L && x.set(L.applicationId, A({}, L, Z));
    let H = !D;
    null != L && c.id === L.location.id && d === (null == L ? void 0 : L.applicationId) && ((!R && Array.from(L.userIds).some((e) => e === C)) || H)
        ? (x.delete(d), p.S.dispatch(T.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : R &&
          (null == L || L.applicationId !== d || L.location.id !== c.id) &&
          P === u.default.getSessionId() &&
          eo({
              applicationId: d,
              launchId: f,
              compositeInstanceId: _,
              location: c,
              participants: h,
              isFirstActivityInChannel: O,
              isStart: null == S,
              referrerId: Z.referrerId,
              customId: Z.customId,
              inviterUserId: null == V ? void 0 : V.inviterUserId
          });
    let W = I.filter((e) => e.applicationId !== d);
    N.length > 0 && W.push(Z), U.set(c.id, W);
    let Y = (0, b.wq)(c);
    if (null != Y) {
        let e = (null !== (a = j.get(Y)) && void 0 !== a ? a : []).filter((e) => e.location.id !== c.id);
        N.length > 0 && e.push(Z), j.set(Y, e);
    }
    if (null != g) {
        let e = (null !== (s = k.get(g)) && void 0 !== s ? s : []).filter((e) => e.applicationId !== d),
            t = J((0, b.jS)(c)),
            n = (null !== (l = M.get(t)) && void 0 !== l ? l : []).filter((e) => e.applicationId !== d || e.location.id !== c.id);
        N.length > 0 && (e.push(Z), n.push(Z)), k.set(g, e), M.set(t, n);
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
    let { guilds: t } = e;
    k.clear(), M.clear(), U.clear(), j.clear(), t.forEach((e) => ee(e));
}
function en(e) {
    let { guild: t } = e;
    ee(t);
}
function er(e) {
    var t, n;
    let { channel: r } = e,
        i = null !== (t = k.get(r.id)) && void 0 !== t ? t : [];
    k.set(r.id, []);
    let o = J(r.guild_id),
        a = (null !== (n = M.get(o)) && void 0 !== n ? n : []).filter((e) => (0, b.pY)(e.location) !== r.id);
    M.set(o, a),
        i.forEach((e) => {
            U.delete(e.location.id);
        }),
        j.set(r.id, []);
}
function ei(e) {
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
function eo(e) {
    var t, n;
    let { applicationId: i, launchId: a, compositeInstanceId: l, location: c, participants: h, isFirstActivityInChannel: v, isStart: y, referrerId: I, customId: N, inviterUserId: A } = e,
        C = (0, E.ZP)(i),
        R = u.default.getSessionId();
    if (null == C || null == R || (null === (t = x.get(i)) || void 0 === t ? void 0 : t.location.id) === c.id) return !1;
    let P = (0, b.pY)(c),
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
        customId: N
    };
    x.set(i, L),
        p.S.dispatch(T.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: c,
            applicationId: i,
            isFirstActivityInChannel: v,
            isStart: y,
            participants: h,
            embeddedActivity: L,
            inviterUserId: A
        }),
        (0, m.R)({ isContextless: c.kind === o.X.CONTEXTLESS })
            ? ((q = S.Ez.ACTIVITY_POPOUT_WINDOW),
              s.Z.wait(() => {
                  s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (q = P !== f.Z.getChannelId() || (0, O.Z)(P) ? S.Ez.PIP : S.Ez.PANEL),
        z.set(eS(c.id, i), Date.now());
}
function ea(e) {
    let { applicationId: t } = e,
        n = x.get(t);
    x.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function es(e) {
    let { layout: t } = e;
    X = t;
}
function el(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = x.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
    if (null == r) return !1;
    x.set(r.applicationId, A({}, r));
}
function ec(e) {
    let { applicationId: t, config: n } = e,
        r = x.get(t);
    null != r && x.set(r.applicationId, R(A({}, r), { config: n }));
}
function eu(e) {
    let { guildId: t } = e,
        n = J(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function ed(e) {
    let { guildId: t } = e,
        n = J(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function ef(e) {
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
        r.label_type === l.ww.NEW && (!a || s) && ((P.shouldShowNewActivityIndicator = !0), (P.seenNewActivities[t] = r.label_until));
        let c = P.seenUpdatedActivities[t],
            u = Object.hasOwn(P.seenUpdatedActivities, t),
            d = new Date(c).getTime() < i;
        r.label_type === l.ww.UPDATED && (!u || d) && ((P.shouldShowNewActivityIndicator = !0), (P.seenUpdatedActivities[t] = r.label_until));
    });
}
function e_(e) {
    let { guildId: t, activities: n } = e,
        r = J(t);
    V.set(r, n);
    let i = Date.now();
    ef({
        activities: n,
        now: i
    }),
        F.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i
        });
}
let ep = () => {
    P.shouldShowNewActivityIndicator = !1;
};
function eh(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: o, inviterUserId: a } = e;
    B.set(G(o, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: a,
        launchParams: i
    }),
        (Q = r === c.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? S.MI.NO_CHAT : S.MI.RESIZABLE);
}
function em(e) {
    let { applicationId: t, channelId: n } = e;
    P.everLaunchedActivities.add(t),
        eE({
            applicationId: t,
            channelId: n
        });
}
function eg(e) {
    let { applicationId: t, channelId: n } = e;
    eE({
        applicationId: t,
        channelId: n
    });
}
function eE(e) {
    let { applicationId: t, channelId: n } = e;
    B.delete(G(n, t));
}
function ev(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? Z.delete(t) : Z.set(t, n), null === r ? H.delete(t) : void 0 !== r && H.set(t, r), null === i ? W.delete(t) : void 0 !== i && W.set(t, i);
}
function eb(e) {
    let { activityPanelMode: t } = e;
    q = t;
}
function ey(e) {
    let { focusedActivityLayout: t } = e;
    Q = t;
}
function eO(e) {
    let { applicationId: t, layoutMode: n } = e;
    Y.set(t, n);
}
function eI(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, b.pY)(r);
    null != n && n !== t && q === S.Ez.PANEL && (q = S.Ez.PIP);
}
function eS(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eT(e) {
    let { key: t } = e;
    t === T.KJ3.ACTIVITY_POPOUT && (q = S.Ez.PIP);
}
class eN extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e && (P = R(A({}, e), { everLaunchedActivities: n }));
    }
    getState() {
        return P;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(x.values()).find((t) => (0, b.pY)(t.location) === e)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null !== (t = Array.from(x.values()).find((t) => t.location.id === e.id)) && void 0 !== t ? t : null;
    }
    getSelfEmbeddedActivityForStartingChannel(e) {
        if (null != e) return Array.from(x.values()).find((t) => (0, b.wq)(t.location) === e);
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
        let n = z.get(eS(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return B.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = J(e);
        return null !== (t = V.get(n)) && void 0 !== t ? t : D;
    }
    getShelfFetchStatus(e) {
        let t = J(e);
        return F.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = J(e),
            i = null !== (t = F.get(r)) && void 0 !== t ? t : { isFetching: !1 },
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
        if (null != r) return (0, b.pY)(r);
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
        if (null != e && null != t) return B.get(G(t, e));
    }
    getLaunchStates() {
        return B;
    }
    getActivityPopoutWindowLayout() {
        return X;
    }
}
N(eN, 'displayName', 'EmbeddedActivitiesStore'),
    N(eN, 'persistKey', 'EmbeddedActivities'),
    N(eN, 'migrations', [
        (e) =>
            R(A({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }),
        (e) => (delete e.seenFeaturedActivities, A({}, e)),
        (e) => (delete e.seenActivities, A({}, e)),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, A({}, e)),
        (e) =>
            R(A({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {}
            }),
        (e) => {
            var t;
            let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
            return R(A({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, A({}, e))
    ]);
let eA = new eN(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eO,
    CONNECTION_OPEN_SUPPLEMENTAL: et,
    GUILD_CREATE: en,
    CHANNEL_DELETE: er,
    EMBEDDED_ACTIVITY_LAUNCH_START: eh,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: em,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: eg,
    EMBEDDED_ACTIVITY_CLOSE: ea,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: es,
    EMBEDDED_ACTIVITY_UPDATE_V2: ei,
    LOCAL_ACTIVITY_UPDATE: el,
    EMBEDDED_ACTIVITY_SET_CONFIG: ec,
    EMBEDDED_ACTIVITY_FETCH_SHELF: eu,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: e_,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ed,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: ep,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: ev,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: eb,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: ey,
    CHANNEL_SELECT: eI,
    POPOUT_WINDOW_CLOSE: eT
});
