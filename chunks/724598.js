n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    l = n(367907),
    a = n(357352),
    c = n(434404),
    d = n(626135),
    C = n(629481),
    u = n(981631),
    x = n(388032),
    f = n(762741);
function p(e) {
    let { pills: t } = e;
    return (0, r.jsx)('div', {
        className: f.row,
        children: t.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: f.pill,
                    children: (0, r.jsx)(o.Text, {
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
            [x.intl.string(x.t['73h51N']), x.intl.string(x.t['gbjs//'])],
            [x.intl.string(x.t.mCoH0d), x.intl.string(x.t['l/BuSE'])],
            [x.intl.string(x.t.psQktr), x.intl.string(x.t.nMhIZW)],
            [x.intl.string(x.t['0ItLmJ']), x.intl.string(x.t.yQHqsL)]
        ];
    return (0, r.jsx)('div', {
        className: s()({ [f.responsive]: i }),
        children: (0, r.jsxs)('div', {
            className: f.container,
            children: [
                (0, r.jsxs)('div', {
                    className: f.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.pillContainer,
                            children: h.map((e, t) => (0, r.jsx)(p, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, r.jsxs)('div', {
                            className: f.ctaContent,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: x.intl.string(x.t['67arYG'])
                                }),
                                n &&
                                    (0, r.jsxs)(o.ShinyButton, {
                                        size: o.Button.Sizes.MEDIUM,
                                        className: f.getStartedButton,
                                        innerClassName: f.getStartedButtonContents,
                                        shineSize: o.ShinyButton.ShineSizes.SMALL,
                                        onClick: () => {
                                            d.default.track(u.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, l.hH)(t),
                                                action_taken: C.mz.GET_STARTED_CLICK
                                            }),
                                                c.Z.open(t, u.pNK.GUILD_PRODUCTS);
                                        },
                                        children: [
                                            x.intl.string(x.t.oyzLpK),
                                            (0, r.jsx)(o.ArrowSmallRightIcon, {
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
                (0, r.jsxs)('div', {
                    className: f.muralImageContainer,
                    children: [
                        (0, r.jsx)('img', {
                            src: (0, a.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: f.muralImage
                        }),
                        (0, r.jsx)('img', {
                            src: (0, a.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: f.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
