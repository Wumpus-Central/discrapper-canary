n.d(t, { Z: () => W }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(907331),
    s = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    f = n(393903),
    g = n(448986),
    p = n(906732),
    m = n(110560),
    h = n(507808),
    C = n(594174),
    _ = n(626135),
    b = n(381585),
    v = n(597688),
    x = n(884697),
    E = n(870289),
    O = n(763941),
    S = n(370039),
    y = n(937510),
    j = n(653126),
    I = n(786040),
    k = n(401975),
    T = n(794324),
    L = n(934760),
    P = n(126026),
    B = n(619899),
    N = n(190157),
    A = n(811847),
    R = n(859788),
    Z = n(215023),
    w = n(981631),
    H = n(388032),
    D = n(310582);
let M = (0, x.IC)(90),
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
            Y = (0, A.B)("HeroBlock"),
            q = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
            J = (0, L.Z)(),
            Q = (0, b.sp)(),
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
                            logoUrl: (0, x.uV)(null != (t = W.heroLogo) ? t : W.logo, { size: M }),
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
            $ = (0, O.Pc)("HeroBlock") && X.categorySkuId === Z.Hi,
            ee = (0, O.IT)("HeroBlock"),
            {
                bannerStyleOverrides: et,
                logoStyleOverrides: en,
                heroLogo: er,
                heroBannerStatic: el,
                heroBannerAnimated: ei,
                heroBannerRive: eo,
            } = (0, T.hr)(X),
            ea = null != (t = null == et ? void 0 : et.responsive) && t,
            es = null == et ? void 0 : et.backgroundStyle,
            ec = null != eo,
            eu = (0, u.e7)([v.Z], () => v.Z.products),
            ed = l.useMemo(() => (n ? [] : eu.size > 0 ? J(X.rankedSkuIds) : []), [n, J, X.rankedSkuIds, eu]),
            ef = l.useMemo(
                () =>
                    !n &&
                    0 !== X.rankedSkuIds.length &&
                    !(ed.length > 0) &&
                    X.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = v.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, X.rankedSkuIds, ed.length],
            ),
            eg = U === Z.AW.ORBS,
            ep = null != W && W.isOrbsExclusive,
            { cardContainerRef: em, totalCards: eh } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, g.Z)(() => {
                        (null == o ? void 0 : o.current) != null &&
                            n(Math.max(1, Math.floor((o.current.offsetWidth + r) / (246 + r))));
                    }),
                    o = (0, f.y)(i, [r, e], {
                        fireOnMount: !0,
                        fireOnDepsChange: !0,
                        enabled: e,
                    });
                return {
                    cardContainerRef: l.useCallback(
                        (t) => {
                            (o.current = t), null != t && e && i();
                        },
                        [i, o, e],
                    ),
                    totalCards: e ? t : void 0,
                };
            })(!eg || $),
            eC = (0, S.a)()(ed),
            e_ = (0, y.l)(eC).slice(0, eh),
            eb = (0, B.St)(e_),
            ev = eg ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T);
        eg && $ && (ev = H.intl.string(H.t.dVz4hi));
        let ex = (0, E.FF)("CollectiblesContent"),
            { analyticsLocations: eE } = (0, p.ZP)(),
            eO = () => {
                eg
                    ? ((0, h.Y)({
                          pageType: w.ZY5.SHOP_ORBS_TAB,
                          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.qAy.CTA_TO_QUEST_HOME,
                      }),
                      $
                          ? (0, P.Z)({ analyticsLocations: eE })
                          : (0, m.navigateToQuestHome)({ fromContent: s.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !ex || ep ? X.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: ep,
                      }),
                      _.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                      ec
                          ? (0, N.gT)({
                                isCustomCursorEnabled: Y,
                                className: D.riveEventOverlay,
                                riveEventTargetRef: K,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: o()(D.banner, {
                              [D.rivBanner]: ec,
                              [D.responsive]: ea,
                          }),
                          style: null != es ? { background: es } : void 0,
                          children:
                              null != el &&
                              (0, r.jsx)(R.Z, {
                                  bannerStatic: el,
                                  bannerAnimated: ei,
                                  bannerRive: eo,
                                  isResponsive: ea,
                                  eventTargetRef: K,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: D.heroBlockContent,
                          children: [
                              ec
                                  ? (0, r.jsx)("div", {
                                        className: D.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: eO,
                                                text: ev,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: o()(D.heroHeaderContainer, { [D.responsive]: ea }),
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
                                                                  null != er &&
                                                                      (0, r.jsx)("img", {
                                                                          className: D.heroHeaderLogo,
                                                                          src: er,
                                                                          alt: X.name,
                                                                          style:
                                                                              null == en
                                                                                  ? void 0
                                                                                  : en.toDesktopStyles(),
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
                                                                          className: eg
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
                                                        onClick: eO,
                                                        text: ev,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: o()({
                                      [D.row]: U === Z.AW.HOME,
                                      [D.feed]: U === Z.AW.ORBS,
                                  }),
                                  ref: em,
                                  children:
                                      n || ef
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != eh ? eh : 4)].map((e, t) =>
                                                    (0, r.jsx)(k.Z, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(I.zp.Provider, {
                                                value: { rentalDuration: $ ? ee : void 0 },
                                                children: eb.map((e, t) => {
                                                    let n = v.Z.getCategoryForProduct(e.skuId);
                                                    return null == e || null == n
                                                        ? null
                                                        : (0, r.jsx)(
                                                              b.k0,
                                                              {
                                                                  newValue: {
                                                                      tilePosition: t,
                                                                      pageSection: "top 4",
                                                                      categoryPosition: 0,
                                                                  },
                                                                  children: (0, r.jsx)(
                                                                      j.Z,
                                                                      {
                                                                          skuId: null == e ? void 0 : e.skuId,
                                                                          prioritizedCurrency:
                                                                              U === Z.AW.ORBS ? I.tA.ORBS : void 0,
                                                                          onClickAnalytics: (0, I.wO)(e, U, Q),
                                                                      },
                                                                      e.skuId,
                                                                  ),
                                                              },
                                                              e.skuId,
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
