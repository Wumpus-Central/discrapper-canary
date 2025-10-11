n.d(t, { Z: () => U }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(907331),
    o = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(393903),
    f = n(448986),
    p = n(110560),
    C = n(507808),
    h = n(594174),
    _ = n(626135),
    m = n(381585),
    b = n(597688),
    E = n(884697),
    v = n(128922),
    S = n(870289),
    O = n(254690),
    x = n(655283),
    y = n(370039),
    j = n(937510),
    T = n(38900),
    L = n(709999),
    k = n(653126),
    I = n(401975),
    B = n(794324),
    P = n(934760),
    N = n(619899),
    A = n(190157),
    R = n(642909),
    Z = n(859788),
    w = n(215023),
    H = n(981631),
    F = n(388032),
    D = n(310582);
let M = (0, E.IC)(90),
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
    U = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: U, heroBlock: V, tab: G, onVisibilityChange: z } = e,
            K = (0, a.O)(
                (e) => {
                    null == z || z(e);
                },
                0.1,
                null != z,
            ),
            Y = l.useRef(null),
            q = (0, R.G)("HeroBlock"),
            Q = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            J = (0, P.Z)(),
            X = (0, m.sp)(),
            $ = O.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && G !== w.AW.ORBS,
            ee = (0, x.x)("HeroBlock"),
            et = l.useMemo(() => {
                var e, t;
                return null != V
                    ? V
                    : null == U
                      ? W
                      : {
                            rankedSkuIds: null != (e = U.heroRanking) ? e : [],
                            name: U.name,
                            unpublishedAt: U.unpublishedAt,
                            logoUrl: (0, E.uV)(null != (t = U.heroLogo) ? t : U.logo, { size: M }),
                            categorySkuId: U.skuId,
                            bannerAsset: U.heroBannerAsset,
                            summary: U.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: U.storeListingId,
                            bannerDisplayConfig: U.heroBannerDisplayConfig,
                            logoDisplayConfig: U.heroLogoDisplayConfig,
                            heroLogoUrl: U.heroLogoUrl,
                            heroBannerUrl: U.heroBannerUrl,
                            heroBannerAnimatedUrl: U.heroBannerAnimatedUrl,
                        };
            }, [V, U]),
            {
                bannerStyleOverrides: en,
                logoStyleOverrides: er,
                heroLogo: el,
                heroBannerStatic: ei,
                heroBannerAnimated: es,
                heroBannerRive: ea,
            } = (0, B.hr)(et),
            eo = null != (t = null == en ? void 0 : en.responsive) && t,
            ec = null == en ? void 0 : en.backgroundStyle,
            eu = null != ea,
            ed = (0, u.e7)([b.Z], () => b.Z.products),
            eg = l.useMemo(() => (n ? [] : ed.size > 0 ? J(et.rankedSkuIds) : []), [n, J, et.rankedSkuIds, ed]),
            ef = l.useMemo(
                () =>
                    !n &&
                    0 !== et.rankedSkuIds.length &&
                    !(eg.length > 0) &&
                    et.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = b.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, et.rankedSkuIds, eg.length],
            ),
            { cardContainerRef: ep, totalCards: eC } = ((e) => {
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
                    totalCards: e ? t : 4,
                };
            })(G !== w.AW.ORBS),
            eh = (0, y.a)()(eg),
            e_ = (0, j.l)(eh).slice(0, eC),
            em = (0, N.St)(e_),
            eb =
                G === w.AW.ORBS
                    ? F.intl.string(F.t["1CdL8f"])
                    : q
                      ? F.intl.string(F.t.guWAg4)
                      : ee
                        ? F.intl.string(F.t["/QvRam"])
                        : F.intl.string(F.t.xYKa1d),
            eE = (0, S.FF)("CollectiblesContent"),
            ev = (0, E.$2)(et.categorySkuId),
            eS = v.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            eO = () => {
                G === w.AW.ORBS
                    ? ((0, C.Y)({
                          pageType: H.ZY5.SHOP_ORBS_TAB,
                          sectionType: H.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: H.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (i("shop latest category hero", !eE || ev ? et.categorySkuId : void 0),
                      _.default.track(H.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == X ? void 0 : X.sessionId,
                          sku_id: et.categorySkuId,
                          page_type: G,
                          page_section: null == X ? void 0 : X.pageSection,
                          page_category: null == X ? void 0 : X.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != Q && (n || et !== W)
            ? (0, r.jsxs)("div", {
                  ref: K,
                  className: D.heroBlock,
                  children: [
                      eu
                          ? (0, A.gT)({
                                isCustomCursorEnabled: q,
                                className: D.riveEventOverlay,
                                riveEventTargetRef: Y,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(D.banner, { [D.rivBanner]: eu }),
                          style: null != ec ? { background: ec } : void 0,
                          children:
                              null != ei &&
                              (0, r.jsx)(Z.Z, {
                                  bannerStatic: ei,
                                  bannerAnimated: es,
                                  bannerRive: ea,
                                  isResponsive: eo,
                                  eventTargetRef: Y,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: D.heroBlockContent,
                          children: [
                              eu
                                  ? (0, r.jsx)("div", {
                                        className: D.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: eO,
                                                text: eb,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()($ ? D.heroHeaderContainerStacked : D.heroHeaderContainer, {
                                            [D.responsive]: eo,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: D.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: D.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != et.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: F.intl.string(F.t["h/uBCQ"]),
                                                                  className: D.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: s()(D.heroLogoNameContainer, {
                                                                  [D.heroLogoNameContainerStacked]: $,
                                                              }),
                                                              children: [
                                                                  null != el &&
                                                                      (0, r.jsx)("img", {
                                                                          className: D.heroHeaderLogo,
                                                                          src: el,
                                                                          alt: et.name,
                                                                          style:
                                                                              null == er
                                                                                  ? void 0
                                                                                  : er.toDesktopStyles(),
                                                                      }),
                                                                  null != et.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: D.title,
                                                                          color: "header-primary",
                                                                          children: et.title,
                                                                      }),
                                                                  "" !== et.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: ev
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: ev
                                                                              ? D.orbsSubHeaderText
                                                                              : D.subHeaderText,
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
                                                    className: $
                                                        ? D.heroHeaderButtonContainerStacked
                                                        : D.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: eO,
                                                        text: eb,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: s()({
                                      [D.row]: G === w.AW.HOME,
                                      [D.feed]: G === w.AW.ORBS,
                                  }),
                                  ref: ep,
                                  children:
                                      n || ef
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(eC)].map((e, t) =>
                                                    eS ? (0, r.jsx)(I.Z, {}, t) : (0, r.jsx)(T.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: em.map((e, t) => {
                                                    let n = b.Z.getCategoryForProduct(e.skuId);
                                                    return null == e || null == n
                                                        ? null
                                                        : (0, r.jsx)(
                                                              m.k0,
                                                              {
                                                                  newValue: {
                                                                      tilePosition: t,
                                                                      pageSection: "top 4",
                                                                      categoryPosition: 0,
                                                                  },
                                                                  children:
                                                                      eS && (null == e ? void 0 : e.skuId) != null
                                                                          ? (0, r.jsx)(
                                                                                k.Z,
                                                                                { skuId: null == e ? void 0 : e.skuId },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                L.Z,
                                                                                {
                                                                                    product: e,
                                                                                    category: n,
                                                                                    user: Q,
                                                                                    tab: G,
                                                                                    shopBlockType: c.z.HERO,
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
