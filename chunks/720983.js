l.d(e, { Z: () => u });
var t = l(54381),
    i = l(120356),
    a = l.n(i),
    d = l(481060),
    r = l(410030),
    o = l(73346),
    s = l(705338),
    c = l(260999);
function u(n) {
    let { guildId: e, storefront: l, selectedPageIndex: i } = n,
        u = (0, d.wjy)((0, r.ZP)());
    if (null == l) return null;
    let p = null != l.logoAssetId ? (0, o._W)(l.applicationId, l.logoAssetId, 75) : null,
        g = null != l.lightThemeLogoAssetId ? (0, o._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
        I = null;
    return (
        (I = u ? (null != p ? p : g) : null != g ? g : p),
        (0, t.jsxs)("div", {
            className: c.headerContainer,
            children: [
                (0, t.jsxs)("div", {
                    className: c.titleContainer,
                    children: [
                        null != I &&
                            (0, t.jsx)("img", {
                                className: c.logo,
                                src: I,
                                alt: l.title,
                            }),
                        (0, t.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            lineClamp: 1,
                            children: l.title,
                        }),
                    ],
                }),
                l.pages.map((n, l) =>
                    (0, t.jsx)(
                        d.P3F,
                        {
                            onClick: () => {
                                (0, s.Z)({
                                    guildId: e,
                                    pageIndex: l,
                                });
                            },
                            className: a()(c.pageTitleContainer, { [c.selectedPageIndicator]: i === l }),
                            children: (0, t.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: n.title,
                            }),
                        },
                        "".concat(n.title, "-").concat(l),
                    ),
                ),
            ],
        })
    );
}
