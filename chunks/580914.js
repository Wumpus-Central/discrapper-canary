n.d(t, { Z: () => W }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(907331),
    a = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(393903),
    f = n(448986),
    p = n(906732),
    m = n(110560),
    C = n(507808),
    h = n(594174),
    _ = n(626135),
    b = n(381585),
    E = n(597688),
    v = n(884697),
    S = n(870289),
    x = n(763941),
    O = n(370039),
    y = n(937510),
    k = n(653126),
    T = n(786040),
    j = n(401975),
    I = n(794324),
    L = n(934760),
    B = n(126026),
    N = n(619899),
    A = n(190157),
    P = n(811847),
    R = n(859788),
    Z = n(215023),
    w = n(981631),
    D = n(388032),
    H = n(310582);
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
        let { isLoading: n, handleTransition: i, category: W, heroBlock: U, tab: V, onVisibilityChange: z } = e,
            G = (0, o.O)(
                (e) => {
                    null == z || z(e);
                },
                0.1,
                null != z,
            ),
            K = l.useRef(null),
            Y = (0, P.B)("HeroBlock"),
            q = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            Q = (0, L.Z)(),
            J = (0, b.sp)(),
            X = l.useMemo(() => {
                var e, t;
                return null != U
                    ? U
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
            }, [U, W]),
            $ = (0, x.Pc)("HeroBlock") && X.categorySkuId === Z.Hi,
            ee = (0, x.IT)("HeroBlock"),
            {
                bannerStyleOverrides: et,
                logoStyleOverrides: en,
                heroLogo: er,
                heroBannerStatic: el,
                heroBannerAnimated: ei,
                heroBannerRive: es,
            } = (0, I.hr)(X),
            eo = null != (t = null == et ? void 0 : et.responsive) && t,
            ea = null == et ? void 0 : et.backgroundStyle,
            ec = null != es,
            eu = (0, u.e7)([E.Z], () => E.Z.products),
            ed = l.useMemo(() => (n ? [] : eu.size > 0 ? Q(X.rankedSkuIds) : []), [n, Q, X.rankedSkuIds, eu]),
            eg = l.useMemo(
                () =>
                    !n &&
                    0 !== X.rankedSkuIds.length &&
                    !(ed.length > 0) &&
                    X.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = E.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, X.rankedSkuIds, ed.length],
            ),
            ef = V === Z.AW.ORBS,
            ep = null != W && W.isOrbsExclusive,
            { cardContainerRef: em, totalCards: eC } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, f.Z)(() => {
                        (null == s ? void 0 : s.current) != null &&
                            n(Math.max(1, Math.floor((s.current.offsetWidth + r) / (246 + r))));
                    }),
                    s = (0, g.y)(i, [r, e], {
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
            })(!ef || $),
            eh = (0, O.a)()(ed),
            e_ = (0, y.l)(eh).slice(0, eC),
            eb = (0, N.St)(e_),
            eE = ef ? D.intl.string(D.t["1CdL8d"]) : D.intl.string(D.t.xYKa1T);
        ef && $ && (eE = D.intl.string(D.t.dVz4hi));
        let ev = (0, S.FF)("CollectiblesContent"),
            { analyticsLocations: eS } = (0, p.ZP)(),
            ex = () => {
                ef
                    ? ((0, C.Y)({
                          pageType: w.ZY5.SHOP_ORBS_TAB,
                          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.qAy.CTA_TO_QUEST_HOME,
                      }),
                      $
                          ? (0, B.Z)({ analyticsLocations: eS })
                          : (0, m.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !ev || ep ? X.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: ep,
                      }),
                      _.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == J ? void 0 : J.sessionId,
                          sku_id: X.categorySkuId,
                          page_type: V,
                          page_section: null == J ? void 0 : J.pageSection,
                          page_category: null == J ? void 0 : J.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != q && (n || X !== F)
            ? (0, r.jsxs)("div", {
                  ref: G,
                  className: H.heroBlock,
                  children: [
                      ec
                          ? (0, A.gT)({
                                isCustomCursorEnabled: Y,
                                className: H.riveEventOverlay,
                                riveEventTargetRef: K,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(H.banner, {
                              [H.rivBanner]: ec,
                              [H.responsive]: eo,
                          }),
                          style: null != ea ? { background: ea } : void 0,
                          children:
                              null != el &&
                              (0, r.jsx)(R.Z, {
                                  bannerStatic: el,
                                  bannerAnimated: ei,
                                  bannerRive: es,
                                  isResponsive: eo,
                                  eventTargetRef: K,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: H.heroBlockContent,
                          children: [
                              ec
                                  ? (0, r.jsx)("div", {
                                        className: H.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: ex,
                                                text: eE,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(H.heroHeaderContainer, { [H.responsive]: eo }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: H.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: H.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != X.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: D.intl.string(D.t["h/uBCR"]),
                                                                  className: H.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: H.heroLogoNameContainer,
                                                              children: [
                                                                  null != er &&
                                                                      (0, r.jsx)("img", {
                                                                          className: H.heroHeaderLogo,
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
                                                                          className: H.title,
                                                                          color: "header-primary",
                                                                          children: X.title,
                                                                      }),
                                                                  "" !== X.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: ef
                                                                              ? H.orbsSubHeaderText
                                                                              : H.subHeaderText,
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
                                                    className: H.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: ex,
                                                        text: eE,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: s()({
                                      [H.row]: V === Z.AW.HOME,
                                      [H.feed]: V === Z.AW.ORBS,
                                  }),
                                  ref: em,
                                  children:
                                      n || eg
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != eC ? eC : 4)].map((e, t) =>
                                                    (0, r.jsx)(j.Z, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(T.zp.Provider, {
                                                value: { rentalDuration: $ ? ee : void 0 },
                                                children: eb.map((e, t) => {
                                                    let n = E.Z.getCategoryForProduct(e.skuId);
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
                                                                      k.Z,
                                                                      {
                                                                          skuId: null == e ? void 0 : e.skuId,
                                                                          prioritizedCurrency:
                                                                              V === Z.AW.ORBS ? T.tA.ORBS : void 0,
                                                                          onClickAnalytics: (0, T.wO)(e, V, J),
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
