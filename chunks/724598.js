n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(367907),
    o = n(357352),
    c = n(434404),
    u = n(626135),
    d = n(629481),
    m = n(981631),
    g = n(388032),
    p = n(765214);
function f(e) {
    let { pills: t } = e;
    return (0, r.jsx)('div', {
        className: p.row,
        children: t.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: p.pill,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
function h(e) {
    let { guildId: t, showCTA: n, responsive: i = !0 } = e,
        h = [
            [g.intl.string(g.t['73h51N']), g.intl.string(g.t['gbjs//'])],
            [g.intl.string(g.t.mCoH0d), g.intl.string(g.t['l/BuSE'])],
            [g.intl.string(g.t.psQktr), g.intl.string(g.t.nMhIZW)],
            [g.intl.string(g.t['0ItLmJ']), g.intl.string(g.t.yQHqsL)]
        ];
    return (0, r.jsx)('div', {
        className: l()({ [p.responsive]: i }),
        children: (0, r.jsxs)('div', {
            className: p.container,
            children: [
                (0, r.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: p.pillContainer,
                            children: h.map((e, t) => (0, r.jsx)(f, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, r.jsxs)('div', {
                            className: p.ctaContent,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: g.intl.string(g.t['67arYG'])
                                }),
                                n &&
                                    (0, r.jsxs)(s.gtL, {
                                        size: s.zxk.Sizes.MEDIUM,
                                        className: p.getStartedButton,
                                        innerClassName: p.getStartedButtonContents,
                                        shineSize: s.gtL.ShineSizes.SMALL,
                                        onClick: () => {
                                            var e, n;
                                            u.default.track(
                                                m.rMx.GUILD_SHOP_PREVIEW_CLICK,
                                                ((e = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, (0, a.hH)(t))),
                                                (n = n = { action_taken: d.mz.GET_STARTED_CLICK }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                      }),
                                                e)
                                            ),
                                                c.Z.open(t, m.pNK.GUILD_PRODUCTS);
                                        },
                                        children: [
                                            g.intl.string(g.t.oyzLpK),
                                            (0, r.jsx)(s.ZSh, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: p.getStartedArrow
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.muralImageContainer,
                    children: [
                        (0, r.jsx)('img', {
                            src: (0, o.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: p.muralImage
                        }),
                        (0, r.jsx)('img', {
                            src: (0, o.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: p.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
