i.r(e), i.d(e, { default: () => eA }), i(321073), i(667532);
var n = i(284009),
    l = i.n(n),
    a = i(835245),
    r = i(17928),
    s = i(228366),
    o = i(684013),
    u = i(587895),
    c = i(313961),
    d = i(274372),
    A = i(952818),
    f = i(320095),
    y = i(938005),
    m = i(885386),
    p = i(164891),
    I = i(616356),
    E = i(495544),
    g = i(734057),
    _ = i(232835),
    N = i(803224),
    S = i(783592),
    T = i(290863),
    C = i(763827),
    h = i(994500),
    v = i(309010),
    O = i(461213),
    x = i(351906),
    L = i(287809),
    D = i(977997),
    b = i(90165),
    R = i(530789),
    k = i(927813),
    U = i(9302),
    V = i(93465),
    j = i(589051),
    M = i(296027),
    P = i(592598),
    w = i(489277),
    K = i(897720),
    Y = i(243612),
    F = i(780907),
    G = i(581730),
    H = i(672396),
    J = i(375708),
    z = i(486020),
    B = i(652215),
    X = i(627968),
    W = i(64700),
    q = i(176781),
    Q = i(572164),
    Z = i(532624),
    $ = i(350535),
    tt = i(22802);
function te(t) {
    let { trackView: e, trackClick: i } = (0, G.Y9)(H.KS.ClipsNotification, { notif_type: H.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, X.jsx)(q.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
var ti = i(387755),
    tn = i(730852),
    tl = i(571694),
    ta = i(47167),
    tr = i(621436),
    ts = i(778712),
    to = i(834730),
    tu = i(966327),
    tc = i(137177),
    td = i(562153),
    tA = i(41984),
    tf = i(222506),
    ty = i(145567),
    tm = i(774610),
    tp = i(308368),
    tI = i(334738),
    tE = i(481484),
    tg = i(258585),
    t_ = i(560595),
    tN = i(929921),
    tS = i(753070),
    tT = i(783198),
    tC = i(941971),
    th = i(465364),
    tv = i(976860),
    tO = i(400492),
    tx = i(625494),
    tL = i(723702),
    tD = i(19575),
    tb = i(720149),
    tR = i(964486),
    tk = i(480870),
    tU = i(355622),
    tV = i(408018),
    tj = i(201349),
    tM = i(451909),
    tP = i(135621),
    tw = i(381941),
    tK = i(267475);
function tY(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tP.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tk.A)({ channel: n }),
        [u, c] = W.useState(() => (0, tV.N3)()),
        { textValue: d, richValue: A } = u,
        [f, y] = W.useState(!1),
        m = W.useCallback(() => y(!0), []),
        p = W.useCallback(() => y(!1), []);
    (0, tR.Ay)(() => {
        (0, tI.ack)(
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
    let I = W.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        E = W.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, B.yFH.ACTIVE);
            },
            [e],
        ),
        g = W.useCallback(
            () => (
                d.length > a ||
                    (tb.A.sendMessage(n.id, tM.Ay.parse(n, d), !1, { location: tw.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, w.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, B.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, X.jsx)("div", {
        className: tK.k,
        children: (0, X.jsx)(tj.Ay, {
            innerClassName: tK.T,
            onChange: I,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tU.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: p,
            onFocus: m,
            focused: f,
            onSubmit: g,
            onKeyDown: E,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var tF = i(119191),
    tG = i(499214);
let tH = (t) => {
    t && (0, tO.Ak)(R.cH, R.pD);
};
var tJ = i(554146),
    tz = i(298990),
    tB = i(429913),
    tX = i(263577),
    tW = i(826673),
    tq = i(308726),
    tQ = i(823901),
    tZ = i(360469),
    t$ = i(70617),
    t0 = i(881732);
function t1(t) {
    let { game: e } = t,
        i = (0, tB.h)(e.id);
    return null == i ? null : (0, X.jsx)(tX.V, { src: i.getIconURL(tZ.iu.LARGE), size: 40 });
}
let t2 = 5 * k.A.Millis.SECOND,
    t8 = 8 * k.A.Millis.SECOND,
    t9 = 30 * k.A.Millis.SECOND,
    t7 = 30 * k.A.Millis.SECOND,
    t5 = Object.freeze({
        timestamp: 0,
        priority: K.In.NORMAL,
        duration: t2,
        expirationExternallyManaged: !1,
        type: K.zb.GENERIC,
    }),
    t3 = [],
    t6 = !1,
    t4 = [],
    et = {};
function ee(t, e, i) {
    null == et[t] && (et[t] = {}), (et[t][e] = i);
}
let ei = 30 * k.A.Millis.MINUTE,
    en = 2 * k.A.Millis.MINUTE;
function el() {
    if (t6 && null == t3.find((t) => t.status === B.yFH.FOCUSED))
        for (let t of ((t6 = !1), (t3 = [...t3, ...t4]), (t4 = []), t3.length > 40 && (t3.length = 40), t3))
            t.timer.start();
}
function ea() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    t3.filter((t) => t.type === K.zb.TEXT && t.status === B.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - t9) && er(e.id, B.yFH.DISMISSED);
        });
}
function er(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.yFH.DISMISSED;
    if (null == t) return !1;
    let i = t3.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = t3[i];
    if ((n.timer.stop(), (t3 = [...t3]), e === B.yFH.FOCUSED)) {
        let [t] = t3.splice(i, 1);
        (t = { ...t, status: e }), t3.unshift(t), (t6 = !0);
        return;
    }
    e === B.yFH.DISMISSED ? t3.splice(i, 1) : (t3[i] = { ...n, status: e }), el();
}
function es(t) {
    let e = t3.find((e) => e.type === K.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eo(t, e) {
    let i = { ...t5, timestamp: Date.now(), ...e },
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
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : t2));
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
        s = t6 ? t4 : [...t3],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        t6 || t.timer.stop();
    }
    return t6 || ((t3 = s), r.timer.start()), n;
}
function eu() {
    if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return !1;
    let t = S.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in et) t.push(...Object.keys(et[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        (n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!h.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = S.A.getUserGame(t);
                    if (null == e) return null;
                    let i = S.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== B.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < en
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, j.NI)("nowPlayingNotification"),
                    c = P.A.isNotificationDisabledBySetting(V.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = v.A.getVoiceChannelId(),
                    f = D.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != f && d === f) return !1;
                let y = (0, Y.qv)();
                if (null == y) return !1;
                let m = y.id !== a;
                return (
                    (!m || (!!s && !c)) &&
                    (!!(b.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !m) &&
                    (null == (n = et[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ei
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return null;
                                  let n = L.default.getUser(t);
                                  if (null == n) return null;
                                  let l = v.A.getCurrentlySelectedChannelId(),
                                      a = g.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = A.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, td.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let f = (0, X.jsxs)("div", {
                                          className: tm.Ql,
                                          children: [
                                              (0, X.jsx)("div", {
                                                  className: tm.bf,
                                                  children: (0, X.jsx)(tu.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: ts._3.SIZE_24,
                                                  }),
                                              }),
                                              (0, X.jsx)("div", {
                                                  className: tm.rf,
                                                  children: (0, X.jsx)(to.E, {
                                                      variant: "text-sm/medium",
                                                      color: "interactive-text-default",
                                                      className: tm.G3,
                                                      children: J.intl.format(J.t["q7/rgv"], {
                                                          username: d ?? n.username,
                                                          gameName: c,
                                                          gameIcon: () =>
                                                              null != r || null != s
                                                                  ? (0, X.jsx)(tc.A, {
                                                                        game: r,
                                                                        pid: s?.pid,
                                                                        size: tc.M.XSMALL,
                                                                        className: tm.Gt,
                                                                    })
                                                                  : null,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      { trackView: y, trackClick: m } = (0, G.Y9)(H.KS.NowPlayingNotification, {
                                          notif_type: H.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: p } = (0, j.NI)("nowPlayingNotification");
                                  return {
                                      body: f,
                                      className: tm.dn,
                                      wrapperClassName: tm.P6,
                                      animationWrapperClassName: tm.VG,
                                      clickZoneClassName: tm.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !p,
                                      onNotificationShow: () => {
                                          y();
                                      },
                                      onNotificationClick: (t, e) => {
                                          p &&
                                              (async () => {
                                                  try {
                                                      await (0, ty.D$)({
                                                          target: {
                                                              kind: ty.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tA.B9.NOTIFICATION_CLICK,
                                                          widgetType: B.uss.NOTIFICATIONS,
                                                      });
                                                      let t = w.A.getTargetPID();
                                                      tf.A.isInputLocked(t)
                                                          ? (m("unlock"), o.A.setInputLocked(!1, t))
                                                          : m("jump"),
                                                          o.A.updateNotificationStatus(e, B.yFH.DISMISSED);
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          m("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (ee(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eo(l, { type: K.zb.GENERIC, priority: K.In.NORMAL })),
                          !0)
                        : (ee(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i);
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = w.A.isOverlayV3EnabledForPID(w.A.getTargetPID()) || null != w.A.getFocusedPID();
    for (let t of l)
        if (
            !(function (t) {
                let e = T.A.getActivities(t);
                if (0 === e.length) return !1;
                let i = (0, Y.qv)();
                return null != i && null != e.find((t) => t.application_id === i.id);
            })(t) &&
            !a
        ) {
            for (let e in et) {
                let i = et[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function ec(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = es(e);
    if (!Object.keys(i).includes(E.default.getId())) return er(n);
    if (null != n) return !1;
    let l = g.A.getChannel(e);
    if (
        null == l ||
        !l.isRingable() ||
        ("GUILD_RING_START" === t.type &&
            !p.A.getCurrentConfig({ guildId: t.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        O.A.getStatus() === B.clD.DND ||
        m.NO.getSetting()
    )
        return !1;
    let a = t3.find((t) => t.type === K.zb.TEXT && t.channelId === e && t.messageType === B.lAJ.CALL);
    null != a && er(a.id),
        eo(
            (function (t) {
                let e = (0, ta.m1)(t, L.default, h.A),
                    i = J.intl.string(J.t.ssrVzG),
                    n = (0, tl.Y)(t),
                    l = (0, tr.A)(t),
                    { trackView: a, trackClick: r } = (0, G.Y9)(H.KS.IncomingCall, {
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
                        if ((r("join"), B.kvI.CALLABLE.has(t.type))) ti.A.call(t.id, !1, !1);
                        else {
                            if (t.type !== B.rbe.GUILD_VOICE) return;
                            tn.default.selectVoiceChannel(t.id);
                        }
                        o.A.updateNotificationStatus(i),
                            o.A.track(B.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            });
                    },
                    onCancelClick: () => {
                        r("decline"), ti.A.stopRinging(t.id);
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: K.In.HIGH, expirationExternallyManaged: !0, type: K.zb.INCOMING_CALL, channelId: l.id },
        );
}
class ed extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            u.A,
            I.A,
            E.default,
            c.A,
            g.A,
            d.A,
            b.A,
            _.A,
            N.A,
            S.A,
            M.default,
            P.A,
            w.A,
            T.A,
            C.A,
            h.A,
            A.Ay,
            v.A,
            O.A,
            x.A,
            L.default,
            D.A,
        ),
            this.syncWith([S.A], eu);
    }
    getNotifications() {
        return t3;
    }
    hasNotificationForChannel(t) {
        return t3.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...t3].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return t3.filter((i) => i.channelId === t && i.type === e);
    }
}
let eA = new ed(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        er(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        ea(0);
        let n = w.A.getFocusedPID() ?? U.UNSET_PID;
        if (M.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (P.A.isNotificationDisabled(H.KS.WelcomeNudge)) return null;
            let { trackView: n, trackClick: l } = (0, G.Y9)(H.KS.WelcomeNudge, {
                    notif_type: H.KS.WelcomeNudge,
                    secondary_notif_types: e.map((t) => H.Jr[t.type]),
                }),
                a = {};
            for (let i of e)
                switch (i.type) {
                    case H.Jr.WELCOME: {
                        let e = (0, Y.tg)(t?.altId ?? t?.id);
                        null != e &&
                            ((a.cancelText = J.intl.string(J.t["6F9ivu"])),
                            (a.onCancelClick = (t, i) => {
                                l("unlock"),
                                    o.A.updateNotificationStatus(i),
                                    o.A.setInputLocked(!1, w.A.getTargetPID()),
                                    (0, tz.qf)(e, !1, B.BRT.POPOUT);
                            }));
                        break;
                    }
                    case H.Jr.GO_LIVE_VOICE:
                    case H.Jr.GO_LIVE_NON_VOICE: {
                        let t = J.intl.string(J.t.U76Ft2),
                            e = (t) => {
                                let e = () => {
                                        l("go-live-modal"), o.A.setInputLocked(!1, w.A.getTargetPID());
                                    },
                                    i = () => {
                                        l("one-click-go-live");
                                    };
                                (0, tQ.H)({
                                    pid: w.A.getTargetPID(),
                                    analyticsLocation: B.ThZ.OVERLAY_NUDGE,
                                    allowOneClickGoLive: !0,
                                    onBeforeShowModal: e,
                                    onOneClickGoLive: i,
                                    appContext: B.BRT.POPOUT,
                                });
                            };
                        (a.confirmText = t),
                            (a.onConfirmClick = (t, i) => {
                                o.A.updateNotificationStatus(i), e(t);
                            });
                        break;
                    }
                    case H.Jr.CONTENT_INVENTORY:
                        (a.onNotificationShow = () => {
                            o.A.track(B.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, X.jsx)(tq.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: t0.kL,
                                }));
                }
            let r = (0, tW.k8)(tJ.M.OVERLAY_OOP_WELCOME_NUX),
                s = J.intl.string(J.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, X.jsx)(t1, { game: t })
                        : (0, X.jsx)("img", { src: i(513653), className: t$.Kk, alt: "" }),
                title: s,
                hint: () => (0, tF.sI)((0, G.Jn)(), J.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 }),
                ...a,
                onNotificationShow: (t) => {
                    n(), r || (0, tW.Dr)(tJ.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t);
                },
                onNotificationClick: (t, e) => {
                    l("unlock"),
                        o.A.setInputLocked(!1, w.A.getTargetPID()),
                        r || (0, tW.Dr)(tJ.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e);
                },
                onDismissClick: (t, e) => {
                    l("dismiss"), r || (0, tW.Dr)(tJ.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e);
                },
            };
        })((0, Y.qv)(), e);
        null != l && eo(l, { priority: K.In.URGENT, type: K.zb.NUDGE, duration: t8 });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of t3) t.status === B.yFH.FOCUSED && er(t.id, B.yFH.ACTIVE);
            return !0;
        }
        for (let t of (ea(), t3))
            t.type === K.zb.NUDGE
                ? er(t.id, B.yFH.DISMISSED)
                : t.status !== B.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (t3.length > 0)
            return er(
                t3.filter((t) => t.type === K.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                B.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = g.A.getChannel(e),
            a = L.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([B.xL.JOIN, B.xL.JOIN_REQUEST, B.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, y.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c, d;
                if ((l()(null != e.activity, "received null message activity"), i.id === E.default.getId())) return !1;
                let A = (0, Y.qv)();
                if (null == A || null == A.id) return !1;
                let f = u.A.getApplication(A.id),
                    m = [A.id];
                null != A.altId && m.push(A.altId), f?.linkedGames != null && m.push(...f.linkedGames.map((t) => t.id));
                let p = e.activity.party_id;
                switch (e.activity.type) {
                    case B.xL.JOIN:
                        (n = (t) => T.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === p);
                        break;
                    case B.xL.JOIN_REQUEST:
                        (n = (t) => O.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === p);
                        break;
                    case B.xL.STREAM_REQUEST:
                        (n = (t) => O.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e);
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
                    case B.xL.JOIN:
                        c = (function (t, e, i, n, l) {
                            if (P.A.isNotificationDisabled(H.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, y.TB)(t, e, i),
                                { trackView: d, trackClick: A } = (0, G.Y9)(H.KS.ActivityInvite, {
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
                                title: u,
                                body: c,
                                onNotificationShow: () => {
                                    d();
                                },
                                confirmText: J.intl.string(J.t.VJlc0S),
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
                    case B.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (P.A.isNotificationDisabled(H.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = J.intl.format(J.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, G.Y9)(H.KS.ActivityInvite, {
                                    notif_type: H.KS.ActivityInvite,
                                    notif_user_id: e.id,
                                    activity_type: B.xL.JOIN_REQUEST,
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
                                    tp.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: B.xL.JOIN,
                                        activity: n,
                                        location: (0, tE.y)() ? B.ThZ.LOCKED_OVERLAY : B.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i);
                                },
                                onCancelClick: (e, i) => {
                                    (0, tI.ack)(
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
                                        u("decline");
                                },
                                onDismissClick: () => {
                                    u("dismiss");
                                },
                            };
                        })(t, i, A, r);
                        break;
                    case B.xL.STREAM_REQUEST:
                        c = (function (t, e, i, n) {
                            if (
                                P.A.isNotificationDisabled(H.KS.RequestToStream) ||
                                null != I.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let l = e.username,
                                a = J.intl.format(tT.default.jTbTAF, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, G.Y9)(H.KS.RequestToStream, {
                                    notif_type: H.KS.RequestToStream,
                                    notif_user_id: e.id,
                                    activity_type: B.xL.STREAM_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: J.intl.string(tT.default.UGbmBp),
                                cancelText: J.intl.string(J.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (t, e) => {
                                    let i = tN.A.getState().preset;
                                    if (i === tS.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, tg.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        i = t ? tS.jQ.PRESET_AUTO : tS.jQ.PRESET_VIDEO;
                                    }
                                    (0, t_.A)(w.A.getTargetPID(), { preset: i }),
                                        u("request-to-stream"),
                                        o.A.updateNotificationStatus(e);
                                },
                                onCancelClick: (e, i) => {
                                    (0, tI.ack)(
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
                    (eo(c, {
                        priority: K.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: t7,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    (d = new Set()),
                    t3
                        .filter((t) => null != t.uniqueKey)
                        .sort((t, e) => e.timestamp - t.timestamp)
                        .forEach((t) => {
                            null != t.uniqueKey &&
                                (d.has(t.uniqueKey) ? er(t.id, B.yFH.DISMISSED) : d.add(t.uniqueKey));
                        }),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (P.A.isNotificationDisabled(H.KS.TextChat) || x.A.disableNotifications || !(0, y.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(R.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, j.NI)("textChatNotification");
                if (P.A.isNotificationDisabled(H.KS.TextChat)) return tH(!0), null;
                let { icon: a, title: r, body: s } = (0, y.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, G.Y9)(H.KS.TextChat, {
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
                            ? (0, th.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, X.jsx)(tC.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) => (t || !e ? null : (0, tF.sI)((0, G.Jn)(), l ? tG.default.VMcw8s : J.t.ykjOAJ)),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l
                            ? null
                            : i && !a
                              ? (0, X.jsx)(tY, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        tH(n), u();
                    },
                    onNotificationClick: (i, n) => {
                        let a = w.A.getTargetPID();
                        if (
                            ((0, tI.ack)(
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
                            (0, ty.D$)({
                                target: {
                                    kind: ty.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tA.B9.NOTIFICATION_CLICK,
                                widgetType: B.uss.TEXT_CHAT_V3,
                            }),
                                tf.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tx._.dispatchToLastSubscribed(B.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, B.yFH.DISMISSED);
                            return;
                        }
                        tf.A.isInputLocked(a)
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tv.pX)(B.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tL.isPlatformEmbedded && tD.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, _.A.getMessage(e, i.id) ?? (0, f.rh)(i), a, r);
        if (null == s) return !1;
        eo(s, { type: K.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), ea();
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = t3.length),
            (i = (t3 = t3.filter((t) => t.type !== K.zb.TEXT || t.channelId !== n)).length !== e) && el(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: ec,
    CALL_UPDATE: ec,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        er(es(e));
    },
    GUILD_RING_START: ec,
    GUILD_RING_STOP: function (t) {
        let { channelId: e, guildId: i, ringing: n } = t;
        if (!p.A.getCurrentConfig({ guildId: i, location: "OverlayV3StopRinging" }).enabled) return !1;
        n.includes(E.default.getId()) && er(es(e));
    },
    ACTIVITY_USER_ACTION: function (t) {
        let e,
            { actionType: i, user: n, applicationId: l } = t,
            a = (0, Y.qv)();
        return (
            null != a &&
            a?.id != null &&
            (a.id === l || a.altId === l) &&
            (i === B.xL.JOIN &&
                (e = (function (t, e) {
                    if (P.A.isNotificationDisabled(H.KS.ActivityUserJoin)) return null;
                    let i = t.username,
                        n = J.intl.format(J.t["Yk+uYG"], { username: "" }),
                        l = (0, z.ku)(t),
                        a = J.intl.string(J.t.WRj1Wn),
                        { trackView: r, trackClick: s } = (0, G.Y9)(H.KS.ActivityUserJoin, {
                            notif_type: H.KS.ActivityUserJoin,
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
            null != e && void eo(e, { priority: K.In.URGENT, type: K.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        "manual" === t.clipMethod && eo(te(J.intl.string(J.t.NBMK9m)));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        eo(te(J.intl.string(J.t["1ZbZuh"])));
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (P.A.isNotificationDisabled(H.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, G.Y9)(H.KS.ClipsReminderNotification, {
                    notif_type: H.KS.ClipsReminderNotification,
                }),
                i = Z.Ay.getKeybindForAction(B.hCu.SAVE_CLIP),
                n = (0, Q.TD)();
            if (null == i || !n) return null;
            let l = $.dI(i.shortcut, !0);
            return {
                title: J.intl.format(J.t.S5uhCN, {
                    keybind: l,
                    keybindHook: (t, e) => (0, X.jsx)(tt.b, { keybind: l.split("+") }, e),
                }),
                icon: (0, X.jsx)(q.x, { size: "lg", color: "currentColor" }),
                onNotificationShow: () => {
                    t();
                },
                onDismissClick: () => {
                    e("dismiss");
                },
            };
        })();
        null != e && eo(e);
    },
});
