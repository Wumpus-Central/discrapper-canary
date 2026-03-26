"use strict";
n.d(t, { z: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(814656),
    l = n(531781);
function u(e) {
    let t = e.controls,
        n = {};
    return (
        null != t &&
            Object.entries(t).forEach((e) => {
                let [t, r] = e;
                n[t] = r.defaultValue;
            }),
        n
    );
}
function c(e) {
    let { story: t, controlsLayout: n } = e,
        s = i.useMemo(() => u(t), [t]),
        [c, d] = i.useState(s);
    i.useEffect(() => {
        d(u(t));
    }, [t]);
    let _ = () => {
            let e = t.component;
            return (0, r.jsx)(e, { ...c });
        },
        f = "hidden" !== n && null != t.controls;
    return (0, r.jsxs)("div", {
        className: a()(l.iW, { [l.vT]: "bottom" === n, [l.Ix]: "right" === n }),
        children: [
            (0, r.jsx)("div", { className: l.Ji, children: (0, r.jsx)("div", { className: l.Dw, children: _() }) }),
            f &&
                null != t.controls &&
                (0, r.jsx)("div", {
                    className: a()(l.ne, { [l.WK]: "bottom" === n, [l.BT]: "right" === n }),
                    children: (0, r.jsx)(o.i, { controls: t.controls, props: c, onPropsChange: d }),
                }),
        ],
    });
}
