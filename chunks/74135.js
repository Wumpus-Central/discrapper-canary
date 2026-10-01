n.d(t, { s: () => h });
var i = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    c = n(866665),
    u = n(278416),
    l = n(240248),
    o = n(594832),
    a = n(196085);
function d(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        u = !(0, l.uJ)(r),
        d = (0, i.jsx)("div", {
            className: s()(a.Fx, { [a.Y_]: u }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return u ? (0, i.jsx)(c.m, { text: r, position: "top", delay: o.Zh, children: d }) : d;
}
function h(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        s = n ?? u.TagIcon;
    return (0, i.jsx)(d, {
        spec: t,
        icon: (0, i.jsx)("div", {
            className: a.wz,
            style: { width: t.iconSize, height: t.iconSize },
            children: (0, i.jsx)(s, { size: "xxs", color: "white" }),
        }),
        tooltipText: r,
    });
}
