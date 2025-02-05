n.d(i, { Z: () => u });
var t = n(200651),
    a = n(120356),
    s = n.n(a),
    c = n(793030),
    r = n(481060),
    o = n(413335),
    d = n(291775),
    l = n(388032),
    p = n(770964);
function u(e) {
    let { onClick: i, powerup: n } = e;
    return (0, t.jsxs)(r.P3F, {
        onClick: i,
        className: s()(p.container, { [p.active]: n.active }),
        children: [
            (0, t.jsx)('div', {
                className: p.imageContainer,
                children: (0, t.jsx)('img', { alt: '' })
            }),
            (0, t.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: p.headerContainer,
                        children: [
                            (0, t.jsx)(c.X6, {
                                variant: 'heading-md/bold',
                                children: n.title
                            }),
                            n.bundle &&
                                (0, t.jsx)(c.xv, {
                                    className: s()(p.bundle, { [p.active]: n.active }),
                                    variant: 'text-xs/semibold',
                                    children: l.intl.string(d.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, t.jsx)(c.xv, {
                        className: p.description,
                        variant: 'text-sm/medium',
                        children: n.description
                    }),
                    (0, t.jsxs)('div', {
                        className: p.labelContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: p.inline,
                                children: [
                                    (0, t.jsx)(o.Z, {}),
                                    (0, t.jsx)(c.xv, {
                                        tag: 'div',
                                        variant: 'heading-md/bold',
                                        children: n.cost
                                    })
                                ]
                            }),
                            n.active &&
                                (0, t.jsxs)('div', {
                                    className: p.inline,
                                    children: [
                                        (0, t.jsx)(r.owK, {
                                            size: 'xs',
                                            color: r.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, t.jsx)(c.xv, {
                                            color: 'text-positive',
                                            variant: 'text-sm/bold',
                                            children: l.intl.string(d.Z.FFLkm5)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
