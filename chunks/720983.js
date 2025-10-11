n.d(t, { Z: () => u });
var a = n(951288),
    l = n(120356),
    r = n.n(l),
    i = n(481060),
    o = n(703656),
    d = n(73346),
    c = n(981631),
    s = n(260999);
function u(e) {
    let { guildId: t, storefront: n, selectedPageIndex: l } = e;
    if (null == n) return null;
    let u = null != n.logoAssetId ? (0, d._W)(n.applicationId, n.logoAssetId, 75) : null;
    return (0, a.jsxs)("div", {
        className: s.headerContainer,
        children: [
            (0, a.jsxs)("div", {
                className: s.titleContainer,
                children: [
                    null != u &&
                        (0, a.jsx)("img", {
                            className: s.logo,
                            src: u,
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
                            (0, o.uL)(c.Z5c.CHANNELS_GAME_SHOP(t, n));
                        },
                        className: r()(s.pageTitleContainer, { [s.selectedPageIndicator]: l === n }),
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
