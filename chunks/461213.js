"use strict";
n.d(t, { A: () => W }), n(321073), n(938796);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(665260),
    l = n(311907),
    u = n(73153),
    c = n(90644),
    d = n(655116),
    _ = n(253932),
    f = n(617617),
    p = n(674378),
    h = n(760751),
    m = n(885576),
    g = n(189081),
    E = n(375492),
    A = n(290863),
    I = n(528767),
    T = n(652215);
let y = !1,
    S = T.clD.ONLINE,
    v = T.clD.UNKNOWN,
    C = 0,
    b = [],
    N = [],
    R = !1,
    O = !0,
    D = Object.freeze([]),
    L = Object.freeze([]),
    w = [],
    x = [];
function P(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === T.$pd.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(A.m)[0]].sort(A.m);
}
function M(e) {
    return (0, p.kv)(e, g.A);
}
function k(e) {
    let t = h.A.getGameByName(e);
    return null != t ? M(t.id) : _.tz.getSetting();
}
function U(e) {
    if ((0, o.Lt)(e.flags ?? 0, T.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case T.$pd.LISTENING:
            if ((0, c.A)(e)) return d.A.shouldShowActivity();
            if (null != e.application_id) return M(e.application_id);
            return !1;
        case T.$pd.PLAYING:
            return null != e.application_id ? M(e.application_id) : k(e.name);
        case T.$pd.STREAMING:
        case T.$pd.WATCHING:
        default:
            return null == e.application_id || M(e.application_id);
    }
}
function G() {
    (O = !0), (v = S), V();
}
function V() {
    if (((C = m.A.getIdleSince() ?? 0), (R = m.A.isAFK()), O)) S = v;
    else if (y) S = T.clD.INVISIBLE;
    else {
        let e = _.jP.getSetting();
        S = e !== T.clD.UNKNOWN ? e : T.clD.ONLINE;
    }
    S === T.clD.ONLINE && C > 0 && (S = T.clD.IDLE);
    let e = !1,
        t = O || S === T.clD.INVISIBLE ? [] : E.A.getActivities().filter(U);
    i()(b, t) || ((b = t), (N = P(t)), (e = !0));
    let n = I.A.getRemoteActivities();
    D !== n && ((D = n), (e = !0));
    let r = I.A.getHiddenActivities();
    L !== r && (L = r),
        e &&
            (x = P(
                (w = s()([...b, ...D.filter((e) => e.type !== T.$pd.CUSTOM_STATUS)].sort(A.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            ));
}
function F(e) {
    return (y = e.invisible), V();
}
function B() {
    return (y = !1), V();
}
function j() {
    (O = !1), (v = T.clD.UNKNOWN), V(), A.A.setCurrentUserOnConnectionOpen(S, w);
}
function H() {
    j();
}
class Y extends l.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        this.waitFor(h.A, m.A, g.A, E.A, A.A, I.A, d.A, f.A), this.syncWith([E.A], V);
    }
    getLocalPresence() {
        return { status: S, since: C, activities: N, afk: R };
    }
    getStatus() {
        return S;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? x : N;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w : b;
    }
    getHiddenActivities() {
        return L;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return this.getActivities(e)[0];
    }
    getApplicationActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity((t) => t.application_id === e, t);
    }
    findActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(t).find(e);
    }
}
let W = new Y(u.h, {
    START_SESSION: V,
    CONNECTION_OPEN: H,
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    OVERLAY_INITIALIZE: j,
    CONNECTION_CLOSED: V,
    IDLE: V,
    AFK: V,
    RUNNING_GAMES_CHANGE: V,
    STREAMING_UPDATE: V,
    USER_SETTINGS_PROTO_UPDATE: V,
    LOCAL_ACTIVITY_UPDATE: V,
    SPOTIFY_PLAYER_STATE: V,
    SPOTIFY_PLAYER_PLAY: V,
    USER_CONNECTIONS_UPDATE: V,
    SESSIONS_REPLACE: V,
    RPC_APP_DISCONNECTED: V,
    LIBRARY_FETCH_SUCCESS: V,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: V,
    LOGOUT: G,
    FORCE_INVISIBLE: F,
    WINDOW_FOCUS: B,
});
