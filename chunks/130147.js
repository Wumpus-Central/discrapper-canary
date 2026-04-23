l.d(t, { _: () => u });
var r = l(627968),
    a = l(503698),
    s = l.n(a),
    n = l(778712),
    i = l(97808),
    c = l(652215),
    o = l(43410);
let u = (e) => {
    let { showStatus: t, width: l, opacity: a, size: u = "default" } = e,
        d = "small" === u ? n._3.SIZE_24 : n._3.SIZE_32;
    return (0, r.jsxs)("div", {
        className: s()(o.Os, { [o.i]: "small" === u }),
        style: { opacity: a },
        children: [
            (0, r.jsx)(i.eu, {
                src: null,
                size: d,
                status: t ? c.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.yf,
            }),
            (0, r.jsx)("div", {
                className: s()(o.aA, { [o.vX]: "small" === u }),
                style: { maxWidth: null != l ? l : "100px" },
            }),
        ],
    });
};
