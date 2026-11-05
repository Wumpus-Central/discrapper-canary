var e = a(477900);
a(582128);
var l = a(317097),
    t = a(855986),
    o = a(646514),
    c = a(602853),
    n = a(866665),
    i = a(478016),
    u = a(775602),
    h = a(152578),
    A = a(792996);
a.d(
    r,
    {},
    {
        A: function (s) {
            let r,
                { color: a, size: d, forcedIconColor: k, className: p, iconClassName: C, tooltipText: _ } = s,
                [m, w] = (0, t.yK)([u.Ay], () => [u.Ay.desaturateUserColors, u.Ay.saturation]),
                x = (0, c.r)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
                f = (0, l.LX)(a ?? x),
                y = (0, l.$k)(f, !1, m ? w : null);
            return (
                (r =
                    null != k
                        ? k
                        : 0.3 > (0, l.OK)(f)
                          ? o.A.unsafe_rawColors.PRIMARY_630.css
                          : o.A.unsafe_rawColors.WHITE.css),
                (0, e.jsx)(n.m, {
                    text: null != _ ? _ : A.intl.string(A.t.T3PvV4),
                    children: (0, e.jsx)(h.A, {
                        className: p,
                        color: y,
                        size: d,
                        children: (0, e.jsx)(i.CheckmarkSmallIcon, {
                            size: "custom",
                            color: r,
                            height: d,
                            width: d,
                            className: C,
                        }),
                    }),
                })
            );
        },
    },
);
