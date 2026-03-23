"use strict";
n.d(t, { A: () => eZ }), n(321073), n(667532);
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
    R = n(309010),
    O = n(461213),
    b = n(351906),
    D = n(287809),
    L = n(977997),
    w = n(90165),
    M = n(845618),
    x = n(927813),
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
    K = n(122749),
    $ = n(925159),
    z = n(128307),
    q = n(533923),
    Z = n(965082),
    X = n(749471),
    Q = n(672396),
    J = n(652215),
    ee = n(985018);
let et = 5 * x.A.Millis.SECOND,
    en = 8 * x.A.Millis.SECOND,
    er = 30 * x.A.Millis.SECOND,
    ei = 30 * x.A.Millis.SECOND,
    es = 40,
    ea = Object.freeze({
        timestamp: 0,
        priority: B.In.NORMAL,
        duration: et,
        expirationExternallyManaged: !1,
        type: B.zb.GENERIC,
    }),
    eo = [],
    el = !1,
    eu = [],
    ec = {};
function ed(e, t) {
    return ec[e]?.[t];
}
function e_(e, t, n) {
    null == ec[e] && (ec[e] = {}), (ec[e][t] = n);
}
function ef(e) {
    for (let t in ec) {
        let n = ec[t][e];
        null != n && (n.lastSentTimestamp = null);
    }
}
function ep() {
    let e = [];
    for (let t in ec) e.push(...Object.keys(ec[t]).map((e) => e));
    return e;
}
function eh(e, t, n) {
    let r = (0, $.A)(t, e, n);
    null != r &&
        (e_(e, t, { userId: t, gameId: e, lastSentTimestamp: Date.now() }),
        eO(r, { type: B.zb.GENERIC, priority: B.In.NORMAL }));
}
let em = 30 * x.A.Millis.MINUTE,
    eE = 2 * x.A.Millis.MINUTE;
