(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eu, default: () => eo }));
var n = t(477900),
    a = t(582128),
    s = t(503698),
    i = t.n(s),
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
    C = t(171616),
    M = t(317560);
function R(e) {
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
var O = t(28863),
    G = t(188275),
    T = t(206285),
    P = t(375708),
    D = t(771442);
function H() {
    return (0, n.jsxs)("div", {
        className: D.p,
        children: [
            (0, n.jsx)("div", {
                className: D.b,
                children: (0, n.jsx)(R, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, n.jsx)(c.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: P.intl.string(T.default["0XMNl5"]),
            }),
            (0, n.jsxs)(u.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [P.intl.string(T.default.NZbasC), (0, n.jsx)("br", {}), P.intl.string(T.default.Tc8sxG)],
            }),
            (0, n.jsx)(u.E, {
                variant: "text-md/medium",
                children: (0, n.jsx)(O.Anchor, { href: G.uy, children: P.intl.string(T.default.KPCFC9) }),
            }),
        ],
    });
}
var w = t(883399),
    V = t(689175),
    Y = t(765671),
    $ = t(174459);
let F = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var W = t(467884),
    B = t(352749);
function U(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: s, analyticsSectionId: i } = e,
        r = a.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(N.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: B.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: B.FS,
                          children: [
                              (0, n.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(u.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: B.Ui,
                              children: (0, n.jsx)(W.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: W.s6.MEDIUM,
                                  analyticsLocations: s,
                              }),
                          }),
                  ],
              }),
          });
}
var J = t(371794),
    K = t(199023);
function X(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        a = null != t ? (0, J.YE)(l, t, 1024, A.pV) : null;
    return (0, n.jsx)("div", {
        className: K._,
        children: null != a ? (0, n.jsx)("div", { className: K.i, style: { backgroundImage: `url(${a})` } }) : null,
    });
}
var Z = t(962299),
    q = t(504082);
function z(e) {
    let { className: l, skuIds: t, variant: a = W.s6.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(l, q.kL, q.$2, { [q.Wc]: a === W.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, n.jsx)(W.Ay, { positionInSection: l, skuId: e, variant: a, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var Q = t(534125);
function ee(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: s, variant: i = W.s6.SMALL } = e,
        r = a.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == s || 0 === s.length) return null;
    let d = null != t && t.length > 0;
    return (0, n.jsx)(N.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: Q.hd,
            children: [
                d &&
                    (0, n.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: Q.Gf,
                        children: t,
                    }),
                (0, n.jsx)(z, { className: d ? Q.EM : void 0, skuIds: s, variant: i }),
            ],
        }),
    });
}
var el = t(59520),
    et = t(652215);
