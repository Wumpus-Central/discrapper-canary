"use strict";
s.d(t, { A: () => R });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(172218),
    o = s(696292),
    c = s(651162),
    d = s(311907),
    u = s(777666),
    g = s(534514),
    h = s(834730),
    _ = s(821609),
    m = s(793574),
    p = s(688810),
    f = s(545986),
    E = s(318346),
    x = s(287809),
    A = s(954571),
    C = s(440938),
    S = s(993408),
    b = s(212407),
    v = s(521e3),
    L = s(938191),
    I = s(815280),
    j = s(60140),
    N = s(758836),
    T = s(652215),
    O = s(985018),
    y = s(941734);
let k = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: "",
    },
    R = (e) => {
        let { isLoading: t, handleTransition: s, category: r, heroBlock: R, tab: B, onVisibilityChange: P } = e,
            M = (0, i.K)(
                (e) => {
                    P?.(e);
                },
                0.1,
                null != P,
            ),
            D = l.useRef(null),
            w = (0, L.yB)("HeroBlock"),
            H = (0, d.bG)([x.default], () => x.default.getCurrentUser()),
            G = (0, C.uM)(),
            { analyticsLocations: F } = (0, p.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
            U = l.useMemo(
                () =>
                    null != R
                        ? R
                        : null == r
                          ? k
                          : {
                                rankedSkuIds: r.heroRanking ?? [],
                                name: r.name,
                                unpublishedAt: r.unpublishedAt,
                                categorySkuId: r.skuId,
                                summary: r.summary,
                                type: c.g.HERO,
                                categoryStoreListingId: r.storeListingId,
                                bannerDisplayConfig: r.heroBannerDisplayConfig,
                                logoDisplayConfig: r.heroLogoDisplayConfig,
                                heroLogoUrl: r.heroLogoUrl,
                                heroBannerUrl: r.heroBannerUrl,
                                heroBannerAnimatedUrl: r.heroBannerAnimatedUrl,
                            },
                [R, r],
            ),
            {
                bannerDisplayConfig: K,
                logoDisplayConfig: V,
                heroLogo: W,
                heroBannerStatic: z,
                heroBannerAnimated: $,
                heroBannerRive: Y,
            } = (0, b.Kk)(U),
            Z = K?.responsive ?? !1,
            J = K?.backgroundStyle,
            X = null != Y,
            q = B === N.G2.ORBS,
            Q = null != r && r.isOrbsExclusive,
            ee = q ? O.intl.string(O.t["1CdL8d"]) : O.intl.string(O.t.xYKa1T),
            et = () => {
                q
                    ? ((0, E.Y)({
                          pageType: T.liQ.SHOP_ORBS_TAB,
                          sectionType: T.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: T.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, f.navigateToQuestHome)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                    : (s({
                          sourceButton: "shop latest category hero",
                          categorySkuId: Q ? U.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: Q,
                      }),
                      A.default.track(T.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: G?.sessionId,
                          sku_id: U.categorySkuId,
                          page_type: B,
                          page_section: G?.pageSection,
                          page_category: G?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != H && (t || U !== k)
            ? (0, n.jsx)(p.f5, {
                  value: F,
                  children: (0, n.jsxs)("div", {
                      ref: M,
                      className: y.os,
                      children: [
                          X ? (0, v.VA)({ isCustomCursorEnabled: w, className: y.Xt, riveEventTargetRef: D }) : null,
                          (0, n.jsx)("div", {
                              className: a()(y.vK, { [y.cN]: X, [y.no]: Z }),
                              style: null != J ? { background: J } : void 0,
                              children:
                                  null != z &&
                                  (0, n.jsx)(I.A, {
                                      bannerStatic: z,
                                      bannerAnimated: $,
                                      bannerRive: Y,
                                      isResponsive: Z,
                                      eventTargetRef: D,
                                  }),
                          }),
                          (0, n.jsxs)("div", {
                              className: y.xX,
                              children: [
                                  X
                                      ? (0, n.jsx)("div", {
                                            className: y.fy,
                                            children:
                                                !t &&
                                                (0, n.jsx)(_.$, { variant: "overlay-primary", onClick: et, text: ee }),
                                        })
                                      : (0, n.jsxs)("div", {
                                            className: a()(y.bC, { [y.no]: Z }),
                                            children: [
                                                t
                                                    ? (0, n.jsx)("div", { className: y.Hw })
                                                    : (0, n.jsxs)("div", {
                                                          className: y.Hw,
                                                          children: [
                                                              (0, S.HF)(U.unpublishedAt) &&
                                                                  (0, n.jsx)(u.Lp, {
                                                                      disableColor: !0,
                                                                      text: O.intl.string(O.t["h/uBCR"]),
                                                                      className: y.v0,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: y.Wq,
                                                                  children: [
                                                                      null != W &&
                                                                          (0, n.jsx)("img", {
                                                                              className: y.rm,
                                                                              src: W,
                                                                              alt: U.name,
                                                                              style: V?.toDesktopStyles(),
                                                                          }),
                                                                      null != U.title &&
                                                                          (0, n.jsx)(g.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: y.DD,
                                                                              color: "text-strong",
                                                                              children: U.title,
                                                                          }),
                                                                      null != U.summary &&
                                                                          "" !== U.summary &&
                                                                          (0, n.jsx)(h.E, {
                                                                              variant: "text-md/normal",
                                                                              className: q ? y.h4 : y.Tm,
                                                                              style:
                                                                                  null != U.bannerTextColor
                                                                                      ? { color: U.bannerTextColor }
                                                                                      : void 0,
                                                                              children: U.summary,
                                                                          }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                !t &&
                                                    (0, n.jsx)("div", {
                                                        className: y.IS,
                                                        children: (0, n.jsx)(_.$, {
                                                            variant: "overlay-primary",
                                                            onClick: et,
                                                            text: ee,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, n.jsx)(j.A, {
                                      heroBlockRecord: U,
                                      tab: B,
                                      isBlockLoading: t,
                                      layout: B === N.G2.HOME ? "hscroll" : "feed",
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
