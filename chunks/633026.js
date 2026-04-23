"use strict";
s.d(t, { A: () => A });
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(172218),
    i = s(651162),
    o = s(311907),
    c = s(534514),
    d = s(834730),
    u = s(793574),
    g = s(688810),
    h = s(287809),
    _ = s(993408),
    m = s(212407),
    p = s(815280),
    f = s(695413),
    E = s(941734);
(0, _.$b)(90);
let x = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: i.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    A = (e) => {
        let { isLoading: t = !1, heroBlock: s, tab: l, onVisibilityChange: i } = e,
            _ = (0, a.K)(
                (e) => {
                    i?.(e);
                },
                0.1,
                null != i,
            ),
            A = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
            { analyticsLocations: C } = (0, g.Ay)(u.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: S,
                logoDisplayConfig: b,
                heroLogo: v,
                heroBannerStatic: L,
                heroBannerAnimated: I,
            } = (0, m.Kk)(s),
            j = S?.responsive ?? !1,
            N = S?.backgroundStyle;
        return null != A && (t || s !== x)
            ? (0, n.jsx)(g.f5, {
                  value: C,
                  children: (0, n.jsxs)("div", {
                      ref: _,
                      className: E.os,
                      children: [
                          (0, n.jsx)("div", {
                              className: r()(E.vK, { [E.no]: j }),
                              style: null != N ? { background: N } : void 0,
                              children:
                                  null != L && (0, n.jsx)(p.A, { bannerStatic: L, bannerAnimated: I, isResponsive: j }),
                          }),
                          (0, n.jsxs)("div", {
                              className: E.xX,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: r()(E.bC, { [E.no]: j }),
                                      children: t
                                          ? (0, n.jsx)("div", { className: E.Hw })
                                          : (0, n.jsx)("div", {
                                                className: E.Hw,
                                                children: (0, n.jsxs)("div", {
                                                    className: E.Wq,
                                                    children: [
                                                        null != v &&
                                                            (0, n.jsx)("img", {
                                                                className: E.rm,
                                                                src: v,
                                                                alt: s.name,
                                                                style: b?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, n.jsx)(c.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: E.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, n.jsx)(d.E, {
                                                                variant: "text-md/normal",
                                                                className: E.Tm,
                                                                style:
                                                                    null != s.bannerTextColor
                                                                        ? { color: s.bannerTextColor }
                                                                        : void 0,
                                                                children: s.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, n.jsx)(f.A, { isBlockLoading: t, heroBlock: s, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
