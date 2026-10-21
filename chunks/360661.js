(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eh, default: () => em }));
var s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(132500),
    o = t(17928),
    d = t(638495),
    c = t(289873),
    u = t(297264),
    p = t(834730),
    g = t(444927),
    f = t(220839),
    I = t(793574),
    m = t(688810),
    x = t(976860),
    h = t(435658),
    _ = t(594832),
    A = t(280450),
    S = t(696451),
    E = t(71393),
    N = t(67480),
    v = t(927813),
    j = t(449054),
    b = t(871123),
    k = t(733391),
    M = t(439303),
    L = t(353281),
    R = t(832163),
    y = t(877624),
    C = t(554146),
    T = t(308588),
    O = t(826673),
    G = t(501419),
    P = t(549996),
    H = t(49999),
    D = t(171616),
    w = t(317560),
    Y = t(62617);
function $(e) {
    let { alt: l, ariaLabel: t, ariaHidden: a, role: i, width: r, height: o, className: d, style: c } = e,
        u = n.useMemo(
            () => (0, Y.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [r, o, c],
        );
    return (0, s.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        className: (0, Y.Z)(d),
        alt: l,
        "aria-label": t,
        "aria-hidden": a,
        role: i ?? "img",
    });
}
var B = t(28863),
    F = t(188275),
    K = t(206285),
    V = t(105292),
    U = t(771442);
function W() {
    return (0, s.jsxs)("div", {
        className: U.p,
        children: [
            (0, s.jsx)("div", {
                className: U.b,
                children: (0, s.jsx)($, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, s.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: V.intl.string(K.default["0XMNl5"]),
            }),
            (0, s.jsxs)(p.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [V.intl.string(K.default.NZbasC), (0, s.jsx)("br", {}), V.intl.string(K.default.Tc8sxG)],
            }),
            (0, s.jsx)(p.E, {
                variant: "text-md/medium",
                children: (0, s.jsx)(B.Anchor, { href: F.uy, children: V.intl.string(K.default.KPCFC9) }),
            }),
        ],
    });
}
var Z = t(647899),
    J = t(689175),
    X = t(765671),
    q = t(174459),
    Q = t(898523),
    z = t(467884),
    ee = t(371794),
    el = t(199023);
