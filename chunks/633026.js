"use strict";
s.d(t, { A: () => E });
var n = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    i = s(172218),
    a = s(651162),
    o = s(311907),
    c = s(397927),
    d = s(793574),
    u = s(688810),
    _ = s(287809),
    g = s(993408),
    m = s(212407),
    h = s(815280),
    p = s(695413),
    f = s(572199);
(0, g.$b)(90);
let x = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: a.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    E = (e) => {
        let { isLoading: t = !1, heroBlock: s, tab: r, onVisibilityChange: a } = e,
            g = (0, i.K)(
                (e) => {
                    a?.(e);
                },
                0.1,
                null != a,
            ),
            E = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
            { analyticsLocations: b } = (0, u.Ay)(d.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: C,
                logoDisplayConfig: A,
                heroLogo: S,
                heroBannerStatic: v,
                heroBannerAnimated: I,
            } = (0, m.Kk)(s),
            L = C?.responsive ?? !1,
            j = C?.backgroundStyle;
        return null != E && (t || s !== x)
            ? (0, n.jsx)(u.f5, {
                  value: b,
                  children: (0, n.jsxs)("div", {
                      ref: g,
                      className: f.os,
                      children: [
                          (0, n.jsx)("div", {
                              className: l()(f.vK, { [f.no]: L }),
                              style: null != j ? { background: j } : void 0,
                              children:
                                  null != v && (0, n.jsx)(h.A, { bannerStatic: v, bannerAnimated: I, isResponsive: L }),
                          }),
                          (0, n.jsxs)("div", {
                              className: f.xX,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: l()(f.bC, { [f.no]: L }),
                                      children: t
                                          ? (0, n.jsx)("div", { className: f.Hw })
                                          : (0, n.jsx)("div", {
                                                className: f.Hw,
                                                children: (0, n.jsxs)("div", {
                                                    className: f.Wq,
                                                    children: [
                                                        null != S &&
                                                            (0, n.jsx)("img", {
                                                                className: f.rm,
                                                                src: S,
                                                                alt: s.name,
                                                                style: A?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, n.jsx)(c.Heading, {
                                                                variant: "heading-xxl/bold",
                                                                className: f.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, n.jsx)(c.Text, {
                                                                variant: "text-md/normal",
                                                                className: f.Tm,
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
                                  (0, n.jsx)(p.A, { isBlockLoading: t, heroBlock: s, tab: r }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
