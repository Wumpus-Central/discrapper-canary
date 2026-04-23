s.d(e, { A: () => c });
var n = s(627968);
s(64700);
var i = s(778712),
    r = s(97808),
    a = s(466757),
    l = s(476324);
function c(t) {
    let { user: e, size: s } = t,
        c = (0, i.Kj)(s),
        o = null != e ? e.getAvatarURL(null, c.size) : l;
    return (0, n.jsx)("div", {
        className: a.oJ,
        children: (0, n.jsx)("div", {
            className: a.my,
            style: { width: c.size, height: c.size },
            children: (0, n.jsx)(r.eu, { src: o, "aria-hidden": !0, size: s }),
        }),
    });
}
