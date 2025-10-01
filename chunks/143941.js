r.d(t, { a: () => E }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(979554),
    s = r(704215),
    c = r(481060),
    u = r(727637),
    d = r(906732),
    p = r(243778),
    f = r(621853),
    b = r(277511),
    h = r(602733),
    g = r(594174),
    y = r(884697),
    v = r(724994),
    m = r(921944),
    O = r(388032),
    P = r(820657);
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
function _(e, t) {
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
let E = (e) => {
    let {
            product: t,
            iconSize: i = 20,
            className: E,
            enableHoverEffect: x = !1,
            isCardHovered: C = !0,
            selectedVariantIndex: S,
        } = e,
        [A, I] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        w = A === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: R } = (0, d.ZP)(),
        T = g.default.getCurrentUser(),
        N = null != T ? f.Z.getFirstWishlistId(T.id) : null,
        L = l.useMemo(() => {
            var e;
            return t.type === o.Z.VARIANTS_GROUP && null != S && (null == (e = t.variants) ? void 0 : e[S]) != null
                ? t.variants[S]
                : t;
        }, [t, S]),
        k = L.skuId,
        D = (0, h.n)(N, k),
        M = l.useRef(null),
        [Z, U] = l.useState(null);
    l.useEffect(() => {
        U(null);
    }, [k]);
    let B = null !== Z ? Z : D,
        F = (0, u.Z)(M),
        V = B ? c.h_8 : c.Pzh,
        W = B || F ? P.wishlistedOrHoveredIconColor : P.normalIconColor,
        { isPurchased: H } = (0, v.L)(L),
        G = (0, y.fp)(L) || (0, y.x6)(L) || (0, y.G1)(L),
        Y = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), e.currentTarget.blur(), B && null != N)) {
                    U(!1);
                    try {
                        await b.Z.removeSkuFromWishlist(N, k, R), U(null);
                    } catch (e) {
                        U(null), (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.F8FvU1), c.ToastType.FAILURE));
                    }
                } else {
                    U(!0);
                    try {
                        await b.Z.addSkuToWishlist(k, R),
                            U(null),
                            w &&
                                ((0, c.ZDy)(async () => {
                                    let { default: e } = await r.e("36340").then(r.bind(r, 874533));
                                    return (r) => (0, n.jsx)(e, _(j({}, r), { product: t }));
                                }),
                                I(m.L.USER_DISMISS));
                    } catch (e) {
                        U(null), (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.F8FvU1), c.ToastType.FAILURE));
                    }
                }
            },
            [R, B, k, t, w, I, N, U],
        );
    if ((!C && !B) || null == T) return null;
    if (G || H)
        return (0, n.jsx)(c.ua7, {
            text: O.intl.string(O.t["02QYZG"]),
            children: (e) =>
                (0, n.jsx)(
                    c.P3F,
                    _(j({}, e), {
                        className: a()(P.wishlistButton, P.disabledButton, E),
                        innerRef: M,
                        onClick: (e) => e.stopPropagation(),
                        children: (0, n.jsx)(V, {
                            colorClass: P.disabledIconColor,
                            size: "custom",
                            height: i,
                            width: i,
                        }),
                    }),
                ),
        });
    let z = B ? O.intl.string(O.t.yr9TTU) : O.intl.string(O.t["8DkMER"]),
        K = w
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(c.Text, {
                          variant: "text-sm/semibold",
                          children: O.intl.string(O.t["47Rhc3"]),
                      }),
                      (0, n.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          children: O.intl.string(O.t.PXjA0d),
                      }),
                  ],
              })
            : z;
    return (0, n.jsx)(c.ua7, {
        text: K,
        "aria-label": z,
        children: (e) =>
            (0, n.jsx)(
                c.P3F,
                _(j({}, e), {
                    className: a()(P.wishlistButton, x && P.withHover, E),
                    innerRef: M,
                    onClick: Y,
                    "aria-label": z,
                    children: (0, n.jsx)(V, {
                        colorClass: W,
                        size: "custom",
                        height: i,
                        width: i,
                    }),
                }),
            ),
    });
};
