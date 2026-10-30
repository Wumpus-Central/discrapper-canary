n.d(e, { A: () => t0 });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(350835),
    o = n(696292),
    c = n(983851),
    u = n(661531),
    d = n(939249),
    A = n(541806),
    f = n(765379),
    g = n(672979),
    m = n(960076),
    x = n(793574),
    p = n(688810),
    _ = n(47167),
    I = n(774926),
    N = n(662010),
    E = n(623671),
    T = n(365185),
    h = n(915089),
    C = n(932413),
    S = n(345942),
    v = n(82149),
    y = n(92240),
    O = n(257367),
    j = n(160376),
    P = n(53257),
    L = n(402860),
    R = n(939496),
    b = n(964195),
    M = n(17928),
    U = n(55730),
    G = n(682261),
    D = n(874546),
    Y = n(141639),
    V = n(61330),
    w = n(544441),
    k = n(359549),
    W = n(540185),
    B = n(454908),
    H = n(289173),
    z = n(735321),
    X = n(999291),
    $ = n(993401),
    F = n(280450),
    Q = n(518477),
    J = n(105292);
function q(t) {
    let { application: e, onAction: n, onClose: a } = t,
        r = (0, M.bG)([F.default], () => F.default.getId()),
        s = (0, X.Ay)(r, null),
        o = e.getCanonicalGameId(),
        { data: c } = (0, B.I)(o),
        u = i.useMemo(
            () =>
                !(
                    null == c ||
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof H.Yy && t.type === W.x.CURRENT_GAMES && t.games?.some((t) => t.gameId === o),
                    )
                ) && (0, z.XX)(c),
            [o, s?.widgets, c],
        ),
        d = i.useCallback(
            (t) => {
                null != o &&
                    (t.stopPropagation(),
                    n?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, z.ew)({ widgetType: W.x.CURRENT_GAMES, game: { gameId: o }, ignoreMaxGames: !0 }),
                    (0, L.openUserProfileModal)({
                        userId: r,
                        tabSection: Q.RP.WIDGETS,
                        scrollTarget: W.x.CURRENT_GAMES,
                    }),
                    a?.());
            },
            [o, r, n, a],
        );
    return u ? (0, l.jsx)($.FD, { text: J.intl.string(J.t.BjYzmC), onClick: d, fullWidth: !0 }) : null;
}
var Z = n(601007),
    K = n(206828),
    tt = n(308335),
    te = n(790381),
    tn = n(266080),
    tl = n(729937),
    ti = n(123917),
    ta = n(998218),
    tr = n(996988),
    ts = n(260155);
