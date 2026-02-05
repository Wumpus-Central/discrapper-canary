"use strict";
n.d(t, { A0: () => d, BF: () => c, Hj: () => u, Ve: () => l, XI: () => _, nA: () => o });
var r = n(627968);
n(64700);
var i = n(439626),
    a = n(834730),
    s = n(364309);
function o(e) {
    return (0, r.jsx)(i.fh, { ...e, className: s.Hn });
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(i.VP, {
        ...n,
        className: s.fi,
        children: (0, r.jsx)(a.E, { variant: "eyebrow", className: s.QP, children: t }),
    });
}
function u(e) {
    return (0, r.jsx)(i.fI, { ...e, className: s.nM });
}
function c(e) {
    return (0, r.jsx)(i.BF, { ...e, className: s.rf });
}
function d(e) {
    return (0, r.jsx)(i.A0, { ...e, className: s.wx });
}
function _(e) {
    let { header: t, footer: n, children: a, ...o } = e;
    return (0, r.jsx)("div", {
        className: s.kL,
        children: (0, r.jsxs)(i.XI, {
            ...o,
            className: s.tp,
            children: [
                null != t && (0, r.jsx)("div", { className: s.wx, children: t }),
                a,
                null != n && (0, r.jsx)("div", { className: s.qr, children: n }),
            ],
        }),
    });
}
