n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(311907),
    s = n(827734),
    o = n(990078),
    l = n(397927),
    c = n(775602),
    u = n(496885),
    d = n(985018);

function f(e) {
    let t,
        { color: n, size: f, forcedIconColor: p, className: _, iconClassName: h, tooltipText: m } = e,
        [g, E] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        b = (0, l.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        y = (0, i.LX)(null != n ? n : b),
        O = (0, i.$k)(y, !1, g ? E : null);
    return (
        (t =
            null != p ? p : 0.3 > (0, i.OK)(y) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css),
        (0, r.jsx)(o.m, {
            text: null != m ? m : d.intl.string(d.t.T3PvV4),
            children: (0, r.jsx)(u.A, {
                className: _,
                color: O,
                size: f,
                children: (0, r.jsx)(l.Uzd, {
                    size: "custom",
                    color: t,
                    height: f,
                    width: f,
                    className: h,
                }),
            }),
        })
    );
}
