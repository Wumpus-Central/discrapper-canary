n.d(t, {
    a: () => N,
    s: () => R,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    h = n(277511),
    m = n(602733),
    g = n(594174),
    E = n(884697),
    b = n(724994),
    y = n(27123),
    O = n(921944),
    v = n(388032),
    I = n(890088);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => {
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
        { isPurchased: p } = (0, b.L)(f),
        h = (0, y.r1)(f),
        m = (0, E.x6)(f),
        g = (0, E.G1)(f),
        O = h || m || g,
        T = i.useMemo(() => {
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
    if (O) {
        let e = v.intl.string(v.t["50TX9k"]);
        return (
            m ? (e = v.intl.string(v.t.UfDp3L)) : h && (e = v.intl.string(v.t.KsFBMs)),
            (0, r.jsx)(R, {
                skuId: _,
                className: o()(I.disabledButton, a),
                iconSize: n,
                isCardHovered: c,
                disabled: !0,
                tooltipOverrideText: e,
                nuxGraphic: T,
            })
        );
    }
    return (0, r.jsx)(R, {
        skuId: _,
        className: o()(l && I.withHover, a),
        iconSize: n,
        isCardHovered: c,
        nuxGraphic: T,
    });
};
function R(e) {
    let {
            skuId: t,
            className: a,
            iconSize: s = 20,
            disabled: E,
            isCardHovered: b,
            tooltipOverrideText: y,
            nuxGraphic: T,
        } = e,
        [A, N] = (0, _.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        R = A === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: P } = (0, d.ZP)(),
        D = g.default.getCurrentUser(),
        w = null != D ? p.Z.getFirstWishlistId(D.id) : null,
        x = (0, m.ny)(w, t),
        L = i.useRef(null),
        [M, j] = i.useState(null);
    i.useEffect(() => {
        j(null);
    }, [t]);
    let k = null !== M ? M : x,
        U = (0, f.X)(L),
        G = k ? u.h_8 : u.Pzh,
        B = k || U ? I.wishlistedOrHoveredIconColor : I.normalIconColor,
        Z = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), k && null != w)) {
                    j(!1);
                    try {
                        await h.Z.removeSkuFromWishlist(w, t, P), j(null);
                    } catch (e) {
                        j(null),
                            (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(v.intl.string(v.t.F8FvUy));
                    }
                } else {
                    j(!0);
                    try {
                        await h.Z.addSkuToWishlist(t, P),
                            j(null),
                            R &&
                                null != T &&
                                ((0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("36340").then(n.bind(n, 874533));
                                    return (t) => (0, r.jsx)(e, C(S({}, t), { graphic: T }));
                                }),
                                N(O.L.USER_DISMISS));
                    } catch (e) {
                        j(null),
                            (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.F8FvUy), u.ToastType.FAILURE)),
                            u.uvj.announce(v.intl.string(v.t.F8FvUy));
                    }
                }
            },
            [k, w, t, P, R, T, N],
        ),
        F = k ? v.intl.string(v.t.yr9TTf) : v.intl.string(v.t["8DkMEQ"]);
    return (b || k) && null != D
        ? E
            ? (0, r.jsx)(c.u, {
                  text: null != y ? y : F,
                  "aria-label": null != y ? y : F,
                  children: (0, r.jsx)(u.P3F, {
                      className: o()(I.wishlistButton, I.disabledButton, a),
                      innerRef: L,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(G, {
                          colorClass: I.disabledIconColor,
                          size: "custom",
                          height: s,
                          width: s,
                      }),
                  }),
              })
            : R
              ? (0, r.jsx)(c.i_, {
                    title: v.intl.string(v.t["47Rhc3"]),
                    body: v.intl.string(v.t.PXjA0b),
                    "aria-label": F,
                    children: (0, r.jsx)(u.P3F, {
                        className: o()(I.wishlistButton, a),
                        innerRef: L,
                        onClick: Z,
                        "aria-label": F,
                        children: (0, r.jsx)(G, {
                            colorClass: B,
                            size: "custom",
                            height: s,
                            width: s,
                        }),
                    }),
                })
              : (0, r.jsx)(c.u, {
                    text: null != y ? y : F,
                    "aria-label": null != y ? y : F,
                    children: (0, r.jsx)(u.P3F, {
                        className: o()(I.wishlistButton, a),
                        innerRef: L,
                        onClick: Z,
                        "aria-label": F,
                        children: (0, r.jsx)(G, {
                            colorClass: B,
                            size: "custom",
                            height: s,
                            width: s,
                        }),
                    }),
                })
        : null;
}
