"use strict";
n.d(t, { A: () => e2 }), n(321073), n(667532);
var r = n(284009),
    i = n.n(r),
    s = n(835245),
    a = n(311907),
    o = n(73153),
    l = n(684013),
    u = n(587895),
    c = n(313961),
    d = n(274372),
    _ = n(15285),
    f = n(141468),
    p = n(742984),
    h = n(159426),
    m = n(253932),
    E = n(164891),
    g = n(616356),
    A = n(961350),
    I = n(734057),
    T = n(320501),
    S = n(803224),
    y = n(783592),
    v = n(290863),
    N = n(383501),
    C = n(994500),
    b = n(309010),
    R = n(461213),
    O = n(351906),
    D = n(287809),
    L = n(977997),
    w = n(90165),
    x = n(845618),
    M = n(927813),
    P = n(9302),
    k = n(93465),
    U = n(589051),
    G = n(833551),
    F = n(592598),
    V = n(395011),
    B = n(897720),
    H = n(243612),
    j = n(240933),
    Y = n(428731),
    W = n(714642),
    K = n(970495),
    z = n(122749),
    $ = n(925159),
    q = n(128307),
    Z = n(533923),
    X = n(965082),
    Q = n(749471),
    J = n(672396),
    ee = n(652215),
    et = n(985018);
let en = 5 * M.A.Millis.SECOND,
    er = 8 * M.A.Millis.SECOND,
    ei = 30 * M.A.Millis.SECOND,
    es = 30 * M.A.Millis.SECOND,
    ea = 40,
    eo = Object.freeze({
        timestamp: 0,
        priority: B.In.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: B.zb.GENERIC,
    }),
    el = [],
    eu = !1,
    ec = [],
    ed = {};
function e_(e, t) {
    return ed[e]?.[t];
}
function ef(e, t, n) {
    null == ed[e] && (ed[e] = {}), (ed[e][t] = n);
}
function ep(e) {
    for (let t in ed) {
        let n = ed[t][e];
        null != n && (n.lastSentTimestamp = null);
    }
}
function eh() {
    let e = [];
    for (let t in ed) e.push(...Object.keys(ed[t]).map((e) => e));
    return e;
}
function em(e, t, n) {
    let r = (0, $.A)(t, e, n);
    null != r &&
        (ef(e, t, { userId: t, gameId: e, lastSentTimestamp: Date.now() }),
        eO(r, { type: B.zb.GENERIC, priority: B.In.NORMAL }));
}
let eE = 30 * M.A.Millis.MINUTE,
    eg = 2 * M.A.Millis.MINUTE;
