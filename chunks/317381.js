let r;
n.d(t, {
    ZP: () => eC,
    i6: () => R
}),
    n(388685),
    n(539854),
    n(825670);
var i,
    o = n(252258),
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
    g = n(155268),
    E = n(413458),
    b = n(16609),
    y = n(761122),
    O = n(917107),
    v = n(701488),
    I = n(918559),
    S = n(981631);
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        surfacesToShowNewActivityIndicator: new Set(),
        lastCheckedForBadgeableActivities: null
    },
    R = [],
    w = [],
    D = '0',
    L = new Map(),
    x = new Map(),
    k = new Map(),
    M = new Map(),
    j = new Map();
function U(e, t) {
    return ''.concat(t, ':').concat(e);
}
let G = new Map(),
    B = new Map(),
    F = new Map(),
    V = new Map(),
    Z = new Map(),
    H = new Map(),
    Y = new Map(),
    W = 21600000,
    K = new Map(),
    z = I.Ez.DISCONNECTED,
    q = I.MI.RESIZABLE,
    Q = v.GM.NORMAL;
function X(e) {
    return null != e ? e : D;
}
function J(e) {
    var t, n, r, i, o, a, s, l;
    let { location: c, applicationId: d, launchId: f, compositeInstanceId: _, participants: p } = e,
        h = (0, g.ZP)(d);
    if (null == h) return;
    let m = (0, b.pY)(c),
        y = null != m && null != (n = k.get(m)) ? n : R,
        O = null != y && 0 === y.length,
        v = null != (r = j.get(c.id)) ? r : R,
        I = v.find((e) => e.applicationId === d),
        S = p.map((e) => e.userId),
        T = u.default.getId(),
        N = S.some((e) => e === T),
        C = null == (t = p.find((e) => e.userId === T)) ? void 0 : t.sessionId,
        P = p.some((e) => (0, E.J)(e)),
        w = L.get(d),
        D = G.get(U(null != m ? m : null, d)),
        B = null == D ? void 0 : D.launchParams,
        F = {
            applicationId: d,
            location: c,
            launchId: f,
            compositeInstanceId: _,
            url: h,
            userIds: new Set(S),
            participants: p,
            referrerId: null != (i = null == w ? void 0 : w.referrerId) ? i : null == B ? void 0 : B.referrerId,
            customId: null != (o = null == w ? void 0 : w.customId) ? o : null == B ? void 0 : B.customId
        };
    N && null != w && L.set(w.applicationId, A({}, w, F));
    let V = !P;
    null != w && c.id === w.location.id && d === w.applicationId && ((!N && Array.from(w.userIds).some((e) => e === T)) || V)
        ? ee(w)
        : N &&
          (null == w || w.applicationId !== d || w.location.id !== c.id) &&
          (C === u.default.getSessionId() &&
              eo({
                  applicationId: d,
                  launchId: f,
                  compositeInstanceId: _,
                  location: c,
                  participants: p,
                  isFirstActivityInChannel: O,
                  isStart: null == I,
                  referrerId: F.referrerId,
                  customId: F.customId,
                  inviterUserId: null == D ? void 0 : D.inviterUserId
              }),
          eE({
              channelId: null != m ? m : null,
              applicationId: d
          }));
    let Z = v.filter((e) => e.applicationId !== d);
    S.length > 0 && Z.push(F), j.set(c.id, Z);
    let H = (0, b.wq)(c);
    if (null != H) {
        let e = (null != (a = M.get(H)) ? a : []).filter((e) => e.location.id !== c.id);
        S.length > 0 && e.push(F), M.set(H, e);
    }
    if (null != m) {
        let e = (null != (s = k.get(m)) ? s : []).filter((e) => e.applicationId !== d),
            t = X((0, b.jS)(c)),
            n = (null != (l = x.get(t)) ? l : []).filter((e) => e.applicationId !== d || e.location.id !== c.id);
        S.length > 0 && (e.push(F), n.push(F)), k.set(m, e), x.set(t, n);
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
    L.delete(e.applicationId), p.S.dispatch(S.CkL.RELEASE_ACTIVITY_WEB_VIEW);
}
function et(e) {
    let { guilds: t } = e;
    k.clear(), x.clear(), j.clear(), M.clear(), t.forEach((e) => $(e));
    let n = u.default.getId();
    for (let e of Array.from(L.values())) eN.getEmbeddedActivitiesForLocation(e.location).some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || ee(e);
}
function en(e) {
    let { guild: t } = e;
    $(t);
}
function er(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (t = k.get(r.id)) ? t : [];
    k.set(r.id, []);
    let o = X(r.guild_id),
        a = (null != (n = x.get(o)) ? n : []).filter((e) => (0, b.pY)(e.location) !== r.id);
    x.set(o, a),
        i.forEach((e) => {
            j.delete(e.location.id);
        }),
        M.set(r.id, []);
}
function ei(e) {
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
function eo(e) {
    var t, n;
    let { applicationId: i, launchId: a, compositeInstanceId: l, location: c, participants: h, isFirstActivityInChannel: E, isStart: y, referrerId: v, customId: T, inviterUserId: A } = e,
        N = (0, g.ZP)(i),
        C = u.default.getSessionId();
    if (null == N || null == C || (null == (t = L.get(i)) ? void 0 : t.location.id) === c.id) return !1;
    let P = (0, b.pY)(c),
        R = d.Z.getChannel(P),
        w = null == R ? void 0 : R.getGuildId();
    if (null == _.default.getCurrentUser() || (null == w && !(null != (n = null == R ? void 0 : R.isPrivate()) && n))) return !1;
    r = c;
    let D = {
        applicationId: i,
        url: N,
        userIds: new Set(h.map((e) => e.userId)),
        participants: h,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: l,
        location: c,
        referrerId: v,
        customId: T
    };
    L.set(i, D),
        p.S.dispatch(S.CkL.OPEN_EMBEDDED_ACTIVITY, {
            location: c,
            applicationId: i,
            isFirstActivityInChannel: E,
            isStart: y,
            participants: h,
            embeddedActivity: D,
            inviterUserId: A
        }),
        (0, m.R)()
            ? ((z = I.Ez.ACTIVITY_POPOUT_WINDOW),
              s.Z.wait(() => {
                  s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : P !== f.Z.getChannelId() || (0, O.Z)(P)
              ? c.kind === o.E.CONTEXTLESS
                  ? ((z = I.Ez.PANEL), (q = I.MI.NO_CHAT))
                  : (z = I.Ez.PIP)
              : (z = I.Ez.PANEL),
        K.set(eS(c.id, i), Date.now());
}
function ea(e) {
    let { applicationId: t } = e,
        n = L.get(t);
    L.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}
function es(e) {
    let { layout: t } = e;
    Q = t;
}
function el(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = L.get(null != (t = n.application_id) ? t : '');
    if (null == r) return !1;
    L.set(r.applicationId, A({}, r));
}
function ec(e) {
    let { applicationId: t, config: n } = e,
        r = L.get(t);
    null != r && L.set(r.applicationId, C(A({}, r), { config: n }));
}
function eu(e) {
    let { guildId: t } = e,
        n = X(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    }),
        (P.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}
function ed(e) {
    let { guildId: t } = e,
        n = X(t),
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
        r.label_type === l.ww.NEW &&
            (!a || s) &&
            (Object.values(l.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || P.surfacesToShowNewActivityIndicator.add(e);
            }),
            (P.seenNewActivities[t] = r.label_until));
        let c = P.seenUpdatedActivities[t],
            u = Object.hasOwn(P.seenUpdatedActivities, t),
            d = new Date(c).getTime() < i;
        r.label_type === l.ww.UPDATED &&
            (!u || d) &&
            (Object.values(l.eR).forEach((e) => {
                r.omit_badge_from_surfaces.includes(e) || P.surfacesToShowNewActivityIndicator.add(e);
            }),
            (P.seenUpdatedActivities[t] = r.label_until));
    });
}
function e_(e) {
    let { guildId: t, activities: n } = e,
        r = X(t);
    B.set(r, n);
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
    P.surfacesToShowNewActivityIndicator.clear();
};
function eh(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: o, inviterUserId: a } = e;
    G.set(U(o, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: a,
        launchParams: i
    }),
        (q = r === c.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? I.MI.NO_CHAT : I.MI.RESIZABLE);
}
function em(e) {
    let { applicationId: t } = e;
    P.everLaunchedActivities.add(t);
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
    G.delete(U(n, t));
}
function eb(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? V.delete(t) : V.set(t, n), null === r ? Z.delete(t) : void 0 !== r && Z.set(t, r), null === i ? H.delete(t) : void 0 !== i && H.set(t, i);
}
function ey(e) {
    let { activityPanelMode: t } = e;
    z = t;
}
function eO(e) {
    let { focusedActivityLayout: t } = e;
    q = t;
}
function ev(e) {
    let { applicationId: t, layoutMode: n } = e;
    Y.set(t, n);
}
function eI(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = r.kind === o.E.CONTEXTLESS,
        i = (0, b.pY)(r);
    (n || null != i) && i !== t && z === I.Ez.PANEL && (z = I.Ez.PIP);
}
function eS(e, t) {
    return ''.concat(e, ':').concat(t);
}
function eT(e) {
    let { key: t } = e;
    t === S.KJ3.ACTIVITY_POPOUT && (z = I.Ez.PIP);
}
class eA extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        let r = new Set(null != (t = null == e ? void 0 : e.everLaunchedActivities) ? t : []),
            i = new Set(null != (n = null == e ? void 0 : e.surfacesToShowNewActivityIndicator) ? n : []);
        null != e &&
            (P = C(A({}, e), {
                everLaunchedActivities: r,
                surfacesToShowNewActivityIndicator: i
            }));
    }
    getState() {
        return P;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e ? null : null != (t = Array.from(L.values()).find((t) => (0, b.pY)(t.location) === e)) ? t : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null != (t = Array.from(L.values()).find((t) => t.location.id === e.id)) ? t : null;
    }
    getSelfEmbeddedActivityForStartingChannel(e) {
        if (null != e) return Array.from(L.values()).find((t) => (0, b.wq)(t.location) === e);
    }
    getSelfEmbeddedActivities() {
        return L;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null != (t = x.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null != (t = k.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null != (t = j.get(e.id)) ? t : R;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null != (t = M.get(e)) ? t : R;
    }
    getEmbeddedActivitiesByChannel() {
        return k;
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
        return null != (t = B.get(n)) ? t : w;
    }
    getShelfFetchStatus(e) {
        let t = X(e);
        return F.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = X(e),
            i = null != (t = F.get(r)) ? t : { isFetching: !1 },
            o = Date.now() - (null != (n = null == i ? void 0 : i.lastFetchTimestampMs) ? n : 0) > W;
        return !(null == i ? void 0 : i.isFetching) && o;
    }
    getOrientationLockStateForApp(e) {
        return V.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null != (t = Z.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null != (n = null != (t = H.get(e)) ? t : Z.get(e)) ? n : this.getOrientationLockStateForApp(e);
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
        return P.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return G.get(U(null != t ? t : null, e));
    }
    getLaunchStates() {
        return G;
    }
    getActivityPopoutWindowLayout() {
        return Q;
    }
}
T(eA, 'displayName', 'EmbeddedActivitiesStore'),
    T(eA, 'persistKey', 'EmbeddedActivities'),
    T(eA, 'migrations', [
        (e) =>
            C(A({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }),
        (e) => (delete e.seenFeaturedActivities, A({}, e)),
        (e) => (delete e.seenActivities, A({}, e)),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, A({}, e)),
        (e) =>
            C(A({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {}
            }),
        (e) => {
            var t;
            let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
            return C(A({}, e), { everLaunchedActivities: n });
        },
        (e) => (delete e.usersHavePlayedByApp, A({}, e)),
        (e) => ((e.surfacesToShowNewActivityIndicator = new Set()), e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(l.eR.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, A({}, e)),
        (e) => C(A({}, e), { lastCheckedForBadgeableActivities: null })
    ]);
let eN = new eA(s.Z, {
        ACTIVITY_LAYOUT_MODE_UPDATE: ev,
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
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eb,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: ey,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eO,
        CHANNEL_SELECT: eI,
        POPOUT_WINDOW_CLOSE: eT
    }),
    eC = eN;
