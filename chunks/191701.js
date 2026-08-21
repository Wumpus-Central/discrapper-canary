i.r(e), i.d(e, { default: () => eS }), i(321073), i(667532);
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
    p = i(944043),
    y = i(885386),
    g = i(164891),
    m = i(616356),
    I = i(280450),
    E = i(734057),
    _ = i(232835),
    N = i(803224),
    S = i(783592),
    C = i(290863),
    h = i(763827),
    T = i(994500),
    v = i(309010),
    O = i(461213),
    b = i(351906),
    L = i(287809),
    x = i(977997),
    D = i(90165),
    R = i(592329),
    k = i(927813),
    U = i(9302),
    M = i(93465),
    V = i(589051),
    j = i(296027),
    P = i(592598),
    w = i(489277),
    K = i(897720),
    G = i(243612),
    F = i(183208),
    Y = i(581730),
    H = i(672396),
    J = i(375708),
    B = i(486020),
    $ = i(652215),
    z = i(477900),
    X = i(582128),
    W = i(176781),
    q = i(974293),
    Q = i(458977),
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
    return d.Ay.getSettings().debugTooltipsEnabled;
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
    tf = i(778712),
    tp = i(834730),
    ty = i(966327),
    tg = i(769015),
    tm = i(562153),
    tI = i(41984),
    tE = i(222506),
    t_ = i(145567),
    tN = i(34773),
    tS = i(308368),
    tC = i(334738),
    th = i(481484),
    tT = i(258585),
    tv = i(560595),
    tO = i(929921),
    tb = i(753070),
    tL = i(201605),
    tx = i(941971),
    tD = i(521981),
    tR = i(976860),
    tk = i(400492),
    tU = i(625494),
    tM = i(723702),
    tV = i(19575),
    tj = i(366032),
    tP = i(148494),
    tw = i(964486),
    tK = i(480870),
    tG = i(355622),
    tF = i(408018),
    tY = i(273754),
    tH = i(451909),
    tJ = i(135621),
    tB = i(381941),
    t$ = i(158602);
