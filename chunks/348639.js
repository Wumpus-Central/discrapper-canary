(i.d(e, { default: () => eL }), i(321073), i(667532));
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
    f = i(986322),
    y = i(432005),
    p = i(411238),
    m = i(208284),
    g = i(253932),
    I = i(616356),
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
    w = i(592598),
    P = i(887287),
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
        icon: (0, z.jsx)(W.x, { size: "lg", color: "currentColor" }),
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
        icon: (0, z.jsx)(W.x, { size: "lg", color: "currentColor" }),
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
    ty = i(778712),
    tp = i(834730),
    tm = i(966327),
    tg = i(769015),
    tI = i(562153),
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
    if (w.A.isNotificationDisabled(H.KS.RequestToStream) || null != I.A.getCurrentUserActiveStream()) return null;
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
                pid: P.A.getTargetPID(),
                analyticsLocations: [tv.A.OVERLAY, tv.A.REQUEST_TO_STREAM_OVERLAY_NOTIFICATION],
                allowOneClickGoLive: !l,
                onBeforeShowModal: () => {
                    u.A.setInputLocked(!1, P.A.getTargetPID());
                },
                onModalStreamStart: () => {
                    u.A.setInputLocked(!0, P.A.getTargetPID());
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
    tM = i(647660),
    tV = i(88484),
    tj = i(976860),
    tw = i(400492),
    tP = i(188567),
    tK = i(723702),
    tG = i(253400),
    tF = i(366032),
    tY = i(138399),
    tH = i(964486),
    tJ = i(480870),
    tB = i(355622),
    t$ = i(408018),
    tz = i(989161),
    tX = i(451909),
    tW = i(135621),
    tq = i(381941),
    tQ = i(158602);
function tZ(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tW.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tJ.A)({ channel: n }),
        [o, c] = X.useState(() => (0, t$.N3)()),
        { textValue: d, richValue: A } = o,
        [f, y] = X.useState(!1),
        p = X.useCallback(() => y(!0), []),
        m = X.useCallback(() => y(!1), []);
    (0, tH.Ay)(() => {
        (0, th.I_)(
            n.id,
            { section: $.JJy.OVERLAY, object: $.ZSU.ACK_INLINE_REPLY, objectType: $.btD.ACK_SEMI_AUTOMATIC },
            !0,
            !0,
            i,
        );
    });
    let g = X.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        I = X.useCallback(
            (t) => {
                "Escape" === t.key && u.A.updateNotificationStatus(e, $.yFH.ACTIVE);
            },
            [e],
        ),
        E = X.useCallback(
            () => (
                d.length > a ||
                    (tY.A.sendMessage(n.id, tX.Ay.parse(n, d), !1, { location: tq.Hx.OVERLAY }),
                    u.A.setInputLocked(!0, P.A.getTargetPID()),
                    u.A.updateNotificationStatus(e, $.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, z.jsx)("div", {
        className: tQ.k,
        children: (0, z.jsx)(tz.Ay, {
            innerClassName: tQ.T,
            onChange: g,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tB.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: p,
            focused: f,
            onSubmit: E,
            onKeyDown: I,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var t0 = i(119191),
    t1 = i(361729);
function t8(t) {
    t && (0, tw.Ak)(k.c, 0.4, void 0, void 0, { trackNotificationFailure: !0 });
}
let t9 = { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 };
function t2(t) {
    let { message: e } = t,
        i = (0, tV.ld)(t9, "textChatNotification"),
        n = (0, tU.j)({ excluded: tU.Z }),
        l = (0, tM.N)(e.content, { enabled: i, syntax: n });
    return (0, z.jsx)(tV.Ay, { message: e, options: t9, parsed: l });
}
var t3 = i(554146),
    t7 = i(298990),
    t5 = i(429913),
    t4 = i(263577),
    t6 = i(826673),
    et = i(718197),
    ee = i(907357),
    ei = i(487887),
    en = i(731854),
    el = i(709946),
    ea = i(302933);
function er(t) {
    let { game: e } = t,
        i = (0, t5.h)(e.id);
    return null == i ? null : (0, z.jsx)(t4.V, { src: i.getIconURL(ei.iu.LARGE), size: 40 });
}
let es = 5 * U.A.Millis.SECOND,
    eo = 8 * U.A.Millis.SECOND,
    eu = 30 * U.A.Millis.SECOND,
    ec = 30 * U.A.Millis.SECOND,
    ed = Object.freeze({
        timestamp: 0,
        priority: K.In.NORMAL,
        duration: es,
        expirationExternallyManaged: !1,
        type: K.zb.GENERIC,
    }),
    eA = [],
    ef = !1,
    ey = [],
    ep = {};
function em(t, e, i) {
    (null == ep[t] && (ep[t] = {}), (ep[t][e] = i));
}
let eg = 30 * U.A.Millis.MINUTE,
    eI = 2 * U.A.Millis.MINUTE;
function eE() {
    if (ef && null == eA.find((t) => t.status === $.yFH.FOCUSED))
        for (let t of ((ef = !1), (eA = [...eA, ...ey]), (ey = []), eA.length > 40 && (eA.length = 40), eA))
            t.timer.start();
}
function e_() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eA.filter((t) => t.type === K.zb.TEXT && t.status === $.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - eu) && eN(e.id, $.yFH.DISMISSED);
        });
}
function eS() {
    let t = new Set();
    eA.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eN(e.id, $.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eN(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $.yFH.DISMISSED;
    if (null == t) return !1;
    let i = eA.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = eA[i];
    if ((n.timer.stop(), (eA = [...eA]), e === $.yFH.FOCUSED)) {
        let [t] = eA.splice(i, 1);
        ((t = { ...t, status: e }), eA.unshift(t), (ef = !0));
        return;
    }
    (e === $.yFH.DISMISSED ? eA.splice(i, 1) : (eA[i] = { ...n, status: e }), eE());
}
function eC(t) {
    let e = eA.find((e) => e.type === K.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eh(t, e) {
    let i = { ...ed, timestamp: Date.now(), ...e },
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
                        -1 === n && (n = setTimeout(() => u.A.updateNotificationStatus(t, a), null != i ? i : es));
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
        s = ef ? ey : [...eA],
        o = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === o ? s.push(r) : s.splice(o, 0, r), s.length > 40)) {
        let t = s.pop();
        ef || t.timer.stop();
    }
    return (ef || ((eA = s), r.timer.start()), n);
}
function eT(t, e, i, n, l) {
    return (
        null != n &&
        (eh(n, {
            priority: K.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: t.id,
            duration: ec,
            uniqueKey: `activity-${e}-${i.id}-${t.id}-${l ?? "none"}`,
        }),
        eS(),
        !0)
    );
}
function ev() {
    if (w.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return !1;
    let t = C.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in ep) t.push(...Object.keys(ep[e]).map((t) => t));
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
                        Date.now() - i < eI
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: o } = (0, V.NI)("nowPlayingNotification"),
                    d = w.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    A = O.Ay.getVoiceChannelId(),
                    y = D.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != A && null != y && A === y) return !1;
                let p = (0, G.qv)();
                if (null == p) return !1;
                let m = p.id !== a;
                return (
                    (!m || (!!o && !d)) &&
                    (!!(R.A.hasApplicationStatistic(a) || f.Ay.isGameSeen(a)) || !m) &&
                    (null == (n = ep[a]?.[t]?.lastSentTimestamp) || Date.now() - n > eg
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (w.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return null;
                                  let n = x.default.getUser(t);
                                  if (null == n) return null;
                                  let l = O.Ay.getCurrentlySelectedChannelId(),
                                      a = _.A.getChannel(l),
                                      r = c.A.getApplication(e),
                                      s = f.Ay.getRunningGames().find((t) => t.id === e),
                                      o = s?.name ?? r?.name ?? i.name,
                                      d = (0, tI.mG)(a?.guild_id, a?.id, n);
                                  if (null == o || 0 === o.trim().length) return null;
                                  let A = (0, z.jsxs)("div", {
                                          className: tN.Ql,
                                          children: [
                                              (0, z.jsx)("div", {
                                                  className: tN.bf,
                                                  children: (0, z.jsx)(tm.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: ty._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, z.jsx)("div", {
                                                  className: tN.rf,
                                                  children: (0, z.jsx)(tp.E, {
                                                      variant: "body-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tN.G3,
                                                      children: J.intl.format(J.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: o,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, z.jsx)(tg.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tg.M.XSMALL,
                                                                        className: tN.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: y, trackClick: p } = (0, Y.Y9)(H.KS.NowPlayingNotification, {
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
                                          y();
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
                                                      let t = P.A.getTargetPID();
                                                      (t_.A.isInputLocked(t)
                                                          ? (p("unlock"), u.A.setInputLocked(!1, t))
                                                          : p("jump"),
                                                          u.A.updateNotificationStatus(e, $.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          p("dismiss");
                                      },
                                  };
                              })(t, a, s)) &&
                              (em(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eh(l, { type: K.zb.GENERIC, priority: K.In.NORMAL })),
                          !0)
                        : (em(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = P.A.isOverlayV3EnabledForPID(P.A.getTargetPID()) || null != P.A.getFocusedPID();
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
            for (let e in ep) {
                let i = ep[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eO(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eC(e);
    if (!Object.keys(i).includes(E.default.getId())) return eN(n);
    if (null != n) return !1;
    let l = _.A.getChannel(e);
    if (null == l || !l.isRingable() || b.A.getStatus() === $.clD.DND || g.NO.getSetting()) return !1;
    let a = eA.find((t) => t.type === K.zb.TEXT && t.channelId === e && t.messageType === $.lAJ.CALL);
    (null != a && eN(a.id),
        eh(
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
class eb extends s.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            c.A,
            I.A,
            E.default,
            d.A,
            _.A,
            A.Ay,
            R.A,
            S.A,
            N.A,
            C.A,
            j.default,
            w.A,
            P.A,
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
            this.syncWith([C.A], ev));
    }
    getNotifications() {
        return eA;
    }
    hasNotificationForChannel(t) {
        return eA.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...eA].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return eA.filter((i) => i.channelId === t && i.type === e);
    }
}
let eL = new eb(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eN(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        e_(0);
        let n = P.A.getFocusedPID() ?? -1;
        if (j.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (w.A.isNotificationDisabled(H.KS.WelcomeNudge)) return null;
            et.Ay.supports(en.O5.VIDEO) ||
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
                                    u.A.setInputLocked(!1, P.A.getTargetPID()),
                                    (0, t7.qf)(e, !1, $.BRT.POPOUT));
                            }));
                        break;
                    }
                    case H.Jr.GO_LIVE_VOICE:
                    case H.Jr.GO_LIVE_NON_VOICE:
                        ((a.confirmText = J.intl.string(J.t.U76Ft2)),
                            (a.onConfirmClick = (t, e) => {
                                function i() {
                                    (l("go-live-modal"), u.A.setInputLocked(!1, P.A.getTargetPID()));
                                }
                                function n() {
                                    l("one-click-go-live");
                                }
                                (u.A.updateNotificationStatus(e),
                                    (0, tx.H)({
                                        pid: P.A.getTargetPID(),
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
                                (0, z.jsx)(ee.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: ea.kL,
                                })));
                }
            let r = (0, t6.k8)(t3.M.OVERLAY_OOP_WELCOME_NUX),
                s = J.intl.string(J.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, z.jsx)(er, { game: t })
                        : (0, z.jsx)("img", { src: i(513653), className: el.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, t0.sI)((0, Y.Jn)(), J.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, t6.Dr)(t3.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        u.A.setInputLocked(!1, P.A.getTargetPID()),
                        r || (0, t6.Dr)(t3.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, t6.Dr)(t3.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, G.qv)(), e);
        null != l && eh(l, { priority: K.In.URGENT, type: K.zb.NUDGE, duration: eo });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of eA) t.status === $.yFH.FOCUSED && eN(t.id, $.yFH.ACTIVE);
            return !0;
        }
        for (let t of (e_(), eA))
            t.type === K.zb.NUDGE
                ? eN(t.id, $.yFH.DISMISSED)
                : t.status !== $.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (eA.length > 0)
            return eN(
                eA.filter((t) => t.type === K.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                $.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = _.A.getChannel(e),
            a = x.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([$.xL.JOIN, $.xL.JOIN_REQUEST, $.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, p.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, o;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                if (e.activity.type === $.xL.STREAM_REQUEST && null == e.application) {
                    let { enabled: n } = m.A.getConfig({ guildId: t.guild_id, location: "OverlayNotificationsStore" });
                    return !!n && eT(t, e.activity.type, i, tR(t, e.id, i, null, null), null);
                }
                let d = (0, G.qv)();
                if (null == d || null == d.id) return !1;
                let A = c.A.getApplication(d.id),
                    f = [d.id];
                (null != d.altId && f.push(d.altId),
                    A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id)));
                let y = e.activity.party_id;
                switch (e.activity.type) {
                    case $.xL.JOIN:
                        ((n = (t) => h.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case $.xL.JOIN_REQUEST:
                        ((n = (t) => b.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y));
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
                            if (w.A.isNotificationDisabled(H.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: o, body: c } = (0, p.TB)(t, e, i),
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
                            if (w.A.isNotificationDisabled(H.KS.ActivityInvite)) return null;
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
                return eT(t, e.activity.type, i, o, s);
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (w.A.isNotificationDisabled(H.KS.TextChat) || L.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(k.c),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, V.NI)("textChatNotification");
                if (w.A.isNotificationDisabled(H.KS.TextChat)) return (t8(!0), null);
                let { icon: a, title: r, body: s } = (0, p.TB)(t, e, i),
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
                    body: e.content.length > 0 ? (0, z.jsx)(t2, { message: e }) : s,
                    unreadAccessory: (t) => (l ? (0, z.jsx)(tk.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tF.$)())
                            ? null
                            : (0, t0.sI)((0, Y.Jn)(), l ? t1.default.VMcw8s : J.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tF.$)()
                            ? null
                            : i && !a
                              ? (0, z.jsx)(tZ, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (t8(n), o());
                    },
                    onNotificationClick: (i, n) => {
                        let a = P.A.getTargetPID();
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
                                    tP._.dispatchToLastSubscribed($.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                u.A.updateNotificationStatus(n, $.yFH.DISMISSED));
                            return;
                        }
                        t_.A.isInputLocked(a) && !(0, tF.$)()
                            ? (c("unlock"), u.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tj.pX)($.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tK.isPlatformEmbedded && tG.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, S.A.getMessage(e, i.id) ?? (0, y.rh)(i), a, r);
        if (null == s) return !1;
        (eh(s, { type: K.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), e_());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = eA.length),
            (i = (eA = eA.filter((t) => t.type !== K.zb.TEXT || t.channelId !== n)).length !== e) && eE(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eO,
    CALL_UPDATE: eO,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eN(eC(e));
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
                    if (w.A.isNotificationDisabled(H.KS.ActivityUserJoin)) return null;
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
            null != e && void eh(e, { priority: K.In.URGENT, type: K.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eh(ts(J.intl.string(J.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tl() &&
                    eh(
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
            eh(
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
            (eh(ts(J.intl.string(J.t["1ZbZuh"]))),
                tl() &&
                    null != t.errorMessage &&
                    eh(
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
            eh(
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
            eh(
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
            (eh(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * U.A.Millis.SECOND }), eS());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (w.A.isNotificationDisabled(H.KS.ClipsReminderNotification)) return null;
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
                icon: (0, z.jsx)(W.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eh(e);
    },
});
