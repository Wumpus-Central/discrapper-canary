n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(952265),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(602733),
    p = n(621853),
    f = n(661462),
    h = n(319396),
    g = n(388032),
    m = n(10094);
function b(e) {
    let { profileOwner: t } = e,
        { defaultWishlistId: n } = (0, l.cj)([p.Z], () => ({ defaultWishlistId: p.Z.getFirstWishlistId(t.id) })),
        { analyticsLocations: b } = (0, c.ZP)(),
        { wishlist: _, error: O } = (0, d.k)(n),
        E = i.useCallback(() => {
            (0, a.pT)(),
                (0, u.mK)({
                    analyticsLocations: b,
                    analyticsSource: s.Z.USER_PROFILE_WISHLIST,
                    openInLayer: !1,
                });
        }, [b]);
    return null != O
        ? null
        : null == _ || 0 === _.items.length
          ? (0, r.jsx)(f.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: m.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: m.emptyStateText,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: g.intl.string(g.t.HGnLLS),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: g.intl.string(g.t["/X1ny8"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            icon: o.EOn,
                            text: g.intl.string(g.t.ZbS4QE),
                            onClick: E,
                        }),
                    ],
                }),
            })
          : (0, r.jsxs)(f.F, {
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.headerRow,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                children: g.intl.format(g.t.r6Y1Li, { count: _.items.length }),
                            }),
                            (0, r.jsx)(o.zxk, {
                                variant: "secondary",
                                size: "sm",
                                icon: o.qJs,
                                text: g.intl.string(g.t.SDUwMz),
                                onClick: E,
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.Z, {
                        items: _.items,
                        profileOwner: t,
                    }),
                ],
            });
}
