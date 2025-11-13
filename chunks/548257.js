n.d(t, { Z: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(907331),
    s = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(393903),
    p = n(448986),
    f = n(110560),
    h = n(507808),
    C = n(594174),
    m = n(626135),
    _ = n(381585),
    b = n(597688),
    v = n(1870),
    x = n(884697),
    E = n(870289),
    S = n(370039),
    O = n(937510),
    y = n(653126),
    j = n(786040),
    k = n(401975),
    I = n(373183),
    T = n(794324),
    L = n(934760),
    B = n(619899),
    P = n(190157),
    A = n(811847),
    N = n(859788),
    R = n(215023),
    Z = n(981631),
    w = n(388032),
    H = n(310582);
let D = (0, x.IC)(90),
    M = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: c.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    F = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: F, heroBlock: W, tab: V, onVisibilityChange: U } = e,
            z = (0, o.O)(
                (e) => {
                    null == U || U(e);
                },
                0.1,
                null != U,
            ),
            G = l.useRef(null),
            K = (0, A.B)("HeroBlock"),
            Y = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
            q = (0, L.Z)(),
            J = (0, _.sp)(),
            Q = l.useMemo(() => {
                var e, t;
                return null != W
                    ? W
                    : null == F
                      ? M
                      : {
                            rankedSkuIds: null != (e = F.heroRanking) ? e : [],
                            name: F.name,
                            unpublishedAt: F.unpublishedAt,
                            logoUrl: (0, x.uV)(null != (t = F.heroLogo) ? t : F.logo, { size: D }),
                            categorySkuId: F.skuId,
                            bannerAsset: F.heroBannerAsset,
                            summary: F.summary,
                            type: c.z.REWARD_HERO,
                            categoryStoreListingId: F.storeListingId,
                            bannerDisplayConfig: F.heroBannerDisplayConfig,
                            logoDisplayConfig: F.heroLogoDisplayConfig,
                            heroLogoUrl: F.heroLogoUrl,
                            heroBannerUrl: F.heroBannerUrl,
                            heroBannerAnimatedUrl: F.heroBannerAnimatedUrl,
                        };
            }, [W, F]),
            X = l.useMemo(() => (null != F ? F : b.Z.getCategoryForProduct(Q.rewardSkuId)), [F, Q.rewardSkuId]),
            {
                bannerStyleOverrides: $,
                logoStyleOverrides: ee,
                heroLogo: et,
                heroBannerStatic: en,
                heroBannerAnimated: er,
                heroBannerRive: el,
            } = (0, T.hr)(Q),
            ei = null != (t = null == $ ? void 0 : $.responsive) && t,
            ea = null == $ ? void 0 : $.backgroundStyle,
            eo = null != el,
            es = (0, u.e7)([b.Z], () => b.Z.products),
            ec = (0, u.e7)([v.Z], () => v.Z.getPurchase(Q.rewardSkuId)),
            eu = l.useMemo(
                () =>
                    n
                        ? []
                        : es.size > 0
                          ? q(Q.rankedSkuIds).filter((e) => e.skuId !== Q.rewardSkuId || null != ec)
                          : [],
                [n, q, Q.rankedSkuIds, es, ec, Q.rewardSkuId],
            ),
            ed = l.useMemo(
                () =>
                    !n &&
                    0 !== Q.rankedSkuIds.length &&
                    !(eu.length > 0) &&
                    Q.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = b.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, Q.rankedSkuIds, eu.length],
            ),
            { cardContainerRef: eg, totalCards: ep } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, p.Z)(() => {
                        (null == a ? void 0 : a.current) != null &&
                            n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))));
                    }),
                    a = (0, g.y)(i, [r, e], {
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
            })(V !== R.AW.ORBS),
            ef = (0, S.a)()(eu),
            eh = (0, O.l)(ef).slice(0, ep),
            eC = (0, B.St)(eh),
            em = V === R.AW.ORBS ? w.intl.string(w.t["1CdL8d"]) : w.intl.string(w.t.xYKa1T),
            e_ = (0, E.FF)("CollectiblesContent"),
            eb = null != F && F.isOrbsExclusive,
            ev = () => {
                V === R.AW.ORBS
                    ? ((0, h.Y)({
                          pageType: Z.ZY5.SHOP_ORBS_TAB,
                          sectionType: Z.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: Z.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, f.navigateToQuestHome)({ fromContent: s.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop reward category hero",
                          categorySkuId: !e_ || eb ? Q.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: eb,
                      }),
                      m.default.track(Z.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == J ? void 0 : J.sessionId,
                          sku_id: Q.categorySkuId,
                          page_type: V,
                          page_section: null == J ? void 0 : J.pageSection,
                          page_category: null == J ? void 0 : J.pageCategory,
                          cta_name: "shop reward category hero button",
                      }));
            };
        return null != Y && (n || Q !== M)
            ? (0, r.jsxs)("div", {
                  ref: z,
                  className: H.heroBlock,
                  children: [
                      eo
                          ? (0, P.gT)({
                                isCustomCursorEnabled: K,
                                className: H.riveEventOverlay,
                                riveEventTargetRef: G,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(H.banner, { [H.rivBanner]: eo }),
                          style: null != ea ? { background: ea } : void 0,
                          children:
                              null != en &&
                              (0, r.jsx)(N.Z, {
                                  bannerStatic: en,
                                  bannerAnimated: er,
                                  bannerRive: el,
                                  isResponsive: ei,
                                  eventTargetRef: G,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: H.heroBlockContent,
                          children: [
                              eo
                                  ? (0, r.jsx)("div", {
                                        className: H.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: ev,
                                                text: em,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(H.heroHeaderContainer, { [H.responsive]: ei }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: H.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: H.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != Q.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: w.intl.string(w.t["h/uBCR"]),
                                                                  className: H.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: H.heroLogoNameContainer,
                                                              children: [
                                                                  null != et &&
                                                                      (0, r.jsx)("img", {
                                                                          className: H.heroHeaderLogo,
                                                                          src: et,
                                                                          alt: Q.name,
                                                                          style:
                                                                              null == ee
                                                                                  ? void 0
                                                                                  : ee.toDesktopStyles(),
                                                                      }),
                                                                  null != Q.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: H.title,
                                                                          color: "header-primary",
                                                                          children: Q.title,
                                                                      }),
                                                                  "" !== Q.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: eb
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: eb
                                                                              ? H.orbsSubHeaderText
                                                                              : H.subHeaderText,
                                                                          style:
                                                                              null != Q.bannerTextColor
                                                                                  ? { color: Q.bannerTextColor }
                                                                                  : void 0,
                                                                          children: Q.summary,
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
                                                        onClick: ev,
                                                        text: em,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: a()({
                                      [H.row]: V === R.AW.HOME,
                                      [H.feed]: V === R.AW.ORBS,
                                  }),
                                  ref: eg,
                                  children:
                                      n || ed
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != ep ? ep : 4)].map((e, t) =>
                                                    (0, r.jsx)(k.Z, {}, t),
                                                ),
                                            })
                                          : (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    null == ec &&
                                                        null != Q.rewardSkuId &&
                                                        null != X &&
                                                        (0, r.jsx)(
                                                            _.k0,
                                                            {
                                                                newValue: {
                                                                    tilePosition: 0,
                                                                    pageSection: "top 4",
                                                                    categoryPosition: 0,
                                                                },
                                                                children: (0, r.jsx)(I.Z, {
                                                                    category: X,
                                                                    rewardSkuId: Q.rewardSkuId,
                                                                }),
                                                            },
                                                            Q.rewardSkuId,
                                                        ),
                                                    eC.map((e, t) => {
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
                                                                      children: (0, r.jsx)(
                                                                          y.Z,
                                                                          {
                                                                              skuId: null == e ? void 0 : e.skuId,
                                                                              prioritizedCurrency:
                                                                                  V === R.AW.ORBS ? j.tA.ORBS : void 0,
                                                                              onClickAnalytics: (0, j.wO)(e, V, J),
                                                                          },
                                                                          e.skuId,
                                                                      ),
                                                                  },
                                                                  null == e ? void 0 : e.skuId,
                                                              );
                                                    }),
                                                ],
                                            }),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
