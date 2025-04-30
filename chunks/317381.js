let r;
n.d(t, {
    ZP: () => eD,
    i6: () => L
}),
    n(388685),
    n(997841),
    n(539854),
    n(825670);
var i,
    a = n(252258),
    o = n(442837),
    s = n(570140),
    l = n(911969),
    c = n(895924),
    u = n(812206),
    d = n(314897),
    f = n(592125),
    _ = n(944486),
    p = n(594174),
    h = n(585483),
    m = n(630388),
    g = n(358085),
    E = n(636449),
    b = n(774226),
    y = n(155268),
    O = n(413458),
    v = n(16609),
    I = n(761122),
    S = n(917107),
    T = n(701488),
    A = n(918559),
    N = n(981631);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        surfacesToShowNewActivityIndicator: new Set(),
        lastCheckedForBadgeableActivities: null
    },
    L = [],
    x = [],
    M = '0',
    k = new Map(),
    j = new Map(),
    U = new Map(),
    G = new Map(),
    B = new Map(),
    V = 'contextless-faux-channel-id';
function F(e, t) {
    var n, r;
    let i = e;
    return (i = (0, m.yE)(null != (r = null == (n = u.Z.getApplication(t)) ? void 0 : n.flags) ? r : 0, N.udG.CONTEXTLESS_ACTIVITY) && (0, b.sq)() ? V : i), ''.concat(t, ':').concat(i);
}
let Z = new Map(),
    H = new Map(),
    Y = new Map(),
    W = new Map(),
    K = new Map(),
    z = new Map(),
    q = new Map(),
    Q = 21600000,
    X = new Map(),
    J = A.Ez.DISCONNECTED,
    $ = A.MI.RESIZABLE,
    ee = T.GM.NORMAL;
