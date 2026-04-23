n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var a = n(317097),
    i = n(17928),
    r = n(661531),
    s = n(990078),
    o = n(602853),
    d = n(478016),
    c = n(775602),
    u = n(496885),
    _ = n(985018);
function m(e) {
    let t,
        { color: n, size: m, forcedIconColor: h, className: p, iconClassName: g, tooltipText: x } = e,
        [f, v] = (0, i.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        b = (0, o.r)(r.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, a.LX)(n ?? b),
        N = (0, a.$k)(A, !1, f ? v : null);
    return (
        (t =
            null != h ? h : 0.3 > (0, a.OK)(A) ? r.A.unsafe_rawColors.PRIMARY_630.css : r.A.unsafe_rawColors.WHITE.css),
        (0, l.jsx)(s.m, {
            text: null != x ? x : _.intl.string(_.t.T3PvV4),
            children: (0, l.jsx)(u.A, {
                className: p,
                color: N,
                size: m,
                children: (0, l.jsx)(d.U, { size: "custom", color: t, height: m, width: m, className: g }),
            }),
        })
    );
}
