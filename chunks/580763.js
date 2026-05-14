"use strict";
n.d(t, { A: () => eZ });
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
    R = n(248302),
    b = n(53257),
    D = n(975732),
    L = n(939496),
    w = n(964195),
    M = n(17928),
    P = n(55730),
    x = n(682261),
    U = n(874546),
    k = n(141639),
    G = n(61330),
    F = n(154483),
    V = n(737393),
    B = n(540185),
    H = n(289173),
    j = n(735321),
    Y = n(999291),
    W = n(993401),
    K = n(495544),
    z = n(760751),
    $ = n(518477),
    q = n(375708);
function Z(e) {
    let { applicationId: t, onAction: n, onClose: s } = e,
        a = (0, M.bG)([K.default], () => K.default.getId()),
        o = (0, Y.Ay)(a, null),
        l = (0, M.bG)([z.A], () => z.A.getDetectableGame(t)),
        u = r.useMemo(
            () =>
                !(
                    null == l ||
                    o?.widgets?.some(
                        (e) =>
                            e instanceof H.Yy &&
                            e.type === B.x.CURRENT_GAMES &&
                            e.games?.some((e) => e.applicationId === t),
                    )
                ) && (0, j.XX)(l),
            [t, o?.widgets, l],
        ),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    n?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, j.ew)({ widgetType: B.x.CURRENT_GAMES, game: { applicationId: t }, ignoreMaxGames: !0 }),
                    (0, D.openUserProfileModal)({
                        userId: a,
                        tabSection: $.RP.WIDGETS,
                        scrollTarget: B.x.CURRENT_GAMES,
                    }),
                    s?.();
            },
            [t, a, n, s],
        );
    return u ? (0, i.jsx)(W.FD, { text: q.intl.string(q.t.BjYzmC), onClick: c, fullWidth: !0 }) : null;
}
var X = n(601007),
    Q = n(46225),
    J = n(308335),
    ee = n(790381),
    et = n(266080),
    en = n(729937),
    ei = n(123917),
    er = n(998218),
    es = n(996988),
    ea = n(514566);
