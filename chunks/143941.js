n.d(t, {
    a: () => S,
    k: () => I,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(481060),
    c = n(727637),
    u = n(243778),
    d = n(621853),
    p = n(277511),
    f = n(602733),
    h = n(594174),
    g = n(884697),
    m = n(724994),
    b = n(921944),
    _ = n(388032),
    O = n(890088),
    E = n(583140);
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
let I = (e) => {
        let { message: t } = e;
        return (0, r.jsxs)("div", {
            className: E.toast,
            children: [
                (0, r.jsx)(s.kSu, {
                    size: "refresh_sm",
                    className: O.toastIcon,
                    color: s.TVs.colors.STATUS_POSITIVE,
                }),
                (0, r.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/semibold",
                    children: t,
                }),
            ],
        });
    },
    S = (e) => {
        let { product: t, iconSize: l = 20, className: E, enableHoverEffect: S = !1, isCardHovered: C = !0 } = e,
            [T, N] = (0, u.US)([o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
            j = T === o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
            P = h.default.getCurrentUser(),
            x = null != P ? d.Z.getFirstWishlistId(P.id) : null,
            A = (0, f.n)(x, t.skuId),
            Z = i.useRef(null),
            [w, L] = i.useState(null),
            R = null !== w ? w : A,
            D = (0, c.Z)(Z),
            k = R ? s.h_8 : s.Pzh,
            M = R || D ? O.wishlistedOrHoveredIconColor : O.normalIconColor,
            { isPurchased: U } = (0, m.L)(t),
            G = (0, g.fp)(t) || (0, g.x6)(t) || (0, g.G1)(t),
            B = i.useCallback(
                async (e) => {
                    if ((e.stopPropagation(), e.currentTarget.blur(), R && null != x)) {
                        L(!1);
                        try {
                            await p.Z.removeSkuFromWishlist(x, t.skuId),
                                L(null),
                                (0, s.showToast)(
                                    (0, s.createToast)("", s.ToastType.CUSTOM, {
                                        component: (0, r.jsx)(I, { message: _.intl.string(_.t.DSXOiI) }),
                                    }),
                                );
                        } catch (e) {
                            L(null),
                                (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.F8FvU1), s.ToastType.FAILURE));
                        }
                    } else {
                        L(!0);
                        try {
                            await p.Z.addSkuToWishlist(t.skuId),
                                L(null),
                                j &&
                                    ((0, s.ZDy)(async () => {
                                        let { default: e } = await n.e("36340").then(n.bind(n, 874533));
                                        return (n) => (0, r.jsx)(e, v(y({}, n), { product: t }));
                                    }),
                                    N(b.L.USER_DISMISS)),
                                (0, s.showToast)(
                                    (0, s.createToast)("", s.ToastType.CUSTOM, {
                                        component: (0, r.jsx)(I, { message: _.intl.string(_.t["3T2jbW"]) }),
                                    }),
                                );
                        } catch (e) {
                            L(null),
                                (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.F8FvU1), s.ToastType.FAILURE));
                        }
                    }
                },
                [R, t, j, N, x, L],
            );
        if ((!C && !R) || null == P) return null;
        if (G || U)
            return (0, r.jsx)(s.ua7, {
                text: _.intl.string(_.t["02QYZG"]),
                children: (e) =>
                    (0, r.jsx)(
                        s.P3F,
                        v(y({}, e), {
                            className: a()(O.wishlistButton, O.disabledButton, E),
                            innerRef: Z,
                            onClick: (e) => e.stopPropagation(),
                            children: (0, r.jsx)(k, {
                                colorClass: O.disabledIconColor,
                                size: "custom",
                                height: l,
                                width: l,
                            }),
                        }),
                    ),
            });
        let V = R ? _.intl.string(_.t.yr9TTU) : _.intl.string(_.t["8DkMER"]),
            H = j
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              children: _.intl.string(_.t["47Rhc3"]),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              children: _.intl.string(_.t.PXjA0d),
                          }),
                      ],
                  })
                : V;
        return (0, r.jsx)(s.ua7, {
            text: H,
            "aria-label": V,
            children: (e) =>
                (0, r.jsx)(
                    s.P3F,
                    v(y({}, e), {
                        className: a()(O.wishlistButton, S && O.withHover, E),
                        innerRef: Z,
                        onClick: B,
                        "aria-label": V,
                        children: (0, r.jsx)(k, {
                            colorClass: M,
                            size: "custom",
                            height: l,
                            width: l,
                        }),
                    }),
                ),
        });
    };
