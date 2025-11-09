n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(370523),
    l = n(442837),
    o = n(952265),
    c = n(28664),
    s = n(481060),
    u = n(100527),
    d = n(906732),
    g = n(335131),
    f = n(277511),
    p = n(602733),
    m = n(594174),
    b = n(221292),
    h = n(621853),
    y = n(661462),
    v = n(319396),
    O = n(778567),
    j = n(228168),
    x = n(388032),
    _ = n(363725);
function P(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: P,
            wishlistSettings: I,
        } = (0, l.cj)([h.Z, m.default], () => {
            let e = h.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: m.default.getCurrentUser(),
                wishlistSettings: null != e ? h.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: w } = (0, d.ZP)(),
        S = (null == P ? void 0 : P.id) === t.id,
        E = !1 === t.nsfwAllowed,
        [T, C] = i.useState(!0);
    i.useEffect(() => {
        (null == I ? void 0 : I.visibility) != null && C(I.visibility === a.f.PUBLIC);
    }, [null == I ? void 0 : I.visibility]);
    let { wishlist: D, error: k } = (0, p.kZ)(n, t.id),
        N = i.useCallback(() => {
            if (null == n) return;
            let e = T ? a.f.PRIVATE : a.f.PUBLIC;
            C(!T),
                f.Z.updateWishlistVisibility(n, e),
                (0, b.Er)({
                    wishlistId: n,
                    action: T ? j.NW.WISHLIST_TOGGLE_PRIVATE : j.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: w,
                });
        }, [n, T, w]),
        A = i.useCallback(() => {
            (0, o.pT)(),
                (0, g.mK)({
                    analyticsLocations: w,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [w]);
    return null != k
        ? null
        : null == D || 0 === D.items.length
          ? (0, r.jsx)(y.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: _.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.emptyStateText,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: x.intl.string(x.t.HGnLLT),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: x.intl.string(x.t["/X1ny6"]),
                                }),
                            ],
                        }),
                        S &&
                            (0, r.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                icon: s.EOn,
                                text: x.intl.string(x.t.ZbS4QB),
                                onClick: A,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(y.F, {
                className: _.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: _.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: x.intl.format(x.t.r6Y1Lg, { count: D.items.length }),
                                    }),
                                    !T &&
                                        (0, r.jsx)(c.u, {
                                            text: x.intl.string(x.t.RX7D9h),
                                            asContainer: !0,
                                            children: (0, r.jsx)(s.tEY, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(s.kZF, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    T &&
                                        E &&
                                        (0, r.jsx)(c.u, {
                                            text: x.intl.string(x.t.d78ChW),
                                            asContainer: !0,
                                            children: (0, r.jsx)(s.tEY, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(s.d3s, {
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
                                          (0, r.jsx)(s.Button, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: s.qJs,
                                              text: x.intl.string(x.t.SDUwM0),
                                              onClick: A,
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              isOwner: S,
                                              isWishlistPublic: T,
                                              onToggleVisibility: N,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: s.EOn,
                                      text: x.intl.string(x.t["i/yzHs"]),
                                      onClick: A,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(v.Z, {
                        items: D.items,
                        profileOwner: t,
                        isOwner: S,
                    }),
                ],
            });
}
