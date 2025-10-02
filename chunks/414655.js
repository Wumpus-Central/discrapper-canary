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
        y = !1 === t.nsfwAllowed,
        { wishlist: v, error: I } = (0, d.k)(n),
        C = i.useCallback(() => {
            (0, a.pT)(),
                (0, u.mK)({
                    analyticsLocations: O,
                    analyticsSource: s.Z.USER_PROFILE_WISHLIST,
                    openInLayer: !1,
                });
        }, [O]);
    return null != I
        ? null
        : null == v || 0 === v.items.length
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
                                size: "sm",
                                icon: o.EOn,
                                text: m.intl.string(m.t.ZbS4QE),
                                onClick: C,
                            }),
                    ],
                }),
            })
          : (0, r.jsxs)(h.F, {
                className: b.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: b.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: m.intl.format(m.t.r6Y1Li, { count: v.items.length }),
                                    }),
                                    y &&
                                        (0, r.jsx)(o.ua7, {
                                            text: m.intl.string(m.t.d78ChY),
                                            children: (e) => {
                                                var t, n;
                                                return (0, r.jsx)(
                                                    o.d3s,
                                                    ((t = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
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
                                                    })({}, e)),
                                                    (n = n =
                                                        {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              t,
                                                              Object.getOwnPropertyDescriptors(n),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(n)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  t,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(n, e),
                                                              );
                                                          }),
                                                    t),
                                                );
                                            },
                                        }),
                                ],
                            }),
                            E
                                ? (0, r.jsx)(o.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: o.qJs,
                                      text: m.intl.string(m.t.SDUwMz),
                                      onClick: C,
                                  })
                                : (0, r.jsx)(o.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: o.EOn,
                                      text: m.intl.string(m.t["i/yzHh"]),
                                      onClick: C,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(g.Z, {
                        items: v.items,
                        profileOwner: t,
                        isOwner: E,
                    }),
                ],
            });
}
