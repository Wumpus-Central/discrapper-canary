"use strict";
n.d(t, { A: () => F }), n(321073), n(938796);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(665260),
    l = n(17928),
    d = n(228366),
    _ = n(90644),
    u = n(655116),
    c = n(253932),
    E = n(617617),
    h = n(674378),
    m = n(760751),
    f = n(885576),
    g = n(189081),
    p = n(375492),
    A = n(290863),
    I = n(528767),
    T = n(652215);
let S = !1,
    N = T.clD.ONLINE,
    C = T.clD.UNKNOWN,
    R = 0,
    O = [],
    y = [],
    v = !1,
    D = !0,
    L = Object.freeze([]),
    b = Object.freeze([]),
    w = [],
    P = [];
function k(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === T.$pd.PLAYING ? n.push(i) : t.push(i);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(A.m)[0]].sort(A.m);
}
function M(e) {
    return (0, h.kv)(e, g.A);
}
function U(e) {
    if ((0, o.Lt)(e.flags ?? 0, T.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case T.$pd.LISTENING:
            if ((0, _.A)(e)) return u.A.shouldShowActivity();
            if (null != e.application_id) return M(e.application_id);
            return !1;
        case T.$pd.PLAYING:
            var t;
            let n;
            return null != e.application_id
                ? M(e.application_id)
                : ((t = e.name), 1 === (n = m.A.searchGamesByName(t)).length ? M(n[0]) : c.tz.getSetting());
        case T.$pd.STREAMING:
        case T.$pd.WATCHING:
        default:
            return null == e.application_id || M(e.application_id);
    }
}
function x() {
    if (((R = f.A.getIdleSince() ?? 0), (v = f.A.isAFK()), D)) N = C;
    else if (S) N = T.clD.INVISIBLE;
    else {
        let e = c.jP.getSetting();
        N = e !== T.clD.UNKNOWN ? e : T.clD.ONLINE;
    }
    N === T.clD.ONLINE && R > 0 && (N = T.clD.IDLE);
    let e = !1,
        t = D || N === T.clD.INVISIBLE ? [] : p.A.getActivities().filter(U);
    r()(O, t) || ((O = t), (y = k(t)), (e = !0));
    let n = I.A.getRemoteActivities();
    L !== n && ((L = n), (e = !0));
    let i = I.A.getHiddenActivities();
    b !== i && (b = i),
        e &&
            (P = k(
                (w = a()([...O, ...L.filter((e) => e.type !== T.$pd.CUSTOM_STATUS)].sort(A.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            ));
}
function G() {
    (D = !1), (C = T.clD.UNKNOWN), x(), A.A.setCurrentUserOnConnectionOpen(N, w);
}
class V extends l.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        this.waitFor(m.A, f.A, g.A, p.A, A.A, I.A, u.A, E.A), this.syncWith([p.A], x);
    }
    getLocalPresence() {
        return { status: N, since: R, activities: y, afk: v };
    }
    getStatus() {
        return N;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? P : y;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w : O;
    }
    getHiddenActivities() {
        return b;
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
let F = new V(d.h, {
    START_SESSION: x,
    CONNECTION_OPEN: function () {
        G();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    OVERLAY_INITIALIZE: G,
    CONNECTION_CLOSED: x,
    IDLE: x,
    AFK: x,
    RUNNING_GAMES_CHANGE: x,
    STREAMING_UPDATE: x,
    USER_SETTINGS_PROTO_UPDATE: x,
    LOCAL_ACTIVITY_UPDATE: x,
    SPOTIFY_PLAYER_STATE: x,
    SPOTIFY_PLAYER_PLAY: x,
    USER_CONNECTIONS_UPDATE: x,
    SESSIONS_REPLACE: x,
    RPC_APP_DISCONNECTED: x,
    LIBRARY_FETCH_SUCCESS: x,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
    LOGOUT: function () {
        (D = !0), (C = N), x();
    },
    FORCE_INVISIBLE: function (e) {
        return (S = e.invisible), x();
    },
    WINDOW_FOCUS: function () {
        return (S = !1), x();
    },
    APP_STATE_UPDATE: function (e) {
        if (e.state !== T.g6G.ACTIVE || !S) return !1;
        (S = !1), x();
    },
});
