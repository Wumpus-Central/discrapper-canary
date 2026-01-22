n.d(t, { _: () => c });
var a = n(627968),
    l = n(503698),
    i = n.n(l),
    r = n(397927),
    s = n(652215),
    o = n(675953);
let c = (e) => {
    let { showStatus: t, width: n, opacity: l, size: c = "default" } = e,
        d = "small" === c ? r._3J.SIZE_24 : r._3J.SIZE_32;
    return (0, a.jsxs)("div", {
        className: i()(o.Os, { [o.i]: "small" === c }),
        style: { opacity: l },
        children: [
            (0, a.jsx)(r.euF, {
                src: null,
                size: d,
                status: t ? s.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.yf,
            }),
            (0, a.jsx)("div", {
                className: i()(o.aA, { [o.vX]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
