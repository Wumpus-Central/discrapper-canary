n.d(t, {
    _: () => c,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(652215),
    l = n(675953);
let c = (e) => {
    let { showStatus: t, width: n, opacity: i, size: c = "default" } = e,
        u = "small" === c ? s._3J.SIZE_24 : s._3J.SIZE_32,
        d = "var(--border-subtle)";
    return (0, r.jsxs)("div", {
        className: a()(l.Os, {
            [l.i]: "small" === c,
        }),
        style: {
            opacity: i,
        },
        children: [
            (0, r.jsx)(s.euF, {
                src: null,
                size: u,
                status: t ? o.clD.ONLINE : void 0,
                statusColor: d,
                "aria-hidden": !0,
                imageClassName: l.yf,
            }),
            (0, r.jsx)("div", {
                className: a()(l.aA, {
                    [l.vX]: "small" === c,
                }),
                style: {
                    maxWidth: null != n ? n : "100px",
                },
            }),
        ],
    });
};
