n.d(t, { _: () => u });
var l = n(627968),
    i = n(503698),
    s = n.n(i),
    r = n(397927),
    a = n(652215),
    o = n(675953);
let u = (e) => {
    let { showStatus: t, width: n, opacity: i, size: u = "default" } = e,
        d = "small" === u ? r._3J.SIZE_24 : r._3J.SIZE_32;
    return (0, l.jsxs)("div", {
        className: s()(o.Os, { [o.i]: "small" === u }),
        style: { opacity: i },
        children: [
            (0, l.jsx)(r.euF, {
                src: null,
                size: d,
                status: t ? a.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.yf,
            }),
            (0, l.jsx)("div", {
                className: s()(o.aA, { [o.vX]: "small" === u }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
