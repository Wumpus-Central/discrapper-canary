n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(900722),
    s = n(476324);

function o(e) {
    let { user: t, size: n } = e,
        o = (0, i.KjH)(n),
        l = null != t ? t.getAvatarURL(null, o.size) : s;
    return (0, r.jsx)("div", {
        className: a.oJ,
        children: (0, r.jsx)("div", {
            className: a.my,
            style: {
                width: o.size,
                height: o.size,
            },
            children: (0, r.jsx)(i.euF, {
                src: l,
                "aria-hidden": !0,
                size: n,
            }),
        }),
    });
}
