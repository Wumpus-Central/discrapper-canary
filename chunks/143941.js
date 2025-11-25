n.d(t, {
    a: () => P,
    s: () => D,
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
    _ = n(243778),
    p = n(621853),
    h = n(285980),
    m = n(511107),
    g = n(277511),
    E = n(602733),
    b = n(594174),
    y = n(884697),
    O = n(724994),
    v = n(27123),
    I = n(921944),
    T = n(388032),
    S = n(890088);
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
function R(e, t) {
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
let P = (e) => {
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
        _ = f.skuId,
        { isPurchased: p } = (0, O.L)(f),
        g = (0, h.$)({ location: "WishlistButton" }),
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
    if (p) return null;
    if (!(0, m.p)(f, g)) {
        let e = T.intl.string(T.t["50TX9k"]);
        return (
            (0, y.x6)(f) ? (e = T.intl.string(T.t.UfDp3L)) : (0, v.r1)(f) && !g && (e = T.intl.string(T.t.KsFBMs)),
            (0, r.jsx)(D, {
                skuId: _,
                className: o()(S.disabledButton, a),
                iconSize: n,
                isCardHovered: c,
                disabled: !0,
                tooltipOverrideText: e,
                nuxGraphic: E,
            })
        );
    }
    return (0, r.jsx)(D, {
        skuId: _,
        className: o()(l && S.withHover, a),
        iconSize: n,
        isCardHovered: c,
        nuxGraphic: E,
    });
};
function D(e) {
    let {
            skuId: t,
            className: a,
            iconSize: s = 20,
            disabled: h,
            isCardHovered: m,
            tooltipOverrideText: y,
            nuxGraphic: O,
            onClick: v,
        } = e,
        [A, N] = (0, _.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        P = A === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: D } = (0, d.ZP)(),
        w = b.default.getCurrentUser(),
        L = null != w ? p.Z.getFirstWishlistId(w.id) : null,
        x = (0, E.ny)(L, t),
        M = i.useRef(null),
        [k, j] = i.useState(null);
    i.useEffect(() => {
        j(null);
    }, [t]);
    let U = null !== k ? k : x,
        G = (0, f.X)(M),
        B = U ? u.h_8 : u.Pzh,
        Z = U || G ? S.wishlistedOrHoveredIconColor : S.normalIconColor,
        F = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), null == v || v(), U && null != L)) {
                    j(!1);
                    try {
                        await g.Z.removeSkuFromWishlist(L, t, D), j(null);
                    } catch (e) {
                        j(null),
                            (0, u.showToast)((0, u.createToast)(T.intl.string(T.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(T.intl.string(T.t.F8FvUy));
                    }
                } else {
                    j(!0);
                    try {
                        await g.Z.addSkuToWishlist(t, D),
                            j(null),
                            P &&
                                null != O &&
                                ((0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("36340").then(n.bind(n, 874533));
                                    return (t) => (0, r.jsx)(e, R(C({}, t), { graphic: O }));
                                }),
                                N(I.L.USER_DISMISS));
                    } catch (e) {
                        j(null),
                            (0, u.showToast)((0, u.createToast)(T.intl.string(T.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(T.intl.string(T.t.F8FvUy));
                    }
                }
            },
            [U, L, t, D, P, O, N, v],
        ),
        V = U ? T.intl.string(T.t.yr9TTf) : T.intl.string(T.t["8DkMEQ"]);
    return (m || U) && null != w
        ? h
            ? (0, r.jsx)(c.u, {
                  text: null != y ? y : V,
                  "aria-label": null != y ? y : V,
                  children: (0, r.jsx)(u.P3F, {
                      className: o()(S.wishlistButton, S.disabledButton, a),
                      innerRef: M,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(B, {
                          colorClass: S.disabledIconColor,
                          size: "custom",
                          height: s,
                          width: s,
                      }),
                  }),
              })
            : P
              ? (0, r.jsx)(c.i_, {
                    title: T.intl.string(T.t["47Rhc3"]),
                    body: T.intl.string(T.t.PXjA0b),
                    "aria-label": V,
                    children: (0, r.jsx)(u.P3F, {
                        className: o()(S.wishlistButton, a),
                        innerRef: M,
                        onClick: F,
                        "aria-label": V,
                        children: (0, r.jsx)(B, {
                            colorClass: Z,
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
                            className: o()(S.wishlistButton, a),
                            innerRef: M,
                            onClick: F,
                            "aria-label": V,
                            children: (0, r.jsx)(B, {
                                colorClass: Z,
                                size: "custom",
                                height: s,
                                width: s,
                            }),
                        }),
                    },
                    "wishlist-button-hovering-".concat(m),
                )
        : null;
}
