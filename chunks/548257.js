n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(907331),
    i = n(685816),
    o = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(884697),
    f = n(794324),
    g = n(859788),
    b = n(497788),
    p = n(222194);
(0, d.IC)(90);
let m = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: i.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    h = (e) => {
        var t;
        let { isLoading: n = !1, heroBlock: l, tab: i, onVisibilityChange: d } = e,
            h = (0, s.O)(
                (e) => {
                    null == d || d(e);
                },
                0.1,
                null != d,
            ),
            C = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
            {
                bannerDisplayConfig: E,
                logoDisplayConfig: v,
                heroLogo: S,
                heroBannerStatic: x,
                heroBannerAnimated: O,
            } = (0, f.hr)(l),
            _ = null != (t = null == E ? void 0 : E.responsive) && t,
            y = null == E ? void 0 : E.backgroundStyle;
        return null != C && (n || l !== m)
            ? (0, r.jsxs)("div", {
                  ref: h,
                  className: p.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: a()(p.banner, { [p.responsive]: _ }),
                          style: null != y ? { background: y } : void 0,
                          children:
                              null != x &&
                              (0, r.jsx)(g.Z, {
                                  bannerStatic: x,
                                  bannerAnimated: O,
                                  isResponsive: _,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: p.heroBlockContent,
                          children: [
                              (0, r.jsx)("div", {
                                  className: a()(p.heroHeaderContainer, { [p.responsive]: _ }),
                                  children: n
                                      ? (0, r.jsx)("div", { className: p.heroHeaderBadgeLogoSummaryContainer })
                                      : (0, r.jsx)("div", {
                                            className: p.heroHeaderBadgeLogoSummaryContainer,
                                            children: (0, r.jsxs)("div", {
                                                className: p.heroLogoNameContainer,
                                                children: [
                                                    null != S &&
                                                        (0, r.jsx)("img", {
                                                            className: p.heroHeaderLogo,
                                                            src: S,
                                                            alt: l.name,
                                                            style: null == v ? void 0 : v.toDesktopStyles(),
                                                        }),
                                                    null != l.title &&
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: "heading-xxl/bold",
                                                            className: p.title,
                                                            color: "text-strong",
                                                            children: l.title,
                                                        }),
                                                    "" !== l.summary &&
                                                        (0, r.jsx)(c.Text, {
                                                            variant: "text-md/normal",
                                                            className: p.subHeaderText,
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
                              (0, r.jsx)(b.Z, {
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
