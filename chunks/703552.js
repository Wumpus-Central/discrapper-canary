n.d(t, { A: () => eS }), n(321073), n(667532);
var i = n(284009),
    l = n.n(i),
    a = n(835245),
    s = n(311907),
    r = n(73153),
    o = n(684013),
    d = n(587895),
    u = n(313961),
    c = n(274372),
    h = n(141468),
    A = n(742984),
    m = n(159426),
    g = n(253932),
    p = n(164891),
    f = n(616356),
    _ = n(961350),
    E = n(734057),
    x = n(320501),
    S = n(803224),
    I = n(783592),
    T = n(290863),
    C = n(383501),
    v = n(994500),
    y = n(309010),
    N = n(461213),
    O = n(351906),
    j = n(287809),
    b = n(977997),
    w = n(845618),
    L = n(927813),
    R = n(9302),
    D = n(589051),
    M = n(833551),
    k = n(592598),
    z = n(395011),
    V = n(897720),
    P = n(243612),
    U = n(240933),
    G = n(428731),
    H = n(714642),
    Y = n(970495),
    F = n(122749),
    W = n(925159),
    Z = n(128307),
    X = n(533923),
    K = n(965082),
    B = n(749471),
    J = n(672396),
    Q = n(652215),
    q = n(985018);
let $ = 5 * L.A.Millis.SECOND,
    ee = 8 * L.A.Millis.SECOND,
    et = 30 * L.A.Millis.SECOND,
    en = 30 * L.A.Millis.SECOND,
    ei = Object.freeze({
        timestamp: 0,
        priority: V.In.NORMAL,
        duration: $,
        expirationExternallyManaged: !1,
        type: V.zb.GENERIC,
    }),
    el = [],
    ea = !1,
    es = [],
    er = {};
function eo(e, t, n) {
    null == er[e] && (er[e] = {}), (er[e][t] = n);
}
let ed = 30 * L.A.Millis.MINUTE,
    eu = 2 * L.A.Millis.MINUTE;