function et(e) {
    return null != e ? e : M;
}
function en(e) {
    var t, n, r, i, a, o, s, l;
    let { location: c, applicationId: u, launchId: f, compositeInstanceId: _, participants: p } = e,
        h = (0, y.ZP)(u);
    if (null == h) return;
    let m = (0, v.pY)(c),
        g = null != m && null != (n = U.get(m)) ? n : L,
        E = null != g && 0 === g.length,
        b = null != (r = B.get(c.id)) ? r : L,
        I = b.find((e) => e.applicationId === u),
        S = p.map((e) => e.userId),
        T = d.default.getId(),
        A = S.some((e) => e === T),
        N = null == (t = p.find((e) => e.userId === T)) ? void 0 : t.sessionId,
        C = p.some((e) => (0, O.J)(e)),
        P = k.get(u),
        w = Z.get(F(null != m ? m : null, u)),
        D = null == w ? void 0 : w.launchParams,
        x = {
            applicationId: u,
            location: c,
            launchId: f,
            compositeInstanceId: _,
            url: h,
            userIds: new Set(S),
            participants: p,
            referrerId: null != (i = null == P ? void 0 : P.referrerId) ? i : null == D ? void 0 : D.referrerId,
            customId: null != (a = null == P ? void 0 : P.customId) ? a : null == D ? void 0 : D.customId
        };
    A && null != P && k.set(P.applicationId, R({}, P, x));
    let M = !C;
    null != P && c.id === P.location.id && u === P.applicationId && ((!A && Array.from(P.userIds).some((e) => e === T)) || M)
        ? ei(P)
        : A &&
          (null == P || P.applicationId !== u || P.location.id !== c.id) &&
          (N === d.default.getSessionId() &&
              ec({
                  applicationId: u,
                  launchId: f,
                  compositeInstanceId: _,
                  location: c,
                  participants: p,
                  isFirstActivityInChannel: E,
                  isStart: null == I,
                  referrerId: x.referrerId,
                  customId: x.customId,
                  inviterUserId: null == w ? void 0 : w.inviterUserId
              }),
          ev({
              channelId: null != m ? m : null,
              applicationId: u
          }));
    let V = b.filter((e) => e.applicationId !== u);
    S.length > 0 && V.push(x), B.set(c.id, V);
    let H = (0, v.wq)(c);
    if (null != H) {
        let e = (null != (o = G.get(H)) ? o : []).filter((e) => e.location.id !== c.id);
        S.length > 0 && e.push(x), G.set(H, e);
    }
    if (null != m) {
        let e = (null != (s = U.get(m)) ? s : []).filter((e) => e.applicationId !== u),
            t = et((0, v.jS)(c)),
            n = (null != (l = j.get(t)) ? l : []).filter((e) => e.applicationId !== u || e.location.id !== c.id);
        S.length > 0 && (e.push(x), n.push(x)), U.set(m, e), j.set(t, n);
    }
}
function er(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: a } = e;
            en({
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
function ei(e) {
    k.delete(e.applicationId), h.S.dispatch(N.CkL.RELEASE_ACTIVITY_WEB_VIEW);
}
function ea(e) {
    let { guilds: t } = e;
    U.clear(), j.clear(), B.clear(), G.clear(), t.forEach((e) => er(e));
    let n = d.default.getId();
    for (let e of Array.from(k.values())) ew.getEmbeddedActivitiesForLocation(e.location).some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || ei(e);
}
function eo(e) {
    let { guild: t } = e;
    er(t);
}
function es(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (t = U.get(r.id)) ? t : [];
    U.set(r.id, []);
    let a = et(r.guild_id),
        o = (null != (n = j.get(a)) ? n : []).filter((e) => (0, v.pY)(e.location) !== r.id);
    j.set(a, o),
        i.forEach((e) => {
            B.delete(e.location.id);
        }),
        G.set(r.id, []);
}
function el(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
    en({
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
function ec(e) {
    var t, n;
    let { applicationId: i, launchId: o, compositeInstanceId: l, location: c, participants: u, isFirstActivityInChannel: m, isStart: g, referrerId: O, customId: I, inviterUserId: T } = e,
        C = (0, y.ZP)(i),
        R = d.default.getSessionId();
    if (null == C || null == R || (null == (t = k.get(i)) ? void 0 : t.location.id) === c.id) return !1;
    let P = (0, v.pY)(c),
        w = f.Z.getChannel(P),
        D = null == w ? void 0 : w.getGuildId();
    if (null == p.default.getCurrentUser() || (!(0, b.sq)() && null == D && !(null != (n = null == w ? void 0 : w.isPrivate()) && n))) return !1;
    r = c;
    let L = {
        applicationId: i,
        url: C,
        userIds: new Set(u.map((e) => e.userId)),
        participants: u,
        connectedSince: Date.now(),
        launchId: o,
        compositeInstanceId: l,
        location: c,
        referrerId: O,
        customId: I
    };
    k.set(i, L),
        h.S.dispatch(N.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: c,
            applicationId: i,
            isFirstActivityInChannel: m,
            isStart: g,
            participants: u,
            embeddedActivity: L,
            inviterUserId: T
        }),
        (0, E.R)()
            ? ((J = A.Ez.ACTIVITY_POPOUT_WINDOW),
              s.Z.wait(() => {
                  s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : P !== _.Z.getChannelId() || (0, S.Z)(P)
              ? c.kind === a.E.CONTEXTLESS
                  ? ((J = A.Ez.PANEL), ($ = A.MI.NO_CHAT))
                  : (J = A.Ez.PIP)
              : (J = A.Ez.PANEL),
        X.set(eC(c.id, i), Date.now());
}
function eu(e) {
    let { applicationId: t } = e,
        n = k.get(t);
    k.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function ed(e) {
    let { layout: t } = e;
    ee = t;
}
function ef(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = k.get(null != (t = n.application_id) ? t : '');
    if (null == r) return !1;
    k.set(r.applicationId, R({}, r));
}
function e_(e) {
    let { applicationId: t, config: n } = e,
        r = k.get(t);
    null != r && k.set(r.applicationId, w(R({}, r), { config: n }));
}
function ep(e) {
    let { guildId: t } = e,
        n = et(t),
        r = Y.get(n);
    Y.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function eh(e) {
    let { guildId: t } = e,
        n = et(t),
        r = Y.get(n);
    Y.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function em(e) {
    let { activities: t, now: n } = e;
    t.forEach((e) => {
        let t = e.application_id,
            r = e.client_platform_config[(0, I.Z)((0, g.getOS)())];
        if (null == r.label_until) return;
        let i = new Date(r.label_until).getTime();
        if (i < n) return;
        let a = D.seenNewActivities[t],
            o = Object.hasOwn(D.seenNewActivities, t),
            s = new Date(a).getTime() < i;
        r.label_type === l.ww.NEW &&
            (!o || s) &&
            (Object.values(l.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || D.surfacesToShowNewActivityIndicator.add(e);
            }),
            (D.seenNewActivities[t] = r.label_until));
        let c = D.seenUpdatedActivities[t],
            u = Object.hasOwn(D.seenUpdatedActivities, t),
            d = new Date(c).getTime() < i;
        r.label_type === l.ww.UPDATED &&
            (!u || d) &&
            (Object.values(l.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || D.surfacesToShowNewActivityIndicator.add(e);
            }),
            (D.seenUpdatedActivities[t] = r.label_until));
    }),
        (D.lastCheckedForBadgeableActivities = new Date(n).toISOString());
}
function eg(e) {
    let { guildId: t, activities: n } = e,
        r = et(t);
    H.set(r, n);
    let i = Date.now();
    em({
        activities: n,
        now: i
    }),
        Y.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i
        });
}
let eE = () => {
    D.surfacesToShowNewActivityIndicator.clear();
};
function eb(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: a, inviterUserId: o } = e;
    Z.set(F(a, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: o,
        launchParams: i
    }),
        ($ = r === c.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? A.MI.NO_CHAT : A.MI.RESIZABLE);
}
function ey(e) {
    let { applicationId: t } = e;
    D.everLaunchedActivities.add(t);
}
function eO(e) {
    let { applicationId: t, channelId: n } = e;
    ev({
        applicationId: t,
        channelId: n
    });
}
function ev(e) {
    let { applicationId: t, channelId: n } = e;
    Z.delete(F(n, t));
}
function eI(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? W.delete(t) : W.set(t, n), null === r ? K.delete(t) : void 0 !== r && K.set(t, r), null === i ? z.delete(t) : void 0 !== i && z.set(t, i);
}
function eS(e) {
    let { activityPanelMode: t } = e;
    J = t;
}
function eT(e) {
    let { focusedActivityLayout: t } = e;
    $ = t;
}
function eA(e) {
    let { applicationId: t, layoutMode: n } = e;
    q.set(t, n);
}
function eN(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = r.kind === a.E.CONTEXTLESS,
        i = (0, v.pY)(r);
    (n || null != i) && i !== t && J === A.Ez.PANEL && (J = A.Ez.PIP);
}
function eC(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eR(e) {
    let { key: t } = e;
    t === N.KJ3.ACTIVITY_POPOUT && (J = A.Ez.PIP);
}
class eP extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        let r = new Set(null != (t = null == e ? void 0 : e.everLaunchedActivities) ? t : []),
            i = new Set(null != (n = null == e ? void 0 : e.surfacesToShowNewActivityIndicator) ? n : []);
        null != e &&
            (D = w(R({}, e), {
                everLaunchedActivities: r,
                surfacesToShowNewActivityIndicator: i
            }));
    }
    getState() {
        return D;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null != (t = Array.from(k.values()).find((t) => (0, v.pY)(t.location) === e)) ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null != (t = Array.from(k.values()).find((t) => t.location.id === e.id)) ? t : null;
    }
    getSelfEmbeddedActivityForStartingChannel(e) {
        if (null != e) return Array.from(k.values()).find((t) => (0, v.wq)(t.location) === e);
    }
    getSelfEmbeddedActivities() {
        return k;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null != (t = j.get(e)) ? t : L;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null != (t = U.get(e)) ? t : L;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null != (t = B.get(e.id)) ? t : L;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null != (t = G.get(e)) ? t : L;
    }
    getEmbeddedActivitiesByChannel() {
        return U;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = X.get(eC(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return Z.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = et(e);
        return null != (t = H.get(n)) ? t : x;
    }
    getShelfFetchStatus(e) {
        let t = et(e);
        return Y.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = et(e),
            i = null != (t = Y.get(r)) ? t : { isFetching: !1 },
            a = Date.now() - (null != (n = null == i ? void 0 : i.lastFetchTimestampMs) ? n : 0) > Q;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return W.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null != (t = K.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null != (n = null != (t = z.get(e)) ? t : K.get(e)) ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return q.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, v.pY)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return J;
    }
    getFocusedLayout() {
        return $;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null != (e = this.getSelfEmbeddedActivityForLocation(t)) ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [r, i] of B)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return D.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return Z.get(F(null != t ? t : null, e));
    }
    getLaunchStates() {
        return Z;
    }
    getActivityPopoutWindowLayout() {
        return ee;
    }
    isContextlessActivityInPanelMode() {
        return (null == r ? void 0 : r.kind) === a.E.CONTEXTLESS && J === A.Ez.PANEL;
    }
}
C(eP, 'displayName', 'EmbeddedActivitiesStore'),
    C(eP, 'persistKey', 'EmbeddedActivities'),
    C(eP, 'migrations', [
        (e) =>
            w(R({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }),
        (e) => (delete e.seenFeaturedActivities, R({}, e)),
        (e) => (delete e.seenActivities, R({}, e)),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, R({}, e)),
        (e) =>
            w(R({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {}
            }),
        (e) => {
            var t;
            let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
            return w(R({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, R({}, e)),
        (e) => ((e.surfacesToShowNewActivityIndicator = new Set()), e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(l.eR.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, R({}, e)),
        (e) => w(R({}, e), { lastCheckedForBadgeableActivities: null })
    ]);
let ew = new eP(s.Z, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eA,
        CONNECTION_OPEN_SUPPLEMENTAL: ea,
        GUILD_CREATE: eo,
        CHANNEL_DELETE: es,
        EMBEDDED_ACTIVITY_LAUNCH_START: eb,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ey,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: eO,
        EMBEDDED_ACTIVITY_CLOSE: eu,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: ed,
        EMBEDDED_ACTIVITY_UPDATE_V2: el,
        LOCAL_ACTIVITY_UPDATE: ef,
        EMBEDDED_ACTIVITY_SET_CONFIG: e_,
        EMBEDDED_ACTIVITY_FETCH_SHELF: ep,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: eg,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eh,
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: eE,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eI,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: eS,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eT,
        CHANNEL_SELECT: eN,
        POPOUT_WINDOW_CLOSE: eR
    }),
    eD = ew;
