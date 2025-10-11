n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(370523),
    a = n(442837),
    o = n(952265),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    p = n(277511),
    f = n(602733),
    h = n(594174),
    g = n(221292),
    m = n(621853),
    b = n(661462),
    _ = n(319396),
    O = n(778567),
    E = n(228168),
    v = n(388032),
    y = n(10094);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: S,
            wishlistSettings: T,
        } = (0, a.cj)([m.Z, h.default], () => {
            let e = m.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: h.default.getCurrentUser(),
                wishlistSettings: null != e ? m.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: N } = (0, u.ZP)(),
        j = (null == S ? void 0 : S.id) === t.id,
        P = !1 === t.nsfwAllowed,
        [x, A] = i.useState(!0);
    i.useEffect(() => {
        (null == T ? void 0 : T.visibility) != null && A(T.visibility === l.f.PUBLIC);
    }, [null == T ? void 0 : T.visibility]);
    let { wishlist: Z, error: w } = (0, f.kZ)(n, t.id),
        L = i.useCallback(() => {
            if (null == n) return;
            let e = x ? l.f.PRIVATE : l.f.PUBLIC;
            A(!x),
                p.Z.updateWishlistVisibility(n, e),
                (0, g.Er)({
                    wishlistId: n,
                    action: x ? E.NW.WISHLIST_TOGGLE_PRIVATE : E.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: N,
                });
        }, [n, x, N]),
        R = i.useCallback(() => {
            (0, o.pT)(),
                (0, d.mK)({
                    analyticsLocations: N,
                    analyticsSource: c.Z.USER_PROFILE_WISHLIST,
                    openInLayer: !1,
                });
        }, [N]);
    return null != w
        ? null
        : null == Z || 0 === Z.items.length
          ? (0, r.jsx)(b.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: y.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.emptyStateText,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: v.intl.string(v.t.HGnLLS),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: v.intl.string(v.t["/X1ny8"]),
                                }),
                            ],
                        }),
                        j &&
                            (0, r.jsx)(s.zxk, {
                                variant: "primary",
                                size: "sm",
                                icon: s.EOn,
                                text: v.intl.string(v.t.ZbS4QE),
                                onClick: R,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(b.F, {
                className: y.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: v.intl.format(v.t.r6Y1Li, { count: Z.items.length }),
                                    }),
                                    !x &&
                                        (0, r.jsx)(s.ua7, {
                                            "data-migration-pending": !0,
                                            text: v.intl.string(v.t.RX7D9v),
                                            children: (e) =>
                                                (0, r.jsx)(s.tEY, {
                                                    children: (0, r.jsx)(
                                                        "div",
                                                        C(
                                                            I(
                                                                {
                                                                    role: "tooltip",
                                                                    tabIndex: 0,
                                                                },
                                                                e,
                                                            ),
                                                            {
                                                                children: (0, r.jsx)(s.kZF, {
                                                                    size: "custom",
                                                                    width: 16,
                                                                    height: 16,
                                                                }),
                                                            },
                                                        ),
                                                    ),
                                                }),
                                        }),
                                    x &&
                                        P &&
                                        (0, r.jsx)(s.ua7, {
                                            "data-migration-pending": !0,
                                            text: v.intl.string(v.t.d78ChY),
                                            children: (e) =>
                                                (0, r.jsx)(s.tEY, {
                                                    children: (0, r.jsx)(
                                                        "div",
                                                        C(
                                                            I(
                                                                {
                                                                    role: "tooltip",
                                                                    tabIndex: 0,
                                                                },
                                                                e,
                                                            ),
                                                            {
                                                                children: (0, r.jsx)(s.d3s, {
                                                                    size: "custom",
                                                                    width: 16,
                                                                    height: 16,
                                                                }),
                                                            },
                                                        ),
                                                    ),
                                                }),
                                        }),
                                ],
                            }),
                            j
                                ? (0, r.jsxs)("div", {
                                      className: y.headerActions,
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: s.qJs,
                                              text: v.intl.string(v.t.SDUwMz),
                                              onClick: R,
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              isOwner: j,
                                              isWishlistPublic: x,
                                              onToggleVisibility: L,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: s.EOn,
                                      text: v.intl.string(v.t["i/yzHh"]),
                                      onClick: R,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(_.Z, {
                        items: Z.items,
                        profileOwner: t,
                        isOwner: j,
                    }),
                ],
            });
}
