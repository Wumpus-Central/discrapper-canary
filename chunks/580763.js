e.d(n, { A: () => tq });
var l = e(477900),
    i = e(582128),
    r = e(503698),
    a = e.n(r),
    s = e(696292),
    o = e(983851),
    c = e(661531),
    u = e(939249),
    d = e(541806),
    A = e(765379),
    x = e(672979),
    p = e(960076),
    f = e(793574),
    m = e(688810),
    _ = e(47167),
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
    h = e(160376),
    v = e(53257),
    P = e(402860),
    R = e(939496),
    L = e(964195),
    U = e(17928),
    b = e(55730),
    M = e(682261),
    D = e(874546),
    G = e(141639),
    V = e(61330),
    Y = e(544441),
    k = e(146779),
    W = e(540185),
    H = e(569926),
    B = e(289173),
    z = e(735321),
    $ = e(999291),
    w = e(993401),
    F = e(280450),
    X = e(518477),
    Q = e(375708);
function q(t) {
    let { application: n, onAction: e, onClose: r } = t,
        a = (0, U.bG)([F.default], () => F.default.getId()),
        s = (0, $.Ay)(a, null),
        o = n.getCanonicalGameId(),
        { data: c } = (0, H.I)(o),
        u = i.useMemo(
            () =>
                !(
                    null == c ||
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof B.Yy && t.type === W.x.CURRENT_GAMES && t.games?.some((t) => t.gameId === o),
                    )
                ) && (0, z.XX)(c),
            [o, s?.widgets, c],
        ),
        d = i.useCallback(
            (t) => {
                null != o &&
                    (t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, z.ew)({ widgetType: W.x.CURRENT_GAMES, game: { gameId: o }, ignoreMaxGames: !0 }),
                    (0, P.openUserProfileModal)({
                        userId: a,
                        tabSection: X.RP.WIDGETS,
                        scrollTarget: W.x.CURRENT_GAMES,
                    }),
                    r?.());
            },
            [o, a, e, r],
        );
    return u ? (0, l.jsx)(w.FD, { text: Q.intl.string(Q.t.BjYzmC), onClick: d, fullWidth: !0 }) : null;
}
var K = e(601007),
    J = e(206828),
    Z = e(308335),
    tt = e(790381),
    tn = e(266080),
    te = e(729937),
    tl = e(123917),
    ti = e(998218),
    tr = e(996988),
    ta = e(260155);
async function ts(t) {
    let { activity: n, user: e, index: l } = t;
    try {
        let t = await (0, te.yb)(n, e.id);
        if (t.button_urls.length <= l) return;
        let i = t.button_urls[l];
        if ("string" != typeof i) return;
        let r = ti.A.safeParseWithQuery(i);
        if (r?.protocol == null || r?.hostname == null) return;
        (0, tl.h)({ href: ti.A.format(r), trusted: !1 });
    } catch (t) {}
}
function to(t) {
    let { user: n, activity: e, onAction: i } = t,
        { themeType: r } = (0, R.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let a = (0, d.A)(e);
    return r === tr.d.MODAL_V2
        ? (0, l.jsx)("div", {
              className: ta.fO,
              children: e.buttons.map((t, r) =>
                  (0, l.jsx)(
                      w.FD,
                      {
                          text: a ? Q.intl.string(Q.t.I6JG46) : t,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: n, activity: e, index: r }));
                          },
                      },
                      r,
                  ),
              ),
          })
        : (0, l.jsx)("div", {
              className: ta.fO,
              children: e.buttons.map((t, r) =>
                  (0, l.jsx)(
                      w.FD,
                      {
                          text: a ? Q.intl.string(Q.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: n, activity: e, index: r }));
                          },
                      },
                      r,
                  ),
              ),
          });
}
var tc = e(323384),
    tu = e(866665),
    td = e(808666),
    tA = e(687966),
    tx = e(780907),
    tp = e(928550),
    tf = e(102853),
    tm = e(695311);
