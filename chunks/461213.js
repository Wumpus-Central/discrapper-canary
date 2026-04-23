"use strict";
n.d(t, { A: () => V }), n(321073), n(938796);
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
    E = n(885576),
    m = n(189081),
    g = n(375492),
    A = n(290863),
    I = n(528767),
    T = n(652215);
let S = !1,
    y = T.clD.ONLINE,
    N = T.clD.UNKNOWN,
    v = 0,
    C = [],
    O = [],
    R = !1,
    b = !0,
    D = Object.freeze([]),
    L = Object.freeze([]),
    w = [],
    M = [];
function P(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === T.$pd.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(A.m)[0]].sort(A.m);
}
function x(e) {
    return (0, p.kv)(e, m.A);
}
function k(e) {
    if ((0, o.Lt)(e.flags ?? 0, T.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case T.$pd.LISTENING:
            if ((0, c.A)(e)) return d.A.shouldShowActivity();
            if (null != e.application_id) return x(e.application_id);
            return !1;
        case T.$pd.PLAYING:
            var t;
            let n;
            return null != e.application_id
                ? x(e.application_id)
                : ((t = e.name), 1 === (n = h.A.searchGamesByName(t)).length ? x(n[0]) : _.tz.getSetting());
        case T.$pd.STREAMING:
        case T.$pd.WATCHING:
        default:
            return null == e.application_id || x(e.application_id);
    }
}
function U() {
    if (((v = E.A.getIdleSince() ?? 0), (R = E.A.isAFK()), b)) y = N;
    else if (S) y = T.clD.INVISIBLE;
    else {
        let e = _.jP.getSetting();
        y = e !== T.clD.UNKNOWN ? e : T.clD.ONLINE;
    }
    y === T.clD.ONLINE && v > 0 && (y = T.clD.IDLE);
    let e = !1,
        t = b || y === T.clD.INVISIBLE ? [] : g.A.getActivities().filter(k);
    i()(C, t) || ((C = t), (O = P(t)), (e = !0));
    let n = I.A.getRemoteActivities();
    D !== n && ((D = n), (e = !0));
    let r = I.A.getHiddenActivities();
    L !== r && (L = r),
        e &&
            (M = P(
                (w = a()([...C, ...D.filter((e) => e.type !== T.$pd.CUSTOM_STATUS)].sort(A.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            ));
}
function G() {
    (b = !1), (N = T.clD.UNKNOWN), U(), A.A.setCurrentUserOnConnectionOpen(y, w);
}
class F extends l.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        this.waitFor(h.A, E.A, m.A, g.A, A.A, I.A, d.A, f.A), this.syncWith([g.A], U);
    }
    getLocalPresence() {
        return { status: y, since: v, activities: O, afk: R };
    }
    getStatus() {
        return y;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : O;
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
let V = new F(u.h, {
    START_SESSION: U,
    CONNECTION_OPEN: function () {
        G();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    OVERLAY_INITIALIZE: G,
    CONNECTION_CLOSED: U,
    IDLE: U,
    AFK: U,
    RUNNING_GAMES_CHANGE: U,
    STREAMING_UPDATE: U,
    USER_SETTINGS_PROTO_UPDATE: U,
    LOCAL_ACTIVITY_UPDATE: U,
    SPOTIFY_PLAYER_STATE: U,
    SPOTIFY_PLAYER_PLAY: U,
    USER_CONNECTIONS_UPDATE: U,
    SESSIONS_REPLACE: U,
    RPC_APP_DISCONNECTED: U,
    LIBRARY_FETCH_SUCCESS: U,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: U,
    LOGOUT: function () {
        (b = !0), (N = y), U();
    },
    FORCE_INVISIBLE: function (e) {
        return (S = e.invisible), U();
    },
    WINDOW_FOCUS: function () {
        return (S = !1), U();
    },
    APP_STATE_UPDATE: function (e) {
        if (e.state !== T.g6G.ACTIVE || !S) return !1;
        (S = !1), U();
    },
});
