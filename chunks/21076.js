i.r(e), i.d(e, { default: () => ef }), i(321073), i(667532);
var n = i(284009),
    l = i.n(n),
    a = i(132500),
    r = i(17928),
    s = i(228366),
    o = i(684013),
    u = i(587895),
    c = i(313961),
    d = i(274372),
    A = i(328153),
    f = i(320095),
    y = i(938005),
    p = i(159426),
    m = i(253932),
    I = i(164891),
    g = i(616356),
    E = i(495544),
    N = i(734057),
    _ = i(232835),
    T = i(803224),
    S = i(783592),
    C = i(290863),
    h = i(763827),
    v = i(994500),
    O = i(309010),
    x = i(461213),
    L = i(351906),
    D = i(287809),
    b = i(977997),
    R = i(90165),
    k = i(530789),
    U = i(927813),
    M = i(9302),
    V = i(93465),
    j = i(589051),
    P = i(833551),
    w = i(592598),
    K = i(489277),
    Y = i(897720),
    G = i(243612),
    F = i(780907),
    H = i(581730),
    J = i(672396),
    z = i(985018),
    B = i(486020),
    X = i(652215),
    W = i(627968),
    q = i(64700),
    Q = i(176781),
    Z = i(572164),
    $ = i(532624),
    tt = i(350535),
    te = i(22802);
