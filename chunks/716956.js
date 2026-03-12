t.d(n, { A: () => d });
var r = t(627968);
t(64700);
var l = t(503698),
    s = t.n(l),
    a = t(397927),
    i = t(303612),
    u = t(648760),
    c = t(767659);
function o(e) {
    let { className: n, onClose: t } = e;
    return (0, r.jsx)(a.DUT, {
        className: s()(u.cG, n),
        onClick: t,
        children: (0, r.jsx)(a.PGe, { size: "xs", color: "currentColor", className: u.yP }),
    });
}
function d(e) {
    let { guildProductListing: n, onClose: t, className: l } = e;
    return (0, r.jsxs)(a.rQ0, {
        className: s()(u.wx, c.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(i.A, { className: u.F0, listing: n, imageSize: 500, alt: "" }),
            (0, r.jsx)(o, { className: u.b, onClose: t }),
        ],
    });
}
