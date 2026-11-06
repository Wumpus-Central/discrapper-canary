(i.d(e, { default: () => ex }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(115560),
    r = i(350835),
    s = i(855986),
    o = i(73153),
    u = i(684013),
    c = i(587895),
    d = i(628983),
    A = i(419490),
    f = i(397369),
    p = i(432005),
    y = i(411238),
    m = i(208284),
    I = i(253932),
    g = i(616356),
    E = i(46653),
    _ = i(734057),
    S = i(596344),
    N = i(803224),
    C = i(783592),
    h = i(290863),
    T = i(495867),
    v = i(994500),
    O = i(309010),
    b = i(894768),
    L = i(351906),
    x = i(287809),
    D = i(977997),
    R = i(90165),
    k = i(534765),
    U = i(927813),
    M = i(93465),
    V = i(589051),
    j = i(861862),
    P = i(592598),
    w = i(887287),
    K = i(897720),
    G = i(243612),
    F = i(273626),
    Y = i(581730),
    H = i(672396),
    J = i(792996),
    B = i(486020),
    $ = i(652215),
    z = i(477900),
    X = i(582128),
    W = i(176781),
    q = i(458977),
    Q = i(341923),
    Z = i(532624),
    tt = i(350535),
    te = i(696016);
function ti(t) {
    let { trackView: e, trackClick: i } = (0, Y.Y9)(t, { notif_type: t });
    return {
        icon: (0, z.jsx)(W.ClipsIcon, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => e(),
        onDismissClick: () => i("dismiss"),
    };
}
function tn(t, e) {
    return `${t} ${e ? "\u2713" : "\u2717"}`;
}
function tl() {
    return A.Ay.getSettings().debugTooltipsEnabled;
}
var ta = i(572164),
    tr = i(22802);
function ts(t) {
    let { trackView: e, trackClick: i } = (0, Y.Y9)(H.KS.ClipsNotification, { notif_type: H.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, z.jsx)(W.ClipsIcon, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var to = i(387755),
    tu = i(597798),
    tc = i(571694),
    td = i(47167),
    tA = i(621436),
    tf = i(870373),
    tp = i(778712),
    ty = i(834730),
    tm = i(966327),
    tI = i(769015),
    tg = i(562153),
    tE = i(41984),
    t_ = i(222506),
    tS = i(145567),
    tN = i(34773),
    tC = i(308368),
    th = i(334738),
    tT = i(481484),
    tv = i(793574),
    tO = i(486350),
    tb = i(485045),
    tL = i(609145),
    tx = i(46282),
    tD = i(861089);
function tR(t, e, i, n, l) {
    if (P.A.isNotificationDisabled(H.KS.RequestToStream) || null != g.A.getCurrentUserActiveStream()) return null;
    let a = i.username,
        r =
            null != n
                ? J.intl.format(tD.default.jTbTAF, { username: "", game: n.name })
                : J.intl.format(tD.default["d/qbC0"], { username: "" }),
        s = i.getAvatarURL(t.guild_id, 80),
        { trackView: o, trackClick: c } = (0, Y.Y9)(H.KS.RequestToStream, {
            notif_type: H.KS.RequestToStream,
            notif_user_id: i.id,
            activity_type: $.xL.STREAM_REQUEST,
            activity_name: l?.name,
        }),
        d = { section: $.JJy.OVERLAY, objectType: $.btD.ACK_SEMI_AUTOMATIC };
    return {
        icon: s,
        title: a,
        body: r,
        confirmText: J.intl.string(tD.default.UGbmBp),
        cancelText: J.intl.string(J.t["tpXzJ+"]),
        onNotificationShow: () => {
            o();
        },
        onConfirmClick: (i, n) => {
            let l = (0, tb.n)({ location: "requestToStreamNotification" });
            ((0, tx.H)({
                pid: w.A.getTargetPID(),
                analyticsLocations: [tv.A.OVERLAY, tv.A.REQUEST_TO_STREAM_OVERLAY_NOTIFICATION],
                allowOneClickGoLive: !l,
                onBeforeShowModal: () => {
                    u.A.setInputLocked(!1, w.A.getTargetPID());
                },
                onModalStreamStart: () => {
                    u.A.setInputLocked(!0, w.A.getTargetPID());
                },
                appContext: $.BRT.OVERLAY,
                selectSource: !0,
            }),
                (0, tL.A)(e, t.id, { ...d, object: $.ZSU.ACK_ACCEPT_REQUEST_TO_STREAM }));
            let a = "request-to-stream";
            (c(l ? `${a}-go-live-modal` : a), u.A.updateNotificationStatus(n));
        },
        onCancelClick: (i, n) => {
            ((0, tL.A)(e, t.id, { ...d, object: $.ZSU.ACK_DECLINE_REQUEST_TO_STREAM }),
                (0, tO.q)(e),
                u.A.updateNotificationStatus(n),
                c("decline"));
        },
        onDismissClick: () => {
            c("dismiss");
        },
    };
}
var tk = i(941971),
    tU = i(997141),
    tM = i(146849),
    tV = i(647660),
    tj = i(88484),
    tP = i(976860),
    tw = i(400492),
    tK = i(188567),
    tG = i(723702),
    tF = i(253400),
    tY = i(366032),
    tH = i(138399),
    tJ = i(964486),
    tB = i(480870),
    t$ = i(355622),
    tz = i(408018),
    tX = i(989161),
    tW = i(451909),
    tq = i(135621),
    tQ = i(381941),
    tZ = i(158602);
function t0(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tq.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tB.A)({ channel: n }),
        [o, c] = X.useState(() => (0, tz.N3)()),
        { textValue: d, richValue: A } = o,
        [f, p] = X.useState(!1),
        y = X.useCallback(() => p(!0), []),
        m = X.useCallback(() => p(!1), []);
    (0, tJ.Ay)(() => {
        (0, th.I_)(
            n.id,
            { section: $.JJy.OVERLAY, object: $.ZSU.ACK_INLINE_REPLY, objectType: $.btD.ACK_SEMI_AUTOMATIC },
            !0,
            !0,
            i,
        );
    });
    let I = X.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        g = X.useCallback(
            (t) => {
                "Escape" === t.key && u.A.updateNotificationStatus(e, $.yFH.ACTIVE);
            },
            [e],
        ),
        E = X.useCallback(
            () => (
                d.length > a ||
                    (tH.A.sendMessage(n.id, tW.Ay.parse(n, d), !1, { location: tQ.Hx.OVERLAY }),
                    u.A.setInputLocked(!0, w.A.getTargetPID()),
                    u.A.updateNotificationStatus(e, $.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, z.jsx)("div", {
        className: tZ.k,
        children: (0, z.jsx)(tX.Ay, {
            innerClassName: tZ.T,
            onChange: I,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: t$.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: y,
            focused: f,
            onSubmit: E,
            onKeyDown: g,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var t1 = i(119191),
    t8 = i(361729);
function t9(t) {
    t && (0, tw.Ak)(k.c, 0.4, void 0, void 0, { trackNotificationFailure: !0 });
}
let t2 = { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 };
function t3(t) {
    let { message: e } = t,
        i = (0, tM.I2)({ location: "textChatNotification" }).enabled,
        n = (0, tU.j)({ excluded: tU.Z }),
        l = (0, tV.N)(e.content, { enabled: i, syntax: n });
    return (0, z.jsx)(tj.Ay, { message: e, options: t2, parsed: l });
}
var t7 = i(554146),
    t5 = i(298990),
    t4 = i(429913),
    t6 = i(263577),
    et = i(826673),
    ee = i(754712),
    ei = i(907357),
    en = i(487887),
    el = i(731854),
    ea = i(709946),
    er = i(302933);
function es(t) {
    let { game: e } = t,
        i = (0, t4.h)(e.id);
    return null == i ? null : (0, z.jsx)(t6.V, { src: i.getIconURL(en.iu.LARGE), size: 40 });
}
let eo = 5 * U.A.Millis.SECOND,
    eu = 8 * U.A.Millis.SECOND,
    ec = 30 * U.A.Millis.SECOND,
    ed = 30 * U.A.Millis.SECOND,
    eA = Object.freeze({
        timestamp: 0,
        priority: K.In.NORMAL,
        duration: eo,
        expirationExternallyManaged: !1,
        type: K.zb.GENERIC,
    }),
    ef = [],
    ep = !1,
    ey = [],
    em = {};
function eI(t, e, i) {
    (null == em[t] && (em[t] = {}), (em[t][e] = i));
}
let eg = 30 * U.A.Millis.MINUTE,
    eE = 2 * U.A.Millis.MINUTE;
function e_() {
    if (ep && null == ef.find((t) => t.status === $.yFH.FOCUSED))
        for (let t of ((ep = !1), (ef = [...ef, ...ey]), (ey = []), ef.length > 40 && (ef.length = 40), ef))
            t.timer.start();
}
function eS() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    ef.filter((t) => t.type === K.zb.TEXT && t.status === $.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - ec) && eC(e.id, $.yFH.DISMISSED);
        });
}
function eN() {
    let t = new Set();
    ef.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eC(e.id, $.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eC(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $.yFH.DISMISSED;
    if (null == t) return !1;
    let i = ef.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = ef[i];
    if ((n.timer.stop(), (ef = [...ef]), e === $.yFH.FOCUSED)) {
        let [t] = ef.splice(i, 1);
        ((t = { ...t, status: e }), ef.unshift(t), (ep = !0));
        return;
    }
    (e === $.yFH.DISMISSED ? ef.splice(i, 1) : (ef[i] = { ...n, status: e }), e_());
}
function eh(t) {
    let e = ef.find((e) => e.type === K.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eT(t, e) {
    let i = { ...eA, timestamp: Date.now(), ...e },
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
                        -1 === n && (n = setTimeout(() => u.A.updateNotificationStatus(t, a), null != i ? i : eo));
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
        s = ep ? ey : [...ef],
        o = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === o ? s.push(r) : s.splice(o, 0, r), s.length > 40)) {
        let t = s.pop();
        ep || t.timer.stop();
    }
    return (ep || ((ef = s), r.timer.start()), n);
}
function ev(t, e, i, n, l) {
    return (
        null != n &&
        (eT(n, {
            priority: K.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: t.id,
            duration: ed,
            uniqueKey: `activity-${e}-${i.id}-${t.id}-${l ?? "none"}`,
        }),
        eN(),
        !0)
    );
}
function eO() {
    if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return !1;
    let t = C.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in em) t.push(...Object.keys(em[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        ((n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!v.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let s = (function (t) {
                    let e = C.A.getUserGame(t);
                    if (null == e) return null;
                    let i = C.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== r.$.PLAYING ? null : i;
                })(t);
                if (
                    null == s ||
                    !(
                        null != (i = s.timestamps?.start != null ? s.timestamps.start : s.created_at) &&
                        Date.now() - i < eE
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: o } = (0, V.NI)("nowPlayingNotification"),
                    d = P.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    A = O.Ay.getVoiceChannelId(),
                    p = D.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != A && null != p && A === p) return !1;
                let y = (0, G.qv)();
                if (null == y) return !1;
                let m = y.id !== a;
                return (
                    (!m || (!!o && !d)) &&
                    (!!(R.A.hasApplicationStatistic(a) || f.Ay.isGameSeen(a)) || !m) &&
                    (null == (n = em[a]?.[t]?.lastSentTimestamp) || Date.now() - n > eg
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return null;
                                  let n = x.default.getUser(t);
                                  if (null == n) return null;
                                  let l = O.Ay.getCurrentlySelectedChannelId(),
                                      a = _.A.getChannel(l),
                                      r = c.A.getApplication(e),
                                      s = f.Ay.getRunningGames().find((t) => t.id === e),
                                      o = s?.name ?? r?.name ?? i.name,
                                      d = (0, tg.mG)(a?.guild_id, a?.id, n);
                                  if (null == o || 0 === o.trim().length) return null;
                                  let A = (0, z.jsxs)("div", {
                                          className: tN.Ql,
                                          children: [
                                              (0, z.jsx)("div", {
                                                  className: tN.bf,
                                                  children: (0, z.jsx)(tm.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tp._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, z.jsx)("div", {
                                                  className: tN.rf,
                                                  children: (0, z.jsx)(ty.E, {
                                                      variant: "body-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tN.G3,
                                                      children: J.intl.format(J.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: o,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, z.jsx)(tI.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tI.M.XSMALL,
                                                                        className: tN.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: p, trackClick: y } = (0, Y.Y9)(H.KS.NowPlayingNotification, {
                                          notif_type: H.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: o,
                                      }),
                                      { hasChat: m } = (0, V.NI)("nowPlayingNotification");
                                  return {
                                      body: A,
                                      className: tN.dn,
                                      wrapperClassName: tN.P6,
                                      animationWrapperClassName: tN.VG,
                                      clickZoneClassName: tN.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          p();
                                      },
                                      onNotificationClick: (t, e) => {
                                          m &&
                                              (async () => {
                                                  try {
                                                      await (0, tS.D$)({
                                                          target: {
                                                              kind: tS.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tE.B9.NOTIFICATION_CLICK,
                                                          widgetType: $.uss.NOTIFICATIONS,
                                                      });
                                                      let t = w.A.getTargetPID();
                                                      (t_.A.isInputLocked(t)
                                                          ? (y("unlock"), u.A.setInputLocked(!1, t))
                                                          : y("jump"),
                                                          u.A.updateNotificationStatus(e, $.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          y("dismiss");
                                      },
                                  };
                              })(t, a, s)) &&
                              (eI(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eT(l, { type: K.zb.GENERIC, priority: K.In.NORMAL })),
                          !0)
                        : (eI(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = w.A.isOverlayV3EnabledForPID(w.A.getTargetPID()) || null != w.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = h.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, G.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in em) {
                let i = em[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eb(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eh(e);
    if (!Object.keys(i).includes(E.default.getId())) return eC(n);
    if (null != n) return !1;
    let l = _.A.getChannel(e);
    if (null == l || !l.isRingable() || b.A.getStatus() === $.clD.DND || I.NO.getSetting()) return !1;
    let a = ef.find((t) => t.type === K.zb.TEXT && t.channelId === e && t.messageType === $.lAJ.CALL);
    (null != a && eC(a.id),
        eT(
            (function (t) {
                let e = (0, td.m1)(t, x.default, v.A),
                    i = J.intl.string(J.t.ssrVzG),
                    n = (0, tc.Y)(t),
                    l = (0, tA.A)(t),
                    { trackView: a, trackClick: r } = (0, Y.Y9)(H.KS.IncomingCall, {
                        notif_type: H.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: J.intl.string(J.t["0D/6Rz"]),
                    cancelText: J.intl.string(J.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), $.kvI.CALLABLE.has(t.type))) to.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== $.rbe.GUILD_VOICE) return;
                            tu.default.selectVoiceChannel(t.id);
                        }
                        (u.A.updateNotificationStatus(i),
                            (0, tf.g)($.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            }));
                    },
                    onCancelClick: () => {
                        (r("decline"), to.A.stopRinging(t.id));
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: K.In.HIGH, expirationExternallyManaged: !0, type: K.zb.INCOMING_CALL, channelId: l.id },
        ));
}
class eL extends s.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            c.A,
            g.A,
            E.default,
            d.A,
            _.A,
            A.Ay,
            R.A,
            S.A,
            N.A,
            C.A,
            j.default,
            P.A,
            w.A,
            h.A,
            T.A,
            v.A,
            f.Ay,
            O.Ay,
            b.A,
            L.A,
            x.default,
            D.A,
        ),
            this.syncWith([C.A], eO));
    }
    getNotifications() {
        return ef;
    }
    hasNotificationForChannel(t) {
        return ef.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...ef].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return ef.filter((i) => i.channelId === t && i.type === e);
    }
}
let ex = new eL(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eC(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        eS(0);
        let n = w.A.getFocusedPID() ?? -1;
        if (j.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (P.A.isNotificationDisabled(H.KS.WelcomeNudge)) return null;
            ee.Ay.supports(el.O5.VIDEO) ||
                (e = e.filter((t) => t.type !== H.Jr.GO_LIVE_VOICE && t.type !== H.Jr.GO_LIVE_NON_VOICE));
            let { trackView: n, trackClick: l } = (0, Y.Y9)(H.KS.WelcomeNudge, {
                    notif_type: H.KS.WelcomeNudge,
                    secondary_notif_types: e.map((t) => H.Jr[t.type]),
                }),
                a = {};
            for (let i of e)
                switch (i.type) {
                    case H.Jr.WELCOME: {
                        let e = (0, G.tg)(t?.altId ?? t?.id);
                        null != e &&
                            ((a.cancelText = J.intl.string(J.t["6F9ivu"])),
                            (a.onCancelClick = (t, i) => {
                                (l("unlock"),
                                    u.A.updateNotificationStatus(i),
                                    u.A.setInputLocked(!1, w.A.getTargetPID()),
                                    (0, t5.qf)(e, !1, $.BRT.POPOUT));
                            }));
                        break;
                    }
                    case H.Jr.GO_LIVE_VOICE:
                    case H.Jr.GO_LIVE_NON_VOICE:
                        ((a.confirmText = J.intl.string(J.t.U76Ft2)),
                            (a.onConfirmClick = (t, e) => {
                                function i() {
                                    (l("go-live-modal"), u.A.setInputLocked(!1, w.A.getTargetPID()));
                                }
                                function n() {
                                    l("one-click-go-live");
                                }
                                (u.A.updateNotificationStatus(e),
                                    (0, tx.H)({
                                        pid: w.A.getTargetPID(),
                                        allowOneClickGoLive: !0,
                                        onBeforeShowModal: i,
                                        onOneClickGoLive: n,
                                        appContext: $.BRT.POPOUT,
                                    }));
                            }));
                        break;
                    case H.Jr.CONTENT_INVENTORY:
                        ((a.onNotificationShow = () => {
                            (0, tf.g)($.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, z.jsx)(ei.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: er.kL,
                                })));
                }
            let r = (0, et.k8)(t7.M.OVERLAY_OOP_WELCOME_NUX),
                s = J.intl.string(J.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, z.jsx)(es, { game: t })
                        : (0, z.jsx)("img", { src: i(513653), className: ea.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, t1.sI)((0, Y.Jn)(), J.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, et.Dr)(t7.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        u.A.setInputLocked(!1, w.A.getTargetPID()),
                        r || (0, et.Dr)(t7.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, et.Dr)(t7.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, G.qv)(), e);
        null != l && eT(l, { priority: K.In.URGENT, type: K.zb.NUDGE, duration: eu });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of ef) t.status === $.yFH.FOCUSED && eC(t.id, $.yFH.ACTIVE);
            return !0;
        }
        for (let t of (eS(), ef))
            t.type === K.zb.NUDGE
                ? eC(t.id, $.yFH.DISMISSED)
                : t.status !== $.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (ef.length > 0)
            return eC(
                ef.filter((t) => t.type === K.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                $.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = _.A.getChannel(e),
            a = x.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([$.xL.JOIN, $.xL.JOIN_REQUEST, $.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, y.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, o;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                if (e.activity.type === $.xL.STREAM_REQUEST && null == e.application) {
                    let { enabled: n } = m.A.getConfig({ guildId: t.guild_id, location: "OverlayNotificationsStore" });
                    return !!n && ev(t, e.activity.type, i, tR(t, e.id, i, null, null), null);
                }
                let d = (0, G.qv)();
                if (null == d || null == d.id) return !1;
                let A = c.A.getApplication(d.id),
                    f = [d.id];
                (null != d.altId && f.push(d.altId),
                    A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id)));
                let p = e.activity.party_id;
                switch (e.activity.type) {
                    case $.xL.JOIN:
                        ((n = (t) => h.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === p));
                        break;
                    case $.xL.JOIN_REQUEST:
                        ((n = (t) => b.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === p));
                        break;
                    case $.xL.STREAM_REQUEST:
                        ((n = (t) => b.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e));
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
                        o = (function (t, e, i, n, l) {
                            if (P.A.isNotificationDisabled(H.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: o, body: c } = (0, y.TB)(t, e, i),
                                { trackView: d, trackClick: A } = (0, Y.Y9)(H.KS.ActivityInvite, {
                                    notif_type: H.KS.ActivityInvite,
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
                                title: o,
                                body: c,
                                onNotificationShow: () => {
                                    d();
                                },
                                confirmText: J.intl.string(J.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    (F.A.join({
                                        userId: i.id,
                                        sessionId: r,
                                        applicationId: l,
                                        channelId: t.id,
                                        messageId: e.id,
                                    }),
                                        u.A.updateNotificationStatus(a),
                                        A("join"));
                                },
                                onDismissClick: () => {
                                    A("dismiss");
                                },
                            };
                        })(t, e, i, r, s);
                        break;
                    case $.xL.JOIN_REQUEST:
                        o = (function (t, e, i, n) {
                            if (P.A.isNotificationDisabled(H.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = J.intl.format(J.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: o } = (0, Y.Y9)(H.KS.ActivityInvite, {
                                    notif_type: H.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: $.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: J.intl.string(J.t["fgP/wX"]),
                                cancelText: J.intl.string(J.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (e, i) => {
                                    (tC.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: $.xL.JOIN,
                                        activity: n,
                                        location: (0, tT.y)() ? $.ThZ.LOCKED_OVERLAY : $.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        o("join"),
                                        u.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, th.I_)(
                                        t.id,
                                        {
                                            section: $.JJy.OVERLAY,
                                            object: $.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: $.btD.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        u.A.updateNotificationStatus(i),
                                        o("decline"));
                                },
                                onDismissClick: () => {
                                    o("dismiss");
                                },
                            };
                        })(t, i, d, r);
                        break;
                    case $.xL.STREAM_REQUEST:
                        o = tR(t, e.id, i, d, r);
                }
                return ev(t, e.activity.type, i, o, s);
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (P.A.isNotificationDisabled(H.KS.TextChat) || L.A.disableNotifications || !(0, y.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(k.c),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, V.NI)("textChatNotification");
                if (P.A.isNotificationDisabled(H.KS.TextChat)) return (t9(!0), null);
                let { icon: a, title: r, body: s } = (0, y.TB)(t, e, i),
                    { trackView: o, trackClick: c } = (0, Y.Y9)(H.KS.TextChat, {
                        notif_type: H.KS.TextChat,
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
                    body: e.content.length > 0 ? (0, z.jsx)(t3, { message: e }) : s,
                    unreadAccessory: (t) => (l ? (0, z.jsx)(tk.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tY.$)())
                            ? null
                            : (0, t1.sI)((0, Y.Jn)(), l ? t8.default.VMcw8s : J.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tY.$)()
                            ? null
                            : i && !a
                              ? (0, z.jsx)(t0, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (t9(n), o());
                    },
                    onNotificationClick: (i, n) => {
                        let a = w.A.getTargetPID();
                        if (
                            ((0, th.I_)(
                                t.id,
                                {
                                    section: $.JJy.OVERLAY,
                                    object: $.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: $.btD.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                                e.id,
                            ),
                            l)
                        ) {
                            ((0, tS.D$)({
                                target: {
                                    kind: tS.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tE.B9.NOTIFICATION_CLICK,
                                widgetType: $.uss.TEXT_CHAT_V3,
                            }),
                                t_.A.isInputLocked(a) ? (c("unlock"), u.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tK._.dispatchToLastSubscribed($.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                u.A.updateNotificationStatus(n, $.yFH.DISMISSED));
                            return;
                        }
                        t_.A.isInputLocked(a) && !(0, tY.$)()
                            ? (c("unlock"), u.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tP.pX)($.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tG.isPlatformEmbedded && tF.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, S.A.getMessage(e, i.id) ?? (0, p.rh)(i), a, r);
        if (null == s) return !1;
        (eT(s, { type: K.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), eS());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = ef.length),
            (i = (ef = ef.filter((t) => t.type !== K.zb.TEXT || t.channelId !== n)).length !== e) && e_(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eb,
    CALL_UPDATE: eb,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eC(eh(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, G.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === $.xL.JOIN &&
                (e = (function (t, e) {
                    if (P.A.isNotificationDisabled(H.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = J.intl.format(J.t["Yk+uYG"], { username: "" }),
                        l = (0, B.ku)(t),
                        a = J.intl.string(J.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, Y.Y9)(H.KS.ActivityUserJoin, {
                            notif_type: H.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: $.xL.JOIN,
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
            null != e && void eT(e, { priority: K.In.URGENT, type: K.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eT(ts(J.intl.string(J.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tl() &&
                    eT(
                        ((e = t.signal),
                        {
                            ...ti(H.KS.ClipsDebugAutoSignal),
                            title: `Auto-clip: ${(function (t) {
                                switch (t.type) {
                                    case te.Gy.MANUAL:
                                        return "Manual";
                                    case te.Gy.SHOUTING:
                                        return `Shouting detected (${t.confidence.toFixed(2)})`;
                                    case te.Gy.LAUGHTER:
                                        return `Laughter detected (${t.confidence.toFixed(2)})`;
                                    case te.Gy.GAME_EVENT:
                                        return `Game event: ${t.eventName ?? t.eventType}`;
                                    case te.Gy.DISTRIBUTED:
                                        return "Distributed clip from another user";
                                    case te.Gy.SPEAKING:
                                        return "Speaking detected";
                                    case te.Gy.SOUNDBOARD:
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
        if (tl()) {
            var e;
            let i;
            eT(
                ((i = (e = t.clip).type === te.nQ.SCREENSHOT ? "screenshot" : "clip"),
                {
                    ...ti(H.KS.ClipsDebugSaveSuccess),
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
            (eT(ts(J.intl.string(J.t["1ZbZuh"]))),
                tl() &&
                    null != t.errorMessage &&
                    eT(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...ti(H.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    ));
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && tl()) {
            var e, i;
            let n;
            eT(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case te.RC.MAX_CONCURRENT_SAVES:
                            return "Too many clips saving at once (15 in flight). Wait for one to finish.";
                        case te.RC.NO_ELIGIBLE_SOURCE:
                            let t, n;
                            return null != i
                                ? ((t = [tn("clips enabled", i.clipsEnabled), tn("streaming", i.hasActiveStream)].join(
                                      ", ",
                                  )),
                                  (n = [
                                      tn("visible game window", i.hasVisibleGameWindow),
                                      tn("clips source", i.hasClipsSource),
                                  ].join(",\n")),
                                  `No capture source. Need any branch satisfied:
\u{2022} GoLive \u{2014} ${t}
\u{2022} Decoupled \u{2014} ${n}`)
                                : "No capture source available. Need an active stream, a decoupled game capture, or a voice channel.";
                        case te.RC.MODULE_NOT_LOADED:
                            return "discord_clips is still downloading. Try again once the module finishes installing.";
                        case te.RC.BUFFER_WARMING_UP:
                            return "No encoded video frames yet \u2014 the capture pipeline just started or reset. Try again in a couple of seconds.";
                        case te.RC.BRIDGE_SHUTDOWN:
                            return "Clips bridge shut down before the save completed (process exited or v3 was disabled). Try again once clips is back up.";
                        case te.RC.RECORDING_NOT_READY:
                            return "Clips recorder is not recording yet (still cold-starting, or it idle-shut-down). Try again in a couple of seconds.";
                    }
                })()),
                { ...ti(H.KS.ClipsDebugSaveNoOp), title: "Clip hotkey ignored", body: n, maxBodyLines: 8 }),
            );
        }
    },
    CLIPS_SAVE_CLIP_TIMEOUT: function (t) {
        if ("manual" === t.clipMethod && tl()) {
            var e;
            eT(
                ((e = t.elapsedMs),
                {
                    ...ti(H.KS.ClipsDebugSaveTimeout),
                    title: "Clip save stalled",
                    body: `No success or failure after ${Math.round(e / 1e3)}s. The native saveClip callback likely never fired \u{2014} check the media engine / voice engine logs.`,
                    maxBodyLines: 4,
                }),
            );
        }
    },
    CLIPS_INIT: function (t) {
        var e;
        if (!tl()) return;
        let i =
            0 ===
            (e = (function () {
                let t = [],
                    e = A.Ay.getSettings(),
                    i = (0, Q.s)(),
                    { enableDistributedClips: n } = q.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = Z.Ay.getKeybindForAction($.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${tt.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return (n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t);
            })()).length
                ? null
                : {
                      ...ti(H.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (eT(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * U.A.Millis.SECOND }), eN());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (P.A.isNotificationDisabled(H.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, Y.Y9)(H.KS.ClipsReminderNotification, {
                    notif_type: H.KS.ClipsReminderNotification,
                }),
                i = Z.Ay.getKeybindForAction($.hCu.SAVE_CLIP),
                n = (0, ta.T)();
            if (null == i || !n) return null;
            let l = tt.dI(i.shortcut, !0);
            return {
                title: J.intl.format(J.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, z.jsx)(tr.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, z.jsx)(W.ClipsIcon, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eT(e);
    },
});
