r.r(t), r.d(t, { default: () => C }), r(388685), r(314940);
var n = r(54381),
    a = r(473749),
    i = r(512722),
    s = r.n(i),
    l = r(620792),
    o = r(278074),
    c = r(979554),
    u = r(314794),
    f = r(399606),
    d = r(481060),
    p = r(566697),
    g = r(283066),
    b = r(876917),
    h = r(594174),
    m = r(508925),
    j = r(616066),
    y = r(216541),
    w = r(302800),
    v = r(388032),
    O = r(904734),
    P = r(593639),
    E = r(945182),
    x = r(234286);
function S(e) {
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
let _ = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: a } = e,
            [i] = t.items,
            l = (0, f.e7)([h.default], () => {
                let e = h.default.getCurrentUser();
                return s()(null != e, "User cannot be undefined"), e;
            }),
            w = Object.values(u.a).includes(t.skuId),
            S = (0, g.Z)({ location: "CollectiblesProductPreview" });
        return (0, o.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, n.jsx)("div", {
                    className: O.profileEffectShopPreview,
                    children: (0, n.jsx)(b.Z, {
                        skuId: i.skuId,
                        delayProfileEffectIntro: a,
                        withScaleAnimation: a,
                    }),
                }),
            )
            .with(c.Z.AVATAR_DECORATION, () =>
                (0, n.jsx)(j.R, {
                    item: i,
                    user: l,
                    avatarSize: d.EFr.SIZE_120,
                    isHighlighted: !0,
                }),
            )
            .with(c.Z.NAMEPLATE, () =>
                (0, n.jsx)("div", {
                    className: O.nameplate,
                    children: (0, n.jsx)(p.Z, {
                        nameplate: i,
                        user: l,
                        nameplatePreviewSize: "large",
                        isHighlighted: !0,
                    }),
                }),
            )
            .with(c.Z.BUNDLE, () =>
                (0, n.jsx)("div", {
                    className: O.bundlePreview,
                    children: (0, n.jsx)(y.d, {
                        product: t,
                        user: l,
                        isHighlighted: !0,
                        forCollectedModal: a,
                    }),
                }),
            )
            .with(c.Z.EXTERNAL_SKU, () => {
                if (w)
                    if (r)
                        return (0, n.jsx)("img", {
                            src: S ? x : E,
                            alt: v.intl.string(v.t.t0xkSB),
                            style: { width: "100%" },
                        });
                    else
                        return (0, n.jsx)("img", {
                            src: P,
                            alt: v.intl.string(v.t.g5W1g8),
                        });
                return (0, n.jsx)(m.b, { product: t });
            })
            .otherwise(() => null);
    },
    k = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [i, s] = a.useState(!1),
            o = (0, d.q_F)({
                from: {
                    transform: "translateX(100%)",
                    right: "-100%",
                },
                to: {
                    transform: "translateX(50%)",
                    right: "50%",
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => s(!0), 100),
            }),
            c = (0, d.q_F)({
                from: {
                    transform: "translateX(100%)",
                    right: "-100%",
                },
                to: {
                    transform: "translateX(50%)",
                    right: "50%",
                },
                config: { duration: 1550 },
                reverse: i,
            }),
            u = (0, d.q_F)(
                {
                    from: {
                        transform: "translateX(50%)",
                        right: "50%",
                        opacity: 1,
                    },
                    to: {
                        transform: "translateX(50%)",
                        right: "50%",
                        opacity: 0,
                    },
                    config: { duration: 300 },
                    delay: 600,
                },
                "animate-always",
            );
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.animated.div, {
                    className: O.easterEggContainer,
                    style: o,
                    children: (0, n.jsx)(_, S({}, e)),
                }),
                (0, n.jsx)(l.animated.div, {
                    className: O.easterEggContainer,
                    style: t ? u : c,
                    children: (0, n.jsx)("img", {
                        src: r.getSrc(),
                        style: r.style,
                        alt: "",
                        "aria-hidden": "true",
                    }),
                }),
            ],
        });
    };
function C(e) {
    var t, r;
    let a = (0, w.v)(e.product.categorySkuId);
    return null != a
        ? (0, n.jsx)(
              k,
              ((t = S({}, e)),
              (r = r = { displayOptions: a }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          )
        : (0, n.jsx)(_, S({}, e));
}
