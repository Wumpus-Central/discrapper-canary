"use strict";
a.d(t, { A: () => p });
var r = a(627968);
a(64700);
var i = a(317097),
    n = a(311907),
    l = a(827734),
    s = a(990078),
    o = a(602853),
    c = a(478016),
    d = a(775602),
    u = a(496885),
    _ = a(985018);
function p(e) {
    let t,
        { color: a, size: p, forcedIconColor: f, className: h, iconClassName: m, tooltipText: g } = e,
        [b, A] = (0, n.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        E = (0, o.r)(l.A.unsafe_rawColors.PRIMARY_300).hex(),
        v = (0, i.LX)(a ?? E),
        x = (0, i.$k)(v, !1, b ? A : null);
    return (
        (t =
            null != f ? f : 0.3 > (0, i.OK)(v) ? l.A.unsafe_rawColors.PRIMARY_630.css : l.A.unsafe_rawColors.WHITE.css),
        (0, r.jsx)(s.m, {
            text: null != g ? g : _.intl.string(_.t.T3PvV4),
            children: (0, r.jsx)(u.A, {
                className: h,
                color: x,
                size: p,
                children: (0, r.jsx)(c.U, { size: "custom", color: t, height: p, width: p, className: m }),
            }),
        })
    );
}
