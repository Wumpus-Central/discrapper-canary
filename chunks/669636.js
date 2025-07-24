(n.r(t), n.d(t, { default: () => A }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(42133),
    l = n(278074),
    c = n(979554),
    u = n(399606),
    d = n(481060),
    _ = n(876917),
    f = n(594174),
    p = n(508925),
    h = n(616066),
    m = n(216541),
    g = n(22267),
    E = n(302800),
    b = n(854402);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            a = null == n ? void 0 : n.items[0],
            s = (0, u.e7)([f.default], () => {
                let e = f.default.getCurrentUser();
                return (o()(null != e, 'User cannot be undefined'), e);
            });
        return (0, l.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: b.profileEffectShopPreview,
                    children: (0, r.jsx)(_.Z, {
                        forCollectedModal: !0,
                        profileEffectId: i.id
                    })
                })
            )
            .with(c.Z.AVATAR_DECORATION, () =>
                (o()(i.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'), null != a && a.type === c.Z.AVATAR_DECORATION)
                    ? (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: b.avatarDecorationPairOne,
                                  children: (0, r.jsx)(h.R, {
                                      item: i,
                                      user: s,
                                      avatarSize: d.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: b.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(h.R, {
                                      item: a,
                                      avatarSize: d.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: b.avatarDecoration,
                          children: (0, r.jsx)(h.R, {
                              item: i,
                              user: s,
                              avatarSize: d.EFr.SIZE_120,
                              isPurchased: !1,
                              isHighlighted: !0
                          })
                      })
            )
            .with(c.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    className: b.nameplate,
                    children: (0, r.jsx)(g.Z, {
                        nameplate: i,
                        user: s,
                        nameplatePreviewSize: 'xlarge',
                        isHighlighted: !0
                    })
                })
            )
            .with(c.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: b.bundlePreview,
                    children: (0, r.jsx)(m.d, {
                        product: t,
                        user: s,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: b.bundleProfileEffectCard
                    })
                })
            )
            .with(c.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: b.avatarDecoration,
                    children: (0, r.jsx)(p.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    S = (e) => {
        let { reducedMotion: t, displayOptions: n } = e,
            [a, o] = i.useState(!1),
            l = (0, d.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => o(!0), 100)
            }),
            c = (0, d.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                reverse: a
            }),
            u = (0, d.q_F)(
                {
                    from: {
                        transform: 'translateX(50%)',
                        right: '50%',
                        opacity: 1
                    },
                    to: {
                        transform: 'translateX(50%)',
                        right: '50%',
                        opacity: 0
                    },
                    config: { duration: 300 },
                    delay: 600
                },
                'animate-always'
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.animated.div, {
                    className: b.easterEggContainer,
                    style: l,
                    children: (0, r.jsx)(T, O({}, e))
                }),
                (0, r.jsx)(s.animated.div, {
                    className: b.easterEggContainer,
                    style: t ? u : c,
                    children: (0, r.jsx)('img', {
                        src: n.getSrc(),
                        style: n.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    };
function A(e) {
    let t = (0, E.v)(e.product.categorySkuId);
    return null != t ? (0, r.jsx)(S, I(O({}, e), { displayOptions: t })) : (0, r.jsx)(T, O({}, e));
}
