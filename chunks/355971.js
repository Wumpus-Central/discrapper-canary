var e = a(477900);
a(582128);
var t = a(317097),
    l = a(855986),
    o = a(646514),
    n = a(602853),
    c = a(866665),
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
                { color: a, size: d, forcedIconColor: p, className: _, iconClassName: w, tooltipText: C } = s,
                [k, x] = (0, l.yK)([u.Ay], () => [u.Ay.desaturateUserColors, u.Ay.saturation]),
                f = (0, n.r)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
                m = (0, t.LX)(a ?? f),
                y = (0, t.$k)(m, !1, k ? x : null);
            return (
                (r =
                    null != p
                        ? p
                        : 0.3 > (0, t.OK)(m)
                          ? o.A.unsafe_rawColors.PRIMARY_630.css
                          : o.A.unsafe_rawColors.WHITE.css),
                (0, e.jsx)(c.m, {
                    text: null != C ? C : A.intl.string(A.t.T3PvV4),
                    children: (0, e.jsx)(h.A, {
                        className: _,
                        color: y,
                        size: d,
                        children: (0, e.jsx)(i.U, { size: "custom", color: r, height: d, width: d, className: w }),
                    }),
                })
            );
        },
    },
);
