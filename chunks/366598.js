n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(658498);
function d(e) {
    let { children: t, icon: n, title: a } = e;
    return (0, i.jsxs)('header', {
        className: o.header,
        children: [
            (0, i.jsxs)('div', {
                className: o.name,
                children: [
                    l.cloneElement(n, {
                        className: r()(n.props.className, o.icon),
                        height: 24,
                        width: 24
                    }),
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        className: o.title,
                        children: a
                    })
                ]
            }),
            t
        ]
    });
}
