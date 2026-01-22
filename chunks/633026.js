l.d(t, {
    A: () => h,
});
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(172218),
    i = l(651162),
    o = l(311907),
    c = l(397927),
    u = l(287809),
    d = l(993408),
    f = l(212407),
    b = l(815280),
    g = l(695413),
    p = l(201073);
(0, d.$b)(90);
let m = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: i.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    h = (e) => {
        var t;
        let { isLoading: l = !1, heroBlock: r, tab: i, onVisibilityChange: d } = e,
            h = (0, a.K)(
                (e) => {
                    null == d || d(e);
                },
                0.1,
                null != d,
            ),
            E = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
            {
                bannerDisplayConfig: v,
                logoDisplayConfig: A,
                heroLogo: x,
                heroBannerStatic: S,
                heroBannerAnimated: C,
            } = (0, f.Kk)(r),
            O = null != (t = null == v ? void 0 : v.responsive) && t,
            _ = null == v ? void 0 : v.backgroundStyle;
        return null != E && (l || r !== m)
            ? (0, n.jsxs)("div", {
                  ref: h,
                  className: p.os,
                  children: [
                      (0, n.jsx)("div", {
                          className: s()(p.vK, {
                              [p.no]: O,
                          }),
                          style:
                              null != _
                                  ? {
                                        background: _,
                                    }
                                  : void 0,
                          children:
                              null != S &&
                              (0, n.jsx)(b.A, {
                                  bannerStatic: S,
                                  bannerAnimated: C,
                                  isResponsive: O,
                              }),
                      }),
                      (0, n.jsxs)("div", {
                          className: p.xX,
                          children: [
                              (0, n.jsx)("div", {
                                  className: s()(p.bC, {
                                      [p.no]: O,
                                  }),
                                  children: l
                                      ? (0, n.jsx)("div", {
                                            className: p.Hw,
                                        })
                                      : (0, n.jsx)("div", {
                                            className: p.Hw,
                                            children: (0, n.jsxs)("div", {
                                                className: p.Wq,
                                                children: [
                                                    null != x &&
                                                        (0, n.jsx)("img", {
                                                            className: p.rm,
                                                            src: x,
                                                            alt: r.name,
                                                            style: null == A ? void 0 : A.toDesktopStyles(),
                                                        }),
                                                    null != r.title &&
                                                        (0, n.jsx)(c.Heading, {
                                                            variant: "heading-xxl/bold",
                                                            className: p.DD,
                                                            color: "text-strong",
                                                            children: r.title,
                                                        }),
                                                    "" !== r.summary &&
                                                        (0, n.jsx)(c.Text, {
                                                            variant: "text-md/normal",
                                                            className: p.Tm,
                                                            style:
                                                                null != r.bannerTextColor
                                                                    ? {
                                                                          color: r.bannerTextColor,
                                                                      }
                                                                    : void 0,
                                                            children: r.summary,
                                                        }),
                                                ],
                                            }),
                                        }),
                              }),
                              (0, n.jsx)(g.A, {
                                  isBlockLoading: l,
                                  heroBlock: r,
                                  tab: i,
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
