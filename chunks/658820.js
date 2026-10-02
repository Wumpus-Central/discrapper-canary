(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eg, default: () => ec }));
var s = t(477900),
    a = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(132500),
    d = t(17928),
    o = t(289873),
    c = t(297264),
    u = t(834730),
    g = t(444927),
    p = t(220839),
    f = t(793574),
    x = t(688810),
    h = t(976860),
    I = t(435658),
    m = t(594832),
    j = t(280450),
    v = t(696451),
    S = t(71393),
    b = t(67480),
    _ = t(927813),
    k = t(449054),
    A = t(871123),
    E = t(733391),
    N = t(439303),
    y = t(353281),
    L = t(832163),
    M = t(429635),
    C = t(156454),
    R = t(317560);
function O(e) {
    let { alt: l, ariaLabel: t, ariaHidden: a, role: n, width: i = 288, height: r = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: i, height: r },
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        alt: l,
        "aria-label": t,
        "aria-hidden": a,
        role: n ?? "img",
    });
}
var T = t(28863),
    G = t(188275),
    P = t(206285),
    D = t(375708),
    H = t(771442);
function w() {
    return (0, s.jsxs)("div", {
        className: H.p,
        children: [
            (0, s.jsx)("div", {
                className: H.b,
                children: (0, s.jsx)(O, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, s.jsx)(c.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: D.intl.string(P.default["0XMNl5"]),
            }),
            (0, s.jsxs)(u.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [D.intl.string(P.default.NZbasC), (0, s.jsx)("br", {}), D.intl.string(P.default.Tc8sxG)],
            }),
            (0, s.jsx)(u.E, {
                variant: "text-md/medium",
                children: (0, s.jsx)(T.Anchor, { href: G.uy, children: D.intl.string(P.default.KPCFC9) }),
            }),
        ],
    });
}
var V = t(883399),
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
    U = t(352749);
function J(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: n, analyticsSectionId: i } = e,
        r = a.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(N.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: U.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: U.FS,
                          children: [
                              (0, s.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(u.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: U.Ui,
                              children: (0, s.jsx)(B.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: B.s6.MEDIUM,
                                  analyticsLocations: n,
                              }),
                          }),
                  ],
              }),
          });
}
var K = t(371794),
    X = t(199023);
function Z(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        a = null != t ? (0, K.YE)(l, t, 1024, A.pV) : null;
    return (0, s.jsx)("div", {
        className: X._,
        children: null != a ? (0, s.jsx)("div", { className: X.i, style: { backgroundImage: `url(${a})` } }) : null,
    });
}
var q = t(962299),
    z = t(504082);
