n.d(t, { Z: () => D }), n(653041), n(47120);
var i,
    r = n(348327),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(317381),
    d = n(676035),
    f = n(594190),
    _ = n(406066),
    p = n(768419),
    h = n(695346),
    m = n(581883),
    g = n(199902),
    E = n(272053),
    v = n(77498),
    y = n(981631);
function I(e, t, n) {
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
let b = [],
    T = {};
function S() {
    let e = [],
        t = h.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, d.I)(t));
    let n = _.Z.getActivities();
    e.push(...n);
    let i = E.Z.getStream();
    null != i &&
        e.push({
            type: y.IIU.STREAMING,
            ...i
        });
    let r = new Set();
    o().forEach(T, (t) => {
        let [, n] = t;
        null != n.application_id && (r.add(n.name), e.push(n));
    });
    let s = f.ZP.getVisibleGame(),
        l = null != s && null != s.name && r.has(s.name),
        u = null != s && s.isLauncher,
        c = null != g.Z.getCurrentUserActiveStream(),
        m = l || (u && !c);
    if (null != s && null != s.name && !m) {
        var I, S;
        e.push({
            type: y.IIU.PLAYING,
            name: s.name,
            application_id: null !== (S = s.id) && void 0 !== S ? S : null === (I = v.Z.getGameByName(s.name)) || void 0 === I ? void 0 : I.id,
            timestamps: { start: s.start }
        });
    }
    let A = p.Z.getActivity();
    null != A &&
        e.push({
            type: y.IIU.LISTENING,
            ...A
        }),
        a()(b, e) || (b = e);
}
function A() {
    (T = {}), S();
}
function N(e) {
    let { socketId: t, pid: n, activity: i } = e;
    if (a()(T[t], [n, i])) return !1;
    null != i ? (T[t] = [n, i]) : delete T[t], S();
}
function C(e) {
    let { socketId: t } = e;
    delete T[t], S();
}
function R(e) {
    let { localActivities: t } = e;
    (T = { ...t }), S();
}
class O extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, c.ZP, E.Z, g.Z, p.Z, m.Z, v.Z), this.syncWith([_.Z], () => S());
    }
    getActivities() {
        return b;
    }
    getPrimaryActivity() {
        return b[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === y.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return b.find(e);
    }
    getApplicationActivities() {
        return T;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(T)) if (t === e) return n;
        return null;
    }
}
I(O, 'displayName', 'LocalActivityStore');
let D = new O(u.Z, {
    OVERLAY_INITIALIZE: R,
    START_SESSION: A,
    LOCAL_ACTIVITY_UPDATE: N,
    RPC_APP_DISCONNECTED: C,
    RUNNING_GAMES_CHANGE: S,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: S,
    SPOTIFY_PLAYER_STATE: S,
    SPOTIFY_PLAYER_PLAY: S,
    STREAMING_UPDATE: S,
    USER_CONNECTIONS_UPDATE: S,
    STREAM_START: S,
    STREAM_STOP: S,
    USER_SETTINGS_PROTO_UPDATE: S,
    EMBEDDED_ACTIVITY_CLOSE: S
});
