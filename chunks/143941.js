n.d(t, { a: () => E }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(979554),
    s = n(704215),
    c = n(681715),
    u = n(481060),
    d = n(906732),
    p = n(104505),
    f = n(243778),
    b = n(621853),
    y = n(277511),
    m = n(602733),
    O = n(594174),
    g = n(884697),
    h = n(724994),
    j = n(921944),
    v = n(388032),
    x = n(890088);
let E = (e) => {
    let {
            product: t,
            iconSize: i = 20,
            className: E,
            enableHoverEffect: P = !1,
            isCardHovered: _ = !0,
            selectedVariantIndex: C,
        } = e,
        [S, A] = (0, f.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        N = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: I } = (0, d.ZP)(),
        L = O.default.getCurrentUser(),
        R = null != L ? b.Z.getFirstWishlistId(L.id) : null,
        w = l.useMemo(() => {
            var e;
            return t.type === o.Z.VARIANTS_GROUP && null != C && (null == (e = t.variants) ? void 0 : e[C]) != null
                ? t.variants[C]
                : t;
        }, [t, C]),
        T = w.skuId,
        k = (0, m.ny)(R, T),
        D = l.useRef(null),
        [M, F] = l.useState(null);
    l.useEffect(() => {
        F(null);
    }, [T]);
    let U = null !== M ? M : k,
        Z = (0, p.X)(D),
        Y = U ? u.h_8 : u.Pzh,
        W = U || Z ? x.wishlistedOrHoveredIconColor : x.normalIconColor,
        { isPurchased: B } = (0, h.L)(w),
        V = (0, g.fp)(w),
        z = (0, g.x6)(w),
        H = (0, g.G1)(w),
        G = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), U && null != R)) {
                    F(!1);
                    try {
                        await y.Z.removeSkuFromWishlist(R, T, I), F(null);
                    } catch (e) {
                        F(null),
                            (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.F8FvU1), u.ToastType.FAILURE)),
                            u.uvj.announce(v.intl.string(v.t.F8FvU1));
                    }
                } else {
                    F(!0);
                    try {
                        await y.Z.addSkuToWishlist(T, I),
                            F(null),
                            N &&
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
                                            (l = { product: w }),
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
                                A(j.L.USER_DISMISS));
                    } catch (e) {
                        F(null),
                            (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.F8FvU1), u.ToastType.FAILURE)),
                            u.uvj.announce(v.intl.string(v.t.F8FvU1));
                    }
                }
            },
            [I, U, T, w, N, A, R, F],
        );
    if ((!_ && !U) || null == L || B) return null;
    if (V || z || H) {
        let e = v.intl.string(v.t["50TX9v"]);
        return (
            z ? (e = v.intl.string(v.t.UfDp3N)) : V && (e = v.intl.string(v.t.KsFBMj)),
            (0, r.jsx)(c.u, {
                text: e,
                children: (0, r.jsx)(u.P3F, {
                    className: a()(x.wishlistButton, x.disabledButton, E),
                    innerRef: D,
                    onClick: (e) => e.stopPropagation(),
                    "aria-disabled": !0,
                    children: (0, r.jsx)(Y, {
                        colorClass: x.disabledIconColor,
                        size: "custom",
                        height: i,
                        width: i,
                    }),
                }),
            })
        );
    }
    let K = U ? v.intl.string(v.t.yr9TTU) : v.intl.string(v.t["8DkMER"]);
    return N
        ? (0, r.jsx)(c.i_, {
              title: v.intl.string(v.t["47Rhc3"]),
              body: v.intl.string(v.t.PXjA0d),
              "aria-label": K,
              children: (0, r.jsx)(u.P3F, {
                  className: a()(x.wishlistButton, P && x.withHover, E),
                  innerRef: D,
                  onClick: G,
                  "aria-label": K,
                  children: (0, r.jsx)(Y, {
                      colorClass: W,
                      size: "custom",
                      height: i,
                      width: i,
                  }),
              }),
          })
        : (0, r.jsx)(c.u, {
              text: K,
              "aria-label": K,
              children: (0, r.jsx)(u.P3F, {
                  className: a()(x.wishlistButton, P && x.withHover, E),
                  innerRef: D,
                  onClick: G,
                  "aria-label": K,
                  children: (0, r.jsx)(Y, {
                      colorClass: W,
                      size: "custom",
                      height: i,
                      width: i,
                  }),
              }),
          });
};
