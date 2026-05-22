"use strict";
n.d(t, { A: () => eX });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(696292),
    l = n(983851),
    u = n(661531),
    c = n(939249),
    d = n(541806),
    _ = n(765379),
    f = n(672979),
    h = n(960076),
    p = n(793574),
    E = n(688810),
    m = n(47167),
    g = n(939341),
    A = n(662010),
    I = n(623671),
    T = n(365185),
    S = n(915089),
    N = n(932413),
    y = n(345942),
    C = n(82149),
    v = n(92240),
    O = n(257367),
    R = n(160376),
    b = n(53257),
    D = n(975732),
    L = n(939496),
    w = n(964195),
    M = n(17928);
let P = (0, n(945810).mj)({
    name: "2026-05-multi-button-play-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var x = n(55730),
    U = n(682261),
    k = n(874546),
    G = n(141639),
    F = n(61330),
    V = n(154483),
    B = n(737393),
    H = n(540185),
    j = n(289173),
    Y = n(735321),
    W = n(999291),
    K = n(993401),
    z = n(495544),
    $ = n(760751),
    q = n(518477),
    Z = n(375708);
function X(e) {
    let { applicationId: t, onAction: n, onClose: s } = e,
        a = (0, M.bG)([z.default], () => z.default.getId()),
        o = (0, W.Ay)(a, null),
        l = (0, M.bG)([$.A], () => $.A.getDetectableGame(t)),
        u = r.useMemo(
            () =>
                !(
                    null == l ||
                    o?.widgets?.some(
                        (e) =>
                            e instanceof j.Yy &&
                            e.type === H.x.CURRENT_GAMES &&
                            e.games?.some((e) => e.applicationId === t),
                    )
                ) && (0, Y.XX)(l),
            [t, o?.widgets, l],
        ),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    n?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, Y.ew)({ widgetType: H.x.CURRENT_GAMES, game: { applicationId: t }, ignoreMaxGames: !0 }),
                    (0, D.openUserProfileModal)({
                        userId: a,
                        tabSection: q.RP.WIDGETS,
                        scrollTarget: H.x.CURRENT_GAMES,
                    }),
                    s?.();
            },
            [t, a, n, s],
        );
    return u ? (0, i.jsx)(K.FD, { text: Z.intl.string(Z.t.BjYzmC), onClick: c, fullWidth: !0 }) : null;
}
var Q = n(601007),
    J = n(46225),
    ee = n(308335),
    et = n(790381),
    en = n(266080),
    ei = n(729937),
    er = n(123917),
    es = n(998218),
    ea = n(996988),
    eo = n(514566);
