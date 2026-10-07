(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eg, default: () => ec }));
var n = t(477900),
    a = t(582128),
    s = t(503698),
    i = t.n(s),
    r = t(132500),
    d = t(17928),
    o = t(638495),
    c = t(289873),
    u = t(297264),
    g = t(834730),
    p = t(444927),
    f = t(220839),
    x = t(793574),
    h = t(688810),
    I = t(976860),
    m = t(435658),
    j = t(594832),
    v = t(280450),
    S = t(696451),
    b = t(71393),
    k = t(67480),
    _ = t(927813),
    A = t(449054),
    E = t(871123),
    N = t(733391),
    y = t(439303),
    L = t(353281),
    C = t(832163),
    M = t(171616),
    R = t(317560);
function O(e) {
    let { alt: l, ariaLabel: t, ariaHidden: a, role: s, width: i = 288, height: r = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: r },
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        alt: l,
        "aria-label": t,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var G = t(28863),
    T = t(188275),
    P = t(621547),
    D = t(660183),
    H = t(771442);
function w() {
    return (0, n.jsxs)("div", {
        className: H.p,
        children: [
            (0, n.jsx)("div", {
                className: H.b,
                children: (0, n.jsx)(O, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, n.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: D.intl.string(P.default["0XMNl5"]),
            }),
            (0, n.jsxs)(g.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [D.intl.string(P.default.NZbasC), (0, n.jsx)("br", {}), D.intl.string(P.default.Tc8sxG)],
            }),
            (0, n.jsx)(g.E, {
                variant: "text-md/medium",
                children: (0, n.jsx)(G.Anchor, { href: T.uy, children: D.intl.string(P.default.KPCFC9) }),
            }),
        ],
    });
}
var V = t(268611),
    Y = t(689175),
    $ = t(765671),
    F = t(174459);
let W = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var B = t(467884),
    K = t(352749);
function U(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: s, analyticsSectionId: i } = e,
        r = a.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(y.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: K.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: K.FS,
                          children: [
                              (0, n.jsx)(u.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(g.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: K.Ui,
                              children: (0, n.jsx)(B.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: B.s6.MEDIUM,
                                  analyticsLocations: s,
                              }),
                          }),
                  ],
              }),
          });
}
var J = t(371794),
    X = t(199023);
function Z(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        a = null != t ? (0, J.YE)(l, t, 1024, E.pV) : null;
    return (0, n.jsx)("div", {
        className: X._,
        children: null != a ? (0, n.jsx)("div", { className: X.i, style: { backgroundImage: `url(${a})` } }) : null,
    });
}
var q = t(962299),
    z = t(504082);
function Q(e) {
    let { className: l, skuIds: t, variant: a = B.s6.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(l, z.kL, z.$2, { [z.Wc]: a === B.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, n.jsx)(B.Ay, { positionInSection: l, skuId: e, variant: a, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var ee = t(534125);
function el(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: s, variant: i = B.s6.SMALL } = e,
        r = a.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == s || 0 === s.length) return null;
    let d = null != t && t.length > 0;
    return (0, n.jsx)(y.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: ee.hd,
            children: [
                d &&
                    (0, n.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ee.Gf,
                        children: t,
                    }),
                (0, n.jsx)(Q, { className: d ? ee.EM : void 0, skuIds: s, variant: i }),
            ],
        }),
    });
}
var et = t(59520),
    en = t(652215);
