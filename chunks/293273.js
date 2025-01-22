var i,
    a = r(653041);
var o = r(47120);
var s = r(348327),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    p = r(317381),
    h = r(676035),
    _ = r(594190),
    m = r(106301),
    g = r(406066),
    E = r(768419),
    v = r(695346),
    y = r(581883),
    b = r(199902),
    I = r(272053),
    T = r(77498),
    S = r(981631);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = [],
    N = {};
function R() {
    let e = [],
        n = v.Ok.getSetting();
    null != n && ('0' === n.expiresAtMs || new Date(Number(n.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, h.I)(n));
    let r = g.Z.getActivities();
    e.push(...r);
    let i = I.Z.getStream();
    null != i &&
        e.push({
            type: S.IIU.STREAMING,
            ...i
        });
    let a = new Set();
    c().forEach(N, (n) => {
        let [, r] = n;
        null != r.application_id && (a.add(r.name), e.push(r));
    });
    let o = _.ZP.getVisibleGame(),
        s = null != o && null != o.name && a.has(o.name),
        u = null != o && o.isLauncher,
        d = null != b.Z.getCurrentUserActiveStream(),
        f = s || (u && !d);
    if (null != o && null != o.name && !f) {
        var p, y;
        e.push({
            type: S.IIU.PLAYING,
            name: o.name,
            application_id: null !== (y = o.id) && void 0 !== y ? y : null === (p = T.Z.getGameByName(o.name)) || void 0 === p ? void 0 : p.id,
            timestamps: { start: o.start }
        });
    }
    let A = E.Z.getActivity();
    null != A &&
        e.push({
            type: S.IIU.LISTENING,
            ...A
        });
    let R = m.Z.getCurrentHangStatus();
    if (null != R) {
        let n = m.Z.getCustomHangStatus();
        e.push({
            type: S.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: R,
            details: null == n ? void 0 : n.status,
            emoji: null == n ? void 0 : n.emoji
        });
    }
    !l()(C, e) && (C = e);
}
function O() {
    (N = {}), R();
}
function D(e) {
    let { socketId: n, pid: r, activity: i } = e;
    if (l()(N[n], [r, i])) return !1;
    null != i ? (N[n] = [r, i]) : delete N[n], R();
}
function L(e) {
    let { socketId: n } = e;
    delete N[n], R();
}
function x(e) {
    let { localActivities: n } = e;
    (N = { ...n }), R();
}
class w extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, p.ZP, I.Z, b.Z, E.Z, y.Z, m.Z, T.Z), this.syncWith([g.Z, m.Z], () => R());
    }
    getActivities() {
        return C;
    }
    getPrimaryActivity() {
        return C[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((n) => n.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === S.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return C.find(e);
    }
    getApplicationActivities() {
        return N;
    }
    getActivityForPID(e) {
        for (let [n, r] of Object.values(N)) if (n === e) return r;
        return null;
    }
}
A(w, 'displayName', 'LocalActivityStore'),
    (n.Z = new w(f.Z, {
        OVERLAY_INITIALIZE: x,
        START_SESSION: O,
        LOCAL_ACTIVITY_UPDATE: D,
        RPC_APP_DISCONNECTED: L,
        RUNNING_GAMES_CHANGE: R,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: R,
        SPOTIFY_PLAYER_STATE: R,
        SPOTIFY_PLAYER_PLAY: R,
        STREAMING_UPDATE: R,
        USER_CONNECTIONS_UPDATE: R,
        STREAM_START: R,
        STREAM_STOP: R,
        USER_SETTINGS_PROTO_UPDATE: R,
        EMBEDDED_ACTIVITY_CLOSE: R,
        UPDATE_HANG_STATUS: R
    }));
