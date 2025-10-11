n.d(t, { Z: () => s });
var a = n(951288),
    r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(73346),
    d = n(411935),
    c = n(260999);
function s(e) {
    let { guildId: t, storefront: n, selectedPageIndex: r } = e;
    if (null == n) return null;
    let s = null != n.logoAssetId ? (0, o._W)(n.applicationId, n.logoAssetId, 75) : null;
    return (0, a.jsxs)("div", {
        className: c.headerContainer,
        children: [
            (0, a.jsxs)("div", {
                className: c.titleContainer,
                children: [
                    null != s &&
                        (0, a.jsx)("img", {
                            className: c.logo,
                            src: s,
                            alt: n.title,
                        }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.title,
                    }),
                ],
            }),
            n.pages.map((e, n) =>
                (0, a.jsx)(
                    i.P3F,
                    {
                        onClick: () => {
                            (0, d.K)(t, n);
                        },
                        className: l()(c.pageTitleContainer, { [c.selectedPageIndicator]: r === n }),
                        children: (0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: e.title,
                        }),
                    },
                    "".concat(e.title, "-").concat(n),
                ),
            ),
        ],
    });
}
