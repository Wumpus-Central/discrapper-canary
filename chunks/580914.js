n.d(t, { Z: () => z }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(907331),
    o = n(636977),
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
    E = n(128922),
    O = n(870289),
    S = n(763941),
    y = n(370039),
    j = n(937510),
    k = n(38900),
    I = n(709999),
    T = n(653126),
    L = n(786040),
    B = n(401975),
    P = n(794324),
    N = n(934760),
    A = n(126026),
    R = n(619899),
    Z = n(190157),
    w = n(811847),
    D = n(859788),
    H = n(215023),
    M = n(981631),
    F = n(388032),
    W = n(310582);
let V = (0, x.IC)(90),
    U = {
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
    z = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: z, heroBlock: G, tab: K, onVisibilityChange: Y } = e,
            q = (0, s.O)(
                (e) => {
                    null == Y || Y(e);
                },
                0.1,
                null != Y,
            ),
            J = l.useRef(null),
            Q = (0, w.B)("HeroBlock"),
            X = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
            $ = (0, N.Z)(),
            ee = (0, b.sp)(),
            et = l.useMemo(() => {
                var e, t;
                return null != G
                    ? G
                    : null == z
                      ? U
                      : {
                            rankedSkuIds: null != (e = z.heroRanking) ? e : [],
                            name: z.name,
                            unpublishedAt: z.unpublishedAt,
                            logoUrl: (0, x.uV)(null != (t = z.heroLogo) ? t : z.logo, { size: V }),
                            categorySkuId: z.skuId,
                            bannerAsset: z.heroBannerAsset,
                            summary: z.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: z.storeListingId,
                            bannerDisplayConfig: z.heroBannerDisplayConfig,
                            logoDisplayConfig: z.heroLogoDisplayConfig,
                            heroLogoUrl: z.heroLogoUrl,
                            heroBannerUrl: z.heroBannerUrl,
                            heroBannerAnimatedUrl: z.heroBannerAnimatedUrl,
                        };
            }, [G, z]),
            en = (0, S.Pc)("HeroBlock") && et.categorySkuId === H.Hi,
            er = (0, S.IT)("HeroBlock"),
            {
                bannerStyleOverrides: el,
                logoStyleOverrides: ei,
                heroLogo: ea,
                heroBannerStatic: es,
                heroBannerAnimated: eo,
                heroBannerRive: ec,
            } = (0, P.hr)(et),
            eu = null != (t = null == el ? void 0 : el.responsive) && t,
            ed = null == el ? void 0 : el.backgroundStyle,
            ef = null != ec,
            eg = (0, u.e7)([v.Z], () => v.Z.products),
            ep = l.useMemo(() => (n ? [] : eg.size > 0 ? $(et.rankedSkuIds) : []), [n, $, et.rankedSkuIds, eg]),
            em = l.useMemo(
                () =>
                    !n &&
                    0 !== et.rankedSkuIds.length &&
                    !(ep.length > 0) &&
                    et.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = v.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, et.rankedSkuIds, ep.length],
            ),
            eh = K === H.AW.ORBS,
            eC = null != z && z.isOrbsExclusive,
            { cardContainerRef: e_, totalCards: eb } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, g.Z)(() => {
                        (null == a ? void 0 : a.current) != null &&
                            n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))));
                    }),
                    a = (0, f.y)(i, [r, e], {
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
            })(!eh || en),
            ev = (0, y.a)()(ep),
            ex = (0, j.l)(ev).slice(0, eb),
            eE = (0, R.St)(ex),
            eO = eh ? F.intl.string(F.t["1CdL8d"]) : F.intl.string(F.t.xYKa1T);
        eh && en && (eO = F.intl.string(F.t.dVz4hi));
        let eS = (0, O.FF)("CollectiblesContent"),
            ey = E.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            { analyticsLocations: ej } = (0, p.ZP)(),
            ek = () => {
                eh
                    ? ((0, h.Y)({
                          pageType: M.ZY5.SHOP_ORBS_TAB,
                          sectionType: M.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: M.qAy.CTA_TO_QUEST_HOME,
                      }),
                      en
                          ? (0, A.Z)({ analyticsLocations: ej })
                          : (0, m.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !eS || eC ? et.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: eC,
                      }),
                      _.default.track(M.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == ee ? void 0 : ee.sessionId,
                          sku_id: et.categorySkuId,
                          page_type: K,
                          page_section: null == ee ? void 0 : ee.pageSection,
                          page_category: null == ee ? void 0 : ee.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != X && (n || et !== U)
            ? (0, r.jsxs)("div", {
                  ref: q,
                  className: W.heroBlock,
                  children: [
                      ef
                          ? (0, Z.gT)({
                                isCustomCursorEnabled: Q,
                                className: W.riveEventOverlay,
                                riveEventTargetRef: J,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(W.banner, {
                              [W.rivBanner]: ef,
                              [W.responsive]: eu,
                          }),
                          style: null != ed ? { background: ed } : void 0,
                          children:
                              null != es &&
                              (0, r.jsx)(D.Z, {
                                  bannerStatic: es,
                                  bannerAnimated: eo,
                                  bannerRive: ec,
                                  isResponsive: eu,
                                  eventTargetRef: J,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: W.heroBlockContent,
                          children: [
                              ef
                                  ? (0, r.jsx)("div", {
                                        className: W.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: ek,
                                                text: eO,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(W.heroHeaderContainer, { [W.responsive]: eu }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: W.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: W.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != et.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: F.intl.string(F.t["h/uBCR"]),
                                                                  className: W.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: W.heroLogoNameContainer,
                                                              children: [
                                                                  null != ea &&
                                                                      (0, r.jsx)("img", {
                                                                          className: W.heroHeaderLogo,
                                                                          src: ea,
                                                                          alt: et.name,
                                                                          style:
                                                                              null == ei
                                                                                  ? void 0
                                                                                  : ei.toDesktopStyles(),
                                                                      }),
                                                                  null != et.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: W.title,
                                                                          color: "header-primary",
                                                                          children: et.title,
                                                                      }),
                                                                  "" !== et.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: eh
                                                                              ? W.orbsSubHeaderText
                                                                              : W.subHeaderText,
                                                                          style:
                                                                              null != et.bannerTextColor
                                                                                  ? { color: et.bannerTextColor }
                                                                                  : void 0,
                                                                          children: et.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: W.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: ek,
                                                        text: eO,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: a()({
                                      [W.row]: K === H.AW.HOME,
                                      [W.feed]: K === H.AW.ORBS,
                                  }),
                                  ref: e_,
                                  children:
                                      n || em
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != eb ? eb : 4)].map((e, t) =>
                                                    ey ? (0, r.jsx)(B.Z, {}, t) : (0, r.jsx)(k.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(L.zp.Provider, {
                                                value: { rentalDuration: en ? er : void 0 },
                                                children: eE.map((e, t) => {
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
                                                                  children:
                                                                      ey && (null == e ? void 0 : e.skuId) != null
                                                                          ? (0, r.jsx)(
                                                                                T.Z,
                                                                                {
                                                                                    skuId: null == e ? void 0 : e.skuId,
                                                                                    prioritizedCurrency:
                                                                                        K === H.AW.ORBS
                                                                                            ? L.tA.ORBS
                                                                                            : void 0,
                                                                                    onClickAnalytics: (0, L.wO)(
                                                                                        e,
                                                                                        K,
                                                                                        ee,
                                                                                    ),
                                                                                },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                I.Z,
                                                                                {
                                                                                    product: e,
                                                                                    category: n,
                                                                                    user: X,
                                                                                    tab: K,
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
