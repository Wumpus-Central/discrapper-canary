"use strict";
n.d(t, { _: () => c });
var a = n(627968),
    i = n(503698),
    r = n.n(i),
    l = n(778712),
    s = n(97808),
    d = n(652215),
    o = n(43410);
let c = (e) => {
    let { showStatus: t, width: n, opacity: i, size: c = "default" } = e,
        u = "small" === c ? l._3.SIZE_24 : l._3.SIZE_32;
    return (0, a.jsxs)("div", {
        className: r()(o.Os, { [o.i]: "small" === c }),
        style: { opacity: i },
        children: [
            (0, a.jsx)(s.eu, {
                src: null,
                size: u,
                status: t ? d.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.yf,
            }),
            (0, a.jsx)("div", {
                className: r()(o.aA, { [o.vX]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
