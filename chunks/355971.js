"use strict";
a.d(t, { A: () => u });
var n = a(627968);
a(64700);
var r = a(317097),
    s = a(311907),
    i = a(827734),
    l = a(990078),
    o = a(397927),
    c = a(775602),
    _ = a(496885),
    d = a(985018);
function u(e) {
    let t,
        { color: a, size: u, forcedIconColor: f, className: p, iconClassName: m, tooltipText: g } = e,
        [h, b] = (0, s.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        A = (0, o.rdh)(i.A.unsafe_rawColors.PRIMARY_300).hex(),
        I = (0, r.LX)(a ?? A),
        v = (0, r.$k)(I, !1, h ? b : null);
    return (
        (t =
            null != f ? f : 0.3 > (0, r.OK)(I) ? i.A.unsafe_rawColors.PRIMARY_630.css : i.A.unsafe_rawColors.WHITE.css),
        (0, n.jsx)(l.m, {
            text: null != g ? g : d.intl.string(d.t.T3PvV4),
            children: (0, n.jsx)(_.A, {
                className: p,
                color: v,
                size: u,
                children: (0, n.jsx)(o.Uzd, { size: "custom", color: t, height: u, width: u, className: m }),
            }),
        })
    );
}
