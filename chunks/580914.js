n.d(t, { Z: () => W }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(907331),
    o = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    p = n(393903),
    g = n(448986),
    f = n(110560),
    h = n(507808),
    C = n(594174),
    m = n(626135),
    _ = n(381585),
    b = n(597688),
    v = n(884697),
    E = n(128922),
    x = n(870289),
    O = n(370039),
    S = n(937510),
    y = n(38900),
    j = n(709999),
    k = n(653126),
    I = n(786040),
    T = n(401975),
    L = n(794324),
    B = n(934760),
    P = n(619899),
    A = n(190157),
    N = n(811847),
    R = n(859788),
    Z = n(215023),
    w = n(981631),
    H = n(388032),
    D = n(310582);
let M = (0, v.IC)(90),
    F = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: c.z.HERO,
        categoryStoreListingId: "",
    },
    W = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: W, heroBlock: V, tab: U, onVisibilityChange: z } = e,
            G = (0, a.O)(
                (e) => {
                    null == z || z(e);
                },
                0.1,
                null != z,
            ),
            K = l.useRef(null),
            Y = (0, N.B)("HeroBlock"),
            q = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
            J = (0, B.Z)(),
            Q = (0, _.sp)(),
            X = l.useMemo(() => {
                var e, t;
                return null != V
                    ? V
                    : null == W
                      ? F
                      : {
                            rankedSkuIds: null != (e = W.heroRanking) ? e : [],
                            name: W.name,
                            unpublishedAt: W.unpublishedAt,
                            logoUrl: (0, v.uV)(null != (t = W.heroLogo) ? t : W.logo, { size: M }),
                            categorySkuId: W.skuId,
                            bannerAsset: W.heroBannerAsset,
                            summary: W.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: W.storeListingId,
                            bannerDisplayConfig: W.heroBannerDisplayConfig,
                            logoDisplayConfig: W.heroLogoDisplayConfig,
                            heroLogoUrl: W.heroLogoUrl,
                            heroBannerUrl: W.heroBannerUrl,
                            heroBannerAnimatedUrl: W.heroBannerAnimatedUrl,
                        };
            }, [V, W]),
            {
                bannerStyleOverrides: $,
                logoStyleOverrides: ee,
                heroLogo: et,
                heroBannerStatic: en,
                heroBannerAnimated: er,
                heroBannerRive: el,
            } = (0, L.hr)(X),
            ei = null != (t = null == $ ? void 0 : $.responsive) && t,
            es = null == $ ? void 0 : $.backgroundStyle,
            ea = null != el,
            eo = (0, u.e7)([b.Z], () => b.Z.products),
            ec = l.useMemo(() => (n ? [] : eo.size > 0 ? J(X.rankedSkuIds) : []), [n, J, X.rankedSkuIds, eo]),
            eu = l.useMemo(
                () =>
                    !n &&
                    0 !== X.rankedSkuIds.length &&
                    !(ec.length > 0) &&
                    X.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = b.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, X.rankedSkuIds, ec.length],
            ),
            { cardContainerRef: ed, totalCards: ep } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, g.Z)(() => {
                        (null == s ? void 0 : s.current) != null &&
                            n(Math.max(1, Math.floor((s.current.offsetWidth + r) / (246 + r))));
                    }),
                    s = (0, p.y)(i, [r, e], {
                        fireOnMount: !0,
                        fireOnDepsChange: !0,
                        enabled: e,
                    });
                return {
                    cardContainerRef: l.useCallback(
                        (t) => {
                            (s.current = t), null != t && e && i();
                        },
                        [i, s, e],
                    ),
                    totalCards: e ? t : void 0,
                };
            })(U !== Z.AW.ORBS),
            eg = (0, O.a)()(ec),
            ef = (0, S.l)(eg).slice(0, ep),
            eh = (0, P.St)(ef),
            eC = U === Z.AW.ORBS ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T),
            em = (0, x.FF)("CollectiblesContent"),
            e_ = null != W && W.isOrbsExclusive,
            eb = E.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            ev = () => {
                U === Z.AW.ORBS
                    ? ((0, h.Y)({
                          pageType: w.ZY5.SHOP_ORBS_TAB,
                          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !em || e_ ? X.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: e_,
                      }),
                      m.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == Q ? void 0 : Q.sessionId,
                          sku_id: X.categorySkuId,
                          page_type: U,
                          page_section: null == Q ? void 0 : Q.pageSection,
                          page_category: null == Q ? void 0 : Q.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != q && (n || X !== F)
            ? (0, r.jsxs)("div", {
                  ref: G,
                  className: D.heroBlock,
                  children: [
                      ea
                          ? (0, A.gT)({
                                isCustomCursorEnabled: Y,
                                className: D.riveEventOverlay,
                                riveEventTargetRef: K,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(D.banner, {
                              [D.rivBanner]: ea,
                              [D.responsive]: ei,
                          }),
                          style: null != es ? { background: es } : void 0,
                          children:
                              null != en &&
                              (0, r.jsx)(R.Z, {
                                  bannerStatic: en,
                                  bannerAnimated: er,
                                  bannerRive: el,
                                  isResponsive: ei,
                                  eventTargetRef: K,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: D.heroBlockContent,
                          children: [
                              ea
                                  ? (0, r.jsx)("div", {
                                        className: D.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: ev,
                                                text: eC,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(D.heroHeaderContainer, { [D.responsive]: ei }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: D.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: D.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != X.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: H.intl.string(H.t["h/uBCR"]),
                                                                  className: D.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: D.heroLogoNameContainer,
                                                              children: [
                                                                  null != et &&
                                                                      (0, r.jsx)("img", {
                                                                          className: D.heroHeaderLogo,
                                                                          src: et,
                                                                          alt: X.name,
                                                                          style:
                                                                              null == ee
                                                                                  ? void 0
                                                                                  : ee.toDesktopStyles(),
                                                                      }),
                                                                  null != X.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: D.title,
                                                                          color: "header-primary",
                                                                          children: X.title,
                                                                      }),
                                                                  "" !== X.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: e_
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: e_
                                                                              ? D.orbsSubHeaderText
                                                                              : D.subHeaderText,
                                                                          style:
                                                                              null != X.bannerTextColor
                                                                                  ? { color: X.bannerTextColor }
                                                                                  : void 0,
                                                                          children: X.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: D.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: ev,
                                                        text: eC,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: s()({
                                      [D.row]: U === Z.AW.HOME,
                                      [D.feed]: U === Z.AW.ORBS,
                                  }),
                                  ref: ed,
                                  children:
                                      n || eu
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != ep ? ep : 4)].map((e, t) =>
                                                    eb ? (0, r.jsx)(T.Z, {}, t) : (0, r.jsx)(y.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eh.map((e, t) => {
                                                    let n = b.Z.getCategoryForProduct(e.skuId);
                                                    return null == e || null == n
                                                        ? null
                                                        : (0, r.jsx)(
                                                              _.k0,
                                                              {
                                                                  newValue: {
                                                                      tilePosition: t,
                                                                      pageSection: "top 4",
                                                                      categoryPosition: 0,
                                                                  },
                                                                  children:
                                                                      eb && (null == e ? void 0 : e.skuId) != null
                                                                          ? (0, r.jsx)(
                                                                                k.Z,
                                                                                {
                                                                                    skuId: null == e ? void 0 : e.skuId,
                                                                                    prioritizedCurrency:
                                                                                        U === Z.AW.ORBS
                                                                                            ? I.tA.ORBS
                                                                                            : void 0,
                                                                                    onClickAnalytics: (0, I.wO)(
                                                                                        e,
                                                                                        U,
                                                                                        Q,
                                                                                    ),
                                                                                },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                j.Z,
                                                                                {
                                                                                    product: e,
                                                                                    category: n,
                                                                                    user: q,
                                                                                    tab: U,
                                                                                },
                                                                                e.skuId,
                                                                            ),
                                                              },
                                                              null == e ? void 0 : e.skuId,
                                                          );
                                                }),
                                            }),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
