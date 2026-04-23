t.d(n, { A: () => A });
var r = t(627968);
t(64700);
var l = t(503698),
    s = t.n(l),
    a = t(939249),
    i = t(789645),
    u = t(935462),
    o = t(303612),
    c = t(916261),
    d = t(575650);
function p(e) {
    let { className: n, onClose: t } = e;
    return (0, r.jsx)(a.D, {
        className: s()(c.cG, n),
        onClick: t,
        children: (0, r.jsx)(i.P, { size: "xs", color: "currentColor", className: c.yP }),
    });
}
function A(e) {
    let { guildProductListing: n, onClose: t, className: l } = e;
    return (0, r.jsxs)(u.rQ, {
        className: s()(c.wx, d.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(o.A, { className: c.F0, listing: n, imageSize: 500, alt: "" }),
            (0, r.jsx)(p, { className: c.b, onClose: t }),
        ],
    });
}
