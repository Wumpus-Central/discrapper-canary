r.d(t, { A: () => s });
var n = r(627968);
r(64700);
var o = r(503698),
    l = r.n(o),
    c = r(397927),
    i = r(303612),
    u = r(855018);
function a(e) {
    let { className: t, onClose: r } = e;
    return (0, n.jsx)(c.DUT, {
        className: l()(u.cG, t),
        onClick: r,
        children: (0, n.jsx)(c.PGe, {
            size: "xs",
            color: "currentColor",
            className: u.yP,
        }),
    });
}
function s(e) {
    let { guildProductListing: t, onClose: r, className: o } = e;
    return (0, n.jsxs)(c.rQ0, {
        className: l()(u.wx, o),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(i.A, {
                className: u.F0,
                listing: t,
                imageSize: 500,
                alt: "",
            }),
            (0, n.jsx)(a, {
                className: u.b,
                onClose: r,
            }),
        ],
    });
}
