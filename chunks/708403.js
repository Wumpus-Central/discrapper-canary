n.d(t, { HY: () => m, OA: () => c, mA: () => u });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(397927),
    o = n(957565),
    d = n(661251);
function c(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)("dl", { className: l()(d.qo, t), children: n });
}
let u = (e) => {
    let { name: t, children: n, copyValue: i } = e,
        [l, c] = s.useState(!1);
    return (
        s.useEffect(() => {
            if (l) {
                let e = setTimeout(() => c(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("dt", { className: d.Bz, children: t }),
                (0, a.jsxs)("dd", {
                    className: d.Nw,
                    children: [
                        n,
                        null != i
                            ? (0, a.jsx)(r.DUT, {
                                  tag: "span",
                                  className: d.nH,
                                  onClick: () => (0, o.C)(i, () => c(!0)),
                                  children: l
                                      ? (0, a.jsx)(r.Uzd, { color: "currentColor", size: "sm" })
                                      : (0, a.jsx)(r.TdU, { color: "currentColor", size: "sm" }),
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
    return (0, a.jsx)(r.P7L, { checked: t });
}
