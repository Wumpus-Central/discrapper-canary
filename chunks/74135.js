var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    c = n(866665),
    l = n(278416),
    o = n(240248);
n(634110);
var u = n(196085);
function a(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        l = !(0, o.uJ)(i),
        a = (0, r.jsx)("div", {
            className: s()(u.Fx, { [u.Y_]: l }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return l ? (0, r.jsx)(c.m, { text: i, position: "top", delay: 350, children: a }) : a;
}
n.d(
    t,
    {},
    {
        s: function (e) {
            let { spec: t, icon: n, tooltipText: i } = e,
                s = n ?? l.TagIcon;
            return (0, r.jsx)(a, {
                spec: t,
                icon: (0, r.jsx)("div", {
                    className: u.wz,
                    style: { width: t.iconSize, height: t.iconSize },
                    children: (0, r.jsx)(s, { size: "xxs", color: "white" }),
                }),
                tooltipText: i,
            });
        },
    },
);
