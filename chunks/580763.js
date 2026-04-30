e.d(n, { A: () => tq });
var i = e(627968),
    l = e(64700),
    a = e(503698),
    r = e.n(a),
    s = e(696292),
    o = e(983851),
    c = e(661531),
    u = e(939249),
    d = e(541806),
    A = e(765379),
    x = e(672979),
    p = e(960076),
    f = e(793574),
    _ = e(688810),
    m = e(47167),
    T = e(939341),
    E = e(662010),
    g = e(623671),
    N = e(365185),
    C = e(915089),
    I = e(932413),
    y = e(345942),
    j = e(82149),
    O = e(92240),
    S = e(257367),
    h = e(248302),
    P = e(53257),
    v = e(975732),
    L = e(939496),
    R = e(964195),
    U = e(17928),
    b = e(833349),
    M = e(682261),
    D = e(874546),
    G = e(141639),
    V = e(61330),
    Y = e(709309),
    W = e(737393),
    k = e(540185),
    B = e(289173),
    H = e(735321),
    w = e(999291),
    z = e(993401),
    F = e(495544),
    X = e(760751),
    $ = e(518477),
    Q = e(985018);
function q(t) {
    let { applicationId: n, onAction: e, onClose: a } = t,
        r = (0, U.bG)([F.default], () => F.default.getId()),
        s = (0, w.Ay)(r, null),
        o = (0, U.bG)([X.A], () => X.A.getDetectableGame(n)),
        c = l.useMemo(
            () =>
                !(
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof B.Yy &&
                            t.type === k.x.CURRENT_GAMES &&
                            t.games?.some((t) => t.applicationId === n),
                    )
                ) && (0, H.XX)(o),
            [n, s?.widgets, o],
        ),
        u = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, H.ew)({ widgetType: k.x.CURRENT_GAMES, game: { applicationId: n }, ignoreMaxGames: !0 }),
                    (0, v.openUserProfileModal)({
                        userId: r,
                        tabSection: $.RP.WIDGETS,
                        scrollTarget: k.x.CURRENT_GAMES,
                    }),
                    a?.();
            },
            [n, r, e, a],
        );
    return c ? (0, i.jsx)(z.FD, { text: Q.intl.string(Q.t.BjYzmC), onClick: u, fullWidth: !0 }) : null;
}
var J = e(913948),
    K = e(46225),
    Z = e(308335),
    tt = e(790381),
    tn = e(266080),
    te = e(729937),
    ti = e(76843),
    tl = e(998218),
    ta = e(996988),
    tr = e(514566);
async function ts(t) {
    let { activity: n, user: e, index: i } = t;
    try {
        let t = await (0, te.yb)(n, e.id);
        if (t.button_urls.length <= i) return;
        let l = t.button_urls[i];
        if ("string" != typeof l) return;
        let a = tl.A.safeParseWithQuery(l);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, ti.h)({ href: tl.A.format(a), trusted: !1 });
    } catch (t) {}
}
function to(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, L.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let r = (0, d.A)(e);
    return a === ta.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: tr.fO,
              children: e.buttons.map((t, a) =>
                  (0, i.jsx)(
                      z.FD,
                      {
                          text: r ? Q.intl.string(Q.t.I6JG46) : t,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: n, activity: e, index: a });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: tr.fO,
              children: e.buttons.map((t, a) =>
                  (0, i.jsx)(
                      z.FD,
                      {
                          text: r ? Q.intl.string(Q.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: n, activity: e, index: a });
                          },
                      },
                      a,
                  ),
              ),
          });
}
var tc = e(990078),
    tu = e(323384),
    td = e(808666),
    tA = e(687966),
    tx = e(780907),
    tp = e(928550),
    tf = e(594262),
    t_ = e(695311);