function Q(e) {
    let { className: l, skuIds: t, variant: a = B.s6.SMALL, analyticsLocations: n } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(l, z.kL, z.$2, { [z.Wc]: a === B.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, s.jsx)(B.Ay, { positionInSection: l, skuId: e, variant: a, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var ee = t(534125);
function el(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: n, variant: i = B.s6.SMALL } = e,
        r = a.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == n || 0 === n.length) return null;
    let d = null != t && t.length > 0;
    return (0, s.jsx)(N.E9, {
        newValue: r,
        children: (0, s.jsxs)("div", {
            className: ee.hd,
            children: [
                d &&
                    (0, s.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ee.Gf,
                        children: t,
                    }),
                (0, s.jsx)(Q, { className: d ? ee.EM : void 0, skuIds: n, variant: i }),
            ],
        }),
    });
}
var et = t(59520),
    es = t(652215);
function ea(e, l, t, s) {
    let { scrollTop: a = 0, scrollOffset: n = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (a + n) / i;
        if (s > 0) {
            let {
                sessionId: a,
                guildId: n,
                applicationId: d,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: g,
            } = l;
            F.default.track(e, {
                slayer_storefront_session_id: a,
                guild_id: n,
                application_id: d,
                page_index: o,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: g,
                scroll_visible_percent: s,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var en = t(167551);
function ei(e) {
    let l,
        t,
        { applicationId: n, page: r, scrollerClassName: d, promotionBannerClassName: o } = e,
        { ref: c, width: u } = (0, $.Ay)(),
        g = (0, N.jM)(),
        { analyticsLocations: p } = (0, x.Ay)(),
        f = a.useRef(null),
        { handleScroll: h } =
            ((l = a.useRef(g)),
            a.useEffect(() => {
                l.current = g;
            }, [g]),
            (t = (0, et.I)(ea, 5e3, [], { trailing: !0 })),
            {
                handleScroll: a.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(es.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, p, {
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
    }, [n, g.pageIndex]);
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
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: a, pageHasLeaderboard: i } = g;
        F.default.track(es.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: n,
            page_index: t,
            page_title: s,
            is_user_guild_member: a,
            page_has_leaderboard: i,
            location_stack: p,
        });
    }, [g, n, p]),
    null == r)
        ? null
        : (0, s.jsxs)(Y.Ch, {
              ref: f,
              onScroll: h,
              className: d,
              children: [
                  (0, s.jsx)(Z, { applicationId: n, backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId }),
                  (0, s.jsx)("div", {
                      className: i()(en.r, o),
                      children: (0, s.jsx)(q.M, { applicationId: n, analyticsLocations: p }),
                  }),
                  (0, s.jsxs)("section", {
                      ref: c,
                      className: en.k,
                      children: [
                          !I &&
                              (0, s.jsx)(J, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: r.leaderboard,
                                  skuId: v ? m[0] : void 0,
                                  analyticsLocations: p,
                              }),
                          (0, s.jsx)(el, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: v ? void 0 : m,
                              variant: B.s6.MEDIUM,
                          }),
                          (0, s.jsx)(el, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          r.sections?.map((e, l) =>
                              (0, s.jsx)(
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
            promotionBannerClassName: n,
            storefront: i,
            guildId: r,
            selectedPageIndex: d,
            selectedSku: o,
            renderHeader: c,
            getSocialLayerStorefrontLink: u,
        } = e,
        g = (0, N.jM)(),
        p = a.useRef(g);
    a.useEffect(() => {
        p.current = g;
    }, [g]);
    let x = a.useCallback(() => {
            null != u && (0, h.bG)(u(0));
        }, [u]),
        I = o?.id;
    return (
        a.useEffect(() => {
            if (null != I)
                return (
                    (0, R.R)({
                        customNavigateToSocialLayerStorefront: x,
                        skuId: I,
                        applicationId: i.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: p.current,
                        onClose: () => {
                            let { pathname: e, search: l } = (0, h.JK)().location;
                            (0, A.rG)(e, l, i.applicationId, r) && null != u && (0, h.bG)(u(d));
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [r, d, I, i.applicationId, u, x]),
        (0, s.jsxs)("div", {
            className: l,
            children: [
                c?.(d, i),
                (0, s.jsx)(ei, {
                    applicationId: i.applicationId,
                    page: i.pages[d],
                    scrollerClassName: t,
                    promotionBannerClassName: n,
                }),
            ],
        })
    );
}
function ec(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: n, gameShopSkuId: i } = l.params,
        r = (0, d.bG)([j.default], () => j.default.getSessionId(), []),
        o = a.useCallback((e, l, s) => es.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        c = (0, A.nY)(t),
        u = a.useCallback((e, l) => (0, s.jsx)(V.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        a.useEffect(() => {
            null == t || null == r || (null == S.A.getGuild(t) && (0, k.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(eg, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != n ? parseInt(n, 10) : void 0,
            analyticsPlacement: N.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function eu(e) {
    let { className: l } = e,
        [t, n] = a.useState(!1);
    return ((0, p.A)(() => n(!0), ed), t)
        ? (0, s.jsx)("div", { className: l, children: (0, s.jsx)(w, {}) })
        : (0, s.jsx)("div", { className: i()(er.u1, l), children: (0, s.jsx)(o.y, {}) });
}
function eg(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: n,
            pageIndex: p = 0,
            analyticsLocation: S = f.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: _,
            className: k = er.gI,
            scrollerClassName: A,
            promotionBannerClassName: O,
            renderHeader: T,
            getSocialLayerStorefrontLink: G,
        } = e,
        H = i()(er.kL, k),
        { analyticsLocations: w } = (0, x.Ay)(S),
        V = (0, M.A)({ applicationId: l, guildId: t }),
        Y = V?.storefront ?? null,
        $ = (0, C.A)({ applicationId: l }),
        F = $.effectiveStorefront ?? Y,
        W = (0, d.bG)([b.A], () => b.A.get(n), [n]);
    ((0, m.pE)(), (0, I.x)({ applicationId: V?.storefront?.applicationId }));
    let B = (0, d.bG)([L.A], () => t ?? L.A.getGuildIdFromApplicationId(l), [t, l]),
        U = (0, g.A)(() => (0, r.A)()),
        J = (0, d.bG)([v.Ay, j.default], () => v.Ay.isMember(B, j.default.getId()), [B]),
        K = a.useMemo(() => (null == p || isNaN(p) || (null != F && p >= F.pages.length) ? 0 : p), [p, F]),
        X = F?.pages[K]?.title ?? null,
        Z = F?.pages[K]?.leaderboard != null,
        q = a.useMemo(
            () => ({
                placement: _,
                sessionId: U,
                guildId: B,
                applicationId: l,
                pageIndex: K,
                pageTitle: X,
                isUserGuildMember: J,
                pageHasLeaderboard: Z,
            }),
            [_, U, B, l, K, X, J, Z],
        );
    a.useEffect(() => {
        null != l && (0, E.SP)(l, K, null != n ? n : null);
    }, [l, K, n]);
    let z = a.useMemo(() => {
            if (null != G) return (e) => (0, h.pX)(G(e));
        }, [G]),
        Q = a.useCallback(
            (e, l, t) => {
                null != G
                    ? (0, h.bG)(G(K, e, t))
                    : (0, R.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: w,
                          analyticsContext: q,
                      });
            },
            [G, K, w, q],
        );
    return null == l || V?.storefront == null
        ? null != V && "loading" !== V.state
            ? (0, s.jsxs)("div", {
                  className: i()(er.p$, H),
                  children: [
                      (0, s.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: D.intl.string(P.default.OvBwPV),
                      }),
                      (0, s.jsx)(u.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: D.intl.string(P.default["Sy7D+/"]),
                      }),
                  ],
              })
            : $.isTestMode
              ? (0, s.jsx)(eu, { className: H }, l)
              : (0, s.jsx)("div", { className: i()(er.u1, H), children: (0, s.jsx)(o.y, {}) })
        : (0, s.jsx)(x.f5, {
              value: w,
              children: (0, s.jsx)(y.J, {
                  navigateToStorefrontPage: z,
                  viewProductDetails: Q,
                  children: (0, s.jsx)(N.E9, {
                      newValue: q,
                      children: (0, s.jsx)(eo, {
                          className: H,
                          scrollerClassName: A,
                          promotionBannerClassName: O,
                          storefront: F ?? V.storefront,
                          guildId: B,
                          selectedPageIndex: K,
                          selectedSku: W,
                          renderHeader: T,
                          getSocialLayerStorefrontLink: G,
                      }),
                  }),
              }),
          });
}
