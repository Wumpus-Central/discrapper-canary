n.d(t, {
    R: () => C,
    _: () => N,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(554146),
    c = n(435371),
    u = n(397927),
    d = n(688810),
    f = n(713517),
    p = n(379848),
    _ = n(622543),
    h = n(661492),
    m = n(808247),
    g = n(594832),
    E = n(287809),
    b = n(466459),
    y = n(49999),
    O = n(985018),
    A = n(394236);

function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
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
            return t.type === o.R.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? void 0 : e[d]) != null
                ? t.variants[d]
                : t;
        }, [t, d]),
        p = f.skuId,
        { isPurchased: _ } = (0, b.h)(f),
        m = i.useMemo(() => {
            let e = "6/4";
            switch (t.type) {
                case o.R.NAMEPLATE:
                case o.R.AVATAR_DECORATION:
                    e = "16/9";
                    break;
                case o.R.BUNDLE:
                case o.R.PROFILE_EFFECT:
                default:
                    e = "6/4";
            }
            return {
                type: "dynamic",
                component: u.Oz7.COLLECTIBLES_PREVIEW,
                aspectRatio: e,
                props: {
                    product: t,
                    forCollectedModal: !0,
                },
            };
        }, [t]);
    return _
        ? null
        : (0, h.q)(f)
          ? (0, r.jsx)(N, {
                skuId: p,
                className: s()(l && A.FU, a),
                iconSize: n,
                isCardHovered: c,
                nuxGraphic: m,
            })
          : (0, r.jsx)(N, {
                skuId: p,
                className: s()(A.NY, a),
                iconSize: n,
                isCardHovered: c,
                disabled: !0,
                tooltipOverrideText: O.intl.string(O.t["50TX9k"]),
                nuxGraphic: m,
            });
};

function N(e) {
    let {
            skuId: t,
            className: a,
            iconSize: o = 20,
            disabled: h,
            isCardHovered: b,
            tooltipOverrideText: v,
            nuxGraphic: I,
            onClick: C,
        } = e,
        [N, R] = (0, p.kn)([l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        w = N === l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { analyticsLocations: P } = (0, d.Ay)(),
        D = E.default.getCurrentUser(),
        x = null != D ? _.A.getFirstWishlistId(D.id) : null,
        L = (0, g.rJ)(x, t),
        j = i.useRef(null),
        [M, k] = i.useState(null);
    i.useEffect(() => {
        k(null);
    }, [t]);
    let U = null !== M ? M : L,
        G = (0, f.M)(j),
        V = U ? u.C3E : u.yhu,
        F = U || G ? A.Pc : A.i7,
        B = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), null == C || C(), U && null != x)) {
                    k(!1);
                    try {
                        await m.A.removeSkuFromWishlist(x, t, P), k(null);
                    } catch (e) {
                        k(null),
                            (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)),
                            u.ORC.announce(O.intl.string(O.t.F8FvUy));
                    }
                } else {
                    k(!0);
                    try {
                        await m.A.addSkuToWishlist(t, P),
                            k(null),
                            w &&
                                null != I &&
                                ((0, u.mMO)(async () => {
                                    let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            T(S({}, t), {
                                                graphic: I,
                                            }),
                                        );
                                }),
                                R(y.i.USER_DISMISS));
                    } catch (e) {
                        k(null),
                            (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)),
                            u.ORC.announce(O.intl.string(O.t.F8FvUy));
                    }
                }
            },
            [U, x, t, P, w, I, R, C],
        ),
        H = U ? O.intl.string(O.t.yr9TTf) : O.intl.string(O.t["8DkMEQ"]);
    return (b || U) && null != D
        ? h
            ? (0, r.jsx)(c.m_, {
                  text: null != v ? v : H,
                  "aria-label": null != v ? v : H,
                  children: (0, r.jsx)(u.DUT, {
                      className: s()(A.ij, A.NY, a),
                      innerRef: j,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(V, {
                          colorClass: A.rM,
                          size: "custom",
                          height: o,
                          width: o,
                      }),
                  }),
              })
            : w
              ? (0, r.jsx)(c.un, {
                    title: O.intl.string(O.t["47Rhc3"]),
                    body: O.intl.string(O.t.PXjA0b),
                    "aria-label": H,
                    children: (0, r.jsx)(u.DUT, {
                        className: s()(A.ij, a),
                        innerRef: j,
                        onClick: B,
                        "aria-label": H,
                        children: (0, r.jsx)(V, {
                            colorClass: F,
                            size: "custom",
                            height: o,
                            width: o,
                        }),
                    }),
                })
              : (0, r.jsx)(
                    c.m_,
                    {
                        text: null != v ? v : H,
                        "aria-label": null != v ? v : H,
                        children: (0, r.jsx)(u.DUT, {
                            className: s()(A.ij, a),
                            innerRef: j,
                            onClick: B,
                            "aria-label": H,
                            children: (0, r.jsx)(V, {
                                colorClass: F,
                                size: "custom",
                                height: o,
                                width: o,
                            }),
                        }),
                    },
                    "wishlist-button-hovering-".concat(b),
                )
        : null;
}