function eg(e, t) {
    let n = ed(e, t)?.lastSentTimestamp;
    return null == n || Date.now() - n > em;
}
function eA(e) {
    return e.timestamps?.start != null ? e.timestamps.start : e.created_at;
}
function eI(e) {
    let t = eA(e);
    return null != t && Date.now() - t < eE;
}
function eT() {
    if (el && null == eo.find((e) => e.status === J.yFH.FOCUSED))
        for (let e of ((el = !1), (eo = [...eo, ...eu]), (eu = []), eo.length > es && (eo.length = es), eo))
            e.timer.start();
}
function eS() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eo.filter((e) => e.type === B.zb.TEXT && e.status === J.yFH.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - er) && eN(t.id, J.yFH.DISMISSED);
        });
}
function ey() {
    let e = new Set();
    eo.filter((e) => null != e.uniqueKey)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t) => {
            null != t.uniqueKey && (e.has(t.uniqueKey) ? eN(t.id, J.yFH.DISMISSED) : e.add(t.uniqueKey));
        });
}
function ev(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = -1;
    return {
        start() {
            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                s = i ? J.yFH.TIMED_OUT : J.yFH.DISMISSED;
            -1 === r && (r = setTimeout(() => l.A.updateNotificationStatus(e, s), null != n ? n : et));
        },
        stop() {
            clearTimeout(r), (r = -1);
        },
    };
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.yFH.DISMISSED;
    if (null == e) return !1;
    let n = eo.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let r = eo[n];
    if ((r.timer.stop(), (eo = [...eo]), t === J.yFH.FOCUSED)) {
        let [e] = eo.splice(n, 1);
        (e = { ...e, status: t }), eo.unshift(e), (el = !0);
        return;
    }
    t === J.yFH.DISMISSED ? eo.splice(n, 1) : (eo[n] = { ...r, status: t }), eT();
}
function eC(e) {
    let t = eo.length,
        n = (eo = eo.filter((t) => t.type !== B.zb.TEXT || t.channelId !== e)).length !== t;
    return n && eT(), n;
}
function eR(e) {
    let t = eo.find((t) => t.type === B.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null;
}
function eO(e, t) {
    let n = { ...ea, timestamp: Date.now(), ...t },
        r = (0, s.A)(),
        i = !1,
        a = {
            id: r,
            status: J.yFH.ACTIVE,
            timer: ev(r, n.expirationExternallyManaged, n.duration),
            props: {
                ...e,
                onNotificationShow: () => {
                    i || ((i = !0), e.onNotificationShow?.(r));
                },
            },
            ...n,
        },
        o = el ? eu : [...eo],
        l = o.findIndex((e) => e.priority <= n.priority);
    if ((-1 === l ? o.push(a) : o.splice(l, 0, a), o.length > es)) {
        let e = o.pop();
        el || e.timer.stop();
    }
    return el || ((eo = o), a.timer.start()), r;
}
function eb(e, t, n) {
    let r, s, a, o, l;
    if ((i()(null != t.activity, "received null message activity"), n.id === A.default.getId())) return !1;
    let c = (0, H.qv)();
    if (null == c || null == c.id) return !1;
    let d = u.A.getApplication(c.id),
        _ = [c.id];
    null != c.altId && _.push(c.altId), d?.linkedGames != null && _.push(...d.linkedGames.map((e) => e.id));
    let f = t.activity.party_id;
    switch (t.activity.type) {
        case J.xL.JOIN:
            (r = (e) => v.A.getApplicationActivity(n.id, e)), (s = (e) => null != e.party && e.party.id === f);
            break;
        case J.xL.JOIN_REQUEST:
            (r = (e) => O.A.getApplicationActivity(e)), (s = (e) => null != e.party && e.party.id === f);
            break;
        case J.xL.STREAM_REQUEST:
            let { enableRequestToStreamOverlayNotification: p } = h.m.getCurrentConfig(
                { guildId: e.guild_id, location: "showActivityNotification" },
                { autoTrackExposure: !1 },
            );
            if (!p) return !1;
            (r = (e) => O.A.getApplicationActivity(e)), (s = (e, t) => e.application_id === t);
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
        case J.xL.JOIN:
            l = (0, j.A)(e, t, n, a, o);
            break;
        case J.xL.JOIN_REQUEST:
            l = (0, z.A)(e, n, c, a);
            break;
        case J.xL.STREAM_REQUEST:
            l = (0, q.A)(e, n, c, a);
    }
    return (
        null != l &&
        (eO(l, {
            priority: B.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: e.id,
            duration: ei,
            uniqueKey: `activity-${t.activity.type}-${n.id}-${e.id}-${o}`,
        }),
        ey(),
        !0)
    );
}
function eD(e) {
    "manual" === e.clipMethod && eO((0, W.V)(ee.intl.string(ee.t.NBMK9m)));
}
function eL() {
    eO((0, W.V)(ee.intl.string(ee.t["1ZbZuh"])));
}
function ew(e) {
    let t = (0, W.t)();
    null != t && eO(t);
}
function eM(e) {
    let { notificationId: t, status: n } = e;
    eN(t, n);
}
function ex(e) {
    let { nudges: t } = e;
    eS(0);
    let n = V.A.getFocusedPID() ?? P.UNSET_PID;
    if (G.default.hasChangedRenderMode(n)) return;
    let r = (0, X.A)((0, H.qv)(), t);
    null != r && eO(r, { priority: B.In.URGENT, type: B.zb.NUDGE, duration: en });
}
function eP(e) {
    let { locked: t } = e;
    if (t) {
        for (let e of eo) e.status === J.yFH.FOCUSED && eN(e.id, J.yFH.ACTIVE);
        return !0;
    }
    for (let e of (eS(), eo))
        e.type === B.zb.NUDGE
            ? eN(e.id, J.yFH.DISMISSED)
            : e.status !== J.yFH.ACTIVE ||
              e.expirationExternallyManaged ||
              (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (eo.length > 0)
        return eN(
            eo.filter((e) => e.type === B.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]?.id,
            J.yFH.FOCUSED,
        );
}
function ek(e) {
    let { channelId: t, message: n } = e,
        r = I.A.getChannel(t),
        i = D.default.getUser(n.author?.id);
    if (null == r || null == i) return !1;
    if ([J.xL.JOIN, J.xL.JOIN_REQUEST, J.xL.STREAM_REQUEST].includes(n.activity?.type)) {
        if (!(0, p.lx)(n, t, !0, !0)) return !1;
        let e = eb(r, n, i);
        if (!1 !== e) return e;
    }
    if (F.A.isNotificationDisabled(Q.KS.TextChat) || b.A.disableNotifications || !(0, p.lx)(n, t)) return !1;
    let s = !S.A.isSoundDisabled(M.cH),
        a = T.A.getMessage(t, n.id) ?? (0, f.rh)(n),
        o = (0, Z.A)(r, a, i, s);
    if (null == o) return !1;
    eO(o, { type: B.zb.TEXT, channelId: r.id, expirationExternallyManaged: !0, messageType: n.type }), eS();
}
function eU(e) {
    let { channelId: t } = e;
    return null != t && eC(t);
}
function eG() {}
function eF() {
    return R.A.getVoiceChannelId();
}
function eV(e) {
    let t = y.A.getUserGame(e);
    if (null == t) return null;
    let n = y.A.getNowPlaying(t.gameId)[e]?.activity;
    return null == n || n.type !== J.$pd.PLAYING ? null : n;
}
function eB(e) {
    return w.A.hasApplicationStatistic(e) || _.Ay.isGameSeen(e);
}
function eH(e, t) {
    if (!C.A.isFriend(e)) return !1;
    let n = t.gameId;
    if (null == n) return !1;
    let r = eV(e);
    if (null == r || !eI(r)) return !1;
    let { showNowPlayingForDifferentGames: i } = (0, U.NI)("nowPlayingNotification"),
        s = F.A.isNotificationDisabledBySetting(k.M.NOW_PLAYING_DIFFERENT_GAMES),
        a = !i || s,
        o = eF(),
        l = L.A.getDiscoverableVoiceStateForUser(e)?.channelId;
    if (null != o && null != l && o === l) return !1;
    let u = (0, H.qv)();
    if (null == u) return !1;
    let c = u.id !== n;
    return (
        (!c || !a) &&
        (!!eB(n) || !c) &&
        (eg(n, e) ? (eh(n, e, r), !0) : (e_(n, e, { userId: e, gameId: n, lastSentTimestamp: Date.now() }), !1))
    );
}
function ej(e) {
    let t = v.A.getActivities(e);
    if (0 === t.length) return !1;
    let n = (0, H.qv)();
    return null != n && null != t.find((e) => e.application_id === n.id);
}
function eY() {
    if (F.A.isNotificationDisabled(Q.KS.NowPlayingNotification)) return !1;
    let e = y.A.usersPlaying,
        t = new Set(),
        n = ep(),
        r = !1;
    for (let [n, i] of Object.entries(e)) (r = r || eH(n, i)), t.add(n);
    let i = new Set();
    for (let e of n) t.has(e) || i.add(e);
    let s = V.A.isOverlayV3EnabledForPID(V.A.getTargetPID()) || null != V.A.getFocusedPID();
    for (let e of i) ej(e) || s || (ef(e), (r = !0));
    return r;
}
function eW(e) {
    let { channelId: t, ongoingRings: n } = e,
        r = eR(t);
    if (!Object.keys(n).includes(A.default.getId())) return eN(r);
    if (null != r) return !1;
    let i = I.A.getChannel(t);
    if (
        null == i ||
        !i.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !E.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        O.A.getStatus() === J.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let s = eo.find((e) => e.type === B.zb.TEXT && e.channelId === t && e.messageType === J.lAJ.CALL);
    null != s && eN(s.id),
        eO((0, K.A)(i), {
            priority: B.In.HIGH,
            expirationExternallyManaged: !0,
            type: B.zb.INCOMING_CALL,
            channelId: i.id,
        });
}
function eK(e) {
    let { channelId: t } = e;
    eN(eR(t));
}
function e$(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!E.A.getCurrentConfig({ guildId: n, location: "OverlayV3StopRinging" }).enabled) return !1;
    r.includes(A.default.getId()) && eN(eR(t));
}
function ez(e) {
    let t,
        { actionType: n, user: r, applicationId: i } = e,
        s = (0, H.qv)();
    return (
        null != s &&
        s?.id != null &&
        (s.id === i || s.altId === i) &&
        (n === J.xL.JOIN && (t = (0, Y.A)(r, s)),
        null != t && void eO(t, { priority: B.In.URGENT, type: B.zb.GENERIC }))
    );
}
class eq extends a.Ay.Store {
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
            R.A,
            O.A,
            b.A,
            D.default,
            L.A,
        ),
            this.syncWith([y.A], eY);
    }
    getNotifications() {
        return eo;
    }
    hasNotificationForChannel(e) {
        return eo.some((t) => t.channelId === e);
    }
    getMostRecentNotificationChannelId() {
        let e = [...eo].sort((e, t) => t.timestamp - e.timestamp).find((e) => null != e.channelId);
        return e?.channelId ?? null;
    }
    getNotificationsForChannel(e, t) {
        return eo.filter((n) => n.channelId === e && n.type === t);
    }
}
let eZ = new eq(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: eM,
    OVERLAY_MOUNTED: ex,
    OVERLAY_SET_INPUT_LOCKED: eP,
    MESSAGE_CREATE: ek,
    CHANNEL_SELECT: eU,
    MESSAGE_ACK: eG,
    CALL_CREATE: eW,
    CALL_UPDATE: eW,
    CALL_DELETE: eK,
    GUILD_RING_START: eW,
    GUILD_RING_STOP: e$,
    ACTIVITY_USER_ACTION: ez,
    CLIPS_SAVE_CLIP_START: eD,
    CLIPS_SAVE_CLIP_ERROR: eL,
    STREAM_START: ew,
});
