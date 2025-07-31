(r.r(t), r.d(t, { default: () => A }), r(388685), r(314940));
var a = r(255367),
    n = r(73800),
    i = r(512722),
    s = r.n(i),
    o = r(66546),
    l = r(278074),
    c = r(979554),
    d = r(314794),
    u = r(399606),
    f = r(481060),
    v = r(47280),
    p = r(876917),
    h = r(594174),
    m = r(508925),
    g = r(616066),
    y = r(216541),
    P = r(22267),
    b = r(302800),
    w = r(388032),
    O = r(182685),
    j = r(593639),
    _ = r(945182),
    E = r(234286);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                ((a = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a));
            }));
    }
    return e;
}
let C = (e) => {
        let { product: t, pairedProduct: r, itemConsumed: n } = e,
            [i] = t.items,
            o = null == r ? void 0 : r.items[0],
            b = (0, u.e7)([h.default], () => {
                let e = h.default.getCurrentUser();
                return (s()(null != e, 'User cannot be undefined'), e);
            }),
            x = Object.values(d.a).includes(t.skuId),
            C = (0, v.Z)({ location: 'CollectiblesProductPreview' });
        return (0, l.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, a.jsx)('div', {
                    className: O.profileEffectShopPreview,
                    children: (0, a.jsx)(p.Z, {
                        forCollectedModal: !0,
                        profileEffectId: i.id
                    })
                })
            )
            .with(c.Z.AVATAR_DECORATION, () =>
                (s()(i.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'), null != o && o.type === c.Z.AVATAR_DECORATION)
                    ? (0, a.jsxs)('div', {
                          children: [
                              (0, a.jsx)('div', {
                                  className: O.avatarDecorationPairOne,
                                  children: (0, a.jsx)(g.R, {
                                      item: i,
                                      user: b,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, a.jsx)('div', {
                                  className: O.avatarDecorationPairTwo,
                                  children: (0, a.jsx)(g.R, {
                                      item: o,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, a.jsx)(g.R, {
                          item: i,
                          user: b,
                          avatarSize: f.EFr.SIZE_120,
                          isPurchased: !1,
                          isHighlighted: !0
                      })
            )
            .with(c.Z.NAMEPLATE, () =>
                (0, a.jsx)('div', {
                    className: O.nameplate,
                    children: (0, a.jsx)(P.Z, {
                        nameplate: i,
                        user: b,
                        nameplatePreviewSize: 'large',
                        isHighlighted: !0
                    })
                })
            )
            .with(c.Z.BUNDLE, () =>
                (0, a.jsx)('div', {
                    className: O.bundlePreview,
                    children: (0, a.jsx)(y.d, {
                        containerClassName: O.bundlePreviewContainer,
                        product: t,
                        user: b,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: O.bundleProfileEffectCard,
                        avatarDecorationClassName: O.bundleAvatarDecorationCard
                    })
                })
            )
            .with(c.Z.EXTERNAL_SKU, () => {
                if (x)
                    if (n)
                        return (0, a.jsx)('img', {
                            src: C ? E : _,
                            alt: w.intl.string(w.t['Q+BB29']),
                            style: { width: '100%' }
                        });
                    else
                        return (0, a.jsx)('img', {
                            src: j,
                            alt: w.intl.string(w.t['+PHEo6'])
                        });
                return (0, a.jsx)(m.b, { product: t });
            })
            .otherwise(() => null);
    },
    S = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [i, s] = n.useState(!1),
            l = (0, f.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => s(!0), 100)
            }),
            c = (0, f.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                reverse: i
            }),
            d = (0, f.q_F)(
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
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(o.animated.div, {
                    className: O.easterEggContainer,
                    style: l,
                    children: (0, a.jsx)(C, x({}, e))
                }),
                (0, a.jsx)(o.animated.div, {
                    className: O.easterEggContainer,
                    style: t ? d : c,
                    children: (0, a.jsx)('img', {
                        src: r.getSrc(),
                        style: r.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    };
function A(e) {
    var t, r;
    let n = (0, b.v)(e.product.categorySkuId);
    return null != n
        ? (0, a.jsx)(
              S,
              ((t = x({}, e)),
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
              t)
          )
        : (0, a.jsx)(C, x({}, e));
}
