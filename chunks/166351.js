i.d(n, { Z: () => p });
var t = i(200651),
    a = i(120356),
    r = i.n(a),
    o = i(793030),
    s = i(481060),
    c = i(413335),
    l = i(773),
    d = i(291775),
    u = i(388032),
    m = i(770964);
function p(e) {
    let { onClick: n, powerup: i } = e;
    return (0, t.jsxs)(s.P3F, {
        onClick: n,
        className: r()(m.container, { [m.active]: i.active }),
        children: [
            (0, t.jsx)('div', {
                className: m.imageContainer,
                children: (0, t.jsx)('img', { alt: '' })
            }),
            (0, t.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: m.headerContainer,
                        children: [
                            (0, t.jsx)(o.X6, {
                                variant: 'heading-md/bold',
                                children: i.title
                            }),
                            i.bundle &&
                                (0, t.jsx)(o.xv, {
                                    className: r()(m.bundle, { [m.active]: i.active }),
                                    variant: 'text-xs/semibold',
                                    children: u.intl.string(d.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, t.jsx)(o.xv, {
                        className: m.description,
                        variant: 'text-sm/medium',
                        children: i.description
                    }),
                    (0, t.jsxs)('div', {
                        className: m.labelContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: m.inline,
                                children: [
                                    (0, t.jsx)(c.Z, {}),
                                    (0, t.jsx)(o.xv, {
                                        tag: 'div',
                                        variant: 'heading-md/bold',
                                        children: i.cost
                                    })
                                ]
                            }),
                            i.active &&
                                (0, t.jsxs)('div', {
                                    className: m.inline,
                                    children: [
                                        (0, t.jsx)(s.owK, {
                                            size: 'xs',
                                            color: s.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, t.jsx)(o.xv, {
                                            color: 'text-positive',
                                            variant: 'text-sm/bold',
                                            children: u.intl.string(d.Z.FFLkm5)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: m.buttonContainer,
                children: (0, t.jsx)(l.Z, {
                    skuId: i.skuId,
                    active: i.active
                })
            })
        ]
    });
}
