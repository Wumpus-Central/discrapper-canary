n.d(t, { A: () => ey }), n(321073), n(667532);
var i = n(284009),
    l = n.n(i),
    a = n(835245),
    s = n(311907),
    r = n(73153),
    o = n(684013),
    d = n(587895),
    u = n(313961),
    c = n(274372),
    h = n(15285),
    A = n(141468),
    m = n(742984),
    p = n(159426),
    g = n(253932),
    f = n(164891),
    _ = n(616356),
    E = n(961350),
    x = n(734057),
    S = n(320501),
    I = n(803224),
    T = n(783592),
    y = n(290863),
    C = n(383501),
    v = n(994500),
    N = n(309010),
    O = n(461213),
    b = n(351906),
    j = n(287809),
    w = n(977997),
    L = n(90165),
    R = n(845618),
    D = n(927813),
    M = n(9302),
    k = n(93465),
    z = n(589051),
    V = n(833551),
    P = n(592598),
    U = n(395011),
    G = n(897720),
    H = n(243612),
    Y = n(240933),
    F = n(428731),
    K = n(714642),
    W = n(970495),
    Z = n(122749),
    X = n(925159),
    B = n(128307),
    J = n(533923),
    Q = n(965082),
    q = n(749471),
    $ = n(672396),
    ee = n(652215),
    et = n(985018);
let en = 5 * D.A.Millis.SECOND,
    ei = 8 * D.A.Millis.SECOND,
    el = 30 * D.A.Millis.SECOND,
    ea = 30 * D.A.Millis.SECOND,
    es = Object.freeze({
        timestamp: 0,
        priority: G.In.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: G.zb.GENERIC,
    }),
    er = [],
    eo = !1,
    ed = [],
    eu = {};
function ec(e, t, n) {
    null == eu[e] && (eu[e] = {}), (eu[e][t] = n);
}
let eh = 30 * D.A.Millis.MINUTE,
    eA = 2 * D.A.Millis.MINUTE;
