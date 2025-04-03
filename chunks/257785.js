n.d(t, {
    E: () => d,
    Z9: () => u,
    wl: () => m
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(852229),
    s = n(481060),
    c = n(616257);
function d(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('dl', {
        className: i()(c.properties, t),
        children: n
    });
}
let u = (e) => {
    let { name: t, children: n, copyValue: l } = e,
        [i, d] = a.useState(!1);
    return (
        a.useEffect(() => {
            if (i) {
                let e = setTimeout(() => d(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('dt', {
                    className: c.propertyName,
                    children: t
                }),
                (0, r.jsxs)('dd', {
                    className: c.propertyValue,
                    children: [
                        n,
                        null != l
                            ? (0, r.jsx)(s.P3F, {
                                  tag: 'span',
                                  className: c.copyPropertyButton,
                                  onClick: () => {
                                      (0, o.J)(l), d(!0);
                                  },
                                  children: i
                                      ? (0, r.jsx)(s.kmB, {
                                            color: 'currentColor',
                                            size: 'sm'
                                        })
                                      : (0, r.jsx)(s.TIy, {
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
    return (0, r.jsx)(s.XZJ, {
        size: 16,
        value: t,
        shape: s.XZJ.Shapes.SMALL_BOX,
        displayOnly: !0
    });
}
