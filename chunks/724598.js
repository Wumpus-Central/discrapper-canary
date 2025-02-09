n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(367907),
    a = n(357352),
    c = n(434404),
    d = n(626135),
    C = n(629481),
    u = n(981631),
    x = n(388032),
    p = n(361527);
function h(e) {
    let { pills: t } = e;
    return (0, i.jsx)('div', {
        className: p.row,
        children: t.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: p.pill,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
function _(e) {
    let { guildId: t, showCTA: n, responsive: r = !0 } = e,
        _ = [
            [x.intl.string(x.t['73h51N']), x.intl.string(x.t['gbjs//'])],
            [x.intl.string(x.t.mCoH0d), x.intl.string(x.t['l/BuSE'])],
            [x.intl.string(x.t.psQktr), x.intl.string(x.t.nMhIZW)],
            [x.intl.string(x.t['0ItLmJ']), x.intl.string(x.t.yQHqsL)]
        ];
    return (0, i.jsx)('div', {
        className: s()({ [p.responsive]: r }),
        children: (0, i.jsxs)('div', {
            className: p.container,
            children: [
                (0, i.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.pillContainer,
                            children: _.map((e, t) => (0, i.jsx)(h, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, i.jsxs)('div', {
                            className: p.ctaContent,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: x.intl.string(x.t['67arYG'])
                                }),
                                n &&
                                    (0, i.jsxs)(l.gtL, {
                                        size: l.zxk.Sizes.MEDIUM,
                                        className: p.getStartedButton,
                                        innerClassName: p.getStartedButtonContents,
                                        shineSize: l.gtL.ShineSizes.SMALL,
                                        onClick: () => {
                                            d.default.track(u.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, o.hH)(t),
                                                action_taken: C.mz.GET_STARTED_CLICK
                                            }),
                                                c.Z.open(t, u.pNK.GUILD_PRODUCTS);
                                        },
                                        children: [
                                            x.intl.string(x.t.oyzLpK),
                                            (0, i.jsx)(l.ZSh, {
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
                (0, i.jsxs)('div', {
                    className: p.muralImageContainer,
                    children: [
                        (0, i.jsx)('img', {
                            src: (0, a.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: p.muralImage
                        }),
                        (0, i.jsx)('img', {
                            src: (0, a.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: p.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