function em() {
    if (eo && null == er.find((e) => e.status === ee.yFH.FOCUSED))
        for (let e of ((eo = !1), (er = [...er, ...ed]), (ed = []), er.length > 40 && (er.length = 40), er))
            e.timer.start();
}
function ep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    er.filter((e) => e.type === G.zb.TEXT && e.status === ee.yFH.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - el) && eg(t.id, ee.yFH.DISMISSED);
        });
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.yFH.DISMISSED;
    if (null == e) return !1;
    let n = er.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = er[n];
    if ((i.timer.stop(), (er = [...er]), t === ee.yFH.FOCUSED)) {
        let [e] = er.splice(n, 1);
        (e = { ...e, status: t }), er.unshift(e), (eo = !0);
        return;
    }
    t === ee.yFH.DISMISSED ? er.splice(n, 1) : (er[n] = { ...i, status: t }), em();
}
function ef(e) {
    let t = er.find((t) => t.type === G.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function e_(e, t) {
    let n = { ...es, timestamp: Date.now(), ...t },
        i = (0, a.A)(),
        l = !1,
        s = {
            id: i,
            status: ee.yFH.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            a = l ? ee.yFH.TIMED_OUT : ee.yFH.DISMISSED;
                        -1 === i && (i = setTimeout(() => o.A.updateNotificationStatus(e, a), null != n ? n : en));
                    },
                    stop() {
                        clearTimeout(i), (i = -1);
                    },
                };
            })(i, n.expirationExternallyManaged, n.duration),
            props: {
                ...e,
                onNotificationShow: () => {
                    l || ((l = !0), e.onNotificationShow?.(i));
                },
            },
            ...n,
        },
        r = eo ? ed : [...er],
        d = r.findIndex((e) => e.priority <= n.priority);
    if ((-1 === d ? r.push(s) : r.splice(d, 0, s), r.length > 40)) {
        let e = r.pop();
        eo || e.timer.stop();
    }
    return eo || ((er = r), s.timer.start()), i;
}
function eE(e) {
    let t = T.A.getUserGame(e);
    if (null == t) return null;
    let n = T.A.getNowPlaying(t.gameId)[e]?.activity;
    return null == n || n.type !== ee.$pd.PLAYING ? null : n;
}
function ex() {
    if (P.A.isNotificationDisabled($.KS.NowPlayingNotification)) return !1;
    let e = T.A.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in eu) e.push(...Object.keys(eu[t]).map((e) => e));
            return e;
        })(),
        i = !1;
    for (let [n, l] of Object.entries(e))
        (i =
            i ||
            (function (e, t) {
                let n, i, l;
                if (!v.A.isFriend(e)) return !1;
                let a = t.gameId;
                if (null == a) return !1;
                let s = eE(e);
                if (
                    null == s ||
                    !(
                        null != (n = s.timestamps?.start != null ? s.timestamps.start : s.created_at) &&
                        Date.now() - n < eA
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: r } = (0, z.NI)("nowPlayingNotification"),
                    o = P.A.isNotificationDisabledBySetting(k.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = N.A.getVoiceChannelId(),
                    u = w.A.getDiscoverableVoiceStateForUser(e)?.channelId;
                if (null != d && null != u && d === u) return !1;
                let c = (0, H.qv)();
                if (null == c) return !1;
                let A = c.id !== a;
                return (
                    (!A || (!!r && !o)) &&
                    (!!(L.A.hasApplicationStatistic(a) || h.Ay.isGameSeen(a)) || !A) &&
                    (null == (i = eu[a]?.[e]?.lastSentTimestamp) || Date.now() - i > eh
                        ? (null != (l = (0, X.A)(e, a, s)) &&
                              (ec(a, e, { userId: e, gameId: a, lastSentTimestamp: Date.now() }),
                              e_(l, { type: G.zb.GENERIC, priority: G.In.NORMAL })),
                          !0)
                        : (ec(a, e, { userId: e, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(n, l)),
            t.add(n);
    let l = new Set();
    for (let e of n) t.has(e) || l.add(e);
    let a = U.A.isOverlayV3EnabledForPID(U.A.getTargetPID()) || null != U.A.getFocusedPID();
    for (let e of l)
        if (
            !(function (e) {
                let t = y.A.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, H.qv)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !a
        ) {
            for (let t in eu) {
                let n = eu[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function eS(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = ef(t);
    if (!Object.keys(n).includes(E.default.getId())) return eg(i);
    if (null != i) return !1;
    let l = x.A.getChannel(t);
    if (
        null == l ||
        !l.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !f.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        O.A.getStatus() === ee.clD.DND ||
        g.NO.getSetting()
    )
        return !1;
    let a = er.find((e) => e.type === G.zb.TEXT && e.channelId === t && e.messageType === ee.lAJ.CALL);
    null != a && eg(a.id),
        e_((0, Z.A)(l), {
            priority: G.In.HIGH,
            expirationExternallyManaged: !0,
            type: G.zb.INCOMING_CALL,
            channelId: l.id,
        });
}
let eI = {};
class eT extends s.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            d.A,
            _.A,
            E.default,
            u.A,
            x.A,
            c.A,
            L.A,
            S.A,
            I.A,
            T.A,
            V.default,
            P.A,
            U.A,
            y.A,
            C.A,
            v.A,
            h.Ay,
            N.A,
            O.A,
            b.A,
            j.default,
            w.A,
        ),
            this.syncWith([T.A], ex),
            (function () {
                let e = N.A.getVoiceChannelId(),
                    t = E.default.getId(),
                    n = C.A.getMediaSessionId();
                if (null != e && null != n)
                    for (let l of u.A.getStreamParticipants(e)) {
                        var i;
                        l.user.id !== t && (eI[((i = l.user.id), `${i}-${n}`)] = Date.now());
                    }
            })();
    }
    getNotifications() {
        return er;
    }
}
let ey = new eT(r.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        eg(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        let { nudges: t } = e;
        ep(0);
        let n = U.A.getFocusedPID() ?? M.UNSET_PID;
        if (V.default.hasChangedRenderMode(n)) return;
        let i = (0, q.A)((0, H.qv)(), t);
        null != i && e_(i, { priority: G.In.URGENT, type: G.zb.NUDGE, duration: ei });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of er) e.status === ee.yFH.FOCUSED && eg(e.id, ee.yFH.ACTIVE);
            return !0;
        }
        for (let e of (ep(), er))
            e.type === G.zb.NUDGE
                ? eg(e.id, ee.yFH.DISMISSED)
                : e.status !== ee.yFH.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (er.length > 0)
            return eg(
                er.filter((e) => e.type === G.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]?.id,
                ee.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = x.A.getChannel(t),
            a = j.default.getUser(n.author?.id);
        if (null == i || null == a) return !1;
        if ([ee.xL.JOIN, ee.xL.JOIN_REQUEST, ee.xL.STREAM_REQUEST].includes(n.activity?.type)) {
            if (!(0, m.lx)(n, t, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, a, s, r, o, u;
                if ((l()(null != t.activity, "received null message activity"), n.id === E.default.getId())) return !1;
                let c = (0, H.qv)();
                if (null == c || null == c.id) return !1;
                let h = d.A.getApplication(c.id),
                    A = [c.id];
                null != c.altId && A.push(c.altId), h?.linkedGames != null && A.push(...h.linkedGames.map((e) => e.id));
                let m = t.activity.party_id;
                switch (t.activity.type) {
                    case ee.xL.JOIN:
                        (i = (e) => y.A.getApplicationActivity(n.id, e)),
                            (a = (e) => null != e.party && e.party.id === m);
                        break;
                    case ee.xL.JOIN_REQUEST:
                        (i = (e) => O.A.getApplicationActivity(e)), (a = (e) => null != e.party && e.party.id === m);
                        break;
                    case ee.xL.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: g } = p.m.getCurrentConfig(
                            { guildId: e.guild_id, location: "showActivityNotification" },
                            { autoTrackExposure: !1 },
                        );
                        if (!g) return !1;
                        (i = (e) => O.A.getApplicationActivity(e)), (a = (e, t) => e.application_id === t);
                        break;
                    default:
                        return !1;
                }
                for (let e of A) {
                    if (null != (s = i(e)) && a(s, e)) {
                        r = e;
                        break;
                    }
                    s = void 0;
                }
                if (null == s || null == r) return !1;
                switch (t.activity.type) {
                    case ee.xL.JOIN:
                        o = (0, Y.A)(e, t, n, s, r);
                        break;
                    case ee.xL.JOIN_REQUEST:
                        o = (0, B.A)(e, n, c, s);
                        break;
                    case ee.xL.STREAM_REQUEST:
                        o = (0, J.A)(e, n, c, s);
                }
                return (
                    null != o &&
                    (e_(o, {
                        priority: G.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: ea,
                        uniqueKey: `activity-${t.activity.type}-${n.id}-${e.id}-${r}`,
                    }),
                    (u = new Set()),
                    er
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (u.has(e.uniqueKey) ? eg(e.id, ee.yFH.DISMISSED) : u.add(e.uniqueKey));
                        }),
                    !0)
                );
            })(i, n, a);
            if (!1 !== e) return e;
        }
        if (P.A.isNotificationDisabled($.KS.TextChat) || b.A.disableNotifications || !(0, m.lx)(n, t)) return !1;
        let s = !I.A.isSoundDisabled(R.cH),
            r = S.A.getMessage(t, n.id) ?? (0, A.rh)(n),
            o = (0, Q.A)(i, r, a, s);
        if (null == o) return !1;
        e_(o, { type: G.zb.TEXT, channelId: i.id, expirationExternallyManaged: !0, messageType: n.type }), ep();
    },
    CHANNEL_SELECT: function (e) {
        let t,
            n,
            { channelId: i } = e;
        return (
            null != i &&
            ((t = er.length),
            (n = (er = er.filter((e) => e.type !== G.zb.TEXT || e.channelId !== i)).length !== t) && em(),
            n)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eS,
    CALL_UPDATE: eS,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eg(ef(t));
    },
    GUILD_RING_START: eS,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (!f.A.getCurrentConfig({ guildId: n, location: "OverlayV3StopRinging" }).enabled) return !1;
        i.includes(E.default.getId()) && eg(ef(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: l } = e,
            a = (0, H.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (n === ee.xL.JOIN && (t = (0, F.A)(i, a)),
            null != t && void e_(t, { priority: G.In.URGENT, type: G.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        "manual" === e.clipMethod && e_((0, K.V)(et.intl.string(et.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        e_((0, K.V)(et.intl.string(et.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, K.t)();
        null != t && e_(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (P.A.isNotificationDisabled($.KS.StreamWatchNudge)) return !1;
        let n = N.A.getVoiceChannelId(),
            i = E.default.getId(),
            l = C.A.getMediaSessionId();
        if (null != n && null != l)
            for (let e of t) {
                let { userId: t, channelId: a, guildId: s, selfStream: r } = e;
                if (t !== i && n === a && r && null != a && null != s) {
                    let { enabled: e } = (0, z.Fg)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = `${t}-${l}`;
                    if (null != eI[n]) continue;
                    eI[n] = Date.now();
                    let i = (0, W.A)(t, a, eE(t) ?? void 0);
                    if (null == i) continue;
                    e_(i, { priority: G.In.NORMAL, type: G.zb.NUDGE, duration: ei });
                    return;
                }
            }
    },
});
