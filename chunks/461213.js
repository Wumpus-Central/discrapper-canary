"use strict";
n.d(t, { A: () => K }), n(321073), n(938796);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
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
    E = n(189081),
    g = n(375492),
    A = n(290863),
    I = n(528767),
    T = n(652215);
let S = !1,
    y = T.clD.ONLINE,
    v = T.clD.UNKNOWN,
    N = 0,
    C = [],
    R = [],
    O = !1,
    b = !0,
    D = Object.freeze([]),
    L = Object.freeze([]),
    w = [],
    M = [];
function x(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === T.$pd.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(A.m)[0]].sort(A.m);
}
function P(e) {
    return (0, p.kv)(e, E.A);
}
function k(e) {
    let t = h.A.searchGamesByName(e);
    return 1 === t.length ? P(t[0]) : _.tz.getSetting();
}
function U(e) {
    if ((0, o.Lt)(e.flags ?? 0, T.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case T.$pd.LISTENING:
            if ((0, c.A)(e)) return d.A.shouldShowActivity();
            if (null != e.application_id) return P(e.application_id);
            return !1;
        case T.$pd.PLAYING:
            return null != e.application_id ? P(e.application_id) : k(e.name);
        case T.$pd.STREAMING:
        case T.$pd.WATCHING:
        default:
            return null == e.application_id || P(e.application_id);
    }
}
function G() {
    (b = !0), (v = y), F();
}
function F() {
    if (((N = m.A.getIdleSince() ?? 0), (O = m.A.isAFK()), b)) y = v;
    else if (S) y = T.clD.INVISIBLE;
    else {
        let e = _.jP.getSetting();
        y = e !== T.clD.UNKNOWN ? e : T.clD.ONLINE;
    }
    y === T.clD.ONLINE && N > 0 && (y = T.clD.IDLE);
    let e = !1,
        t = b || y === T.clD.INVISIBLE ? [] : g.A.getActivities().filter(U);
    i()(C, t) || ((C = t), (R = x(t)), (e = !0));
    let n = I.A.getRemoteActivities();
    D !== n && ((D = n), (e = !0));
    let r = I.A.getHiddenActivities();
    L !== r && (L = r),
        e &&
            (M = x(
                (w = a()([...C, ...D.filter((e) => e.type !== T.$pd.CUSTOM_STATUS)].sort(A.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            ));
}
function V(e) {
    return (S = e.invisible), F();
}
function B() {
    return (S = !1), F();
}
function H(e) {
    if (e.state !== T.g6G.ACTIVE || !S) return !1;
    (S = !1), F();
}
function j() {
    (b = !1), (v = T.clD.UNKNOWN), F(), A.A.setCurrentUserOnConnectionOpen(y, w);
}
function Y() {
    j();
}
class W extends l.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        this.waitFor(h.A, m.A, E.A, g.A, A.A, I.A, d.A, f.A), this.syncWith([g.A], F);
    }
    getLocalPresence() {
        return { status: y, since: N, activities: R, afk: O };
    }
    getStatus() {
        return y;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : R;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w : C;
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
let K = new W(u.h, {
    START_SESSION: F,
    CONNECTION_OPEN: Y,
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    OVERLAY_INITIALIZE: j,
    CONNECTION_CLOSED: F,
    IDLE: F,
    AFK: F,
    RUNNING_GAMES_CHANGE: F,
    STREAMING_UPDATE: F,
    USER_SETTINGS_PROTO_UPDATE: F,
    LOCAL_ACTIVITY_UPDATE: F,
    SPOTIFY_PLAYER_STATE: F,
    SPOTIFY_PLAYER_PLAY: F,
    USER_CONNECTIONS_UPDATE: F,
    SESSIONS_REPLACE: F,
    RPC_APP_DISCONNECTED: F,
    LIBRARY_FETCH_SUCCESS: F,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: F,
    LOGOUT: G,
    FORCE_INVISIBLE: V,
    WINDOW_FOCUS: B,
    APP_STATE_UPDATE: H,
});
