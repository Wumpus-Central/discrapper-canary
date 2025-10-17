n.d(t, { a: () => E }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    o = n(979554),
    s = n(704215),
    c = n(681715),
    u = n(481060),
    d = n(906732),
    p = n(104505),
    f = n(243778),
    b = n(621853),
    y = n(277511),
    O = n(602733),
    v = n(594174),
    g = n(884697),
    m = n(724994),
    h = n(27123),
    j = n(921944),
    x = n(388032),
    P = n(890088);
let E = (e) => {
    let {
            product: t,
            iconSize: a = 20,
            className: E,
            enableHoverEffect: _ = !1,
            isCardHovered: C = !0,
            selectedVariantIndex: S,
        } = e,
        [A, N] = (0, f.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        w = A === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: I } = (0, d.ZP)(),
        L = v.default.getCurrentUser(),
        R = null != L ? b.Z.getFirstWishlistId(L.id) : null,
        k = l.useMemo(() => {
            var e;
            return t.type === o.Z.VARIANTS_GROUP && null != S && (null == (e = t.variants) ? void 0 : e[S]) != null
                ? t.variants[S]
                : t;
        }, [t, S]),
        T = k.skuId,
        D = (0, O.ny)(R, T),
        M = l.useRef(null),
        [F, U] = l.useState(null);
    l.useEffect(() => {
        U(null);
    }, [T]);
    let Z = null !== F ? F : D,
        V = (0, p.X)(M),
        Y = Z ? u.h_8 : u.Pzh,
        B = Z || V ? P.wishlistedOrHoveredIconColor : P.normalIconColor,
        { isPurchased: W } = (0, m.L)(k),
        G = (0, h.r1)(k),
        z = (0, g.x6)(k),
        H = (0, g.G1)(k),
        K = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), Z && null != R)) {
                    U(!1);
                    try {
                        await y.Z.removeSkuFromWishlist(R, T, I), U(null);
                    } catch (e) {
                        U(null),
                            (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvU1), u.ToastType.FAILURE)),
                            u.uvj.announce(x.intl.string(x.t.F8FvU1));
                    }
                } else {
                    U(!0);
                    try {
                        await y.Z.addSkuToWishlist(T, I),
                            U(null),
                            w &&
                                ((0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("36340").then(n.bind(n, 874533));
                                    return (t) => {
                                        var n, l;
                                        return (0, r.jsx)(
                                            e,
                                            ((n = (function (e) {
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
                                            })({}, t)),
                                            (l = { product: k }),
                                            (l = null != l ? l : {}),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(l)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          n,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(l, e),
                                                      );
                                                  }),
                                            n),
                                        );
                                    };
                                }),
                                N(j.L.USER_DISMISS));
                    } catch (e) {
                        U(null),
                            (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvU1), u.ToastType.FAILURE)),
                            u.uvj.announce(x.intl.string(x.t.F8FvU1));
                    }
                }
            },
            [I, Z, T, k, w, N, R, U],
        );
    if ((!C && !Z) || null == L || W) return null;
    if (G || z || H) {
        let e = x.intl.string(x.t["50TX9v"]);
        return (
            z ? (e = x.intl.string(x.t.UfDp3N)) : G && (e = x.intl.string(x.t.KsFBMj)),
            (0, r.jsx)(c.u, {
                text: e,
                children: (0, r.jsx)(u.P3F, {
                    className: i()(P.wishlistButton, P.disabledButton, E),
                    innerRef: M,
                    onClick: (e) => e.stopPropagation(),
                    "aria-disabled": !0,
                    children: (0, r.jsx)(Y, {
                        colorClass: P.disabledIconColor,
                        size: "custom",
                        height: a,
                        width: a,
                    }),
                }),
            })
        );
    }
    let J = Z ? x.intl.string(x.t.yr9TTU) : x.intl.string(x.t["8DkMER"]);
    return w
        ? (0, r.jsx)(c.i_, {
              title: x.intl.string(x.t["47Rhc3"]),
              body: x.intl.string(x.t.PXjA0d),
              "aria-label": J,
              children: (0, r.jsx)(u.P3F, {
                  className: i()(P.wishlistButton, _ && P.withHover, E),
                  innerRef: M,
                  onClick: K,
                  "aria-label": J,
                  children: (0, r.jsx)(Y, {
                      colorClass: B,
                      size: "custom",
                      height: a,
                      width: a,
                  }),
              }),
          })
        : (0, r.jsx)(c.u, {
              text: J,
              "aria-label": J,
              children: (0, r.jsx)(u.P3F, {
                  className: i()(P.wishlistButton, _ && P.withHover, E),
                  innerRef: M,
                  onClick: K,
                  "aria-label": J,
                  children: (0, r.jsx)(Y, {
                      colorClass: B,
                      size: "custom",
                      height: a,
                      width: a,
                  }),
              }),
          });
};
