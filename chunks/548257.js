n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    s = n(907331),
    o = n(685816),
    a = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(884697),
    g = n(794324),
    f = n(859788),
    p = n(497788),
    m = n(310582);
(0, d.IC)(90);
let C = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: o.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    h = (e) => {
        var t;
        let { isLoading: n = !1, heroBlock: l, tab: o, onVisibilityChange: d } = e,
            h = (0, s.O)(
                (e) => {
                    null == d || d(e);
                },
                0.1,
                null != d,
            ),
            _ = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
            {
                bannerStyleOverrides: b,
                logoStyleOverrides: E,
                heroLogo: v,
                heroBannerStatic: S,
                heroBannerAnimated: O,
            } = (0, g.hr)(l),
            x = null != (t = null == b ? void 0 : b.responsive) && t,
            y = null == b ? void 0 : b.backgroundStyle;
        return null != _ && (n || l !== C)
            ? (0, r.jsxs)("div", {
                  ref: h,
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
                                                    null != v &&
                                                        (0, r.jsx)("img", {
                                                            className: m.heroHeaderLogo,
                                                            src: v,
                                                            alt: l.name,
                                                            style: null == E ? void 0 : E.toDesktopStyles(),
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
                                  tab: o,
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
