n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(172);
function d(e) {
    let { children: t, icon: n, title: r } = e;
    return (0, i.jsxs)('header', {
        className: s.header,
        children: [
            (0, i.jsxs)('div', {
                className: s.name,
                children: [
                    l.cloneElement(n, {
                        className: a()(n.props.className, s.icon),
                        height: 24,
                        width: 24
                    }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        className: s.title,
                        children: r
                    })
                ]
            }),
            t
        ]
    });
}
