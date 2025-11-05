t.d(n, { Z: () => c });
var l = t(951288),
    i = t(120356),
    a = t.n(i),
    r = t(481060),
    d = t(73346),
    o = t(705338),
    s = t(260999);
function c(e) {
    let { guildId: n, storefront: t, selectedPageIndex: i } = e;
    if (null == t) return null;
    let c = null != t.logoAssetId ? (0, d._W)(t.applicationId, t.logoAssetId, 75) : null;
    return (0, l.jsxs)("div", {
        className: s.headerContainer,
        children: [
            (0, l.jsxs)("div", {
                className: s.titleContainer,
                children: [
                    null != c &&
                        (0, l.jsx)("img", {
                            className: s.logo,
                            src: c,
                            alt: t.title,
                        }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: t.title,
                    }),
                ],
            }),
            t.pages.map((e, t) =>
                (0, l.jsx)(
                    r.P3F,
                    {
                        onClick: () => {
                            (0, o.Z)({
                                guildId: n,
                                pageIndex: t,
                            });
                        },
                        className: a()(s.pageTitleContainer, { [s.selectedPageIndicator]: i === t }),
                        children: (0, l.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: e.title,
                        }),
                    },
                    "".concat(e.title, "-").concat(t),
                ),
            ),
        ],
    });
}
