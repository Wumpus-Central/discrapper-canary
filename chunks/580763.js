n.d(e, { A: () => tJ });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(696292),
    o = n(983851),
    c = n(661531),
    u = n(939249),
    d = n(541806),
    A = n(765379),
    f = n(672979),
    p = n(960076),
    g = n(793574),
    m = n(688810),
    x = n(47167),
    _ = n(939341),
    I = n(662010),
    N = n(623671),
    E = n(365185),
    T = n(915089),
    C = n(932413),
    S = n(345942),
    h = n(82149),
    y = n(92240),
    O = n(257367),
    v = n(160376),
    j = n(53257),
    P = n(402860),
    R = n(939496),
    L = n(964195),
    b = n(17928),
    M = n(55730),
    U = n(682261),
    D = n(874546),
    G = n(141639),
    Y = n(61330),
    V = n(544441),
    k = n(146779),
    w = n(540185),
    B = n(569926),
    W = n(289173),
    H = n(735321),
    z = n(999291),
    X = n(993401),
    F = n(280450),
    $ = n(518477),
    Q = n(375708);
function J(t) {
    let { application: e, onAction: n, onClose: a } = t,
        r = (0, b.bG)([F.default], () => F.default.getId()),
        s = (0, z.Ay)(r, null),
        o = e.getCanonicalGameId(),
        { data: c } = (0, B.I)(o),
        u = i.useMemo(
            () =>
                !(
                    null == c ||
                    null == o ||
                    s?.widgets?.some(
                        (t) =>
                            t instanceof W.Yy && t.type === w.x.CURRENT_GAMES && t.games?.some((t) => t.gameId === o),
                    )
                ) && (0, H.XX)(c),
            [o, s?.widgets, c],
        ),
        d = i.useCallback(
            (t) => {
                null != o &&
                    (t.stopPropagation(),
                    n?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, H.ew)({ widgetType: w.x.CURRENT_GAMES, game: { gameId: o }, ignoreMaxGames: !0 }),
                    (0, P.openUserProfileModal)({
                        userId: r,
                        tabSection: $.RP.WIDGETS,
                        scrollTarget: w.x.CURRENT_GAMES,
                    }),
                    a?.());
            },
            [o, r, n, a],
        );
    return u ? (0, l.jsx)(X.FD, { text: Q.intl.string(Q.t.BjYzmC), onClick: d, fullWidth: !0 }) : null;
}
var q = n(601007),
    K = n(206828),
    Z = n(308335),
    tt = n(790381),
    te = n(266080),
    tn = n(729937),
    tl = n(123917),
    ti = n(998218),
    ta = n(996988),
    tr = n(260155);
