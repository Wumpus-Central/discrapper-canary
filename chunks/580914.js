n.d(t, { Z: () => V }), n(388685);
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
    p = n(110560),
    m = n(507808),
    h = n(594174),
    C = n(626135),
    _ = n(381585),
    b = n(597688),
    v = n(884697),
    x = n(128922),
    E = n(870289),
    O = n(763941),
    S = n(370039),
    y = n(937510),
    j = n(38900),
    k = n(709999),
    I = n(653126),
    T = n(786040),
    L = n(401975),
    B = n(794324),
    P = n(934760),
    N = n(619899),
    A = n(190157),
    R = n(811847),
    Z = n(859788),
    w = n(215023),
    H = n(981631),
    D = n(388032),
    M = n(687983);
let F = (0, v.IC)(90),
    W = {
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
    V = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: V, heroBlock: U, tab: z, onVisibilityChange: G } = e,
            K = (0, s.O)(
                (e) => {
                    null == G || G(e);
                },
                0.1,
                null != G,
            ),
            Y = l.useRef(null),
            q = (0, R.B)("HeroBlock"),
            J = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            Q = (0, P.Z)(),
            X = (0, _.sp)(),
            $ = l.useMemo(() => {
                var e, t;
                return null != U
                    ? U
                    : null == V
                      ? W
                      : {
                            rankedSkuIds: null != (e = V.heroRanking) ? e : [],
                            name: V.name,
                            unpublishedAt: V.unpublishedAt,
                            logoUrl: (0, v.uV)(null != (t = V.heroLogo) ? t : V.logo, { size: F }),
                            categorySkuId: V.skuId,
                            bannerAsset: V.heroBannerAsset,
                            summary: V.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: V.storeListingId,
                            bannerDisplayConfig: V.heroBannerDisplayConfig,
                            logoDisplayConfig: V.heroLogoDisplayConfig,
                            heroLogoUrl: V.heroLogoUrl,
                            heroBannerUrl: V.heroBannerUrl,
                            heroBannerAnimatedUrl: V.heroBannerAnimatedUrl,
                        };
            }, [U, V]),
            {
                bannerStyleOverrides: ee,
                logoStyleOverrides: et,
                heroLogo: en,
                heroBannerStatic: er,
                heroBannerAnimated: el,
                heroBannerRive: ei,
            } = (0, B.hr)($),
            ea = null != (t = null == ee ? void 0 : ee.responsive) && t,
            es = null == ee ? void 0 : ee.backgroundStyle,
            eo = null != ei,
            ec = (0, u.e7)([b.Z], () => b.Z.products),
            eu = l.useMemo(() => (n ? [] : ec.size > 0 ? Q($.rankedSkuIds) : []), [n, Q, $.rankedSkuIds, ec]),
            ed = l.useMemo(
                () =>
                    !n &&
                    0 !== $.rankedSkuIds.length &&
                    !(eu.length > 0) &&
                    $.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = b.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, $.rankedSkuIds, eu.length],
            ),
            ef = z === w.AW.ORBS,
            eg = null != V && V.isOrbsExclusive,
            { cardContainerRef: ep, totalCards: em } = ((e) => {
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
            })(z !== w.AW.ORBS),
            eh = (0, S.a)()(eu),
            eC = (0, y.l)(eh).slice(0, em),
            e_ = (0, N.St)(eC),
            eb = ef ? D.intl.string(D.t["1CdL8d"]) : D.intl.string(D.t.xYKa1T),
            ev = (0, E.FF)("CollectiblesContent"),
            ex = x.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            eE = (0, O.Pc)("HeroBlock") && $.categorySkuId === w.Hi,
            eO = (0, O.IT)("HeroBlock"),
            eS = () => {
                ef
                    ? ((0, m.Y)({
                          pageType: H.ZY5.SHOP_ORBS_TAB,
                          sectionType: H.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: H.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !ev || eg ? $.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: eg,
                      }),
                      C.default.track(H.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == X ? void 0 : X.sessionId,
                          sku_id: $.categorySkuId,
                          page_type: z,
                          page_section: null == X ? void 0 : X.pageSection,
                          page_category: null == X ? void 0 : X.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != J && (n || $ !== W)
            ? (0, r.jsxs)("div", {
                  ref: K,
                  className: M.heroBlock,
                  children: [
                      eo
                          ? (0, A.gT)({
                                isCustomCursorEnabled: q,
                                className: M.riveEventOverlay,
                                riveEventTargetRef: Y,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(M.banner, {
                              [M.rivBanner]: eo,
                              [M.responsive]: ea,
                          }),
                          style: null != es ? { background: es } : void 0,
                          children:
                              null != er &&
                              (0, r.jsx)(Z.Z, {
                                  bannerStatic: er,
                                  bannerAnimated: el,
                                  bannerRive: ei,
                                  isResponsive: ea,
                                  eventTargetRef: Y,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: M.heroBlockContent,
                          children: [
                              eo
                                  ? (0, r.jsx)("div", {
                                        className: M.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: eS,
                                                text: eb,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(M.heroHeaderContainer, { [M.responsive]: ea }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: M.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: M.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != $.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: D.intl.string(D.t["h/uBCR"]),
                                                                  className: M.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: M.heroLogoNameContainer,
                                                              children: [
                                                                  null != en &&
                                                                      (0, r.jsx)("img", {
                                                                          className: M.heroHeaderLogo,
                                                                          src: en,
                                                                          alt: $.name,
                                                                          style:
                                                                              null == et
                                                                                  ? void 0
                                                                                  : et.toDesktopStyles(),
                                                                      }),
                                                                  null != $.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: M.title,
                                                                          color: "header-primary",
                                                                          children: $.title,
                                                                      }),
                                                                  "" !== $.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: ef
                                                                              ? M.orbsSubHeaderText
                                                                              : M.subHeaderText,
                                                                          style:
                                                                              null != $.bannerTextColor
                                                                                  ? { color: $.bannerTextColor }
                                                                                  : void 0,
                                                                          children: $.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: M.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: eS,
                                                        text: eb,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: a()({
                                      [M.row]: z === w.AW.HOME,
                                      [M.feed]: z === w.AW.ORBS,
                                  }),
                                  ref: ep,
                                  children:
                                      n || ed
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != em ? em : 4)].map((e, t) =>
                                                    ex ? (0, r.jsx)(L.Z, {}, t) : (0, r.jsx)(j.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(T.zp.Provider, {
                                                value: {
                                                    isRental: eE,
                                                    rentalDuration: eO,
                                                },
                                                children: e_.map((e, t) => {
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
                                                                      ex && (null == e ? void 0 : e.skuId) != null
                                                                          ? (0, r.jsx)(
                                                                                I.Z,
                                                                                {
                                                                                    skuId: null == e ? void 0 : e.skuId,
                                                                                    prioritizedCurrency:
                                                                                        z === w.AW.ORBS
                                                                                            ? T.tA.ORBS
                                                                                            : void 0,
                                                                                    onClickAnalytics: (0, T.wO)(
                                                                                        e,
                                                                                        z,
                                                                                        X,
                                                                                    ),
                                                                                },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                k.Z,
                                                                                {
                                                                                    product: e,
                                                                                    category: n,
                                                                                    user: J,
                                                                                    tab: z,
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
