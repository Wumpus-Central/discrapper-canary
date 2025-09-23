n.d(t, { s: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(481060),
    c = n(727637),
    u = n(243778),
    d = n(607550),
    f = n(921944),
    _ = n(388032),
    p = n(820657),
    h = n(74866);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = (e) => {
        let { message: t } = e;
        return (0, r.jsxs)("div", {
            className: h.toast,
            children: [
                (0, r.jsx)(l.kSu, {
                    size: "refresh_sm",
                    className: p.toastIcon,
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
    O = (e) => {
        let { skuId: t, iconSize: n = 20, className: a, enableHoverEffect: h = !1 } = e,
            [m, E] = (0, u.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
            O = m === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
            v = (0, d.ny)(t),
            I = i.useRef(null),
            T = (0, c.Z)(I),
            S = v ? l.h_8 : l.Pzh,
            A = v || T ? p.wishlistedOrHoveredIconColor : p.normalIconColor,
            C = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        v
                            ? ((0, d.yj)(t),
                              (0, l.showToast)(
                                  (0, l.createToast)("", l.ToastType.CUSTOM, {
                                      component: (0, r.jsx)(y, { message: _.intl.string(_.t.DSXOiI) }),
                                  }),
                              ))
                            : ((0, d.iI)(t),
                              (0, l.showToast)(
                                  (0, l.createToast)("", l.ToastType.CUSTOM, {
                                      component: (0, r.jsx)(y, { message: _.intl.string(_.t["3T2jbW"]) }),
                                  }),
                              ),
                              O && E(f.L.USER_DISMISS));
                },
                [v, t, O, E],
            ),
            N = v ? _.intl.string(_.t.yr9TTU) : _.intl.string(_.t["8DkMER"]),
            R = O
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/semibold",
                              children: _.intl.string(_.t["47Rhc3"]),
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              children: _.intl.string(_.t.PXjA0d),
                          }),
                      ],
                  })
                : N;
        return (0, r.jsx)(l.ua7, {
            text: R,
            "aria-label": N,
            children: (e) =>
                (0, r.jsx)(
                    l.P3F,
                    b(g({}, e), {
                        className: o()(p.wishlistButton, h && p.withHover, a),
                        innerRef: I,
                        onClick: C,
                        "aria-label": N,
                        children: (0, r.jsx)(S, {
                            colorClass: A,
                            size: "custom",
                            height: n,
                            width: n,
                        }),
                    }),
                ),
        });
    };