function ec() {
    if (ea && null == el.find((e) => e.status === Q.yFH.FOCUSED))
        for (let e of ((ea = !1), (el = [...el, ...es]), (es = []), el.length > 40 && (el.length = 40), el))
            e.timer.start();
}
function eh() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    el.filter((e) => e.type === V.zb.TEXT && e.status === Q.yFH.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - et) && eA(t.id, Q.yFH.DISMISSED);
        });
}
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.yFH.DISMISSED;
    if (null == e) return !1;
    let n = el.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = el[n];
    if ((i.timer.stop(), (el = [...el]), t === Q.yFH.FOCUSED)) {
        let [e] = el.splice(n, 1);
        (e = { ...e, status: t }), el.unshift(e), (ea = !0);
        return;
    }
    t === Q.yFH.DISMISSED ? el.splice(n, 1) : (el[n] = { ...i, status: t }), ec();
}
function em(e) {
    let t = el.find((t) => t.type === V.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eg(e, t) {
    let n = { ...ei, timestamp: Date.now(), ...t },
        i = (0, a.A)(),
        l = !1,
        s = {
            id: i,
            status: Q.yFH.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            a = l ? Q.yFH.TIMED_OUT : Q.yFH.DISMISSED;
                        -1 === i && (i = setTimeout(() => o.A.updateNotificationStatus(e, a), null != n ? n : $));
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
        r = ea ? es : [...el],
        d = r.findIndex((e) => e.priority <= n.priority);
    if ((-1 === d ? r.push(s) : r.splice(d, 0, s), r.length > 40)) {
        let e = r.pop();
        ea || e.timer.stop();
    }
    return ea || ((el = r), s.timer.start()), i;
}
function ep(e) {
    let t = I.A.getUserGame(e);
    if (null == t) return null;
    let n = I.A.getNowPlaying(t.gameId)[e]?.activity;
    return null == n || n.type !== Q.$pd.PLAYING ? null : n;
}
function ef() {
    if (k.A.isNotificationDisabled(J.KS.NowPlayingNotification)) return !1;
    let e = I.A.usersPlaying,
        t = new Set(),
        n = (function () {
            let e = [];
            for (let t in er) e.push(...Object.keys(er[t]).map((e) => e));
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
                let s = ep(e);
                if (
                    null == s ||
                    !(
                        null != (n = s.timestamps?.start != null ? s.timestamps.start : s.created_at) &&
                        Date.now() - n < eu
                    )
                )
                    return !1;
                let r = y.A.getVoiceChannelId(),
                    o = b.A.getDiscoverableVoiceStateForUser(e)?.channelId;
                if (null != r && null != o && r === o) return !1;
                let d = (0, P.qv)(),
                    { showNowPlayingForDifferentGames: u } = (0, D.NI)("nowPlayingNotification");
                return (
                    null != d &&
                    (d.id === a || !!u) &&
                    (null == (i = er[a]?.[e]?.lastSentTimestamp) || Date.now() - i > ed
                        ? (null != (l = (0, W.A)(e, a, s)) &&
                              (eo(a, e, { userId: e, gameId: a, lastSentTimestamp: Date.now() }),
                              eg(l, { type: V.zb.GENERIC, priority: V.In.NORMAL })),
                          !0)
                        : (eo(a, e, { userId: e, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(n, l)),
            t.add(n);
    let l = new Set();
    for (let e of n) t.has(e) || l.add(e);
    let a = z.A.isOverlayV3EnabledForPID(z.A.getTargetPID()) || null != z.A.getFocusedPID();
    for (let e of l)
        if (
            !(function (e) {
                let t = T.A.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, P.qv)();
                return null != n && null != t.find((e) => e.application_id === n.id);
            })(e) &&
            !a
        ) {
            for (let t in er) {
                let n = er[t][e];
                null != n && (n.lastSentTimestamp = null);
            }
            i = !0;
        }
    return i;
}
function e_(e) {
    let { channelId: t, ringing: n } = e,
        i = em(t);
    if (!n.includes(_.default.getId())) return eA(i);
    if (null != i) return !1;
    let l = E.A.getChannel(t);
    if (
        null == l ||
        !l.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !p.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        N.A.getStatus() === Q.clD.DND ||
        g.NO.getSetting()
    )
        return !1;
    let a = el.find((e) => e.type === V.zb.TEXT && e.channelId === t && e.messageType === Q.lAJ.CALL);
    null != a && eA(a.id),
        eg((0, F.A)(l), {
            priority: V.In.HIGH,
            expirationExternallyManaged: !0,
            type: V.zb.INCOMING_CALL,
            channelId: l.id,
        });
}
let eE = {};
class ex extends s.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            d.A,
            f.A,
            _.default,
            u.A,
            E.A,
            c.A,
            x.A,
            S.A,
            I.A,
            M.default,
            k.A,
            z.A,
            T.A,
            C.A,
            v.A,
            y.A,
            N.A,
            O.A,
            j.default,
            b.A,
        ),
            this.syncWith([I.A], ef),
            (function () {
                let e = y.A.getVoiceChannelId(),
                    t = _.default.getId(),
                    n = C.A.getMediaSessionId();
                if (null != e && null != n)
                    for (let l of u.A.getStreamParticipants(e)) {
                        var i;
                        l.user.id !== t && (eE[((i = l.user.id), `${i}-${n}`)] = Date.now());
                    }
            })();
    }
    getNotifications() {
        return el;
    }
}
let eS = new ex(r.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        eA(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        let { nudges: t } = e;
        eh(0);
        let n = z.A.getFocusedPID() ?? R.UNSET_PID;
        if (M.default.hasChangedRenderMode(n)) return;
        let i = (0, B.A)((0, P.qv)(), t);
        null != i && eg(i, { priority: V.In.URGENT, type: V.zb.NUDGE, duration: ee });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of el) e.status === Q.yFH.FOCUSED && eA(e.id, Q.yFH.ACTIVE);
            return !0;
        }
        for (let e of (eh(), el))
            e.type === V.zb.NUDGE
                ? eA(e.id, Q.yFH.DISMISSED)
                : e.status !== Q.yFH.ACTIVE ||
                  e.expirationExternallyManaged ||
                  (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (el.length > 0)
            return eA(
                el.filter((e) => e.type === V.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]?.id,
                Q.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = E.A.getChannel(t),
            a = j.default.getUser(n.author?.id);
        if (null == i || null == a) return !1;
        if ([Q.xL.JOIN, Q.xL.JOIN_REQUEST, Q.xL.STREAM_REQUEST].includes(n.activity?.type)) {
            if (!(0, A.lx)(n, t, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, a, s, r, o, u;
                if ((l()(null != t.activity, "received null message activity"), n.id === _.default.getId())) return !1;
                let c = (0, P.qv)();
                if (null == c || null == c.id) return !1;
                let h = d.A.getApplication(c.id),
                    A = [c.id];
                null != c.altId && A.push(c.altId), h?.linkedGames != null && A.push(...h.linkedGames.map((e) => e.id));
                let g = t.activity.party_id;
                switch (t.activity.type) {
                    case Q.xL.JOIN:
                        (i = (e) => T.A.getApplicationActivity(n.id, e)),
                            (a = (e) => null != e.party && e.party.id === g);
                        break;
                    case Q.xL.JOIN_REQUEST:
                        (i = (e) => N.A.getApplicationActivity(e)), (a = (e) => null != e.party && e.party.id === g);
                        break;
                    case Q.xL.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: p } = m.m.getCurrentConfig(
                            { guildId: e.guild_id, location: "showActivityNotification" },
                            { autoTrackExposure: !1 },
                        );
                        if (!p) return !1;
                        (i = (e) => N.A.getApplicationActivity(e)), (a = (e, t) => e.application_id === t);
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
                    case Q.xL.JOIN:
                        o = (0, U.A)(e, t, n, s, r);
                        break;
                    case Q.xL.JOIN_REQUEST:
                        o = (0, Z.A)(e, n, c, s);
                        break;
                    case Q.xL.STREAM_REQUEST:
                        o = (0, X.A)(e, n, c, s);
                }
                return (
                    null != o &&
                    (eg(o, {
                        priority: V.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: en,
                        uniqueKey: `activity-${t.activity.type}-${n.id}-${e.id}-${r}`,
                    }),
                    (u = new Set()),
                    el
                        .filter((e) => null != e.uniqueKey)
                        .sort((e, t) => t.timestamp - e.timestamp)
                        .forEach((e) => {
                            null != e.uniqueKey &&
                                (u.has(e.uniqueKey) ? eA(e.id, Q.yFH.DISMISSED) : u.add(e.uniqueKey));
                        }),
                    !0)
                );
            })(i, n, a);
            if (!1 !== e) return e;
        }
        if (k.A.isNotificationDisabled(J.KS.TextChat) || O.A.disableNotifications || !(0, A.lx)(n, t)) return !1;
        let s = !S.A.isSoundDisabled(w.cH),
            r = x.A.getMessage(t, n.id) ?? (0, h.rh)(n),
            o = (0, K.A)(i, r, a, s);
        if (null == o) return !1;
        eg(o, { type: V.zb.TEXT, channelId: i.id, expirationExternallyManaged: !0, messageType: n.type }), eh();
    },
    CHANNEL_SELECT: function (e) {
        let t,
            n,
            { channelId: i } = e;
        return (
            null != i &&
            ((t = el.length),
            (n = (el = el.filter((e) => e.type !== V.zb.TEXT || e.channelId !== i)).length !== t) && ec(),
            n)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: e_,
    CALL_UPDATE: e_,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        eA(em(t));
    },
    GUILD_RING_START: e_,
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (!p.A.getCurrentConfig({ guildId: n, location: "OverlayV3StopRinging" }).enabled) return !1;
        i.includes(_.default.getId()) && eA(em(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: l } = e,
            a = (0, P.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (n === Q.xL.JOIN && (t = (0, G.A)(i, a)),
            null != t && void eg(t, { priority: V.In.URGENT, type: V.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        "manual" === e.clipMethod && eg((0, H.V)(q.intl.string(q.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eg((0, H.V)(q.intl.string(q.t["1ZbZuh"])));
    },
    STREAM_START: function (e) {
        let t = (0, H.t)();
        null != t && eg(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (k.A.isNotificationDisabled(J.KS.StreamWatchNudge)) return !1;
        let n = y.A.getVoiceChannelId(),
            i = _.default.getId(),
            l = C.A.getMediaSessionId();
        if (null != n && null != l)
            for (let e of t) {
                let { userId: t, channelId: a, guildId: s, selfStream: r } = e;
                if (t !== i && n === a && r && null != a && null != s) {
                    let { enabled: e } = (0, D.Fg)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = `${t}-${l}`;
                    if (null != eE[n]) continue;
                    eE[n] = Date.now();
                    let i = (0, Y.A)(t, a, ep(t) ?? void 0);
                    if (null == i) continue;
                    eg(i, { priority: V.In.NORMAL, type: V.zb.NUDGE, duration: ee });
                    return;
                }
            }
    },
});