function tm(t) {
    let { user: n, activity: e, onAction: l, onClose: a } = t,
        { themeType: r } = (0, L.E)(),
        s = (0, t_.A)({ applicationId: e?.application_id, onClose: a }),
        o = (0, tf.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: a }),
        c = (0, tp.d)(e?.application_id);
    if (null == o && null != e && (0, A.A)(e))
        return (0, i.jsx)(z.FD, {
            icon: tu.k,
            text: Q.intl.string(Q.t.RscU7I),
            fullWidth: r !== ta.d.MODAL_V2,
            onClick: (t) => {
                t.stopPropagation(),
                    null != c ? tx.Ay.launch({ applicationId: c }) : (l?.({ action: "PRESS_PLAY_BUTTON" }), s());
            },
        });
    if (null == o) return null;
    let { isJoining: u, handleJoinRequest: d, buttonCTA: x, tooltip: p, isEnabled: f, isEmbedded: _ } = o,
        m = r !== ta.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: m ? tr.Ij : void 0,
        children: (0, i.jsx)(tc.m, {
            text: p,
            asContainer: !f,
            children: (0, i.jsx)(z.FD, {
                icon: _ ? td.I : tA._,
                text: x,
                disabled: !f,
                loading: u,
                fullWidth: m,
                onClick: (t) => {
                    t.stopPropagation(), l?.({ action: _ ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), d();
                },
            }),
        }),
    });
}
var tT = e(141628);
function tE(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: l } = (0, _.Ay)(),
        { themeType: a } = (0, L.E)(),
        r = a === ta.d.MODAL_V2;
    return (0, i.jsx)(z.FD, {
        icon: () => (0, i.jsx)(tT.A, {}),
        text: Q.intl.string(Q.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [l] });
        },
    });
}
var tg = e(626584),
    tN = e(652215);
function tC(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, L.E)(),
        r = a === ta.d.MODAL_V2;
    return (0, b.A)(e, tN.jUm.INSTANCE)
        ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                  t.stopPropagation(),
                      l?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tg.A("UserActivityActions").log("notify", n.id, e);
              },
          })
        : null;
}
var tI = e(573648),
    ty = e(773952),
    tj = e(30370);
function tO(t) {
    let { platformType: n, icon: e, onAction: l } = t,
        { newestAnalyticsLocation: a } = (0, _.Ay)(),
        { themeType: r } = (0, L.E)(),
        s = r === ta.d.MODAL_V2;
    return (0, U.bG)([tj.A], () => null != tj.A.getAccount(null, n))
        ? null
        : (0, i.jsx)(z.FD, {
              icon: e,
              text: Q.intl.formatToPlainString(Q.t.XWSHTb, { platform: tI.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tN.fg2.XBOX;
                  l?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, ty.A)({ platformType: n, location: a });
              },
          });
}
var tS = e(378570),
    th = e(790535),
    tP = e(233993),
    tv = e(734057),
    tL = e(576705),
    tR = e(977997);
