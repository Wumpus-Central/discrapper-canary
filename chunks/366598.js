n.d(t, { Z: () => c });
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(258163);
function c(e) {
    let { children: t, icon: n, title: l } = e;
    return (0, i.jsxs)('header', {
        className: s.header,
        children: [
            (0, i.jsxs)('div', {
                className: s.name,
                children: [
                    r.cloneElement(n, {
                        className: o()(n.props.className, s.icon),
                        height: 24,
                        width: 24
                    }),
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        className: s.title,
                        children: l
                    })
                ]
            }),
            t
        ]
    });
}
