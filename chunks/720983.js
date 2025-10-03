t.d(n, { Z: () => s });
var a = t(951288),
    l = t(120356),
    r = t.n(l),
    i = t(481060),
    d = t(73346),
    o = t(411935),
    c = t(260999);
function s(e) {
    let { guildId: n, storefront: t, selectedPageIndex: l } = e;
    if (null == t) return null;
    let s = null != t.logoAssetId ? (0, d._W)(t.applicationId, t.logoAssetId, 75) : null;
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
                            alt: t.title,
                        }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: t.title,
                    }),
                ],
            }),
            t.pages.map((e, t) =>
                (0, a.jsx)(
                    i.P3F,
                    {
                        onClick: () => {
                            (0, o.K)(n, t);
                        },
                        className: r()(c.pageTitleContainer, { [c.selectedPageIndicator]: l === t }),
                        children: (0, a.jsx)(i.X6q, {
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
