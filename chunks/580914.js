n.d(t, { Z: () => U }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(907331),
    o = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(393903),
    p = n(448986),
    f = n(110560),
    C = n(507808),
    h = n(594174),
    _ = n(626135),
    m = n(381585),
    b = n(597688),
    v = n(884697),
    E = n(128922),
    x = n(870289),
    O = n(254690),
    S = n(655283),
    y = n(370039),
    j = n(937510),
    k = n(38900),
    T = n(709999),
    L = n(653126),
    I = n(786040),
    B = n(401975),
    A = n(794324),
    N = n(934760),
    P = n(619899),
    R = n(190157),
    Z = n(642909),
    w = n(859788),
    H = n(215023),
    M = n(981631),
    D = n(388032),
    F = n(310582);
let W = (0, v.IC)(90),
    V = {
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
        let { isLoading: n, handleTransition: i, category: U, heroBlock: z, tab: G, onVisibilityChange: K } = e,
            Y = (0, s.O)(
                (e) => {
                    null == K || K(e);
                },
                0.1,
                null != K,
            ),
            q = l.useRef(null),
            J = (0, Z.G)("HeroBlock"),
            Q = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            X = (0, N.Z)(),
            $ = (0, m.sp)(),
            ee = O.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && G !== H.AW.ORBS,
            et = (0, S.x)("HeroBlock"),
            en = l.useMemo(() => {
                var e, t;
                return null != z
                    ? z
                    : null == U
                      ? V
                      : {
                            rankedSkuIds: null != (e = U.heroRanking) ? e : [],
                            name: U.name,
                            unpublishedAt: U.unpublishedAt,
                            logoUrl: (0, v.uV)(null != (t = U.heroLogo) ? t : U.logo, { size: W }),
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
            }, [z, U]),
            {
                bannerStyleOverrides: er,
                logoStyleOverrides: el,
                heroLogo: ei,
                heroBannerStatic: ea,
                heroBannerAnimated: es,
                heroBannerRive: eo,
            } = (0, A.hr)(en),
            ec = null != (t = null == er ? void 0 : er.responsive) && t,
            eu = null == er ? void 0 : er.backgroundStyle,
            ed = null != eo,
            eg = (0, u.e7)([b.Z], () => b.Z.products),
            ep = l.useMemo(() => (n ? [] : eg.size > 0 ? X(en.rankedSkuIds) : []), [n, X, en.rankedSkuIds, eg]),
            ef = l.useMemo(
                () =>
                    !n &&
                    0 !== en.rankedSkuIds.length &&
                    !(ep.length > 0) &&
                    en.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = b.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, en.rankedSkuIds, ep.length],
            ),
            { cardContainerRef: eC, totalCards: eh } = ((e) => {
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
            })(G !== H.AW.ORBS),
            e_ = (0, y.a)()(ep),
            em = (0, j.l)(e_).slice(0, eh),
            eb = (0, P.St)(em),
            ev =
                G === H.AW.ORBS
                    ? D.intl.string(D.t["1CdL8d"])
                    : J
                      ? D.intl.string(D.t.guWAg1)
                      : et
                        ? D.intl.string(D.t["/QvRak"])
                        : D.intl.string(D.t.xYKa1T),
            eE = (0, x.FF)("CollectiblesContent"),
            ex = (0, v.$2)(en.categorySkuId),
            eO = E.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            eS = () => {
                G === H.AW.ORBS
                    ? ((0, C.Y)({
                          pageType: M.ZY5.SHOP_ORBS_TAB,
                          sectionType: M.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: M.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (i("shop latest category hero", !eE || ex ? en.categorySkuId : void 0, void 0, !0),
                      _.default.track(M.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == $ ? void 0 : $.sessionId,
                          sku_id: en.categorySkuId,
                          page_type: G,
                          page_section: null == $ ? void 0 : $.pageSection,
                          page_category: null == $ ? void 0 : $.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != Q && (n || en !== V)
            ? (0, r.jsxs)("div", {
                  ref: Y,
                  className: F.heroBlock,
                  children: [
                      ed
                          ? (0, R.gT)({
                                isCustomCursorEnabled: J,
                                className: F.riveEventOverlay,
                                riveEventTargetRef: q,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(F.banner, { [F.rivBanner]: ed }),
                          style: null != eu ? { background: eu } : void 0,
                          children:
                              null != ea &&
                              (0, r.jsx)(w.Z, {
                                  bannerStatic: ea,
                                  bannerAnimated: es,
                                  bannerRive: eo,
                                  isResponsive: ec,
                                  eventTargetRef: q,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: F.heroBlockContent,
                          children: [
                              ed
                                  ? (0, r.jsx)("div", {
                                        className: F.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: eS,
                                                text: ev,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(ee ? F.heroHeaderContainerStacked : F.heroHeaderContainer, {
                                            [F.responsive]: ec,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: F.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: F.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != en.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: D.intl.string(D.t["h/uBCR"]),
                                                                  className: F.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: a()(F.heroLogoNameContainer, {
                                                                  [F.heroLogoNameContainerStacked]: ee,
                                                              }),
                                                              children: [
                                                                  null != ei &&
                                                                      (0, r.jsx)("img", {
                                                                          className: F.heroHeaderLogo,
                                                                          src: ei,
                                                                          alt: en.name,
                                                                          style:
                                                                              null == el
                                                                                  ? void 0
                                                                                  : el.toDesktopStyles(),
                                                                      }),
                                                                  null != en.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: F.title,
                                                                          color: "header-primary",
                                                                          children: en.title,
                                                                      }),
                                                                  "" !== en.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: ex
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: ex
                                                                              ? F.orbsSubHeaderText
                                                                              : F.subHeaderText,
                                                                          style:
                                                                              null != en.bannerTextColor
                                                                                  ? { color: en.bannerTextColor }
                                                                                  : void 0,
                                                                          children: en.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: ee
                                                        ? F.heroHeaderButtonContainerStacked
                                                        : F.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: eS,
                                                        text: ev,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: a()({
                                      [F.row]: G === H.AW.HOME,
                                      [F.feed]: G === H.AW.ORBS,
                                  }),
                                  ref: eC,
                                  children:
                                      n || ef
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(null != eh ? eh : 4)].map((e, t) =>
                                                    eO ? (0, r.jsx)(B.Z, {}, t) : (0, r.jsx)(k.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eb.map((e, t) => {
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
                                                                      eO && (null == e ? void 0 : e.skuId) != null
                                                                          ? (0, r.jsx)(
                                                                                L.Z,
                                                                                {
                                                                                    skuId: null == e ? void 0 : e.skuId,
                                                                                    prioritizedCurrency:
                                                                                        G === H.AW.ORBS
                                                                                            ? I.tA.ORBS
                                                                                            : void 0,
                                                                                    onClickAnalytics: (0, I.wO)(
                                                                                        e,
                                                                                        G,
                                                                                        $,
                                                                                    ),
                                                                                },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                T.Z,
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
