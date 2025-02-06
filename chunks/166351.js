n.d(i, { Z: () => p });
var t = n(200651),
    a = n(120356),
    r = n.n(a),
    o = n(793030),
    s = n(481060),
    c = n(413335),
    l = n(291775),
    d = n(388032),
    u = n(770964);
function p(e) {
    let { onClick: i, powerup: n } = e;
    return (0, t.jsxs)(s.P3F, {
        onClick: i,
        className: r()(u.container, { [u.active]: n.active }),
        children: [
            (0, t.jsx)('div', {
                className: u.imageContainer,
                children: (0, t.jsx)('img', { alt: '' })
            }),
            (0, t.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: u.headerContainer,
                        children: [
                            (0, t.jsx)(o.X6, {
                                variant: 'heading-md/bold',
                                children: n.title
                            }),
                            n.bundle &&
                                (0, t.jsx)(o.xv, {
                                    className: r()(u.bundle, { [u.active]: n.active }),
                                    variant: 'text-xs/semibold',
                                    children: d.intl.string(l.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, t.jsx)(o.xv, {
                        className: u.description,
                        variant: 'text-sm/medium',
                        children: n.description
                    }),
                    (0, t.jsxs)('div', {
                        className: u.labelContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: u.inline,
                                children: [
                                    (0, t.jsx)(c.Z, {}),
                                    (0, t.jsx)(o.xv, {
                                        tag: 'div',
                                        variant: 'heading-md/bold',
                                        children: n.cost
                                    })
                                ]
                            }),
                            n.active &&
                                (0, t.jsxs)('div', {
                                    className: u.inline,
                                    children: [
                                        (0, t.jsx)(s.owK, {
                                            size: 'xs',
                                            color: s.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, t.jsx)(o.xv, {
                                            color: 'text-positive',
                                            variant: 'text-sm/bold',
                                            children: d.intl.string(l.Z.FFLkm5)
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
