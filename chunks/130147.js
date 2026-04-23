n.d(t, { _: () => c });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(778712),
    r = n(97808),
    o = n(652215),
    d = n(124882);
let c = (e) => {
    let { showStatus: t, width: n, opacity: l, size: c = "default" } = e,
        u = "small" === c ? a._3.SIZE_24 : a._3.SIZE_32;
    return (0, i.jsxs)("div", {
        className: s()(d.Os, { [d.i]: "small" === c }),
        style: { opacity: l },
        children: [
            (0, i.jsx)(r.eu, {
                src: null,
                size: u,
                status: t ? o.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: d.yf,
            }),
            (0, i.jsx)("div", {
                className: s()(d.aA, { [d.vX]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
