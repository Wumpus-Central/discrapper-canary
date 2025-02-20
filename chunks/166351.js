t.d(n, { Z: () => p }), t(266796);
var i = t(200651);
t(192379);
var r = t(120356),
    a = t.n(r),
    o = t(793030),
    s = t(481060),
    c = t(413335),
    l = t(838968),
    d = t(773),
    u = t(279604),
    x = t(783684),
    v = t(388032),
    m = t(355135);
function p(e) {
    let { powerup: n } = e,
        { onActivate: t, onDeactivate: r, onShowMore: p } = (0, u.Z)(n);
    return (0, i.jsxs)(l.Z, {
        label: n.title,
        onClick: p,
        active: n.active,
        children: [
            (0, i.jsx)('div', {
                className: m.imageContainer,
                children: (0, i.jsx)('img', { alt: '' })
            }),
            (0, i.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.headerContainer,
                        children: [
                            (0, i.jsx)(o.X6, {
                                variant: 'heading-md/bold',
                                children: n.title
                            }),
                            n.bundle &&
                                (0, i.jsx)(o.xv, {
                                    className: a()(m.bundle, { [m.active]: n.active }),
                                    variant: 'text-xs/semibold',
                                    children: v.NW.string(x.Z.j2jUjY)
                                })
                        ]
                    }),
                    (0, i.jsx)(o.xv, {
                        className: m.description,
                        variant: 'text-sm/medium',
                        children: n.description
                    }),
                    (0, i.jsxs)('div', {
                        className: m.labelContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: m.inline,
                                children: [
                                    (0, i.jsx)(c.Z, {}),
                                    (0, i.jsx)(o.xv, {
                                        tag: 'div',
                                        variant: 'heading-md/bold',
                                        children: n.cost
                                    })
                                ]
                            }),
                            n.active &&
                                (0, i.jsxs)('div', {
                                    className: m.inline,
                                    children: [
                                        (0, i.jsx)(s.owK, {
                                            size: 'xs',
                                            color: s.TVs.colors.TEXT_POSITIVE
                                        }),
                                        (0, i.jsx)(o.xv, {
                                            color: 'text-positive',
                                            variant: 'text-sm/bold',
                                            children: v.NW.string(x.Z.FFLkm5)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: m.buttonContainer,
                children: (0, i.jsx)(d.Z, {
                    skuId: n.skuId,
                    active: n.active,
                    onPrimaryClick: t,
                    onSecondaryClick: r
                })
            })
        ]
    });
}