function ti(t) {
    let { trackView: e, trackClick: i } = (0, H.Y9)(J.KS.ClipsNotification, { notif_type: J.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, W.jsx)(Q.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var tn = i(387755),
    tl = i(956793),
    ta = i(571694),
    tr = i(47167),
    ts = i(621436),
    to = i(778712),
    tu = i(834730),
    tc = i(966327),
    td = i(137177),
    tA = i(562153),
    tf = i(41984),
    ty = i(222506),
    tp = i(145567),
    tm = i(774610),
    tI = i(308368),
    tg = i(334738),
    tE = i(481484),
    tN = i(258585),
    t_ = i(560595),
    tT = i(929921),
    tS = i(753070),
    tC = i(783198),
    th = i(941971),
    tv = i(465364),
    tO = i(976860),
    tx = i(400492),
    tL = i(625494),
    tD = i(723702),
    tb = i(19575),
    tR = i(720149),
    tk = i(964486),
    tU = i(480870),
    tM = i(355622),
    tV = i(408018),
    tj = i(201349),
    tP = i(451909),
    tw = i(135621),
    tK = i(381941),
    tY = i(267475);
function tG(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tw.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tU.A)({ channel: n }),
        [u, c] = q.useState(() => (0, tV.N3)()),
        { textValue: d, richValue: A } = u,
        [f, y] = q.useState(!1),
        p = q.useCallback(() => y(!0), []),
        m = q.useCallback(() => y(!1), []);
    (0, tk.Ay)(() => {
        (0, tg.ack)(
            n.id,
            {
                section: X.JJy.OVERLAY,
                object: X.ZSU.ACK_INLINE_REPLY,
                objectType: X.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            i,
        );
    });
    let I = q.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        g = q.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, X.yFH.ACTIVE);
            },
            [e],
        ),
        E = q.useCallback(
            () => (
                d.length > a ||
                    (tR.A.sendMessage(n.id, tP.Ay.parse(n, d), !1, { location: tK.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, K.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, X.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, W.jsx)("div", {
        className: tY.k,
        children: (0, W.jsx)(tj.Ay, {
            innerClassName: tY.T,
            onChange: I,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tM.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: m,
            onFocus: p,
            focused: f,
            onSubmit: E,
            onKeyDown: g,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var tF = i(119191),
    tH = i(499214);
let tJ = (t) => {
    t && (0, tx.Ak)(k.cH, k.pD);
};
var tz = i(554146),
    tB = i(298990),
    tX = i(429913),
    tW = i(263577),
    tq = i(826673),
    tQ = i(308726),
    tZ = i(823901),
    t$ = i(360469),
    t0 = i(70617),
    t1 = i(881732);
function t2(t) {
    let { game: e } = t,
        i = (0, tX.h)(e.id);
    return null == i ? null : (0, W.jsx)(tW.V, { src: i.getIconURL(t$.iu.LARGE), size: 40 });
}
let t9 = 5 * U.A.Millis.SECOND,
    t5 = 8 * U.A.Millis.SECOND,
    t3 = 30 * U.A.Millis.SECOND,
    t8 = 30 * U.A.Millis.SECOND,
    t7 = Object.freeze({
        timestamp: 0,
        priority: Y.In.NORMAL,
        duration: t9,
        expirationExternallyManaged: !1,
        type: Y.zb.GENERIC,
    }),
    t6 = [],
    t4 = !1,
    et = [],
    ee = {};
function ei(t, e, i) {
    null == ee[t] && (ee[t] = {}), (ee[t][e] = i);
}
let en = 30 * U.A.Millis.MINUTE,
    el = 2 * U.A.Millis.MINUTE;
function ea() {
    if (t4 && null == t6.find((t) => t.status === X.yFH.FOCUSED))
        for (let t of ((t4 = !1), (t6 = [...t6, ...et]), (et = []), t6.length > 40 && (t6.length = 40), t6))
            t.timer.start();
}
function er() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    t6.filter((t) => t.type === Y.zb.TEXT && t.status === X.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - t3) && es(e.id, X.yFH.DISMISSED);
        });
}
function es(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X.yFH.DISMISSED;
    if (null == t) return !1;
    let i = t6.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = t6[i];
    if ((n.timer.stop(), (t6 = [...t6]), e === X.yFH.FOCUSED)) {
        let [t] = t6.splice(i, 1);
        (t = { ...t, status: e }), t6.unshift(t), (t4 = !0);
        return;
    }
    e === X.yFH.DISMISSED ? t6.splice(i, 1) : (t6[i] = { ...n, status: e }), ea();
}
function eo(t) {
    let e = t6.find((e) => e.type === Y.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eu(t, e) {
    let i = { ...t7, timestamp: Date.now(), ...e },
        n = (0, a.A)(),
        l = !1,
        r = {
            id: n,
            status: X.yFH.ACTIVE,
            timer: (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    n = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            a = l ? X.yFH.TIMED_OUT : X.yFH.DISMISSED;
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : t9));
                    },
                    stop() {
                        clearTimeout(n), (n = -1);
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
        s = t4 ? et : [...t6],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        t4 || t.timer.stop();
    }
    return t4 || ((t6 = s), r.timer.start()), n;
}
function ec() {
    if (w.A.isNotificationDisabled(J.KS.NowPlayingNotification)) return !1;
    let t = S.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in ee) t.push(...Object.keys(ee[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        (n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!v.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = S.A.getUserGame(t);
                    if (null == e) return null;
                    let i = S.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== X.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < el
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, j.NI)("nowPlayingNotification"),
                    c = w.A.isNotificationDisabledBySetting(V.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = O.A.getVoiceChannelId(),
                    f = b.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != f && d === f) return !1;
                let y = (0, G.qv)();
                if (null == y) return !1;
                let p = y.id !== a;
                return (
                    (!p || (!!s && !c)) &&
                    (!!(R.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !p) &&
                    (null == (n = ee[a]?.[t]?.lastSentTimestamp) || Date.now() - n > en
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (w.A.isNotificationDisabled(J.KS.NowPlayingNotification)) return null;
                                  let n = D.default.getUser(t);
                                  if (null == n) return null;
                                  let l = O.A.getCurrentlySelectedChannelId(),
                                      a = N.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = A.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, tA.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let f = (0, W.jsxs)("div", {
                                          className: tm.Ql,
                                          children: [
                                              (0, W.jsx)("div", {
                                                  className: tm.bf,
                                                  children: (0, W.jsx)(tc.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: to._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, W.jsx)("div", {
                                                  className: tm.rf,
                                                  children: (0, W.jsx)(tu.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tm.G3,
                                                      children: z.intl.format(z.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, W.jsx)(td.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: td.M.XSMALL,
                                                                        className: tm.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: y, trackClick: p } = (0, H.Y9)(J.KS.NowPlayingNotification, {
                                          notif_type: J.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: m } = (0, j.NI)("nowPlayingNotification");
                                  return {
                                      body: f,
                                      className: tm.dn,
                                      wrapperClassName: tm.P6,
                                      animationWrapperClassName: tm.VG,
                                      clickZoneClassName: tm.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !m,
                                      onNotificationShow: () => {
                                          y();
                                      },
                                      onNotificationClick: (t, e) => {
                                          m &&
                                              (async () => {
                                                  try {
                                                      await (0, tp.D$)({
                                                          target: {
                                                              kind: tp.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tf.B9.NOTIFICATION_CLICK,
                                                          widgetType: X.uss.NOTIFICATIONS,
                                                      });
                                                      let t = K.A.getTargetPID();
                                                      ty.A.isInputLocked(t)
                                                          ? (p("unlock"), o.A.setInputLocked(!1, t))
                                                          : p("jump"),
                                                          o.A.updateNotificationStatus(e, X.yFH.DISMISSED);
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          p("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (ei(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eu(l, { type: Y.zb.GENERIC, priority: Y.In.NORMAL })),
                          !0)
                        : (ei(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i);
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = K.A.isOverlayV3EnabledForPID(K.A.getTargetPID()) || null != K.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = C.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, G.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in ee) {
                let i = ee[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function ed(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = eo(e);
    if (!Object.keys(i).includes(E.default.getId())) return es(n);
    if (null != n) return !1;
    let l = N.A.getChannel(e);
    if (
        null == l ||
        !l.isRingable() ||
        ("GUILD_RING_START" === t.type &&
            !I.A.getCurrentConfig({ guildId: t.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        x.A.getStatus() === X.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let a = t6.find((t) => t.type === Y.zb.TEXT && t.channelId === e && t.messageType === X.lAJ.CALL);
    null != a && es(a.id),
        eu(
            (function (t) {
                let e = (0, tr.m1)(t, D.default, v.A),
                    i = z.intl.string(z.t.ssrVzG),
                    n = (0, ta.Y)(t),
                    l = (0, ts.A)(t),
                    { trackView: a, trackClick: r } = (0, H.Y9)(J.KS.IncomingCall, {
                        notif_type: J.KS.IncomingCall,
                        notif_user_id: l,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    });
                return {
                    icon: n,
                    title: e,
                    body: i,
                    confirmText: z.intl.string(z.t["0D/6Rz"]),
                    cancelText: z.intl.string(z.t.BVN4pL),
                    onNotificationShow: () => {
                        a();
                    },
                    onConfirmClick: (e, i) => {
                        if ((r("join"), X.kvI.CALLABLE.has(t.type))) tn.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== X.rbe.GUILD_VOICE) return;
                            tl.default.selectVoiceChannel(t.id);
                        }
                        o.A.updateNotificationStatus(i),
                            o.A.track(X.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            });
                    },
                    onCancelClick: () => {
                        r("decline"), tn.A.stopRinging(t.id);
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: Y.In.HIGH, expirationExternallyManaged: !0, type: Y.zb.INCOMING_CALL, channelId: l.id },
        );
}
class eA extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            u.A,
            g.A,
            E.default,
            c.A,
            N.A,
            d.A,
            R.A,
            _.A,
            T.A,
            S.A,
            P.default,
            w.A,
            K.A,
            C.A,
            h.A,
            v.A,
            A.Ay,
            O.A,
            x.A,
            L.A,
            D.default,
            b.A,
        ),
            this.syncWith([S.A], ec);
    }
    getNotifications() {
        return t6;
    }
    hasNotificationForChannel(t) {
        return t6.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...t6].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return t6.filter((i) => i.channelId === t && i.type === e);
    }
}
let ef = new eA(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        es(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        er(0);
        let n = K.A.getFocusedPID() ?? M.UNSET_PID;
        if (P.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (w.A.isNotificationDisabled(J.KS.WelcomeNudge)) return null;
            let { trackView: n, trackClick: l } = (0, H.Y9)(J.KS.WelcomeNudge, {
                    notif_type: J.KS.WelcomeNudge,
                    secondary_notif_types: e.map((t) => J.Jr[t.type]),
                }),
                a = {};
            for (let i of e)
                switch (i.type) {
                    case J.Jr.WELCOME: {
                        let e = (0, G.tg)(t?.altId ?? t?.id);
                        null != e &&
                            ((a.cancelText = z.intl.string(z.t["6F9ivu"])),
                            (a.onCancelClick = (t, i) => {
                                l("unlock"),
                                    o.A.updateNotificationStatus(i),
                                    o.A.setInputLocked(!1, K.A.getTargetPID()),
                                    (0, tB.qf)(e, !1, X.BRT.POPOUT);
                            }));
                        break;
                    }
                    case J.Jr.GO_LIVE_VOICE:
                    case J.Jr.GO_LIVE_NON_VOICE: {
                        let t = z.intl.string(z.t.U76Ft2),
                            e = (t) => {
                                let e = () => {
                                        l("go-live-modal"), o.A.setInputLocked(!1, K.A.getTargetPID());
                                    },
                                    i = () => {
                                        l("one-click-go-live");
                                    };
                                (0, tZ.H)({
                                    pid: K.A.getTargetPID(),
                                    analyticsLocation: X.ThZ.OVERLAY_NUDGE,
                                    allowOneClickGoLive: !0,
                                    onBeforeShowModal: e,
                                    onOneClickGoLive: i,
                                    appContext: X.BRT.POPOUT,
                                });
                            };
                        (a.confirmText = t),
                            (a.onConfirmClick = (t, i) => {
                                o.A.updateNotificationStatus(i), e(t);
                            });
                        break;
                    }
                    case J.Jr.CONTENT_INVENTORY:
                        (a.onNotificationShow = () => {
                            o.A.track(X.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, W.jsx)(tQ.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: t1.kL,
                                }));
                }
            let r = (0, tq.k8)(tz.M.OVERLAY_OOP_WELCOME_NUX),
                s = z.intl.string(z.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, W.jsx)(t2, { game: t })
                        : (0, W.jsx)("img", { src: i(513653), className: t0.Kk, alt: "" }),
                title: s,
                hint: () => (0, tF.sI)((0, H.Jn)(), z.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 }),
                ...a,
                onNotificationShow: (t) => {
                    n(), r || (0, tq.Dr)(tz.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t);
                },
                onNotificationClick: (t, e) => {
                    l("unlock"),
                        o.A.setInputLocked(!1, K.A.getTargetPID()),
                        r || (0, tq.Dr)(tz.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e);
                },
                onDismissClick: (t, e) => {
                    l("dismiss"), r || (0, tq.Dr)(tz.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e);
                },
            };
        })((0, G.qv)(), e);
        null != l && eu(l, { priority: Y.In.URGENT, type: Y.zb.NUDGE, duration: t5 });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of t6) t.status === X.yFH.FOCUSED && es(t.id, X.yFH.ACTIVE);
            return !0;
        }
        for (let t of (er(), t6))
            t.type === Y.zb.NUDGE
                ? es(t.id, X.yFH.DISMISSED)
                : t.status !== X.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (t6.length > 0)
            return es(
                t6.filter((t) => t.type === Y.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                X.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = N.A.getChannel(e),
            a = D.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([X.xL.JOIN, X.xL.JOIN_REQUEST, X.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, y.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c, d;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                let A = (0, G.qv)();
                if (null == A || null == A.id) return !1;
                let f = u.A.getApplication(A.id),
                    m = [A.id];
                null != A.altId && m.push(A.altId), f?.linkedGames != null && m.push(...f.linkedGames.map((t) => t.id));
                let I = e.activity.party_id;
                switch (e.activity.type) {
                    case X.xL.JOIN:
                        (n = (t) => C.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === I);
                        break;
                    case X.xL.JOIN_REQUEST:
                        (n = (t) => x.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === I);
                        break;
                    case X.xL.STREAM_REQUEST:
                        let { enableRequestToStreamOverlayNotification: N } = p.m.getCurrentConfig(
                            { guildId: t.guild_id, location: "showActivityNotification" },
                            { autoTrackExposure: !1 },
                        );
                        if (!N) return !1;
                        (n = (t) => x.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e);
                        break;
                    default:
                        return !1;
                }
                for (let t of m) {
                    if (null != (r = n(t)) && a(r, t)) {
                        s = t;
                        break;
                    }
                    r = void 0;
                }
                if (null == r || null == s) return !1;
                switch (e.activity.type) {
                    case X.xL.JOIN:
                        c = (function (t, e, i, n, l) {
                            if (w.A.isNotificationDisabled(J.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, y.TB)(t, e, i),
                                { trackView: d, trackClick: A } = (0, H.Y9)(J.KS.ActivityInvite, {
                                    notif_type: J.KS.ActivityInvite,
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
                                confirmText: z.intl.string(z.t.VJlc0S),
                                onConfirmClick: (n, a) => {
                                    F.Ay.join({
                                        userId: i.id,
                                        sessionId: r,
                                        applicationId: l,
                                        channelId: t.id,
                                        messageId: e.id,
                                    }),
                                        o.A.updateNotificationStatus(a),
                                        A("join");
                                },
                                onDismissClick: () => {
                                    A("dismiss");
                                },
                            };
                        })(t, e, i, r, s);
                        break;
                    case X.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (w.A.isNotificationDisabled(J.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = z.intl.format(z.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, H.Y9)(J.KS.ActivityInvite, {
                                    notif_type: J.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: X.xL.JOIN_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: z.intl.string(z.t["fgP/wX"]),
                                cancelText: z.intl.string(z.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (e, i) => {
                                    tI.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: X.xL.JOIN,
                                        activity: n,
                                        location: (0, tE.y)() ? X.ThZ.LOCKED_OVERLAY : X.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i);
                                },
                                onCancelClick: (e, i) => {
                                    (0, tg.ack)(
                                        t.id,
                                        {
                                            section: X.JJy.OVERLAY,
                                            object: X.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: X.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        o.A.updateNotificationStatus(i),
                                        u("decline");
                                },
                                onDismissClick: () => {
                                    u("dismiss");
                                },
                            };
                        })(t, i, A, r);
                        break;
                    case X.xL.STREAM_REQUEST:
                        c = (function (t, e, i, n) {
                            if (
                                w.A.isNotificationDisabled(J.KS.RequestToStream) ||
                                null != g.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let l = e.username,
                                a = z.intl.format(tC.default.jTbTAF, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, H.Y9)(J.KS.RequestToStream, {
                                    notif_type: J.KS.RequestToStream,
                                    notif_user_id: e.id,
                                    activity_type: X.xL.STREAM_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: z.intl.string(tC.default.UGbmBp),
                                cancelText: z.intl.string(z.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (t, e) => {
                                    let i = tT.A.getState().preset;
                                    if (i === tS.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, tN.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        i = t ? tS.jQ.PRESET_AUTO : tS.jQ.PRESET_VIDEO;
                                    }
                                    (0, t_.A)(K.A.getTargetPID(), { preset: i }),
                                        u("request-to-stream"),
                                        o.A.updateNotificationStatus(e);
                                },
                                onCancelClick: (e, i) => {
                                    (0, tg.ack)(
                                        t.id,
                                        {
                                            section: X.JJy.OVERLAY,
                                            object: X.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                                            objectType: X.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                        },
                                        !0,
                                        !0,
                                    ),
                                        o.A.updateNotificationStatus(i),
                                        u("decline");
                                },
                                onDismissClick: () => {
                                    u("dismiss");
                                },
                            };
                        })(t, i, A, r);
                }
                return (
                    null != c &&
                    (eu(c, {
                        priority: Y.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: t8,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    (d = new Set()),
                    t6
                        .filter((t) => null != t.uniqueKey)
                        .sort((t, e) => e.timestamp - t.timestamp)
                        .forEach((t) => {
                            null != t.uniqueKey &&
                                (d.has(t.uniqueKey) ? es(t.id, X.yFH.DISMISSED) : d.add(t.uniqueKey));
                        }),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (w.A.isNotificationDisabled(J.KS.TextChat) || L.A.disableNotifications || !(0, y.lx)(i, e)) return !1;
        let r = !T.A.isSoundDisabled(k.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, j.NI)("textChatNotification");
                if (w.A.isNotificationDisabled(J.KS.TextChat)) return tJ(!0), null;
                let { icon: a, title: r, body: s } = (0, y.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, H.Y9)(J.KS.TextChat, {
                        notif_type: J.KS.TextChat,
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
                            ? (0, tv.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, W.jsx)(th.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) => (t || !e ? null : (0, tF.sI)((0, H.Jn)(), l ? tH.default.VMcw8s : z.t.ykjOAJ)),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l
                            ? null
                            : i && !a
                              ? (0, W.jsx)(tG, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        tJ(n), u();
                    },
                    onNotificationClick: (i, n) => {
                        let a = K.A.getTargetPID();
                        if (
                            ((0, tg.ack)(
                                t.id,
                                {
                                    section: X.JJy.OVERLAY,
                                    object: X.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                                    objectType: X.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                                e.id,
                            ),
                            l)
                        ) {
                            (0, tp.D$)({
                                target: {
                                    kind: tp.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tf.B9.NOTIFICATION_CLICK,
                                widgetType: X.uss.TEXT_CHAT_V3,
                            }),
                                ty.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tL._.dispatchToLastSubscribed(X.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, X.yFH.DISMISSED);
                            return;
                        }
                        ty.A.isInputLocked(a)
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tO.pX)(X.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tD.isPlatformEmbedded && tb.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, _.A.getMessage(e, i.id) ?? (0, f.rh)(i), a, r);
        if (null == s) return !1;
        eu(s, { type: Y.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), er();
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = t6.length),
            (i = (t6 = t6.filter((t) => t.type !== Y.zb.TEXT || t.channelId !== n)).length !== e) && ea(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: ed,
    CALL_UPDATE: ed,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        es(eo(e));
    },
    GUILD_RING_START: ed,
    GUILD_RING_STOP: function (t) {
        let { channelId: e, guildId: i, ringing: n } = t;
        if (!I.A.getCurrentConfig({ guildId: i, location: "OverlayV3StopRinging" }).enabled) return !1;
        n.includes(E.default.getId()) && es(eo(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, G.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === X.xL.JOIN &&
                (e = (function (t, e) {
                    if (w.A.isNotificationDisabled(J.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = z.intl.format(z.t["Yk+uYG"], { username: "" }),
                        l = (0, B.ku)(t),
                        a = z.intl.string(z.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, H.Y9)(J.KS.ActivityUserJoin, {
                            notif_type: J.KS.ActivityUserJoin,
                            notif_user_id: t.id,
                            activity_type: X.xL.JOIN,
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
            null != e && void eu(e, { priority: Y.In.URGENT, type: Y.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        "manual" === t.clipMethod && eu(ti(z.intl.string(z.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eu(ti(z.intl.string(z.t["1ZbZuh"])));
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (w.A.isNotificationDisabled(J.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, H.Y9)(J.KS.ClipsReminderNotification, {
                    notif_type: J.KS.ClipsReminderNotification,
                }),
                i = $.Ay.getKeybindForAction(X.hCu.SAVE_CLIP),
                n = (0, Z.TD)();
            if (null == i || !n) return null;
            let l = tt.dI(i.shortcut, !0);
            return {
                title: z.intl.format(z.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, W.jsx)(te.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, W.jsx)(Q.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eu(e);
    },
});
