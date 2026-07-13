"use strict";
n.d(t, { _: () => c });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(778712),
    l = n(97808),
    o = n(652215),
    d = n(124882);
function c(e) {
    let { showStatus: t, width: n, opacity: r, size: c = "default" } = e,
        u = "small" === c ? s._3.SIZE_24 : s._3.SIZE_32;
    return (0, i.jsxs)("div", {
        className: a()(d.Os, { [d.i]: "small" === c }),
        style: { opacity: r },
        children: [
            (0, i.jsx)(l.eu, {
                src: null,
                size: u,
                status: t ? o.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: d.yf,
            }),
            (0, i.jsx)("div", {
                className: a()(d.aA, { [d.vX]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
}
