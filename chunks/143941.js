n.d(t, {
    a: () => E,
    s: () => _,
}),
    n(388685);
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
    b = n(243778),
    f = n(621853),
    y = n(277511),
    O = n(602733),
    v = n(594174),
    m = n(884697),
    g = n(724994),
    h = n(27123),
    j = n(921944),
    x = n(388032),
    P = n(890088);
let E = (e) => {
    let {
            product: t,
            iconSize: n = 20,
            className: a,
            enableHoverEffect: s = !1,
            isCardHovered: c = !0,
            selectedVariantIndex: d,
        } = e,
        p = l.useMemo(() => {
            var e;
            return t.type === o.Z.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? void 0 : e[d]) != null
                ? t.variants[d]
                : t;
        }, [t, d]),
        b = p.skuId,
        { isPurchased: f } = (0, g.L)(p),
        y = (0, h.r1)(p),
        O = (0, m.x6)(p),
        v = (0, m.G1)(p),
        j = l.useMemo(() => {
            let e = "6/4";
            switch (t.type) {
                case o.Z.NAMEPLATE:
                case o.Z.AVATAR_DECORATION:
                    e = "16/9";
                    break;
                case o.Z.BUNDLE:
                case o.Z.PROFILE_EFFECT:
                default:
                    e = "6/4";
            }
            return {
                type: "dynamic",
                component: u.AX$.COLLECTIBLES_PREVIEW,
                aspectRatio: e,
                props: {
                    product: t,
                    forCollectedModal: !0,
                },
            };
        }, [t]);
    if (f) return null;
    if (y || O || v) {
        let e = x.intl.string(x.t["50TX9k"]);
        return (
            O ? (e = x.intl.string(x.t.UfDp3L)) : y && (e = x.intl.string(x.t.KsFBMs)),
            (0, r.jsx)(_, {
                skuId: b,
                className: i()(P.disabledButton, a),
                iconSize: n,
                isCardHovered: c,
                disabled: !0,
                tooltipOverrideText: e,
                nuxGraphic: j,
            })
        );
    }
    return (0, r.jsx)(_, {
        skuId: b,
        className: i()(s && P.withHover, a),
        iconSize: n,
        isCardHovered: c,
        nuxGraphic: j,
    });
};
function _(e) {
    let {
            skuId: t,
            className: a,
            iconSize: o = 20,
            disabled: m,
            isCardHovered: g,
            tooltipOverrideText: h,
            nuxGraphic: E,
        } = e,
        [_, C] = (0, b.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        S = _ === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: A } = (0, d.ZP)(),
        N = v.default.getCurrentUser(),
        I = null != N ? f.Z.getFirstWishlistId(N.id) : null,
        L = (0, O.ny)(I, t),
        w = l.useRef(null),
        [k, R] = l.useState(null);
    l.useEffect(() => {
        R(null);
    }, [t]);
    let T = null !== k ? k : L,
        D = (0, p.X)(w),
        M = T ? u.h_8 : u.Pzh,
        F = T || D ? P.wishlistedOrHoveredIconColor : P.normalIconColor,
        U = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), T && null != I)) {
                    R(!1);
                    try {
                        await y.Z.removeSkuFromWishlist(I, t, A), R(null);
                    } catch (e) {
                        R(null),
                            (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(x.intl.string(x.t.F8FvUy));
                    }
                } else {
                    R(!0);
                    try {
                        await y.Z.addSkuToWishlist(t, A),
                            R(null),
                            S &&
                                null != E &&
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
                                            (l = { graphic: E }),
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
                                C(j.L.USER_DISMISS));
                    } catch (e) {
                        R(null),
                            (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(x.intl.string(x.t.F8FvUy));
                    }
                }
            },
            [T, I, t, A, S, E, C],
        ),
        Z = T ? x.intl.string(x.t.yr9TTf) : x.intl.string(x.t["8DkMEQ"]);
    return (g || T) && null != N
        ? m
            ? (0, r.jsx)(c.u, {
                  text: null != h ? h : Z,
                  "aria-label": null != h ? h : Z,
                  children: (0, r.jsx)(u.P3F, {
                      className: i()(P.wishlistButton, P.disabledButton, a),
                      innerRef: w,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(M, {
                          colorClass: P.disabledIconColor,
                          size: "custom",
                          height: o,
                          width: o,
                      }),
                  }),
              })
            : S
              ? (0, r.jsx)(c.i_, {
                    title: x.intl.string(x.t["47Rhc3"]),
                    body: x.intl.string(x.t.PXjA0b),
                    "aria-label": Z,
                    children: (0, r.jsx)(u.P3F, {
                        className: i()(P.wishlistButton, a),
                        innerRef: w,
                        onClick: U,
                        "aria-label": Z,
                        children: (0, r.jsx)(M, {
                            colorClass: F,
                            size: "custom",
                            height: o,
                            width: o,
                        }),
                    }),
                })
              : (0, r.jsx)(c.u, {
                    text: null != h ? h : Z,
                    "aria-label": null != h ? h : Z,
                    children: (0, r.jsx)(u.P3F, {
                        className: i()(P.wishlistButton, a),
                        innerRef: w,
                        onClick: U,
                        "aria-label": Z,
                        children: (0, r.jsx)(M, {
                            colorClass: F,
                            size: "custom",
                            height: o,
                            width: o,
                        }),
                    }),
                })
        : null;
}
