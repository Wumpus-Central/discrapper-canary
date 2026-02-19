"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(158954),
    a = n(311907),
    o = n(775602),
    c = n(824134);
function d(e) {
    let { withHeader: t = !0, size: n = 15 } = e,
        s = (0, a.bG)([o.A], () => o.A.useReducedMotion);
    return (0, i.jsxs)(r.BJc, {
        gap: 4,
        children: [
            t &&
                (0, i.jsx)("div", {
                    className: l()(c.iE, { [c.cb]: s }),
                    style: { paddingTop: 8, paddingBottom: 8 },
                    children: (0, i.jsx)(u, { className: l()(c.nq, c.NX) }),
                }),
            Array.from({ length: n }).map((e, t) => (0, i.jsx)(h, {}, t)),
        ],
    });
}
function u(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: l()(c.n8, t) });
}
function h() {
    let e = (0, a.bG)([o.A], () => o.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        style: { display: "flex", flexDirection: "row", gap: 12, padding: 4 },
        className: l()(c.iE, { [c.cb]: e }),
        children: [
            (0, i.jsx)("div", { className: l()(c.my, c.NX) }),
            (0, i.jsxs)("div", {
                className: c.U0,
                children: [
                    (0, i.jsx)(u, { className: l()(c.Md, c.NX) }),
                    (0, i.jsx)(u, { className: l()(c.nq, c.NX) }),
                    (0, i.jsx)(u, { className: l()(c.xs, c.NX) }),
                ],
            }),
        ],
    });
}