async function eo(e) {
    let { activity: t, user: n, index: i } = e;
    try {
        let e = await (0, en.yb)(t, n.id);
        if (e.button_urls.length <= i) return;
        let r = e.button_urls[i];
        if ("string" != typeof r) return;
        let s = er.A.safeParseWithQuery(r);
        if (s?.protocol == null || s?.hostname == null) return;
        (0, ei.h)({ href: er.A.format(s), trusted: !1 });
    } catch (e) {}
}
function el(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: s } = (0, L.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let a = (0, d.A)(n);
    return s === es.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: ea.fO,
              children: n.buttons.map((e, s) =>
                  (0, i.jsx)(
                      W.FD,
                      {
                          text: a ? q.intl.string(q.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  r?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  eo({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: ea.fO,
              children: n.buttons.map((e, s) =>
                  (0, i.jsx)(
                      W.FD,
                      {
                          text: a ? q.intl.string(q.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  r?.({ action: a ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  eo({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          });
}
var eu = n(990078),
    ec = n(323384),
    ed = n(808666),
    e_ = n(687966),
    ef = n(780907),
    eh = n(928550),
    ep = n(102853),
    eE = n(695311);
function em(e) {
    let { user: t, activity: n, onAction: r, onClose: s } = e,
        { themeType: a } = (0, L.E)(),
        o = (0, eE.A)({ applicationId: n?.application_id, onClose: s }),
        l = (0, ep.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: t, onClose: s }),
        u = (0, eh.d)(n?.application_id);
    if (null == l && null != n && (0, _.A)(n))
        return (0, i.jsx)(W.FD, {
            icon: ec.k,
            text: q.intl.string(q.t.RscU7I),
            fullWidth: a !== es.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != u ? ef.Ay.launch({ applicationId: u }) : (r?.({ action: "PRESS_PLAY_BUTTON" }), o());
            },
        });
    if (null == l) return null;
    let { isJoining: c, handleJoinRequest: d, buttonCTA: f, tooltip: h, isEnabled: p, isEmbedded: E } = l,
        m = a !== es.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: m ? ea.Ij : void 0,
        children: (0, i.jsx)(eu.m, {
            text: h,
            asContainer: !p,
            children: (0, i.jsx)(W.FD, {
                icon: E ? ed.I : e_._,
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
var eg = n(141628);
function eA(e) {
    let { startAuthorization: t, onAction: n } = e,
        { newestAnalyticsLocation: r } = (0, E.Ay)(),
        { themeType: s } = (0, L.E)(),
        a = s === es.d.MODAL_V2;
    return (0, i.jsx)(W.FD, {
        icon: () => (0, i.jsx)(eg.A, {}),
        text: q.intl.string(q.t.sbdnpw),
        fullWidth: !a,
        onClick: (e) => {
            e.stopPropagation(), n?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), t({ analyticsLocations: [r] });
        },
    });
}
var eI = n(626584),
    eT = n(652215);
function eS(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: s } = (0, L.E)(),
        a = s === es.d.MODAL_V2;
    return (0, P.A)(n, eT.jUm.INSTANCE)
        ? (0, i.jsx)(W.FD, {
              text: q.intl.string(q.t.vwl1PK),
              fullWidth: !a,
              onClick: (e) => {
                  e.stopPropagation(),
                      r?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new eI.A("UserActivityActions").log("notify", t.id, n);
              },
          })
        : null;
}
var eN = n(573648),
    ey = n(968309),
    eC = n(30370);
function ev(e) {
    let { platformType: t, icon: n, onAction: r } = e,
        { newestAnalyticsLocation: s } = (0, E.Ay)(),
        { themeType: a } = (0, L.E)(),
        o = a === es.d.MODAL_V2;
    return (0, M.bG)([eC.A], () => null != eC.A.getAccount(null, t))
        ? null
        : (0, i.jsx)(W.FD, {
              icon: n,
              text: q.intl.formatToPlainString(q.t.XWSHTb, { platform: eN.A.get(t).name }),
              fullWidth: !o,
              onClick: (e) => {
                  e.stopPropagation();
                  let n = t === eT.fg2.XBOX;
                  r?.({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, ey.A)({ platformType: t, location: s });
              },
          });
}
var eO = n(378570),
    eR = n(790535),
    eb = n(233993),
    eD = n(734057),
    eL = n(576705),
    ew = n(977997);
function eM(e) {
    let { activity: t, onAction: n, onClose: r } = e,
        { themeType: s } = (0, L.E)(),
        a = s === es.d.MODAL_V2,
        { channelId: o, guildId: l } = (0, C.UW)(t) ?? {},
        u = (0, M.bG)([ew.A], () => null != o && ew.A.isInChannel(o), [o]),
        c = (0, M.bG)([eD.A], () => (null != o ? eD.A.getChannel(o) : null), [o]),
        d = (0, M.bG)([eL.A], () => null != c && eL.A.can(eb.Gk, c), [c]);
    return (0, C.Cy)(t) && d && null != l && null != o
        ? (0, i.jsx)(W.FD, {
              text: q.intl.string(q.t.ZYO5OK),
              fullWidth: !a,
              disabled: u,
              onClick: (e) => {
                  e.stopPropagation(),
                      n?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      eR.CH(l, o),
                      (0, eO.iN)(o),
                      r?.();
              },
          })
        : null;
}
var eP = n(908289);
function ex(e) {
    let { activity: t, onAction: n } = e,
        { themeType: r } = (0, L.E)(),
        s = r === es.d.MODAL_V2,
        a = (0, eP.A)(t);
    return (0, h.A)(t) && null != a
        ? (0, i.jsx)(W.FD, {
              text: q.intl.string(q.t.I6JG46),
              fullWidth: !s,
              onClick: (e) => (e.stopPropagation(), n?.({ action: "PRESS_WATCH_BUTTON" }), window.open(a)),
          })
        : null;
}
var eU = n(985629);
function ek(e) {
    let { user: t, activity: n, onAction: r, onClose: s, application: a, containerClassName: o } = e,
        { themeType: l } = (0, L.E)(),
        u = (0, M.bG)([K.default], () => K.default.getId() === t.id),
        c = (0, V.J)(a),
        d = (0, J.o)(n?.application_id ?? a?.id) || (0, P.A)(n, eT.jUm.SUPPORTS_JOIN_URL),
        { analyticsLocations: f } = (0, E.Ay)(p.A.USER_PROFILE_ACTIVITY_BUTTONS),
        m = (0, F.A)("user_profile_activity_buttons", n?.application_id),
        { fetched: g, canStartAuthorization: A, hasAlreadyLinked: I, startAuthorization: T } = (0, Q.RD)(a),
        S = l === es.d.MODAL || l === es.d.MODAL_V2,
        N = l === es.d.POPOUT,
        y = (() => {
            if (u)
                return N && n?.type === eT.$pd.PLAYING && a?.id != null
                    ? (0, i.jsx)(Z, { applicationId: a.id, onAction: r, onClose: s })
                    : null;
            if (n?.buttons != null && n?.buttons.length >= 1)
                return (0, i.jsx)(el, { user: t, activity: n, onAction: r });
            if (!d && c && null != a && !S)
                return (0, i.jsx)(eU.A, { application: a, onAction: r, onClose: s, analyticsLocations: f });
            if ((0, _.A)(n) || ((0, U.Ay)(n) && d))
                return (0, i.jsx)(em, { user: t, activity: n, onAction: r, onClose: s });
            if (g && A && !I) return (0, i.jsx)(eA, { startAuthorization: T, onAction: r });
            if (m.length > 0)
                return (0, i.jsx)(X.A, {
                    distributorCTAConfigs: m,
                    applicationId: n?.application_id ?? "",
                    analyticsLocations: f,
                    buttonVariant: "secondary",
                    fullWidth: l !== es.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: r,
                    onClose: s,
                });
            if (!(0, x.A)(n)) {
                if ((0, G.A)(n))
                    return (0, i.jsx)(ev, { platformType: eT.fg2.XBOX, icon: () => (0, i.jsx)(et.A, {}), onAction: r });
                if ((0, k.A)(n))
                    return (0, i.jsx)(ev, {
                        platformType: eT.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(ee.A, {}),
                        onAction: r,
                    });
            }
            return (0, h.A)(n)
                ? (0, i.jsx)(ex, { activity: n, onAction: r })
                : (0, U.Ay)(n)
                  ? (0, i.jsx)(em, { user: t, activity: n, onAction: r, onClose: s })
                  : (0, P.A)(n, eT.jUm.INSTANCE)
                    ? (0, i.jsx)(eS, { user: t, activity: n, onAction: r })
                    : (0, C.Cy)(n)
                      ? (0, i.jsx)(eM, { activity: n, onAction: r, onClose: s })
                      : null;
        })();
    return null == y ? null : (0, i.jsx)("div", { className: o, children: y });
}
var eG = n(282197),
    eF = n(624951),
    eV = n(584904),
    eB = n(351638),
    eH = n(531648),
    ej = n(910607),
    eY = n(753713),
    eW = n(269587),
    eK = n(409626),
    ez = n(692969),
    e$ = n(534465),
    eq = n(360469);
function eZ(e) {
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
        { largeImage: Z, smallImage: X } = (0, g.XN)(r, s),
        Q = (function (e) {
            let { location: t, user: n, currentUser: i, activity: r, application: s, entry: a, onClose: o } = e,
                l = (0, ez.A)({
                    location: t,
                    source: eK.Ob.UserProfile,
                    trackEntryPointImpression: !0,
                    ...(0, e$.UE)({ user: n, activity: r, entry: a }),
                }),
                u = (0, eE.A)({ applicationId: s?.id, onClose: o }),
                c = (0, _.A)(r);
            return c && null != s
                ? u
                : !c && (0, f.A)(r)
                  ? l
                  : (0, d.A)(r) && n.id !== i.id
                    ? () => eo({ activity: r, user: n, index: 0 })
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
                      className: ea.FH,
                      children: [
                          (0, i.jsx)(l.H, { size: "xxs", color: u.A.colors.TEXT_DEFAULT, className: ea.Ow }),
                          (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: W, id: G }),
                      ],
                  })
                : (0, f.A)(r) || (0, C.Cy)(r)
                  ? (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: r.name, id: G })
                  : null != r.details
                    ? (0, i.jsx)(A.O, {
                          href: r.details_url,
                          children: (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: r.details, id: G }),
                      })
                    : (0, i.jsx)(eH.Q, { variant: "heading-sm/semibold", text: r.name, id: G }),
        ee = () =>
            r.type === eT.$pd.HANG_STATUS
                ? null
                : (0, h.A)(r) && null != M
                  ? (0, i.jsx)(eH.A, {
                        variant: "text-xs/normal",
                        text: q.intl.formatToPlainString(q.t["hq/Qze"], { guildName: M.name }),
                        onClick: () => {
                            (0, y.u)(M.id), j({ action: "OPEN_VOICE_GUILD" }), U?.();
                        },
                    })
                  : (0, f.A)(r)
                    ? (0, i.jsx)(A.O, {
                          href: r.details_url,
                          children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.details }),
                      })
                    : (0, C.Cy)(r)
                      ? (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r?.assets?.small_text })
                      : (0, i.jsx)(A.O, {
                            href: r.state_url,
                            children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                        }),
        et = () => {
            if (r.type === eT.$pd.WATCHING) return null;
            if ((0, f.A)(r)) return en();
            if ((0, C.Cy)(r) && r.party?.size != null && r.party?.size.length >= 2) {
                let e = q.intl.formatToPlainString(q.t["JC/3xw"], {
                    numSpeakers: r.party?.size[0],
                    numListeners: r.party?.size[1] - r.party?.size[0],
                });
                return (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: e });
            }
            return r.assets?.large_text != null
                ? (0, i.jsx)(A.O, {
                      href: r.assets?.large_url,
                      children: (0, i.jsx)(eH.A, { text: r.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        en = () =>
            r.party?.size == null && r.application_id === eq.I4
                ? (0, i.jsxs)("div", {
                      className: ea.CI,
                      children: [
                          (0, i.jsx)(A.O, {
                              href: r.state_url,
                              children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                          }),
                          (0, i.jsx)(eH.A, {
                              variant: "text-xs/normal",
                              text: q.intl.formatToPlainString(q.t["u//9By"], {
                                  count: "0",
                                  max: s?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, _.A)(r) && r.party?.size != null && r.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: ea.CI,
                        children: [
                            (0, i.jsx)(A.O, {
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
                    ? (0, i.jsx)(A.O, {
                          href: r.state_url,
                          children: (0, i.jsx)(eH.A, { variant: "text-xs/normal", text: r.state }),
                      })
                    : null,
        ei = () =>
            (0, i.jsx)(ek, {
                containerClassName: ea.o1,
                activity: r,
                user: t,
                onAction: j,
                onClose: U,
                application: s,
            });
    return (0, i.jsx)(E.f5, {
        value: V,
        children: (0, i.jsxs)(eV.A, {
            ref: Y,
            className: a()(ea.Nr, x),
            onAction: j,
            onClose: U,
            "aria-labelledby": z ? `${F} ${G}` : G,
            children: [
                (0, i.jsx)(eB.A, {
                    textId: F,
                    ...K,
                    contextMenu: (0, i.jsx)(eW.A, {
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
                            className: ea.rf,
                            ref: e,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ea.Qs,
                                    children: [
                                        !t.bot &&
                                            ((n = (0, d.A)(r) ? "crunchyroll" : "default"),
                                            (s = B === es.d.MODAL_V2 ? I.w.SIZE_100 : I.w.SIZE_60),
                                            null == Q
                                                ? (0, i.jsx)(I.d, {
                                                      image: Z,
                                                      smallImage: X,
                                                      size: s,
                                                      aspectRatio: n,
                                                      className: ea.Sl,
                                                  })
                                                : (0, i.jsx)(I.d, {
                                                      image: Z,
                                                      smallImage: X,
                                                      size: s,
                                                      className: ea.mM,
                                                      aspectRatio: n,
                                                      onClick: (e) => {
                                                          j({ action: "PRESS_IMAGE" }), Q(e);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: ea.zH,
                                            children: [
                                                null == Q
                                                    ? (0, i.jsxs)("div", { children: [J(), ee(), et()] })
                                                    : (0, i.jsxs)(c.D, {
                                                          className: ea.sd,
                                                          onClick: (e) => {
                                                              j({ action: "PRESS_TEXT" }), Q(e);
                                                          },
                                                          children: [J(), ee(), et()],
                                                      }),
                                                !t.bot && (0, i.jsx)(eG.A, { user: t, activity: r, className: ea.jp }),
                                                (() => {
                                                    if (!(0, b.A)(r)) return null;
                                                    let { start: e, end: t } = r.timestamps;
                                                    return (0, i.jsx)(eY.A, { start: e, end: t });
                                                })(),
                                                B === es.d.MODAL_V2 && ei(),
                                            ],
                                        }),
                                        B === es.d.MODAL && ei(),
                                    ],
                                }),
                                null == M || null == P
                                    ? null
                                    : (0, i.jsx)(ej.A, { user: t, guild: M, channel: P, onAction: j, onClose: U }),
                            ],
                        });
                    },
                }),
                B !== es.d.MODAL &&
                    B !== es.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ei(),
                            (0, i.jsx)(w.A, {
                                className: ea.AB,
                                userId: t.id,
                                activityApplication: s,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        j({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        U?.(),
                                        (0, D.openUserProfileModal)({ userId: t.id, tabSection: $.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(eF.A, { applicationId: s?.id, onAction: j, onClose: U, activity: r }),
            ],
        }),
    });
}
