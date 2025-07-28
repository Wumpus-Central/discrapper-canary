n.d(t, { Z: () => x });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    s = n(481060),
    o = n(367907),
    c = n(357352),
    d = n(434404),
    u = n(626135),
    m = n(629481),
    g = n(981631),
    p = n(388032),
    h = n(765214);
function f(e) {
    let { pills: t } = e;
    return (0, r.jsx)('div', {
        className: h.row,
        children: t.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: h.pill,
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
function x(e) {
    let { guildId: t, showCTA: n, responsive: i = !0 } = e,
        x = [
            [p.intl.string(p.t['73h51N']), p.intl.string(p.t['gbjs//'])],
            [p.intl.string(p.t.mCoH0d), p.intl.string(p.t['l/BuSE'])],
            [p.intl.string(p.t.psQktr), p.intl.string(p.t.nMhIZW)],
            [p.intl.string(p.t['0ItLmJ']), p.intl.string(p.t.yQHqsL)]
        ];
    return (0, r.jsx)('div', {
        className: l()({ [h.responsive]: i }),
        children: (0, r.jsxs)('div', {
            className: h.container,
            children: [
                (0, r.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: h.pillContainer,
                            children: x.map((e, t) => (0, r.jsx)(f, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, r.jsxs)('div', {
                            className: h.ctaContent,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: p.intl.string(p.t['67arYG'])
                                }),
                                n &&
                                    (0, r.jsxs)(s.gtL, {
                                        size: a.zx.Sizes.MEDIUM,
                                        className: h.getStartedButton,
                                        innerClassName: h.getStartedButtonContents,
                                        shineSize: s.gtL.ShineSizes.SMALL,
                                        onClick: () => {
                                            var e, n;
                                            (u.default.track(
                                                g.rMx.GUILD_SHOP_PREVIEW_CLICK,
                                                ((e = (function (e) {
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
                                                                var r;
                                                                ((r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r));
                                                            }));
                                                    }
                                                    return e;
                                                })({}, (0, o.hH)(t))),
                                                (n = n = { action_taken: m.mz.GET_STARTED_CLICK }),
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
                                                d.Z.open(t, g.pNK.GUILD_PRODUCTS));
                                        },
                                        children: [
                                            p.intl.string(p.t.oyzLpK),
                                            (0, r.jsx)(s.ZSh, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: h.getStartedArrow
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.muralImageContainer,
                    children: [
                        (0, r.jsx)('img', {
                            src: (0, c.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: h.muralImage
                        }),
                        (0, r.jsx)('img', {
                            src: (0, c.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: h.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
