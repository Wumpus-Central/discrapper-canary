l.d(e, { Z: () => c });
var t = l(54381),
    i = l(120356),
    a = l.n(i),
    d = l(481060),
    r = l(73346),
    o = l(705338),
    s = l(801519);
function c(n) {
    let { guildId: e, storefront: l, selectedPageIndex: i } = n;
    if (null == l) return null;
    let c = null != l.logoAssetId ? (0, r._W)(l.applicationId, l.logoAssetId, 75) : null;
    return (0, t.jsxs)("div", {
        className: s.headerContainer,
        children: [
            (0, t.jsxs)("div", {
                className: s.titleContainer,
                children: [
                    null != c &&
                        (0, t.jsx)("img", {
                            className: s.logo,
                            src: c,
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
                            (0, o.Z)({
                                guildId: e,
                                pageIndex: l,
                            });
                        },
                        className: a()(s.pageTitleContainer, { [s.selectedPageIndicator]: i === l }),
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
    });
}
