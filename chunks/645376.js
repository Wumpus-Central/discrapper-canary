s.d(e, { A: () => r });
var i = s(627968);
s(64700);
var a = s(397927),
    l = s(900722),
    n = s(476324);
function r(t) {
    let { user: e, size: s } = t,
        r = (0, a.KjH)(s),
        c = null != e ? e.getAvatarURL(null, r.size) : n;
    return (0, i.jsx)("div", {
        className: l.oJ,
        children: (0, i.jsx)("div", {
            className: l.my,
            style: { width: r.size, height: r.size },
            children: (0, i.jsx)(a.euF, { src: c, "aria-hidden": !0, size: s }),
        }),
    });
}
