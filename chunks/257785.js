n.d(t, {
    E: () => d,
    Z9: () => u,
    wl: () => m,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(572004),
    c = n(451429);
function d(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)("dl", {
        className: l()(c.properties, t),
        children: n,
    });
}
let u = (e) => {
    let { name: t, children: n, copyValue: i } = e,
        [l, d] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (l) {
                let e = setTimeout(() => d(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [l]),
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
                        null != i
                            ? (0, a.jsx)(o.P3F, {
                                  tag: "span",
                                  className: c.copyPropertyButton,
                                  onClick: () => (0, s.JG)(i, () => d(!0)),
                                  children: l
                                      ? (0, a.jsx)(o.kmB, {
                                            color: "currentColor",
                                            size: "sm",
                                        })
                                      : (0, a.jsx)(o.TIy, {
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
    return (0, a.jsx)(o.FZ5, { checked: t });
}
