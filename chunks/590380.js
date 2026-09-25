n.d(t, { n: () => f, p: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(514042),
    s = n(834730),
    u = n(939249),
    o = n(298668);
function d(e) {
    return i()(o._B, { [o.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, compact: a = !1, subText: i, children: u, onThumbError: d } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n, alt: "", className: o.gJ, onError: d })
                : (0, l.jsx)(r.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: o.Wd,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: o.Rr, children: t }),
                    i,
                ],
            }),
            u,
        ],
    });
}
function m(e) {
    return (0, l.jsx)("div", { className: d(e.compact ?? !1), children: c(e) });
}
function f(e) {
    let { name: t, thumbSrc: n, ariaLabel: a, onClick: r, onThumbError: s } = e;
    return (0, l.jsx)(u.D, {
        className: i()(d(!0), o.w8),
        onClick: r,
        "aria-label": a,
        children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
