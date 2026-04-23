a.d(t, { HY: () => x, OA: () => h, mA: () => p });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(939249),
    o = a(478016),
    d = a(624479),
    c = a(658675),
    u = a(957565),
    m = a(505206);
function h(e) {
    let { className: t, children: a } = e;
    return (0, n.jsx)("dl", { className: s()(m.qo, t), children: a });
}
let p = (e) => {
    let { name: t, children: a, copyValue: i } = e,
        [s, c] = l.useState(!1);
    return (
        l.useEffect(() => {
            if (s) {
                let e = setTimeout(() => c(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [s]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("dt", { className: m.Bz, children: t }),
                (0, n.jsxs)("dd", {
                    className: m.Nw,
                    children: [
                        a,
                        null != i
                            ? (0, n.jsx)(r.D, {
                                  tag: "span",
                                  className: m.nH,
                                  onClick: () => (0, u.C)(i, () => c(!0)),
                                  children: s
                                      ? (0, n.jsx)(o.U, { color: "currentColor", size: "sm" })
                                      : (0, n.jsx)(d.T, { color: "currentColor", size: "sm" }),
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
    return (0, n.jsx)(c.P, { checked: t });
}
