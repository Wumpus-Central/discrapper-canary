n.d(t, {
    A: () => z,
}),
    n(321073),
    n(896048),
    n(638769),
    n(938796);
var r,
    i = n(812729),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(665260),
    c = n(311907),
    u = n(73153),
    d = n(90644),
    f = n(655116),
    p = n(253932),
    _ = n(617617),
    h = n(674378),
    m = n(760751),
    g = n(885576),
    E = n(189081),
    b = n(375492),
    y = n(290863),
    O = n(528767),
    A = n(652215);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let S = !1,
    I = A.clD.ONLINE,
    T = A.clD.UNKNOWN,
    C = 0,
    N = [],
    R = [],
    w = !1,
    P = !0,
    D = Object.freeze([]),
    x = Object.freeze([]),
    L = [],
    j = [];

function M(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === A.$pd.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(y.m)[0]].sort(y.m);
}

function k(e) {
    return (0, h.kv)(e, E.A);
}

function U(e) {
    let t = m.A.getGameByName(e);
    return null != t ? k(t.id) : p.tz.getSetting();
}

function G(e) {
    var t;
    if ((0, l.Lt)(null != (t = e.flags) ? t : 0, A.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case A.$pd.LISTENING:
            if ((0, d.A)(e)) return f.A.shouldShowActivity();
            if (null != e.application_id) return k(e.application_id);
            return !1;
        case A.$pd.PLAYING:
            return null != e.application_id ? k(e.application_id) : U(e.name);
        case A.$pd.STREAMING:
        case A.$pd.WATCHING:
        default:
            return null == e.application_id || k(e.application_id);
    }
}

function V() {
    (P = !0), (T = I), F();
}

function F() {
    var e;
    if (((C = null != (e = g.A.getIdleSince()) ? e : 0), (w = g.A.isAFK()), P)) I = T;
    else if (S) I = A.clD.INVISIBLE;
    else {
        let e = p.jP.getSetting();
        I = e !== A.clD.UNKNOWN ? e : A.clD.ONLINE;
    }
    I === A.clD.ONLINE && C > 0 && (I = A.clD.IDLE);
    let t = !1,
        n = P || I === A.clD.INVISIBLE ? [] : b.A.getActivities().filter(G);
    a()(N, n) || ((N = n), (R = M(n)), (t = !0));
    let r = O.A.getRemoteActivities();
    D !== r && ((D = r), (t = !0));
    let i = O.A.getHiddenActivities();
    x !== i && (x = i),
        t &&
            (j = M(
                (L = o()([...N, ...D.filter((e) => e.type !== A.$pd.CUSTOM_STATUS)].sort(y.m))
                    .uniqBy((e) => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
                    .value()),
            ));
}

function B(e) {
    return (S = e.invisible), F();
}

function H() {
    return (S = !1), F();
}

function Y() {
    (P = !1), (T = A.clD.UNKNOWN), F(), y.A.setCurrentUserOnConnectionOpen(I, L);
}

function W() {
    Y();
}
class K extends (r = c.Ay.Store) {
    initialize() {
        this.waitFor(m.A, g.A, E.A, b.A, y.A, O.A, f.A, _.A), this.syncWith([b.A], F);
    }
    getLocalPresence() {
        return {
            status: I,
            since: C,
            activities: R,
            afk: w,
        };
    }
    getStatus() {
        return I;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? j : R;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? L : N;
    }
    getHiddenActivities() {
        return x;
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
v(K, "displayName", "SelfPresenceStore");
let z = new K(u.h, {
    START_SESSION: F,
    CONNECTION_OPEN: W,
    CONNECTION_OPEN_SUPPLEMENTAL: Y,
    OVERLAY_INITIALIZE: Y,
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
    LOGOUT: V,
    FORCE_INVISIBLE: B,
    WINDOW_FOCUS: H,
});
