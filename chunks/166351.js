i.d(e, { Z: () => v });
var t = i(200651),
    r = i(120356),
    a = i.n(r),
    s = i(793030),
    o = i(481060),
    c = i(413335),
    l = i(773),
    d = i(394512),
    u = i(291775),
    x = i(388032),
    m = i(770964);
function v(n) {
    let { onClick: e, powerup: i } = n,
        r = (0, d.Z)(i);
    return (0, t.jsxs)(o.P3F, {
        onClick: e,
        className: a()(m.container, { [m.active]: i.active }),
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
                            (0, t.jsx)(s.X6, {
                                variant: 'heading-md/bold',
                                children: i.title
                            }),
                            i.bundle &&
                                (0, t.jsx)(s.xv, {
                                    className: a()(m.bundle, { [m.active]: i.active }),
                                    variant: 'text-xs/semibold',
                                    children: x.intl.string(u.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, t.jsx)(s.xv, {
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
                                    (0, t.jsx)(s.xv, {
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
                                        (0, t.jsx)(o.owK, {
                                            size: 'xs',
                                            color: o.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, t.jsx)(s.xv, {
                                            color: 'text-positive',
                                            variant: 'text-sm/bold',
                                            children: x.intl.string(u.Z.FFLkm5)
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
                    active: i.active,
                    onPrimaryClick: r
                })
            })
        ]
    });
}
