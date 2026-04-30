"use strict";
n.d(t, { _: () => c });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(778712),
    o = n(97808),
    l = n(652215),
    u = n(124882);
let c = (e) => {
    let { showStatus: t, width: n, opacity: r, size: c = "default" } = e,
        d = "small" === c ? a._3.SIZE_24 : a._3.SIZE_32;
    return (0, i.jsxs)("div", {
        className: s()(u.Os, { [u.i]: "small" === c }),
        style: { opacity: r },
        children: [
            (0, i.jsx)(o.eu, {
                src: null,
                size: d,
                status: t ? l.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: u.yf,
            }),
            (0, i.jsx)("div", {
                className: s()(u.aA, { [u.vX]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
