n.d(t, { Z: () => C });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    o = n(907331),
    s = n(685816),
    a = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(884697),
    g = n(794324),
    f = n(859788),
    p = n(497788),
    m = n(310582);
(0, d.IC)(90);
let h = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: s.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    C = (e) => {
        var t;
        let { isLoading: n = !1, heroBlock: l, tab: s, onVisibilityChange: d } = e,
            C = (0, o.O)(
                (e) => {
                    null == d || d(e);
                },
                0.1,
                null != d,
            ),
            _ = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
            {
                bannerStyleOverrides: b,
                logoStyleOverrides: v,
                heroLogo: E,
                heroBannerStatic: S,
                heroBannerAnimated: O,
            } = (0, g.hr)(l),
            x = null != (t = null == b ? void 0 : b.responsive) && t,
            y = null == b ? void 0 : b.backgroundStyle;
        return null != _ && (n || l !== h)
            ? (0, r.jsxs)("div", {
                  ref: C,
                  className: m.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(m.banner, { [m.responsive]: x }),
                          style: null != y ? { background: y } : void 0,
                          children:
                              null != S &&
                              (0, r.jsx)(f.Z, {
                                  bannerStatic: S,
                                  bannerAnimated: O,
                                  isResponsive: x,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: m.heroBlockContent,
                          children: [
                              (0, r.jsx)("div", {
                                  className: i()(m.heroHeaderContainer, { [m.responsive]: x }),
                                  children: n
                                      ? (0, r.jsx)("div", { className: m.heroHeaderBadgeLogoSummaryContainer })
                                      : (0, r.jsx)("div", {
                                            className: m.heroHeaderBadgeLogoSummaryContainer,
                                            children: (0, r.jsxs)("div", {
                                                className: m.heroLogoNameContainer,
                                                children: [
                                                    null != E &&
                                                        (0, r.jsx)("img", {
                                                            className: m.heroHeaderLogo,
                                                            src: E,
                                                            alt: l.name,
                                                            style: null == v ? void 0 : v.toDesktopStyles(),
                                                        }),
                                                    null != l.title &&
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: "heading-xxl/bold",
                                                            className: m.title,
                                                            color: "header-primary",
                                                            children: l.title,
                                                        }),
                                                    "" !== l.summary &&
                                                        (0, r.jsx)(c.Text, {
                                                            variant: "text-md/normal",
                                                            className: m.subHeaderText,
                                                            style:
                                                                null != l.bannerTextColor
                                                                    ? { color: l.bannerTextColor }
                                                                    : void 0,
                                                            children: l.summary,
                                                        }),
                                                ],
                                            }),
                                        }),
                              }),
                              (0, r.jsx)(p.Z, {
                                  isBlockLoading: n,
                                  heroBlock: l,
                                  tab: s,
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