function eA(e, t) {
    let n = e_(e, t)?.lastSentTimestamp;
    return null == n || Date.now() - n > eE;
}
function eI(e) {
    return e.timestamps?.start != null ? e.timestamps.start : e.created_at;
}
function eT(e) {
    let t = eI(e);
    return null != t && Date.now() - t < eg;
}
function eS() {
    if (eu && null == el.find((e) => e.status === ee.yFH.FOCUSED))
        for (let e of ((eu = !1), (el = [...el, ...ec]), (ec = []), el.length > ea && (el.length = ea), el))
            e.timer.start();
}
function ey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    el.filter((e) => e.type === B.zb.TEXT && e.status === ee.yFH.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - ei) && eC(t.id, ee.yFH.DISMISSED);
        });
}
function ev() {
    let e = new Set();
    el.filter((e) => null != e.uniqueKey)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t) => {
            null != t.uniqueKey && (e.has(t.uniqueKey) ? eC(t.id, ee.yFH.DISMISSED) : e.add(t.uniqueKey));
        });
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = -1;
    return {
        start() {
            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                s = i ? ee.yFH.TIMED_OUT : ee.yFH.DISMISSED;
            -1 === r && (r = setTimeout(() => l.A.updateNotificationStatus(e, s), null != n ? n : en));
        },
        stop() {
            clearTimeout(r), (r = -1);
        },
    };
}
function eC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.yFH.DISMISSED;
    if (null == e) return !1;
    let n = el.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let r = el[n];
    if ((r.timer.stop(), (el = [...el]), t === ee.yFH.FOCUSED)) {
        let [e] = el.splice(n, 1);
        (e = { ...e, status: t }), el.unshift(e), (eu = !0);
        return;
    }
    t === ee.yFH.DISMISSED ? el.splice(n, 1) : (el[n] = { ...r, status: t }), eS();
}
function eb(e) {
    let t = el.length,
        n = (el = el.filter((t) => t.type !== B.zb.TEXT || t.channelId !== e)).length !== t;
    return n && eS(), n;
}
function eR(e) {
    let t = el.find((t) => t.type === B.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eO(e, t) {
    let n = { ...eo, timestamp: Date.now(), ...t },
        r = (0, s.A)(),
        i = !1,
        a = {
            id: r,
            status: ee.yFH.ACTIVE,
            timer: eN(r, n.expirationExternallyManaged, n.duration),
            props: {
                ...e,
                onNotificationShow: () => {
                    i || ((i = !0), e.onNotificationShow?.(r));
                },
            },
            ...n,
        },
        o = eu ? ec : [...el],
        l = o.findIndex((e) => e.priority <= n.priority);
    if ((-1 === l ? o.push(a) : o.splice(l, 0, a), o.length > ea)) {
        let e = o.pop();
        eu || e.timer.stop();
    }
    return eu || ((el = o), a.timer.start()), r;
}
function eD(e, t, n) {
    let r, s, a, o, l;
    if ((i()(null != t.activity, "received null message activity"), n.id === A.default.getId())) return !1;
    let c = (0, H.qv)();
    if (null == c || null == c.id) return !1;
    let d = u.A.getApplication(c.id),
        _ = [c.id];
    null != c.altId && _.push(c.altId), d?.linkedGames != null && _.push(...d.linkedGames.map((e) => e.id));
    let f = t.activity.party_id;
    switch (t.activity.type) {
        case ee.xL.JOIN:
            (r = (e) => v.A.getApplicationActivity(n.id, e)), (s = (e) => null != e.party && e.party.id === f);
            break;
        case ee.xL.JOIN_REQUEST:
            (r = (e) => R.A.getApplicationActivity(e)), (s = (e) => null != e.party && e.party.id === f);
            break;
        case ee.xL.STREAM_REQUEST:
            let { enableRequestToStreamOverlayNotification: p } = h.m.getCurrentConfig(
                { guildId: e.guild_id, location: "showActivityNotification" },
                { autoTrackExposure: !1 },
            );
            if (!p) return !1;
            (r = (e) => R.A.getApplicationActivity(e)), (s = (e, t) => e.application_id === t);
            break;
        default:
            return !1;
    }
    for (let e of _) {
        if (null != (a = r(e)) && s(a, e)) {
            o = e;
            break;
        }
        a = void 0;
    }
    if (null == a || null == o) return !1;
    switch (t.activity.type) {
        case ee.xL.JOIN:
            l = (0, j.A)(e, t, n, a, o);
            break;
        case ee.xL.JOIN_REQUEST:
            l = (0, q.A)(e, n, c, a);
            break;
        case ee.xL.STREAM_REQUEST:
            l = (0, Z.A)(e, n, c, a);
    }
    return (
        null != l &&
        (eO(l, {
            priority: B.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: e.id,
            duration: es,
            uniqueKey: `activity-${t.activity.type}-${n.id}-${e.id}-${o}`,
        }),
        ev(),
        !0)
    );
}
function eL(e) {
    "manual" === e.clipMethod && eO((0, W.V)(et.intl.string(et.t.NBMK9m)));
}
function ew() {
    eO((0, W.V)(et.intl.string(et.t["1ZbZuh"])));
}
function ex(e) {
    let t = (0, W.t)();
    null != t && eO(t);
}
function eM(e) {
    let { notificationId: t, status: n } = e;
    eC(t, n);
}
function eP(e) {
    let { nudges: t } = e;
    ey(0);
    let n = V.A.getFocusedPID() ?? P.UNSET_PID;
    if (G.default.hasChangedRenderMode(n)) return;
    let r = (0, Q.A)((0, H.qv)(), t);
    null != r && eO(r, { priority: B.In.URGENT, type: B.zb.NUDGE, duration: er });
}
function ek(e) {
    let { locked: t } = e;
    if (t) {
        for (let e of el) e.status === ee.yFH.FOCUSED && eC(e.id, ee.yFH.ACTIVE);
        return !0;
    }
    for (let e of (ey(), el))
        e.type === B.zb.NUDGE
            ? eC(e.id, ee.yFH.DISMISSED)
            : e.status !== ee.yFH.ACTIVE ||
              e.expirationExternallyManaged ||
              (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (el.length > 0)
        return eC(
            el.filter((e) => e.type === B.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]?.id,
            ee.yFH.FOCUSED,
        );
}
function eU(e) {
    let { channelId: t, message: n } = e,
        r = I.A.getChannel(t),
        i = D.default.getUser(n.author?.id);
    if (null == r || null == i) return !1;
    if ([ee.xL.JOIN, ee.xL.JOIN_REQUEST, ee.xL.STREAM_REQUEST].includes(n.activity?.type)) {
        if (!(0, p.lx)(n, t, !0, !0)) return !1;
        let e = eD(r, n, i);
        if (!1 !== e) return e;
    }
    if (F.A.isNotificationDisabled(J.KS.TextChat) || O.A.disableNotifications || !(0, p.lx)(n, t)) return !1;
    let s = !S.A.isSoundDisabled(x.cH),
        a = T.A.getMessage(t, n.id) ?? (0, f.rh)(n),
        o = (0, X.A)(r, a, i, s);
    if (null == o) return !1;
    eO(o, { type: B.zb.TEXT, channelId: r.id, expirationExternallyManaged: !0, messageType: n.type }), ey();
}
function eG(e) {
    let { channelId: t } = e;
    return null != t && eb(t);
}
function eF() {}
function eV() {
    return b.A.getVoiceChannelId();
}
function eB(e) {
    let t = y.A.getUserGame(e);
    if (null == t) return null;
    let n = y.A.getNowPlaying(t.gameId)[e]?.activity;
    return null == n || n.type !== ee.$pd.PLAYING ? null : n;
}
function eH(e) {
    return w.A.hasApplicationStatistic(e) || _.Ay.isGameSeen(e);
}
function ej(e, t) {
    if (!C.A.isFriend(e)) return !1;
    let n = t.gameId;
    if (null == n) return !1;
    let r = eB(e);
    if (null == r || !eT(r)) return !1;
    let { showNowPlayingForDifferentGames: i } = (0, U.NI)("nowPlayingNotification"),
        s = F.A.isNotificationDisabledBySetting(k.M.NOW_PLAYING_DIFFERENT_GAMES),
        a = !i || s,
        o = eV(),
        l = L.A.getDiscoverableVoiceStateForUser(e)?.channelId;
    if (null != o && null != l && o === l) return !1;
    let u = (0, H.qv)();
    if (null == u) return !1;
    let c = u.id !== n;
    return (
        (!c || !a) &&
        (!!eH(n) || !c) &&
        (eA(n, e) ? (em(n, e, r), !0) : (ef(n, e, { userId: e, gameId: n, lastSentTimestamp: Date.now() }), !1))
    );
}
function eY(e) {
    let t = v.A.getActivities(e);
    if (0 === t.length) return !1;
    let n = (0, H.qv)();
    return null != n && null != t.find((e) => e.application_id === n.id);
}
function eW() {
    if (F.A.isNotificationDisabled(J.KS.NowPlayingNotification)) return !1;
    let e = y.A.usersPlaying,
        t = new Set(),
        n = eh(),
        r = !1;
    for (let [n, i] of Object.entries(e)) (r = r || ej(n, i)), t.add(n);
    let i = new Set();
    for (let e of n) t.has(e) || i.add(e);
    let s = V.A.isOverlayV3EnabledForPID(V.A.getTargetPID()) || null != V.A.getFocusedPID();
    for (let e of i) eY(e) || s || (ep(e), (r = !0));
    return r;
}
function eK(e) {
    let { channelId: t, ongoingRings: n } = e,
        r = eR(t);
    if (!Object.keys(n).includes(A.default.getId())) return eC(r);
    if (null != r) return !1;
    let i = I.A.getChannel(t);
    if (
        null == i ||
        !i.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !E.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        R.A.getStatus() === ee.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let s = el.find((e) => e.type === B.zb.TEXT && e.channelId === t && e.messageType === ee.lAJ.CALL);
    null != s && eC(s.id),
        eO((0, z.A)(i), {
            priority: B.In.HIGH,
            expirationExternallyManaged: !0,
            type: B.zb.INCOMING_CALL,
            channelId: i.id,
        });
}
function ez(e) {
    let { channelId: t } = e;
    eC(eR(t));
}
function e$(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!E.A.getCurrentConfig({ guildId: n, location: "OverlayV3StopRinging" }).enabled) return !1;
    r.includes(A.default.getId()) && eC(eR(t));
}
function eq(e) {
    let t,
        { actionType: n, user: r, applicationId: i } = e,
        s = (0, H.qv)();
    return (
        null != s &&
        s?.id != null &&
        (s.id === i || s.altId === i) &&
        (n === ee.xL.JOIN && (t = (0, Y.A)(r, s)),
        null != t && void eO(t, { priority: B.In.URGENT, type: B.zb.GENERIC }))
    );
}
let eZ = {};
function eX(e, t) {
    return `${e}-${t}`;
}
function eQ(e) {
    return null != eZ[e];
}
function eJ(e) {
    let { voiceStates: t } = e;
    if (F.A.isNotificationDisabled(J.KS.StreamWatchNudge)) return !1;
    let n = b.A.getVoiceChannelId(),
        r = A.default.getId(),
        i = N.A.getMediaSessionId();
    if (null != n && null != i)
        for (let e of t) {
            let { userId: t, channelId: s, guildId: a, selfStream: o } = e;
            if (t !== r && n === s && o && null != s && null != a) {
                let { enabled: e } = (0, U.Fg)("OverlayV3StreamWatchNudge");
                if (!e) return;
                let n = eX(t, i);
                if (eQ(n)) continue;
                eZ[n] = Date.now();
                let r = (0, K.A)(t, s, eB(t) ?? void 0);
                if (null == r) continue;
                eO(r, { priority: B.In.NORMAL, type: B.zb.NUDGE, duration: er });
                return;
            }
        }
}
function e0() {
    let e = b.A.getVoiceChannelId(),
        t = A.default.getId(),
        n = N.A.getMediaSessionId();
    if (null != e && null != n)
        for (let r of c.A.getStreamParticipants(e)) r.user.id !== t && (eZ[eX(r.user.id, n)] = Date.now());
}
class e1 extends a.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            u.A,
            g.A,
            A.default,
            c.A,
            I.A,
            d.A,
            w.A,
            T.A,
            S.A,
            y.A,
            G.default,
            F.A,
            V.A,
            v.A,
            N.A,
            C.A,
            _.Ay,
            b.A,
            R.A,
            O.A,
            D.default,
            L.A,
        ),
            this.syncWith([y.A], eW),
            e0();
    }
    getNotifications() {
        return el;
    }
    hasNotificationForChannel(e) {
        return el.some((t) => t.channelId === e);
    }
    getMostRecentNotificationChannelId() {
        let e = [...el].sort((e, t) => t.timestamp - e.timestamp).find((e) => null != e.channelId);
        return e?.channelId ?? null;
    }
    getNotificationsForChannel(e, t) {
        return el.filter((n) => n.channelId === e && n.type === t);
    }
}
let e2 = new e1(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: eM,
    OVERLAY_MOUNTED: eP,
    OVERLAY_SET_INPUT_LOCKED: ek,
    MESSAGE_CREATE: eU,
    CHANNEL_SELECT: eG,
    MESSAGE_ACK: eF,
    CALL_CREATE: eK,
    CALL_UPDATE: eK,
    CALL_DELETE: ez,
    GUILD_RING_START: eK,
    GUILD_RING_STOP: e$,
    ACTIVITY_USER_ACTION: eq,
    CLIPS_SAVE_CLIP_START: eL,
    CLIPS_SAVE_CLIP_ERROR: ew,
    STREAM_START: ex,
    VOICE_STATE_UPDATES: eJ,
});
