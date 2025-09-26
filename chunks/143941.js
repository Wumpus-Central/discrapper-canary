r.d(t, { a: () => E }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(704215),
    s = r(481060),
    c = r(727637),
    u = r(243778),
    d = r(621853),
    p = r(277511),
    f = r(602733),
    b = r(594174),
    h = r(884697),
    g = r(724994),
    y = r(921944),
    m = r(388032),
    O = r(890088),
    v = r(583140);
function j(e) {
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
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let _ = (e) => {
        let { message: t } = e;
        return (0, n.jsxs)("div", {
            className: v.toast,
            children: [
                (0, n.jsx)(s.kSu, {
                    size: "refresh_sm",
                    className: O.toastIcon,
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
    E = (e) => {
        let { product: t, iconSize: i = 20, className: v, enableHoverEffect: E = !1, isCardHovered: x = !0 } = e,
            [C, S] = (0, u.US)([o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
            I = C === o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
            A = b.default.getCurrentUser(),
            w = null != A ? d.Z.getFirstWishlistId(A.id) : null,
            T = (0, f.n)(w, t.skuId),
            R = l.useRef(null),
            [N, L] = l.useState(null),
            k = null !== N ? N : T,
            D = (0, c.Z)(R),
            M = k ? s.h_8 : s.Pzh,
            Z = k || D ? O.wishlistedOrHoveredIconColor : O.normalIconColor,
            { isPurchased: U } = (0, g.L)(t),
            B = (0, h.fp)(t) || (0, h.x6)(t) || (0, h.G1)(t),
            F = l.useCallback(
                async (e) => {
                    if ((e.stopPropagation(), k && null != w)) {
                        L(!1);
                        try {
                            await p.Z.removeSkuFromWishlist(w, t.skuId),
                                L(null),
                                (0, s.showToast)(
                                    (0, s.createToast)("", s.ToastType.CUSTOM, {
                                        component: (0, n.jsx)(_, { message: m.intl.string(m.t.DSXOiI) }),
                                    }),
                                );
                        } catch (e) {
                            L(null),
                                (0, s.showToast)((0, s.createToast)(m.intl.string(m.t.F8FvU1), s.ToastType.FAILURE));
                        }
                    } else {
                        L(!0);
                        try {
                            await p.Z.addSkuToWishlist(t.skuId),
                                L(null),
                                I &&
                                    ((0, s.ZDy)(async () => {
                                        let { default: e } = await r.e("36340").then(r.bind(r, 874533));
                                        return (r) => (0, n.jsx)(e, P(j({}, r), { product: t }));
                                    }),
                                    S(y.L.USER_DISMISS)),
                                (0, s.showToast)(
                                    (0, s.createToast)("", s.ToastType.CUSTOM, {
                                        component: (0, n.jsx)(_, { message: m.intl.string(m.t["3T2jbW"]) }),
                                    }),
                                );
                        } catch (e) {
                            L(null),
                                (0, s.showToast)((0, s.createToast)(m.intl.string(m.t.F8FvU1), s.ToastType.FAILURE));
                        }
                    }
                },
                [k, t, I, S, w, L],
            );
        if ((!x && !k) || null == A) return null;
        if (B || U)
            return (0, n.jsx)(s.ua7, {
                text: m.intl.string(m.t["02QYZG"]),
                children: (e) =>
                    (0, n.jsx)(
                        s.P3F,
                        P(j({}, e), {
                            className: a()(O.wishlistButton, O.disabledButton, v),
                            innerRef: R,
                            onClick: (e) => e.stopPropagation(),
                            children: (0, n.jsx)(M, {
                                colorClass: O.disabledIconColor,
                                size: "custom",
                                height: i,
                                width: i,
                            }),
                        }),
                    ),
            });
        let V = k ? m.intl.string(m.t.yr9TTU) : m.intl.string(m.t["8DkMER"]),
            W = I
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              children: m.intl.string(m.t["47Rhc3"]),
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              children: m.intl.string(m.t.PXjA0d),
                          }),
                      ],
                  })
                : V;
        return (0, n.jsx)(s.ua7, {
            text: W,
            "aria-label": V,
            children: (e) =>
                (0, n.jsx)(
                    s.P3F,
                    P(j({}, e), {
                        className: a()(O.wishlistButton, E && O.withHover, v),
                        innerRef: R,
                        onClick: F,
                        "aria-label": V,
                        children: (0, n.jsx)(M, {
                            colorClass: Z,
                            size: "custom",
                            height: i,
                            width: i,
                        }),
                    }),
                ),
        });
    };