async function el(e) {
    let { activity: t, user: n, index: i } = e;
    try {
        let e = await (0, ei.yb)(t, n.id);
        if (e.button_urls.length <= i) return;
        let r = e.button_urls[i];
        if ("string" != typeof r) return;
        let s = es.A.safeParseWithQuery(r);
        if (s?.protocol == null || s?.hostname == null) return;
        (0, er.h)({ href: es.A.format(s), trusted: !1 });
    } catch (e) {}
}
function eu(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: s } = (0, L.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let a = (0, d.A)(n);
    return s === ea.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: eo.fO,
              children: n.buttons.map((e, s) =>
                  (0, i.jsx)(
                      K.FD,
                      {
                          text: a ? Z.intl.string(Z.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  r?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  el({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: eo.fO,
              children: n.buttons.map((e, s) =>
                  (0, i.jsx)(
                      K.FD,
                      {
                          text: a ? Z.intl.string(Z.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  r?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  el({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          });
}
var ec = n(990078),
    ed = n(323384),
    e_ = n(808666),
    ef = n(687966),
    eh = n(780907),
    ep = n(928550),
    eE = n(102853),
    em = n(695311);
function eg(e) {
    let { user: t, activity: n, onAction: r, onClose: s } = e,
        { themeType: a } = (0, L.E)(),
        o = (0, em.A)({ applicationId: n?.application_id, onClose: s }),
        l = (0, eE.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: t, onClose: s }),
        u = (0, ep.d)(n?.application_id);
    if (null == l && null != n && (0, _.A)(n))
        return (0, i.jsx)(K.FD, {
            icon: ed.k,
            text: Z.intl.string(Z.t.RscU7I),
            fullWidth: a !== ea.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != u ? eh.Ay.launch({ applicationId: u }) : (r?.({ action: "PRESS_PLAY_BUTTON" }), o());
            },
        });
    if (null == l) return null;
    let { isJoining: c, handleJoinRequest: d, buttonCTA: f, tooltip: h, isEnabled: p, isEmbedded: E } = l,
        m = a !== ea.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: m ? eo.Ij : void 0,
        children: (0, i.jsx)(ec.m, {
            text: h,
            asContainer: !p,
            children: (0, i.jsx)(K.FD, {
                icon: E ? e_.I : ef._,
                text: f,
                disabled: !p,
                loading: c,
                fullWidth: m,
                onClick: (e) => {
                    e.stopPropagation(), r?.({ action: E ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), d();
                },
            }),
        }),
    });
}
var eA = n(141628);
function eI(e) {
    let { startAuthorization: t, onAction: n } = e,
        { newestAnalyticsLocation: r } = (0, E.Ay)(),
        { themeType: s } = (0, L.E)(),
        a = s === ea.d.MODAL_V2;
    return (0, i.jsx)(K.FD, {
        icon: () => (0, i.jsx)(eA.A, {}),
        text: Z.intl.string(Z.t.sbdnpw),
        fullWidth: !a,
        onClick: (e) => {
            e.stopPropagation(), n?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), t({ analyticsLocations: [r] });
        },
    });
}
var eT = n(626584),
    eS = n(652215);
function eN(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: s } = (0, L.E)(),
        a = s === ea.d.MODAL_V2;
    return (0, x.A)(n, eS.jUm.INSTANCE)
        ? (0, i.jsx)(K.FD, {
              text: Z.intl.string(Z.t.vwl1PK),
              fullWidth: !a,
              onClick: (e) => {
                  e.stopPropagation(),
                      r?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new eT.A("UserActivityActions").log("notify", t.id, n);
              },
          })
        : null;
}
var ey = n(573648),
    eC = n(968309),
    ev = n(30370);
function eO(e) {
    let { platformType: t, icon: n, onAction: r } = e,
        { newestAnalyticsLocation: s } = (0, E.Ay)(),
        { themeType: a } = (0, L.E)(),
        o = a === ea.d.MODAL_V2;
    return (0, M.bG)([ev.A], () => null != ev.A.getAccount(null, t))
        ? null
        : (0, i.jsx)(K.FD, {
              icon: n,
              text: Z.intl.formatToPlainString(Z.t.XWSHTb, { platform: ey.A.get(t).name }),
              fullWidth: !o,
              onClick: (e) => {
                  e.stopPropagation();
                  let n = t === eS.fg2.XBOX;
                  r?.({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, eC.A)({ platformType: t, location: s });
              },
          });
}
var eR = n(378570),
    eb = n(790535),
    eD = n(233993),
    eL = n(734057),
    ew = n(576705),
    eM = n(977997);
function eP(e) {
    let { activity: t, onAction: n, onClose: r } = e,
        { themeType: s } = (0, L.E)(),
        a = s === ea.d.MODAL_V2,
        { channelId: o, guildId: l } = (0, C.UW)(t) ?? {},
        u = (0, M.bG)([eM.A], () => null != o && eM.A.isInChannel(o), [o]),
        c = (0, M.bG)([eL.A], () => (null != o ? eL.A.getChannel(o) : null), [o]),
        d = (0, M.bG)([ew.A], () => null != c && ew.A.can(eD.Gk, c), [c]);
    return (0, C.Cy)(t) && d && null != l && null != o
        ? (0, i.jsx)(K.FD, {
              text: Z.intl.string(Z.t.ZYO5OK),
              fullWidth: !a,
              disabled: u,
              onClick: (e) => {
                  e.stopPropagation(),
                      n?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      eb.CH(l, o),
                      (0, eR.iN)(o),
                      r?.();
              },
          })
        : null;
}
var ex = n(908289);
function eU(e) {
    let { activity: t, onAction: n } = e,
        { themeType: r } = (0, L.E)(),
        s = r === ea.d.MODAL_V2,
        a = (0, ex.A)(t);
    return (0, h.A)(t) && null != a
        ? (0, i.jsx)(K.FD, {
              text: Z.intl.string(Z.t.I6JG46),
              fullWidth: !s,
              onClick: (e) => (e.stopPropagation(), n?.({ action: "PRESS_WATCH_BUTTON" }), window.open(a)),
          })
        : null;
}
var ek = n(985629);
function eG(e) {
    let { user: t, activity: n, onAction: r, onClose: s, application: a, containerClassName: o } = e,
        { themeType: l } = (0, L.E)(),
        u = (0, M.bG)([z.default], () => z.default.getId() === t.id),
        c = (0, B.J)(a),
        d = (0, ee.o)(n?.application_id ?? a?.id) || (0, x.A)(n, eS.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: f } = (0, E.Ay)(p.A.USER_PROFILE_ACTIVITY_BUTTONS),
        m = (0, V.A)("user_profile_activity_buttons", n?.application_id),
        { enabled: g } = P.useConfig({ location: "user_profile_activity_buttons" }),
        { fetched: A, canStartAuthorization: I, hasAlreadyLinked: T, startAuthorization: S } = (0, J.RD)(a),
        N = l === ea.d.MODAL || l === ea.d.MODAL_V2,
        y = l === ea.d.POPOUT,
        v = l === ea.d.MODAL_V2 ? eo.g6 : eo.Zu,
        O =
            m.length > 0
                ? (0, i.jsx)(Q.A, {
                      distributorCTAConfigs: m,
                      applicationId: n?.application_id ?? "",
                      analyticsLocations: f,
                      buttonVariant: "secondary",
                      fullWidth: l !== ea.d.MODAL_V2,
                      stopPropagation: !0,
                      onAction: r,
                      onClose: s,
                  })
                : null,
        R = (() => {
            if (u)
                return y && n?.type === eS.$pd.PLAYING && a?.id != null
                    ? (0, i.jsx)(X, { applicationId: a.id, onAction: r, onClose: s })
                    : null;
            if (n?.buttons != null && n?.buttons.length >= 1)
                return null != O && g
                    ? (0, i.jsxs)("div", {
                          className: v,
                          children: [(0, i.jsx)(eu, { user: t, activity: n, onAction: r }), O],
                      })
                    : (0, i.jsx)(eu, { user: t, activity: n, onAction: r });
            if (!d && c && null != a && !N) {
                let e = (0, i.jsx)(ek.A, { application: a, onAction: r, onClose: s, analyticsLocations: f });
                return null != O && g ? (0, i.jsxs)("div", { className: v, children: [e, O] }) : e;
            }
            if ((0, _.A)(n) || ((0, k.Ay)(n) && d)) {
                let e = (0, i.jsx)(eg, { user: t, activity: n, onAction: r, onClose: s });
                return null != O && g ? (0, i.jsxs)("div", { className: v, children: [e, O] }) : e;
            }
            if (A && I && !T) {
                let e = (0, i.jsx)(eI, { startAuthorization: S, onAction: r });
                return null != O && g ? (0, i.jsxs)("div", { className: v, children: [e, O] }) : e;
            }
            if (null != O) return O;
            if (!(0, U.A)(n)) {
                if ((0, F.A)(n))
                    return (0, i.jsx)(eO, { platformType: eS.fg2.XBOX, icon: () => (0, i.jsx)(en.A, {}), onAction: r });
                if ((0, G.A)(n))
                    return (0, i.jsx)(eO, {
                        platformType: eS.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(et.A, {}),
                        onAction: r,
                    });
            }
            return (0, h.A)(n)
                ? (0, i.jsx)(eU, { activity: n, onAction: r })
                : (0, k.Ay)(n)
                  ? (0, i.jsx)(eg, { user: t, activity: n, onAction: r, onClose: s })
                  : (0, x.A)(n, eS.jUm.INSTANCE)
                    ? (0, i.jsx)(eN, { user: t, activity: n, onAction: r })
                    : (0, C.Cy)(n)
                      ? (0, i.jsx)(eP, { activity: n, onAction: r, onClose: s })
                      : null;
        })();
    return null == R ? null : (0, i.jsx)("div", { className: o, children: R });
}
var eF = n(282197),
    eV = n(624951),
    eB = n(584904),
    eH = n(351638),
    ej = n(531648),
    eY = n(910607),
    eW = n(753713),
    eK = n(269587),
    ez = n(409626),
    e$ = n(692969),
    eq = n(534465),
    eZ = n(360469);
function eX(e) {
    let {
            user: t,
            currentUser: n,
            activity: r,
            application: s,
            voiceGuild: M,
            voiceChannel: P,
            className: x,
            onClose: U,
            appContext: k,
        } = e,
        G = (0, S.GV)(),
        F = (0, S.GV)(),
        { analyticsLocations: V } = (0, E.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: B } = (0, L.E)(),
        H = (0, T.A)({ activity: r, user: t }),
        j = (0, v.A)({ display: "live", user: t, activity: r, entry: H, analyticsLocations: V }),
        Y = (0, O.A)({ userId: t.id, onAction: j }),
        W = (0, m.Ay)(P),
        K = (0, R.A)(r),
        z = null != K.text && "" !== K.text,
        { largeImage: $, smallImage: X } = (0, g.XN)(r, s),
        Q = (function (e) {
            let { location: t, user: n, currentUser: i, activity: r, application: s, entry: a, onClose: o } = e,
                l = (0, e$.A)({
                    location: t,
                    source: ez.Ob.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, eq.UE)({ user: n, activity: r, entry: a }),
                }),
                u = (0, em.A)({ applicationId: s?.id, onClose: o }),
                c = (0, _.A)(r);
            return c && null != s
                ? u
                : !c && (0, f.A)(r)
                  ? l
                  : (0, d.A)(r) && n.id !== i.id
                    ? () => el({ activity: r, user: n, index: 0 })
                    : void 0;
        })({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: r,
            application: s,
            entry: H,
            onClose: U,
        }),
        J = () =>
            (0, h.A)(r) && null != P
                ? (0, i.jsxs)("div", {
                      className: eo.FH,
                      children: [
                          (0, i.jsx)(l.H, { size: "xxs", color: u.A.colors.TEXT_DEFAULT, className: eo.Ow }),
                          (0, i.jsx)(ej.Q, { variant: "heading-sm/semibold", text: W, id: G }),
                      ],
                  })
                : (0, f.A)(r) || (0, C.Cy)(r)
                  ? (0, i.jsx)(ej.Q, { variant: "heading-sm/semibold", text: r.name, id: G })
                  : null != r.details
                    ? (0, i.jsx)(A.O, {
                          href: r.details_url,
                          children: (0, i.jsx)(ej.Q, { variant: "heading-sm/semibold", text: r.details, id: G }),
                      })
                    : (0, i.jsx)(ej.Q, { variant: "heading-sm/semibold", text: r.name, id: G }),
        ee = () =>
            r.type === eS.$pd.HANG_STATUS
                ? null
                : (0, h.A)(r) && null != M
                  ? (0, i.jsx)(ej.A, {
                        variant: "text-xs/normal",
                        text: Z.intl.formatToPlainString(Z.t["hq/Qze"], { guildName: M.name }),
                        onClick: () => {
                            (0, y.u)(M.id), j({ action: "OPEN_VOICE_GUILD" }), U?.();
                        },
                    })
                  : (0, f.A)(r)
                    ? (0, i.jsx)(A.O, {
                          href: r.details_url,
                          children: (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: r.details }),
                      })
                    : (0, C.Cy)(r)
                      ? (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: r?.assets?.small_text })
                      : (0, i.jsx)(A.O, {
                            href: r.state_url,
                            children: (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: r.state }),
                        }),
        et = () => {
            if (r.type === eS.$pd.WATCHING) return null;
            if ((0, f.A)(r)) return en();
            if ((0, C.Cy)(r) && r.party?.size != null && r.party?.size.length >= 2) {
                let e = Z.intl.formatToPlainString(Z.t["JC/3xw"], {
                    numSpeakers: r.party?.size[0],
                    numListeners: r.party?.size[1] - r.party?.size[0],
                });
                return (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: e });
            }
            return r.assets?.large_text != null
                ? (0, i.jsx)(A.O, {
                      href: r.assets?.large_url,
                      children: (0, i.jsx)(ej.A, { text: r.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        en = () =>
            r.party?.size == null && r.application_id === eZ.I4
                ? (0, i.jsxs)("div", {
                      className: eo.CI,
                      children: [
                          (0, i.jsx)(A.O, {
                              href: r.state_url,
                              children: (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: r.state }),
                          }),
                          (0, i.jsx)(ej.A, {
                              variant: "text-xs/normal",
                              text: Z.intl.formatToPlainString(Z.t["u//9By"], {
                                  count: "0",
                                  max: s?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, _.A)(r) && r.party?.size != null && r.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: eo.CI,
                        children: [
                            (0, i.jsx)(A.O, {
                                href: r.state_url,
                                children: (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: r.state }),
                            }),
                            (0, i.jsx)(ej.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === r.party.size[1]
                                        ? Z.intl.formatToPlainString(Z.t.IM4J4e, { count: r.party.size[0] })
                                        : Z.intl.formatToPlainString(Z.t["u//9By"], {
                                              count: r.party.size[0],
                                              max: r.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == r.party
                    ? (0, i.jsx)(A.O, {
                          href: r.state_url,
                          children: (0, i.jsx)(ej.A, { variant: "text-xs/normal", text: r.state }),
                      })
                    : null,
        ei = () =>
            (0, i.jsx)(eG, {
                containerClassName: eo.o1,
                activity: r,
                user: t,
                onAction: j,
                onClose: U,
                application: s,
            });
    return (0, i.jsx)(E.f5, {
        value: V,
        children: (0, i.jsxs)(eB.A, {
            ref: Y,
            className: a()(eo.Nr, x),
            onAction: j,
            onClose: U,
            "aria-labelledby": z ? `${F} ${G}` : G,
            children: [
                (0, i.jsx)(eH.A, {
                    textId: F,
                    ...K,
                    contextMenu: (0, i.jsx)(eK.A, {
                        display: "live",
                        user: t,
                        activity: r,
                        entry: H,
                        onClose: U,
                        appContext: k,
                    }),
                }),
                (0, i.jsx)(N.A, {
                    applicationId: s?.id,
                    questContent: o.u.USER_PROFILE_ACTIVITY,
                    children: (e) => {
                        let n, s;
                        return (0, i.jsxs)("div", {
                            className: eo.rf,
                            ref: e,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: eo.Qs,
                                    children: [
                                        !t.bot &&
                                            ((n = (0, d.A)(r) ? "crunchyroll" : "default"),
                                            (s = B === ea.d.MODAL_V2 ? I.w.SIZE_100 : I.w.SIZE_60),
                                            null == Q
                                                ? (0, i.jsx)(I.d, {
                                                      image: $,
                                                      smallImage: X,
                                                      size: s,
                                                      aspectRatio: n,
                                                      className: eo.Sl,
                                                  })
                                                : (0, i.jsx)(I.d, {
                                                      image: $,
                                                      smallImage: X,
                                                      size: s,
                                                      className: eo.mM,
                                                      aspectRatio: n,
                                                      onClick: (e) => {
                                                          j({ action: "PRESS_IMAGE" }), Q(e);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: eo.zH,
                                            children: [
                                                null == Q
                                                    ? (0, i.jsxs)("div", { children: [J(), ee(), et()] })
                                                    : (0, i.jsxs)(c.D, {
                                                          className: eo.sd,
                                                          onClick: (e) => {
                                                              j({ action: "PRESS_TEXT" }), Q(e);
                                                          },
                                                          children: [J(), ee(), et()],
                                                      }),
                                                !t.bot && (0, i.jsx)(eF.A, { user: t, activity: r, className: eo.jp }),
                                                (() => {
                                                    if (!(0, b.A)(r)) return null;
                                                    let { start: e, end: t } = r.timestamps;
                                                    return (0, i.jsx)(eW.A, { start: e, end: t });
                                                })(),
                                                B === ea.d.MODAL_V2 && ei(),
                                            ],
                                        }),
                                        B === ea.d.MODAL && ei(),
                                    ],
                                }),
                                null == M || null == P
                                    ? null
                                    : (0, i.jsx)(eY.A, { user: t, guild: M, channel: P, onAction: j, onClose: U }),
                            ],
                        });
                    },
                }),
                B !== ea.d.MODAL &&
                    B !== ea.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ei(),
                            (0, i.jsx)(w.A, {
                                className: eo.AB,
                                userId: t.id,
                                activityApplication: s,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        j({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        U?.(),
                                        (0, D.openUserProfileModal)({ userId: t.id, tabSection: q.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(eV.A, { applicationId: s?.id, onAction: j, onClose: U, activity: r }),
            ],
        }),
    });
}
