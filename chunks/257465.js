n.d(t, { I: () => u });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(793030),
    o = n(507274),
    c = n(667137),
    d = n(946598);
function u(e) {
    let { size: t = 'md', onClose: n, contentOutsideContainer: s, children: u } = e,
        m = r.useId(),
        g = r.useMemo(
            () => ({
                id: m,
                headingId: 'heading-'.concat(m),
                onClose: n
            }),
            [m, n]
        );
    return (0, i.jsx)(o.V, {
        'aria-describedby': g.headingId,
        children: (0, i.jsx)(a.y5, {
            forceLevel: 1,
            children: (0, i.jsx)(c.t.Provider, {
                value: g,
                children: (0, i.jsxs)('div', {
                    className: d.outerContainer,
                    children: [
                        s,
                        (0, i.jsx)('div', {
                            className: l()(d.container, d['size-'.concat(t)]),
                            children: u
                        })
                    ]
                })
            })
        })
    });
}
