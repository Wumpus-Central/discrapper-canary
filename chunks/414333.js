t.d(s, { A0: () => h, BF: () => d, Hj: () => c, Ve: () => o, XI: () => x, nA: () => l });
var n = t(627968);
t(64700);
var i = t(439626),
    r = t(834730),
    a = t(350688);
function l(e) {
    return (0, n.jsx)(i.fh, { ...e, className: a.Hn });
}
function o(e) {
    let { children: s, ...t } = e;
    return (0, n.jsx)(i.VP, {
        ...t,
        className: a.fi,
        children: (0, n.jsx)(r.E, { variant: "eyebrow", className: a.QP, children: s }),
    });
}
function c(e) {
    return (0, n.jsx)(i.fI, { ...e, className: a.nM });
}
function d(e) {
    return (0, n.jsx)(i.BF, { ...e, className: a.rf });
}
function h(e) {
    return (0, n.jsx)(i.A0, { ...e, className: a.wx });
}
function x(e) {
    let { header: s, footer: t, children: r, ...l } = e;
    return (0, n.jsx)("div", {
        className: a.kL,
        children: (0, n.jsxs)(i.XI, {
            ...l,
            className: a.tp,
            children: [
                null != s && (0, n.jsx)("div", { className: a.wx, children: s }),
                r,
                null != t && (0, n.jsx)("div", { className: a.qr, children: t }),
            ],
        }),
    });
}