async function ts(t) {
    let { activity: e, user: n, index: l } = t;
    try {
        let t = await (0, tn.yb)(e, n.id);
        if (t.button_urls.length <= l) return;
        let i = t.button_urls[l];
        if ("string" != typeof i) return;
        let a = ti.A.safeParseWithQuery(i);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, tl.h)({ href: ti.A.format(a), trusted: !1 });
    } catch (t) {}
}
function to(t) {
    let { user: e, activity: n, onAction: i } = t,
        { themeType: a } = (0, R.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let r = (0, d.A)(n);
    return a === ta.d.MODAL_V2
        ? (0, l.jsx)("div", {
              className: tr.fO,
              children: n.buttons.map((t, a) =>
                  (0, l.jsx)(
                      X.FD,
                      {
                          text: r ? Q.intl.string(Q.t.I6JG46) : t,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: e, activity: n, index: a }));
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, l.jsx)("div", {
              className: tr.fO,
              children: n.buttons.map((t, a) =>
                  (0, l.jsx)(
                      X.FD,
                      {
                          text: r ? Q.intl.string(Q.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              (t.stopPropagation(),
                                  i?.({ action: r ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  ts({ user: e, activity: n, index: a }));
                          },
                      },
                      a,
                  ),
              ),
          });
}
var tc = n(323384),
    tu = n(866665),
    td = n(808666),
    tA = n(687966),
    tf = n(780907),
    tp = n(928550),
    tg = n(102853),
    tm = n(695311);
function tx(t) {
    let { user: e, activity: n, onAction: i, onClose: a } = t,
        { themeType: r } = (0, R.E)(),
        s = (0, tm.A)({ applicationId: n?.application_id, onClose: a }),
        o = (0, tg.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: e, onClose: a }),
        c = (0, tp.dB)(n?.application_id);
    if (null == o && null != n && (0, A.A)(n))
        return (0, l.jsx)(X.FD, {
            icon: tc.k,
            text: Q.intl.string(Q.t.RscU7I),
            fullWidth: r !== ta.d.MODAL_V2,
            onClick: (t) => {
                (t.stopPropagation(),
                    null != c ? tf.Ay.launch({ applicationId: c }) : (i?.({ action: "PRESS_PLAY_BUTTON" }), s()));
            },
        });
    if (null == o) return null;
    let { isJoining: u, handleJoinRequest: d, buttonCTA: f, tooltip: p, isEnabled: g, isEmbedded: m } = o,
        x = r !== ta.d.MODAL_V2;
    return (0, l.jsx)("div", {
        className: x ? tr.Ij : void 0,
        children: (0, l.jsx)(tu.m, {
            text: p,
            asContainer: !g,
            children: (0, l.jsx)(X.FD, {
                icon: m ? td.I : tA.GameControllerIcon,
                text: f,
                disabled: !g,
                loading: u,
                fullWidth: x,
                onClick: (t) => {
                    (t.stopPropagation(), i?.({ action: m ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), d());
                },
            }),
        }),
    });
}
var t_ = n(141628);
function tI(t) {
    let { startAuthorization: e, onAction: n } = t,
        { newestAnalyticsLocation: i } = (0, m.Ay)(),
        { themeType: a } = (0, R.E)(),
        r = a === ta.d.MODAL_V2;
    return (0, l.jsx)(X.FD, {
        icon: () => (0, l.jsx)(t_.A, {}),
        text: Q.intl.string(Q.t.sbdnpw),
        fullWidth: !r,
        onClick: (t) => {
            (t.stopPropagation(), n?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), e({ analyticsLocations: [i] }));
        },
    });
}
var tN = n(626584),
    tE = n(652215);
function tT(t) {
    let { user: e, activity: n, onAction: i } = t,
        { themeType: a } = (0, R.E)(),
        r = a === ta.d.MODAL_V2;
    return (0, M.A)(n, tE.jUm.INSTANCE)
        ? (0, l.jsx)(X.FD, {
              text: Q.intl.string(Q.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                  (t.stopPropagation(),
                      i?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new tN.A("UserActivityActions").log("notify", e.id, n));
              },
          })
        : null;
}
var tC = n(573648),
    tS = n(968309),
    th = n(30370);
function ty(t) {
    let { platformType: e, icon: n, onAction: i } = t,
        { newestAnalyticsLocation: a } = (0, m.Ay)(),
        { themeType: r } = (0, R.E)(),
        s = r === ta.d.MODAL_V2;
    return (0, b.bG)([th.A], () => null != th.A.getAccount(null, e))
        ? null
        : (0, l.jsx)(X.FD, {
              icon: n,
              text: Q.intl.formatToPlainString(Q.t.XWSHTb, { platform: tC.A.get(e).name }),
              fullWidth: !s,
              onClick: (t) => {
                  t.stopPropagation();
                  let n = e === tE.fg2.XBOX;
                  (i?.({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, tS.A)({ platformType: e, location: a }));
              },
          });
}
var tO = n(890615),
    tv = n(378570),
    tj = n(790535),
    tP = n(734057),
    tR = n(576705),
    tL = n(977997);
function tb(t) {
    let { activity: e, onAction: n, onClose: i } = t,
        { themeType: a } = (0, R.E)(),
        r = a === ta.d.MODAL_V2,
        { channelId: s, guildId: o } = (0, h.UW)(e) ?? {},
        c = (0, b.bG)([tL.A], () => null != s && tL.A.isInChannel(s), [s]),
        u = (0, b.bG)(
            [tP.A, tR.A],
            () => {
                let t = tP.A.getBasicChannel(s);
                return null != t && (0, tO.A)(t, tR.A);
            },
            [s],
        );
    return (0, h.Cy)(e) && u && null != o && null != s
        ? (0, l.jsx)(X.FD, {
              text: Q.intl.string(Q.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: function (t) {
                  null != o &&
                      null != s &&
                      (t.stopPropagation(),
                      n?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      tj.CH(o, s),
                      (0, tv.iN)(s),
                      i?.());
              },
          })
        : null;
}
var tM = n(908289);
function tU(t) {
    let { activity: e, onAction: n } = t,
        { themeType: i } = (0, R.E)(),
        a = i === ta.d.MODAL_V2,
        r = (0, tM.A)(e);
    return (0, p.A)(e) && null != r
        ? (0, l.jsx)(X.FD, {
              text: Q.intl.string(Q.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (t.stopPropagation(), n?.({ action: "PRESS_WATCH_BUTTON" }), window.open(r)),
          })
        : null;
}
var tD = n(985629);
function tG(t) {
    let { user: e, activity: n, onAction: i, onClose: a, application: r, containerClassName: s } = t,
        { themeType: o } = (0, R.E)(),
        c = (0, b.bG)([F.default], () => F.default.getId() === e.id),
        u = (0, k.JC)(r),
        d = (0, Z.o)(n?.application_id ?? r?.id) || (0, M.A)(n, tE.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: f } = (0, m.Ay)(g.A.USER_PROFILE_ACTIVITY_BUTTONS),
        x = (0, V.A)(n?.application_id),
        { fetched: _, canStartAuthorization: I, hasAlreadyLinked: N, startAuthorization: E } = (0, K.RD)(r),
        T = o === ta.d.MODAL || o === ta.d.MODAL_V2,
        C = o === ta.d.POPOUT,
        S = o === ta.d.MODAL_V2 ? tr.g6 : tr.Zu,
        y =
            x.length > 0
                ? (0, l.jsx)(q.A, {
                      distributorCTAConfigs: x,
                      applicationId: n?.application_id ?? "",
                      analyticsLocations: f,
                      buttonVariant: "secondary",
                      fullWidth: o !== ta.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: i,
                      onClose: a,
                  })
                : null,
        O = (function () {
            if (c)
                return C && n?.type === tE.$pd.PLAYING && null != r
                    ? (0, l.jsx)(J, { application: r, onAction: i, onClose: a })
                    : null;
            if (n?.buttons != null && n?.buttons.length >= 1)
                return null != y
                    ? (0, l.jsxs)("div", {
                          className: S,
                          children: [(0, l.jsx)(to, { user: e, activity: n, onAction: i }), y],
                      })
                    : (0, l.jsx)(to, { user: e, activity: n, onAction: i });
            if (!d && u && null != r && !T) {
                let t = (0, l.jsx)(tD.A, { application: r, onAction: i, onClose: a, analyticsLocations: f });
                return null != y ? (0, l.jsxs)("div", { className: S, children: [t, y] }) : t;
            }
            if ((0, A.A)(n) || ((0, D.Ay)(n) && d)) {
                let t = (0, l.jsx)(tx, { user: e, activity: n, onAction: i, onClose: a });
                return null != y ? (0, l.jsxs)("div", { className: S, children: [t, y] }) : t;
            }
            if (_ && I && !N) {
                let t = (0, l.jsx)(tI, { startAuthorization: E, onAction: i });
                return null != y ? (0, l.jsxs)("div", { className: S, children: [t, y] }) : t;
            }
            if (null != y) return y;
            if (!(0, U.A)(n)) {
                if ((0, Y.A)(n))
                    return (0, l.jsx)(ty, { platformType: tE.fg2.XBOX, icon: () => (0, l.jsx)(te.A, {}), onAction: i });
                if ((0, G.A)(n))
                    return (0, l.jsx)(ty, {
                        platformType: tE.fg2.PLAYSTATION,
                        icon: () => (0, l.jsx)(tt.A, {}),
                        onAction: i,
                    });
            }
            return (0, p.A)(n)
                ? (0, l.jsx)(tU, { activity: n, onAction: i })
                : (0, D.Ay)(n)
                  ? (0, l.jsx)(tx, { user: e, activity: n, onAction: i, onClose: a })
                  : (0, M.A)(n, tE.jUm.INSTANCE)
                    ? (0, l.jsx)(tT, { user: e, activity: n, onAction: i })
                    : (0, h.Cy)(n)
                      ? (0, l.jsx)(tb, { activity: n, onAction: i, onClose: a })
                      : null;
        })();
    return null == O ? null : (0, l.jsx)("div", { className: s, children: O });
}
var tY = n(282197),
    tV = n(624951),
    tk = n(584904),
    tw = n(351638),
    tB = n(531648),
    tW = n(910607),
    tH = n(753713),
    tz = n(269587),
    tX = n(409626),
    tF = n(692969),
    t$ = n(534465),
    tQ = n(818023);
function tJ(t) {
    let {
            user: e,
            currentUser: n,
            activity: i,
            application: a,
            voiceGuild: b,
            voiceChannel: M,
            className: U,
            onClose: D,
            appContext: G,
        } = t,
        Y = (0, T.GV)(),
        V = (0, T.GV)(),
        { analyticsLocations: k } = (0, m.Ay)(g.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: w } = (0, R.E)(),
        B = (0, E.A)({ activity: i, user: e }),
        W = (0, y.A)({ display: "live", user: e, activity: i, entry: B, analyticsLocations: k }),
        H = (0, O.A)({ userId: e.id, onAction: W }),
        z = (0, x.Ay)(M),
        X = (0, v.A)(i),
        F = null != X.text && "" !== X.text,
        { largeImage: J, smallImage: q } = (0, _.XN)(i, a, "user_profile_activity_card"),
        K = (function (t) {
            let { location: e, user: n, currentUser: l, activity: i, application: a, entry: r, onClose: s } = t,
                o = (0, tF.A)({
                    location: e,
                    source: tX.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, t$.UE)({ user: n, activity: i, entry: r }),
                }),
                c = (0, tm.A)({ applicationId: a?.id, onClose: s }),
                u = (0, A.A)(i);
            return u && null != a
                ? c
                : !u && (0, f.A)(i)
                  ? o
                  : (0, d.A)(i) && n.id !== l.id
                    ? () => ts({ activity: i, user: n, index: 0 })
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
    function Z() {
        return (0, p.A)(i) && null != M
            ? (0, l.jsxs)("div", {
                  className: tr.FH,
                  children: [
                      (0, l.jsx)(o.H, { size: "xxs", color: c.A.colors.TEXT_DEFAULT, className: tr.Ow }),
                      (0, l.jsx)(tB.Q, { variant: "heading-sm/semibold", text: z, id: Y }),
                  ],
              })
            : (0, f.A)(i) || (0, h.Cy)(i)
              ? (0, l.jsx)(tB.Q, { variant: "heading-sm/semibold", text: i.name, id: Y })
              : null != i.details
                ? (0, l.jsx)(I.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tB.Q, { variant: "heading-sm/semibold", text: i.details, id: Y }),
                  })
                : (0, l.jsx)(tB.Q, { variant: "heading-sm/semibold", text: i.name, id: Y });
    }
    function tt() {
        return i.type === tE.$pd.HANG_STATUS
            ? null
            : (0, p.A)(i) && null != b
              ? (0, l.jsx)(tB.A, {
                    variant: "text-xs/normal",
                    text: Q.intl.formatToPlainString(Q.t["hq/Qze"], { guildName: b.name }),
                    onClick: () => {
                        ((0, S.u)(b.id), W({ action: "OPEN_VOICE_GUILD" }), D?.());
                    },
                })
              : (0, f.A)(i)
                ? (0, l.jsx)(I.O, {
                      href: i.details_url,
                      children: (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: i.details }),
                  })
                : (0, h.Cy)(i)
                  ? (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: i?.assets?.small_text })
                  : (0, l.jsx)(I.O, {
                        href: i.state_url,
                        children: (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: i.state }),
                    });
    }
    function te() {
        if (i.type === tE.$pd.WATCHING) return null;
        if ((0, f.A)(i))
            return i.party?.size == null && i.application_id === tQ.I4
                ? (0, l.jsxs)("div", {
                      className: tr.CI,
                      children: [
                          (0, l.jsx)(I.O, {
                              href: i.state_url,
                              children: (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: i.state }),
                          }),
                          (0, l.jsx)(tB.A, {
                              variant: "text-xs/normal",
                              text: Q.intl.formatToPlainString(Q.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, A.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, l.jsxs)("div", {
                        className: tr.CI,
                        children: [
                            (0, l.jsx)(I.O, {
                                href: i.state_url,
                                children: (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: i.state }),
                            }),
                            (0, l.jsx)(tB.A, {
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
                    ? (0, l.jsx)(I.O, {
                          href: i.state_url,
                          children: (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: i.state }),
                      })
                    : null;
        if ((0, h.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
            let t = Q.intl.formatToPlainString(Q.t["JC/3xw"], {
                numSpeakers: i.party?.size[0],
                numListeners: i.party?.size[1] - i.party?.size[0],
            });
            return (0, l.jsx)(tB.A, { variant: "text-xs/normal", text: t });
        }
        return i.assets?.large_text != null
            ? (0, l.jsx)(I.O, {
                  href: i.assets?.large_url,
                  children: (0, l.jsx)(tB.A, { text: i.assets?.large_text, variant: "text-xs/normal" }),
              })
            : null;
    }
    function tn() {
        return (0, l.jsx)(tG, {
            containerClassName: tr.o1,
            activity: i,
            user: e,
            onAction: W,
            onClose: D,
            application: a,
        });
    }
    return (0, l.jsx)(m.f5, {
        value: k,
        children: (0, l.jsxs)(tk.A, {
            ref: H,
            className: r()(tr.Nr, U),
            onAction: W,
            onClose: D,
            "aria-labelledby": F ? `${V} ${Y}` : Y,
            children: [
                (0, l.jsx)(tw.A, {
                    textId: V,
                    ...X,
                    contextMenu: (0, l.jsx)(tz.A, {
                        display: "live",
                        user: e,
                        activity: i,
                        entry: B,
                        onClose: D,
                        appContext: G,
                    }),
                }),
                (0, l.jsx)(C.A, {
                    applicationId: a?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let n, a;
                        return (0, l.jsxs)("div", {
                            className: tr.rf,
                            ref: t,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tr.Qs,
                                    children: [
                                        !e.bot &&
                                            ((n = (0, d.A)(i) ? "crunchyroll" : "default"),
                                            (a = w === ta.d.MODAL_V2 ? N.w.SIZE_100 : N.w.SIZE_60),
                                            null == K
                                                ? (0, l.jsx)(N.d, {
                                                      image: J,
                                                      smallImage: q,
                                                      size: a,
                                                      aspectRatio: n,
                                                      className: tr.Sl,
                                                  })
                                                : (0, l.jsx)(N.d, {
                                                      image: J,
                                                      smallImage: q,
                                                      size: a,
                                                      className: tr.mM,
                                                      aspectRatio: n,
                                                      onClick: (t) => {
                                                          (W({ action: "PRESS_IMAGE" }), K(t));
                                                      },
                                                  })),
                                        (0, l.jsxs)("div", {
                                            className: tr.zH,
                                            children: [
                                                null == K
                                                    ? (0, l.jsxs)("div", { children: [Z(), tt(), te()] })
                                                    : (0, l.jsxs)(u.D, {
                                                          className: tr.sd,
                                                          onClick: (t) => {
                                                              (W({ action: "PRESS_TEXT" }), K(t));
                                                          },
                                                          children: [Z(), tt(), te()],
                                                      }),
                                                !e.bot && (0, l.jsx)(tY.A, { user: e, activity: i, className: tr.jp }),
                                                (function () {
                                                    if (!(0, j.A)(i)) return null;
                                                    let { start: t, end: e } = i.timestamps;
                                                    return (0, l.jsx)(tH.A, { start: t, end: e });
                                                })(),
                                                w === ta.d.MODAL_V2 && tn(),
                                            ],
                                        }),
                                        w === ta.d.MODAL && tn(),
                                    ],
                                }),
                                null == b || null == M
                                    ? null
                                    : (0, l.jsx)(tW.A, { user: e, guild: b, channel: M, onAction: W, onClose: D }),
                            ],
                        });
                    },
                }),
                w !== ta.d.MODAL &&
                    w !== ta.d.MODAL_V2 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            tn(),
                            (0, l.jsx)(L.A, {
                                className: tr.AB,
                                userId: e.id,
                                activityApplication: a,
                                onClickViewMore: (t) => {
                                    (t.stopPropagation(),
                                        W({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        D?.(),
                                        (0, P.openUserProfileModal)({ userId: e.id, tabSection: $.RP.WIDGETS }));
                                },
                            }),
                        ],
                    }),
                (0, l.jsx)(tV.A, { applicationId: a?.id, onAction: W, onClose: D, activity: i }),
            ],
        }),
    });
}
