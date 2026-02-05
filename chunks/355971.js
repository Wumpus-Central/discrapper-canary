"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(311907),
    s = n(827734),
    o = n(990078),
    l = n(397927),
    u = n(775602),
    c = n(496885),
    d = n(985018);
function _(e) {
    let t,
        { color: n, size: _, forcedIconColor: f, className: p, iconClassName: h, tooltipText: m } = e,
        [g, E] = (0, a.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]),
        A = (0, l.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        I = (0, i.LX)(n ?? A),
        T = (0, i.$k)(I, !1, g ? E : null);
    return (
        (t =
            null != f ? f : 0.3 > (0, i.OK)(I) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css),
        (0, r.jsx)(o.m, {
            text: null != m ? m : d.intl.string(d.t.T3PvV4),
            children: (0, r.jsx)(c.A, {
                className: p,
                color: T,
                size: _,
                children: (0, r.jsx)(l.Uzd, { size: "custom", color: t, height: _, width: _, className: h }),
            }),
        })
    );
}
