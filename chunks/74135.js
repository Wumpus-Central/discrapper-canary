var i = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    c = n(866665),
    u = n(278416),
    l = n(240248);
n(634110);
var o = n(196085);
function a(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        u = !(0, l.uJ)(r),
        a = (0, i.jsx)("div", {
            className: s()(o.Fx, { [o.Y_]: u }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return u ? (0, i.jsx)(c.m, { text: r, position: "top", delay: 350, children: a }) : a;
}
n.d(
    t,
    {},
    {
        s: function (e) {
            let { spec: t, icon: n, tooltipText: r } = e,
                s = n ?? u.TagIcon;
            return (0, i.jsx)(a, {
                spec: t,
                icon: (0, i.jsx)("div", {
                    className: o.wz,
                    style: { width: t.iconSize, height: t.iconSize },
                    children: (0, i.jsx)(s, { size: "xxs", color: "white" }),
                }),
                tooltipText: r,
            });
        },
    },
);