function tz(t) {
    let { id: e, replyToMessageId: i, channel: n, onSend: l } = t,
        a = (0, tJ.A)(),
        { placeholder: r, accessibilityLabel: s } = (0, tK.A)({ channel: n }),
        [u, c] = X.useState(() => (0, tF.N3)()),
        { textValue: d, richValue: A } = u,
        [f, p] = X.useState(!1),
        y = X.useCallback(() => p(!0), []),
        g = X.useCallback(() => p(!1), []);
    (0, tw.Ay)(() => {
        (0, tC.ack)(
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
    let m = X.useCallback((t, e, i) => {
            c({ textValue: e, richValue: i });
        }, []),
        I = X.useCallback(
            (t) => {
                "Escape" === t.key && o.A.updateNotificationStatus(e, $.yFH.ACTIVE);
            },
            [e],
        ),
        E = X.useCallback(
            () => (
                d.length > a ||
                    (tP.A.sendMessage(n.id, tH.Ay.parse(n, d), !1, { location: tB.Hx.OVERLAY }),
                    o.A.setInputLocked(!0, w.A.getTargetPID()),
                    o.A.updateNotificationStatus(e, $.yFH.DISMISSED),
                    l?.(d)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [d, a, n, e, l],
        );
    return (0, z.jsx)("div", {
        className: t$.k,
        children: (0, z.jsx)(tY.Ay, {
            innerClassName: t$.T,
            onChange: m,
            placeholder: r,
            accessibilityLabel: s,
            channel: n,
            textValue: d,
            richValue: A,
            type: tG.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: g,
            onFocus: y,
            focused: f,
            onSubmit: E,
            onKeyDown: I,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
var tX = i(119191),
    tW = i(796101);
function tq(t) {
    t && (0, tk.Ak)(R.cH, R.pD, void 0, void 0, { trackNotificationFailure: !0 });
}
var tQ = i(554146),
    tZ = i(298990),
    t0 = i(429913),
    t1 = i(263577),
    t2 = i(826673),
    t8 = i(453028),
    t9 = i(308726),
    t5 = i(46282),
    t7 = i(360469),
    t3 = i(731854),
    t4 = i(709946),
    t6 = i(302933);
function et(t) {
    let { game: e } = t,
        i = (0, t0.h)(e.id);
    return null == i ? null : (0, z.jsx)(t1.V, { src: i.getIconURL(t7.iu.LARGE), size: 40 });
}
let ee = 5 * k.A.Millis.SECOND,
    ei = 8 * k.A.Millis.SECOND,
    en = 30 * k.A.Millis.SECOND,
    el = 30 * k.A.Millis.SECOND,
    ea = Object.freeze({
        timestamp: 0,
        priority: K.In.NORMAL,
        duration: ee,
        expirationExternallyManaged: !1,
        type: K.zb.GENERIC,
    }),
    er = [],
    es = !1,
    eo = [],
    eu = {};
function ec(t, e, i) {
    null == eu[t] && (eu[t] = {}), (eu[t][e] = i);
}
let ed = 30 * k.A.Millis.MINUTE,
    eA = 2 * k.A.Millis.MINUTE;
function ef() {
    if (es && null == er.find((t) => t.status === $.yFH.FOCUSED))
        for (let t of ((es = !1), (er = [...er, ...eo]), (eo = []), er.length > 40 && (er.length = 40), er))
            t.timer.start();
}
function ep() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    er.filter((t) => t.type === K.zb.TEXT && t.status === $.yFH.TIMED_OUT)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - en) && eg(e.id, $.yFH.DISMISSED);
        });
}
function ey() {
    let t = new Set();
    er.filter((t) => null != t.uniqueKey)
        .sort((t, e) => e.timestamp - t.timestamp)
        .forEach((e) => {
            null != e.uniqueKey && (t.has(e.uniqueKey) ? eg(e.id, $.yFH.DISMISSED) : t.add(e.uniqueKey));
        });
}
function eg(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $.yFH.DISMISSED;
    if (null == t) return !1;
    let i = er.findIndex((e) => e.id === t);
    if (-1 === i) return !1;
    let n = er[i];
    if ((n.timer.stop(), (er = [...er]), e === $.yFH.FOCUSED)) {
        let [t] = er.splice(i, 1);
        (t = { ...t, status: e }), er.unshift(t), (es = !0);
        return;
    }
    e === $.yFH.DISMISSED ? er.splice(i, 1) : (er[i] = { ...n, status: e }), ef();
}
function em(t) {
    let e = er.find((e) => e.type === K.zb.INCOMING_CALL && e.channelId === t);
    return null != e ? e.id : null;
}
function eI(t, e) {
    let i = { ...ea, timestamp: Date.now(), ...e },
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
                        -1 === n && (n = setTimeout(() => o.A.updateNotificationStatus(t, a), null != i ? i : ee));
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
        s = es ? eo : [...er],
        u = s.findIndex((t) => t.priority <= i.priority);
    if ((-1 === u ? s.push(r) : s.splice(u, 0, r), s.length > 40)) {
        let t = s.pop();
        es || t.timer.stop();
    }
    return es || ((er = s), r.timer.start()), n;
}
function eE() {
    if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return !1;
    let t = S.A.usersPlaying,
        e = new Set(),
        i = (function () {
            let t = [];
            for (let e in eu) t.push(...Object.keys(eu[e]).map((t) => t));
            return t;
        })(),
        n = !1;
    for (let [i, l] of Object.entries(t))
        (n =
            n ||
            (function (t, e) {
                let i, n, l;
                if (!T.A.isFriend(t)) return !1;
                let a = e.gameId;
                if (null == a) return !1;
                let r = (function (t) {
                    let e = S.A.getUserGame(t);
                    if (null == e) return null;
                    let i = S.A.getNowPlaying(e.gameId)[t]?.activity;
                    return null == i || i.type !== $.$pd.PLAYING ? null : i;
                })(t);
                if (
                    null == r ||
                    !(
                        null != (i = r.timestamps?.start != null ? r.timestamps.start : r.created_at) &&
                        Date.now() - i < eA
                    )
                )
                    return !1;
                let { showNowPlayingForDifferentGames: s } = (0, V.NI)("nowPlayingNotification"),
                    c = P.A.isNotificationDisabledBySetting(M.M.NOW_PLAYING_DIFFERENT_GAMES),
                    d = v.Ay.getVoiceChannelId(),
                    f = x.A.getDiscoverableVoiceStateForUser(t)?.channelId;
                if (null != d && null != f && d === f) return !1;
                let p = (0, G.qv)();
                if (null == p) return !1;
                let y = p.id !== a;
                return (
                    (!y || (!!s && !c)) &&
                    (!!(D.A.hasApplicationStatistic(a) || A.Ay.isGameSeen(a)) || !y) &&
                    (null == (n = eu[a]?.[t]?.lastSentTimestamp) || Date.now() - n > ed
                        ? (null !=
                              (l = (function (t, e, i) {
                                  if (P.A.isNotificationDisabled(H.KS.NowPlayingNotification)) return null;
                                  let n = L.default.getUser(t);
                                  if (null == n) return null;
                                  let l = v.Ay.getCurrentlySelectedChannelId(),
                                      a = E.A.getChannel(l),
                                      r = u.A.getApplication(e),
                                      s = A.Ay.getRunningGames().find((t) => t.id === e),
                                      c = s?.name ?? r?.name ?? i.name,
                                      d = (0, tm.mG)(a?.guild_id, a?.id, n);
                                  if (null == c || 0 === c.trim().length) return null;
                                  let f = (0, z.jsxs)("div", {
                                          className: tN.Ql,
                                          children: [
                                              (0, z.jsx)("div", {
                                                  className: tN.bf,
                                                  children: (0, z.jsx)(ty.A, {
                                                      user: n,
                                                      "aria-hidden": !0,
                                                      size: tf._3.SIZE_24,
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
                                                          gameName: c,
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
                                      { trackView: p, trackClick: y } = (0, Y.Y9)(H.KS.NowPlayingNotification, {
                                          notif_type: H.KS.NowPlayingNotification,
                                          notif_user_id: n.id,
                                          activity_type: i.type,
                                          activity_name: c,
                                      }),
                                      { hasChat: g } = (0, V.NI)("nowPlayingNotification");
                                  return {
                                      body: f,
                                      className: tN.dn,
                                      wrapperClassName: tN.P6,
                                      animationWrapperClassName: tN.VG,
                                      clickZoneClassName: tN.EO,
                                      maxBodyLines: 1,
                                      disableClickableRegions: !g,
                                      onNotificationShow: () => {
                                          p();
                                      },
                                      onNotificationClick: (t, e) => {
                                          g &&
                                              (async () => {
                                                  try {
                                                      await (0, t_.D$)({
                                                          target: {
                                                              kind: t_.bB.DM_USER,
                                                              userId: n.id,
                                                              messageId: null,
                                                          },
                                                          source: tI.B9.NOTIFICATION_CLICK,
                                                          widgetType: $.uss.NOTIFICATIONS,
                                                      });
                                                      let t = w.A.getTargetPID();
                                                      tE.A.isInputLocked(t)
                                                          ? (y("unlock"), o.A.setInputLocked(!1, t))
                                                          : y("jump"),
                                                          o.A.updateNotificationStatus(e, $.yFH.DISMISSED);
                                                  } catch {}
                                              })();
                                      },
                                      onDismissClick: () => {
                                          y("dismiss");
                                      },
                                  };
                              })(t, a, r)) &&
                              (ec(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }),
                              eI(l, { type: K.zb.GENERIC, priority: K.In.NORMAL })),
                          !0)
                        : (ec(a, t, { userId: t, gameId: a, lastSentTimestamp: Date.now() }), !1))
                );
            })(i, l)),
            e.add(i);
    let l = new Set();
    for (let t of i) e.has(t) || l.add(t);
    let a = w.A.isOverlayV3EnabledForPID(w.A.getTargetPID()) || null != w.A.getFocusedPID();
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
            for (let e in eu) {
                let i = eu[e][t];
                null != i && (i.lastSentTimestamp = null);
            }
            n = !0;
        }
    return n;
}
function e_(t) {
    let { channelId: e, ongoingRings: i } = t,
        n = em(e);
    if (!Object.keys(i).includes(I.default.getId())) return eg(n);
    if (null != n) return !1;
    let l = E.A.getChannel(e);
    if (
        null == l ||
        !l.isRingable() ||
        ("GUILD_RING_START" === t.type &&
            !g.A.getCurrentConfig({ guildId: t.guildId, location: "OverlayV3StartRinging" }).enabled) ||
        O.A.getStatus() === $.clD.DND ||
        y.NO.getSetting()
    )
        return !1;
    let a = er.find((t) => t.type === K.zb.TEXT && t.channelId === e && t.messageType === $.lAJ.CALL);
    null != a && eg(a.id),
        eI(
            (function (t) {
                let e = (0, td.m1)(t, L.default, T.A),
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
                        o.A.updateNotificationStatus(i),
                            o.A.track($.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                video_enabled: !1,
                            });
                    },
                    onCancelClick: () => {
                        r("decline"), to.A.stopRinging(t.id);
                    },
                    onDismissClick: () => {
                        r("dismiss");
                    },
                };
            })(l),
            { priority: K.In.HIGH, expirationExternallyManaged: !0, type: K.zb.INCOMING_CALL, channelId: l.id },
        );
}
class eN extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            u.A,
            m.A,
            I.default,
            c.A,
            E.A,
            d.Ay,
            D.A,
            _.A,
            N.A,
            S.A,
            j.default,
            P.A,
            w.A,
            C.A,
            h.A,
            T.A,
            A.Ay,
            v.Ay,
            O.A,
            b.A,
            L.default,
            x.A,
        ),
            this.syncWith([S.A], eE);
    }
    getNotifications() {
        return er;
    }
    hasNotificationForChannel(t) {
        return er.some((e) => e.channelId === t);
    }
    getMostRecentNotificationChannelId() {
        let t = [...er].sort((t, e) => e.timestamp - t.timestamp).find((t) => null != t.channelId);
        return t?.channelId ?? null;
    }
    getNotificationsForChannel(t, e) {
        return er.filter((i) => i.channelId === t && i.type === e);
    }
}
let eS = new eN(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
        let { notificationId: e, status: i } = t;
        eg(e, i);
    },
    OVERLAY_MOUNTED: function (t) {
        let { nudges: e } = t;
        ep(0);
        let n = w.A.getFocusedPID() ?? U.UNSET_PID;
        if (j.default.hasChangedRenderMode(n)) return;
        let l = (function (t, e) {
            if (P.A.isNotificationDisabled(H.KS.WelcomeNudge)) return null;
            t8.Ay.supports(t3.O5.VIDEO) ||
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
                                l("unlock"),
                                    o.A.updateNotificationStatus(i),
                                    o.A.setInputLocked(!1, w.A.getTargetPID()),
                                    (0, tZ.qf)(e, !1, $.BRT.POPOUT);
                            }));
                        break;
                    }
                    case H.Jr.GO_LIVE_VOICE:
                    case H.Jr.GO_LIVE_NON_VOICE:
                        (a.confirmText = J.intl.string(J.t.U76Ft2)),
                            (a.onConfirmClick = (t, e) => {
                                function i() {
                                    l("go-live-modal"), o.A.setInputLocked(!1, w.A.getTargetPID());
                                }
                                function n() {
                                    l("one-click-go-live");
                                }
                                o.A.updateNotificationStatus(e),
                                    (0, t5.H)({
                                        pid: w.A.getTargetPID(),
                                        analyticsLocation: $.ThZ.OVERLAY_NUDGE,
                                        allowOneClickGoLive: !0,
                                        onBeforeShowModal: i,
                                        onOneClickGoLive: n,
                                        appContext: $.BRT.POPOUT,
                                    });
                            });
                        break;
                    case H.Jr.CONTENT_INVENTORY:
                        (a.onNotificationShow = () => {
                            o.A.track($.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                                user_ids: i.entries.map((t) => t.author_id),
                                entry_ids: i.entries.map((t) => t.id),
                            });
                        }),
                            (a.renderFooter = () =>
                                (0, z.jsx)(t9.ru, {
                                    gamingId: t?.altId ?? t?.id,
                                    maxUserShowCount: 5,
                                    variant: "default",
                                    className: t6.kL,
                                }));
                }
            let r = (0, t2.k8)(tQ.M.OVERLAY_OOP_WELCOME_NUX),
                s = J.intl.string(J.t.KWDIrh);
            return {
                icon:
                    null != t
                        ? (0, z.jsx)(et, { game: t })
                        : (0, z.jsx)("img", { src: i(513653), className: t4.Kk, alt: "" }),
                title: s,
                hint: function () {
                    return (0, tX.sI)((0, Y.Jn)(), J.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 });
                },
                ...a,
                onNotificationShow: (t) => {
                    n(), r || (0, t2.Dr)(tQ.M.OVERLAY_OOP_WELCOME_NUX), a.onNotificationShow?.(t);
                },
                onNotificationClick: (t, e) => {
                    l("unlock"),
                        o.A.setInputLocked(!1, w.A.getTargetPID()),
                        r || (0, t2.Dr)(tQ.M.OVERLAY_OOP_WELCOME_NUX),
                        a.onNotificationClick?.(t, e);
                },
                onDismissClick: (t, e) => {
                    l("dismiss"), r || (0, t2.Dr)(tQ.M.OVERLAY_OOP_WELCOME_NUX), a.onDismissClick?.(t, e);
                },
            };
        })((0, G.qv)(), e);
        null != l && eI(l, { priority: K.In.URGENT, type: K.zb.NUDGE, duration: ei });
    },
    OVERLAY_SET_INPUT_LOCKED: function (t) {
        let { locked: e } = t;
        if (e) {
            for (let t of er) t.status === $.yFH.FOCUSED && eg(t.id, $.yFH.ACTIVE);
            return !0;
        }
        for (let t of (ep(), er))
            t.type === K.zb.NUDGE
                ? eg(t.id, $.yFH.DISMISSED)
                : t.status !== $.yFH.ACTIVE ||
                  t.expirationExternallyManaged ||
                  (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
        if (er.length > 0)
            return eg(
                er.filter((t) => t.type === K.zb.TEXT).sort((t, e) => e.timestamp - t.timestamp)[0]?.id,
                $.yFH.FOCUSED,
            );
    },
    MESSAGE_CREATE: function (t) {
        let { channelId: e, message: i } = t,
            n = E.A.getChannel(e),
            a = L.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if ([$.xL.JOIN, $.xL.JOIN_REQUEST, $.xL.STREAM_REQUEST].includes(i.activity?.type)) {
            if (!(0, p.lx)(i, e, !0, !0)) return !1;
            let t = (function (t, e, i) {
                let n, a, r, s, c;
                if ((l()(null != e.activity, "received null message activity"), i.id === I.default.getId())) return !1;
                let d = (0, G.qv)();
                if (null == d || null == d.id) return !1;
                let A = u.A.getApplication(d.id),
                    f = [d.id];
                null != d.altId && f.push(d.altId), A?.linkedGames != null && f.push(...A.linkedGames.map((t) => t.id));
                let y = e.activity.party_id;
                switch (e.activity.type) {
                    case $.xL.JOIN:
                        (n = (t) => C.A.getApplicationActivity(i.id, t)),
                            (a = (t) => null != t.party && t.party.id === y);
                        break;
                    case $.xL.JOIN_REQUEST:
                        (n = (t) => O.A.getApplicationActivity(t)), (a = (t) => null != t.party && t.party.id === y);
                        break;
                    case $.xL.STREAM_REQUEST:
                        (n = (t) => O.A.getApplicationActivity(t)), (a = (t, e) => t.application_id === e);
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
                        c = (function (t, e, i, n, l) {
                            if (P.A.isNotificationDisabled(H.KS.ActivityInvite) || null == e.activity) return null;
                            let a = e.activity.type,
                                r = n.session_id;
                            if (null == r) return null;
                            let { icon: s, title: u, body: c } = (0, p.TB)(t, e, i),
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
                    case $.xL.JOIN_REQUEST:
                        c = (function (t, e, i, n) {
                            if (P.A.isNotificationDisabled(H.KS.ActivityInvite)) return null;
                            let l = e.username,
                                a = J.intl.format(J.t.VDODnv, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, Y.Y9)(H.KS.ActivityInvite, {
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
                                    tS.A.sendActivityInvite({
                                        channelId: t.id,
                                        type: $.xL.JOIN,
                                        activity: n,
                                        location: (0, th.y)() ? $.ThZ.LOCKED_OVERLAY : $.ThZ.UNLOCKED_OVERLAY,
                                    }),
                                        u("join"),
                                        o.A.updateNotificationStatus(i);
                                },
                                onCancelClick: (e, i) => {
                                    (0, tC.ack)(
                                        t.id,
                                        {
                                            section: $.JJy.OVERLAY,
                                            object: $.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                            objectType: $.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                        })(t, i, d, r);
                        break;
                    case $.xL.STREAM_REQUEST:
                        c = (function (t, e, i, n) {
                            if (
                                P.A.isNotificationDisabled(H.KS.RequestToStream) ||
                                null != m.A.getCurrentUserActiveStream()
                            )
                                return null;
                            let l = e.username,
                                a = J.intl.format(tL.default.jTbTAF, { username: "", game: i.name }),
                                r = e.getAvatarURL(t.guild_id, 80),
                                { trackView: s, trackClick: u } = (0, Y.Y9)(H.KS.RequestToStream, {
                                    notif_type: H.KS.RequestToStream,
                                    notif_user_id: e.id,
                                    activity_type: $.xL.STREAM_REQUEST,
                                    activity_name: n.name,
                                });
                            return {
                                icon: r,
                                title: l,
                                body: a,
                                confirmText: J.intl.string(tL.default.UGbmBp),
                                cancelText: J.intl.string(J.t["tpXzJ+"]),
                                onNotificationShow: () => {
                                    s();
                                },
                                onConfirmClick: (t, e) => {
                                    let i = tO.A.getState().preset;
                                    if (i === tb.jQ.PRESET_DOCUMENTS) {
                                        let { allowAutoQuality: t } = (0, tT.eO)({
                                            location: "requestToStreamNotification",
                                        });
                                        i = t ? tb.jQ.PRESET_AUTO : tb.jQ.PRESET_VIDEO;
                                    }
                                    (0, tv.A)(w.A.getTargetPID(), { preset: i }),
                                        u("request-to-stream"),
                                        o.A.updateNotificationStatus(e);
                                },
                                onCancelClick: (e, i) => {
                                    (0, tC.ack)(
                                        t.id,
                                        {
                                            section: $.JJy.OVERLAY,
                                            object: $.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                                            objectType: $.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                        })(t, i, d, r);
                }
                return (
                    null != c &&
                    (eI(c, {
                        priority: K.In.URGENT,
                        expirationExternallyManaged: !0,
                        channelId: t.id,
                        duration: el,
                        uniqueKey: `activity-${e.activity.type}-${i.id}-${t.id}-${s}`,
                    }),
                    ey(),
                    !0)
                );
            })(n, i, a);
            if (!1 !== t) return t;
        }
        if (P.A.isNotificationDisabled(H.KS.TextChat) || b.A.disableNotifications || !(0, p.lx)(i, e)) return !1;
        let r = !N.A.isSoundDisabled(R.cH),
            s = (function (t, e, i, n) {
                let { hasChat: l } = (0, V.NI)("textChatNotification");
                if (P.A.isNotificationDisabled(H.KS.TextChat)) return tq(!0), null;
                let { icon: a, title: r, body: s } = (0, p.TB)(t, e, i),
                    { trackView: u, trackClick: c } = (0, Y.Y9)(H.KS.TextChat, {
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
                            ? (0, tD.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 })
                                  .content
                            : s,
                    unreadAccessory: (t) => (l ? (0, z.jsx)(tx.A, { unread: !0, hovered: t }) : null),
                    hint: (t, e) =>
                        t || !e || (!l && (0, tj.$)())
                            ? null
                            : (0, tX.sI)((0, Y.Jn)(), l ? tW.default.VMcw8s : J.t.ykjOAJ),
                    maxBodyLines: 2,
                    renderFooter: (i, n, a) =>
                        l || (0, tj.$)()
                            ? null
                            : i && !a
                              ? (0, z.jsx)(tz, { id: n, replyToMessageId: e.id, channel: t, onSend: () => c("send") })
                              : null,
                    onNotificationShow: () => {
                        tq(n), u();
                    },
                    onNotificationClick: (i, n) => {
                        let a = w.A.getTargetPID();
                        if (
                            ((0, tC.ack)(
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
                            (0, t_.D$)({
                                target: {
                                    kind: t_.bB.CHANNEL,
                                    channelId: t.id,
                                    guildId: t.guild_id ?? null,
                                    messageId: e.id,
                                },
                                source: tI.B9.NOTIFICATION_CLICK,
                                widgetType: $.uss.TEXT_CHAT_V3,
                            }),
                                tE.A.isInputLocked(a) ? (c("unlock"), o.A.setInputLocked(!1, a)) : c("jump"),
                                requestAnimationFrame(() => {
                                    tU._.dispatchToLastSubscribed($.jej.TEXTAREA_FOCUS, { channelId: t.id });
                                }),
                                o.A.updateNotificationStatus(n, $.yFH.DISMISSED);
                            return;
                        }
                        tE.A.isInputLocked(a) && !(0, tj.$)()
                            ? (c("unlock"), o.A.setInputLocked(!1, a))
                            : (c("jump"),
                              (0, tR.pX)($.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                              tM.isPlatformEmbedded && tV.Ay.focus());
                    },
                    onDismissClick: () => {
                        c("dismiss");
                    },
                };
            })(n, _.A.getMessage(e, i.id) ?? (0, f.rh)(i), a, r);
        if (null == s) return !1;
        eI(s, { type: K.zb.TEXT, channelId: n.id, expirationExternallyManaged: !0, messageType: i.type }), ep();
    },
    CHANNEL_SELECT: function (t) {
        let e,
            i,
            { channelId: n } = t;
        return (
            null != n &&
            ((e = er.length),
            (i = (er = er.filter((t) => t.type !== K.zb.TEXT || t.channelId !== n)).length !== e) && ef(),
            i)
        );
    },
    MESSAGE_ACK: function () {},
    CALL_CREATE: e_,
    CALL_UPDATE: e_,
    CALL_DELETE: function (t) {
        let { channelId: e } = t;
        eg(em(e));
    },
    GUILD_RING_START: e_,
    GUILD_RING_STOP: function (t) {
        let { channelId: e, guildId: i, ringing: n } = t;
        if (!g.A.getCurrentConfig({ guildId: i, location: "OverlayV3StopRinging" }).enabled) return !1;
        n.includes(I.default.getId()) && eg(em(e));
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
            null != e && void eI(e, { priority: K.In.URGENT, type: K.zb.GENERIC }))
        );
    },
    CLIPS_SAVE_CLIP_START: function (t) {
        switch (t.clipMethod) {
            case "manual":
                eI(ts(J.intl.string(J.t.NBMK9m)));
                break;
            case "auto":
                var e;
                null != t.signal &&
                    tl() &&
                    eI(
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
                                        return `Game event: ${t.title ?? t.eventType}`;
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
            eI(
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
            eI(ts(J.intl.string(J.t["1ZbZuh"]))),
                tl() &&
                    null != t.errorMessage &&
                    eI(
                        ((e = t.errorMessage),
                        (i = t.errorAt),
                        (n = (() => {
                            if (null != e) return null != i ? `[${i}] ${e}` : e;
                        })()),
                        { ...ti(H.KS.ClipsDebugSaveError), title: "Clip save failed", body: n, maxBodyLines: 4 }),
                    );
        }
    },
    CLIPS_SAVE_CLIP_NO_OP: function (t) {
        if ("manual" === t.clipMethod && tl()) {
            var e, i;
            let n;
            eI(
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
                                      tn("feature enabled", i.decoupledClipsEnabled),
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
            eI(
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
                    e = d.Ay.getSettings(),
                    i = (0, q.$i)("getEnabledClipsFeatures"),
                    { enableDistributedClips: n } = Q.A.getConfig({ location: "getEnabledClipsFeatures" }),
                    l = Z.Ay.getKeybindForAction($.hCu.SAVE_CLIP);
                if ((null != l && t.push(`Manual (${tt.dI(l.shortcut, !0)})`), i)) {
                    let e = ["laughter"];
                    e.length > 0 && t.push(`Auto (${e.join(", ")})`);
                }
                return n && e.clipSignals.enableDistributedSignals && t.push("Distributed"), t;
            })()).length
                ? null
                : {
                      ...ti(H.KS.ClipsDebugFeaturesEnabled),
                      title: "Clips engine ready",
                      body: `Clips features active: ${e.join("\n\u2022 ")}`,
                      maxBodyLines: 8,
                  };
        null != i &&
            (eI(i, { uniqueKey: `clips-debug-features-${t.sourceId}`, duration: 10 * k.A.Millis.SECOND }), ey());
    },
    STREAM_START: function (t) {
        let e = (function () {
            if (P.A.isNotificationDisabled(H.KS.ClipsReminderNotification)) return null;
            let { trackView: t, trackClick: e } = (0, Y.Y9)(H.KS.ClipsReminderNotification, {
                    notif_type: H.KS.ClipsReminderNotification,
                }),
                i = Z.Ay.getKeybindForAction($.hCu.SAVE_CLIP),
                n = (0, ta.TD)();
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
        null != e && eI(e);
    },
});