function et(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, ee.YE)(l, t, 1024, b.pV) : null;
    return (0, s.jsx)("div", {
        className: el._,
        children: null != n ? (0, s.jsx)("div", { className: el.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var es = t(962299),
    en = t(504082);
function ea(e) {
    let { className: l, skuIds: t, variant: n = z.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(l, en.kL, en.$2, { [en.Wc]: n === z.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, s.jsx)(z.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var ei = t(534125);
function er(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = z.s6.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let o = null != t && t.length > 0;
    return (0, s.jsx)(M.E9, {
        newValue: r,
        children: (0, s.jsxs)("div", {
            className: ei.hd,
            children: [
                o &&
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ei.Gf,
                        children: t,
                    }),
                (0, s.jsx)(ea, { className: o ? ei.EM : void 0, skuIds: a, variant: i }),
            ],
        }),
    });
}
var eo = t(59520),
    ed = t(652215);
function ec(e, l, t, s) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (n + a) / i;
        if (s > 0) {
            let {
                sessionId: n,
                guildId: a,
                applicationId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: p,
            } = l;
            q.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                application_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: p,
                scroll_visible_percent: s,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eu = t(167551);
function ep(e) {
    let l,
        t,
        { applicationId: a, page: r, scrollerClassName: o, promotionBannerClassName: d } = e,
        { ref: c, width: u } = (0, X.Ay)(),
        p = (0, M.jM)(),
        { analyticsLocations: g } = (0, m.Ay)(),
        f = n.useRef(null),
        { handleScroll: I } =
            ((l = n.useRef(p)),
            n.useEffect(() => {
                l.current = p;
            }, [p]),
            (t = (0, eo.I)(ec, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(ed.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, g, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, g, f]),
            });
    n.useLayoutEffect(() => {
        f.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" });
    }, [a, p.pageIndex]);
    let [x, h] = n.useMemo(() => {
        if (r?.skuIds == null || 0 === r.skuIds.length) return [[], []];
        let e = Math.round(u ?? 0);
        return r?.leaderboard == null || null == e || e < 564
            ? [[], r.skuIds]
            : e < 1104
              ? r.skuIds.length >= 2
                  ? [[], r.skuIds]
                  : [r.skuIds.slice(0, 1), r.skuIds.slice(1)]
              : [r.skuIds.slice(0, 2), r.skuIds.slice(2)];
    }, [r, u]);
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: i } = p;
        q.default.track(ed.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            active_storefront_promotion_ids: (0, Q.I)(a),
            page_index: t,
            page_title: s,
            is_user_guild_member: n,
            page_has_leaderboard: i,
            location_stack: g,
        });
    }, [p, a, g]),
    null == r)
        ? null
        : (0, s.jsx)(J.Ch, {
              ref: f,
              onScroll: I,
              className: o,
              children: (0, s.jsxs)("div", {
                  className: eu.Qs,
                  children: [
                      (0, s.jsx)(et, {
                          applicationId: a,
                          backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                      }),
                      (0, s.jsx)("div", {
                          className: i()(eu.rb, d),
                          children: (0, s.jsx)(es.M, { applicationId: a, analyticsLocations: g }),
                      }),
                      (0, s.jsxs)("section", {
                          ref: c,
                          className: eu.kL,
                          children: [
                              (0, s.jsx)(er, {
                                  analyticsSectionId: "featured-top-section",
                                  skuIds: x,
                                  variant: z.s6.MEDIUM,
                              }),
                              (0, s.jsx)(er, { analyticsSectionId: "non-featured-top-section", skuIds: h }),
                              r.sections?.map((e, l) =>
                                  (0, s.jsx)(
                                      er,
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
var eg = t(537067);
let ef = 10 * v.A.Millis.SECOND;
function eI(e) {
    let {
            className: l,
            scrollerClassName: t,
            promotionBannerClassName: a,
            storefront: i,
            guildId: r,
            selectedPageIndex: o,
            selectedSku: c,
            renderHeader: u,
            getSocialLayerStorefrontLink: p,
        } = e,
        g = (0, d.k)(),
        f = (0, M.jM)(),
        m = n.useRef(f);
    n.useEffect(() => {
        m.current = f;
    }, [f]);
    let h = n.useCallback(() => {
            null != p && (0, x.bG)(p(0));
        }, [p]),
        _ = c?.id;
    return (
        n.useEffect(() => {
            if (null != _)
                return (
                    (0, w.R)({
                        customNavigateToSocialLayerStorefront: h,
                        skuId: _,
                        applicationId: i.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [I.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: m.current,
                        contextKey: g,
                        onClose: () => {
                            let { pathname: e, search: l } = (0, x.JK)().location;
                            (0, b.rG)(e, l, i.applicationId, r) && null != p && (0, x.bG)(p(o));
                        },
                    }),
                    () => {
                        (0, w.j)(g);
                    }
                );
        }, [r, o, _, i.applicationId, p, h, g]),
        (0, s.jsxs)("div", {
            className: l,
            children: [
                u?.(o, i),
                (0, s.jsx)(ep, {
                    applicationId: i.applicationId,
                    page: i.pages[o],
                    scrollerClassName: t,
                    promotionBannerClassName: a,
                }),
            ],
        })
    );
}
function em(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([A.default], () => A.default.getSessionId(), []),
        d = n.useCallback((e, l, s) => ed.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        c = (0, b.nY)(t),
        u = n.useCallback((e, l) => (0, s.jsx)(Z.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        n.useEffect(() => {
            null == t || null == r || (null == E.A.getGuild(t) && (0, j.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(eh, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            analyticsPlacement: M.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: d,
        })
    );
}
function ex(e) {
    let { className: l } = e,
        [t, a] = n.useState(!1);
    return ((0, f.A)(() => a(!0), ef), t)
        ? (0, s.jsx)("div", { className: l, children: (0, s.jsx)(W, {}) })
        : (0, s.jsx)("div", { className: i()(eg.u1, l), children: (0, s.jsx)(c.y, {}) });
}
function eh(e) {
    var l;
    let t,
        a,
        f,
        {
            applicationId: E,
            guildId: v,
            skuId: j,
            pageIndex: b = 0,
            analyticsLocation: Y = I.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: $,
            className: B = eg.gI,
            scrollerClassName: F,
            promotionBannerClassName: U,
            renderHeader: W,
            getSocialLayerStorefrontLink: Z,
        } = e,
        J = (0, d.k)(),
        X = i()(eg.kL, B),
        { analyticsLocations: q } = (0, m.Ay)(Y),
        { storefront: Q, storefrontState: z, isTestMode: ee } = (0, D.A)({ applicationId: E, guildId: v }),
        el = (0, o.bG)([N.A], () => N.A.get(j), [j]);
    ((0, _.pE)(),
        (0, h.x)({ applicationId: Q?.applicationId }),
        (l = Q?.applicationId),
        (t = (0, P.c)(y.C.NAGBAR)),
        (a = t?.properties.properties.oneofKind === "nagbar" ? t.properties.properties.nagbar : null),
        (f = t?.promotionId),
        (0, n.useEffect)(() => {
            null == f ||
                null == a ||
                a.ctaAction !== T.d.OPEN_SOCIAL_LAYER_STOREFRONT ||
                a.navigableStorefrontApplicationId?.value == null ||
                a.navigableStorefrontApplicationId.value !== l ||
                (0, O.u$)(C.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f).isDismissed ||
                (0, G.qr)(C.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f, {
                    dismissAction: H.i.INDIRECT_ACTION,
                    forceTrack: !0,
                });
        }, [a, f, l]));
    let et = (0, o.bG)([R.A], () => v ?? R.A.getGuildIdFromApplicationId(E), [v, E]),
        es = (0, g.A)(() => (0, r.A)()),
        en = (0, o.bG)([S.Ay, A.default], () => S.Ay.isMember(et, A.default.getId()), [et]),
        ea = n.useMemo(() => (null == b || isNaN(b) || (null != Q && b >= Q.pages.length) ? 0 : b), [b, Q]),
        ei = Q?.pages[ea]?.title ?? null,
        er = Q?.pages[ea]?.leaderboard != null,
        eo = n.useMemo(
            () => ({
                placement: $,
                sessionId: es,
                guildId: et,
                applicationId: E,
                pageIndex: ea,
                pageTitle: ei,
                isUserGuildMember: en,
                pageHasLeaderboard: er,
            }),
            [$, es, et, E, ea, ei, en, er],
        );
    n.useEffect(() => {
        null != E && (0, k.SP)(E, ea, null != j ? j : null);
    }, [E, ea, j]);
    let ed = n.useMemo(() => {
            if (null != Z) return (e) => (0, x.pX)(Z(e));
        }, [Z]),
        ec = n.useCallback(
            (e, l, t) => {
                null != Z
                    ? (0, x.bG)(Z(ea, e, t))
                    : (0, w.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: q,
                          analyticsContext: eo,
                          contextKey: J,
                      });
            },
            [Z, ea, q, eo, J],
        );
    return null == E || null == Q
        ? null != z && "loading" !== z
            ? (0, s.jsxs)("div", {
                  className: i()(eg.p$, X),
                  children: [
                      (0, s.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: V.intl.string(K.default.OvBwPV),
                      }),
                      (0, s.jsx)(p.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: V.intl.string(K.default["Sy7D+/"]),
                      }),
                  ],
              })
            : ee
              ? (0, s.jsx)(ex, { className: X }, E)
              : (0, s.jsx)("div", { className: i()(eg.u1, X), children: (0, s.jsx)(c.y, {}) })
        : (0, s.jsx)(m.f5, {
              value: q,
              children: (0, s.jsx)(L.J, {
                  navigateToStorefrontPage: ed,
                  viewProductDetails: ec,
                  children: (0, s.jsx)(M.E9, {
                      newValue: eo,
                      children: (0, s.jsx)(eI, {
                          className: X,
                          scrollerClassName: F,
                          promotionBannerClassName: U,
                          storefront: Q,
                          guildId: et,
                          selectedPageIndex: ea,
                          selectedSku: el,
                          renderHeader: W,
                          getSocialLayerStorefrontLink: Z,
                      }),
                  }),
              }),
          });
}
