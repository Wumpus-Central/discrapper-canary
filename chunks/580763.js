"use strict";
n.d(t, { A: () => eZ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(696292),
    o = n(983851),
    d = n(661531),
    c = n(939249),
    u = n(541806),
    _ = n(765379),
    E = n(672979),
    A = n(960076),
    h = n(793574),
    I = n(688810),
    f = n(47167),
    p = n(939341),
    T = n(662010),
    m = n(623671),
    g = n(365185),
    S = n(915089),
    N = n(932413),
    C = n(345942),
    O = n(82149),
    R = n(92240),
    L = n(257367),
    D = n(160376),
    y = n(53257),
    v = n(975732),
    b = n(939496),
    M = n(964195),
    P = n(17928),
    U = n(55730),
    w = n(682261),
    G = n(874546),
    x = n(141639),
    k = n(61330),
    F = n(544441),
    V = n(737393),
    B = n(540185),
    H = n(289173),
    j = n(735321),
    W = n(999291),
    Y = n(993401),
    K = n(280450),
    $ = n(760751),
    z = n(518477),
    q = n(375708);
function Z(e) {
    let { applicationId: t, onAction: n, onClose: a } = e,
        s = (0, P.bG)([K.default], () => K.default.getId()),
        l = (0, W.Ay)(s, null),
        o = (0, P.bG)([$.A], () => $.A.getDetectableGame(t)),
        d = r.useMemo(
            () =>
                !(
                    null == o ||
                    l?.widgets?.some(
                        (e) =>
                            e instanceof H.Yy &&
                            e.type === B.x.CURRENT_GAMES &&
                            e.games?.some((e) => e.applicationId === t),
                    )
                ) && (0, j.XX)(o),
            [t, l?.widgets, o],
        ),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    n?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, j.ew)({ widgetType: B.x.CURRENT_GAMES, game: { applicationId: t }, ignoreMaxGames: !0 }),
                    (0, v.openUserProfileModal)({
                        userId: s,
                        tabSection: z.RP.WIDGETS,
                        scrollTarget: B.x.CURRENT_GAMES,
                    }),
                    a?.();
            },
            [t, s, n, a],
        );
    return d ? (0, i.jsx)(Y.FD, { text: q.intl.string(q.t.BjYzmC), onClick: c, fullWidth: !0 }) : null;
}
var X = n(601007),
    Q = n(206828),
    J = n(308335),
    ee = n(790381),
    et = n(266080),
    en = n(729937),
    ei = n(123917),
    er = n(998218),
    ea = n(996988),
    es = n(514566);
