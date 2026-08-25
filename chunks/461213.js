"use strict";
n.d(t, { A: () => V }), n(321073), n(938796);
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(228366),
    c = n(90644),
    u = n(655116),
    _ = n(885386),
    E = n(617617),
    A = n(674378),
    h = n(760751),
    I = n(885576),
    f = n(189081),
    p = n(480595),
    T = n(290863),
    m = n(528767),
    g = n(652215);
let S = !1,
    N = g.clD.ONLINE,
    C = g.clD.UNKNOWN,
    R = 0,
    O = [],
    L = [],
    y = !1,
    D = !0,
    v = Object.freeze([]),
    b = Object.freeze([]),
    M = [],
    P = [];
function U(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === g.$pd.PLAYING ? n.push(i) : t.push(i);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(T.m)[0]].sort(T.m);
}
function w(e) {
    return (0, A.kv)(e, f.A);
}
function G(e) {
    if ((0, l.Lt)(e.flags ?? 0, g.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case g.$pd.LISTENING:
            if ((0, c.A)(e)) return u.A.shouldShowActivity();
            if (null != e.application_id) return w(e.application_id);
            return !1;
        case g.$pd.PLAYING:
            var t;
            let n;
            return null != e.application_id
                ? w(e.application_id)
                : ((t = e.name), 1 === (n = h.A.searchGamesByName(t)).length ? w(n[0]) : _.tz.getSetting());
        case g.$pd.STREAMING:
        case g.$pd.WATCHING:
        default:
            return null == e.application_id || w(e.application_id);
    }
}
function x() {
    if (((R = I.A.getIdleSince() ?? 0), (y = I.A.isAFK()), D)) N = C;
    else if (S) N = g.clD.INVISIBLE;
    else {
        let e = _.jP.getSetting();
        N = e !== g.clD.UNKNOWN ? e : g.clD.ONLINE;
    }
    N === g.clD.ONLINE && R > 0 && (N = g.clD.IDLE);
    let e = !1,
        t = D || N === g.clD.INVISIBLE ? [] : p.A.getActivities().filter(G);
    r()(O, t) || ((O = t), (L = U(t)), (e = !0));
    let n = m.A.getRemoteActivities();
    v !== n && ((v = n), (e = !0));
    let i = m.A.getHiddenActivities();
    b !== i && (b = i),
        e &&
            (P = U(
                (M = s()([...O, ...v.filter((e) => e.type !== g.$pd.CUSTOM_STATUS)].sort(T.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            ));
}
function k() {
    (D = !1), (C = g.clD.UNKNOWN), x(), T.A.setCurrentUserOnConnectionOpen(N, M);
}
class F extends o.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        this.waitFor(h.A, I.A, f.A, p.A, T.A, m.A, u.A, E.A), this.syncWith([p.A], x);
    }
    getLocalPresence() {
        return { status: N, since: R, activities: L, afk: y };
    }
    getStatus() {
        return N;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? P : L;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : O;
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
let V = new F(d.h, {
    START_SESSION: x,
    CONNECTION_OPEN: function () {
        k();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: k,
    OVERLAY_INITIALIZE: k,
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
        if (e.state !== g.g6G.ACTIVE || !S) return !1;
        (S = !1), x();
    },
});