function ea(e, l, t, n) {
    let { scrollTop: a = 0, scrollOffset: s = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (a + s) / i;
        if (n > 0) {
            let {
                sessionId: a,
                guildId: s,
                applicationId: d,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: g,
            } = l;
            F.default.track(e, {
                slayer_storefront_session_id: a,
                guild_id: s,
                application_id: d,
                page_index: o,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: g,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var es = t(167551);
function ei(e) {
    let l,
        t,
        { applicationId: s, page: r, scrollerClassName: d, promotionBannerClassName: o } = e,
        { ref: c, width: u } = (0, $.Ay)(),
        g = (0, y.jM)(),
        { analyticsLocations: p } = (0, h.Ay)(),
        f = a.useRef(null),
        { handleScroll: x } =
            ((l = a.useRef(g)),
            a.useEffect(() => {
                l.current = g;
            }, [g]),
            (t = (0, et.I)(ea, 5e3, [], { trailing: !0 })),
            {
                handleScroll: a.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(en.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, p, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, p, f]),
            });
    a.useLayoutEffect(() => {
        f.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" });
    }, [s, g.pageIndex]);
    let I = (function (e) {
            let { location: l } = e;
            return W.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [m, j] = a.useMemo(() => {
            if (r?.skuIds == null || 0 === r.skuIds.length) return [[], []];
            let e = Math.round(u ?? 0);
            return r?.leaderboard == null || null == e || e < 564
                ? [[], r.skuIds]
                : e < 1104
                  ? r.skuIds.length >= 2
                      ? [[], r.skuIds]
                      : [r.skuIds.slice(0, 1), r.skuIds.slice(1)]
                  : [r.skuIds.slice(0, 2), r.skuIds.slice(2)];
        }, [r, u]),
        v = 1 === m.length && null != u && u >= 834 && !I;
    return (a.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: a, pageHasLeaderboard: i } = g;
        F.default.track(en.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: s,
            page_index: t,
            page_title: n,
            is_user_guild_member: a,
            page_has_leaderboard: i,
            location_stack: p,
        });
    }, [g, s, p]),
    null == r)
        ? null
        : (0, n.jsxs)(Y.Ch, {
              ref: f,
              onScroll: x,
              className: d,
              children: [
                  (0, n.jsx)(Z, { applicationId: s, backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId }),
                  (0, n.jsx)("div", {
                      className: i()(es.r, o),
                      children: (0, n.jsx)(q.M, { applicationId: s, analyticsLocations: p }),
                  }),
                  (0, n.jsxs)("section", {
                      ref: c,
                      className: es.k,
                      children: [
                          !I &&
                              (0, n.jsx)(U, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: r.leaderboard,
                                  skuId: v ? m[0] : void 0,
                                  analyticsLocations: p,
                              }),
                          (0, n.jsx)(el, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: v ? void 0 : m,
                              variant: B.s6.MEDIUM,
                          }),
                          (0, n.jsx)(el, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          r.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  el,
                                  {
                                      analyticsSectionId: `index:${l}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var er = t(537067);
let ed = 10 * _.A.Millis.SECOND;
function eo(e) {
    let {
            className: l,
            scrollerClassName: t,
            promotionBannerClassName: s,
            storefront: i,
            guildId: r,
            selectedPageIndex: d,
            selectedSku: c,
            renderHeader: u,
            getSocialLayerStorefrontLink: g,
        } = e,
        p = (0, o.k)(),
        f = (0, y.jM)(),
        h = a.useRef(f);
    a.useEffect(() => {
        h.current = f;
    }, [f]);
    let m = a.useCallback(() => {
            null != g && (0, I.bG)(g(0));
        }, [g]),
        j = c?.id;
    return (
        a.useEffect(() => {
            if (null != j)
                return (
                    (0, R.R)({
                        customNavigateToSocialLayerStorefront: m,
                        skuId: j,
                        applicationId: i.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [x.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: h.current,
                        contextKey: p,
                        onClose: () => {
                            let { pathname: e, search: l } = (0, I.JK)().location;
                            (0, E.rG)(e, l, i.applicationId, r) && null != g && (0, I.bG)(g(d));
                        },
                    }),
                    () => {
                        (0, R.j)(p);
                    }
                );
        }, [r, d, j, i.applicationId, g, m, p]),
        (0, n.jsxs)("div", {
            className: l,
            children: [
                u?.(d, i),
                (0, n.jsx)(ei, {
                    applicationId: i.applicationId,
                    page: i.pages[d],
                    scrollerClassName: t,
                    promotionBannerClassName: s,
                }),
            ],
        })
    );
}
function ec(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: s, gameShopSkuId: i } = l.params,
        r = (0, d.bG)([v.default], () => v.default.getSessionId(), []),
        o = a.useCallback((e, l, n) => en.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        c = (0, E.nY)(t),
        u = a.useCallback((e, l) => (0, n.jsx)(V.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        a.useEffect(() => {
            null == t || null == r || (null == b.A.getGuild(t) && (0, A.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eg, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != s ? parseInt(s, 10) : void 0,
            analyticsPlacement: y.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function eu(e) {
    let { className: l } = e,
        [t, s] = a.useState(!1);
    return ((0, f.A)(() => s(!0), ed), t)
        ? (0, n.jsx)("div", { className: l, children: (0, n.jsx)(w, {}) })
        : (0, n.jsx)("div", { className: i()(er.u1, l), children: (0, n.jsx)(c.y, {}) });
}
function eg(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: s,
            pageIndex: f = 0,
            analyticsLocation: b = x.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: _,
            className: A = er.gI,
            scrollerClassName: E,
            promotionBannerClassName: O,
            renderHeader: G,
            getSocialLayerStorefrontLink: T,
        } = e,
        H = (0, o.k)(),
        w = i()(er.kL, A),
        { analyticsLocations: V } = (0, h.Ay)(b),
        { storefront: Y, storefrontState: $, isTestMode: F } = (0, M.A)({ applicationId: l, guildId: t }),
        W = (0, d.bG)([k.A], () => k.A.get(s), [s]);
    ((0, j.pE)(), (0, m.x)({ applicationId: Y?.applicationId }));
    let B = (0, d.bG)([C.A], () => t ?? C.A.getGuildIdFromApplicationId(l), [t, l]),
        K = (0, p.A)(() => (0, r.A)()),
        U = (0, d.bG)([S.Ay, v.default], () => S.Ay.isMember(B, v.default.getId()), [B]),
        J = a.useMemo(() => (null == f || isNaN(f) || (null != Y && f >= Y.pages.length) ? 0 : f), [f, Y]),
        X = Y?.pages[J]?.title ?? null,
        Z = Y?.pages[J]?.leaderboard != null,
        q = a.useMemo(
            () => ({
                placement: _,
                sessionId: K,
                guildId: B,
                applicationId: l,
                pageIndex: J,
                pageTitle: X,
                isUserGuildMember: U,
                pageHasLeaderboard: Z,
            }),
            [_, K, B, l, J, X, U, Z],
        );
    a.useEffect(() => {
        null != l && (0, N.SP)(l, J, null != s ? s : null);
    }, [l, J, s]);
    let z = a.useMemo(() => {
            if (null != T) return (e) => (0, I.pX)(T(e));
        }, [T]),
        Q = a.useCallback(
            (e, l, t) => {
                null != T
                    ? (0, I.bG)(T(J, e, t))
                    : (0, R.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: V,
                          analyticsContext: q,
                          contextKey: H,
                      });
            },
            [T, J, V, q, H],
        );
    return null == l || null == Y
        ? null != $ && "loading" !== $
            ? (0, n.jsxs)("div", {
                  className: i()(er.p$, w),
                  children: [
                      (0, n.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: D.intl.string(P.default.OvBwPV),
                      }),
                      (0, n.jsx)(g.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: D.intl.string(P.default["Sy7D+/"]),
                      }),
                  ],
              })
            : F
              ? (0, n.jsx)(eu, { className: w }, l)
              : (0, n.jsx)("div", { className: i()(er.u1, w), children: (0, n.jsx)(c.y, {}) })
        : (0, n.jsx)(h.f5, {
              value: V,
              children: (0, n.jsx)(L.J, {
                  navigateToStorefrontPage: z,
                  viewProductDetails: Q,
                  children: (0, n.jsx)(y.E9, {
                      newValue: q,
                      children: (0, n.jsx)(eo, {
                          className: w,
                          scrollerClassName: E,
                          promotionBannerClassName: O,
                          storefront: Y,
                          guildId: B,
                          selectedPageIndex: J,
                          selectedSku: W,
                          renderHeader: G,
                          getSocialLayerStorefrontLink: T,
                      }),
                  }),
              }),
          });
}
