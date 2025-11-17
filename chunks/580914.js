n.d(t, { Z: () => W }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(907331),
    s = n(636977),
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
    x = n(128922),
    E = n(870289),
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
    N = n(190157),
    A = n(811847),
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
            G = (0, o.O)(
                (e) => {
                    null == z || z(e);
                },
                0.1,
                null != z,
            ),
            K = l.useRef(null),
            Y = (0, A.B)("HeroBlock"),
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
            ea = null == $ ? void 0 : $.backgroundStyle,
            eo = null != el,
            es = (0, u.e7)([b.Z], () => b.Z.products),
            ec = l.useMemo(() => (n ? [] : es.size > 0 ? J(X.rankedSkuIds) : []), [n, J, X.rankedSkuIds, es]),
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
            ed = U === Z.AW.ORBS,
            ep = null != W && W.isOrbsExclusive,
            { cardContainerRef: eg, totalCards: ef } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, g.Z)(() => {
                        (null == a ? void 0 : a.current) != null &&
                            n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))));
                    }),
                    a = (0, p.y)(i, [r, e], {
                        fireOnMount: !0,
                        fireOnDepsChange: !0,
                        enabled: e,
                    });
                return {
                    cardContainerRef: l.useCallback(
                        (t) => {
                            (a.current = t), null != t && e && i();
                        },
                        [i, a, e],
                    ),
                    totalCards: e ? t : void 0,
                };
            })(U !== Z.AW.ORBS),
            eh = (0, O.a)()(ec),
            eC = (0, S.l)(eh).slice(0, ef),
            em = (0, P.St)(eC),
            e_ = ed ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T),
            eb = (0, E.FF)("CollectiblesContent"),
            ev = x.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            ex = () => {
                ed
                    ? ((0, h.Y)({
                          pageType: w.ZY5.SHOP_ORBS_TAB,
                          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, f.navigateToQuestHome)({ fromContent: s.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !eb || ep ? X.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: ep,
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
                      eo
                          ? (0, N.gT)({
                                isCustomCursorEnabled: Y,
                                className: D.riveEventOverlay,
                                riveEventTargetRef: K,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(D.banner, {
                              [D.rivBanner]: eo,
                              [D.responsive]: ei,
                          }),
                          style: null != ea ? { background: ea } : void 0,
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
                              eo
                                  ? (0, r.jsx)("div", {
                                        className: D.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: ex,
                                                text: e_,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(D.heroHeaderContainer, { [D.responsive]: ei }),
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
                                                                          variant: "text-md/normal",
                                                                          className: ed
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
                                                        onClick: ex,
                                                        text: e_,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: a()({
                                      [D.row]: U === Z.AW.HOME,
                                      [D.feed]: U === Z.AW.ORBS,
                                  }),
                                  ref: eg,
                                  children:
                                      n || eu
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != ef ? ef : 4)].map((e, t) =>
                                                    ev ? (0, r.jsx)(T.Z, {}, t) : (0, r.jsx)(y.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: em.map((e, t) => {
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
                                                                      ev && (null == e ? void 0 : e.skuId) != null
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
