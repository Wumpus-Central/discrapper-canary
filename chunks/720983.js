l.d(n, { Z: () => u });
var t = l(951288),
    i = l(120356),
    a = l.n(i),
    r = l(481060),
    d = l(703656),
    o = l(73346),
    s = l(981631),
    c = l(260999);
function u(e) {
    let { guildId: n, storefront: l, selectedPageIndex: i } = e;
    if (null == l) return null;
    let u = null != l.logoAssetId ? (0, o._W)(l.applicationId, l.logoAssetId, 75) : null;
    return (0, t.jsxs)("div", {
        className: c.headerContainer,
        children: [
            (0, t.jsxs)("div", {
                className: c.titleContainer,
                children: [
                    null != u &&
                        (0, t.jsx)("img", {
                            className: c.logo,
                            src: u,
                            alt: l.title,
                        }),
                    (0, t.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: l.title,
                    }),
                ],
            }),
            l.pages.map((e, l) =>
                (0, t.jsx)(
                    r.P3F,
                    {
                        onClick: () => {
                            (0, d.uL)(s.Z5c.CHANNELS_GAME_SHOP(n, l));
                        },
                        className: a()(c.pageTitleContainer, { [c.selectedPageIndicator]: i === l }),
                        children: (0, t.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: e.title,
                        }),
                    },
                    "".concat(e.title, "-").concat(l),
                ),
            ),
        ],
    });
}
