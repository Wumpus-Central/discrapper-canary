i.d(e, { Z: () => p });
var t = i(200651),
    r = i(192379),
    a = i(120356),
    s = i.n(a),
    o = i(793030),
    c = i(481060),
    l = i(413335),
    d = i(773),
    u = i(394512),
    x = i(324180),
    m = i(388032),
    v = i(328332);
function p(n) {
    let { powerup: e } = n,
        a = (0, u.Z)(e),
        p = r.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: n } = await i.e('78718').then(i.bind(i, 640139));
                return (i) =>
                    (0, t.jsx)(n, {
                        powerup: e,
                        ...i
                    });
            });
        }, [e]);
    return (0, t.jsxs)(c.P3F, {
        onClick: p,
        className: s()(v.container, { [v.active]: e.active }),
        children: [
            (0, t.jsx)('div', {
                className: v.imageContainer,
                children: (0, t.jsx)('img', { alt: '' })
            }),
            (0, t.jsxs)('div', {
                className: v.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: v.headerContainer,
                        children: [
                            (0, t.jsx)(o.X6, {
                                variant: 'heading-md/bold',
                                children: e.title
                            }),
                            e.bundle &&
                                (0, t.jsx)(o.xv, {
                                    className: s()(v.bundle, { [v.active]: e.active }),
                                    variant: 'text-xs/semibold',
                                    children: m.intl.string(x.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, t.jsx)(o.xv, {
                        className: v.description,
                        variant: 'text-sm/medium',
                        children: e.description
                    }),
                    (0, t.jsxs)('div', {
                        className: v.labelContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: v.inline,
                                children: [
                                    (0, t.jsx)(l.Z, {}),
                                    (0, t.jsx)(o.xv, {
                                        tag: 'div',
                                        variant: 'heading-md/bold',
                                        children: e.cost
                                    })
                                ]
                            }),
                            e.active &&
                                (0, t.jsxs)('div', {
                                    className: v.inline,
                                    children: [
                                        (0, t.jsx)(c.owK, {
                                            size: 'xs',
                                            color: c.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, t.jsx)(o.xv, {
                                            color: 'text-positive',
                                            variant: 'text-sm/bold',
                                            children: m.intl.string(x.Z.FFLkm5)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: v.buttonContainer,
                children: (0, t.jsx)(d.Z, {
                    skuId: e.skuId,
                    active: e.active,
                    onPrimaryClick: a
                })
            })
        ]
    });
}
