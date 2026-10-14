(i.r(e), i.d(e, { default: () => eC }), i(321073), i(667532));
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(17928),
    s = i(73153),
    o = i(684013),
    u = i(587895),
    c = i(198052),
    d = i(274372),
    A = i(952818),
    f = i(320095),
    y = i(176154),
    p = i(885386),
    m = i(616356),
    g = i(280450),
    E = i(734057),
    I = i(232835),
    _ = i(803224),
    N = i(783592),
    S = i(290863),
    C = i(763827),
    h = i(994500),
    T = i(309010),
    v = i(461213),
    O = i(351906),
    b = i(287809),
    x = i(977997),
    L = i(90165),
    D = i(592329),
    R = i(927813),
    k = i(93465),
    U = i(589051),
    M = i(296027),
    V = i(592598),
    j = i(233741),
    P = i(897720),
    w = i(243612),
    K = i(780907),
    G = i(581730),
    F = i(672396),
    Y = i(660183),
    H = i(486020),
    J = i(652215),
    B = i(477900),
    $ = i(582128),
    z = i(176781),
    X = i(974293),
    W = i(458977),
    q = i(532624),
    Q = i(350535),
    Z = i(696016);
function tt(t) {
    let { trackView: e, trackClick: i } = (0, G.Y9)(t, { notif_type: t });
    return {
        icon: (0, B.jsx)(z.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => e(),
        onDismissClick: () => i("dismiss"),
    };
}
function te(t, e) {
    return `${t} ${e ? "\u2713" : "\u2717"}`;
}
function ti() {
    return d.Ay.getSettings().debugTooltipsEnabled;
}
var tn = i(572164),
    tl = i(22802);
function ta(t) {
    let { trackView: e, trackClick: i } = (0, G.Y9)(F.KS.ClipsNotification, { notif_type: F.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, B.jsx)(z.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var tr = i(387755),
    ts = i(730852),
    to = i(571694),
    tu = i(47167),
    tc = i(621436),
    td = i(870373),
    tA = i(778712),
    tf = i(834730),
    ty = i(966327),
    tp = i(769015),
    tm = i(562153),
    tg = i(41984),
    tE = i(222506),
    tI = i(145567),
    t_ = i(34773),
    tN = i(308368),
    tS = i(334738),
    tC = i(481484),
    th = i(258585),
    tT = i(560595),
    tv = i(486350),
    tO = i(609145),
    tb = i(929921),
    tx = i(753070),
    tL = i(905322),
    tD = i(941971),
    tR = i(521981),
    tk = i(976860),
    tU = i(400492),
    tM = i(625494),
    tV = i(723702),
    tj = i(19575),
    tP = i(366032),
    tw = i(148494),
    tK = i(964486),
    tG = i(480870),
    tF = i(355622),
    tY = i(408018),
    tH = i(479909),
    tJ = i(451909),
    tB = i(135621),
    t$ = i(381941),
    tz = i(158602);
function tX(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tB.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tG.A)({ channel: n }),
        [u, c] = $.useState(() => (0, tY.N3)()),
        { textValue: d, richValue: A } = u,
        [f, y] = $.useState(!1),
        p = $.useCallback(() => y(!0), []),
        m = $.useCallback(() => y(!1), []);
    (0, tK.Ay)(() => {
        (0, tS.ack)(
            n.id,
            {
                section: J.JJy.OVERLAY,
                object: J.ZSU.ACK_INLINE_REPLY,
                objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            i,
        );
    });
    let g = $.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        E = $.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, J.yFH.ACTIVE);
            },
            [e],
        ),
        I = $.useCallback(
            () => (
                d.length > a ||
                    (tw.A.sendMessage(n.id, tJ.Ay.parse(n, d), !1, { location: t$.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, j.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, J.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, B.jsx)("div", {
        className: tz.k,
        children: (0, B.jsx)(tH.Ay, {
            innerClassName: tz.T,
            onChange: g,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tF.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: p,
            focused: f,
            onSubmit: I,
            onKeyDown: E,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var tW = i(119191),
    tq = i(671210);
function tQ(t) {
    t && (0, tU.Ak)(D.cH, D.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var tZ = i(554146),
    t0 = i(298990),
    t1 = i(429913),
    t2 = i(263577),
    t3 = i(826673),
    t8 = i(192820),
    t9 = i(308726),
    t5 = i(46282),
    t7 = i(818023),
    t4 = i(731854),
    t6 = i(709946),
    et = i(302933);
function ee(t) {
    let { game: e } = t,
        i = (0, t1.h)(e.id);
    return null == i ? null : (0, B.jsx)(t2.V, { src: i.getIconURL(t7.iu.LARGE), size: 40 });
}
let ei = 5 * R.A.Millis.SECOND,
    en = 8 * R.A.Millis.SECOND,
    el = 30 * R.A.Millis.SECOND,
    ea = 30 * R.A.Millis.SECOND,
    er = Object.freeze({
        timestamp: 0,
        priority: P.In.NORMAL,
        duration: ei,
        expirationExternallyManaged: !1,
        type: P.zb.GENERIC,
    }),
    es = [],
    eo = !1,
    eu = [],
    ec = {};
function ed(t, e, i) {
    (null == ec[t] && (ec[t] = {}), (ec[t][e] = i));
}
let eA = 30 * R.A.Millis.MINUTE,
    ef = 2 * R.A.Millis.MINUTE;
function ey() {
    if (eo && null == es.find((t) => t.status === J.yFH.FOCUSED))
        for (let t of ((eo = !1), (es = [...es, ...eu]), (eu = []), es.length > 40 && (es.length = 40), es))
            t.timer.start();
}
function ep() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    es.filter((t) => t.type === P.zb.TEXT && t.status === J.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - el) && eg(e.id, J.yFH.DISMISSED);
        });
}
function em() {
    let t = new Set();
    es.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eg(e.id, J.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eg(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.yFH.DISMISSED;
    if (null == t) return !1;
    let i = es.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = es[i];
    if ((n.timer.stop(), (es = [...es]), e === J.yFH.FOCUSED)) {
        let [t] = es.splice(i, 1);
        ((t = { ...t, status: e }), es.unshift(t), (eo = !0));
        return;
    }
    (e === J.yFH.DISMISSED ? es.splice(i, 1) : (es[i] = { ...n, status: e }), ey());
}
function eE(t) {
    let e = es.find((e) => e.type === P.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eI(t, e) {
    let i = { ...er, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: J.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? J.yFH.TIMED_OUT : J.yFH.DISMISSED;
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
function e_() {
    if (V.A.isNotificationDisabled(F.KS.NowPlayingNotification)) return !1;
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
                if (!h.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = N.A.getUserGame(t);
                    if (null == e) return null;
                    let i = N.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== J.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < ef
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, U.NI)("nowPlayingNotification"),
                    c = V.A.isNotificationDisabledBySetting(k.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = T.Ay.getVoiceChannelId(),
                    f = x.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != f && d === f) return !1;
                let y = (0, w.qv)();
                if (null == y) return !1;
                let p = y.id !== a;
                return (
                    (!p || (!!s && !c)) &&
                    (!!(L.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !p) &&
                    (null == (n = ec[a]?.[t]?.lastSentTimestamp) || Date.now() - n > eA
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (V.A.isNotificationDisabled(F.KS.NowPlayingNotification)) return null;
                                  let n = b.default.getUser(t);
                                  if (null == n) return null;
                                  let l = T.Ay.getCurrentlySelectedChannelId(),
                                      a = E.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = A.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, tm.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let f = (0, B.jsxs)("div", {
                                          className: t_.Ql,
                                          children: [
                                              (0, B.jsx)("div", {
                                                  className: t_.bf,
                                                  children: (0, B.jsx)(ty.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tA._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, B.jsx)("div", {
                                                  className: t_.rf,
                                                  children: (0, B.jsx)(tf.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: t_.G3,
                                                      children: Y.intl.format(Y.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, B.jsx)(tp.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tp.M.XSMALL,
                                                                        className: t_.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: y, trackClick: p } = (0, G.Y9)(F.KS.NowPlayingNotification, {
                                          notif_type: F.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: m } = (0, U.NI)("nowPlayingNotification");
                                  return {
                                      body: f,
                                      className: t_.dn,
                                      wrapperClassName: t_.P6,
                                      animationWrapperClassName: t_.VG,
                                      clickZoneClassName: t_.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          y();
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
                                                          widgetType: J.uss.NOTIFICATIONS,
                                                      });
                                                      let t = j.A.getTargetPID();
                                                      (tE.A.isInputLocked(t)
                                                          ? (p("unlock"), o.A.setInputLocked(!1, t))
                                                          : p("jump"),
                                                          o.A.updateNotificationStatus(e, J.yFH.DISMISSED));
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          p("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (ed(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eI(l, { type: P.zb.GENERIC, priority: P.In.NORMAL })),
                          !0)
                        : (ed(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i));
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = j.A.isOverlayV3EnabledForPID(j.A.getTargetPID()) || null != j.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = S.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, w.qv)();
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
        n = eE(e);
    if (!Object.keys(i).includes(g.default.getId())) return eg(n);
    if (null != n) return !1;
    let l = E.A.getChannel(e);
    if (null == l || !l.isRingable() || v.A.getStatus() === J.clD.DND || p.NO.getSetting()) return !1;
    let a = es.find((t) => t.type === P.zb.TEXT && t.channelId === e && t.messageType === J.lAJ.CALL);
    (null != a && eg(a.id),
        eI(
            (function (t) {
                let e = (0, tu.m1)(t, b.default, h.A),
                    i = Y.intl.string(Y.t.ssrVzG),
                    n = (0, to.Y)(t),
                    l = (0, tc.A)(t),
                    { trackView: a, trackClick: r } = (0, G.Y9)(F.KS.IncomingCall, {
                        notif_type: F.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: Y.intl.string(Y.t["0D/6Rz"]),
                    cancelText: Y.intl.string(Y.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), J.kvI.CALLABLE.has(t.type))) tr.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== J.rbe.GUILD_VOICE) return;
                            ts.default.selectVoiceChannel(t.id);
                        }
                        (o.A.updateNotificationStatus(i),
                            (0, td.g)(J.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            }));
                    },
                    onCancelClick: () => {
                        (r("decline"), tr.A.stopRinging(t.id));
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: P.In.HIGH, expirationExternallyManaged: !0, type: P.zb.INCOMING_CALL, channelId: l.id },
        ));
}
class eS extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        (this.waitFor(
            u.A,
            m.A,
            g.default,
            c.A,
            E.A,
            d.Ay,
            L.A,
            I.A,
            _.A,
            N.A,
            M.default,
            V.A,
            j.A,
            S.A,
            C.A,
            h.A,
            A.Ay,
            T.Ay,
            v.A,
            O.A,
            b.default,
            x.A,
        ),
            this.syncWith([N.A], e_));
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
let eC = new eS(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eg(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        ep(0);
        let n = j.A.getFocusedPID() ?? -1;
        if (M.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (V.A.isNotificationDisabled(F.KS.WelcomeNudge)) return null;
            t8.Ay.supports(t4.O5.VIDEO) ||
                (e = e.filter((t) => t.type !== F.Jr.GO_LIVE_VOICE && t.type !== F.Jr.GO_LIVE_NON_VOICE));
            let { trackView: n, trackClick: l } = (0, G.Y9)(F.KS.WelcomeNudge, {
                    notif_type: F.KS.WelcomeNudge,
                    secondary_notif_types: e.map((t) => F.Jr[t.type]),
                }),
                a = {};
            for (let i of e)
                switch (i.type) {
                    case F.Jr.WELCOME: {
                        let e = (0, w.tg)(t?.altId ?? t?.id);
                        null != e &&
                            ((a.cancelText = Y.intl.string(Y.t["6F9ivu"])),
                            (a.onCancelClick = (t, i) => {
                                (l("unlock"),
                                    o.A.updateNotificationStatus(i),
                                    o.A.setInputLocked(!1, j.A.getTargetPID()),
                                    (0, t0.qf)(e, !1, J.BRT.POPOUT));
                            }));
                        break;
                    }
                    case F.Jr.GO_LIVE_VOICE:
                    case F.Jr.GO_LIVE_NON_VOICE:
                        ((a.confirmText = Y.intl.string(Y.t.U76Ft2)),
                            (a.onConfirmClick = (t, e) => {
                                function i() {
                                    (l("go-live-modal"), o.A.setInputLocked(!1, j.A.getTargetPID()));
                                }
                                function n() {
                                    l("one-click-go-live");
                                }
                                (o.A.updateNotificationStatus(e),
                                    (0, t5.H)({
                                        pid: j.A.getTargetPID(),
                                        analyticsLocation: J.ThZ.OVERLAY_NUDGE,
                                        allowOneClickGoLive: !0,
                                        onBeforeShowModal: i,
                                        onOneClickGoLive: n,
                                        appContext: J.BRT.POPOUT,
                                    }));
                            }));
                        break;
                    case F.Jr.CONTENT_INVENTORY:
                        ((a.onNotificationShow = () => {
                            (0, td.g)(J.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, B.jsx)(t9.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: et.kL,
                                })));
                }
            let r = (0, t3.k8)(tZ.M.OVERLAY_OOP_WELCOME_NUX),
                s = Y.intl.string(Y.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, B.jsx)(ee, { game: t })
                        : (0, B.jsx)("img", { src: i(513653), className: t6.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, tW.sI)((0, G.Jn)(), Y.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    (n(), r || (0, t3.Dr)(tZ.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t));
                },
                onNotificationClick: (t, e) => {
                    (l("unlock"),
                        o.A.setInputLocked(!1, j.A.getTargetPID()),
                        r || (0, t3.Dr)(tZ.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e));
                },
                onDismissClick: (t, e) => {
                    (l("dismiss"), r || (0, t3.Dr)(tZ.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e));
                },
            };
        })((0, w.qv)(), e);
        null != l && eI(l, { priority: P.In.URGENT, type: P.zb.NUDGE, duration: en });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of es) t.status === J.yFH.FOCUSED && eg(t.id, J.yFH.ACTIVE);
            return !0;
        }
        for (let t of (ep(), es))
            t.type === P.zb.NUDGE
                ? eg(t.id, J.yFH.DISMISSED)
                : t.status !== J.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (es.length > 0)
            return eg(
                es.filter((t) => t.type === P.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                J.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = E.A.getChannel(e),
            a = b.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([J.xL.JOIN, J.xL.JOIN_REQUEST, J.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, y.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c;
                if ((l()(null != e.activity, "received null message activity"), i.id === g.default.getId())) return !1;
                let d = (0, w.qv)();
                if (null == d || null == d.id) return !1;
                let A = u.A.getApplication(d.id),
                    f = [d.id];
                (null != d.altId && f.push(d.altId),
                    A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id)));
                let p = e.activity.party_id;
                switch (e.activity.type) {
                    case J.xL.JOIN:
                        ((n = (t) => S.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === p));
                        break;
                    case J.xL.JOIN_REQUEST:
                        ((n = (t) => v.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === p));
                        break;
                    case J.xL.STREAM_REQUEST:
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
                    case J.xL.JOIN:
                        c = (function (t, e, i, n, l) {
                            if (V.A.isNotificationDisabled(F.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, y.TB)(t, e, i),
                                { trackView: d, trackClick: A } = (0, G.Y9)(F.KS.ActivityInvite, {
                                    notif_type: F.KS.ActivityInvite,
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
                                confirmText: Y.intl.string(Y.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    (K.Ay.join({
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
                    case J.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (V.A.isNotificationDisabled(F.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = Y.intl.format(Y.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, G.Y9)(F.KS.ActivityInvite, {
                                    notif_type: F.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: J.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: Y.intl.string(Y.t["fgP/wX"]),
                                cancelText: Y.intl.string(Y.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (e, i) => {
                                    (tN.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: J.xL.JOIN,
                                        activity: n,
                                        location: (0, tC.y)() ? J.ThZ.LOCKED_OVERLAY : J.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i));
                                },
                                onCancelClick: (e, i) => {
                                    ((0, tS.ack)(
                                        t.id,
                                        {
                                            section: J.JJy.OVERLAY,
                                            object: J.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                    case J.xL.STREAM_REQUEST:
                        c = (function (t, e, i, n, l) {
                            if (
                                V.A.isNotificationDisabled(F.KS.RequestToStream) ||
                                null != m.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let a = i.username,
                                r = Y.intl.format(tL.default.jTbTAF, { username: "", game: n.name }),
                                s = i.getAvatarURL(t.guild_id, 80),
                                { trackView: u, trackClick: c } = (0, G.Y9)(F.KS.RequestToStream, {
                                    notif_type: F.KS.RequestToStream,
                                    notif_user_id: i.id,
                                    activity_type: J.xL.STREAM_REQUEST,
                                    activity_name: l.name,
                                }),
                                d = { section: J.JJy.OVERLAY, objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC };
                            return {
                                icon: s,
                                title: a,
                                body: r,
                                confirmText: Y.intl.string(tL.default.UGbmBp),
                                cancelText: Y.intl.string(Y.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    u();
                                },
                                onConfirmClick: (i, n) => {
                                    let l = tb.A.getState().preset;
                                    if (l === tx.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, th.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        l = t ? tx.jQ.PRESET_AUTO : tx.jQ.PRESET_VIDEO;
                                    }
                                    ((0, tT.A)(j.A.getTargetPID(), { preset: l }),
                                        (0, tO.A)(e, t.id, { ...d, object: J.ZSU.ACK_ACCEPT_REQUEST_TO_STREAM }),
                                        c("request-to-stream"),
                                        o.A.updateNotificationStatus(n));
                                },
                                onCancelClick: (i, n) => {
                                    ((0, tO.A)(e, t.id, { ...d, object: J.ZSU.ACK_DECLINE_REQUEST_TO_STREAM }),
                                        (0, tv.q)(e),
                                        o.A.updateNotificationStatus(n),
                                        c("decline"));
                                },
                                onDismissClick: () => {
                                    c("dismiss");
                                },
                            };
                        })(t, e.id, i, d, r);
                }
                return (
                    null != c &&
                    (eI(c, {
                        priority: P.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: ea,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    em(),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (V.A.isNotificationDisabled(F.KS.TextChat) || O.A.disableNotifications || !(0, y.lx)(i, e)) return !1;
        let r = !_.A.isSoundDisabled(D.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, U.NI)("textChatNotification");
                if (V.A.isNotificationDisabled(F.KS.TextChat)) return (tQ(!0), null);
                let { icon: a, title: r, body: s } = (0, y.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, G.Y9)(F.KS.TextChat, {
                        notif_type: F.KS.TextChat,
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
                            ? (0, tR.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, B.jsx)(tD.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tP.$)())
                            ? null
                            : (0, tW.sI)((0, G.Jn)(), l ? tq.default.VMcw8s : Y.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tP.$)()
                            ? null
                            : i && !a
                              ? (0, B.jsx)(tX, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        (tQ(n), u());
                    },
                    onNotificationClick: (i, n) => {
                        let a = j.A.getTargetPID();
                        if (
                            ((0, tS.ack)(
                                t.id,
                                {
                                    section: J.JJy.OVERLAY,
                                    object: J.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: J.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                                widgetType: J.uss.TEXT_CHAT_V3,
                            }),
                                tE.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tM._.dispatchToLastSubscribed(J.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, J.yFH.DISMISSED));
                            return;
                        }
                        tE.A.isInputLocked(a) && !(0, tP.$)()
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tk.pX)(J.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tV.isPlatformEmbedded && tj.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, I.A.getMessage(e, i.id) ?? (0, f.rh)(i), a, r);
        if (null == s) return !1;
        (eI(s, { type: P.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), ep());
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = es.length),
            (i = (es = es.filter((t) => t.type !== P.zb.TEXT || t.channelId !== n)).length !== e) && ey(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: eN,
    CALL_UPDATE: eN,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eg(eE(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, w.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === J.xL.JOIN &&
                (e = (function (t, e) {
                    if (V.A.isNotificationDisabled(F.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = Y.intl.format(Y.t["Yk+uYG"], { username: "" }),
                        l = (0, H.ku)(t),
                        a = Y.intl.string(Y.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, G.Y9)(F.KS.ActivityUserJoin, {
                            notif_type: F.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: J.xL.JOIN,
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
            null != e && void eI(e, { priority: P.In.URGENT, type: P.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eI(ta(Y.intl.string(Y.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    ti() &&
                    eI(
                        ((e = t.signal),
                        {
                            ...tt(F.KS.ClipsDebugAutoSignal),
                            title: `Auto-clip: ${(function (t) {
                                switch (t.type) {
                                    case Z.Gy.MANUAL:
                                        return "Manual";
                                    case Z.Gy.SHOUTING:
                                        return `Shouting detected (${t.confidence.toFixed(2)})`;
                                    case Z.Gy.LAUGHTER:
                                        return `Laughter detected (${t.confidence.toFixed(2)})`;
                                    case Z.Gy.GAME_EVENT:
                                        return `Game event: ${t.eventName ?? t.eventType}`;
                                    case Z.Gy.DISTRIBUTED:
                                        return "Distributed clip from another user";
                                    case Z.Gy.SPEAKING:
                                        return "Speaking detected";
                                    case Z.Gy.SOUNDBOARD:
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
        if (ti()) {
            var e;
            let i;
            eI(
                ((i = (e = t.clip).type === Z.nQ.SCREENSHOT ? "screenshot" : "clip"),
                {
                    ...tt(F.KS.ClipsDebugSaveSuccess),
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
            (eI(ta(Y.intl.string(Y.t["1ZbZuh"]))),
                ti() &&
                    null != t.errorMessage &&
                    eI(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...tt(F.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    ));
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && ti()) {
            var e, i;
            let n;
            eI(
                ((e = t.reason),
                (i = t.sourceChecks),
                (n = (() => {
                    switch (e) {
                        case Z.RC.MAX_CONCURRENT_SAVES:
                            return `Too many clips saving at once (${Z.VP} in flight). Wait for one to finish.`;
                        case Z.RC.NO_ELIGIBLE_SOURCE:
                            let t, n;
                            return null != i
                                ? ((t = [te("clips enabled", i.clipsEnabled), te("streaming", i.hasActiveStream)].join(
                                      ", ",
                                  )),
                                  (n = [
                                      te("visible game window", i.hasVisibleGameWindow),
                                      te("clips source", i.hasClipsSource),
                                  ].join(",\n")),
                                  `No capture source. Need any branch satisfied:
\u{2022} GoLive \u{2014} ${t}
\u{2022} Decoupled \u{2014} ${n}`)
                                : "No capture source available. Need an active stream, a decoupled game capture, or a voice channel.";
                        case Z.RC.MODULE_NOT_LOADED:
                            return "discord_clips is still downloading. Try again once the module finishes installing.";
                        case Z.RC.BUFFER_WARMING_UP:
                            return "No encoded video frames yet \u2014 the capture pipeline just started or reset. Try again in a couple of seconds.";
                        case Z.RC.BRIDGE_SHUTDOWN:
                            return "Clips bridge shut down before the save completed (process exited or v3 was disabled). Try again once clips is back up.";
                        case Z.RC.RECORDING_NOT_READY:
                            return "Clips recorder is not recording yet (still cold-starting, or it idle-shut-down). Try again in a couple of seconds.";
                    }
                })()),
                { ...tt(F.KS.ClipsDebugSaveNoOp), title: "Clip hotkey ignored", body: n, maxBodyLines: 8 }),
            );
        }
    },
    CLIPS_SAVE_CLIP_TIMEOUT: function (t) {
        if ("manual" === t.clipMethod && ti()) {
            var e;
            eI(
                ((e = t.elapsedMs),
                {
                    ...tt(F.KS.ClipsDebugSaveTimeout),
                    title: "Clip save stalled",
                    body: `No success or failure after ${Math.round(e / 1e3)}s. The native saveClip callback likely never fired \u{2014} check the media engine / voice engine logs.`,
                    maxBodyLines: 4,
                }),
            );
        }
    },
    CLIPS_INIT: function (t) {
        var e;
        if (!ti()) return;
        let i =
            0 ===
            (e = (function () {
                let t = [],
                    e = d.Ay.getSettings(),
                    i = (0, X.$i)("getEnabledClipsFeatures"),
                    { enableDistributedClips: n } = W.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = q.Ay.getKeybindForAction(J.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${Q.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return (n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t);
            })()).length
                ? null
                : {
                      ...tt(F.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (eI(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * R.A.Millis.SECOND }), em());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (V.A.isNotificationDisabled(F.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, G.Y9)(F.KS.ClipsReminderNotification, {
                    notif_type: F.KS.ClipsReminderNotification,
                }),
                i = q.Ay.getKeybindForAction(J.hCu.SAVE_CLIP),
                n = (0, tn.T)();
            if (null == i || !n) return null;
            let l = Q.dI(i.shortcut, !0);
            return {
                title: Y.intl.format(Y.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, B.jsx)(tl.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, B.jsx)(z.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eI(e);
    },
});
