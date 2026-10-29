(n.d(t, { A: () => F }), n(321073));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(73153),
    d = n(90644),
    c = n(655116),
    u = n(253932),
    _ = n(617617),
    E = n(674378),
    A = n(760751),
    h = n(885576),
    f = n(189081),
    I = n(480595),
    p = n(290863),
    T = n(528767),
    m = n(652215);
let g = !1,
    S = m.clD.ONLINE,
    N = m.clD.UNKNOWN,
    C = 0,
    O = [],
    R = [],
    L = !1,
    y = !0,
    D = Object.freeze([]),
    v = Object.freeze([]),
    b = [],
    M = [];
function P(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === m.$pd.PLAYING ? n.push(i) : t.push(i);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(p.m)[0]].sort(p.m);
}
function U(e) {
    return (0, E.kv)(e, f.A);
}
function w(e) {
    switch (e.type) {
        case m.$pd.LISTENING:
            if ((0, d.A)(e)) return c.A.shouldShowActivity();
            if (null != e.application_id) return U(e.application_id);
            return !1;
        case m.$pd.PLAYING:
            var t;
            let n;
            return null != e.application_id
                ? U(e.application_id)
                : ((t = e.name), 1 === (n = A.A.searchGamesByName(t)).length ? U(n[0]) : u.tz.getSetting());
        case m.$pd.STREAMING:
        case m.$pd.WATCHING:
        default:
            return null == e.application_id || U(e.application_id);
    }
}
function G() {
    if (((C = h.A.getIdleSince() ?? 0), (L = h.A.isAFK()), y)) S = N;
    else if (g) S = m.clD.INVISIBLE;
    else {
        let e = u.jP.getSetting();
        S = e !== m.clD.UNKNOWN ? e : m.clD.ONLINE;
    }
    S === m.clD.ONLINE && C > 0 && (S = m.clD.IDLE);
    let e = !1,
        t = y || S === m.clD.INVISIBLE ? [] : I.A.getActivities().filter(w);
    r()(O, t) || ((O = t), (R = P(t)), (e = !0));
    let n = T.A.getRemoteActivities();
    D !== n && ((D = n), (e = !0));
    let i = T.A.getHiddenActivities();
    (v !== i && (v = i),
        e &&
            (M = P(
                (b = s()([...O, ...D.filter((e) => e.type !== m.$pd.CUSTOM_STATUS)].sort(p.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            )));
}
function x() {
    ((y = !1), (N = m.clD.UNKNOWN), G(), p.A.setCurrentUserOnConnectionOpen(S, b));
}
class k extends l.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        (this.waitFor(A.A, h.A, f.A, I.A, p.A, T.A, c.A, _.A), this.syncWith([I.A], G));
    }
    getLocalPresence() {
        return { status: S, since: C, activities: R, afk: L };
    }
    getStatus() {
        return S;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : R;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? b : O;
    }
    getHiddenActivities() {
        return v;
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
let F = new k(o.h, {
    START_SESSION: G,
    CONNECTION_OPEN: function () {
        x();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: x,
    OVERLAY_INITIALIZE: x,
    CONNECTION_CLOSED: G,
    IDLE: G,
    AFK: G,
    RUNNING_GAMES_CHANGE: G,
    STREAMING_UPDATE: G,
    USER_SETTINGS_PROTO_UPDATE: G,
    LOCAL_ACTIVITY_UPDATE: G,
    SPOTIFY_PLAYER_STATE: G,
    SPOTIFY_PLAYER_PLAY: G,
    USER_CONNECTIONS_UPDATE: G,
    SESSIONS_REPLACE: G,
    RPC_APP_DISCONNECTED: G,
    LIBRARY_FETCH_SUCCESS: G,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: G,
    LOGOUT: function () {
        ((y = !0), (N = S), G());
    },
    FORCE_INVISIBLE: function (e) {
        return ((g = e.invisible), G());
    },
    WINDOW_FOCUS: function () {
        return ((g = !1), G());
    },
    APP_STATE_UPDATE: function (e) {
        if (e.state !== m.g6G.ACTIVE || !g) return !1;
        ((g = !1), G());
    },
});
