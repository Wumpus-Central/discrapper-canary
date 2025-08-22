r.r(t), r.d(t, { default: () => A }), r(388685), r(314940);
var a = r(951288),
    i = r(647438),
    n = r(512722),
    s = r.n(n),
    o = r(202841),
    c = r(278074),
    l = r(979554),
    d = r(314794),
    u = r(399606),
    f = r(481060),
    h = r(47280),
    p = r(876917),
    g = r(594174),
    m = r(508925),
    v = r(616066),
    j = r(216541),
    P = r(22267),
    b = r(302800),
    y = r(388032),
    O = r(186175),
    w = r(593639),
    E = r(945182),
    _ = r(234286);
function x(e) {
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
let S = (e) => {
        let { product: t, pairedProduct: r, itemConsumed: i, forCollectedModal: n } = e,
            [o] = t.items,
            b = null == r ? void 0 : r.items[0],
            x = (0, u.e7)([g.default], () => {
                let e = g.default.getCurrentUser();
                return s()(null != e, "User cannot be undefined"), e;
            }),
            S = Object.values(d.a).includes(t.skuId),
            C = (0, h.ZP)({ location: "CollectiblesProductPreview" });
        return (0, c.EQ)(t.type)
            .with(l.Z.PROFILE_EFFECT, () =>
                (0, a.jsx)("div", {
                    className: O.profileEffectShopPreview,
                    children: (0, a.jsx)(p.Z, {
                        forCollectedModal: !0,
                        profileEffectId: o.id,
                    }),
                }),
            )
            .with(l.Z.AVATAR_DECORATION, () =>
                (s()(o.type === l.Z.AVATAR_DECORATION, "ts-match already checked the type"),
                null != b && b.type === l.Z.AVATAR_DECORATION)
                    ? (0, a.jsxs)("div", {
                          children: [
                              (0, a.jsx)("div", {
                                  className: O.avatarDecorationPairOne,
                                  children: (0, a.jsx)(v.R, {
                                      item: o,
                                      user: x,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0,
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: O.avatarDecorationPairTwo,
                                  children: (0, a.jsx)(v.R, {
                                      item: b,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1,
                                  }),
                              }),
                          ],
                      })
                    : (0, a.jsx)(v.R, {
                          item: o,
                          user: x,
                          avatarSize: f.EFr.SIZE_120,
                          isPurchased: !1,
                          isHighlighted: !0,
                      }),
            )
            .with(l.Z.NAMEPLATE, () =>
                (0, a.jsx)("div", {
                    className: O.nameplate,
                    children: (0, a.jsx)(P.Z, {
                        nameplate: o,
                        user: x,
                        nameplatePreviewSize: "large",
                        isHighlighted: !0,
                    }),
                }),
            )
            .with(l.Z.BUNDLE, () =>
                (0, a.jsx)("div", {
                    className: O.bundlePreview,
                    children: (0, a.jsx)(j.d, {
                        containerClassName: O.bundlePreviewContainer,
                        product: t,
                        user: x,
                        isPurchased: !1,
                        isHighlighted: !0,
                        forCollectedModal: n,
                    }),
                }),
            )
            .with(l.Z.EXTERNAL_SKU, () => {
                if (S)
                    if (i)
                        return (0, a.jsx)("img", {
                            src: C ? _ : E,
                            alt: y.intl.string(y.t.t0xkSE),
                            style: { width: "100%" },
                        });
                    else
                        return (0, a.jsx)("img", {
                            src: w,
                            alt: y.intl.string(y.t.g5W1g4),
                        });
                return (0, a.jsx)(m.b, { product: t });
            })
            .otherwise(() => null);
    },
    C = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [n, s] = i.useState(!1),
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
                onRest: () => setTimeout(() => s(!0), 100),
            }),
            l = (0, f.q_F)({
                from: {
                    transform: "translateX(100%)",
                    right: "-100%",
                },
                to: {
                    transform: "translateX(50%)",
                    right: "50%",
                },
                config: { duration: 1550 },
                reverse: n,
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
                    className: O.easterEggContainer,
                    style: c,
                    children: (0, a.jsx)(S, x({}, e)),
                }),
                (0, a.jsx)(o.animated.div, {
                    className: O.easterEggContainer,
                    style: t ? d : l,
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
function A(e) {
    var t, r;
    let i = (0, b.v)(e.product.categorySkuId);
    return null != i
        ? (0, a.jsx)(
              C,
              ((t = x({}, e)),
              (r = r = { displayOptions: i }),
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
        : (0, a.jsx)(S, x({}, e));
}
