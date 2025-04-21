n.d(t, {
    E: () => d,
    Z9: () => u,
    wl: () => m
}),
    n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(572004),
    c = n(616257);
function d(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)('dl', {
        className: i()(c.properties, t),
        children: n
    });
}
let u = (e) => {
    let { name: t, children: n, copyValue: l } = e,
        [i, d] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => d(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)('dt', {
                    className: c.propertyName,
                    children: t
                }),
                (0, a.jsxs)('dd', {
                    className: c.propertyValue,
                    children: [
                        n,
                        null != l
                            ? (0, a.jsx)(o.P3F, {
                                  tag: 'span',
                                  className: c.copyPropertyButton,
                                  onClick: () => {
                                      (0, s.JG)(l), d(!0);
                                  },
                                  children: i
                                      ? (0, a.jsx)(o.kmB, {
                                            color: 'currentColor',
                                            size: 'sm'
                                        })
                                      : (0, a.jsx)(o.TIy, {
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
    return (0, a.jsx)(o.XZJ, {
        size: 16,
        value: t,
        shape: o.XZJ.Shapes.SMALL_BOX,
        displayOnly: !0
    });
}
