r.r(t), r.d(t, { default: () => D }), r(388685), r(314940);
var a = r(951288),
    n = r(647438),
    i = r(512722),
    l = r.n(i),
    o = r(137317),
    s = r(278074),
    c = r(979554),
    d = r(314794),
    u = r(399606),
    f = r(481060),
    p = r(47280),
    v = r(876917),
    h = r(594174),
    m = r(508925),
    g = r(616066),
    P = r(216541),
    w = r(22267),
    y = r(302800),
    b = r(388032),
    _ = r(186175),
    j = r(593639),
    O = r(945182),
    E = r(234286);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let x = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: n } = e,
            [i] = t.items,
            o = (0, u.e7)([h.default], () => {
                let e = h.default.getCurrentUser();
                return l()(null != e, "User cannot be undefined"), e;
            }),
            y = Object.values(d.a).includes(t.skuId),
            C = (0, p.ZP)({ location: "CollectiblesProductPreview" });
        return (0, s.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, a.jsx)("div", {
                    className: _.profileEffectShopPreview,
                    children: (0, a.jsx)(v.Z, {
                        forCollectedModal: !0,
                        profileEffectId: i.id,
                    }),
                }),
            )
            .with(c.Z.AVATAR_DECORATION, () =>
                (0, a.jsx)(g.R, {
                    item: i,
                    user: o,
                    avatarSize: f.EFr.SIZE_120,
                    isPurchased: !1,
                    isHighlighted: !0,
                }),
            )
            .with(c.Z.NAMEPLATE, () =>
                (0, a.jsx)("div", {
                    className: _.nameplate,
                    children: (0, a.jsx)(w.Z, {
                        nameplate: i,
                        user: o,
                        nameplatePreviewSize: "large",
                        isHighlighted: !0,
                    }),
                }),
            )
            .with(c.Z.BUNDLE, () =>
                (0, a.jsx)("div", {
                    className: _.bundlePreview,
                    children: (0, a.jsx)(P.d, {
                        containerClassName: _.bundlePreviewContainer,
                        product: t,
                        user: o,
                        isPurchased: !1,
                        isHighlighted: !0,
                        forCollectedModal: n,
                    }),
                }),
            )
            .with(c.Z.EXTERNAL_SKU, () => {
                if (y)
                    if (r)
                        return (0, a.jsx)("img", {
                            src: C ? E : O,
                            alt: b.intl.string(b.t.t0xkSE),
                            style: { width: "100%" },
                        });
                    else
                        return (0, a.jsx)("img", {
                            src: j,
                            alt: b.intl.string(b.t.g5W1g4),
                        });
                return (0, a.jsx)(m.b, { product: t });
            })
            .otherwise(() => null);
    },
    S = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [i, l] = n.useState(!1),
            s = (0, f.q_F)({
                from: {
                    transform: "translateX(100%)",
                    right: "-100%",
                },
                to: {
                    transform: "translateX(50%)",
                    right: "50%",
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => l(!0), 100),
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
            d = (0, f.q_F)(
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
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(o.animated.div, {
                    className: _.easterEggContainer,
                    style: s,
                    children: (0, a.jsx)(x, C({}, e)),
                }),
                (0, a.jsx)(o.animated.div, {
                    className: _.easterEggContainer,
                    style: t ? d : c,
                    children: (0, a.jsx)("img", {
                        src: r.getSrc(),
                        style: r.style,
                        alt: "",
                        "aria-hidden": "true",
                    }),
                }),
            ],
        });
    };
function D(e) {
    var t, r;
    let n = (0, y.v)(e.product.categorySkuId);
    return null != n
        ? (0, a.jsx)(
              S,
              ((t = C({}, e)),
              (r = r = { displayOptions: n }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, a);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          )
        : (0, a.jsx)(x, C({}, e));
}