function t_(t) {
    let { user: n, activity: e, onAction: i, onClose: r } = t,
        { themeType: a } = (0, R.E)(),
        s = (0, tm.A)({ applicationId: e?.application_id, onClose: r }),
        o = (0, tf.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: r }),
        c = (0, tp.dB)(e?.application_id);
    if (null == o && null != e && (0, A.A)(e))
        return (0, l.jsx)(w.FD, {
            icon: tc.k,
            text: Q.intl.string(Q.t.RscU7I),
            fullWidth: a !== tr.d.MODAL_V2,
            onClick: (t) => {
                (t.stopPropagation(),
                    null != c ? tx.Ay.launch({ applicationId: c }) : (i?.({ action: "PRESS_PLAY_BUTTON" }), s()));
            },
        });
    if (null == o) return null;
    let { isJoining: u, handleJoinRequest: d, buttonCTA: x, tooltip: p, isEnabled: f, isEmbedded: m } = o,
        _ = a !== tr.d.MODAL_V2;
    return (0, l.jsx)("div", {
        className: _ ? ta.Ij : void 0,
        children: (0, l.jsx)(tu.m, {
            text: p,
            asContainer: !f,
            children: (0, l.jsx)(w.FD, {
                icon: m ? td.I : tA.GameControllerIcon,
                text: x,
                disabled: !f,
                loading: u,
                fullWidth: _,
                onClick: (t) => {
                    (t.stopPropagation(), i?.({ action: m ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), d());
                },
            }),
        }),
    });
}
var tT = e(141628);
function tE(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: i } = (0, m.Ay)(),
        { themeType: r } = (0, R.E)(),
        a = r === tr.d.MODAL_V2;
    return (0, l.jsx)(w.FD, {
        icon: () => (0, l.jsx)(tT.A, {}),
        text: Q.intl.string(Q.t.sbdnpw),
        fullWidth: !a,
        onClick: (t) => {
            (t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [i] }));
        },
    });
}
var tg = e(626584),
    tN = e(652215);
function tC(t) {
    let { user: n, activity: e, onAction: i } = t,
        { themeType: r } = (0, R.E)(),
        a = r === tr.d.MODAL_V2;
    return (0, b.A)(e, tN.jUm.INSTANCE)
        ? (0, l.jsx)(w.FD, {
              text: Q.intl.string(Q.t.vwl1PK),
              fullWidth: !a,
              onClick: (t) => {
                  (t.stopPropagation(),
                      i?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tg.A("UserActivityActions").log("notify", n.id, e));
              },
          })
        : null;
}
var tI = e(573648),
    ty = e(968309),
    tj = e(30370);
function tO(t) {
    let { platformType: n, icon: e, onAction: i } = t,
        { newestAnalyticsLocation: r } = (0, m.Ay)(),
        { themeType: a } = (0, R.E)(),
        s = a === tr.d.MODAL_V2;
    return (0, U.bG)([tj.A], () => null != tj.A.getAccount(null, n))
        ? null
        : (0, l.jsx)(w.FD, {
              icon: e,
              text: Q.intl.formatToPlainString(Q.t.XWSHTb, { platform: tI.A.get(n).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === tN.fg2.XBOX;
                  (i?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, ty.A)({ platformType: n, location: r }));
              },
          });
}
var tS = e(890615),
    th = e(378570),
    tv = e(790535),
    tP = e(734057),
    tR = e(576705),
    tL = e(977997);
