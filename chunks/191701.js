(i.r(e), i.d(e, { default: () => e_ }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(17928),
    s = i(228366),
    o = i(684013),
    u = i(587895),
    c = i(198052),
    d = i(915725),
    A = i(952818),
    f = i(320095),
    p = i(176154),
    y = i(885386),
    m = i(616356),
    g = i(280450),
    E = i(734057),
    I = i(232835),
    N = i(803224),
    _ = i(783592),
    S = i(290863),
    C = i(763827),
    h = i(994500),
    T = i(309010),
    v = i(461213),
    O = i(351906),
    b = i(287809),
    L = i(977997),
    x = i(90165),
    D = i(592329),
    R = i(927813),
    k = i(9302),
    U = i(93465),
    M = i(589051),
    V = i(296027),
    j = i(592598),
    P = i(489277),
    w = i(897720),
    K = i(243612),
    G = i(780907),
    F = i(581730),
    Y = i(672396),
    H = i(375708),
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
    tA = i(778712),
    tf = i(834730),
    tp = i(966327),
    ty = i(769015),
    tm = i(562153),
    tg = i(41984),
    tE = i(222506),
    tI = i(145567),
    tN = i(34773),
    t_ = i(308368),
    tS = i(334738),
    tC = i(481484),
    th = i(258585),
    tT = i(560595),
    tv = i(929921),
    tO = i(753070),
    tb = i(905322),
    tL = i(941971),
    tx = i(521981),
    tD = i(976860),
    tR = i(400492),
    tk = i(625494),
    tU = i(723702),
    tM = i(19575),
    tV = i(366032),
    tj = i(148494),
    tP = i(964486),
    tw = i(480870),
    tK = i(355622),
    tG = i(408018),
    tF = i(959070),
    tY = i(451909),
    tH = i(135621),
    tJ = i(381941),
    tB = i(158602);
function t$(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tH.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tw.A)({ channel: n }),
        [u, c] = z.useState(() => (0, tG.N3)()),
        { textValue: d, richValue: A } = u,
        [f, p] = z.useState(!1),
        y = z.useCallback(() => p(!0), []),
        m = z.useCallback(() => p(!1), []);
    (0, tP.Ay)(() => {
        (0, tS.ack)(
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
        E = z.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, B.yFH.ACTIVE);
            },
            [e],
        ),
        I = z.useCallback(
            () => (
                d.length > a ||
                    (tj.A.sendMessage(n.id, tY.Ay.parse(n, d), !1, { location: tJ.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, P.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, B.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, $.jsx)("div", {
        className: tB.k,
        children: (0, $.jsx)(tF.Ay, {
            innerClassName: tB.T,
            onChange: g,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tK.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: y,
            focused: f,
            onSubmit: I,
            onKeyDown: E,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var tz = i(119191),
    tX = i(671210);
function tW(t) {
    t && (0, tR.Ak)(D.cH, D.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var tq = i(554146),
    tQ = i(298990),
    tZ = i(429913),
    t0 = i(263577),
    t1 = i(826673),
    t2 = i(25578),
    t8 = i(308726),
    t9 = i(46282),
    t5 = i(818023),
    t7 = i(731854),
    t3 = i(709946),
    t4 = i(302933);
function t6(t) {
    let { game: e } = t,
        i = (0, tZ.h)(e.id);
    return null == i ? null : (0, $.jsx)(t0.V, { src: i.getIconURL(t5.iu.LARGE), size: 40 });
}
let et = 5 * R.A.Millis.SECOND,
    ee = 8 * R.A.Millis.SECOND,
    ei = 30 * R.A.Millis.SECOND,
    en = 30 * R.A.Millis.SECOND,
    el = Object.freeze({
        timestamp: 0,
        priority: w.In.NORMAL,
        duration: et,
        expirationExternallyManaged: !1,
        type: w.zb.GENERIC,
    }),
    ea = [],
    er = !1,
    es = [],
    eo = {};
function eu(t, e, i) {
    (null == eo[t] && (eo[t] = {}), (eo[t][e] = i));
}
let ec = 30 * R.A.Millis.MINUTE,
    ed = 2 * R.A.Millis.MINUTE;
function eA() {
    if (er && null == ea.find((t) => t.status === B.yFH.FOCUSED))
        for (let t of ((er = !1), (ea = [...ea, ...es]), (es = []), ea.length > 40 && (ea.length = 40), ea))
            t.timer.start();
}
function ef() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    ea.filter((t) => t.type === w.zb.TEXT && t.status === B.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - ei) && ey(e.id, B.yFH.DISMISSED);
        });
}
function ep() {
    let t = new Set();
    ea.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? ey(e.id, B.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function ey(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.yFH.DISMISSED;
    if (null == t) return !1;
    let i = ea.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = ea[i];
    if ((n.timer.stop(), (ea = [...ea]), e === B.yFH.FOCUSED)) {
        let [t] = ea.splice(i, 1);
        ((t = { ...t, status: e }), ea.unshift(t), (er = !0));
        return;
    }
    (e === B.yFH.DISMISSED ? ea.splice(i, 1) : (ea[i] = { ...n, status: e }), eA());
}
function em(t) {
    let e = ea.find((e) => e.type === w.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eg(t, e) {
    let i = { ...el, timestamp: Date.now(), ...e },
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
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : et));
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
        s = er ? es : [...ea],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        er || t.timer.stop();
    }
    return (er || ((ea = s), r.timer.start()), n);
}
function eE() {
    if (j.A.isNotificationDisabled(Y.KS.NowPlayingNotification)) return !1;
    let t = _.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in eo) t.push(...Object.keys(eo[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        ((n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!h.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = _.A.getUserGame(t);
                    if (null == e) return null;
                    let i = _.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== B.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < ed
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, M.NI)("nowPlayingNotification"),
                    c = j.A.isNotificationDisabledBySetting(U.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = T.Ay.getVoiceChannelId(),
                    f = L.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != f && d === f) return !1;
                let p = (0, K.qv)();
                if (null == p) return !1;
                let y = p.id !== a;
                return (
                    (!y || (!!s && !c)) &&
                    (!!(x.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !y) &&
                    (null == (n = eo[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ec
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (j.A.isNotificationDisabled(Y.KS.NowPlayingNotification)) return null;
                                  let n = b.default.getUser(t);
                                  if (null == n) return null;
                                  let l = T.Ay.getCurrentlySelectedChannelId(),
                                      a = E.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = A.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, tm.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let f = (0, $.jsxs)("div", {
                                          className: tN.Ql,
                                          children: [
                                              (0, $.jsx)("div", {
                                                  className: tN.bf,
                                                  children: (0, $.jsx)(tp.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tA._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, $.jsx)("div", {
                                                  className: tN.rf,
                                                  children: (0, $.jsx)(tf.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tN.G3,
                                                      children: H.intl.format(H.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, $.jsx)(ty.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: ty.M.XSMALL,
                                                                        className: tN.Gt,
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
                                                      await (0, tI.D$)({
                                                          target: {
                                                              kind: tI.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tg.B9.NOTIFICATION_CLICK,
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
                              (eu(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eg(l, { type: w.zb.GENERIC, priority: w.In.NORMAL })),
                          !0)
                        : (eu(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = P.A.isOverlayV3EnabledForPID(P.A.getTargetPID()) || null != P.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = S.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, K.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in eo) {
                let i = eo[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function eI(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = em(e);
    if (!Object.keys(i).includes(g.default.getId())) return ey(n);
    if (null != n) return !1;
    let l = E.A.getChannel(e);
    if (null == l || !l.isRingable() || v.A.getStatus() === B.clD.DND || y.NO.getSetting()) return !1;
    let a = ea.find((t) => t.type === w.zb.TEXT && t.channelId === e && t.messageType === B.lAJ.CALL);
    (null != a && ey(a.id),
        eg(
            (function (t) {
                let e = (0, tc.m1)(t, b.default, h.A),
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
                            o.A.track(B.HAw.VOICE_CHANNEL_SELECTED, {
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
class eN extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            u.A,
            m.A,
            g.default,
            c.A,
            E.A,
            d.Ay,
            x.A,
            I.A,
            N.A,
            _.A,
            V.default,
            j.A,
            P.A,
            S.A,
            C.A,
            h.A,
            A.Ay,
            T.Ay,
            v.A,
            O.A,
            b.default,
            L.A,
        ),
            this.syncWith([_.A], eE));
    }
    getNotifications() {
        return ea;
    }
    hasNotificationForChannel(t) {
        return ea.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...ea].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return ea.filter((i) => i.channelId === t && i.type === e);
    }
}
let e_ = new eN(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        ey(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        ef(0);
        let n = P.A.getFocusedPID() ?? k.UNSET_PID;
        if (V.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (j.A.isNotificationDisabled(Y.KS.WelcomeNudge)) return null;
            t2.Ay.supports(t7.O5.VIDEO) ||
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
                                    (0, tQ.qf)(e, !1, B.BRT.POPOUT));
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
                                    (0, t9.H)({
                                        pid: P.A.getTargetPID(),
                                        analyticsLocation: B.ThZ.OVERLAY_NUDGE,
                                        allowOneClickGoLive: !0,
                                        onBeforeShowModal: i,
                                        onOneClickGoLive: n,
                                        appContext: B.BRT.POPOUT,
                                    }));
                            }));
                        break;
                    case Y.Jr.CONTENT_INVENTORY:
                        ((a.onNotificationShow = () => {
                            o.A.track(B.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, $.jsx)(t8.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: t4.kL,
                                })));
                }
            let r = (0, t1.k8)(tq.M.OVERLAY_OOP_WELCOME_NUX),
                s = H.intl.string(H.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, $.jsx)(t6, { game: t })
                        : (0, $.jsx)("img", { src: i(513653), className: t3.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, tz.sI)((0, F.Jn)(), H.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, t1.Dr)(tq.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        o.A.setInputLocked(!1, P.A.getTargetPID()),
                        r || (0, t1.Dr)(tq.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, t1.Dr)(tq.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, K.qv)(), e);
        null != l && eg(l, { priority: w.In.URGENT, type: w.zb.NUDGE, duration: ee });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of ea) t.status === B.yFH.FOCUSED && ey(t.id, B.yFH.ACTIVE);
            return !0;
        }
        for (let t of (ef(), ea))
            t.type === w.zb.NUDGE
                ? ey(t.id, B.yFH.DISMISSED)
                : t.status !== B.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (ea.length > 0)
            return ey(
                ea.filter((t) => t.type === w.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
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
                if ((l()(null != e.activity, "received null message activity"), i.id === g.default.getId())) return !1;
                let d = (0, K.qv)();
                if (null == d || null == d.id) return !1;
                let A = u.A.getApplication(d.id),
                    f = [d.id];
                (null != d.altId && f.push(d.altId),
                    A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id)));
                let y = e.activity.party_id;
                switch (e.activity.type) {
                    case B.xL.JOIN:
                        ((n = (t) => S.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case B.xL.JOIN_REQUEST:
                        ((n = (t) => v.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y));
                        break;
                    case B.xL.STREAM_REQUEST:
                        ((n = (t) => v.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e));
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
                                    (G.Ay.join({
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
                                    (t_.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: B.xL.JOIN,
                                        activity: n,
                                        location: (0, tC.y)() ? B.ThZ.LOCKED_OVERLAY : B.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tS.ack)(
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
                        c = (function (t, e, i, n) {
                            if (
                                j.A.isNotificationDisabled(Y.KS.RequestToStream) ||
                                null != m.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let l = e.username,
                                a = H.intl.format(tb.default.jTbTAF, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, F.Y9)(Y.KS.RequestToStream, {
                                    notif_type: Y.KS.RequestToStream,
                                    notif_user_id: e.id,
                                    activity_type: B.xL.STREAM_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: H.intl.string(tb.default.UGbmBp),
                                cancelText: H.intl.string(H.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (t, e) => {
                                    let i = tv.A.getState().preset;
                                    if (i === tO.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, th.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        i = t ? tO.jQ.PRESET_AUTO : tO.jQ.PRESET_VIDEO;
                                    }
                                    ((0, tT.A)(P.A.getTargetPID(), { preset: i }),
                                        u("request-to-stream"),
                                        o.A.updateNotificationStatus(e));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tS.ack)(
                                        t.id,
                                        {
                                            section: B.JJy.OVERLAY,
                                            object: B.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
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
                }
                return (
                    null != c &&
                    (eg(c, {
                        priority: w.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: en,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    ep(),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (j.A.isNotificationDisabled(Y.KS.TextChat) || O.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(D.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, M.NI)("textChatNotification");
                if (j.A.isNotificationDisabled(Y.KS.TextChat)) return (tW(!0), null);
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
                            ? (0, tx.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, $.jsx)(tL.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tV.$)())
                            ? null
                            : (0, tz.sI)((0, F.Jn)(), l ? tX.default.VMcw8s : H.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tV.$)()
                            ? null
                            : i && !a
                              ? (0, $.jsx)(t$, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (tW(n), u());
                    },
                    onNotificationClick: (i, n) => {
                        let a = P.A.getTargetPID();
                        if (
                            ((0, tS.ack)(
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
                            ((0, tI.D$)({
                                target: {
                                    kind: tI.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tg.B9.NOTIFICATION_CLICK,
                                widgetType: B.uss.TEXT_CHAT_V3,
                            }),
                                tE.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tk._.dispatchToLastSubscribed(B.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, B.yFH.DISMISSED));
                            return;
                        }
                        tE.A.isInputLocked(a) && !(0, tV.$)()
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tD.pX)(B.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tU.isPlatformEmbedded && tM.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, I.A.getMessage(e, i.id) ?? (0, f.rh)(i), a, r);
        if (null == s) return !1;
        (eg(s, { type: w.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), ef());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = ea.length),
            (i = (ea = ea.filter((t) => t.type !== w.zb.TEXT || t.channelId !== n)).length !== e) && eA(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eI,
    CALL_UPDATE: eI,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        ey(em(e));
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
            null != e && void eg(e, { priority: w.In.URGENT, type: w.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eg(tr(H.intl.string(H.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tn() &&
                    eg(
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
                                        return `Game event: ${t.title ?? t.eventType}`;
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
            eg(
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
            (eg(tr(H.intl.string(H.t["1ZbZuh"]))),
                tn() &&
                    null != t.errorMessage &&
                    eg(
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
            eg(
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
            eg(
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
            (eg(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * R.A.Millis.SECOND }), ep());
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
        null != e && eg(e);
    },
});
