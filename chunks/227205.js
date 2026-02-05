"use strict";
s.d(t, { A: () => N });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(172218),
    o = s(696292),
    c = s(651162),
    d = s(311907),
    u = s(397927),
    g = s(688810),
    m = s(545986),
    _ = s(318346),
    h = s(287809),
    p = s(954571),
    f = s(440938),
    E = s(993408),
    C = s(379177),
    b = s(212407),
    A = s(333034),
    x = s(521e3),
    S = s(938191),
    v = s(815280),
    L = s(60140),
    T = s(758836),
    I = s(652215),
    O = s(985018),
    y = s(201073);
let j = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: "",
    },
    N = (e) => {
        let { isLoading: t, handleTransition: s, category: l, heroBlock: N, tab: k, onVisibilityChange: R } = e,
            B = (0, i.K)(
                (e) => {
                    R?.(e);
                },
                0.1,
                null != R,
            ),
            P = r.useRef(null),
            M = (0, S.yB)("HeroBlock"),
            D = (0, d.bG)([h.default], () => h.default.getCurrentUser()),
            w = (0, f.uM)(),
            H = r.useMemo(
                () =>
                    null != N
                        ? N
                        : null == l
                          ? j
                          : {
                                rankedSkuIds: l.heroRanking ?? [],
                                name: l.name,
                                unpublishedAt: l.unpublishedAt,
                                categorySkuId: l.skuId,
                                summary: l.summary,
                                type: c.g.HERO,
                                categoryStoreListingId: l.storeListingId,
                                bannerDisplayConfig: l.heroBannerDisplayConfig,
                                logoDisplayConfig: l.heroLogoDisplayConfig,
                                heroLogoUrl: l.heroLogoUrl,
                                heroBannerUrl: l.heroBannerUrl,
                                heroBannerAnimatedUrl: l.heroBannerAnimatedUrl,
                            },
                [N, l],
            ),
            G = (0, C.rR)("HeroBlock") && H.categorySkuId === T.op,
            {
                bannerDisplayConfig: U,
                logoDisplayConfig: F,
                heroLogo: V,
                heroBannerStatic: z,
                heroBannerAnimated: $,
                heroBannerRive: K,
            } = (0, b.Kk)(H),
            W = U?.responsive ?? !1,
            Y = U?.backgroundStyle,
            q = null != K,
            Z = k === T.G2.ORBS,
            X = null != l && l.isOrbsExclusive,
            J = Z ? O.intl.string(O.t["1CdL8d"]) : O.intl.string(O.t.xYKa1T);
        Z && G && (J = O.intl.string(O.t.dVz4hi));
        let { analyticsLocations: Q } = (0, g.Ay)(),
            ee = () => {
                Z
                    ? ((0, _.Y)({
                          pageType: I.liQ.SHOP_ORBS_TAB,
                          sectionType: I.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: I.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      G
                          ? (0, A.A)({ analyticsLocations: Q })
                          : (0, m.navigateToQuestHome)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                    : (s({
                          sourceButton: "shop latest category hero",
                          categorySkuId: X ? H.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: X,
                      }),
                      p.default.track(I.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: w?.sessionId,
                          sku_id: H.categorySkuId,
                          page_type: k,
                          page_section: w?.pageSection,
                          page_category: w?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != D && (t || H !== j)
            ? (0, n.jsxs)("div", {
                  ref: B,
                  className: y.os,
                  children: [
                      q ? (0, x.VA)({ isCustomCursorEnabled: M, className: y.Xt, riveEventTargetRef: P }) : null,
                      (0, n.jsx)("div", {
                          className: a()(y.vK, { [y.cN]: q, [y.no]: W }),
                          style: null != Y ? { background: Y } : void 0,
                          children:
                              null != z &&
                              (0, n.jsx)(v.A, {
                                  bannerStatic: z,
                                  bannerAnimated: $,
                                  bannerRive: K,
                                  isResponsive: W,
                                  eventTargetRef: P,
                              }),
                      }),
                      (0, n.jsxs)("div", {
                          className: y.xX,
                          children: [
                              q
                                  ? (0, n.jsx)("div", {
                                        className: y.fy,
                                        children:
                                            !t &&
                                            (0, n.jsx)(u.Button, { variant: "overlay-primary", onClick: ee, text: J }),
                                    })
                                  : (0, n.jsxs)("div", {
                                        className: a()(y.bC, { [y.no]: W }),
                                        children: [
                                            t
                                                ? (0, n.jsx)("div", { className: y.Hw })
                                                : (0, n.jsxs)("div", {
                                                      className: y.Hw,
                                                      children: [
                                                          (0, E.HF)(H.unpublishedAt) &&
                                                              (0, n.jsx)(u.LpS, {
                                                                  disableColor: !0,
                                                                  text: O.intl.string(O.t["h/uBCR"]),
                                                                  className: y.v0,
                                                              }),
                                                          (0, n.jsxs)("div", {
                                                              className: y.Wq,
                                                              children: [
                                                                  null != V &&
                                                                      (0, n.jsx)("img", {
                                                                          className: y.rm,
                                                                          src: V,
                                                                          alt: H.name,
                                                                          style: F?.toDesktopStyles(),
                                                                      }),
                                                                  null != H.title &&
                                                                      (0, n.jsx)(u.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: y.DD,
                                                                          color: "text-strong",
                                                                          children: H.title,
                                                                      }),
                                                                  null != H.summary &&
                                                                      "" !== H.summary &&
                                                                      (0, n.jsx)(u.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: Z ? y.h4 : y.Tm,
                                                                          style:
                                                                              null != H.bannerTextColor
                                                                                  ? { color: H.bannerTextColor }
                                                                                  : void 0,
                                                                          children: H.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !t &&
                                                (0, n.jsx)("div", {
                                                    className: y.IS,
                                                    children: (0, n.jsx)(u.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: ee,
                                                        text: J,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, n.jsx)(L.A, {
                                  heroBlockRecord: H,
                                  tab: k,
                                  isBlockLoading: t,
                                  layout: k === T.G2.HOME ? "hscroll" : G ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
