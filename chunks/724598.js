n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(367907),
    o = n(357352),
    c = n(434404),
    d = n(626135),
    u = n(629481),
    m = n(981631),
    h = n(388032),
    g = n(164626);
function x(e) {
    let { pills: t } = e;
    return (0, i.jsx)('div', {
        className: g.row,
        children: t.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: g.pill,
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
function p(e) {
    let { guildId: t, showCTA: n, responsive: r = !0 } = e,
        p = [
            [h.intl.string(h.t['73h51N']), h.intl.string(h.t['gbjs//'])],
            [h.intl.string(h.t.mCoH0d), h.intl.string(h.t['l/BuSE'])],
            [h.intl.string(h.t.psQktr), h.intl.string(h.t.nMhIZW)],
            [h.intl.string(h.t['0ItLmJ']), h.intl.string(h.t.yQHqsL)]
        ];
    return (0, i.jsx)('div', {
        className: l()({ [g.responsive]: r }),
        children: (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsxs)('div', {
                    className: g.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.pillContainer,
                            children: p.map((e, t) => (0, i.jsx)(x, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, i.jsxs)('div', {
                            className: g.ctaContent,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: h.intl.string(h.t['67arYG'])
                                }),
                                n &&
                                    (0, i.jsxs)(s.gtL, {
                                        size: s.zxk.Sizes.MEDIUM,
                                        className: g.getStartedButton,
                                        innerClassName: g.getStartedButtonContents,
                                        shineSize: s.gtL.ShineSizes.SMALL,
                                        onClick: () => {
                                            d.default.track(m.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, a.hH)(t),
                                                action_taken: u.mz.GET_STARTED_CLICK
                                            }),
                                                c.Z.open(t, m.pNK.GUILD_PRODUCTS);
                                        },
                                        children: [
                                            h.intl.string(h.t.oyzLpK),
                                            (0, i.jsx)(s.ZSh, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: g.getStartedArrow
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: g.muralImageContainer,
                    children: [
                        (0, i.jsx)('img', {
                            src: (0, o.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: g.muralImage
                        }),
                        (0, i.jsx)('img', {
                            src: (0, o.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: g.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
