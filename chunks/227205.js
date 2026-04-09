"use strict";
s.d(t, { A: () => k });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(172218),
    o = s(696292),
    c = s(651162),
    d = s(311907),
    u = s(397927),
    _ = s(793574),
    g = s(688810),
    m = s(545986),
    h = s(318346),
    p = s(287809),
    f = s(954571),
    x = s(440938),
    E = s(993408),
    b = s(212407),
    C = s(521e3),
    A = s(938191),
    S = s(815280),
    v = s(60140),
    I = s(758836),
    L = s(652215),
    j = s(985018),
    O = s(572199);
let T = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: "",
    },
    k = (e) => {
        let { isLoading: t, handleTransition: s, category: l, heroBlock: k, tab: y, onVisibilityChange: N } = e,
            R = (0, a.K)(
                (e) => {
                    N?.(e);
                },
                0.1,
                null != N,
            ),
            B = r.useRef(null),
            P = (0, A.yB)("HeroBlock"),
            M = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
            H = (0, x.uM)(),
            { analyticsLocations: D } = (0, g.Ay)(_.A.COLLECTIBLES_SHOP_HERO),
            w = r.useMemo(
                () =>
                    null != k
                        ? k
                        : null == l
                          ? T
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
                [k, l],
            ),
            {
                bannerDisplayConfig: F,
                logoDisplayConfig: G,
                heroLogo: U,
                heroBannerStatic: V,
                heroBannerAnimated: W,
                heroBannerRive: K,
            } = (0, b.Kk)(w),
            z = F?.responsive ?? !1,
            Y = F?.backgroundStyle,
            $ = null != K,
            Z = y === I.G2.ORBS,
            q = null != l && l.isOrbsExclusive,
            X = Z ? j.intl.string(j.t["1CdL8d"]) : j.intl.string(j.t.xYKa1T),
            J = () => {
                Z
                    ? ((0, h.Y)({
                          pageType: L.liQ.SHOP_ORBS_TAB,
                          sectionType: L.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: L.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, m.navigateToQuestHome)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                    : (s({
                          sourceButton: "shop latest category hero",
                          categorySkuId: q ? w.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: q,
                      }),
                      f.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: H?.sessionId,
                          sku_id: w.categorySkuId,
                          page_type: y,
                          page_section: H?.pageSection,
                          page_category: H?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != M && (t || w !== T)
            ? (0, n.jsx)(g.f5, {
                  value: D,
                  children: (0, n.jsxs)("div", {
                      ref: R,
                      className: O.os,
                      children: [
                          $ ? (0, C.VA)({ isCustomCursorEnabled: P, className: O.Xt, riveEventTargetRef: B }) : null,
                          (0, n.jsx)("div", {
                              className: i()(O.vK, { [O.cN]: $, [O.no]: z }),
                              style: null != Y ? { background: Y } : void 0,
                              children:
                                  null != V &&
                                  (0, n.jsx)(S.A, {
                                      bannerStatic: V,
                                      bannerAnimated: W,
                                      bannerRive: K,
                                      isResponsive: z,
                                      eventTargetRef: B,
                                  }),
                          }),
                          (0, n.jsxs)("div", {
                              className: O.xX,
                              children: [
                                  $
                                      ? (0, n.jsx)("div", {
                                            className: O.fy,
                                            children:
                                                !t &&
                                                (0, n.jsx)(u.Button, {
                                                    variant: "overlay-primary",
                                                    onClick: J,
                                                    text: X,
                                                }),
                                        })
                                      : (0, n.jsxs)("div", {
                                            className: i()(O.bC, { [O.no]: z }),
                                            children: [
                                                t
                                                    ? (0, n.jsx)("div", { className: O.Hw })
                                                    : (0, n.jsxs)("div", {
                                                          className: O.Hw,
                                                          children: [
                                                              (0, E.HF)(w.unpublishedAt) &&
                                                                  (0, n.jsx)(u.LpS, {
                                                                      disableColor: !0,
                                                                      text: j.intl.string(j.t["h/uBCR"]),
                                                                      className: O.v0,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: O.Wq,
                                                                  children: [
                                                                      null != U &&
                                                                          (0, n.jsx)("img", {
                                                                              className: O.rm,
                                                                              src: U,
                                                                              alt: w.name,
                                                                              style: G?.toDesktopStyles(),
                                                                          }),
                                                                      null != w.title &&
                                                                          (0, n.jsx)(u.Heading, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: O.DD,
                                                                              color: "text-strong",
                                                                              children: w.title,
                                                                          }),
                                                                      null != w.summary &&
                                                                          "" !== w.summary &&
                                                                          (0, n.jsx)(u.Text, {
                                                                              variant: "text-md/normal",
                                                                              className: Z ? O.h4 : O.Tm,
                                                                              style:
                                                                                  null != w.bannerTextColor
                                                                                      ? { color: w.bannerTextColor }
                                                                                      : void 0,
                                                                              children: w.summary,
                                                                          }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                !t &&
                                                    (0, n.jsx)("div", {
                                                        className: O.IS,
                                                        children: (0, n.jsx)(u.Button, {
                                                            variant: "overlay-primary",
                                                            onClick: J,
                                                            text: X,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, n.jsx)(v.A, {
                                      heroBlockRecord: w,
                                      tab: y,
                                      isBlockLoading: t,
                                      layout: y === I.G2.HOME ? "hscroll" : "feed",
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
