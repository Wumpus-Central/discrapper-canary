n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(952265),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(602733),
    p = n(594174),
    f = n(621853),
    h = n(661462),
    g = n(319396),
    m = n(388032),
    b = n(363725);
function _(e) {
    let { profileOwner: t } = e,
        { defaultWishlistId: n, currentUser: _ } = (0, l.cj)([f.Z, p.default], () => ({
            defaultWishlistId: f.Z.getFirstWishlistId(t.id),
            currentUser: p.default.getCurrentUser(),
        })),
        { analyticsLocations: O } = (0, c.ZP)(),
        E = (null == _ ? void 0 : _.id) === t.id,
        { wishlist: y, error: v } = (0, d.k)(n),
        I = i.useCallback(() => {
            (0, a.pT)(),
                (0, u.mK)({
                    analyticsLocations: O,
                    analyticsSource: s.Z.USER_PROFILE_WISHLIST,
                    openInLayer: !1,
                });
        }, [O]);
    return null != v
        ? null
        : null == y || 0 === y.items.length
          ? (0, r.jsx)(h.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: b.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: b.emptyStateText,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: m.intl.string(m.t.HGnLLS),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: m.intl.string(m.t["/X1ny8"]),
                                }),
                            ],
                        }),
                        E &&
                            (0, r.jsx)(o.zxk, {
                                variant: "primary",
                                icon: o.EOn,
                                text: m.intl.string(m.t.ZbS4QE),
                                onClick: I,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(h.F, {
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.headerRow,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                children: m.intl.format(m.t.r6Y1Li, { count: y.items.length }),
                            }),
                            E
                                ? (0, r.jsx)(o.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: o.qJs,
                                      text: m.intl.string(m.t.SDUwMz),
                                      onClick: I,
                                  })
                                : (0, r.jsx)(o.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: o.EOn,
                                      text: m.intl.string(m.t["i/yzHh"]),
                                      onClick: I,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(g.Z, {
                        items: y.items,
                        profileOwner: t,
                        isOwner: E,
                    }),
                ],
            });
}
