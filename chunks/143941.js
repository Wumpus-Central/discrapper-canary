n.d(t, {
    a: () => R,
    s: () => w,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(979554),
    l = n(704215),
    c = n(681715),
    u = n(481060),
    d = n(906732),
    f = n(104505),
    p = n(243778),
    _ = n(621853),
    m = n(285980),
    h = n(511107),
    g = n(277511),
    E = n(602733),
    b = n(594174),
    y = n(884697),
    O = n(724994),
    v = n(27123),
    S = n(921944),
    I = n(388032),
    T = n(890088);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = (e) => {
    let {
            product: t,
            iconSize: n = 20,
            className: a,
            enableHoverEffect: l = !1,
            isCardHovered: c = !0,
            selectedVariantIndex: d,
        } = e,
        f = i.useMemo(() => {
            var e;
            return t.type === s.Z.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? void 0 : e[d]) != null
                ? t.variants[d]
                : t;
        }, [t, d]),
        p = f.skuId,
        { isPurchased: _ } = (0, O.L)(f),
        g = (0, m.$)({ location: "WishlistButton" }),
        E = i.useMemo(() => {
            let e = "6/4";
            switch (t.type) {
                case s.Z.NAMEPLATE:
                case s.Z.AVATAR_DECORATION:
                    e = "16/9";
                    break;
                case s.Z.BUNDLE:
                case s.Z.PROFILE_EFFECT:
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
    if (_) return null;
    if (!(0, h.p)(f, g)) {
        let e = I.intl.string(I.t["50TX9k"]);
        return (
            (0, y.x6)(f) ? (e = I.intl.string(I.t.UfDp3L)) : (0, v.r1)(f) && !g && (e = I.intl.string(I.t.KsFBMs)),
            (0, r.jsx)(w, {
                skuId: p,
                className: o()(T.disabledButton, a),
                iconSize: n,
                isCardHovered: c,
                disabled: !0,
                tooltipOverrideText: e,
                nuxGraphic: E,
            })
        );
    }
    return (0, r.jsx)(w, {
        skuId: p,
        className: o()(l && T.withHover, a),
        iconSize: n,
        isCardHovered: c,
        nuxGraphic: E,
    });
};
function w(e) {
    let {
            skuId: t,
            className: a,
            iconSize: s = 20,
            disabled: m,
            isCardHovered: h,
            tooltipOverrideText: y,
            nuxGraphic: O,
            onClick: v,
        } = e,
        [A, N] = (0, p.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        R = A === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: w } = (0, d.ZP)(),
        D = b.default.getCurrentUser(),
        x = null != D ? _.Z.getFirstWishlistId(D.id) : null,
        L = (0, E.ny)(x, t),
        j = i.useRef(null),
        [M, k] = i.useState(null);
    i.useEffect(() => {
        k(null);
    }, [t]);
    let U = null !== M ? M : L,
        G = (0, f.X)(j),
        Z = U ? u.h_8 : u.Pzh,
        B = U || G ? T.wishlistedOrHoveredIconColor : T.normalIconColor,
        F = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), null == v || v(), U && null != x)) {
                    k(!1);
                    try {
                        await g.Z.removeSkuFromWishlist(x, t, w), k(null);
                    } catch (e) {
                        k(null),
                            (0, u.showToast)((0, u.createToast)(I.intl.string(I.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(I.intl.string(I.t.F8FvUy));
                    }
                } else {
                    k(!0);
                    try {
                        await g.Z.addSkuToWishlist(t, w),
                            k(null),
                            R &&
                                null != O &&
                                ((0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("36340").then(n.bind(n, 874533));
                                    return (t) => (0, r.jsx)(e, P(C({}, t), { graphic: O }));
                                }),
                                N(S.L.USER_DISMISS));
                    } catch (e) {
                        k(null),
                            (0, u.showToast)((0, u.createToast)(I.intl.string(I.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(I.intl.string(I.t.F8FvUy));
                    }
                }
            },
            [U, x, t, w, R, O, N, v],
        ),
        V = U ? I.intl.string(I.t.yr9TTf) : I.intl.string(I.t["8DkMEQ"]);
    return (h || U) && null != D
        ? m
            ? (0, r.jsx)(c.u, {
                  text: null != y ? y : V,
                  "aria-label": null != y ? y : V,
                  children: (0, r.jsx)(u.P3F, {
                      className: o()(T.wishlistButton, T.disabledButton, a),
                      innerRef: j,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(Z, {
                          colorClass: T.disabledIconColor,
                          size: "custom",
                          height: s,
                          width: s,
                      }),
                  }),
              })
            : R
              ? (0, r.jsx)(c.i_, {
                    title: I.intl.string(I.t["47Rhc3"]),
                    body: I.intl.string(I.t.PXjA0b),
                    "aria-label": V,
                    children: (0, r.jsx)(u.P3F, {
                        className: o()(T.wishlistButton, a),
                        innerRef: j,
                        onClick: F,
                        "aria-label": V,
                        children: (0, r.jsx)(Z, {
                            colorClass: B,
                            size: "custom",
                            height: s,
                            width: s,
                        }),
                    }),
                })
              : (0, r.jsx)(
                    c.u,
                    {
                        text: null != y ? y : V,
                        "aria-label": null != y ? y : V,
                        children: (0, r.jsx)(u.P3F, {
                            className: o()(T.wishlistButton, a),
                            innerRef: j,
                            onClick: F,
                            "aria-label": V,
                            children: (0, r.jsx)(Z, {
                                colorClass: B,
                                size: "custom",
                                height: s,
                                width: s,
                            }),
                        }),
                    },
                    "wishlist-button-hovering-".concat(h),
                )
        : null;
}
