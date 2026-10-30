(i.r(e), i.d(e, { default: () => eT }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(350835),
    s = i(17928),
    o = i(73153),
    u = i(684013),
    c = i(587895),
    d = i(198052),
    A = i(915725),
    f = i(952818),
    y = i(320095),
    p = i(176154),
    m = i(208284),
    g = i(253932),
    I = i(616356),
    E = i(280450),
    _ = i(734057),
    S = i(232835),
    N = i(803224),
    C = i(783592),
    h = i(290863),
    T = i(763827),
    v = i(994500),
    O = i(309010),
    L = i(461213),
    b = i(351906),
    x = i(287809),
    D = i(977997),
    R = i(90165),
    k = i(592329),
    U = i(927813),
    M = i(93465),
    V = i(589051),
    j = i(296027),
    P = i(592598),
    w = i(233741),
    K = i(897720),
    G = i(243612),
    F = i(452295),
    Y = i(581730),
    H = i(672396),
    J = i(105292),
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
    tu = i(730852),
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
    tL = i(485045),
    tb = i(609145),
    tx = i(46282),
    tD = i(51685);
function tR(t, e, i, n, l) {
    if (P.A.isNotificationDisabled(H.KS.RequestToStream) || null != I.A.getCurrentUserActiveStream()) return null;
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
        d = { section: $.JJy.OVERLAY, objectType: $.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC };
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
            let l = (0, tL.n)({ location: "requestToStreamNotification" });
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
                (0, tb.A)(e, t.id, { ...d, object: $.ZSU.ACK_ACCEPT_REQUEST_TO_STREAM }));
            let a = "request-to-stream";
            (c(l ? `${a}-go-live-modal` : a), u.A.updateNotificationStatus(n));
        },
        onCancelClick: (i, n) => {
            ((0, tb.A)(e, t.id, { ...d, object: $.ZSU.ACK_DECLINE_REQUEST_TO_STREAM }),
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
    tU = i(521981),
    tM = i(976860),
    tV = i(400492),
    tj = i(625494),
    tP = i(723702),
    tw = i(19575),
    tK = i(366032),
    tG = i(148494),
    tF = i(964486),
    tY = i(480870),
    tH = i(355622),
    tJ = i(408018),
    tB = i(845207),
    t$ = i(451909),
    tz = i(135621),
    tX = i(381941),
    tW = i(158602);
function tq(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tz.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tY.A)({ channel: n }),
        [o, c] = X.useState(() => (0, tJ.N3)()),
        { textValue: d, richValue: A } = o,
        [f, y] = X.useState(!1),
        p = X.useCallback(() => y(!0), []),
        m = X.useCallback(() => y(!1), []);
    (0, tF.Ay)(() => {
        (0, th.ack)(
            n.id,
            {
                section: $.JJy.OVERLAY,
                object: $.ZSU.ACK_INLINE_REPLY,
                objectType: $.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
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
                    (tG.A.sendMessage(n.id, t$.Ay.parse(n, d), !1, { location: tX.Hx.OVERLAY }),
                    u.A.setInputLocked(!0, w.A.getTargetPID()),
                    u.A.updateNotificationStatus(e, $.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, z.jsx)("div", {
        className: tW.k,
        children: (0, z.jsx)(tB.Ay, {
            innerClassName: tW.T,
            onChange: g,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tH.oU.OVERLAY_INLINE_REPLY,
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
var tQ = i(119191),
    tZ = i(254821);
function t0(t) {
    t && (0, tV.Ak)(k.cH, k.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var t1 = i(554146),
    t2 = i(298990),
    t9 = i(429913),
    t5 = i(263577),
    t3 = i(826673),
    t8 = i(999926),
    t7 = i(308726),
    t4 = i(818023),
    t6 = i(731854),
    et = i(709946),
    ee = i(302933);
function ei(t) {
    let { game: e } = t,
        i = (0, t9.h)(e.id);
    return null == i ? null : (0, z.jsx)(t5.V, { src: i.getIconURL(t4.iu.LARGE), size: 40 });
}
let en = 5 * U.A.Millis.SECOND,
    el = 8 * U.A.Millis.SECOND,
    ea = 30 * U.A.Millis.SECOND,
    er = 30 * U.A.Millis.SECOND,
    es = Object.freeze({
        timestamp: 0,
        priority: K.In.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: K.zb.GENERIC,
    }),
    eo = [],
    eu = !1,
    ec = [],
    ed = {};
function eA(t, e, i) {
    (null == ed[t] && (ed[t] = {}), (ed[t][e] = i));
}
let ef = 30 * U.A.Millis.MINUTE,
    ey = 2 * U.A.Millis.MINUTE;
function ep() {
    if (eu && null == eo.find((t) => t.status === $.yFH.FOCUSED))
        for (let t of ((eu = !1), (eo = [...eo, ...ec]), (ec = []), eo.length > 40 && (eo.length = 40), eo))
            t.timer.start();
}
function em() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    eo.filter((t) => t.type === K.zb.TEXT && t.status === $.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - ea) && eI(e.id, $.yFH.DISMISSED);
        });
}
function eg() {
    let t = new Set();
    eo.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eI(e.id, $.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eI(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $.yFH.DISMISSED;
    if (null == t) return !1;
    let i = eo.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = eo[i];
    if ((n.timer.stop(), (eo = [...eo]), e === $.yFH.FOCUSED)) {
        let [t] = eo.splice(i, 1);
        ((t = { ...t, status: e }), eo.unshift(t), (eu = !0));
        return;
    }
    (e === $.yFH.DISMISSED ? eo.splice(i, 1) : (eo[i] = { ...n, status: e }), ep());
}
function eE(t) {
    let e = eo.find((e) => e.type === K.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function e_(t, e) {
    let i = { ...es, timestamp: Date.now(), ...e },
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
                        -1 === n && (n = setTimeout(() => u.A.updateNotificationStatus(t, a), null != i ? i : en));
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
        s = eu ? ec : [...eo],
        o = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === o ? s.push(r) : s.splice(o, 0, r), s.length > 40)) {
        let t = s.pop();
        eu || t.timer.stop();
    }
    return (eu || ((eo = s), r.timer.start()), n);
}
function eS(t, e, i, n, l) {
    return (
        null != n &&
        (e_(n, {
            priority: K.In.URGENT,
            expirationExternallyManaged: !0,
            channelId: t.id,
            duration: er,
            uniqueKey: `activity-${e}-${i.id}-${t.id}-${l ?? "none"}`,
        }),
        eg(),
        !0)
    );
}
function eN() {
    if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return !1;
    let t = C.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in ed) t.push(...Object.keys(ed[e]).map((t) => t));
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
                        Date.now() - i < ey
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: o } = (0, V.NI)("nowPlayingNotification"),
                    d = P.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    A = O.Ay.getVoiceChannelId(),
                    y = D.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != A && null != y && A === y) return !1;
                let p = (0, G.qv)();
                if (null == p) return !1;
                let m = p.id !== a;
                return (
                    (!m || (!!o && !d)) &&
                    (!!(R.A.hasApplicationStatistic(a) || f.Ay.isGameSeen(a)) || !m) &&
                    (null == (n = ed[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ef
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
                                                      variant: "text-sm/medium",
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
                                                      let t = w.A.getTargetPID();
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
                              (eA(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              e_(l, { type: K.zb.GENERIC, priority: K.In.NORMAL })),
                          !0)
                        : (eA(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
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
            for (let e in ed) {
                let i = ed[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eC(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eE(e);
    if (!Object.keys(i).includes(E.default.getId())) return eI(n);
    if (null != n) return !1;
    let l = _.A.getChannel(e);
    if (null == l || !l.isRingable() || L.A.getStatus() === $.clD.DND || g.NO.getSetting()) return !1;
    let a = eo.find((t) => t.type === K.zb.TEXT && t.channelId === e && t.messageType === $.lAJ.CALL);
    (null != a && eI(a.id),
        e_(
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
class eh extends s.Ay.Store {
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
            P.A,
            w.A,
            h.A,
            T.A,
            v.A,
            f.Ay,
            O.Ay,
            L.A,
            b.A,
            x.default,
            D.A,
        ),
            this.syncWith([C.A], eN));
    }
    getNotifications() {
        return eo;
    }
    hasNotificationForChannel(t) {
        return eo.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...eo].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return eo.filter((i) => i.channelId === t && i.type === e);
    }
}
let eT = new eh(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eI(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        em(0);
        let n = w.A.getFocusedPID() ?? -1;
        if (j.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (P.A.isNotificationDisabled(H.KS.WelcomeNudge)) return null;
            t8.Ay.supports(t6.O5.VIDEO) ||
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
                                    (0, t2.qf)(e, !1, $.BRT.POPOUT));
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
                                (0, z.jsx)(t7.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: ee.kL,
                                })));
                }
            let r = (0, t3.k8)(t1.M.OVERLAY_OOP_WELCOME_NUX),
                s = J.intl.string(J.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, z.jsx)(ei, { game: t })
                        : (0, z.jsx)("img", { src: i(513653), className: et.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, tQ.sI)((0, Y.Jn)(), J.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, t3.Dr)(t1.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        u.A.setInputLocked(!1, w.A.getTargetPID()),
                        r || (0, t3.Dr)(t1.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, t3.Dr)(t1.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, G.qv)(), e);
        null != l && e_(l, { priority: K.In.URGENT, type: K.zb.NUDGE, duration: el });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of eo) t.status === $.yFH.FOCUSED && eI(t.id, $.yFH.ACTIVE);
            return !0;
        }
        for (let t of (em(), eo))
            t.type === K.zb.NUDGE
                ? eI(t.id, $.yFH.DISMISSED)
                : t.status !== $.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (eo.length > 0)
            return eI(
                eo.filter((t) => t.type === K.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
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
                    return !!n && eS(t, e.activity.type, i, tR(t, e.id, i, null, null), null);
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
                        ((n = (t) => L.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case $.xL.STREAM_REQUEST:
                        ((n = (t) => L.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e));
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
                                    ((0, th.ack)(
                                        t.id,
                                        {
                                            section: $.JJy.OVERLAY,
                                            object: $.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: $.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                return eS(t, e.activity.type, i, o, s);
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (P.A.isNotificationDisabled(H.KS.TextChat) || b.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(k.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, V.NI)("textChatNotification");
                if (P.A.isNotificationDisabled(H.KS.TextChat)) return (t0(!0), null);
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
                    body:
                        e.content.length > 0
                            ? (0, tU.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, z.jsx)(tk.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tK.$)())
                            ? null
                            : (0, tQ.sI)((0, Y.Jn)(), l ? tZ.default.VMcw8s : J.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tK.$)()
                            ? null
                            : i && !a
                              ? (0, z.jsx)(tq, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (t0(n), o());
                    },
                    onNotificationClick: (i, n) => {
                        let a = w.A.getTargetPID();
                        if (
                            ((0, th.ack)(
                                t.id,
                                {
                                    section: $.JJy.OVERLAY,
                                    object: $.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: $.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                                    tj._.dispatchToLastSubscribed($.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                u.A.updateNotificationStatus(n, $.yFH.DISMISSED));
                            return;
                        }
                        t_.A.isInputLocked(a) && !(0, tK.$)()
                            ? (c("unlock"), u.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tM.pX)($.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tP.isPlatformEmbedded && tw.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, S.A.getMessage(e, i.id) ?? (0, y.rh)(i), a, r);
        if (null == s) return !1;
        (e_(s, { type: K.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), em());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = eo.length),
            (i = (eo = eo.filter((t) => t.type !== K.zb.TEXT || t.channelId !== n)).length !== e) && ep(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eC,
    CALL_UPDATE: eC,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eI(eE(e));
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
            null != e && void e_(e, { priority: K.In.URGENT, type: K.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                e_(ts(J.intl.string(J.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tl() &&
                    e_(
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
            e_(
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
            (e_(ts(J.intl.string(J.t["1ZbZuh"]))),
                tl() &&
                    null != t.errorMessage &&
                    e_(
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
            e_(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case te.RC.MAX_CONCURRENT_SAVES:
                            return `Too many clips saving at once (${te.VP} in flight). Wait for one to finish.`;
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
            e_(
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
                    i = (0, Q.s$)(),
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
            (e_(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * U.A.Millis.SECOND }), eg());
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
                icon: (0, z.jsx)(W.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && e_(e);
    },
});
