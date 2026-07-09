l.d(a, { _: () => n });
var e = l(627968),
    i = l(503698),
    t = l.n(i),
    d = l(778712),
    r = l(97808),
    u = l(652215),
    c = l(43410);
function n(s) {
    let { showStatus: a, width: l, opacity: i, size: n = "default" } = s,
        h = "small" === n ? d._3.SIZE_24 : d._3.SIZE_32;
    return (0, e.jsxs)("div", {
        className: t()(c.Os, { [c.i]: "small" === n }),
        style: { opacity: i },
        children: [
            (0, e.jsx)(r.eu, {
                src: null,
                size: h,
                status: a ? u.clD.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: c.yf,
            }),
            (0, e.jsx)("div", {
                className: t()(c.aA, { [c.vX]: "small" === n }),
                style: { maxWidth: null != l ? l : "100px" },
            }),
        ],
    });
}
