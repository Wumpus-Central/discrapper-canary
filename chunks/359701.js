"use strict";
n.d(t, { _: () => u });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(652215),
    l = n(675953);
let u = (e) => {
    let { showStatus: t, width: n, opacity: i, size: u = "default" } = e,
        c = "small" === u ? s._3J.SIZE_24 : s._3J.SIZE_32,
        d = "var(--border-subtle)";
    return (0, r.jsxs)("div", {
        className: a()(l.Os, { [l.i]: "small" === u }),
        style: { opacity: i },
        children: [
            (0, r.jsx)(s.euF, {
                src: null,
                size: c,
                status: t ? o.clD.ONLINE : void 0,
                statusColor: d,
                "aria-hidden": !0,
                imageClassName: l.yf,
            }),
            (0, r.jsx)("div", {
                className: a()(l.aA, { [l.vX]: "small" === u }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
