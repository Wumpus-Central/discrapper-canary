n.d(t, { Z: () => C });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    o = n(907331),
    i = n(685816),
    s = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(884697),
    f = n(794324),
    g = n(859788),
    p = n(497788),
    b = n(222194);
(0, d.IC)(90);
let m = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: i.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    C = (e) => {
        var t;
        let { isLoading: n = !1, heroBlock: l, tab: i, onVisibilityChange: d } = e,
            C = (0, o.O)(
                (e) => {
                    null == d || d(e);
                },
                0.1,
                null != d,
            ),
            h = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
            {
                bannerStyleOverrides: v,
                logoStyleOverrides: E,
                heroLogo: S,
                heroBannerStatic: _,
                heroBannerAnimated: O,
            } = (0, f.hr)(l),
            x = null != (t = null == v ? void 0 : v.responsive) && t,
            y = null == v ? void 0 : v.backgroundStyle;
        return null != h && (n || l !== m)
            ? (0, r.jsxs)("div", {
                  ref: C,
                  className: b.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: a()(b.banner, { [b.responsive]: x }),
                          style: null != y ? { background: y } : void 0,
                          children:
                              null != _ &&
                              (0, r.jsx)(g.Z, {
                                  bannerStatic: _,
                                  bannerAnimated: O,
                                  isResponsive: x,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: b.heroBlockContent,
                          children: [
                              (0, r.jsx)("div", {
                                  className: a()(b.heroHeaderContainer, { [b.responsive]: x }),
                                  children: n
                                      ? (0, r.jsx)("div", { className: b.heroHeaderBadgeLogoSummaryContainer })
                                      : (0, r.jsx)("div", {
                                            className: b.heroHeaderBadgeLogoSummaryContainer,
                                            children: (0, r.jsxs)("div", {
                                                className: b.heroLogoNameContainer,
                                                children: [
                                                    null != S &&
                                                        (0, r.jsx)("img", {
                                                            className: b.heroHeaderLogo,
                                                            src: S,
                                                            alt: l.name,
                                                            style: null == E ? void 0 : E.toDesktopStyles(),
                                                        }),
                                                    null != l.title &&
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: "heading-xxl/bold",
                                                            className: b.title,
                                                            color: "text-strong",
                                                            children: l.title,
                                                        }),
                                                    "" !== l.summary &&
                                                        (0, r.jsx)(c.Text, {
                                                            variant: "text-md/normal",
                                                            className: b.subHeaderText,
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
                                  tab: i,
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
