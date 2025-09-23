n.d(t, { s: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(481060),
    c = n(727637),
    u = n(243778),
    d = n(277511),
    f = n(602733),
    _ = n(921944),
    p = n(388032),
    h = n(820657),
    m = n(74866);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (e) => {
        let { message: t } = e;
        return (0, r.jsxs)("div", {
            className: m.toast,
            children: [
                (0, r.jsx)(l.kSu, {
                    size: "refresh_sm",
                    className: h.toastIcon,
                    color: l.TVs.colors.STATUS_POSITIVE,
                }),
                (0, r.jsx)(l.Text, {
                    color: "text-default",
                    variant: "text-sm/semibold",
                    children: t,
                }),
            ],
        });
    },
    v = (e) => {
        let { skuId: t, iconSize: n = 20, className: a, enableHoverEffect: m = !1 } = e,
            [g, b] = (0, u.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
            v = g === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
            I = (0, f.n)("123", t),
            T = i.useRef(null),
            S = (0, c.Z)(T),
            A = I ? l.h_8 : l.Pzh,
            C = I || S ? h.wishlistedOrHoveredIconColor : h.normalIconColor,
            N = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        I
                            ? (d.Z.removeSkuFromWishlist("123", t),
                              (0, l.showToast)(
                                  (0, l.createToast)("", l.ToastType.CUSTOM, {
                                      component: (0, r.jsx)(O, { message: p.intl.string(p.t.DSXOiI) }),
                                  }),
                              ))
                            : (d.Z.addSkuToWishlist("123", t),
                              (0, l.showToast)(
                                  (0, l.createToast)("", l.ToastType.CUSTOM, {
                                      component: (0, r.jsx)(O, { message: p.intl.string(p.t["3T2jbW"]) }),
                                  }),
                              ),
                              v && b(_.L.USER_DISMISS));
                },
                [I, t, v, b],
            ),
            R = I ? p.intl.string(p.t.yr9TTU) : p.intl.string(p.t["8DkMER"]),
            P = v
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/semibold",
                              children: p.intl.string(p.t["47Rhc3"]),
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              children: p.intl.string(p.t.PXjA0d),
                          }),
                      ],
                  })
                : R;
        return (0, r.jsx)(l.ua7, {
            text: P,
            "aria-label": R,
            children: (e) =>
                (0, r.jsx)(
                    l.P3F,
                    y(E({}, e), {
                        className: o()(h.wishlistButton, m && h.withHover, a),
                        innerRef: T,
                        onClick: N,
                        "aria-label": R,
                        children: (0, r.jsx)(A, {
                            colorClass: C,
                            size: "custom",
                            height: n,
                            width: n,
                        }),
                    }),
                ),
        });
    };
