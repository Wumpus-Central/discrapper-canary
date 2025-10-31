n.d(t, {
    E: () => d,
    Z9: () => u,
    wl: () => m,
}),
    n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(481060),
    o = n(572004),
    c = n(451429);
function d(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)("dl", {
        className: r()(c.properties, t),
        children: n,
    });
}
let u = (e) => {
    let { name: t, children: n, copyValue: l } = e,
        [r, d] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (r) {
                let e = setTimeout(() => d(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [r]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("dt", {
                    className: c.propertyName,
                    children: t,
                }),
                (0, a.jsxs)("dd", {
                    className: c.propertyValue,
                    children: [
                        n,
                        null != l
                            ? (0, a.jsx)(s.P3F, {
                                  tag: "span",
                                  className: c.copyPropertyButton,
                                  onClick: () => (0, o.JG)(l, () => d(!0)),
                                  children: r
                                      ? (0, a.jsx)(s.kmB, {
                                            color: "currentColor",
                                            size: "sm",
                                        })
                                      : (0, a.jsx)(s.TIy, {
                                            color: "currentColor",
                                            size: "sm",
                                        }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function m(e) {
    let { value: t } = e;
    return (0, a.jsx)(s.FZ5, { checked: t });
}
