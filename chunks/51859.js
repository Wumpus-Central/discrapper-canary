t.d(n, { Z: () => m }), t(47120), t(266796);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    a = t.n(o),
    s = t(793030),
    l = t(481060),
    c = t(413335),
    d = t(157353),
    u = t(838968),
    x = t(969867),
    p = t(279604),
    b = t(730621),
    v = t(388032),
    j = t(709435);
function m(e) {
    let { guildId: n, powerup: t } = e,
        { onShowMore: o } = (0, p.Z)(n, t),
        m = (0, d.Z)(n, t),
        [h, _] = i.useState(void 0);
    return (
        (0, p.K)(h),
        (0, r.jsxs)(u.Z, {
            label: t.title,
            onClick: o,
            active: m,
            children: [
                (0, r.jsx)('div', {
                    className: j.imageContainer,
                    children: (0, r.jsx)('img', { alt: '' })
                }),
                (0, r.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.headerContainer,
                            children: [
                                (0, r.jsx)(s.X6, {
                                    variant: 'heading-md/bold',
                                    children: t.title
                                }),
                                t.bundle &&
                                    (0, r.jsx)(s.xv, {
                                        className: a()(j.bundle, { [j.active]: m }),
                                        variant: 'text-xs/semibold',
                                        children: v.NW.string(b.Z.j2jUjY)
                                    })
                            ]
                        }),
                        (0, r.jsx)(s.xv, {
                            className: j.description,
                            variant: 'text-sm/medium',
                            children: t.description
                        }),
                        (0, r.jsxs)('div', {
                            className: j.labelContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: j.inline,
                                    children: [
                                        (0, r.jsx)(c.Z, {}),
                                        (0, r.jsx)(s.xv, {
                                            tag: 'div',
                                            variant: 'heading-md/bold',
                                            children: t.cost
                                        })
                                    ]
                                }),
                                m &&
                                    (0, r.jsxs)('div', {
                                        className: j.inline,
                                        children: [
                                            (0, r.jsx)(l.owK, {
                                                size: 'xs',
                                                color: l.TVs.colors.TEXT_POSITIVE
                                            }),
                                            (0, r.jsx)(s.xv, {
                                                color: 'text-positive',
                                                variant: 'text-sm/bold',
                                                children: v.NW.string(b.Z.FFLkm5)
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: j.buttonContainer,
                    children: (0, r.jsx)(x.Z, {
                        powerup: t,
                        guildId: n,
                        onError: _
                    })
                })
            ]
        })
    );
}