async function el(e) {
    let { activity: t, user: n, index: i } = e;
    try {
        let e = await (0, en.yb)(t, n.id);
        if (e.button_urls.length <= i) return;
        let r = e.button_urls[i];
        if ("string" != typeof r) return;
        let a = er.A.safeParseWithQuery(r);
        if (a?.protocol == null || a?.hostname == null) return;
        (0, ei.h)({ href: er.A.format(a), trusted: !1 });
    } catch (e) {}
}
function eo(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: a } = (0, b.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let s = (0, u.A)(n);
    return a === ea.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: es.fO,
              children: n.buttons.map((e, a) =>
                  (0, i.jsx)(
                      Y.FD,
                      {
                          text: s ? q.intl.string(q.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  r?.({ action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  el({ user: t, activity: n, index: a });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: es.fO,
              children: n.buttons.map((e, a) =>
                  (0, i.jsx)(
                      Y.FD,
                      {
                          text: s ? q.intl.string(q.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  r?.({ action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  el({ user: t, activity: n, index: a });
                          },
                      },
                      a,
                  ),
              ),
          });
}
var ed = n(990078),
    ec = n(323384),
    eu = n(808666),
    e_ = n(687966),
    eE = n(780907),
    eA = n(928550),
    eh = n(102853),
    eI = n(695311);
function ef(e) {
    let { user: t, activity: n, onAction: r, onClose: a } = e,
        { themeType: s } = (0, b.E)(),
        l = (0, eI.A)({ applicationId: n?.application_id, onClose: a }),
        o = (0, eh.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: t, onClose: a }),
        d = (0, eA.d)(n?.application_id);
    if (null == o && null != n && (0, _.A)(n))
        return (0, i.jsx)(Y.FD, {
            icon: ec.k,
            text: q.intl.string(q.t.RscU7I),
            fullWidth: s !== ea.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != d ? eE.Ay.launch({ applicationId: d }) : (r?.({ action: "PRESS_PLAY_BUTTON" }), l());
            },
        });
    if (null == o) return null;
    let { isJoining: c, handleJoinRequest: u, buttonCTA: E, tooltip: A, isEnabled: h, isEmbedded: I } = o,
        f = s !== ea.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: f ? es.Ij : void 0,
        children: (0, i.jsx)(ed.m, {
            text: A,
            asContainer: !h,
            children: (0, i.jsx)(Y.FD, {
                icon: I ? eu.I : e_._,
                text: E,
                disabled: !h,
                loading: c,
                fullWidth: f,
                onClick: (e) => {
                    e.stopPropagation(), r?.({ action: I ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), u();
                },
            }),
        }),
    });
}
var ep = n(141628);
function eT(e) {
    let { startAuthorization: t, onAction: n } = e,
        { newestAnalyticsLocation: r } = (0, I.Ay)(),
        { themeType: a } = (0, b.E)(),
        s = a === ea.d.MODAL_V2;
    return (0, i.jsx)(Y.FD, {
        icon: () => (0, i.jsx)(ep.A, {}),
        text: q.intl.string(q.t.sbdnpw),
        fullWidth: !s,
        onClick: (e) => {
            e.stopPropagation(), n?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), t({ analyticsLocations: [r] });
        },
    });
}
var em = n(626584),
    eg = n(652215);
function eS(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: a } = (0, b.E)(),
        s = a === ea.d.MODAL_V2;
    return (0, U.A)(n, eg.jUm.INSTANCE)
        ? (0, i.jsx)(Y.FD, {
              text: q.intl.string(q.t.vwl1PK),
              fullWidth: !s,
              onClick: (e) => {
                  e.stopPropagation(),
                      r?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new em.A("UserActivityActions").log("notify", t.id, n);
              },
          })
        : null;
}
var eN = n(573648),
    eC = n(968309),
    eO = n(30370);
function eR(e) {
    let { platformType: t, icon: n, onAction: r } = e,
        { newestAnalyticsLocation: a } = (0, I.Ay)(),
        { themeType: s } = (0, b.E)(),
        l = s === ea.d.MODAL_V2;
    return (0, P.bG)([eO.A], () => null != eO.A.getAccount(null, t))
        ? null
        : (0, i.jsx)(Y.FD, {
              icon: n,
              text: q.intl.formatToPlainString(q.t.XWSHTb, { platform: eN.A.get(t).name }),
              fullWidth: !l,
              onClick: (e) => {
                  e.stopPropagation();
                  let n = t === eg.fg2.XBOX;
                  r?.({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, eC.A)({ platformType: t, location: a });
              },
          });
}
var eL = n(378570),
    eD = n(790535),
    ey = n(233993),
    ev = n(734057),
    eb = n(576705),
    eM = n(977997);
function eP(e) {
    let { activity: t, onAction: n, onClose: r } = e,
        { themeType: a } = (0, b.E)(),
        s = a === ea.d.MODAL_V2,
        { channelId: l, guildId: o } = (0, O.UW)(t) ?? {},
        d = (0, P.bG)([eM.A], () => null != l && eM.A.isInChannel(l), [l]),
        c = (0, P.bG)([ev.A], () => (null != l ? ev.A.getChannel(l) : null), [l]),
        u = (0, P.bG)([eb.A], () => null != c && eb.A.can(ey.Gk, c), [c]);
    return (0, O.Cy)(t) && u && null != o && null != l
        ? (0, i.jsx)(Y.FD, {
              text: q.intl.string(q.t.ZYO5OK),
              fullWidth: !s,
              disabled: d,
              onClick: (e) => {
                  e.stopPropagation(),
                      n?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      eD.CH(o, l),
                      (0, eL.iN)(l),
                      r?.();
              },
          })
        : null;
}
var eU = n(908289);
function ew(e) {
    let { activity: t, onAction: n } = e,
        { themeType: r } = (0, b.E)(),
        a = r === ea.d.MODAL_V2,
        s = (0, eU.A)(t);
    return (0, A.A)(t) && null != s
        ? (0, i.jsx)(Y.FD, {
              text: q.intl.string(q.t.I6JG46),
              fullWidth: !a,
              onClick: (e) => (e.stopPropagation(), n?.({ action: "PRESS_WATCH_BUTTON" }), window.open(s)),
          })
        : null;
}
var eG = n(985629);
function ex(e) {
    let { user: t, activity: n, onAction: r, onClose: a, application: s, containerClassName: l } = e,
        { themeType: o } = (0, b.E)(),
        d = (0, P.bG)([K.default], () => K.default.getId() === t.id),
        c = (0, V.JC)(s),
        u = (0, J.o)(n?.application_id ?? s?.id) || (0, U.A)(n, eg.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: E } = (0, I.Ay)(h.A.USER_PROFILE_ACTIVITY_BUTTONS),
        f = (0, F.A)(n?.application_id),
        { fetched: p, canStartAuthorization: T, hasAlreadyLinked: m, startAuthorization: g } = (0, Q.RD)(s),
        S = o === ea.d.MODAL || o === ea.d.MODAL_V2,
        N = o === ea.d.POPOUT,
        C = o === ea.d.MODAL_V2 ? es.g6 : es.Zu,
        R =
            f.length > 0
                ? (0, i.jsx)(X.A, {
                      distributorCTAConfigs: f,
                      applicationId: n?.application_id ?? "",
                      analyticsLocations: E,
                      buttonVariant: "secondary",
                      fullWidth: o !== ea.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: r,
                      onClose: a,
                  })
                : null,
        L = (() => {
            if (d)
                return N && n?.type === eg.$pd.PLAYING && s?.id != null
                    ? (0, i.jsx)(Z, { applicationId: s.id, onAction: r, onClose: a })
                    : null;
            if (n?.buttons != null && n?.buttons.length >= 1)
                return null != R
                    ? (0, i.jsxs)("div", {
                          className: C,
                          children: [(0, i.jsx)(eo, { user: t, activity: n, onAction: r }), R],
                      })
                    : (0, i.jsx)(eo, { user: t, activity: n, onAction: r });
            if (!u && c && null != s && !S) {
                let e = (0, i.jsx)(eG.A, { application: s, onAction: r, onClose: a, analyticsLocations: E });
                return null != R ? (0, i.jsxs)("div", { className: C, children: [e, R] }) : e;
            }
            if ((0, _.A)(n) || ((0, G.Ay)(n) && u)) {
                let e = (0, i.jsx)(ef, { user: t, activity: n, onAction: r, onClose: a });
                return null != R ? (0, i.jsxs)("div", { className: C, children: [e, R] }) : e;
            }
            if (p && T && !m) {
                let e = (0, i.jsx)(eT, { startAuthorization: g, onAction: r });
                return null != R ? (0, i.jsxs)("div", { className: C, children: [e, R] }) : e;
            }
            if (null != R) return R;
            if (!(0, w.A)(n)) {
                if ((0, k.A)(n))
                    return (0, i.jsx)(eR, { platformType: eg.fg2.XBOX, icon: () => (0, i.jsx)(et.A, {}), onAction: r });
                if ((0, x.A)(n))
                    return (0, i.jsx)(eR, {
                        platformType: eg.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(ee.A, {}),
                        onAction: r,
                    });
            }
            return (0, A.A)(n)
                ? (0, i.jsx)(ew, { activity: n, onAction: r })
                : (0, G.Ay)(n)
                  ? (0, i.jsx)(ef, { user: t, activity: n, onAction: r, onClose: a })
                  : (0, U.A)(n, eg.jUm.INSTANCE)
                    ? (0, i.jsx)(eS, { user: t, activity: n, onAction: r })
                    : (0, O.Cy)(n)
                      ? (0, i.jsx)(eP, { activity: n, onAction: r, onClose: a })
                      : null;
        })();
    return null == L ? null : (0, i.jsx)("div", { className: l, children: L });
}
var ek = n(282197),
    eF = n(624951),
    eV = n(584904),
    eB = n(351638),
    eH = n(531648),
    ej = n(910607),
    eW = n(753713),
    eY = n(269587),
    eK = n(409626),
    e$ = n(692969),
    ez = n(534465),
    eq = n(360469);
function eZ(e) {
    let {
            user: t,
            currentUser: n,
            activity: r,
            application: a,
            voiceGuild: P,
            voiceChannel: U,
            className: w,
            onClose: G,
            appContext: x,
        } = e,
        k = (0, S.GV)(),
        F = (0, S.GV)(),
        { analyticsLocations: V } = (0, I.Ay)(h.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: B } = (0, b.E)(),
        H = (0, g.A)({ activity: r, user: t }),
        j = (0, R.A)({ display: "live", user: t, activity: r, entry: H, analyticsLocations: V }),
        W = (0, L.A)({ userId: t.id, onAction: j }),
        Y = (0, f.Ay)(U),
        K = (0, D.A)(r),
        $ = null != K.text && "" !== K.text,
        { largeImage: Z, smallImage: X } = (0, p.XN)(r, a, "user_profile_activity_card"),
        Q = (function (e) {
            let { location: t, user: n, currentUser: i, activity: r, application: a, entry: s, onClose: l } = e,
                o = (0, e$.A)({
                    location: t,
                    source: eK.GameProfileSources.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, ez.UE)({ user: n, activity: r, entry: s }),
                }),
                d = (0, eI.A)({ applicationId: a?.id, onClose: l }),
                c = (0, _.A)(r);
            return c && null != a
                ? d
                : !c && (0, E.A)(r)
                  ? o
                  : (0, u.A)(r) && n.id !== i.id
                    ? () => el({ activity: r, user: n, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: r,
            application: a,
            entry: H,
            onClose: G,
        });
    function J() {
        return (0, A.A)(r) && null != U
            ? (0, i.jsxs)("div", {
                  className: es.FH,
                  children: [
                      (0, i.jsx)(o.H, { size: "xxs", color: d.A.colors.TEXT_DEFAULT, className: es.Ow }),
                      (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: Y, id: k }),
                  ],
              })
            : (0, E.A)(r) || (0, O.Cy)(r)
              ? (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: r.name, id: k })
              : null != r.details
                ? (0, i.jsx)(T.O, {
                      href: r.details_url,
                      children: (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: r.details, id: k }),
                  })
                : (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: r.name, id: k });
    }
    let ee = () =>
        r.type === eg.$pd.HANG_STATUS
            ? null
            : (0, A.A)(r) && null != P
              ? (0, i.jsx)(eH.A, {
                    variant: "text-xs/normal",
                    text: q.intl.formatToPlainString(q.t["hq/Qze"], { guildName: P.name }),
                    onClick: () => {
                        (0, C.u)(P.id), j({ action: "OPEN_VOICE_GUILD" }), G?.();
                    },
                })
              : (0, E.A)(r)
                ? (0, i.jsx)(T.O, {
                      href: r.details_url,
                      children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.details }),
                  })
                : (0, O.Cy)(r)
                  ? (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r?.assets?.small_text })
                  : (0, i.jsx)(T.O, {
                        href: r.state_url,
                        children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                    });
    function et() {
        if (r.type === eg.$pd.WATCHING) return null;
        if ((0, E.A)(r))
            return r.party?.size == null && r.application_id === eq.I4
                ? (0, i.jsxs)("div", {
                      className: es.CI,
                      children: [
                          (0, i.jsx)(T.O, {
                              href: r.state_url,
                              children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                          }),
                          (0, i.jsx)(eH.A, {
                              variant: "text-xs/normal",
                              text: q.intl.formatToPlainString(q.t["u//9By"], {
                                  count: "0",
                                  max: a?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, _.A)(r) && r.party?.size != null && r.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: es.CI,
                        children: [
                            (0, i.jsx)(T.O, {
                                href: r.state_url,
                                children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                            }),
                            (0, i.jsx)(eH.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === r.party.size[1]
                                        ? q.intl.formatToPlainString(q.t.IM4J4e, { count: r.party.size[0] })
                                        : q.intl.formatToPlainString(q.t["u//9By"], {
                                              count: r.party.size[0],
                                              max: r.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == r.party
                    ? (0, i.jsx)(T.O, {
                          href: r.state_url,
                          children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                      })
                    : null;
        if ((0, O.Cy)(r) && r.party?.size != null && r.party?.size.length >= 2) {
            let e = q.intl.formatToPlainString(q.t["JC/3xw"], {
                numSpeakers: r.party?.size[0],
                numListeners: r.party?.size[1] - r.party?.size[0],
            });
            return (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: e });
        }
        return r.assets?.large_text != null
            ? (0, i.jsx)(T.O, {
                  href: r.assets?.large_url,
                  children: (0, i.jsx)(eH.A, { text: r.assets?.large_text, variant: "text-xs/normal" }),
              })
            : null;
    }
    function en() {
        return (0, i.jsx)(ex, {
            containerClassName: es.o1,
            activity: r,
            user: t,
            onAction: j,
            onClose: G,
            application: a,
        });
    }
    return (0, i.jsx)(I.f5, {
        value: V,
        children: (0, i.jsxs)(eV.A, {
            ref: W,
            className: s()(es.Nr, w),
            onAction: j,
            onClose: G,
            "aria-labelledby": $ ? `${F} ${k}` : k,
            children: [
                (0, i.jsx)(eB.A, {
                    textId: F,
                    ...K,
                    contextMenu: (0, i.jsx)(eY.A, {
                        display: "live",
                        user: t,
                        activity: r,
                        entry: H,
                        onClose: G,
                        appContext: x,
                    }),
                }),
                (0, i.jsx)(N.A, {
                    applicationId: a?.id,
                    questContent: l.u.USER_PROFILE_ACTIVITY,
                    children: (e) => {
                        let n, a;
                        return (0, i.jsxs)("div", {
                            className: es.rf,
                            ref: e,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: es.Qs,
                                    children: [
                                        !t.bot &&
                                            ((n = (0, u.A)(r) ? "crunchyroll" : "default"),
                                            (a = B === ea.d.MODAL_V2 ? m.w.SIZE_100 : m.w.SIZE_60),
                                            null == Q
                                                ? (0, i.jsx)(m.d, {
                                                      image: Z,
                                                      smallImage: X,
                                                      size: a,
                                                      aspectRatio: n,
                                                      className: es.Sl,
                                                  })
                                                : (0, i.jsx)(m.d, {
                                                      image: Z,
                                                      smallImage: X,
                                                      size: a,
                                                      className: es.mM,
                                                      aspectRatio: n,
                                                      onClick: (e) => {
                                                          j({ action: "PRESS_IMAGE" }), Q(e);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: es.zH,
                                            children: [
                                                null == Q
                                                    ? (0, i.jsxs)("div", { children: [J(), ee(), et()] })
                                                    : (0, i.jsxs)(c.D, {
                                                          className: es.sd,
                                                          onClick: (e) => {
                                                              j({ action: "PRESS_TEXT" }), Q(e);
                                                          },
                                                          children: [J(), ee(), et()],
                                                      }),
                                                !t.bot && (0, i.jsx)(ek.A, { user: t, activity: r, className: es.jp }),
                                                (() => {
                                                    if (!(0, y.A)(r)) return null;
                                                    let { start: e, end: t } = r.timestamps;
                                                    return (0, i.jsx)(eW.A, { start: e, end: t });
                                                })(),
                                                B === ea.d.MODAL_V2 && en(),
                                            ],
                                        }),
                                        B === ea.d.MODAL && en(),
                                    ],
                                }),
                                null == P || null == U
                                    ? null
                                    : (0, i.jsx)(ej.A, { user: t, guild: P, channel: U, onAction: j, onClose: G }),
                            ],
                        });
                    },
                }),
                B !== ea.d.MODAL &&
                    B !== ea.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            en(),
                            (0, i.jsx)(M.A, {
                                className: es.AB,
                                userId: t.id,
                                activityApplication: a,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        j({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        G?.(),
                                        (0, v.openUserProfileModal)({ userId: t.id, tabSection: z.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(eF.A, { applicationId: a?.id, onAction: j, onClose: G, activity: r }),
            ],
        }),
    });
}
