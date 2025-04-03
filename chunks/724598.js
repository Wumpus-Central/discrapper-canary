r.d(t, { Z: () => j });
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    s = r(481060),
    c = r(367907),
    l = r(357352),
    a = r(434404),
    d = r(626135),
    u = r(629481),
    C = r(981631),
    p = r(388032),
    f = r(765214);
function b(e) {
    let { pills: t } = e;
    return (0, n.jsx)('div', {
        className: f.row,
        children: t.map((e) =>
            (0, n.jsx)(
                'div',
                {
                    className: f.pill,
                    children: (0, n.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
function j(e) {
    let { guildId: t, showCTA: r, responsive: i = !0 } = e,
        j = [
            [p.NW.string(p.t['73h51N']), p.NW.string(p.t['gbjs//'])],
            [p.NW.string(p.t.mCoH0d), p.NW.string(p.t['l/BuSE'])],
            [p.NW.string(p.t.psQktr), p.NW.string(p.t.nMhIZW)],
            [p.NW.string(p.t['0ItLmJ']), p.NW.string(p.t.yQHqsL)]
        ];
    return (0, n.jsx)('div', {
        className: o()({ [f.responsive]: i }),
        children: (0, n.jsxs)('div', {
            className: f.container,
            children: [
                (0, n.jsxs)('div', {
                    className: f.content,
                    children: [
                        (0, n.jsx)('div', {
                            className: f.pillContainer,
                            children: j.map((e, t) => (0, n.jsx)(b, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, n.jsxs)('div', {
                            className: f.ctaContent,
                            children: [
                                (0, n.jsx)(s.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: p.NW.string(p.t['67arYG'])
                                }),
                                r &&
                                    (0, n.jsxs)(s.gtL, {
                                        size: s.zxk.Sizes.MEDIUM,
                                        className: f.getStartedButton,
                                        innerClassName: f.getStartedButtonContents,
                                        shineSize: s.gtL.ShineSizes.SMALL,
                                        onClick: () => {
                                            var e, r;
                                            d.default.track(
                                                C.rMx.GUILD_SHOP_PREVIEW_CLICK,
                                                ((e = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(r);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                })
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                (n = r[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = n);
                                                            });
                                                    }
                                                    return e;
                                                })({}, (0, c.hH)(t))),
                                                (r = r = { action_taken: u.mz.GET_STARTED_CLICK }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                    : (function (e, t) {
                                                          var r = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var n = Object.getOwnPropertySymbols(e);
                                                              r.push.apply(r, n);
                                                          }
                                                          return r;
                                                      })(Object(r)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                      }),
                                                e)
                                            ),
                                                a.Z.open(t, C.pNK.GUILD_PRODUCTS);
                                        },
                                        children: [
                                            p.NW.string(p.t.oyzLpK),
                                            (0, n.jsx)(s.ZSh, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: f.getStartedArrow
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: f.muralImageContainer,
                    children: [
                        (0, n.jsx)('img', {
                            src: (0, l.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: f.muralImage
                        }),
                        (0, n.jsx)('img', {
                            src: (0, l.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: f.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
