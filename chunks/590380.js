n.d(t, { n: () => f, p: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    i = n(514042),
    r = n(834730),
    o = n(939249),
    d = n(298668);
function u(e) {
    return s()(d._B, { [d.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, compact: a = !1, subText: s, children: o, onThumbError: u } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n, alt: "", className: d.gJ, onError: u })
                : (0, l.jsx)(i.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: d.Wd,
                children: [
                    (0, l.jsx)(r.E, { variant: "text-sm/medium", color: "text-default", className: d.Rr, children: t }),
                    s,
                ],
            }),
            o,
        ],
    });
}
function m(e) {
    return (0, l.jsx)("div", { className: u(e.compact ?? !1), children: c(e) });
}
function f(e) {
    let { name: t, thumbSrc: n, ariaLabel: a, onClick: i, onThumbError: r } = e;
    return (0, l.jsx)(o.D, {
        className: s()(u(!0), d.w8),
        onClick: i,
        "aria-label": a,
        children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: r }),
    });
}
