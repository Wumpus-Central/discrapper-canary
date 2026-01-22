n.d(t, {
    HY: () => m,
    OA: () => d,
    mA: () => u,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    o = n(957565),
    c = n(661251);
function d(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)("dl", {
        className: r()(c.qo, t),
        children: n,
    });
}
let u = (e) => {
    let { name: t, children: n, copyValue: i } = e,
        [r, d] = l.useState(!1);
    return (
        l.useEffect(() => {
            if (r) {
                let e = setTimeout(() => d(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [r]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("dt", {
                    className: c.Bz,
                    children: t,
                }),
                (0, a.jsxs)("dd", {
                    className: c.Nw,
                    children: [
                        n,
                        null != i
                            ? (0, a.jsx)(s.DUT, {
                                  tag: "span",
                                  className: c.nH,
                                  onClick: () => (0, o.C)(i, () => d(!0)),
                                  children: r
                                      ? (0, a.jsx)(s.Uzd, {
                                            color: "currentColor",
                                            size: "sm",
                                        })
                                      : (0, a.jsx)(s.TdU, {
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
    return (0, a.jsx)(s.P7L, { checked: t });
}
