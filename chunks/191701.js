(i.r(e), i.d(e, { default: () => eh }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(17928),
    s = i(73153),
    o = i(684013),
    u = i(587895),
    c = i(198052),
    d = i(915725),
    A = i(952818),
    f = i(320095),
    p = i(176154),
    y = i(208284),
    m = i(253932),
    g = i(616356),
    I = i(280450),
    E = i(734057),
    _ = i(232835),
    S = i(803224),
    N = i(783592),
    C = i(290863),
    h = i(763827),
    T = i(994500),
    v = i(309010),
    O = i(461213),
    L = i(351906),
    b = i(287809),
    x = i(977997),
    D = i(90165),
    R = i(592329),
    k = i(927813),
    U = i(93465),
    M = i(589051),
    V = i(296027),
    j = i(592598),
    P = i(233741),
    w = i(897720),
    K = i(243612),
    G = i(452295),
    F = i(581730),
    Y = i(672396),
    H = i(105292),
    J = i(486020),
    B = i(652215),
    $ = i(477900),
    z = i(582128),
    X = i(176781),
    W = i(974293),
    q = i(458977),
    Q = i(532624),
    Z = i(350535),
    tt = i(696016);
function te(t) {
    let { trackView: e, trackClick: i } = (0, F.Y9)(t, { notif_type: t });
    return {
        icon: (0, $.jsx)(X.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => e(),
        onDismissClick: () => i("dismiss"),
    };
}
function ti(t, e) {
    return `${t} ${e ? "\u2713" : "\u2717"}`;
}
function tn() {
    return d.Ay.getSettings().debugTooltipsEnabled;
}
var tl = i(572164),
    ta = i(22802);
function tr(t) {
    let { trackView: e, trackClick: i } = (0, F.Y9)(Y.KS.ClipsNotification, { notif_type: Y.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, $.jsx)(X.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var ts = i(387755),
    to = i(730852),
    tu = i(571694),
    tc = i(47167),
    td = i(621436),
    tA = i(870373),
    tf = i(778712),
    tp = i(834730),
    ty = i(966327),
    tm = i(769015),
    tg = i(562153),
    tI = i(41984),
    tE = i(222506),
    t_ = i(145567),
    tS = i(34773),
    tN = i(308368),
    tC = i(334738),
    th = i(481484),
    tT = i(793574),
    tv = i(486350),
    tO = i(485045),
    tL = i(609145),
    tb = i(46282),
    tx = i(181712);
function tD(t, e, i, n, l) {
    if (j.A.isNotificationDisabled(Y.KS.RequestToStream) || null != g.A.getCurrentUserActiveStream()) return null;
    let a = i.username,
        r =
            null != n
                ? H.intl.format(tx.default.jTbTAF, { username: "", game: n.name })
                : H.intl.format(tx.default["d/qbC0"], { username: "" }),
        s = i.getAvatarURL(t.guild_id, 80),
        { trackView: u, trackClick: c } = (0, F.Y9)(Y.KS.RequestToStream, {
            notif_type: Y.KS.RequestToStream,
            notif_user_id: i.id,
            activity_type: B.xL.STREAM_REQUEST,
            activity_name: l?.name,
        }),
        d = { section: B.JJy.OVERLAY, objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC };
    return {
        icon: s,
        title: a,
        body: r,
        confirmText: H.intl.string(tx.default.UGbmBp),
        cancelText: H.intl.string(H.t["tpXzJ+"]),
        onNotificationShow: () => {
            u();
        },
        onConfirmClick: (i, n) => {
            let l = (0, tO.n)({ location: "requestToStreamNotification" });
            ((0, tb.H)({
                pid: P.A.getTargetPID(),
                analyticsLocations: [tT.A.OVERLAY, tT.A.REQUEST_TO_STREAM_OVERLAY_NOTIFICATION],
                allowOneClickGoLive: !l,
                onBeforeShowModal: () => {
                    o.A.setInputLocked(!1, P.A.getTargetPID());
                },
                onModalStreamStart: () => {
                    o.A.setInputLocked(!0, P.A.getTargetPID());
                },
                appContext: B.BRT.OVERLAY,
                selectSource: !0,
            }),
                (0, tL.A)(e, t.id, { ...d, object: B.ZSU.ACK_ACCEPT_REQUEST_TO_STREAM }));
            let a = "request-to-stream";
            (c(l ? `${a}-go-live-modal` : a), o.A.updateNotificationStatus(n));
        },
        onCancelClick: (i, n) => {
            ((0, tL.A)(e, t.id, { ...d, object: B.ZSU.ACK_DECLINE_REQUEST_TO_STREAM }),
                (0, tv.q)(e),
                o.A.updateNotificationStatus(n),
                c("decline"));
        },
        onDismissClick: () => {
            c("dismiss");
        },
    };
}
var tR = i(941971),
    tk = i(521981),
    tU = i(976860),
    tM = i(400492),
    tV = i(625494),
    tj = i(723702),
    tP = i(19575),
    tw = i(366032),
    tK = i(148494),
    tG = i(964486),
    tF = i(480870),
    tY = i(355622),
    tH = i(408018),
    tJ = i(845207),
    tB = i(451909),
    t$ = i(135621),
    tz = i(381941),
    tX = i(158602);
function tW(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, t$.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tF.A)({ channel: n }),
        [u, c] = z.useState(() => (0, tH.N3)()),
        { textValue: d, richValue: A } = u,
        [f, p] = z.useState(!1),
        y = z.useCallback(() => p(!0), []),
        m = z.useCallback(() => p(!1), []);
    (0, tG.Ay)(() => {
        (0, tC.ack)(
            n.id,
            {
                section: B.JJy.OVERLAY,
                object: B.ZSU.ACK_INLINE_REPLY,
                objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            i,
        );
    });
    let g = z.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        I = z.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, B.yFH.ACTIVE);
            },
            [e],
        ),
        E = z.useCallback(
            () => (
                d.length > a ||
                    (tK.A.sendMessage(n.id, tB.Ay.parse(n, d), !1, { location: tz.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, P.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, B.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, $.jsx)("div", {
        className: tX.k,
        children: (0, $.jsx)(tJ.Ay, {
            innerClassName: tX.T,
            onChange: g,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tY.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: y,
            focused: f,
            onSubmit: E,
            onKeyDown: I,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var tq = i(119191),
    tQ = i(184748);
function tZ(t) {
    t && (0, tM.Ak)(R.cH, R.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var t0 = i(554146),
    t1 = i(298990),
    t2 = i(429913),
    t9 = i(263577),
    t3 = i(826673),
    t5 = i(999926),
    t8 = i(308726),
    t4 = i(818023),
    t7 = i(731854),
    t6 = i(709946),
    et = i(302933);
function ee(t) {
    let { game: e } = t,
        i = (0, t2.h)(e.id);
    return null == i ? null : (0, $.jsx)(t9.V, { src: i.getIconURL(t4.iu.LARGE), size: 40 });
}
let ei = 5 * k.A.Millis.SECOND,
    en = 8 * k.A.Millis.SECOND,
    el = 30 * k.A.Millis.SECOND,
    ea = 30 * k.A.Millis.SECOND,
    er = Object.freeze({
        timestamp: 0,
        priority: w.In.NORMAL,
        duration: ei,
        expirationExternallyManaged: !1,
        type: w.zb.GENERIC,
    }),
    es = [],
    eo = !1,
    eu = [],
    ec = {};
function ed(t, e, i) {
    (null == ec[t] && (ec[t] = {}), (ec[t][e] = i));
}
let eA = 30 * k.A.Millis.MINUTE,
    ef = 2 * k.A.Millis.MINUTE;
function ep() {
    if (eo && null == es.find((t) => t.status === B.yFH.FOCUSED))
        for (let t of ((eo = !1), (es = [...es, ...eu]), (eu = []), es.length > 40 && (es.length = 40), es))
            t.timer.start();
}
function ey() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    es.filter((t) => t.type === w.zb.TEXT && t.status === B.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - el) && eg(e.id, B.yFH.DISMISSED);
        });
}
function em() {
    let t = new Set();
    es.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eg(e.id, B.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eg(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.yFH.DISMISSED;
    if (null == t) return !1;
    let i = es.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = es[i];
    if ((n.timer.stop(), (es = [...es]), e === B.yFH.FOCUSED)) {
        let [t] = es.splice(i, 1);
        ((t = { ...t, status: e }), es.unshift(t), (eo = !0));
        return;
    }
    (e === B.yFH.DISMISSED ? es.splice(i, 1) : (es[i] = { ...n, status: e }), ep());
}
function eI(t) {
    let e = es.find((e) => e.type === w.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eE(t, e) {
    let i = { ...er, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: B.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? B.yFH.TIMED_OUT : B.yFH.DISMISSED;
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : ei));
                    },
                    stop() {
                        (clearTimeout(n), (n = -1));
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
        s = eo ? eu : [...es],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        eo || t.timer.stop();
    }
    return (eo || ((es = s), r.timer.start()), n);
}
function e_(t, e, i, n, l) {
    return (
        null != n &&
        (eE(n, {
            priority: w.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: t.id,
            duration: ea,
            uniqueKey: `activity-${e}-${i.id}-${t.id}-${l ?? "none"}`,
        }),
        em(),
        !0)
    );
}
function eS() {
    if (j.A.isNotificationDisabled(Y.KS.NowPlayingNotification)) return !1;
    let t = N.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in ec) t.push(...Object.keys(ec[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        ((n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!T.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = N.A.getUserGame(t);
                    if (null == e) return null;
                    let i = N.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== B.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < ef
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, M.NI)("nowPlayingNotification"),
                    c = j.A.isNotificationDisabledBySetting(U.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = v.Ay.getVoiceChannelId(),
                    f = x.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != f && d === f) return !1;
                let p = (0, K.qv)();
                if (null == p) return !1;
                let y = p.id !== a;
                return (
                    (!y || (!!s && !c)) &&
                    (!!(D.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !y) &&
                    (null == (n = ec[a]?.[t]?.lastSentTimestamp) || Date.now() - n > eA
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (j.A.isNotificationDisabled(Y.KS.NowPlayingNotification)) return null;
                                  let n = b.default.getUser(t);
                                  if (null == n) return null;
                                  let l = v.Ay.getCurrentlySelectedChannelId(),
                                      a = E.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = A.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, tg.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let f = (0, $.jsxs)("div", {
                                          className: tS.Ql,
                                          children: [
                                              (0, $.jsx)("div", {
                                                  className: tS.bf,
                                                  children: (0, $.jsx)(ty.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tf._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, $.jsx)("div", {
                                                  className: tS.rf,
                                                  children: (0, $.jsx)(tp.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tS.G3,
                                                      children: H.intl.format(H.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, $.jsx)(tm.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tm.M.XSMALL,
                                                                        className: tS.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: p, trackClick: y } = (0, F.Y9)(Y.KS.NowPlayingNotification, {
                                          notif_type: Y.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: m } = (0, M.NI)("nowPlayingNotification");
                                  return {
                                      body: f,
                                      className: tS.dn,
                                      wrapperClassName: tS.P6,
                                      animationWrapperClassName: tS.VG,
                                      clickZoneClassName: tS.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          p();
                                      },
                                      onNotificationClick: (t, e) => {
                                          m &&
                                              (async () => {
                                                  try {
                                                      await (0, t_.D$)({
                                                          target: {
                                                              kind: t_.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tI.B9.NOTIFICATION_CLICK,
                                                          widgetType: B.uss.NOTIFICATIONS,
                                                      });
                                                      let t = P.A.getTargetPID();
                                                      (tE.A.isInputLocked(t)
                                                          ? (y("unlock"), o.A.setInputLocked(!1, t))
                                                          : y("jump"),
                                                          o.A.updateNotificationStatus(e, B.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          y("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (ed(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eE(l, { type: w.zb.GENERIC, priority: w.In.NORMAL })),
                          !0)
                        : (ed(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = P.A.isOverlayV3EnabledForPID(P.A.getTargetPID()) || null != P.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = C.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, K.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in ec) {
                let i = ec[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eN(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eI(e);
    if (!Object.keys(i).includes(I.default.getId())) return eg(n);
    if (null != n) return !1;
    let l = E.A.getChannel(e);
    if (null == l || !l.isRingable() || O.A.getStatus() === B.clD.DND || m.NO.getSetting()) return !1;
    let a = es.find((t) => t.type === w.zb.TEXT && t.channelId === e && t.messageType === B.lAJ.CALL);
    (null != a && eg(a.id),
        eE(
            (function (t) {
                let e = (0, tc.m1)(t, b.default, T.A),
                    i = H.intl.string(H.t.ssrVzG),
                    n = (0, tu.Y)(t),
                    l = (0, td.A)(t),
                    { trackView: a, trackClick: r } = (0, F.Y9)(Y.KS.IncomingCall, {
                        notif_type: Y.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: H.intl.string(H.t["0D/6Rz"]),
                    cancelText: H.intl.string(H.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), B.kvI.CALLABLE.has(t.type))) ts.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== B.rbe.GUILD_VOICE) return;
                            to.default.selectVoiceChannel(t.id);
                        }
                        (o.A.updateNotificationStatus(i),
                            (0, tA.g)(B.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            }));
                    },
                    onCancelClick: () => {
                        (r("decline"), ts.A.stopRinging(t.id));
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: w.In.HIGH, expirationExternallyManaged: !0, type: w.zb.INCOMING_CALL, channelId: l.id },
        ));
}
class eC extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            u.A,
            g.A,
            I.default,
            c.A,
            E.A,
            d.Ay,
            D.A,
            _.A,
            S.A,
            N.A,
            V.default,
            j.A,
            P.A,
            C.A,
            h.A,
            T.A,
            A.Ay,
            v.Ay,
            O.A,
            L.A,
            b.default,
            x.A,
        ),
            this.syncWith([N.A], eS));
    }
    getNotifications() {
        return es;
    }
    hasNotificationForChannel(t) {
        return es.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...es].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return es.filter((i) => i.channelId === t && i.type === e);
    }
}
let eh = new eC(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eg(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        ey(0);
        let n = P.A.getFocusedPID() ?? -1;
        if (V.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (j.A.isNotificationDisabled(Y.KS.WelcomeNudge)) return null;
            t5.Ay.supports(t7.O5.VIDEO) ||
                (e = e.filter((t) => t.type !== Y.Jr.GO_LIVE_VOICE && t.type !== Y.Jr.GO_LIVE_NON_VOICE));
            let { trackView: n, trackClick: l } = (0, F.Y9)(Y.KS.WelcomeNudge, {
                    notif_type: Y.KS.WelcomeNudge,
                    secondary_notif_types: e.map((t) => Y.Jr[t.type]),
                }),
                a = {};
            for (let i of e)
                switch (i.type) {
                    case Y.Jr.WELCOME: {
                        let e = (0, K.tg)(t?.altId ?? t?.id);
                        null != e &&
                            ((a.cancelText = H.intl.string(H.t["6F9ivu"])),
                            (a.onCancelClick = (t, i) => {
                                (l("unlock"),
                                    o.A.updateNotificationStatus(i),
                                    o.A.setInputLocked(!1, P.A.getTargetPID()),
                                    (0, t1.qf)(e, !1, B.BRT.POPOUT));
                            }));
                        break;
                    }
                    case Y.Jr.GO_LIVE_VOICE:
                    case Y.Jr.GO_LIVE_NON_VOICE:
                        ((a.confirmText = H.intl.string(H.t.U76Ft2)),
                            (a.onConfirmClick = (t, e) => {
                                function i() {
                                    (l("go-live-modal"), o.A.setInputLocked(!1, P.A.getTargetPID()));
                                }
                                function n() {
                                    l("one-click-go-live");
                                }
                                (o.A.updateNotificationStatus(e),
                                    (0, tb.H)({
                                        pid: P.A.getTargetPID(),
                                        allowOneClickGoLive: !0,
                                        onBeforeShowModal: i,
                                        onOneClickGoLive: n,
                                        appContext: B.BRT.POPOUT,
                                    }));
                            }));
                        break;
                    case Y.Jr.CONTENT_INVENTORY:
                        ((a.onNotificationShow = () => {
                            (0, tA.g)(B.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, $.jsx)(t8.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: et.kL,
                                })));
                }
            let r = (0, t3.k8)(t0.M.OVERLAY_OOP_WELCOME_NUX),
                s = H.intl.string(H.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, $.jsx)(ee, { game: t })
                        : (0, $.jsx)("img", { src: i(513653), className: t6.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, tq.sI)((0, F.Jn)(), H.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, t3.Dr)(t0.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        o.A.setInputLocked(!1, P.A.getTargetPID()),
                        r || (0, t3.Dr)(t0.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, t3.Dr)(t0.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, K.qv)(), e);
        null != l && eE(l, { priority: w.In.URGENT, type: w.zb.NUDGE, duration: en });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of es) t.status === B.yFH.FOCUSED && eg(t.id, B.yFH.ACTIVE);
            return !0;
        }
        for (let t of (ey(), es))
            t.type === w.zb.NUDGE
                ? eg(t.id, B.yFH.DISMISSED)
                : t.status !== B.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (es.length > 0)
            return eg(
                es.filter((t) => t.type === w.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                B.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = E.A.getChannel(e),
            a = b.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([B.xL.JOIN, B.xL.JOIN_REQUEST, B.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, p.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c;
                if ((l()(null != e.activity, "received null message activity"), i.id === I.default.getId())) return !1;
                if (e.activity.type === B.xL.STREAM_REQUEST && null == e.application) {
                    let { enabled: n } = y.A.getConfig({ guildId: t.guild_id, location: "OverlayNotificationsStore" });
                    return !!n && e_(t, e.activity.type, i, tD(t, e.id, i, null, null), null);
                }
                let d = (0, K.qv)();
                if (null == d || null == d.id) return !1;
                let A = u.A.getApplication(d.id),
                    f = [d.id];
                (null != d.altId && f.push(d.altId),
                    A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id)));
                let m = e.activity.party_id;
                switch (e.activity.type) {
                    case B.xL.JOIN:
                        ((n = (t) => C.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === m));
                        break;
                    case B.xL.JOIN_REQUEST:
                        ((n = (t) => O.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === m));
                        break;
                    case B.xL.STREAM_REQUEST:
                        ((n = (t) => O.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e));
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
                    case B.xL.JOIN:
                        c = (function (t, e, i, n, l) {
                            if (j.A.isNotificationDisabled(Y.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, p.TB)(t, e, i),
                                { trackView: d, trackClick: A } = (0, F.Y9)(Y.KS.ActivityInvite, {
                                    notif_type: Y.KS.ActivityInvite,
                                    notif_user_id: i.id,
                                    message_id: e.id,
                                    message_type: e.type,
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    channel_type: t.type,
                                    activity_type: a,
                                    activity_name: n.name,
                                });
                            return {
                                icon: s,
                                title: u,
                                body: c,
                                onNotificationShow: () => {
                                    d();
                                },
                                confirmText: H.intl.string(H.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    (G.A.join({
                                        userId: i.id,
                                        sessionId: r,
                                        applicationId: l,
                                        channelId: t.id,
                                        messageId: e.id,
                                    }),
                                        o.A.updateNotificationStatus(a),
                                        A("join"));
                                },
                                onDismissClick: () => {
                                    A("dismiss");
                                },
                            };
                        })(t, e, i, r, s);
                        break;
                    case B.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (j.A.isNotificationDisabled(Y.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = H.intl.format(H.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, F.Y9)(Y.KS.ActivityInvite, {
                                    notif_type: Y.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: B.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: H.intl.string(H.t["fgP/wX"]),
                                cancelText: H.intl.string(H.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (e, i) => {
                                    (tN.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: B.xL.JOIN,
                                        activity: n,
                                        location: (0, th.y)() ? B.ThZ.LOCKED_OVERLAY : B.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tC.ack)(
                                        t.id,
                                        {
                                            section: B.JJy.OVERLAY,
                                            object: B.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        o.A.updateNotificationStatus(i),
                                        u("decline"));
                                },
                                onDismissClick: () => {
                                    u("dismiss");
                                },
                            };
                        })(t, i, d, r);
                        break;
                    case B.xL.STREAM_REQUEST:
                        c = tD(t, e.id, i, d, r);
                }
                return e_(t, e.activity.type, i, c, s);
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (j.A.isNotificationDisabled(Y.KS.TextChat) || L.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !S.A.isSoundDisabled(R.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, M.NI)("textChatNotification");
                if (j.A.isNotificationDisabled(Y.KS.TextChat)) return (tZ(!0), null);
                let { icon: a, title: r, body: s } = (0, p.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, F.Y9)(Y.KS.TextChat, {
                        notif_type: Y.KS.TextChat,
                        notif_user_id: e.author?.id,
                        message_id: e.id,
                        message_type: e.type,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: a,
                    title: r,
                    body:
                        e.content.length > 0
                            ? (0, tk.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, $.jsx)(tR.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tw.$)())
                            ? null
                            : (0, tq.sI)((0, F.Jn)(), l ? tQ.default.VMcw8s : H.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tw.$)()
                            ? null
                            : i && !a
                              ? (0, $.jsx)(tW, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (tZ(n), u());
                    },
                    onNotificationClick: (i, n) => {
                        let a = P.A.getTargetPID();
                        if (
                            ((0, tC.ack)(
                                t.id,
                                {
                                    section: B.JJy.OVERLAY,
                                    object: B.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: B.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                                e.id,
                            ),
                            l)
                        ) {
                            ((0, t_.D$)({
                                target: {
                                    kind: t_.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tI.B9.NOTIFICATION_CLICK,
                                widgetType: B.uss.TEXT_CHAT_V3,
                            }),
                                tE.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tV._.dispatchToLastSubscribed(B.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, B.yFH.DISMISSED));
                            return;
                        }
                        tE.A.isInputLocked(a) && !(0, tw.$)()
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tU.pX)(B.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tj.isPlatformEmbedded && tP.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, _.A.getMessage(e, i.id) ?? (0, f.rh)(i), a, r);
        if (null == s) return !1;
        (eE(s, { type: w.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), ey());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = es.length),
            (i = (es = es.filter((t) => t.type !== w.zb.TEXT || t.channelId !== n)).length !== e) && ep(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eN,
    CALL_UPDATE: eN,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eg(eI(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, K.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === B.xL.JOIN &&
                (e = (function (t, e) {
                    if (j.A.isNotificationDisabled(Y.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = H.intl.format(H.t["Yk+uYG"], { username: "" }),
                        l = (0, J.ku)(t),
                        a = H.intl.string(H.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, F.Y9)(Y.KS.ActivityUserJoin, {
                            notif_type: Y.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: B.xL.JOIN,
                            activity_name: e.name,
                        });
                    return {
                        icon: l,
                        title: i,
                        body: n,
                        hint: a,
                        onNotificationShow: () => {
                            r();
                        },
                        onDismissClick: () => {
                            s("dismiss");
                        },
                    };
                })(n, a)),
            null != e && void eE(e, { priority: w.In.URGENT, type: w.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eE(tr(H.intl.string(H.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tn() &&
                    eE(
                        ((e = t.signal),
                        {
                            ...te(Y.KS.ClipsDebugAutoSignal),
                            title: `Auto-clip: ${(function (t) {
                                switch (t.type) {
                                    case tt.Gy.MANUAL:
                                        return "Manual";
                                    case tt.Gy.SHOUTING:
                                        return `Shouting detected (${t.confidence.toFixed(2)})`;
                                    case tt.Gy.LAUGHTER:
                                        return `Laughter detected (${t.confidence.toFixed(2)})`;
                                    case tt.Gy.GAME_EVENT:
                                        return `Game event: ${t.eventName ?? t.eventType}`;
                                    case tt.Gy.DISTRIBUTED:
                                        return "Distributed clip from another user";
                                    case tt.Gy.SPEAKING:
                                        return "Speaking detected";
                                    case tt.Gy.SOUNDBOARD:
                                        return `Soundboard: ${t.name}`;
                                }
                            })(e)}`,
                        }),
                    );
                break;
            default:
                t.clipMethod;
        }
    },
    CLIPS_SAVE_CLIP: function (t) {
        if (tn()) {
            var e;
            let i;
            eE(
                ((i = (e = t.clip).type === tt.nQ.SCREENSHOT ? "screenshot" : "clip"),
                {
                    ...te(Y.KS.ClipsDebugSaveSuccess),
                    title: "Clip saved",
                    body: `${i} \u{2022} ${e.clipMethod} \u{2022} ${e.decision?.signal?.type ?? ""}`,
                }),
            );
        }
    },
    CLIPS_SAVE_CLIP_ERROR: function (t) {
        if ("manual" === t.clipMethod) {
            var e, i;
            let n;
            (eE(tr(H.intl.string(H.t["1ZbZuh"]))),
                tn() &&
                    null != t.errorMessage &&
                    eE(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...te(Y.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    ));
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && tn()) {
            var e, i;
            let n;
            eE(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case tt.RC.MAX_CONCURRENT_SAVES:
                            return `Too many clips saving at once (${tt.VP} in flight). Wait for one to finish.`;
                        case tt.RC.NO_ELIGIBLE_SOURCE:
                            let t, n;
                            return null != i
                                ? ((t = [ti("clips enabled", i.clipsEnabled), ti("streaming", i.hasActiveStream)].join(
                                      ", ",
                                  )),
                                  (n = [
                                      ti("visible game window", i.hasVisibleGameWindow),
                                      ti("clips source", i.hasClipsSource),
                                  ].join(",\n")),
                                  `No capture source. Need any branch satisfied:
\u{2022} GoLive \u{2014} ${t}
\u{2022} Decoupled \u{2014} ${n}`)
                                : "No capture source available. Need an active stream, a decoupled game capture, or a voice channel.";
                        case tt.RC.MODULE_NOT_LOADED:
                            return "discord_clips is still downloading. Try again once the module finishes installing.";
                        case tt.RC.BUFFER_WARMING_UP:
                            return "No encoded video frames yet \u2014 the capture pipeline just started or reset. Try again in a couple of seconds.";
                        case tt.RC.BRIDGE_SHUTDOWN:
                            return "Clips bridge shut down before the save completed (process exited or v3 was disabled). Try again once clips is back up.";
                        case tt.RC.RECORDING_NOT_READY:
                            return "Clips recorder is not recording yet (still cold-starting, or it idle-shut-down). Try again in a couple of seconds.";
                    }
                })()),
                { ...te(Y.KS.ClipsDebugSaveNoOp), title: "Clip hotkey ignored", body: n, maxBodyLines: 8 }),
            );
        }
    },
    CLIPS_SAVE_CLIP_TIMEOUT: function (t) {
        if ("manual" === t.clipMethod && tn()) {
            var e;
            eE(
                ((e = t.elapsedMs),
                {
                    ...te(Y.KS.ClipsDebugSaveTimeout),
                    title: "Clip save stalled",
                    body: `No success or failure after ${Math.round(e / 1e3)}s. The native saveClip callback likely never fired \u{2014} check the media engine / voice engine logs.`,
                    maxBodyLines: 4,
                }),
            );
        }
    },
    CLIPS_INIT: function (t) {
        var e;
        if (!tn()) return;
        let i =
            0 ===
            (e = (function () {
                let t = [],
                    e = d.Ay.getSettings(),
                    i = (0, W.$i)("getEnabledClipsFeatures"),
                    { enableDistributedClips: n } = q.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = Q.Ay.getKeybindForAction(B.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${Z.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return (n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t);
            })()).length
                ? null
                : {
                      ...te(Y.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (eE(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * k.A.Millis.SECOND }), em());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (j.A.isNotificationDisabled(Y.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, F.Y9)(Y.KS.ClipsReminderNotification, {
                    notif_type: Y.KS.ClipsReminderNotification,
                }),
                i = Q.Ay.getKeybindForAction(B.hCu.SAVE_CLIP),
                n = (0, tl.T)();
            if (null == i || !n) return null;
            let l = Z.dI(i.shortcut, !0);
            return {
                title: H.intl.format(H.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, $.jsx)(ta.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, $.jsx)(X.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eE(e);
    },
});
