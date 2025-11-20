l.d(n, { Z: () => _ });
var t = l(54381),
    i = l(473749),
    a = l(120356),
    r = l.n(a),
    o = l(793030),
    d = l(442837),
    s = l(410030),
    c = l(984370),
    u = l(567400),
    p = l(892001),
    g = l(594174),
    I = l(73346),
    x = l(705338),
    m = l(228168),
    h = l(388032),
    f = l(260999);
function v(e) {
    let { icon: n, onClick: l, ariaLabel: i, className: a } = e;
    return (0, t.jsx)(o.P3F, {
        className: r()(f.iconButton, a),
        onClick: l,
        "aria-label": i,
        children: n,
    });
}
function _(e) {
    let { guildId: n, storefront: l, selectedPageIndex: a } = e,
        _ = (0, o.wjy)((0, s.ZP)()),
        C = (0, u.Y)({ location: "SocialLayerStorefrontHeader" }),
        j = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        k = i.useCallback(() => {
            (null == j ? void 0 : j.id) != null &&
                (0, p.openUserProfileModal)({
                    userId: j.id,
                    section: m.oh.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [j]);
    if (null == l) return null;
    let b = null != l.logoAssetId ? (0, I._W)(l.applicationId, l.logoAssetId, 75) : null,
        Z = null != l.lightThemeLogoAssetId ? (0, I._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
        N = null;
    return (
        (N = _ ? (null != b ? b : Z) : null != Z ? Z : b),
        (0, t.jsxs)(c.Z, {
            disableDoubleClick: !0,
            className: f.headerContainer,
            children: [
                (0, t.jsxs)(o.P3F, {
                    onClick: () => {
                        (0, x.Z)({
                            guildId: n,
                            pageIndex: 0,
                        });
                    },
                    className: f.titleContainer,
                    children: [
                        null != N &&
                            (0, t.jsx)("img", {
                                className: f.logo,
                                src: N,
                                alt: l.title,
                            }),
                        (0, t.jsx)(c.Z.Title, { children: l.title }),
                    ],
                }),
                (0, t.jsx)("div", {
                    className: f.titles,
                    children: l.pages.map((e, l) =>
                        (0, t.jsx)(
                            c.Z.Title,
                            {
                                onClick: () => {
                                    (0, x.Z)({
                                        guildId: n,
                                        pageIndex: l,
                                    });
                                },
                                wrapperClassName: f.titleWrapper,
                                className: r()(f.pageTitleContainer, { [f.selectedPageIndicator]: a === l }),
                                children: (0, t.jsx)(o.xvT, {
                                    variant: "text-sm/medium",
                                    children: e.title,
                                }),
                            },
                            "".concat(e.title, "-").concat(l),
                        ),
                    ),
                }),
                C &&
                    (0, t.jsx)("div", {
                        className: f.alignedRightContent,
                        children: (0, t.jsx)(v, {
                            icon: (0, t.jsx)(o.h_8, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            onClick: k,
                            ariaLabel: h.intl.string(h.t["7lZ31J"]),
                            className: f.wishlistButton,
                        }),
                    }),
            ],
        })
    );
}
