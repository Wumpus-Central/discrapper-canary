"use strict";
n.d(t, { _: () => d });
var a = n(627968),
    i = n(503698),
    l = n.n(i),
    r = n(778712),
    s = n(97808),
    c = n(652215),
    o = n(124882);
let d = (e) => {
    let { showStatus: t, width: n, opacity: i, size: d = "default" } = e,
        u = "small" === d ? r._3.SIZE_24 : r._3.SIZE_32;
    return (0, a.jsxs)("div", {
        className: l()(o.Os, { [o.i]: "small" === d }),
        style: { opacity: i },
        children: [
            (0, a.jsx)(s.eu, {
                src: null,
                size: u,
                status: t ? c.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.yf,
            }),
            (0, a.jsx)("div", {
                className: l()(o.aA, { [o.vX]: "small" === d }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