function tU(t) {
    let { activity: n, onAction: e, onClose: l } = t,
        { themeType: a } = (0, L.E)(),
        r = a === ta.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, j.UW)(n) ?? {},
        c = (0, U.bG)([tR.A], () => null != s && tR.A.isInChannel(s), [s]),
        u = (0, U.bG)([tv.A], () => (null != s ? tv.A.getChannel(s) : null), [s]),
        d = (0, U.bG)([tL.A], () => null != u && tL.A.can(tP.Gk, u), [u]);
    return (0, j.Cy)(n) && d && null != o && null != s
        ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: (t) => {
                  t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      th.CH(o, s),
                      (0, tS.iN)(s),
                      l?.();
              },
          })
        : null;
}
var tb = e(908289);
function tM(t) {
    let { activity: n, onAction: e } = t,
        { themeType: l } = (0, L.E)(),
        a = l === ta.d.MODAL_V2,
        r = (0, tb.A)(n);
    return (0, p.A)(n) && null != r
        ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var tD = e(985629);
function tG(t) {
    let { user: n, activity: e, onAction: l, onClose: a, application: r, containerClassName: s } = t,
        { themeType: o } = (0, L.E)(),
        c = (0, U.bG)([F.default], () => F.default.getId() === n.id),
        u = (0, W.J)(r),
        d = (0, Z.o)(e?.application_id ?? r?.id),
        { analyticsLocations: x } = (0, _.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        m = (0, Y.A)("user_profile_activity_buttons", e?.application_id),
        { fetched: T, canStartAuthorization: E, hasAlreadyLinked: g, startAuthorization: N } = (0, K.RD)(r),
        C = o === ta.d.MODAL || o === ta.d.MODAL_V2,
        I = o === ta.d.POPOUT,
        y = (() => {
            if (c)
                return I && e?.type === tN.$pd.PLAYING && r?.id != null
                    ? (0, i.jsx)(q, { applicationId: r.id, onAction: l, onClose: a })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return (0, i.jsx)(to, { user: n, activity: e, onAction: l });
            if (!d && u && null != r && !C)
                return (0, i.jsx)(tD.A, { application: r, onAction: l, onClose: a, analyticsLocations: x });
            if ((0, A.A)(e) || ((0, D.Ay)(e) && d))
                return (0, i.jsx)(tm, { user: n, activity: e, onAction: l, onClose: a });
            if (T && E && !g) return (0, i.jsx)(tE, { startAuthorization: N, onAction: l });
            if (m.length > 0)
                return (0, i.jsx)(J.A, {
                    distributorCTAConfigs: m,
                    fullWidth: o !== ta.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: l,
                    onClose: a,
                });
            if (!(0, M.A)(e)) {
                if ((0, V.A)(e))
                    return (0, i.jsx)(tO, { platformType: tN.fg2.XBOX, icon: () => (0, i.jsx)(tn.A, {}), onAction: l });
                if ((0, G.A)(e))
                    return (0, i.jsx)(tO, {
                        platformType: tN.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(tt.A, {}),
                        onAction: l,
                    });
            }
            return (0, p.A)(e)
                ? (0, i.jsx)(tM, { activity: e, onAction: l })
                : (0, D._C)(e)
                  ? (0, i.jsx)(tm, { user: n, activity: e, onAction: l, onClose: a })
                  : (0, b.A)(e, tN.jUm.INSTANCE)
                    ? (0, i.jsx)(tC, { user: n, activity: e, onAction: l })
                    : (0, j.Cy)(e)
                      ? (0, i.jsx)(tU, { activity: e, onAction: l, onClose: a })
                      : null;
        })();
    return null == y ? null : (0, i.jsx)("div", { className: s, children: y });
}
var tV = e(282197),
    tY = e(624951),
    tW = e(584904),
    tk = e(351638),
    tB = e(531648),
    tH = e(910607),
    tw = e(753713),
    tz = e(269587),
    tF = e(409626),
    tX = e(692969),
    t$ = e(534465),
    tQ = e(360469);
function tq(t) {
    let {
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            voiceGuild: U,
            voiceChannel: b,
            className: M,
            onClose: D,
            appContext: G,
        } = t,
        V = (0, C.GV)(),
        Y = (0, C.GV)(),
        { analyticsLocations: W } = (0, _.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: k } = (0, L.E)(),
        B = (0, N.A)({ activity: l, user: n }),
        H = (0, O.A)({ display: "live", user: n, activity: l, entry: B, analyticsLocations: W }),
        w = (0, S.A)({ userId: n.id, onAction: H }),
        z = (0, m.Ay)(b),
        F = (0, h.A)(l),
        X = null != F.text && "" !== F.text,
        { largeImage: q, smallImage: J } = (0, T.XN)(l, a),
        K = (function (t) {
            let { location: n, user: e, currentUser: i, activity: l, application: a, entry: r, onClose: s } = t,
                o = (0, tX.A)({
                    location: n,
                    source: tF.Ob.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, t$.UE)({ user: e, activity: l, entry: r }),
                }),
                c = (0, t_.A)({ applicationId: a?.id, onClose: s }),
                u = (0, A.A)(l);
            return u && null != a
                ? c
                : !u && (0, x.A)(l)
                  ? o
                  : (0, d.A)(l) && e.id !== i.id
                    ? () => ts({ activity: l, user: e, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            entry: B,
            onClose: D,
        }),
        Z = () =>
            (0, p.A)(l) && null != b
                ? (0, i.jsxs)("div", {
                      className: tr.FH,
                      children: [
                          (0, i.jsx)(o.H, { size: "xxs", color: c.A.colors.TEXT_DEFAULT, className: tr.Ow }),
                          (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: z, id: V }),
                      ],
                  })
                : (0, x.A)(l) || (0, j.Cy)(l)
                  ? (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.name, id: V })
                  : null != l.details
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.details, id: V }),
                      })
                    : (0, i.jsx)(tB.Q, { variant: "heading-sm/semibold", text: l.name, id: V }),
        tt = () =>
            l.type === tN.$pd.HANG_STATUS
                ? null
                : (0, p.A)(l) && null != U
                  ? (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: Q.intl.formatToPlainString(Q.t["hq/Qze"], { guildName: U.name }),
                        onClick: () => {
                            (0, y.u)(U.id), H({ action: "OPEN_VOICE_GUILD" }), D?.();
                        },
                    })
                  : (0, x.A)(l)
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.details }),
                      })
                    : (0, j.Cy)(l)
                      ? (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l?.assets?.small_text })
                      : (0, i.jsx)(E.O, {
                            href: l.state_url,
                            children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                        }),
        tn = () => {
            if (l.type === tN.$pd.WATCHING) return null;
            if ((0, x.A)(l)) return te();
            if ((0, j.Cy)(l) && l.party?.size != null && l.party?.size.length >= 2) {
                let t = Q.intl.formatToPlainString(Q.t["JC/3xw"], {
                    numSpeakers: l.party?.size[0],
                    numListeners: l.party?.size[1] - l.party?.size[0],
                });
                return (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: t });
            }
            return l.assets?.large_text != null
                ? (0, i.jsx)(E.O, {
                      href: l.assets?.large_url,
                      children: (0, i.jsx)(tB.A, { text: l.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        te = () =>
            l.party?.size == null && l.application_id === tQ.I4
                ? (0, i.jsxs)("div", {
                      className: tr.CI,
                      children: [
                          (0, i.jsx)(E.O, {
                              href: l.state_url,
                              children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                          }),
                          (0, i.jsx)(tB.A, {
                              variant: "text-xs/normal",
                              text: Q.intl.formatToPlainString(Q.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, A.A)(l) && l.party?.size != null && l.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: tr.CI,
                        children: [
                            (0, i.jsx)(E.O, {
                                href: l.state_url,
                                children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                            }),
                            (0, i.jsx)(tB.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === l.party.size[1]
                                        ? Q.intl.formatToPlainString(Q.t.IM4J4e, { count: l.party.size[0] })
                                        : Q.intl.formatToPlainString(Q.t["u//9By"], {
                                              count: l.party.size[0],
                                              max: l.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == l.party
                    ? (0, i.jsx)(E.O, {
                          href: l.state_url,
                          children: (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: l.state }),
                      })
                    : null,
        ti = () =>
            (0, i.jsx)(tG, {
                containerClassName: tr.o1,
                activity: l,
                user: n,
                onAction: H,
                onClose: D,
                application: a,
            });
    return (0, i.jsx)(_.f5, {
        value: W,
        children: (0, i.jsxs)(tW.A, {
            ref: w,
            className: r()(tr.Nr, M),
            onAction: H,
            onClose: D,
            "aria-labelledby": X ? `${Y} ${V}` : V,
            children: [
                (0, i.jsx)(tk.A, {
                    textId: Y,
                    ...F,
                    contextMenu: (0, i.jsx)(tz.A, {
                        display: "live",
                        user: n,
                        activity: l,
                        entry: B,
                        onClose: D,
                        appContext: G,
                    }),
                }),
                (0, i.jsx)(I.A, {
                    applicationId: a?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, a;
                        return (0, i.jsxs)("div", {
                            className: tr.rf,
                            ref: t,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: tr.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, d.A)(l) ? "crunchyroll" : "default"),
                                            (a = k === ta.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60),
                                            null == K
                                                ? (0, i.jsx)(g.d, {
                                                      image: q,
                                                      smallImage: J,
                                                      size: a,
                                                      aspectRatio: e,
                                                      className: tr.Sl,
                                                  })
                                                : (0, i.jsx)(g.d, {
                                                      image: q,
                                                      smallImage: J,
                                                      size: a,
                                                      className: tr.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          H({ action: "PRESS_IMAGE" }), K(t);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: tr.zH,
                                            children: [
                                                null == K
                                                    ? (0, i.jsxs)("div", { children: [Z(), tt(), tn()] })
                                                    : (0, i.jsxs)(u.D, {
                                                          className: tr.sd,
                                                          onClick: (t) => {
                                                              H({ action: "PRESS_TEXT" }), K(t);
                                                          },
                                                          children: [Z(), tt(), tn()],
                                                      }),
                                                !n.bot && (0, i.jsx)(tV.A, { user: n, activity: l, className: tr.jp }),
                                                (() => {
                                                    if (!(0, P.A)(l)) return null;
                                                    let { start: t, end: n } = l.timestamps;
                                                    return (0, i.jsx)(tw.A, { start: t, end: n });
                                                })(),
                                                k === ta.d.MODAL_V2 && ti(),
                                            ],
                                        }),
                                        k === ta.d.MODAL && ti(),
                                    ],
                                }),
                                null == U || null == b
                                    ? null
                                    : (0, i.jsx)(tH.A, { user: n, guild: U, channel: b, onAction: H, onClose: D }),
                            ],
                        });
                    },
                }),
                k !== ta.d.MODAL &&
                    k !== ta.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ti(),
                            (0, i.jsx)(R.A, {
                                className: tr.AB,
                                userId: n.id,
                                activityApplication: a,
                                onClickViewMore: (t) => {
                                    t.stopPropagation(),
                                        H({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        D?.(),
                                        (0, v.openUserProfileModal)({ userId: n.id, tabSection: $.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(tY.A, { applicationId: a?.id, onAction: H, onClose: D, activity: l }),
            ],
        }),
    });
}
