l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => eY, default: () => e$ });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(835245),
    o = l(17928),
    c = l(534514),
    d = l(834730),
    u = l(289873),
    g = l(444927),
    m = l(793574),
    p = l(688810),
    x = l(976860),
    f = l(435658),
    h = l(561794),
    j = l(495544),
    I = l(696451),
    A = l(71393),
    k = l(67480),
    v = l(385648),
    S = l(871123),
    _ = l(733391),
    b = l(439303),
    E = l(353281),
    N = l(429635),
    L = l(317560),
    C = l(696292),
    y = l(939249),
    R = l(366010),
    T = l(926268),
    M = l(736653),
    O = l(742589),
    D = l(617986),
    G = l(975732),
    H = l(371446),
    w = l(70926),
    F = l(287809),
    P = l(174459),
    $ = l(975571),
    Y = l(371794),
    V = l(995393),
    U = l(652215),
    B = l(518477),
    Z = l(375708),
    J = l(718356);
function W(e) {
    let { content: t, onClick: l, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(y.D, { className: i()(J.gb, a), onClick: l, "aria-label": s, children: t });
}
function X() {
    let { enabled: e } = (0, H.Z)({ location: "slayer_storefront_header" }),
        t = s.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: C.u.ORBS_BALANCE_MENU });
        }, []);
    return e
        ? (0, n.jsx)(w.SS, { cardAlignment: w.SS.CardAlignment.END, ctaText: Z.intl.string(Z.t.VC4Mq0), ctaOnClick: t })
        : null;
}
function z(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        a = (0, R.M)((0, M.Ay)()),
        r = (0, o.bG)([F.default], () => F.default.getCurrentUser()),
        c = (0, b.jM)(),
        { analyticsLocations: u } = (0, p.Ay)(),
        { getSocialLayerStorefrontLink: g } = (0, E.H)(),
        f = s.useCallback(() => {
            r?.id != null &&
                (0, G.openUserProfileModal)({
                    userId: r.id,
                    tabSection: B.RP.WISHLIST,
                    sourceAnalyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = s.useCallback(() => {
            P.default.track(U.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: V.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open($.A.getArticleURL(U.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        j = s.useCallback(() => {
            null != g && (0, x.pX)(g(0));
        }, [g]);
    if (null == t) return null;
    let I = null != t.logoAssetId ? (0, Y.YE)(t.applicationId, t.logoAssetId, 128) : null,
        A = null != t.lightThemeLogoAssetId ? (0, Y.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        k = null;
    return (
        (k = a ? (I ?? A) : (A ?? I)),
        (0, n.jsxs)(O.A, {
            disableDoubleClick: !0,
            className: J.N1,
            children: [
                (0, n.jsxs)(y.D, {
                    onClick: j,
                    className: J.gn,
                    children: [
                        null != k && (0, n.jsx)("img", { className: J.wm, src: k, alt: t.title }),
                        (0, n.jsx)(O.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: J.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                O.A.Title,
                                {
                                    onClick: () => {
                                        null != g && (0, x.pX)(g(t));
                                    },
                                    wrapperClassName: J.oB,
                                    className: i()(J.xT, { [J.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: J.sZ,
                    children: [
                        (0, n.jsx)(W, {
                            content: (0, n.jsx)(T.C, { size: "xs", color: "currentColor" }),
                            onClick: f,
                            ariaLabel: Z.intl.string(Z.t["7lZ31J"]),
                            className: J.ij,
                        }),
                        (0, n.jsx)(X, {}),
                        (0, n.jsx)(W, {
                            onClick: h,
                            ariaLabel: Z.intl.string(Z.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: Z.intl.string(Z.t.hvVgAZ),
                            }),
                            className: J.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var K = l(689175),
    q = l(765671);
let Q = (0, l(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = l(517907),
    et = l(31969),
    el = l(328100),
    en = l(514270);
function es(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == t
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: en.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: en.FS,
                          children: [
                              (0, n.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: t.title }),
                              (0, n.jsx)(d.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: t.description,
                              }),
                          ],
                      }),
                      null != l &&
                          (0, n.jsx)("div", {
                              className: en.Ui,
                              children: (0, n.jsx)(el.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: el.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var ea = l(317097),
    ei = l(43990),
    er = l(406810),
    eo = l(52133),
    ec = l(417098),
    ed = l(396583),
    eu = l(421108),
    eg = l(920948),
    em = l(818348),
    ep = l(569901);
function ex(e) {
    let { className: t, color: l = "default", sticky: s = !1, children: a } = e,
        r = s ? ep.qf : void 0;
    function o() {
        let {
            className: e,
            noticeColor: t,
            customStyle: l,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.jsx)(ec.$T, { className: e, color: t, style: l, children: a });
    }
    if ("nitro-pink" === l)
        return o({
            className: i()(ep.cI, ep.p3, r, t),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, ea.qt)(l)) {
        let e = (0, ea.OK)((0, ea.LX)(l)) > 0.5 ? em.NJ.DARK : em.NJ.LIGHT;
        return (0, n.jsx)(ei.N, {
            theme: e,
            children: (e) =>
                o({
                    className: i()(e, ep.cI, r, t),
                    customStyle: {
                        "--custom-notice-background": l,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": l,
                    },
                }),
        });
    }
    return (0, n.jsx)(ei.N, {
        theme: em.NJ.DARK,
        children: (e) => o({ className: i()(e, ep.cI, r, t), noticeColor: ec.Hv.BRAND }),
    });
}
function ef(e) {
    let { Icon: t, text: l, endDatetime: a, ...i } = e,
        [r, o] = s.useState(() => (0, eu.Z)(a));
    (0, ed.A)(() => {
        let e = (0, eu.Z)(a);
        o((t) => (null == e ? null : null != t && (0, eo.A)(t, e) ? t : e));
    }, 1e3);
    let c = () =>
        (0, n.jsxs)("div", {
            className: ep.lt,
            children: [
                null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: "string" == typeof l ? (0, eg.U)(l) : l,
                }),
            ],
        });
    return null != r
        ? r.days > 0
            ? (0, n.jsxs)(ex, { ...i, children: [c(), (0, n.jsx)(eh, { days: r.days })] })
            : (0, n.jsxs)(ex, { ...i, children: [c(), (0, n.jsx)(ej, { timeLeft: r })] })
        : null != a && null == r
          ? null
          : (0, n.jsx)(ex, { ...i, children: c() });
}
function eh(e) {
    let { days: t } = e;
    return (0, n.jsxs)("div", {
        className: ep.S5,
        children: [
            (0, n.jsx)(er.O, { size: "sm", color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                children: Z.intl.formatToPlainString(Z.t.BXpdIg, { days: t }),
            }),
        ],
    });
}
function ej(e) {
    let {
        timeLeft: { days: t, hours: l, minutes: s, seconds: a },
    } = e;
    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = String(e).padStart(2, "0").split("");
        return (0, n.jsx)(n.Fragment, {
            children: l.map((e, l) =>
                (0, n.jsx)(
                    d.E,
                    {
                        className: i()(ep.g2, { [ep.$2]: t }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: e,
                    },
                    l,
                ),
            ),
        });
    }
    function o() {
        return (0, n.jsx)(d.E, { className: ep.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, n.jsxs)("div", {
        className: ep.kz,
        children: [t > 0 && r(t), t > 0 && o(), r(l), o(), r(s), o(), r(a, !0)],
    });
}
var eI = l(500102);
function eA(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        s = null != l ? (0, Y.YE)(t, l, 1024, S.pV) : null;
    return (0, n.jsx)("div", {
        className: eI._,
        children: null != s ? (0, n.jsx)("div", { className: eI.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ek = l(198647);
function ev(e) {
    let { skuIds: t, variant: l = el.s.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(ek.kL, ek.$2, { [ek.Wc]: l === el.s.MEDIUM }),
              children: t.map((e, t) =>
                  (0, n.jsx)(el.A, { positionInSection: t, skuId: e, variant: l, analyticsLocations: s }, `${e}-${t}`),
              ),
          });
}
var eS = l(259238);
function e_(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: a, variant: i = el.s.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    return null == a || 0 === a.length
        ? null
        : (0, n.jsx)(b.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: eS.h,
                  children: [
                      null != l &&
                          l.length > 0 &&
                          (0, n.jsx)(c.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eS.G,
                              children: l,
                          }),
                      (0, n.jsx)(ev, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var eb = l(821609),
    eE = l(403581),
    eN = l(587895),
    eL = l(532794),
    eC = l(832163),
    ey = l(69236),
    eR = l(788868),
    eT = l(430825),
    eM = l(201483);
function eO(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        a = (0, ey.W)(),
        i = (0, o.bG)([eN.A], () => eN.A.getApplication(t)),
        r = (0, o.bG)([eC.A], () => eC.A.getConfigForApplicationId(t)),
        c = s.useCallback(() => {
            (0, eL.A)({ subscriptionTier: eR.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]),
        u =
            r?.promotionEndDatetime != null
                ? new Intl.DateTimeFormat(Z.intl.currentLocale, { month: "long", day: "numeric" }).format(
                      r?.promotionEndDatetime,
                  )
                : "";
    return a
        ? (0, n.jsx)(ef, {
              sticky: !0,
              color: "nitro-pink",
              text: Z.intl.format(eT.default.iFXcjn, { applicationName: i?.name, endDate: u }),
              endDatetime: r?.promotionEndDatetime,
          })
        : (0, n.jsx)(ex, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eM.k,
                  children: [
                      (0, n.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "currentColor",
                          children: Z.intl.format(eT.default.iFXcjn, { applicationName: i?.name, endDate: u }),
                      }),
                      (0, n.jsx)(eb.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: eE.t,
                          text: Z.intl.string(Z.t.pj0XBN),
                          onClick: c,
                      }),
                  ],
              }),
          });
}
var eD = l(59520);
function eG(e, t, l, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (s + a) / i;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: g,
            } = t;
            P.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: g,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: l,
            });
        }
    }
}
var eH = l(384274);
function ew(e) {
    let t,
        l,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, q.Ay)(),
        c = (0, b.jM)(),
        { analyticsLocations: d } = (0, p.Ay)(),
        u = s.useRef(null),
        { handleScroll: g } =
            ((t = s.useRef(c)),
            s.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, eD.I)(eG, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            l(U.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [l, d, u]),
            }),
        m = (function (e) {
            let { location: t } = e;
            return Q.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        x = (0, ee.A)({ applicationId: a, location: "SocialLayerStorefrontPage" }),
        f = (0, et.F)("storefront_banner", { applicationId: a }),
        [h, j] = s.useMemo(() => {
            if (i?.skuIds == null || 0 === i.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return i?.leaderboard == null || null == e || e < 564
                ? [[], i.skuIds]
                : e < 1104
                  ? i.skuIds.length >= 2
                      ? [[], i.skuIds]
                      : [i.skuIds.slice(0, 1), i.skuIds.slice(1)]
                  : [i.skuIds.slice(0, 2), i.skuIds.slice(2)];
        }, [i, o]),
        I = 1 === h.length && null != o && o >= 834 && !m;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: l, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = c;
        P.default.track(U.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            application_id: a,
            page_index: l,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: d,
        });
    }, [c, a, d]),
    null == i)
        ? null
        : (0, n.jsxs)(K.Ch, {
              ref: u,
              onScroll: g,
              children: [
                  x
                      ? (0, n.jsx)(eO, { applicationId: a, analyticsLocations: d })
                      : null != f && (0, n.jsx)(ef, { sticky: !0, Icon: f.Icon, text: f.text, endDatetime: f.endsAt }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eH.k,
                      children: [
                          (0, n.jsx)(eA, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !m &&
                              (0, n.jsx)(es, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: I ? h[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(e_, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : h,
                              variant: el.s.MEDIUM,
                          }),
                          (0, n.jsx)(e_, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          i.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  e_,
                                  {
                                      analyticsSectionId: `index:${t}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${t}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var eF = l(253004);
function eP(e) {
    let { storefront: t, guildId: l, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, b.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, E.H)(),
        d = s.useRef(r);
    s.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = s.useCallback(() => {
            null != c && (0, x.bG)(c(0));
        }, [c]),
        g = i?.id;
    return (
        s.useEffect(() => {
            if (null != g)
                return (
                    (0, L.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: g,
                        applicationId: t.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, x.JK)().location;
                            (0, S.rG)(e, n, t.applicationId, l) && null != c && (0, x.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, L.j)();
                    }
                );
        }, [l, a, g, t.applicationId, c, u]),
        (0, n.jsxs)("div", {
            className: eF.kL,
            children: [o?.(a, t), (0, n.jsx)(ew, { applicationId: t.applicationId, page: t.pages[a] })],
        })
    );
}
function e$(e) {
    let { match: t } = e,
        { guildId: l, gameShopPageIndex: a, gameShopSkuId: i } = t.params,
        r = (0, o.bG)([j.default], () => j.default.getSessionId(), []),
        c = s.useCallback((e, t, n) => U.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, S.nY)(l),
        u = s.useCallback((e, t) => (0, n.jsx)(z, { storefront: t, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == l || null == r || (null == A.A.getGuild(l) && (0, v.Z2)(l, {}, { shouldNavigate: !1 }));
        }, [l, r]),
        (0, n.jsx)(eY, {
            applicationId: d,
            guildId: l,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eY(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: a,
            pageIndex: x = 0,
            renderHeader: A,
            getSocialLayerStorefrontLink: v,
        } = e,
        { analyticsLocations: S } = (0, p.Ay)(m.A.SOCIAL_LAYER_STOREFRONT),
        L = (0, N.A)({ applicationId: t }),
        C = (0, o.bG)([k.A], () => k.A.get(a), [a]);
    (0, h.pE)(), (0, f.x)({ applicationId: L?.storefront?.applicationId });
    let y = (0, g.A)((0, r.A)()),
        R = (0, o.bG)([I.Ay, j.default], () => I.Ay.isMember(l, j.default.getId())),
        T = s.useMemo(
            () =>
                null == x || isNaN(x) || (null != L && null != L.storefront && x >= L.storefront.pages.length) ? 0 : x,
            [x, L],
        ),
        M = L?.storefront?.pages[T]?.title ?? null,
        O = L?.storefront?.pages[T]?.leaderboard != null,
        D = s.useMemo(
            () => ({
                sessionId: y,
                guildId: l,
                applicationId: t,
                pageIndex: T,
                pageTitle: M,
                isUserGuildMember: R,
                pageHasLeaderboard: O,
            }),
            [y, l, t, T, M, R, O],
        );
    return (s.useEffect(() => {
        null != t && (0, _.SP)(t, T, null != a ? a : null);
    }, [t, T, a]),
    null == t || L?.storefront == null)
        ? null != L && "loading" !== L.state
            ? (0, n.jsxs)("div", {
                  className: i()(eF.p$, eF.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: Z.intl.string(eT.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: Z.intl.string(eT.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: i()(eF.u1, eF.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(p.f5, {
              value: S,
              children: (0, n.jsx)(E.J, {
                  renderHeader: A,
                  getSocialLayerStorefrontLink: v,
                  children: (0, n.jsx)(b.E9, {
                      newValue: D,
                      children: (0, n.jsx)(eP, {
                          storefront: L.storefront,
                          guildId: l,
                          selectedPageIndex: T,
                          selectedSku: C,
                      }),
                  }),
              }),
          });
}
