r.r(t), r.d(t, { default: () => D }), r(388685), r(314940);
var a = r(951288),
    i = r(647438),
    n = r(512722),
    l = r.n(n),
    o = r(6383),
    s = r(278074),
    c = r(979554),
    d = r(314794),
    u = r(399606),
    v = r(481060),
    f = r(47280),
    p = r(876917),
    h = r(594174),
    m = r(508925),
    P = r(616066),
    g = r(216541),
    w = r(22267),
    y = r(302800),
    b = r(388032),
    _ = r(186175),
    O = r(593639),
    j = r(945182),
    E = r(234286);
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
            y = null == r ? void 0 : r.items[0],
            x = (0, u.e7)([h.default], () => {
                let e = h.default.getCurrentUser();
                return l()(null != e, "User cannot be undefined"), e;
            }),
            S = Object.values(d.a).includes(t.skuId),
            C = (0, f.ZP)({ location: "CollectiblesProductPreview" });
        return (0, s.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, a.jsx)("div", {
                    className: _.profileEffectShopPreview,
                    children: (0, a.jsx)(p.Z, {
                        forCollectedModal: !0,
                        profileEffectId: o.id,
                    }),
                }),
            )
            .with(c.Z.AVATAR_DECORATION, () =>
                (l()(o.type === c.Z.AVATAR_DECORATION, "ts-match already checked the type"),
                null != y && y.type === c.Z.AVATAR_DECORATION)
                    ? (0, a.jsxs)("div", {
                          children: [
                              (0, a.jsx)("div", {
                                  className: _.avatarDecorationPairOne,
                                  children: (0, a.jsx)(P.R, {
                                      item: o,
                                      user: x,
                                      avatarSize: v.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0,
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: _.avatarDecorationPairTwo,
                                  children: (0, a.jsx)(P.R, {
                                      item: y,
                                      avatarSize: v.EFr.SIZE_120,
                                      isPurchased: !1,
                                  }),
                              }),
                          ],
                      })
                    : (0, a.jsx)(P.R, {
                          item: o,
                          user: x,
                          avatarSize: v.EFr.SIZE_120,
                          isPurchased: !1,
                          isHighlighted: !0,
                      }),
            )
            .with(c.Z.NAMEPLATE, () =>
                (0, a.jsx)("div", {
                    className: _.nameplate,
                    children: (0, a.jsx)(w.Z, {
                        nameplate: o,
                        user: x,
                        nameplatePreviewSize: "large",
                        isHighlighted: !0,
                    }),
                }),
            )
            .with(c.Z.BUNDLE, () =>
                (0, a.jsx)("div", {
                    className: _.bundlePreview,
                    children: (0, a.jsx)(g.d, {
                        containerClassName: _.bundlePreviewContainer,
                        product: t,
                        user: x,
                        isPurchased: !1,
                        isHighlighted: !0,
                        forCollectedModal: n,
                    }),
                }),
            )
            .with(c.Z.EXTERNAL_SKU, () => {
                if (S)
                    if (i)
                        return (0, a.jsx)("img", {
                            src: C ? E : j,
                            alt: b.intl.string(b.t.t0xkSE),
                            style: { width: "100%" },
                        });
                    else
                        return (0, a.jsx)("img", {
                            src: O,
                            alt: b.intl.string(b.t.g5W1g4),
                        });
                return (0, a.jsx)(m.b, { product: t });
            })
            .otherwise(() => null);
    },
    C = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [n, l] = i.useState(!1),
            s = (0, v.q_F)({
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
            c = (0, v.q_F)({
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
            d = (0, v.q_F)(
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
                    children: (0, a.jsx)(S, x({}, e)),
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
    let i = (0, y.v)(e.product.categorySkuId);
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
