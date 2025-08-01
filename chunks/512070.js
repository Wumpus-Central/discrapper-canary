n.d(t, { Z: () => m });
var o = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    i = n(793030),
    s = n(481060),
    a = n(7284),
    c = n(660662),
    d = n(698282),
    u = n(388032),
    p = n(397419),
    f = n(441047);
function m(e) {
    let { selectedFontId: t, setSelectedFontId: n, className: r } = e;
    return (0, o.jsxs)('div', {
        className: r,
        children: [
            (0, o.jsxs)(i.X6, {
                variant: 'heading-md/semibold',
                className: p.selectorHeading,
                children: [
                    u.intl.string(d.default.nP0ngY),
                    (0, o.jsx)(s.SrA, {
                        size: 'xs',
                        color: s.TVs.colors.TEXT_DEFAULT
                    })
                ]
            }),
            (0, o.jsx)(i.Kq, {
                direction: 'horizontal',
                align: 'center',
                wrap: !0,
                children: c.P$.map((e) => {
                    let r = a.y[e],
                        c = e === t;
                    return (0, o.jsx)(
                        s.ua7,
                        {
                            text: u.intl.string(r.name),
                            children: (t) => {
                                let { onMouseEnter: d, onMouseLeave: p } = t;
                                return (0, o.jsx)(s.P3F, {
                                    className: l()(f.fontButton, { [f.selected]: c }),
                                    onClick: () => n(e),
                                    'aria-label': u.intl.string(r.name),
                                    onMouseEnter: d,
                                    onMouseLeave: p,
                                    children: (0, o.jsx)(i.xv, {
                                        variant: 'text-lg/semibold',
                                        color: c ? 'text-primary' : 'text-default',
                                        className: l()(f.fontText, a.y[e].className),
                                        children: 'Gg'
                                    })
                                });
                            }
                        },
                        e
                    );
                })
            })
        ]
    });
}