function en(e, l, t, n) {
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
            $.default.track(e, {
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
var ea = t(167551);
function es(e) {
    let l,
        t,
        { applicationId: s, page: r, scrollerClassName: d, promotionBannerClassName: o } = e,
        { ref: c, width: u } = (0, Y.Ay)(),
        g = (0, N.jM)(),
        { analyticsLocations: p } = (0, x.Ay)(),
        f = a.useRef(null),
        { handleScroll: h } =
            ((l = a.useRef(g)),
            a.useEffect(() => {
                l.current = g;
            }, [g]),
            (t = (0, el.I)(en, 5e3, [], { trailing: !0 })),
            {
                handleScroll: a.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(et.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, p, {
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
            return F.useConfig({ location: l }).enabled;
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
        $.default.track(et.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, n.jsxs)(V.Ch, {
              ref: f,
              onScroll: h,
              className: d,
              children: [
                  (0, n.jsx)(X, { applicationId: s, backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId }),
                  (0, n.jsx)("div", {
                      className: i()(ea.r, o),
                      children: (0, n.jsx)(Z.M, { applicationId: s, analyticsLocations: p }),
                  }),
                  (0, n.jsxs)("section", {
                      ref: c,
                      className: ea.k,
                      children: [
                          !I &&
                              (0, n.jsx)(U, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: r.leaderboard,
                                  skuId: v ? m[0] : void 0,
                                  analyticsLocations: p,
                              }),
                          (0, n.jsx)(ee, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: v ? void 0 : m,
                              variant: W.s6.MEDIUM,
                          }),
                          (0, n.jsx)(ee, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                          r.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  ee,
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
var ei = t(537067);
let er = 10 * _.A.Millis.SECOND;
function ed(e) {
    let {
            className: l,
            scrollerClassName: t,
            promotionBannerClassName: s,
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
                    (0, M.R)({
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
                        (0, M.j)();
                    }
                );
        }, [r, d, I, i.applicationId, u, x]),
        (0, n.jsxs)("div", {
            className: l,
            children: [
                c?.(d, i),
                (0, n.jsx)(es, {
                    applicationId: i.applicationId,
                    page: i.pages[d],
                    scrollerClassName: t,
                    promotionBannerClassName: s,
                }),
            ],
        })
    );
}
function eo(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: s, gameShopSkuId: i } = l.params,
        r = (0, d.bG)([j.default], () => j.default.getSessionId(), []),
        o = a.useCallback((e, l, n) => et.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        c = (0, A.nY)(t),
        u = a.useCallback((e, l) => (0, n.jsx)(w.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        a.useEffect(() => {
            null == t || null == r || (null == S.A.getGuild(t) && (0, k.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eu, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != s ? parseInt(s, 10) : void 0,
            analyticsPlacement: N.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function ec(e) {
    let { className: l } = e,
        [t, s] = a.useState(!1);
    return ((0, p.A)(() => s(!0), er), t)
        ? (0, n.jsx)("div", { className: l, children: (0, n.jsx)(H, {}) })
        : (0, n.jsx)("div", { className: i()(ei.u1, l), children: (0, n.jsx)(o.y, {}) });
}
function eu(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: s,
            pageIndex: p = 0,
            analyticsLocation: S = f.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: _,
            className: k = ei.gI,
            scrollerClassName: A,
            promotionBannerClassName: R,
            renderHeader: O,
            getSocialLayerStorefrontLink: G,
        } = e,
        D = i()(ei.kL, k),
        { analyticsLocations: H } = (0, x.Ay)(S),
        { storefront: w, storefrontState: V, isTestMode: Y } = (0, C.A)({ applicationId: l, guildId: t }),
        $ = (0, d.bG)([b.A], () => b.A.get(s), [s]);
    ((0, m.pE)(), (0, I.x)({ applicationId: w?.applicationId }));
    let F = (0, d.bG)([L.A], () => t ?? L.A.getGuildIdFromApplicationId(l), [t, l]),
        W = (0, g.A)(() => (0, r.A)()),
        B = (0, d.bG)([v.Ay, j.default], () => v.Ay.isMember(F, j.default.getId()), [F]),
        U = a.useMemo(() => (null == p || isNaN(p) || (null != w && p >= w.pages.length) ? 0 : p), [p, w]),
        J = w?.pages[U]?.title ?? null,
        K = w?.pages[U]?.leaderboard != null,
        X = a.useMemo(
            () => ({
                placement: _,
                sessionId: W,
                guildId: F,
                applicationId: l,
                pageIndex: U,
                pageTitle: J,
                isUserGuildMember: B,
                pageHasLeaderboard: K,
            }),
            [_, W, F, l, U, J, B, K],
        );
    a.useEffect(() => {
        null != l && (0, E.SP)(l, U, null != s ? s : null);
    }, [l, U, s]);
    let Z = a.useMemo(() => {
            if (null != G) return (e) => (0, h.pX)(G(e));
        }, [G]),
        q = a.useCallback(
            (e, l, t) => {
                null != G
                    ? (0, h.bG)(G(U, e, t))
                    : (0, M.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: H,
                          analyticsContext: X,
                      });
            },
            [G, U, H, X],
        );
    return null == l || null == w
        ? null != V && "loading" !== V
            ? (0, n.jsxs)("div", {
                  className: i()(ei.p$, D),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: P.intl.string(T.default.OvBwPV),
                      }),
                      (0, n.jsx)(u.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: P.intl.string(T.default["Sy7D+/"]),
                      }),
                  ],
              })
            : Y
              ? (0, n.jsx)(ec, { className: D }, l)
              : (0, n.jsx)("div", { className: i()(ei.u1, D), children: (0, n.jsx)(o.y, {}) })
        : (0, n.jsx)(x.f5, {
              value: H,
              children: (0, n.jsx)(y.J, {
                  navigateToStorefrontPage: Z,
                  viewProductDetails: q,
                  children: (0, n.jsx)(N.E9, {
                      newValue: X,
                      children: (0, n.jsx)(ed, {
                          className: D,
                          scrollerClassName: A,
                          promotionBannerClassName: R,
                          storefront: w,
                          guildId: F,
                          selectedPageIndex: U,
                          selectedSku: $,
                          renderHeader: O,
                          getSocialLayerStorefrontLink: G,
                      }),
                  }),
              }),
          });
}
