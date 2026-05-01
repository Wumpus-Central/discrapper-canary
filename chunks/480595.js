"use strict";
n.d(t, { A: () => k }), n(321073), n(938796);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(665260),
    l = n(17928),
    u = n(228366),
    c = n(933958),
    d = n(182892),
    _ = n(587895),
    f = n(685396),
    h = n(328153);
let p = [n(732755).A],
    E = [];
function m() {
    let e = [];
    for (let t of p) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, E) && ((E = e), !0);
}
class g extends l.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(p, m);
    }
    getActivities() {
        return E;
    }
}
let A = new g(u.h);
var I = n(155718),
    T = n(871633),
    S = n(655116),
    N = n(885386),
    y = n(617617),
    C = n(616356),
    v = n(734057),
    O = n(760751),
    R = n(794383),
    b = n(309010),
    D = n(528767),
    L = n(652215);
let w = [],
    M = {},
    P = null;
function x() {
    let e = [],
        t = N.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, f.F)(t));
    let n = A.getActivities();
    e.push(...n);
    let i = R.A.getStream();
    null != i && e.push({ type: L.$pd.STREAMING, ...i });
    let s = new Set();
    a().forEach(M, (t) => {
        let [, n] = t;
        null != n.application_id && (s.add(n.name), e.push(n));
    });
    let o = null != C.A.getCurrentUserActiveStream(),
        l = h.Ay.getVisibleGame();
    if (o) {
        let e = C.A.getStreamerActiveStreamMetadata(),
            t = h.Ay.getVisibleRunningGames(),
            n = null;
        e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == P && (P = n.start ?? Date.now()), (l = n)) : (P = null);
    } else P = null;
    let u =
            null != l &&
            null != l.name &&
            (s.has(l.name) ||
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
                                    e.type === I.Mh.LINKED &&
                                    ((n = e.id), null != t.find((e) => e.application_id === n))
                                );
                            })
                    );
                })(l, [...e, ...D.A.getRemoteActivities()])),
        c = null != l && l.isLauncher;
    if (null != l && null != l.name && !(u || (c && !o))) {
        let t = O.A.findGame(l);
        e.push({
            type: L.$pd.PLAYING,
            name: l.name,
            application_id: l.id ?? t?.id,
            timestamps: { start: P ?? l.start },
            ...(0, T.CO)(l),
        });
    }
    let d = S.A.getActivity();
    null != d && e.push({ type: L.$pd.LISTENING, ...d }), r()(w, e) || (w = e);
}
class U extends l.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(_.A, C.A, v.A, c.Ay, R.A, A, O.A, h.Ay, b.A, D.A, S.A, y.A), this.syncWith([A], () => x());
    }
    getActivities() {
        return w;
    }
    getPrimaryActivity() {
        return w[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === L.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return w.find(e);
    }
    getApplicationActivities() {
        return M;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(M)) if (t === e) return n;
        return null;
    }
}
let k = new U(u.h, {
    ROBLOX_SUBGAME_UPDATE: x,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: x,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        (M = { ...t }), x();
    },
    START_SESSION: function () {
        (M = {}), x();
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: s } = e;
        if (r()(M[t], [n, i, s])) return !1;
        null != i ? (M[t] = [n, i, s]) : delete M[t], x();
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        delete M[t], x();
    },
    RUNNING_GAMES_CHANGE: x,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
    SPOTIFY_PLAYER_STATE: x,
    SPOTIFY_PLAYER_PLAY: x,
    STREAMING_UPDATE: x,
    USER_CONNECTIONS_UPDATE: x,
    STREAM_START: x,
    STREAM_STOP: x,
    USER_SETTINGS_PROTO_UPDATE: function () {
        !(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, s]] of Object.entries(M)) {
                let a = r.flags ?? 0,
                    l = (0, d.E)(
                        r,
                        (0, o.Lt)(r?.flags ?? 0, L.jUm.INSTANCE),
                        r.platform === L.yTV.EMBEDDED,
                        (0, d.e)(r),
                        s,
                    );
                l !== a ? ((e[n] = [i, { ...r, flags: l }, s]), (t = !0)) : (e[n] = [i, r, s]);
            }
            t && (M = e);
        })(),
            x();
    },
    EMBEDDED_ACTIVITY_CLOSE: x,
    RUNNING_GAME_TOGGLE_DETECTION: x,
});
