i.r(e), i.d(e, { default: () => t_ }), i(321073), i(667532);
var n = i(284009),
    l = i.n(n),
    a = i(835245),
    r = i(311907),
    s = i(73153),
    o = i(684013),
    u = i(587895),
    c = i(313961),
    d = i(274372),
    A = i(15285),
    f = i(141468),
    y = i(742984),
    p = i(159426),
    m = i(253932),
    I = i(164891),
    g = i(616356),
    E = i(961350),
    N = i(734057),
    _ = i(320501),
    T = i(803224),
    S = i(783592),
    C = i(290863),
    h = i(383501),
    v = i(994500),
    O = i(309010),
    x = i(461213),
    L = i(351906),
    D = i(287809),
    b = i(977997),
    R = i(90165),
    k = i(845618),
    U = i(927813),
    V = i(9302),
    M = i(93465),
    j = i(589051),
    P = i(833551),
    w = i(592598),
    K = i(395011),
    Y = i(897720),
    G = i(243612),
    F = i(240933),
    H = i(428731),
    J = i(714642),
    z = i(122749),
    B = i(925159),
    X = i(128307),
    W = i(533923),
    q = i(965082),
    Q = i(749471),
    Z = i(672396),
    $ = i(652215),
    tt = i(985018);
let te = 5 * U.A.Millis.SECOND,
    ti = 8 * U.A.Millis.SECOND,
    tn = 30 * U.A.Millis.SECOND,
    tl = 30 * U.A.Millis.SECOND,
    ta = Object.freeze({
        timestamp: 0,
        priority: Y.In.NORMAL,
        duration: te,
        expirationExternallyManaged: !1,
        type: Y.zb.GENERIC,
    }),
    tr = [],
    ts = !1,
    to = [],
    tu = {};
function tc(t, e, i) {
    null == tu[t] && (tu[t] = {}), (tu[t][e] = i);
}
let td = 30 * U.A.Millis.MINUTE,
    tA = 2 * U.A.Millis.MINUTE;
