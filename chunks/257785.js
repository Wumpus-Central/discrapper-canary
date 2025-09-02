n.d(t, {
    E: () => u,
    Z9: () => m,
    wl: () => x,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(755721),
    o = n(481060),
    c = n(572004),
    d = n(451429);
function u(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)("dl", {
        className: i()(d.properties, t),
        children: n,
    });
}
let m = (e) => {
    let { name: t, children: n, copyValue: l } = e,
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("dt", {
                    className: d.propertyName,
                    children: t,
                }),
                (0, a.jsxs)("dd", {
                    className: d.propertyValue,
                    children: [
                        n,
                        null != l
                            ? (0, a.jsx)(o.P3F, {
                                  tag: "span",
                                  className: d.copyPropertyButton,
                                  onClick: () => (0, c.JG)(l, () => s(!0)),
                                  children: i
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
function x(e) {
    let { value: t } = e;
    return (0, a.jsx)(s.$q, {
        size: 16,
        value: t,
        shape: s.zV.SMALL_BOX,
        displayOnly: !0,
    });
}
