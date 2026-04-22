"use strict";
a.d(t, { _: () => c });
var r = a(627968),
    l = a(503698),
    n = a.n(l),
    i = a(778712),
    s = a(97808),
    o = a(652215),
    d = a(124882);
let c = (e) => {
    let { showStatus: t, width: a, opacity: l, size: c = "default" } = e,
        u = "small" === c ? i._3.SIZE_24 : i._3.SIZE_32;
    return (0, r.jsxs)("div", {
        className: n()(d.Os, { [d.i]: "small" === c }),
        style: { opacity: l },
        children: [
            (0, r.jsx)(s.eu, {
                src: null,
                size: u,
                status: t ? o.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: d.yf,
            }),
            (0, r.jsx)("div", {
                className: n()(d.aA, { [d.vX]: "small" === c }),
                style: { maxWidth: null != a ? a : "100px" },
            }),
        ],
    });
};
