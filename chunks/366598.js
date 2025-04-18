n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(258163);
function c(e) {
    let { children: t, icon: n, title: l } = e;
    return (0, r.jsxs)('header', {
        className: s.header,
        children: [
            (0, r.jsxs)('div', {
                className: s.name,
                children: [
                    i.cloneElement(n, {
                        className: o()(n.props.className, s.icon),
                        height: 24,
                        width: 24
                    }),
                    (0, r.jsx)(a.X6q, {
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
