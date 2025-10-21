n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(370523),
    l = n(442837),
    o = n(952265),
    s = n(28664),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(335131),
    g = n(277511),
    p = n(602733),
    m = n(594174),
    b = n(221292),
    h = n(621853),
    v = n(661462),
    y = n(319396),
    j = n(778567),
    O = n(228168),
    x = n(388032),
    _ = n(363725);
function I(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: I,
            wishlistSettings: P,
        } = (0, l.cj)([h.Z, m.default], () => {
            let e = h.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: m.default.getCurrentUser(),
                wishlistSettings: null != e ? h.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: w } = (0, d.ZP)(),
        S = (null == I ? void 0 : I.id) === t.id,
        E = !1 === t.nsfwAllowed,
        [T, C] = i.useState(!0);
    i.useEffect(() => {
        (null == P ? void 0 : P.visibility) != null && C(P.visibility === a.f.PUBLIC);
    }, [null == P ? void 0 : P.visibility]);
    let { wishlist: N, error: D } = (0, p.kZ)(n, t.id),
        A = i.useCallback(() => {
            if (null == n) return;
            let e = T ? a.f.PRIVATE : a.f.PUBLIC;
            C(!T),
                g.Z.updateWishlistVisibility(n, e),
                (0, b.Er)({
                    wishlistId: n,
                    action: T ? O.NW.WISHLIST_TOGGLE_PRIVATE : O.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: w,
                });
        }, [n, T, w]),
        k = i.useCallback(() => {
            (0, o.pT)(),
                (0, f.mK)({
                    analyticsLocations: w,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [w]);
    return null != D
        ? null
        : null == N || 0 === N.items.length
          ? (0, r.jsx)(v.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: _.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.emptyStateText,
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: x.intl.string(x.t.HGnLLS),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: x.intl.string(x.t["/X1ny8"]),
                                }),
                            ],
                        }),
                        S &&
                            (0, r.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                icon: c.EOn,
                                text: x.intl.string(x.t.ZbS4QE),
                                onClick: k,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(v.F, {
                className: _.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: _.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: x.intl.format(x.t.r6Y1Li, { count: N.items.length }),
                                    }),
                                    !T &&
                                        (0, r.jsx)(s.u, {
                                            text: x.intl.string(x.t.RX7D9v),
                                            asContainer: !0,
                                            children: (0, r.jsx)(c.tEY, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(c.kZF, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    T &&
                                        E &&
                                        (0, r.jsx)(s.u, {
                                            text: x.intl.string(x.t.d78ChY),
                                            asContainer: !0,
                                            children: (0, r.jsx)(c.tEY, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(c.d3s, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            S
                                ? (0, r.jsxs)("div", {
                                      className: _.headerActions,
                                      children: [
                                          (0, r.jsx)(c.Button, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: c.qJs,
                                              text: x.intl.string(x.t.SDUwMz),
                                              onClick: k,
                                          }),
                                          (0, r.jsx)(j.Z, {
                                              isOwner: S,
                                              isWishlistPublic: T,
                                              onToggleVisibility: A,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: c.EOn,
                                      text: x.intl.string(x.t["i/yzHh"]),
                                      onClick: k,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(y.Z, {
                        items: N.items,
                        profileOwner: t,
                        isOwner: S,
                    }),
                ],
            });
}
