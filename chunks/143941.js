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
    y = r(602733),
    O = r(594174),
    v = r(884697),
    g = r(724994),
    m = r(921944),
    j = r(388032),
    h = r(820657);
function P(e) {
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
function x(e, t) {
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
            enableHoverEffect: _ = !1,
            isCardHovered: w = !0,
            selectedVariantIndex: C,
        } = e,
        [S, A] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        N = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: I } = (0, d.ZP)(),
        T = O.default.getCurrentUser(),
        L = null != T ? f.Z.getFirstWishlistId(T.id) : null,
        k = l.useMemo(() => {
            var e;
            return t.type === o.Z.VARIANTS_GROUP && null != C && (null == (e = t.variants) ? void 0 : e[C]) != null
                ? t.variants[C]
                : t;
        }, [t, C]),
        D = k.skuId,
        R = (0, y.n)(L, D),
        M = l.useRef(null),
        [F, U] = l.useState(null);
    l.useEffect(() => {
        U(null);
    }, [D]);
    let Z = null !== F ? F : R,
        B = (0, u.Z)(M),
        V = Z ? c.h_8 : c.Pzh,
        Y = Z || B ? h.wishlistedOrHoveredIconColor : h.normalIconColor,
        { isPurchased: W } = (0, g.L)(k),
        G = (0, v.fp)(k),
        z = (0, v.x6)(k),
        H = (0, v.G1)(k),
        K = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), e.currentTarget.blur(), Z && null != L)) {
                    U(!1);
                    try {
                        await b.Z.removeSkuFromWishlist(L, D, I), U(null);
                    } catch (e) {
                        U(null),
                            (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.F8FvU1), c.ToastType.FAILURE)),
                            c.uvj.announce(j.intl.string(j.t.F8FvU1));
                    }
                } else {
                    U(!0);
                    try {
                        await b.Z.addSkuToWishlist(D, I),
                            U(null),
                            N &&
                                ((0, c.ZDy)(async () => {
                                    let { default: e } = await r.e("36340").then(r.bind(r, 874533));
                                    return (r) => (0, n.jsx)(e, x(P({}, r), { product: t }));
                                }),
                                A(m.L.USER_DISMISS));
                    } catch (e) {
                        U(null),
                            (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.F8FvU1), c.ToastType.FAILURE)),
                            c.uvj.announce(j.intl.string(j.t.F8FvU1));
                    }
                }
            },
            [I, Z, D, t, N, A, L, U],
        );
    if ((!w && !Z) || null == T) return null;
    if (G || z || H || W) {
        let e = j.intl.string(j.t["50TX9v"]);
        return (
            z ? (e = j.intl.string(j.t.UfDp3N)) : G && (e = j.intl.string(j.t.KsFBMj)),
            (0, n.jsx)(c.ua7, {
                text: e,
                children: (e) =>
                    (0, n.jsx)(
                        c.P3F,
                        x(P({}, e), {
                            className: a()(h.wishlistButton, h.disabledButton, E),
                            innerRef: M,
                            "aria-disabled": !0,
                            onClick: (e) => e.stopPropagation(),
                            children: (0, n.jsx)(V, {
                                colorClass: h.disabledIconColor,
                                size: "custom",
                                height: i,
                                width: i,
                            }),
                        }),
                    ),
            })
        );
    }
    let X = Z ? j.intl.string(j.t.yr9TTU) : j.intl.string(j.t["8DkMER"]),
        J = N
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(c.Text, {
                          variant: "text-sm/semibold",
                          children: j.intl.string(j.t["47Rhc3"]),
                      }),
                      (0, n.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          children: j.intl.string(j.t.PXjA0d),
                      }),
                  ],
              })
            : X;
    return (0, n.jsx)(c.ua7, {
        text: J,
        "aria-label": X,
        children: (e) =>
            (0, n.jsx)(
                c.P3F,
                x(P({}, e), {
                    className: a()(h.wishlistButton, _ && h.withHover, E),
                    innerRef: M,
                    onClick: K,
                    "aria-label": X,
                    children: (0, n.jsx)(V, {
                        colorClass: Y,
                        size: "custom",
                        height: i,
                        width: i,
                    }),
                }),
            ),
    });
};
