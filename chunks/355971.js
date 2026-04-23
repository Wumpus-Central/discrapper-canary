n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(317097),
    a = n(311907),
    s = n(827734),
    r = n(990078),
    o = n(602853),
    c = n(478016),
    d = n(775602),
    u = n(496885),
    h = n(985018);
function m(e) {
    let t,
        { color: n, size: m, forcedIconColor: A, className: g, iconClassName: _, tooltipText: p } = e,
        [f, E] = (0, a.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        C = (0, o.r)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        x = (0, l.LX)(n ?? C),
        S = (0, l.$k)(x, !1, f ? E : null);
    return (
        (t =
            null != A ? A : 0.3 > (0, l.OK)(x) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css),
        (0, i.jsx)(r.m, {
            text: null != p ? p : h.intl.string(h.t.T3PvV4),
            children: (0, i.jsx)(u.A, {
                className: g,
                color: S,
                size: m,
                children: (0, i.jsx)(c.U, { size: "custom", color: t, height: m, width: m, className: _ }),
            }),
        })
    );
}
