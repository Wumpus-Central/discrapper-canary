r.r(t), r.d(t, { default: () => k }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(512722),
    s = r.n(i),
    l = r(81239),
    o = r(979554),
    c = r(314794),
    u = r(399606),
    f = r(481060),
    d = r(566697),
    p = r(283066),
    g = r(876917),
    b = r(594174),
    m = r(508925),
    y = r(616066),
    h = r(216541),
    j = r(302800),
    v = r(388032),
    O = r(904734),
    P = r(593639),
    w = r(945182),
    x = r(234286);
function E(e) {
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
let S = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: a } = e,
            [i] = t.items,
            l = (0, u.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return s()(null != e, "User cannot be undefined"), e;
            }),
            j = Object.values(c.a).includes(t.skuId),
            E = (0, p.Z)({ location: "CollectiblesProductPreview" });
        if (t.type === o.Z.PROFILE_EFFECT)
            return (0, n.jsx)("div", {
                className: O.profileEffectShopPreview,
                children: (0, n.jsx)(g.Z, {
                    skuId: i.skuId,
                    delayProfileEffectIntro: a,
                    withScaleAnimation: a,
                }),
            });
        if (t.type === o.Z.AVATAR_DECORATION)
            return (0, n.jsx)(y.R, {
                item: i,
                user: l,
                avatarSize: f.EFr.SIZE_120,
                isHighlighted: !0,
            });
        if (t.type === o.Z.NAMEPLATE)
            return (0, n.jsx)("div", {
                className: O.nameplate,
                children: (0, n.jsx)(d.Z, {
                    nameplate: i,
                    user: l,
                    nameplatePreviewSize: "large",
                    isHighlighted: !0,
                }),
            });
        if (t.type === o.Z.BUNDLE)
            return (0, n.jsx)("div", {
                className: O.bundlePreview,
                children: (0, n.jsx)(h.d, {
                    product: t,
                    user: l,
                    isHighlighted: !0,
                    forCollectedModal: a,
                }),
            });
        if (t.type === o.Z.EXTERNAL_SKU) {
            if (j)
                if (r)
                    return (0, n.jsx)("img", {
                        src: E ? x : w,
                        alt: v.intl.string(v.t.t0xkSB),
                        style: { width: "100%" },
                    });
                else
                    return (0, n.jsx)("img", {
                        src: P,
                        alt: v.intl.string(v.t.g5W1g8),
                    });
            return (0, n.jsx)(m.b, { product: t });
        }
        return null;
    },
    _ = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [i, s] = a.useState(!1),
            o = (0, f.q_F)({
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
            c = (0, f.q_F)({
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
            u = (0, f.q_F)(
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
                    children: (0, n.jsx)(S, E({}, e)),
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
function k(e) {
    var t, r;
    let a = (0, j.v)(e.product.categorySkuId);
    return null != a
        ? (0, n.jsx)(
              _,
              ((t = E({}, e)),
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
        : (0, n.jsx)(S, E({}, e));
}
