n.d(t, { Z: () => V }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(907331),
    a = n(636977),
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
    S = n(128922),
    v = n(870289),
    O = n(254690),
    x = n(655283),
    y = n(370039),
    T = n(937510),
    j = n(38900),
    L = n(709999),
    k = n(653126),
    I = n(786040),
    B = n(401975),
    N = n(794324),
    A = n(934760),
    P = n(619899),
    R = n(190157),
    Z = n(642909),
    w = n(859788),
    H = n(215023),
    F = n(981631),
    D = n(388032),
    M = n(310582);
let W = (0, E.IC)(90),
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
    V = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: V, heroBlock: z, tab: G, onVisibilityChange: K } = e,
            Y = (0, s.O)(
                (e) => {
                    null == K || K(e);
                },
                0.1,
                null != K,
            ),
            q = l.useRef(null),
            Q = (0, Z.G)("HeroBlock"),
            J = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            X = (0, A.Z)(),
            $ = (0, m.sp)(),
            ee = O.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && G !== H.AW.ORBS,
            et = (0, x.x)("HeroBlock"),
            en = l.useMemo(() => {
                var e, t;
                return null != z
                    ? z
                    : null == V
                      ? U
                      : {
                            rankedSkuIds: null != (e = V.heroRanking) ? e : [],
                            name: V.name,
                            unpublishedAt: V.unpublishedAt,
                            logoUrl: (0, E.uV)(null != (t = V.heroLogo) ? t : V.logo, { size: W }),
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
            }, [z, V]),
            {
                bannerStyleOverrides: er,
                logoStyleOverrides: el,
                heroLogo: ei,
                heroBannerStatic: eo,
                heroBannerAnimated: es,
                heroBannerRive: ea,
            } = (0, N.hr)(en),
            ec = null != (t = null == er ? void 0 : er.responsive) && t,
            eu = null == er ? void 0 : er.backgroundStyle,
            ed = null != ea,
            eg = (0, u.e7)([b.Z], () => b.Z.products),
            ef = l.useMemo(() => (n ? [] : eg.size > 0 ? X(en.rankedSkuIds) : []), [n, X, en.rankedSkuIds, eg]),
            ep = l.useMemo(
                () =>
                    !n &&
                    0 !== en.rankedSkuIds.length &&
                    !(ef.length > 0) &&
                    en.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = b.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, en.rankedSkuIds, ef.length],
            ),
            { cardContainerRef: eC, totalCards: eh } = ((e) => {
                let [t, n] = l.useState(1),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XL),
                    i = (0, f.Z)(() => {
                        (null == o ? void 0 : o.current) != null &&
                            n(Math.max(1, Math.floor((o.current.offsetWidth + r) / (246 + r))));
                    }),
                    o = (0, g.y)(i, [r, e], {
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
                    totalCards: e ? t : 4,
                };
            })(G !== H.AW.ORBS),
            e_ = (0, y.a)()(ef),
            em = (0, T.l)(e_).slice(0, eh),
            eb = (0, P.St)(em),
            eE =
                G === H.AW.ORBS
                    ? D.intl.string(D.t["1CdL8f"])
                    : Q
                      ? D.intl.string(D.t.guWAg4)
                      : et
                        ? D.intl.string(D.t["/QvRam"])
                        : D.intl.string(D.t.xYKa1d),
            eS = (0, v.FF)("CollectiblesContent"),
            ev = (0, E.$2)(en.categorySkuId),
            eO = S.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            ex = () => {
                G === H.AW.ORBS
                    ? ((0, C.Y)({
                          pageType: F.ZY5.SHOP_ORBS_TAB,
                          sectionType: F.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: F.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                    : (i("shop latest category hero", !eS || ev ? en.categorySkuId : void 0),
                      _.default.track(F.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == $ ? void 0 : $.sessionId,
                          sku_id: en.categorySkuId,
                          page_type: G,
                          page_section: null == $ ? void 0 : $.pageSection,
                          page_category: null == $ ? void 0 : $.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != J && (n || en !== U)
            ? (0, r.jsxs)("div", {
                  ref: Y,
                  className: M.heroBlock,
                  children: [
                      ed
                          ? (0, R.gT)({
                                isCustomCursorEnabled: Q,
                                className: M.riveEventOverlay,
                                riveEventTargetRef: q,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: o()(M.banner, { [M.rivBanner]: ed }),
                          style: null != eu ? { background: eu } : void 0,
                          children:
                              null != eo &&
                              (0, r.jsx)(w.Z, {
                                  bannerStatic: eo,
                                  bannerAnimated: es,
                                  bannerRive: ea,
                                  isResponsive: ec,
                                  eventTargetRef: q,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: M.heroBlockContent,
                          children: [
                              ed
                                  ? (0, r.jsx)("div", {
                                        className: M.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: ex,
                                                text: eE,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: o()(ee ? M.heroHeaderContainerStacked : M.heroHeaderContainer, {
                                            [M.responsive]: ec,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: M.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: M.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != en.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: D.intl.string(D.t["h/uBCQ"]),
                                                                  className: M.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: o()(M.heroLogoNameContainer, {
                                                                  [M.heroLogoNameContainerStacked]: ee,
                                                              }),
                                                              children: [
                                                                  null != ei &&
                                                                      (0, r.jsx)("img", {
                                                                          className: M.heroHeaderLogo,
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
                                                                          className: M.title,
                                                                          color: "header-primary",
                                                                          children: en.title,
                                                                      }),
                                                                  "" !== en.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: ev
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: ev
                                                                              ? M.orbsSubHeaderText
                                                                              : M.subHeaderText,
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
                                                        ? M.heroHeaderButtonContainerStacked
                                                        : M.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: ex,
                                                        text: eE,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: o()({
                                      [M.row]: G === H.AW.HOME,
                                      [M.feed]: G === H.AW.ORBS,
                                  }),
                                  ref: eC,
                                  children:
                                      n || ep
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [...Array(eh)].map((e, t) =>
                                                    eO ? (0, r.jsx)(B.Z, {}, t) : (0, r.jsx)(j.K, {}, t),
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
                                                                                k.Z,
                                                                                {
                                                                                    skuId: null == e ? void 0 : e.skuId,
                                                                                    prioritizedCurrency:
                                                                                        G === H.AW.ORBS
                                                                                            ? I.tA.ORBS
                                                                                            : void 0,
                                                                                },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                L.Z,
                                                                                {
                                                                                    product: e,
                                                                                    category: n,
                                                                                    user: J,
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