async function to(t) {
    let { activity: e, user: n, index: l } = t;
    try {
        let t = await (0, tl.yb)(e, n.id);
        if (t.button_urls.length <= l) return;
        let i = t.button_urls[l];
        if ("string" != typeof i) return;
        let a = ta.A.safeParseWithQuery(i);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, ti.h)({ href: ta.A.format(a), trusted: !1 });
    } catch (t) {}
}
function tc(t) {
    let { user: e, activity: n, onAction: i } = t,
        { themeType: a } = (0, R.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let r = (0, A.A)(n);
    return a === tr.d.MODAL_V2
        ? (0, l.jsx)("div", {
              className: ts.fO,
              children: n.buttons.map((t, a) =>
                  (0, l.jsx)(
                      $.FD,
                      {
                          text: r ? J.intl.string(J.t.I6JG46) : t,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  to({ user: e, activity: n, index: a }));
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, l.jsx)("div", {
              className: ts.fO,
              children: n.buttons.map((t, a) =>
                  (0, l.jsx)(
                      $.FD,
                      {
                          text: r ? J.intl.string(J.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  to({ user: e, activity: n, index: a }));
                          },
                      },
                      a,
                  ),
              ),
          });
}
var tu = n(323384),
    td = n(866665),
    tA = n(808666),
    tf = n(687966),
    tg = n(452295),
    tm = n(429913),
    tx = n(568034),
    tp = n(25451),
    t_ = n(928550),
    tI = n(102853),
    tN = n(695311);
function tE(t) {
    let { user: e, activity: n, onAction: i, onClose: a } = t,
        { themeType: r } = (0, R.E)(),
        s = (0, tN.A)({ applicationId: n?.application_id, onClose: a }),
        o = (0, tI.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: e, onClose: a }),
        c = (0, t_.dB)(n?.application_id),
        u = (0, tm.h)(n?.application_id);
    if (null == o && null != n && (0, f.A)(n))
        return (0, l.jsx)($.FD, {
            icon: tu.k,
            text: J.intl.string(J.t.RscU7I),
            fullWidth: r !== tr.d.MODAL_V2,
            onClick: (t) => {
                (t.stopPropagation(),
                    null != u && (0, tp.X)(u)
                        ? (i?.({ action: "PRESS_PLAY_BUTTON" }),
                          a?.(),
                          (0, tx.A)({ application: u, userId: e.id, activity: n }))
                        : null != c
                          ? tg.A.launchGame({ applicationId: c })
                          : (i?.({ action: "PRESS_PLAY_BUTTON" }), s()));
            },
        });
    if (null == o) return null;
    let { isJoining: d, handleJoinRequest: A, buttonCTA: g, tooltip: m, isEnabled: x, isEmbedded: p } = o,
        _ = r !== tr.d.MODAL_V2;
    return (0, l.jsx)("div", {
        className: _ ? ts.Ij : void 0,
        children: (0, l.jsx)(td.m, {
            text: m,
            asContainer: !x,
            children: (0, l.jsx)($.FD, {
                icon: p ? tA.I : tf.GameControllerIcon,
                text: g,
                disabled: !x,
                loading: d,
                fullWidth: _,
                onClick: (t) => {
                    (t.stopPropagation(), i?.({ action: p ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), A());
                },
            }),
        }),
    });
}
var tT = n(141628);
function th(t) {
    let { startAuthorization: e, onAction: n } = t,
        { newestAnalyticsLocation: i } = (0, p.Ay)(),
        { themeType: a } = (0, R.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, l.jsx)($.FD, {
        icon: () => (0, l.jsx)(tT.A, {}),
        text: J.intl.string(J.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            (t.stopPropagation(), n?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), e({ analyticsLocations: [i] }));
        },
    });
}
var tC = n(626584),
    tS = n(652215);
function tv(t) {
    let { user: e, activity: n, onAction: i } = t,
        { themeType: a } = (0, R.E)(),
        r = a === tr.d.MODAL_V2;
    return (0, U.A)(n, tS.jUm.INSTANCE)
        ? (0, l.jsx)($.FD, {
              text: J.intl.string(J.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                  (t.stopPropagation(),
                      i?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tC.A("UserActivityActions").log("notify", e.id, n));
              },
          })
        : null;
}
var ty = n(573648),
    tO = n(968309),
    tj = n(30370);
function tP(t) {
    let { platformType: e, icon: n, onAction: i } = t,
        { newestAnalyticsLocation: a } = (0, p.Ay)(),
        { themeType: r } = (0, R.E)(),
        s = r === tr.d.MODAL_V2;
    return (0, M.bG)([tj.A], () => null != tj.A.getAccount(null, e))
        ? null
        : (0, l.jsx)($.FD, {
              icon: n,
              text: J.intl.formatToPlainString(J.t.XWSHTb, { platform: ty.A.get(e).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let n = e === tS.fg2.XBOX;
                  (i?.({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tO.A)({ platformType: e, location: a }));
              },
          });
}
var tL = n(890615),
    tR = n(378570),
    tb = n(747376),
    tM = n(734057),
    tU = n(576705),
    tG = n(977997);
function tD(t) {
    let { activity: e, onAction: n, onClose: i } = t,
        { themeType: a } = (0, R.E)(),
        r = a === tr.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, v.UW)(e) ?? {},
        c = (0, M.bG)([tG.A], () => null != s && tG.A.isInChannel(s), [s]),
        u = (0, M.bG)(
            [tM.A, tU.A],
            () => {
                let t = tM.A.getBasicChannel(s);
                return null != t && (0, tL.A)(t, tU.A);
            },
            [s],
        );
    return (0, v.Cy)(e) && u && null != o && null != s
        ? (0, l.jsx)($.FD, {
              text: J.intl.string(J.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: function (t) {
                  null != o &&
                      null != s &&
                      (t.stopPropagation(),
                      n?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tb.CH(o, s),
                      (0, tR.iN)(s),
                      i?.());
              },
          })
        : null;
}
var tY = n(908289);
function tV(t) {
    let { activity: e, onAction: n } = t,
        { themeType: i } = (0, R.E)(),
        a = i === tr.d.MODAL_V2,
        r = (0, tY.A)(e);
    return (0, m.A)(e) && null != r
        ? (0, l.jsx)($.FD, {
              text: J.intl.string(J.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), n?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var tw = n(985629);
function tk(t) {
    let { user: e, activity: n, onAction: i, onClose: a, application: r, containerClassName: o } = t,
        { themeType: c } = (0, R.E)(),
        u = (0, M.bG)([F.default], () => F.default.getId() === e.id),
        d = (0, k.JC)(r),
        A = (0, tt.o)(n?.application_id ?? r?.id) || (0, U.A)(n, tS.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: g } = (0, p.Ay)(x.A.USER_PROFILE_ACTIVITY_BUTTONS),
        _ = (0, w.A)(n?.application_id),
        { fetched: I, canStartAuthorization: N, hasAlreadyLinked: E, startAuthorization: T } = (0, K.RD)(r),
        h = c === tr.d.MODAL || c === tr.d.MODAL_V2,
        C = c === tr.d.POPOUT,
        S = c === tr.d.MODAL_V2 ? ts.g6 : ts.Zu,
        y =
            _.length > 0
                ? (0, l.jsx)(Z.A, {
                      distributorCTAConfigs: _,
                      applicationId: n?.application_id ?? "",
                      analyticsLocations: g,
                      buttonVariant: "secondary",
                      fullWidth: c !== tr.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: i,
                      onClose: a,
                  })
                : null,
        O = (function () {
            if (u)
                return C && n?.type === s.$.PLAYING && null != r
                    ? (0, l.jsx)(q, { application: r, onAction: i, onClose: a })
                    : null;
            if (n?.buttons != null && n?.buttons.length >= 1)
                return null != y
                    ? (0, l.jsxs)("div", {
                          className: S,
                          children: [(0, l.jsx)(tc, { user: e, activity: n, onAction: i }), y],
                      })
                    : (0, l.jsx)(tc, { user: e, activity: n, onAction: i });
            if (!A && d && null != r && !h) {
                let t = (0, l.jsx)(tw.A, { application: r, onAction: i, onClose: a, analyticsLocations: g });
                return null != y ? (0, l.jsxs)("div", { className: S, children: [t, y] }) : t;
            }
            if ((0, f.A)(n) || ((0, D.Ay)(n) && A)) {
                let t = (0, l.jsx)(tE, { user: e, activity: n, onAction: i, onClose: a });
                return null != y ? (0, l.jsxs)("div", { className: S, children: [t, y] }) : t;
            }
            if (I && N && !E) {
                let t = (0, l.jsx)(th, { startAuthorization: T, onAction: i });
                return null != y ? (0, l.jsxs)("div", { className: S, children: [t, y] }) : t;
            }
            if (null != y) return y;
            if (!(0, G.A)(n)) {
                if ((0, V.A)(n))
                    return (0, l.jsx)(tP, { platformType: tS.fg2.XBOX, icon: () => (0, l.jsx)(tn.A, {}), onAction: i });
                if ((0, Y.A)(n))
                    return (0, l.jsx)(tP, {
                        platformType: tS.fg2.PLAYSTATION,
                        icon: () => (0, l.jsx)(te.A, {}),
                        onAction: i,
                    });
            }
            return (0, m.A)(n)
                ? (0, l.jsx)(tV, { activity: n, onAction: i })
                : (0, D.Ay)(n)
                  ? (0, l.jsx)(tE, { user: e, activity: n, onAction: i, onClose: a })
                  : (0, U.A)(n, tS.jUm.INSTANCE)
                    ? (0, l.jsx)(tv, { user: e, activity: n, onAction: i })
                    : (0, v.Cy)(n)
                      ? (0, l.jsx)(tD, { activity: n, onAction: i, onClose: a })
                      : null;
        })();
    return null == O ? null : (0, l.jsx)("div", { className: o, children: O });
}
var tW = n(282197),
    tB = n(624951),
    tH = n(584904),
    tz = n(351638),
    tX = n(531648),
    t$ = n(910607),
    tF = n(753713),
    tQ = n(269587),
    tJ = n(409626),
    tq = n(692969),
    tZ = n(534465),
    tK = n(818023);
function t0(t) {
    let {
            user: e,
            currentUser: n,
            activity: i,
            application: a,
            voiceGuild: M,
            voiceChannel: U,
            className: G,
            onClose: D,
            appContext: Y,
        } = t,
        V = (0, h.GV)(),
        w = (0, h.GV)(),
        { analyticsLocations: k } = (0, p.Ay)(x.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, R.E)(),
        B = (0, T.A)({ activity: i, user: e }),
        H = (0, y.A)({ display: "live", user: e, activity: i, entry: B, analyticsLocations: k }),
        z = (0, O.A)({ userId: e.id, onAction: H }),
        X = (0, _.Ay)(U),
        $ = (0, j.A)(i),
        F = null != $.text && "" !== $.text,
        { largeImage: q, smallImage: Z } = (0, I.XN)(i, a, "user_profile_activity_card"),
        K = (function (t) {
            let { location: e, user: n, currentUser: l, activity: i, application: a, entry: r, onClose: s } = t,
                o = (0, tq.A)({
                    location: e,
                    source: tJ.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, tZ.UE)({ user: n, activity: i, entry: r }),
                }),
                c = (0, tN.A)({ applicationId: a?.id, onClose: s }),
                u = (0, f.A)(i);
            return u && null != a
                ? c
                : !u && (0, g.A)(i)
                  ? o
                  : (0, A.A)(i) && n.id !== l.id
                    ? () => to({ activity: i, user: n, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: e,
            currentUser: n,
            activity: i,
            application: a,
            entry: B,
            onClose: D,
        });
    function tt() {
        return (0, m.A)(i) && null != U
            ? (0, l.jsxs)("div", {
                  className: ts.FH,
                  children: [
                      (0, l.jsx)(c.H, { size: "xxs", color: u.A.colors.TEXT_DEFAULT, className: ts.Ow }),
                      (0, l.jsx)(tX.Q, { variant: "heading-sm/semibold", text: X, id: V }),
                  ],
              })
            : (0, g.A)(i) || (0, v.Cy)(i)
              ? (0, l.jsx)(tX.Q, { variant: "heading-sm/semibold", text: i.name, id: V })
              : null != i.details
                ? (0, l.jsx)(N.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tX.Q, { variant: "heading-sm/semibold", text: i.details, id: V }),
                  })
                : (0, l.jsx)(tX.Q, { variant: "heading-sm/semibold", text: i.name, id: V });
    }
    function te() {
        return i.type === s.$.HANG_STATUS
            ? null
            : (0, m.A)(i) && null != M
              ? (0, l.jsx)(tX.A, {
                    variant: "text-xs/normal",
                    text: J.intl.formatToPlainString(J.t["hq/Qze"], { guildName: M.name }),
                    onClick: () => {
                        ((0, S.u)(M.id), H({ action: "OPEN_VOICE_GUILD" }), D?.());
                    },
                })
              : (0, g.A)(i)
                ? (0, l.jsx)(N.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: i.details }),
                  })
                : (0, v.Cy)(i)
                  ? (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: i?.assets?.small_text })
                  : (0, l.jsx)(N.O, {
                        href: i.state_url,
                        children: (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: i.state }),
                    });
    }
    function tn() {
        if (i.type === s.$.WATCHING) return null;
        if ((0, g.A)(i))
            return i.party?.size == null && i.application_id === tK.I4
                ? (0, l.jsxs)("div", {
                      className: ts.CI,
                      children: [
                          (0, l.jsx)(N.O, {
                              href: i.state_url,
                              children: (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: i.state }),
                          }),
                          (0, l.jsx)(tX.A, {
                              variant: "text-xs/normal",
                              text: J.intl.formatToPlainString(J.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, f.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, l.jsxs)("div", {
                        className: ts.CI,
                        children: [
                            (0, l.jsx)(N.O, {
                                href: i.state_url,
                                children: (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: i.state }),
                            }),
                            (0, l.jsx)(tX.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? J.intl.formatToPlainString(J.t.IM4J4e, { count: i.party.size[0] })
                                        : J.intl.formatToPlainString(J.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, l.jsx)(N.O, {
                          href: i.state_url,
                          children: (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: i.state }),
                      })
                    : null;
        if ((0, v.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
            let t = J.intl.formatToPlainString(J.t["JC/3xw"], {
                numSpeakers: i.party?.size[0],
                numListeners: i.party?.size[1] - i.party?.size[0],
            });
            return (0, l.jsx)(tX.A, { variant: "text-xs/normal", text: t });
        }
        return i.assets?.large_text != null
            ? (0, l.jsx)(N.O, {
                  href: i.assets?.large_url,
                  children: (0, l.jsx)(tX.A, { text: i.assets?.large_text, variant: "text-xs/normal" }),
              })
            : null;
    }
    function tl() {
        return (0, l.jsx)(tk, {
            containerClassName: ts.o1,
            activity: i,
            user: e,
            onAction: H,
            onClose: D,
            application: a,
        });
    }
    return (0, l.jsx)(p.f5, {
        value: k,
        children: (0, l.jsxs)(tH.A, {
            ref: z,
            className: r()(ts.Nr, G),
            onAction: H,
            onClose: D,
            "aria-labelledby": F ? `${w} ${V}` : V,
            children: [
                (0, l.jsx)(tz.A, {
                    textId: w,
                    ...$,
                    contextMenu: (0, l.jsx)(tQ.A, {
                        display: "live",
                        user: e,
                        activity: i,
                        entry: B,
                        onClose: D,
                        appContext: Y,
                    }),
                }),
                (0, l.jsx)(C.A, {
                    applicationId: a?.id,
                    questContent: o.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let n, a;
                        return (0, l.jsxs)("div", {
                            className: ts.rf,
                            ref: t,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ts.Qs,
                                    children: [
                                        !e.bot &&
                                            ((n = (0, A.A)(i) ? "crunchyroll" : "default"),
                                            (a = W === tr.d.MODAL_V2 ? E.w.SIZE_100 : E.w.SIZE_60),
                                            null == K
                                                ? (0, l.jsx)(E.d, {
                                                      image: q,
                                                      smallImage: Z,
                                                      size: a,
                                                      aspectRatio: n,
                                                      className: ts.Sl,
                                                  })
                                                : (0, l.jsx)(E.d, {
                                                      image: q,
                                                      smallImage: Z,
                                                      size: a,
                                                      className: ts.mM,
                                                      aspectRatio: n,
                                                      onClick: (t) => {
                                                          (H({ action: "PRESS_IMAGE" }), K(t));
                                                      },
                                                  })),
                                        (0, l.jsxs)("div", {
                                            className: ts.zH,
                                            children: [
                                                null == K
                                                    ? (0, l.jsxs)("div", { children: [tt(), te(), tn()] })
                                                    : (0, l.jsxs)(d.D, {
                                                          className: ts.sd,
                                                          onClick: (t) => {
                                                              (H({ action: "PRESS_TEXT" }), K(t));
                                                          },
                                                          children: [tt(), te(), tn()],
                                                      }),
                                                !e.bot && (0, l.jsx)(tW.A, { user: e, activity: i, className: ts.jp }),
                                                (function () {
                                                    if (!(0, P.A)(i)) return null;
                                                    let { start: t, end: e } = i.timestamps;
                                                    return (0, l.jsx)(tF.A, { start: t, end: e });
                                                })(),
                                                W === tr.d.MODAL_V2 && tl(),
                                            ],
                                        }),
                                        W === tr.d.MODAL && tl(),
                                    ],
                                }),
                                null == M || null == U
                                    ? null
                                    : (0, l.jsx)(t$.A, { user: e, guild: M, channel: U, onAction: H, onClose: D }),
                            ],
                        });
                    },
                }),
                W !== tr.d.MODAL &&
                    W !== tr.d.MODAL_V2 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            tl(),
                            (0, l.jsx)(b.A, {
                                className: ts.AB,
                                userId: e.id,
                                activityApplication: a,
                                onClickViewMore: (t) => {
                                    (t.stopPropagation(),
                                        H({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        D?.(),
                                        (0, L.openUserProfileModal)({ userId: e.id, tabSection: Q.RP.WIDGETS }));
                                },
                            }),
                        ],
                    }),
                (0, l.jsx)(tB.A, { applicationId: a?.id, onAction: H, onClose: D, activity: i }),
            ],
        }),
    });
}
