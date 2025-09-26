r.d(t, { a: () => P }), r(388685);
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
    f = r(884697),
    b = r(724994),
    h = r(921944),
    g = r(388032),
    y = r(890088),
    m = r(583140);
function O(e) {
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
function v(e, t) {
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
let j = (e) => {
        let { message: t } = e;
        return (0, n.jsxs)("div", {
            className: m.toast,
            children: [
                (0, n.jsx)(s.kSu, {
                    size: "refresh_sm",
                    className: y.toastIcon,
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
    P = (e) => {
        let { product: t, iconSize: i = 20, className: m, enableHoverEffect: P = !1, isCardHovered: _ = !0 } = e,
            [E, x] = (0, u.US)([o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
            C = E === o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
            S = (0, p.n)("123", t.skuId),
            I = l.useRef(null),
            A = (0, c.Z)(I),
            w = S ? s.h_8 : s.Pzh,
            R = S || A ? y.wishlistedOrHoveredIconColor : y.normalIconColor,
            { isPurchased: T } = (0, b.L)(t),
            N = (0, f.fp)(t) || (0, f.x6)(t) || (0, f.G1)(t),
            L = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        S
                            ? (d.Z.removeSkuFromWishlist("123", t.skuId),
                              (0, s.showToast)(
                                  (0, s.createToast)("", s.ToastType.CUSTOM, {
                                      component: (0, n.jsx)(j, { message: g.intl.string(g.t.DSXOiI) }),
                                  }),
                              ))
                            : (d.Z.addSkuToWishlist("123", t.skuId),
                              (0, s.showToast)(
                                  (0, s.createToast)("", s.ToastType.CUSTOM, {
                                      component: (0, n.jsx)(j, { message: g.intl.string(g.t["3T2jbW"]) }),
                                  }),
                              ),
                              C &&
                                  ((0, s.ZDy)(async () => {
                                      let { default: e } = await r.e("36340").then(r.bind(r, 874533));
                                      return (r) => (0, n.jsx)(e, v(O({}, r), { product: t }));
                                  }),
                                  x(h.L.USER_DISMISS)));
                },
                [S, t, C, x],
            );
        if (!_ && !S) return null;
        if (N || T)
            return (0, n.jsx)(s.ua7, {
                text: g.intl.string(g.t["02QYZG"]),
                children: (e) =>
                    (0, n.jsx)(
                        s.P3F,
                        v(O({}, e), {
                            className: a()(y.wishlistButton, y.disabledButton, m),
                            innerRef: I,
                            onClick: (e) => e.stopPropagation(),
                            children: (0, n.jsx)(w, {
                                colorClass: y.disabledIconColor,
                                size: "custom",
                                height: i,
                                width: i,
                            }),
                        }),
                    ),
            });
        let k = S ? g.intl.string(g.t.yr9TTU) : g.intl.string(g.t["8DkMER"]),
            D = C
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              children: g.intl.string(g.t["47Rhc3"]),
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              children: g.intl.string(g.t.PXjA0d),
                          }),
                      ],
                  })
                : k;
        return (0, n.jsx)(s.ua7, {
            text: D,
            "aria-label": k,
            children: (e) =>
                (0, n.jsx)(
                    s.P3F,
                    v(O({}, e), {
                        className: a()(y.wishlistButton, P && y.withHover, m),
                        innerRef: I,
                        onClick: L,
                        "aria-label": k,
                        children: (0, n.jsx)(w, {
                            colorClass: R,
                            size: "custom",
                            height: i,
                            width: i,
                        }),
                    }),
                ),
        });
    };
