"use strict";
n.d(t, { A: () => x }), n(321073), n(938796);
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(228366),
    c = n(933958),
    u = n(182892),
    _ = n(587895),
    E = n(685396),
    A = n(952818);
let h = [n(732755).A],
    I = [];
function f() {
    let e = [];
    for (let t of h) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, I) && ((I = e), !0);
}
class p extends o.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(h, f);
    }
    getActivities() {
        return I;
    }
}
let T = new p(d.h);
var m = n(155718),
    g = n(871633),
    S = n(655116),
    N = n(885386),
    C = n(617617),
    R = n(616356),
    O = n(734057),
    L = n(760751),
    y = n(794383),
    D = n(309010),
    v = n(528767),
    b = n(652215);
let M = [],
    P = {},
    U = null;
function w() {
    let e = [],
        t = N.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, E.F)(t));
    let n = T.getActivities();
    e.push(...n);
    let i = y.A.getStream();
    null != i && e.push({ type: b.$pd.STREAMING, ...i });
    let a = new Set();
    s().forEach(P, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let l = null != R.A.getCurrentUserActiveStream(),
        o = A.Ay.getVisibleGame();
    if (l) {
        let e = R.A.getStreamerActiveStreamMetadata(),
            t = A.Ay.getVisibleRunningGames(),
            n = null;
        e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == U && (U = n.start ?? Date.now()), (o = n)) : (U = null);
    } else U = null;
    let d =
            null != o &&
            null != o.name &&
            (a.has(o.name) ||
                (function (e, t) {
                    if (null === e.id || void 0 === e.id) return !1;
                    let n = _.A.getApplication(e.id);
                    return (
                        null != n &&
                        null != n.linkedGames &&
                        n.linkedGames.length > 0 &&
                        void 0 !==
                            n.linkedGames.find((e) => {
                                var n;
                                return (
                                    e.type === m.Mh.LINKED &&
                                    ((n = e.id), null != t.find((e) => e.application_id === n))
                                );
                            })
                    );
                })(o, [...e, ...v.A.getRemoteActivities()])),
        c = null != o && o.isLauncher;
    if (null != o && null != o.name && !(d || (c && !l))) {
        let t = L.A.findGame(o);
        e.push({
            type: b.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: U ?? o.start },
            ...(0, g.CO)(o),
        });
    }
    let u = S.A.getActivity();
    null != u && e.push({ type: b.$pd.LISTENING, ...u }), r()(M, e) || (M = e);
}
class G extends o.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(_.A, R.A, O.A, c.Ay, y.A, T, L.A, A.Ay, D.Ay, v.A, S.A, C.A), this.syncWith([T], () => w());
    }
    getActivities() {
        return M;
    }
    getPrimaryActivity() {
        return M[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === b.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return M.find(e);
    }
    getApplicationActivities() {
        return P;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(P)) if (t === e) return n;
        return null;
    }
}
let x = new G(d.h, {
    ROBLOX_SUBGAME_UPDATE: w,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: w,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        (P = { ...t }), w();
    },
    START_SESSION: function () {
        (P = {}), w();
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e;
        if (r()(P[t], [n, i, a])) return !1;
        null != i ? (P[t] = [n, i, a]) : delete P[t], w();
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        delete P[t], w();
    },
    RUNNING_GAMES_CHANGE: w,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: w,
    SPOTIFY_PLAYER_STATE: w,
    SPOTIFY_PLAYER_PLAY: w,
    STREAMING_UPDATE: w,
    USER_CONNECTIONS_UPDATE: w,
    STREAM_START: w,
    STREAM_STOP: w,
    USER_SETTINGS_PROTO_UPDATE: function () {
        !(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, a]] of Object.entries(P)) {
                let s = r.flags ?? 0,
                    o = (0, u.E)(
                        r,
                        (0, l.Lt)(r?.flags ?? 0, b.jUm.INSTANCE),
                        r.platform === b.yTV.EMBEDDED,
                        (0, u.e)(r),
                        a,
                    );
                o !== s ? ((e[n] = [i, { ...r, flags: o }, a]), (t = !0)) : (e[n] = [i, r, a]);
            }
            t && (P = e);
        })(),
            w();
    },
    EMBEDDED_ACTIVITY_CLOSE: w,
    RUNNING_GAME_TOGGLE_DETECTION: w,
});
