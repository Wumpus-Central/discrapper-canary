a.d(t, { _: () => d });
var r = a(627968),
    n = a(503698),
    l = a.n(n),
    i = a(778712),
    s = a(97808),
    o = a(652215),
    c = a(124882);
let d = (e) => {
    let { showStatus: t, width: a, opacity: n, size: d = "default" } = e,
        u = "small" === d ? i._3.SIZE_24 : i._3.SIZE_32;
    return (0, r.jsxs)("div", {
        className: l()(c.Os, { [c.i]: "small" === d }),
        style: { opacity: n },
        children: [
            (0, r.jsx)(s.eu, {
                src: null,
                size: u,
                status: t ? o.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: c.yf,
            }),
            (0, r.jsx)("div", {
                className: l()(c.aA, { [c.vX]: "small" === d }),
                style: { maxWidth: null != a ? a : "100px" },
            }),
        ],
    });
};
