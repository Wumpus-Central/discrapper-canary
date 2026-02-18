n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var a = n(317097),
    r = n(311907),
    i = n(827734),
    s = n(990078),
    d = n(397927),
    o = n(775602),
    c = n(496885),
    u = n(985018);
function _(e) {
    let t,
        { color: n, size: _, forcedIconColor: m, className: x, iconClassName: p, tooltipText: g } = e,
        [h, A] = (0, r.yK)([o.A], () => [o.A.desaturateUserColors, o.A.saturation]),
        b = (0, d.rdh)(i.A.unsafe_rawColors.PRIMARY_300).hex(),
        v = (0, a.LX)(n ?? b),
        f = (0, a.$k)(v, !1, h ? A : null);
    return (
        (t =
            null != m ? m : 0.3 > (0, a.OK)(v) ? i.A.unsafe_rawColors.PRIMARY_630.css : i.A.unsafe_rawColors.WHITE.css),
        (0, l.jsx)(s.m, {
            text: null != g ? g : u.intl.string(u.t.T3PvV4),
            children: (0, l.jsx)(c.A, {
                className: x,
                color: f,
                size: _,
                children: (0, l.jsx)(d.Uzd, { size: "custom", color: t, height: _, width: _, className: p }),
            }),
        })
    );
}
