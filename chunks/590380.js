n.d(t, { n: () => f, p: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    s = n(514042),
    r = n(834730),
    o = n(939249),
    u = n(298668);
function d(e) {
    return i()(u._B, { [u.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, compact: a = !1, subText: i, children: o, onThumbError: d } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n, alt: "", className: u.gJ, onError: d })
                : (0, l.jsx)(s.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: u.Wd,
                children: [
                    (0, l.jsx)(r.E, { variant: "text-sm/medium", color: "text-default", className: u.Rr, children: t }),
                    i,
                ],
            }),
            o,
        ],
    });
}
function m(e) {
    return (0, l.jsx)("div", { className: d(e.compact ?? !1), children: c(e) });
}
function f(e) {
    let { name: t, thumbSrc: n, ariaLabel: a, onClick: s, onThumbError: r } = e;
    return (0, l.jsx)(o.D, {
        className: i()(d(!0), u.w8),
        onClick: s,
        "aria-label": a,
        children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: r }),
    });
}
