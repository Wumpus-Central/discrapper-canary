"use strict";
n.d(t, { z: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(814656),
    l = n(895925);
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
function d(e) {
    let t,
        { story: n, controlsLayout: s } = e,
        [d, c] = i.useState(n.id),
        [_, f] = i.useState(() => u(n));
    d !== n.id && (c(n.id), f(u(n)));
    let E = "hidden" !== s && null != n.controls;
    return (0, r.jsxs)("div", {
        className: a()(l.iW, { [l.vT]: "bottom" === s, [l.Ix]: "right" === s }),
        children: [
            (0, r.jsx)("div", {
                className: l.Ji,
                children: (0, r.jsx)("div", {
                    className: l.Dw,
                    children: ((t = n.component), (0, r.jsx)(t, { ..._ }, n.id)),
                }),
            }),
            E &&
                null != n.controls &&
                (0, r.jsx)("div", {
                    className: a()(l.ne, { [l.WK]: "bottom" === s, [l.BT]: "right" === s }),
                    children: (0, r.jsx)(o.i, { controls: n.controls, props: _, onPropsChange: f }),
                }),
        ],
    });
}
