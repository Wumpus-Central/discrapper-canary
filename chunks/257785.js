(a.d(t, {
    E: () => d,
    Z9: () => u,
    wl: () => m
}),
    a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(481060),
    o = a(572004),
    c = a(616257);
function d(e) {
    let { className: t, children: a } = e;
    return (0, n.jsx)('dl', {
        className: i()(c.properties, t),
        children: a
    });
}
let u = (e) => {
    let { name: t, children: a, copyValue: l } = e,
        [i, d] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => d(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)('dt', {
                    className: c.propertyName,
                    children: t
                }),
                (0, n.jsxs)('dd', {
                    className: c.propertyValue,
                    children: [
                        a,
                        null != l
                            ? (0, n.jsx)(s.P3F, {
                                  tag: 'span',
                                  className: c.copyPropertyButton,
                                  onClick: () => (0, o.JG)(l, () => d(!0)),
                                  children: i
                                      ? (0, n.jsx)(s.kmB, {
                                            color: 'currentColor',
                                            size: 'sm'
                                        })
                                      : (0, n.jsx)(s.TIy, {
                                            color: 'currentColor',
                                            size: 'sm'
                                        })
                              })
                            : null
                    ]
                })
            ]
        })
    );
};
function m(e) {
    let { value: t } = e;
    return (0, n.jsx)(s.XZJ, {
        size: 16,
        value: t,
        shape: s.XZJ.Shapes.SMALL_BOX,
        displayOnly: !0
    });
}
