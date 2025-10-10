n.d(t, { a: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(979554),
    s = n(704215),
    c = n(481060),
    u = n(906732),
    d = n(104505),
    p = n(243778),
    f = n(621853),
    b = n(277511),
    y = n(602733),
    m = n(594174),
    O = n(884697),
    g = n(724994),
    j = n(921944),
    h = n(388032),
    v = n(890088);
function x(e) {
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
function E(e, t) {
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
let P = (e) => {
    let {
            product: t,
            iconSize: i = 20,
            className: P,
            enableHoverEffect: _ = !1,
            isCardHovered: C = !0,
            selectedVariantIndex: S,
        } = e,
        [A, N] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        I = A === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: T } = (0, u.ZP)(),
        w = m.default.getCurrentUser(),
        L = null != w ? f.Z.getFirstWishlistId(w.id) : null,
        k = l.useMemo(() => {
            var e;
            return t.type === o.Z.VARIANTS_GROUP && null != S && (null == (e = t.variants) ? void 0 : e[S]) != null
                ? t.variants[S]
                : t;
        }, [t, S]),
        R = k.skuId,
        D = (0, y.n)(L, R),
        M = l.useRef(null),
        [F, U] = l.useState(null);
    l.useEffect(() => {
        U(null);
    }, [R]);
    let Z = null !== F ? F : D,
        Y = (0, d.X)(M),
        W = Z ? c.h_8 : c.Pzh,
        V = Z || Y ? v.wishlistedOrHoveredIconColor : v.normalIconColor,
        { isPurchased: B } = (0, g.L)(k),
        z = (0, O.fp)(k),
        G = (0, O.x6)(k),
        H = (0, O.G1)(k),
        K = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), Z && null != L)) {
                    U(!1);
                    try {
                        await b.Z.removeSkuFromWishlist(L, R, T), U(null);
                    } catch (e) {
                        U(null),
                            (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.F8FvU1), c.ToastType.FAILURE)),
                            c.uvj.announce(h.intl.string(h.t.F8FvU1));
                    }
                } else {
                    U(!0);
                    try {
                        await b.Z.addSkuToWishlist(R, T),
                            U(null),
                            I &&
                                ((0, c.ZDy)(async () => {
                                    let { default: e } = await n.e("36340").then(n.bind(n, 874533));
                                    return (t) => (0, r.jsx)(e, E(x({}, t), { product: k }));
                                }),
                                N(j.L.USER_DISMISS));
                    } catch (e) {
                        U(null),
                            (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.F8FvU1), c.ToastType.FAILURE)),
                            c.uvj.announce(h.intl.string(h.t.F8FvU1));
                    }
                }
            },
            [T, Z, R, k, I, N, L, U],
        );
    if ((!C && !Z) || null == w || B) return null;
    if (z || G || H) {
        let e = h.intl.string(h.t["50TX9v"]);
        return (
            G ? (e = h.intl.string(h.t.UfDp3N)) : z && (e = h.intl.string(h.t.KsFBMj)),
            (0, r.jsx)(c.ua7, {
                text: e,
                children: (e) =>
                    (0, r.jsx)(
                        c.P3F,
                        E(x({}, e), {
                            className: a()(v.wishlistButton, v.disabledButton, P),
                            innerRef: M,
                            onClick: (e) => e.stopPropagation(),
                            "aria-disabled": !0,
                            children: (0, r.jsx)(W, {
                                colorClass: v.disabledIconColor,
                                size: "custom",
                                height: i,
                                width: i,
                            }),
                        }),
                    ),
            })
        );
    }
    let X = Z ? h.intl.string(h.t.yr9TTU) : h.intl.string(h.t["8DkMER"]),
        q = I
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.Text, {
                          variant: "text-sm/semibold",
                          children: h.intl.string(h.t["47Rhc3"]),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          children: h.intl.string(h.t.PXjA0d),
                      }),
                  ],
              })
            : X;
    return (0, r.jsx)(c.ua7, {
        text: q,
        "aria-label": X,
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                E(x({}, e), {
                    className: a()(v.wishlistButton, _ && v.withHover, P),
                    innerRef: M,
                    onClick: K,
                    "aria-label": X,
                    children: (0, r.jsx)(W, {
                        colorClass: V,
                        size: "custom",
                        height: i,
                        width: i,
                    }),
                }),
            ),
    });
};