function tU(t) {
    let { activity: n, onAction: e, onClose: i } = t,
        { themeType: r } = (0, R.E)(),
        a = r === tr.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, j.UW)(n) ?? {},
        c = (0, U.bG)([tL.A], () => null != s && tL.A.isInChannel(s), [s]),
        u = (0, U.bG)(
            [tP.A, tR.A],
            () => {
                let t = tP.A.getBasicChannel(s);
                return null != t && (0, tS.A)(t, tR.A);
            },
            [s],
        );
    return (0, j.Cy)(n) && u && null != o && null != s
        ? (0, l.jsx)(w.FD, {
              text: Q.intl.string(Q.t.ZYO5OK),
              fullWidth: !a,
              disabled: c,
              onClick: function (t) {
                  null != o &&
                      null != s &&
                      (t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tv.CH(o, s),
                      (0, th.iN)(s),
                      i?.());
              },
          })
        : null;
}
var tb = e(908289);
function tM(t) {
    let { activity: n, onAction: e } = t,
        { themeType: i } = (0, R.E)(),
        r = i === tr.d.MODAL_V2,
        a = (0, tb.A)(n);
    return (0, p.A)(n) && null != a
        ? (0, l.jsx)(w.FD, {
              text: Q.intl.string(Q.t.I6JG46),
              fullWidth: !r,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(a)),
          })
        : null;
}
var tD = e(985629);
function tG(t) {
    let { user: n, activity: e, onAction: i, onClose: r, application: a, containerClassName: s } = t,
        { themeType: o } = (0, R.E)(),
        c = (0, U.bG)([F.default], () => F.default.getId() === n.id),
        u = (0, k.JC)(a),
        d = (0, Z.o)(e?.application_id ?? a?.id) || (0, b.A)(e, tN.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: x } = (0, m.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        _ = (0, Y.A)(e?.application_id),
        { fetched: T, canStartAuthorization: E, hasAlreadyLinked: g, startAuthorization: N } = (0, J.RD)(a),
        C = o === tr.d.MODAL || o === tr.d.MODAL_V2,
        I = o === tr.d.POPOUT,
        y = o === tr.d.MODAL_V2 ? ta.g6 : ta.Zu,
        O =
            _.length > 0
                ? (0, l.jsx)(K.A, {
                      distributorCTAConfigs: _,
                      applicationId: e?.application_id ?? "",
                      analyticsLocations: x,
                      buttonVariant: "secondary",
                      fullWidth: o !== tr.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: i,
                      onClose: r,
                  })
                : null,
        S = (function () {
            if (c)
                return I && e?.type === tN.$pd.PLAYING && null != a
                    ? (0, l.jsx)(q, { application: a, onAction: i, onClose: r })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return null != O
                    ? (0, l.jsxs)("div", {
                          className: y,
                          children: [(0, l.jsx)(to, { user: n, activity: e, onAction: i }), O],
                      })
                    : (0, l.jsx)(to, { user: n, activity: e, onAction: i });
            if (!d && u && null != a && !C) {
                let t = (0, l.jsx)(tD.A, { application: a, onAction: i, onClose: r, analyticsLocations: x });
                return null != O ? (0, l.jsxs)("div", { className: y, children: [t, O] }) : t;
            }
            if ((0, A.A)(e) || ((0, D.Ay)(e) && d)) {
                let t = (0, l.jsx)(t_, { user: n, activity: e, onAction: i, onClose: r });
                return null != O ? (0, l.jsxs)("div", { className: y, children: [t, O] }) : t;
            }
            if (T && E && !g) {
                let t = (0, l.jsx)(tE, { startAuthorization: N, onAction: i });
                return null != O ? (0, l.jsxs)("div", { className: y, children: [t, O] }) : t;
            }
            if (null != O) return O;
            if (!(0, M.A)(e)) {
                if ((0, V.A)(e))
                    return (0, l.jsx)(tO, { platformType: tN.fg2.XBOX, icon: () => (0, l.jsx)(tn.A, {}), onAction: i });
                if ((0, G.A)(e))
                    return (0, l.jsx)(tO, {
                        platformType: tN.fg2.PLAYSTATION,
                        icon: () => (0, l.jsx)(tt.A, {}),
                        onAction: i,
                    });
            }
            return (0, p.A)(e)
                ? (0, l.jsx)(tM, { activity: e, onAction: i })
                : (0, D.Ay)(e)
                  ? (0, l.jsx)(t_, { user: n, activity: e, onAction: i, onClose: r })
                  : (0, b.A)(e, tN.jUm.INSTANCE)
                    ? (0, l.jsx)(tC, { user: n, activity: e, onAction: i })
                    : (0, j.Cy)(e)
                      ? (0, l.jsx)(tU, { activity: e, onAction: i, onClose: r })
                      : null;
        })();
    return null == S ? null : (0, l.jsx)("div", { className: s, children: S });
}
var tV = e(282197),
    tY = e(624951),
    tk = e(584904),
    tW = e(351638),
    tH = e(531648),
    tB = e(910607),
    tz = e(753713),
    t$ = e(269587),
    tw = e(409626),
    tF = e(692969),
    tX = e(534465),
    tQ = e(818023);
function tq(t) {
    let {
            user: n,
            currentUser: e,
            activity: i,
            application: r,
            voiceGuild: U,
            voiceChannel: b,
            className: M,
            onClose: D,
            appContext: G,
        } = t,
        V = (0, C.GV)(),
        Y = (0, C.GV)(),
        { analyticsLocations: k } = (0, m.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, R.E)(),
        H = (0, N.A)({ activity: i, user: n }),
        B = (0, O.A)({ display: "live", user: n, activity: i, entry: H, analyticsLocations: k }),
        z = (0, S.A)({ userId: n.id, onAction: B }),
        $ = (0, _.Ay)(b),
        w = (0, h.A)(i),
        F = null != w.text && "" !== w.text,
        { largeImage: q, smallImage: K } = (0, T.XN)(i, r, "user_profile_activity_card"),
        J = (function (t) {
            let { location: n, user: e, currentUser: l, activity: i, application: r, entry: a, onClose: s } = t,
                o = (0, tF.A)({
                    location: n,
                    source: tw.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, tX.UE)({ user: e, activity: i, entry: a }),
                }),
                c = (0, tm.A)({ applicationId: r?.id, onClose: s }),
                u = (0, A.A)(i);
            return u && null != r
                ? c
                : !u && (0, x.A)(i)
                  ? o
                  : (0, d.A)(i) && e.id !== l.id
                    ? () => ts({ activity: i, user: e, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: i,
            application: r,
            entry: H,
            onClose: D,
        });
    function Z() {
        return (0, p.A)(i) && null != b
            ? (0, l.jsxs)("div", {
                  className: ta.FH,
                  children: [
                      (0, l.jsx)(o.H, { size: "xxs", color: c.A.colors.TEXT_DEFAULT, className: ta.Ow }),
                      (0, l.jsx)(tH.Q, { variant: "heading-sm/semibold", text: $, id: V }),
                  ],
              })
            : (0, x.A)(i) || (0, j.Cy)(i)
              ? (0, l.jsx)(tH.Q, { variant: "heading-sm/semibold", text: i.name, id: V })
              : null != i.details
                ? (0, l.jsx)(E.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tH.Q, { variant: "heading-sm/semibold", text: i.details, id: V }),
                  })
                : (0, l.jsx)(tH.Q, { variant: "heading-sm/semibold", text: i.name, id: V });
    }
    function tt() {
        return i.type === tN.$pd.HANG_STATUS
            ? null
            : (0, p.A)(i) && null != U
              ? (0, l.jsx)(tH.A, {
                    variant: "text-xs/normal",
                    text: Q.intl.formatToPlainString(Q.t["hq/Qze"], { guildName: U.name }),
                    onClick: () => {
                        ((0, y.u)(U.id), B({ action: "OPEN_VOICE_GUILD" }), D?.());
                    },
                })
              : (0, x.A)(i)
                ? (0, l.jsx)(E.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: i.details }),
                  })
                : (0, j.Cy)(i)
                  ? (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: i?.assets?.small_text })
                  : (0, l.jsx)(E.O, {
                        href: i.state_url,
                        children: (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: i.state }),
                    });
    }
    function tn() {
        if (i.type === tN.$pd.WATCHING) return null;
        if ((0, x.A)(i))
            return i.party?.size == null && i.application_id === tQ.I4
                ? (0, l.jsxs)("div", {
                      className: ta.CI,
                      children: [
                          (0, l.jsx)(E.O, {
                              href: i.state_url,
                              children: (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: i.state }),
                          }),
                          (0, l.jsx)(tH.A, {
                              variant: "text-xs/normal",
                              text: Q.intl.formatToPlainString(Q.t["u//9By"], {
                                  count: "0",
                                  max: r?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, A.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, l.jsxs)("div", {
                        className: ta.CI,
                        children: [
                            (0, l.jsx)(E.O, {
                                href: i.state_url,
                                children: (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: i.state }),
                            }),
                            (0, l.jsx)(tH.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? Q.intl.formatToPlainString(Q.t.IM4J4e, { count: i.party.size[0] })
                                        : Q.intl.formatToPlainString(Q.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, l.jsx)(E.O, {
                          href: i.state_url,
                          children: (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: i.state }),
                      })
                    : null;
        if ((0, j.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
            let t = Q.intl.formatToPlainString(Q.t["JC/3xw"], {
                numSpeakers: i.party?.size[0],
                numListeners: i.party?.size[1] - i.party?.size[0],
            });
            return (0, l.jsx)(tH.A, { variant: "text-xs/normal", text: t });
        }
        return i.assets?.large_text != null
            ? (0, l.jsx)(E.O, {
                  href: i.assets?.large_url,
                  children: (0, l.jsx)(tH.A, { text: i.assets?.large_text, variant: "text-xs/normal" }),
              })
            : null;
    }
    function te() {
        return (0, l.jsx)(tG, {
            containerClassName: ta.o1,
            activity: i,
            user: n,
            onAction: B,
            onClose: D,
            application: r,
        });
    }
    return (0, l.jsx)(m.f5, {
        value: k,
        children: (0, l.jsxs)(tk.A, {
            ref: z,
            className: a()(ta.Nr, M),
            onAction: B,
            onClose: D,
            "aria-labelledby": F ? `${Y} ${V}` : V,
            children: [
                (0, l.jsx)(tW.A, {
                    textId: Y,
                    ...w,
                    contextMenu: (0, l.jsx)(t$.A, {
                        display: "live",
                        user: n,
                        activity: i,
                        entry: H,
                        onClose: D,
                        appContext: G,
                    }),
                }),
                (0, l.jsx)(I.A, {
                    applicationId: r?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, r;
                        return (0, l.jsxs)("div", {
                            className: ta.rf,
                            ref: t,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ta.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, d.A)(i) ? "crunchyroll" : "default"),
                                            (r = W === tr.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60),
                                            null == J
                                                ? (0, l.jsx)(g.d, {
                                                      image: q,
                                                      smallImage: K,
                                                      size: r,
                                                      aspectRatio: e,
                                                      className: ta.Sl,
                                                  })
                                                : (0, l.jsx)(g.d, {
                                                      image: q,
                                                      smallImage: K,
                                                      size: r,
                                                      className: ta.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          (B({ action: "PRESS_IMAGE" }), J(t));
                                                      },
                                                  })),
                                        (0, l.jsxs)("div", {
                                            className: ta.zH,
                                            children: [
                                                null == J
                                                    ? (0, l.jsxs)("div", { children: [Z(), tt(), tn()] })
                                                    : (0, l.jsxs)(u.D, {
                                                          className: ta.sd,
                                                          onClick: (t) => {
                                                              (B({ action: "PRESS_TEXT" }), J(t));
                                                          },
                                                          children: [Z(), tt(), tn()],
                                                      }),
                                                !n.bot && (0, l.jsx)(tV.A, { user: n, activity: i, className: ta.jp }),
                                                (function () {
                                                    if (!(0, v.A)(i)) return null;
                                                    let { start: t, end: n } = i.timestamps;
                                                    return (0, l.jsx)(tz.A, { start: t, end: n });
                                                })(),
                                                W === tr.d.MODAL_V2 && te(),
                                            ],
                                        }),
                                        W === tr.d.MODAL && te(),
                                    ],
                                }),
                                null == U || null == b
                                    ? null
                                    : (0, l.jsx)(tB.A, { user: n, guild: U, channel: b, onAction: B, onClose: D }),
                            ],
                        });
                    },
                }),
                W !== tr.d.MODAL &&
                    W !== tr.d.MODAL_V2 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            te(),
                            (0, l.jsx)(L.A, {
                                className: ta.AB,
                                userId: n.id,
                                activityApplication: r,
                                onClickViewMore: (t) => {
                                    (t.stopPropagation(),
                                        B({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        D?.(),
                                        (0, P.openUserProfileModal)({ userId: n.id, tabSection: X.RP.WIDGETS }));
                                },
                            }),
                        ],
                    }),
                (0, l.jsx)(tY.A, { applicationId: r?.id, onAction: B, onClose: D, activity: i }),
            ],
        }),
    });
}
