i.d(n, { Z: () => v });
var t = i(200651);
i(192379);
var a = i(120356),
    r = i.n(a),
    s = i(793030),
    o = i(481060),
    c = i(413335),
    l = i(838968),
    d = i(773),
    u = i(279604),
    x = i(947494),
    m = i(388032),
    p = i(14573);
function v(e) {
    let { powerup: n } = e,
        { onActivate: i, onDeactivate: a, onShowMore: v } = (0, u.Z)(n);
    return (0, t.jsxs)(l.Z, {
        label: n.title,
        onClick: v,
        active: n.active,
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
                            (0, t.jsx)(s.X6, {
                                variant: 'heading-md/bold',
                                children: n.title
                            }),
                            n.bundle &&
                                (0, t.jsx)(s.xv, {
                                    className: r()(p.bundle, { [p.active]: n.active }),
                                    variant: 'text-xs/semibold',
                                    children: m.intl.string(x.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, t.jsx)(s.xv, {
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
                                    (0, t.jsx)(c.Z, {}),
                                    (0, t.jsx)(s.xv, {
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
                                        (0, t.jsx)(o.owK, {
                                            size: 'xs',
                                            color: o.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, t.jsx)(s.xv, {
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
                className: p.buttonContainer,
                children: (0, t.jsx)(d.Z, {
                    skuId: n.skuId,
                    active: n.active,
                    onPrimaryClick: i,
                    onSecondaryClick: a
                })
            })
        ]
    });
}