function tf() {
    if (ts && null == tr.find((t) => t.status === $.yFH.FOCUSED))
        for (let t of ((ts = !1), (tr = [...tr, ...to]), (to = []), tr.length > 40 && (tr.length = 40), tr))
            t.timer.start();
}
function ty() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    tr.filter((t) => t.type === Y.zb.TEXT && t.status === $.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - tn) && tp(e.id, $.yFH.DISMISSED);
        });
}
function tp(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $.yFH.DISMISSED;
    if (null == t) return !1;
    let i = tr.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = tr[i];
    if ((n.timer.stop(), (tr = [...tr]), e === $.yFH.FOCUSED)) {
        let [t] = tr.splice(i, 1);
        (t = { ...t, status: e }), tr.unshift(t), (ts = !0);
        return;
    }
    e === $.yFH.DISMISSED ? tr.splice(i, 1) : (tr[i] = { ...n, status: e }), tf();
}
function tm(t) {
    let e = tr.find((e) => e.type === Y.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function tI(t, e) {
    let i = { ...ta, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: $.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? $.yFH.TIMED_OUT : $.yFH.DISMISSED;
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : te));
                    },
                    stop() {
                        clearTimeout(n), (n = -1);
                    },
                };
            })(n, i.expirationExternallyManaged, i.duration),
            props: {
                ...t,
                onNotificationShow: () => {
                    l || ((l = !0), t.onNotificationShow?.(n));
                },
            },
            ...i,
        },
        s = ts ? to : [...tr],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        ts || t.timer.stop();
    }
    return ts || ((tr = s), r.timer.start()), n;
}
function tg() {
    if (w.A.isNotificationDisabled(Z.KS.NowPlayingNotification)) return !1;
    let t = S.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in tu) t.push(...Object.keys(tu[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        (n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!v.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = S.A.getUserGame(t);
                    if (null == e) return null;
                    let i = S.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== $.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < tA
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, j.NI)("nowPlayingNotification"),
                    o = w.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    u = O.A.getVoiceChannelId(),
                    c = b.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != u && null != c && u === c) return !1;
                let d = (0, G.qv)();
                if (null == d) return !1;
                let f = d.id !== a;
                return (
                    (!f || (!!s && !o)) &&
                    (!!(R.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !f) &&
                    (null == (n = tu[a]?.[t]?.lastSentTimestamp) || Date.now() - n > td
                        ? (null != (l = (0, B.A)(t, a, r)) &&
                              (tc(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              tI(l, { type: Y.zb.GENERIC, priority: Y.In.NORMAL })),
                          !0)
                        : (tc(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i);
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = K.A.isOverlayV3EnabledForPID(K.A.getTargetPID()) || null != K.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = C.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, G.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in tu) {
                let i = tu[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function tE(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = tm(e);
    if (!Object.keys(i).includes(E.default.getId())) return tp(n);
    if (null != n) return !1;
    let l = N.A.getChannel(e);
    if (
        null == l ||
        !l.isRingable() ||
        ("GUILD_RING_START" === t.type &&
            !I.A.getCurrentConfig({ guildId: t.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        x.A.getStatus() === $.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let a = tr.find((t) => t.type === Y.zb.TEXT && t.channelId === e && t.messageType === $.lAJ.CALL);
    null != a && tp(a.id),
        tI((0, z.A)(l), {
            priority: Y.In.HIGH,
            expirationExternallyManaged: !0,
            type: Y.zb.INCOMING_CALL,
            channelId: l.id,
        });
}
class tN extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            u.A,
            g.A,
            E.default,
            c.A,
            N.A,
            d.A,
            R.A,
            _.A,
            T.A,
            S.A,
            P.default,
            w.A,
            K.A,
            C.A,
            h.A,
            v.A,
            A.Ay,
            O.A,
            x.A,
            L.A,
            D.default,
            b.A,
        ),
            this.syncWith([S.A], tg);
    }
    getNotifications() {
        return tr;
    }
    hasNotificationForChannel(t) {
        return tr.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...tr].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return tr.filter((i) => i.channelId === t && i.type === e);
    }
}
let t_ = new tN(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        tp(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        ty(0);
        let i = K.A.getFocusedPID() ?? V.UNSET_PID;
        if (P.default.hasChangedRenderMode(i)) return;
        let n = (0, Q.A)((0, G.qv)(), e);
        null != n && tI(n, { priority: Y.In.URGENT, type: Y.zb.NUDGE, duration: ti });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of tr) t.status === $.yFH.FOCUSED && tp(t.id, $.yFH.ACTIVE);
            return !0;
        }
        for (let t of (ty(), tr))
            t.type === Y.zb.NUDGE
                ? tp(t.id, $.yFH.DISMISSED)
                : t.status !== $.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (tr.length > 0)
            return tp(
                tr.filter((t) => t.type === Y.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                $.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = N.A.getChannel(e),
            a = D.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([$.xL.JOIN, $.xL.JOIN_REQUEST, $.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, y.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, o, c;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                let d = (0, G.qv)();
                if (null == d || null == d.id) return !1;
                let A = u.A.getApplication(d.id),
                    f = [d.id];
                null != d.altId && f.push(d.altId), A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id));
                let y = e.activity.party_id;
                switch (e.activity.type) {
                    case $.xL.JOIN:
                        (n = (t) => C.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === y);
                        break;
                    case $.xL.JOIN_REQUEST:
                        (n = (t) => x.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y);
                        break;
                    case $.xL.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: m } = p.m.getCurrentConfig(
                            { guildId: t.guild_id, location: "showActivityNotification" },
                            { autoTrackExposure: !1 },
                        );
                        if (!m) return !1;
                        (n = (t) => x.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e);
                        break;
                    default:
                        return !1;
                }
                for (let t of f) {
                    if (null != (r = n(t)) && a(r, t)) {
                        s = t;
                        break;
                    }
                    r = void 0;
                }
                if (null == r || null == s) return !1;
                switch (e.activity.type) {
                    case $.xL.JOIN:
                        o = (0, F.A)(t, e, i, r, s);
                        break;
                    case $.xL.JOIN_REQUEST:
                        o = (0, X.A)(t, i, d, r);
                        break;
                    case $.xL.STREAM_REQUEST:
                        o = (0, W.A)(t, i, d, r);
                }
                return (
                    null != o &&
                    (tI(o, {
                        priority: Y.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: tl,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    (c = new Set()),
                    tr
                        .filter((t) => null != t.uniqueKey)
                        .sort((t, e) => e.timestamp - t.timestamp)
                        .forEach((t) => {
                            null != t.uniqueKey &&
                                (c.has(t.uniqueKey) ? tp(t.id, $.yFH.DISMISSED) : c.add(t.uniqueKey));
                        }),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (w.A.isNotificationDisabled(Z.KS.TextChat) || L.A.disableNotifications || !(0, y.lx)(i, e)) return !1;
        let r = !T.A.isSoundDisabled(k.cH),
            s = _.A.getMessage(e, i.id) ?? (0, f.rh)(i),
            o = (0, q.A)(n, s, a, r);
        if (null == o) return !1;
        tI(o, { type: Y.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), ty();
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = tr.length),
            (i = (tr = tr.filter((t) => t.type !== Y.zb.TEXT || t.channelId !== n)).length !== e) && tf(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: tE,
    CALL_UPDATE: tE,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        tp(tm(e));
    },
    GUILD_RING_START: tE,
    GUILD_RING_STOP: function (t) {
        let { channelId: e, guildId: i, ringing: n } = t;
        if (!I.A.getCurrentConfig({ guildId: i, location: "OverlayV3StopRinging" }).enabled) return !1;
        n.includes(E.default.getId()) && tp(tm(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, G.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === $.xL.JOIN && (e = (0, H.A)(n, a)),
            null != e && void tI(e, { priority: Y.In.URGENT, type: Y.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        "manual" === t.clipMethod && tI((0, J.V)(tt.intl.string(tt.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        tI((0, J.V)(tt.intl.string(tt.t["1ZbZuh"])));
    },
    STREAM_START: function (t) {
        let e = (0, J.t)();
        null != e && tI(e);
    },
});
