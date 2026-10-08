(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => ep, default: () => eu }));
var s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
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
    m = t(976860),
    I = t(435658),
    j = t(594832),
    v = t(280450),
    b = t(696451),
    S = t(71393),
    k = t(67480),
    _ = t(927813),
    A = t(449054),
    N = t(871123),
    E = t(733391),
    y = t(439303),
    L = t(353281),
    M = t(832163),
    C = t(171616),
    R = t(317560),
    O = t(62617);
function G(e) {
    let { alt: l, ariaLabel: t, ariaHidden: a, role: i, width: r, height: d, className: o, style: c } = e,
        u = n.useMemo(
            () => (0, O.H)({ width: r, height: d, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [r, d, c],
        );
    return (0, s.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        className: (0, O.Z)(o),
        alt: l,
        "aria-label": t,
        "aria-hidden": a,
        role: i ?? "img",
    });
}
var T = t(28863),
    P = t(188275),
    H = t(206285),
    D = t(660183),
    w = t(771442);
function V() {
    return (0, s.jsxs)("div", {
        className: w.p,
        children: [
            (0, s.jsx)("div", {
                className: w.b,
                children: (0, s.jsx)(G, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, s.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: D.intl.string(H.default["0XMNl5"]),
            }),
            (0, s.jsxs)(g.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [D.intl.string(H.default.NZbasC), (0, s.jsx)("br", {}), D.intl.string(H.default.Tc8sxG)],
            }),
            (0, s.jsx)(g.E, {
                variant: "text-md/medium",
                children: (0, s.jsx)(T.Anchor, { href: P.uy, children: D.intl.string(H.default.KPCFC9) }),
            }),
        ],
    });
}
var Y = t(268611),
    $ = t(689175),
    F = t(765671),
    W = t(174459);
let B = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = t(467884),
    U = t(352749);
function Z(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(y.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: U.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: U.FS,
                          children: [
                              (0, s.jsx)(u.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(g.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: U.Ui,
                              children: (0, s.jsx)(K.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: K.s6.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var J = t(371794),
    X = t(199023);
function Q(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, J.YE)(l, t, 1024, N.pV) : null;
    return (0, s.jsx)("div", {
        className: X._,
        children: null != n ? (0, s.jsx)("div", { className: X.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var q = t(962299),
    z = t(504082);
function ee(e) {
    let { className: l, skuIds: t, variant: n = K.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(l, z.kL, z.$2, { [z.Wc]: n === K.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, s.jsx)(K.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var el = t(534125);
function et(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = K.s6.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let d = null != t && t.length > 0;
    return (0, s.jsx)(y.E9, {
        newValue: r,
        children: (0, s.jsxs)("div", {
            className: el.hd,
            children: [
                d &&
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: el.Gf,
                        children: t,
                    }),
                (0, s.jsx)(ee, { className: d ? el.EM : void 0, skuIds: a, variant: i }),
            ],
        }),
    });
}
var es = t(59520),
    en = t(652215);
function ea(e, l, t, s) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (n + a) / i;
        if (s > 0) {
            let {
                sessionId: n,
                guildId: a,
                applicationId: d,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: g,
            } = l;
            W.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
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
var ei = t(167551);
function er(e) {
    let l,
        t,
        { applicationId: a, page: r, scrollerClassName: d, promotionBannerClassName: o } = e,
        { ref: c, width: u } = (0, F.Ay)(),
        g = (0, y.jM)(),
        { analyticsLocations: p } = (0, h.Ay)(),
        f = n.useRef(null),
        { handleScroll: x } =
            ((l = n.useRef(g)),
            n.useEffect(() => {
                l.current = g;
            }, [g]),
            (t = (0, es.I)(ea, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(en.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, p, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, p, f]),
            });
    n.useLayoutEffect(() => {
        f.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" });
    }, [a, g.pageIndex]);
    let m = (function (e) {
            let { location: l } = e;
            return B.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [I, j] = n.useMemo(() => {
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
        v = 1 === I.length && null != u && u >= 834 && !m;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: i } = g;
        W.default.track(en.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: s,
            is_user_guild_member: n,
            page_has_leaderboard: i,
            location_stack: p,
        });
    }, [g, a, p]),
    null == r)
        ? null
        : (0, s.jsx)($.Ch, {
              ref: f,
              onScroll: x,
              className: d,
              children: (0, s.jsxs)("div", {
                  className: ei.Qs,
                  children: [
                      (0, s.jsx)(Q, {
                          applicationId: a,
                          backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                      }),
                      (0, s.jsx)("div", {
                          className: i()(ei.rb, o),
                          children: (0, s.jsx)(q.M, { applicationId: a, analyticsLocations: p }),
                      }),
                      (0, s.jsxs)("section", {
                          ref: c,
                          className: ei.kL,
                          children: [
                              !m &&
                                  (0, s.jsx)(Z, {
                                      analyticsSectionId: "leaderboard",
                                      leaderboard: r.leaderboard,
                                      skuId: v ? I[0] : void 0,
                                      analyticsLocations: p,
                                  }),
                              (0, s.jsx)(et, {
                                  analyticsSectionId: "featured-top-section",
                                  skuIds: v ? void 0 : I,
                                  variant: K.s6.MEDIUM,
                              }),
                              (0, s.jsx)(et, { analyticsSectionId: "non-featured-top-section", skuIds: j }),
                              r.sections?.map((e, l) =>
                                  (0, s.jsx)(
                                      et,
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
              }),
          });
}
var ed = t(537067);
let eo = 10 * _.A.Millis.SECOND;
function ec(e) {
    let {
            className: l,
            scrollerClassName: t,
            promotionBannerClassName: a,
            storefront: i,
            guildId: r,
            selectedPageIndex: d,
            selectedSku: c,
            renderHeader: u,
            getSocialLayerStorefrontLink: g,
        } = e,
        p = (0, o.k)(),
        f = (0, y.jM)(),
        h = n.useRef(f);
    n.useEffect(() => {
        h.current = f;
    }, [f]);
    let I = n.useCallback(() => {
            null != g && (0, m.bG)(g(0));
        }, [g]),
        j = c?.id;
    return (
        n.useEffect(() => {
            if (null != j)
                return (
                    (0, R.R)({
                        customNavigateToSocialLayerStorefront: I,
                        skuId: j,
                        applicationId: i.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [x.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: h.current,
                        contextKey: p,
                        onClose: () => {
                            let { pathname: e, search: l } = (0, m.JK)().location;
                            (0, N.rG)(e, l, i.applicationId, r) && null != g && (0, m.bG)(g(d));
                        },
                    }),
                    () => {
                        (0, R.j)(p);
                    }
                );
        }, [r, d, j, i.applicationId, g, I, p]),
        (0, s.jsxs)("div", {
            className: l,
            children: [
                u?.(d, i),
                (0, s.jsx)(er, {
                    applicationId: i.applicationId,
                    page: i.pages[d],
                    scrollerClassName: t,
                    promotionBannerClassName: a,
                }),
            ],
        })
    );
}
function eu(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, d.bG)([v.default], () => v.default.getSessionId(), []),
        o = n.useCallback((e, l, s) => en.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        c = (0, N.nY)(t),
        u = n.useCallback((e, l) => (0, s.jsx)(Y.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        n.useEffect(() => {
            null == t || null == r || (null == S.A.getGuild(t) && (0, A.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(ep, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            analyticsPlacement: y.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function eg(e) {
    let { className: l } = e,
        [t, a] = n.useState(!1);
    return ((0, f.A)(() => a(!0), eo), t)
        ? (0, s.jsx)("div", { className: l, children: (0, s.jsx)(V, {}) })
        : (0, s.jsx)("div", { className: i()(ed.u1, l), children: (0, s.jsx)(c.y, {}) });
}
function ep(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: f = 0,
            analyticsLocation: S = x.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: _,
            className: A = ed.gI,
            scrollerClassName: N,
            promotionBannerClassName: O,
            renderHeader: G,
            getSocialLayerStorefrontLink: T,
        } = e,
        P = (0, o.k)(),
        w = i()(ed.kL, A),
        { analyticsLocations: V } = (0, h.Ay)(S),
        { storefront: Y, storefrontState: $, isTestMode: F } = (0, C.A)({ applicationId: l, guildId: t }),
        W = (0, d.bG)([k.A], () => k.A.get(a), [a]);
    ((0, j.pE)(), (0, I.x)({ applicationId: Y?.applicationId }));
    let B = (0, d.bG)([M.A], () => t ?? M.A.getGuildIdFromApplicationId(l), [t, l]),
        K = (0, p.A)(() => (0, r.A)()),
        U = (0, d.bG)([b.Ay, v.default], () => b.Ay.isMember(B, v.default.getId()), [B]),
        Z = n.useMemo(() => (null == f || isNaN(f) || (null != Y && f >= Y.pages.length) ? 0 : f), [f, Y]),
        J = Y?.pages[Z]?.title ?? null,
        X = Y?.pages[Z]?.leaderboard != null,
        Q = n.useMemo(
            () => ({
                placement: _,
                sessionId: K,
                guildId: B,
                applicationId: l,
                pageIndex: Z,
                pageTitle: J,
                isUserGuildMember: U,
                pageHasLeaderboard: X,
            }),
            [_, K, B, l, Z, J, U, X],
        );
    n.useEffect(() => {
        null != l && (0, E.SP)(l, Z, null != a ? a : null);
    }, [l, Z, a]);
    let q = n.useMemo(() => {
            if (null != T) return (e) => (0, m.pX)(T(e));
        }, [T]),
        z = n.useCallback(
            (e, l, t) => {
                null != T
                    ? (0, m.bG)(T(Z, e, t))
                    : (0, R.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: V,
                          analyticsContext: Q,
                          contextKey: P,
                      });
            },
            [T, Z, V, Q, P],
        );
    return null == l || null == Y
        ? null != $ && "loading" !== $
            ? (0, s.jsxs)("div", {
                  className: i()(ed.p$, w),
                  children: [
                      (0, s.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: D.intl.string(H.default.OvBwPV),
                      }),
                      (0, s.jsx)(g.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: D.intl.string(H.default["Sy7D+/"]),
                      }),
                  ],
              })
            : F
              ? (0, s.jsx)(eg, { className: w }, l)
              : (0, s.jsx)("div", { className: i()(ed.u1, w), children: (0, s.jsx)(c.y, {}) })
        : (0, s.jsx)(h.f5, {
              value: V,
              children: (0, s.jsx)(L.J, {
                  navigateToStorefrontPage: q,
                  viewProductDetails: z,
                  children: (0, s.jsx)(y.E9, {
                      newValue: Q,
                      children: (0, s.jsx)(ec, {
                          className: w,
                          scrollerClassName: N,
                          promotionBannerClassName: O,
                          storefront: Y,
                          guildId: B,
                          selectedPageIndex: Z,
                          selectedSku: W,
                          renderHeader: G,
                          getSocialLayerStorefrontLink: T,
                      }),
                  }),
              }),
          });
}
