r.d(t, { s: () => v }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(704215),
    s = r(481060),
    c = r(727637),
    u = r(243778),
    d = r(277511),
    p = r(602733),
    f = r(921944),
    b = r(388032),
    h = r(890088),
    g = r(583140);
let O = (e) => {
        let { message: t } = e;
        return (0, n.jsxs)("div", {
            className: g.toast,
            children: [
                (0, n.jsx)(s.kSu, {
                    size: "refresh_sm",
                    className: h.toastIcon,
                    color: s.TVs.colors.STATUS_POSITIVE,
                }),
                (0, n.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/semibold",
                    children: t,
                }),
            ],
        });
    },
    v = (e) => {
        let { skuId: t, iconSize: r = 20, className: i, enableHoverEffect: g = !1 } = e,
            [v, y] = (0, u.US)([o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
            m = v === o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
            j = (0, p.n)("123", t),
            P = l.useRef(null),
            _ = (0, c.Z)(P),
            E = j ? s.h_8 : s.Pzh,
            x = j || _ ? h.wishlistedOrHoveredIconColor : h.normalIconColor,
            C = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        j
                            ? (d.Z.removeSkuFromWishlist("123", t),
                              (0, s.showToast)(
                                  (0, s.createToast)("", s.ToastType.CUSTOM, {
                                      component: (0, n.jsx)(O, { message: b.intl.string(b.t.DSXOiI) }),
                                  }),
                              ))
                            : (d.Z.addSkuToWishlist("123", t),
                              (0, s.showToast)(
                                  (0, s.createToast)("", s.ToastType.CUSTOM, {
                                      component: (0, n.jsx)(O, { message: b.intl.string(b.t["3T2jbW"]) }),
                                  }),
                              ),
                              m && y(f.L.USER_DISMISS));
                },
                [j, t, m, y],
            ),
            S = j ? b.intl.string(b.t.yr9TTU) : b.intl.string(b.t["8DkMER"]),
            I = m
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              children: b.intl.string(b.t["47Rhc3"]),
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              children: b.intl.string(b.t.PXjA0d),
                          }),
                      ],
                  })
                : S;
        return (0, n.jsx)(s.ua7, {
            text: I,
            "aria-label": S,
            children: (e) => {
                var t, l;
                return (0, n.jsx)(
                    s.P3F,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, e)),
                    (l = l =
                        {
                            className: a()(h.wishlistButton, g && h.withHover, i),
                            innerRef: P,
                            onClick: C,
                            "aria-label": S,
                            children: (0, n.jsx)(E, {
                                colorClass: x,
                                size: "custom",
                                height: r,
                                width: r,
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    t),
                );
            },
        });
    };
