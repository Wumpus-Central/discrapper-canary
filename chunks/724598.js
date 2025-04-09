n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(367907),
    o = n(357352),
    c = n(434404),
    d = n(626135),
    u = n(629481),
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
                    children: (0, r.jsx)(a.Text, {
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
            [g.NW.string(g.t['73h51N']), g.NW.string(g.t['gbjs//'])],
            [g.NW.string(g.t.mCoH0d), g.NW.string(g.t['l/BuSE'])],
            [g.NW.string(g.t.psQktr), g.NW.string(g.t.nMhIZW)],
            [g.NW.string(g.t['0ItLmJ']), g.NW.string(g.t.yQHqsL)]
        ];
    return (0, r.jsx)('div', {
        className: s()({ [p.responsive]: i }),
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
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: g.NW.string(g.t['67arYG'])
                                }),
                                n &&
                                    (0, r.jsxs)(a.gtL, {
                                        size: a.zxk.Sizes.MEDIUM,
                                        className: p.getStartedButton,
                                        innerClassName: p.getStartedButtonContents,
                                        shineSize: a.gtL.ShineSizes.SMALL,
                                        onClick: () => {
                                            var e, n;
                                            d.default.track(
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
                                                })({}, (0, l.hH)(t))),
                                                (n = n = { action_taken: u.mz.GET_STARTED_CLICK }),
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
                                            g.NW.string(g.t.oyzLpK),
                                            (0, r.jsx)(a.ZSh, {
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
