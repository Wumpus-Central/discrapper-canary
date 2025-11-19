l.d(n, { Z: () => p });
var t = l(54381),
    i = l(120356),
    a = l.n(i),
    r = l(793030),
    d = l(410030),
    o = l(984370),
    s = l(73346),
    c = l(705338),
    u = l(260999);
function p(e) {
    let { guildId: n, storefront: l, selectedPageIndex: i } = e,
        p = (0, r.wjy)((0, d.ZP)());
    if (null == l) return null;
    let g = null != l.logoAssetId ? (0, s._W)(l.applicationId, l.logoAssetId, 75) : null,
        I = null != l.lightThemeLogoAssetId ? (0, s._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
        x = null;
    return (
        (x = p ? (null != g ? g : I) : null != I ? I : g),
        (0, t.jsxs)(o.Z, {
            disableDoubleClick: !0,
            className: u.headerContainer,
            children: [
                (0, t.jsxs)(r.P3F, {
                    onClick: () => {
                        (0, c.Z)({
                            guildId: n,
                            pageIndex: 0,
                        });
                    },
                    className: u.titleContainer,
                    children: [
                        null != x &&
                            (0, t.jsx)("img", {
                                className: u.logo,
                                src: x,
                                alt: l.title,
                            }),
                        (0, t.jsx)(o.Z.Title, { children: l.title }),
                    ],
                }),
                (0, t.jsx)("div", {
                    className: u.titles,
                    children: l.pages.map((e, l) =>
                        (0, t.jsx)(
                            o.Z.Title,
                            {
                                onClick: () => {
                                    (0, c.Z)({
                                        guildId: n,
                                        pageIndex: l,
                                    });
                                },
                                wrapperClassName: u.titleWrapper,
                                className: a()(u.pageTitleContainer, { [u.selectedPageIndicator]: i === l }),
                                children: e.title,
                            },
                            "".concat(e.title, "-").concat(l),
                        ),
                    ),
                }),
            ],
        })
    );
}
