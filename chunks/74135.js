n.d(t, { s: () => h });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    c = n(866665),
    l = n(278416),
    o = n(240248),
    u = n(594832),
    a = n(196085);
function d(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        l = !(0, o.uJ)(i),
        d = (0, r.jsx)("div", {
            className: s()(a.Fx, { [a.Y_]: l }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return l ? (0, r.jsx)(c.m, { text: i, position: "top", delay: u.Zh, children: d }) : d;
}
function h(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        s = n ?? l.TagIcon;
    return (0, r.jsx)(d, {
        spec: t,
        icon: (0, r.jsx)("div", {
            className: a.wz,
            style: { width: t.iconSize, height: t.iconSize },
            children: (0, r.jsx)(s, { size: "xxs", color: "white" }),
        }),
        tooltipText: i,
    });
}
