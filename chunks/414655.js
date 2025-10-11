n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(370523),
    a = n(442837),
    o = n(952265),
    s = n(28664),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(335131),
    f = n(277511),
    h = n(602733),
    g = n(594174),
    m = n(221292),
    b = n(621853),
    _ = n(661462),
    O = n(319396),
    E = n(778567),
    v = n(228168),
    y = n(388032),
    I = n(10094);
function C(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: C,
            wishlistSettings: S,
        } = (0, a.cj)([b.Z, g.default], () => {
            let e = b.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: g.default.getCurrentUser(),
                wishlistSettings: null != e ? b.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: T } = (0, d.ZP)(),
        N = (null == C ? void 0 : C.id) === t.id,
        j = !1 === t.nsfwAllowed,
        [P, x] = i.useState(!0);
    i.useEffect(() => {
        (null == S ? void 0 : S.visibility) != null && x(S.visibility === l.f.PUBLIC);
    }, [null == S ? void 0 : S.visibility]);
    let { wishlist: A, error: Z } = (0, h.kZ)(n, t.id),
        w = i.useCallback(() => {
            if (null == n) return;
            let e = P ? l.f.PRIVATE : l.f.PUBLIC;
            x(!P),
                f.Z.updateWishlistVisibility(n, e),
                (0, m.Er)({
                    wishlistId: n,
                    action: P ? v.NW.WISHLIST_TOGGLE_PRIVATE : v.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: T,
                });
        }, [n, P, T]),
        L = i.useCallback(() => {
            (0, o.pT)(),
                (0, p.mK)({
                    analyticsLocations: T,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                    openInLayer: !1,
                });
        }, [T]);
    return null != Z
        ? null
        : null == A || 0 === A.items.length
          ? (0, r.jsx)(_.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: I.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.emptyStateText,
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: y.intl.string(y.t.HGnLLS),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: y.intl.string(y.t["/X1ny8"]),
                                }),
                            ],
                        }),
                        N &&
                            (0, r.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                icon: c.EOn,
                                text: y.intl.string(y.t.ZbS4QE),
                                onClick: L,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(_.F, {
                className: I.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: y.intl.format(y.t.r6Y1Li, { count: A.items.length }),
                                    }),
                                    !P &&
                                        (0, r.jsx)(s.u, {
                                            text: y.intl.string(y.t.RX7D9v),
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
                                    P &&
                                        j &&
                                        (0, r.jsx)(s.u, {
                                            text: y.intl.string(y.t.d78ChY),
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
                            N
                                ? (0, r.jsxs)("div", {
                                      className: I.headerActions,
                                      children: [
                                          (0, r.jsx)(c.Button, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: c.qJs,
                                              text: y.intl.string(y.t.SDUwMz),
                                              onClick: L,
                                          }),
                                          (0, r.jsx)(E.Z, {
                                              isOwner: N,
                                              isWishlistPublic: P,
                                              onToggleVisibility: w,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: c.EOn,
                                      text: y.intl.string(y.t["i/yzHh"]),
                                      onClick: L,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(O.Z, {
                        items: A.items,
                        profileOwner: t,
                        isOwner: N,
                    }),
                ],
            });
}
