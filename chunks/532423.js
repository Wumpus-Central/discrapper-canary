var n = e(477900),
    i = e(582128),
    r = e(503698),
    c = e.n(r),
    a = e(342952),
    o = e(866665),
    u = e(240248);
e(634110);
var l = e(792996),
    p = e(422596);
function d(s) {
    let { spec: t, icon: e, tooltipText: i } = s,
        r = !(0, u.uJ)(i),
        a = (0, n.jsx)("div", {
            className: c()(p.Fx, { [p.Y_]: r }),
            style: { top: t.iconInset, insetInlineEnd: t.iconInset },
            children: e,
        });
    return r ? (0, n.jsx)(o.m, { text: i, position: "top", delay: 350, children: a }) : a;
}
function x(s) {
    let { spec: t, className: e, ...i } = s;
    return (0, n.jsx)(d, {
        spec: t,
        icon: (0, n.jsx)(a.I, { className: c()(p.XA, e), ...i, size: t.avatarSize, maxUsers: 3 }),
        tooltipText: l.intl.string(l.t["OnWY3/"]),
    });
}
e.d(
    t,
    {},
    {
        X: x,
        n: function (s) {
            let { user: t, ...e } = s,
                r = i.useMemo(() => [t], [t]);
            return (0, n.jsx)(x, { users: r, ...e });
        },
    },
);
