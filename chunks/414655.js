n.d(t, { Z: () => I }), n(388685);
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
    g = n(621853),
    m = n(661462),
    b = n(319396),
    _ = n(778567),
    O = n(388032),
    E = n(10094);
function y(e) {
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
function v(e, t) {
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
function I(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: I,
            wishlistSettings: S,
        } = (0, a.cj)([g.Z, h.default], () => {
            let e = g.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: h.default.getCurrentUser(),
                wishlistSettings: null != e ? g.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: C } = (0, u.ZP)(),
        T = (null == I ? void 0 : I.id) === t.id,
        N = !1 === t.nsfwAllowed,
        [j, P] = i.useState(!0);
    i.useEffect(() => {
        (null == S ? void 0 : S.visibility) != null && P(S.visibility === l.f.PUBLIC);
    }, [null == S ? void 0 : S.visibility]);
    let { wishlist: x, error: A } = (0, f.k)(n),
        Z = i.useCallback(() => {
            if (null == n) return;
            let e = j ? l.f.PRIVATE : l.f.PUBLIC;
            P(!j), p.Z.updateWishlistVisibility(n, e);
        }, [n, j]),
        w = i.useCallback(() => {
            (0, o.pT)(),
                (0, d.mK)({
                    analyticsLocations: C,
                    analyticsSource: c.Z.USER_PROFILE_WISHLIST,
                    openInLayer: !1,
                });
        }, [C]);
    return null != A
        ? null
        : null == x || 0 === x.items.length
          ? (0, r.jsx)(m.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: E.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.emptyStateText,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: O.intl.string(O.t.HGnLLS),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: O.intl.string(O.t["/X1ny8"]),
                                }),
                            ],
                        }),
                        T &&
                            (0, r.jsx)(s.zxk, {
                                variant: "primary",
                                size: "sm",
                                icon: s.EOn,
                                text: O.intl.string(O.t.ZbS4QE),
                                onClick: w,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(m.F, {
                className: E.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: E.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: O.intl.format(O.t.r6Y1Li, { count: x.items.length }),
                                    }),
                                    !j &&
                                        (0, r.jsx)(s.ua7, {
                                            text: O.intl.string(O.t.RX7D9v),
                                            children: (e) =>
                                                (0, r.jsx)(s.tEY, {
                                                    children: (0, r.jsx)(
                                                        "div",
                                                        v(
                                                            y(
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
                                    j &&
                                        N &&
                                        (0, r.jsx)(s.ua7, {
                                            text: O.intl.string(O.t.d78ChY),
                                            children: (e) =>
                                                (0, r.jsx)(s.tEY, {
                                                    children: (0, r.jsx)(
                                                        "div",
                                                        v(
                                                            y(
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
                            T
                                ? (0, r.jsxs)("div", {
                                      className: E.headerActions,
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: s.qJs,
                                              text: O.intl.string(O.t.SDUwMz),
                                              onClick: w,
                                          }),
                                          (0, r.jsx)(_.Z, {
                                              isOwner: T,
                                              isWishlistPublic: j,
                                              onToggleVisibility: Z,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: s.EOn,
                                      text: O.intl.string(O.t["i/yzHh"]),
                                      onClick: w,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(b.Z, {
                        items: x.items,
                        profileOwner: t,
                        isOwner: T,
                    }),
                ],
            });
}
