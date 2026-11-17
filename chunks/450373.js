var a = n(582128),
    r = n(440745),
    l = n.n(r),
    s = n(317097),
    i = n(855986),
    o = n(775602);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, i.bG)([o.Ay], () => (o.Ay.desaturateUserColors ? o.Ay.saturation : 1));
            return (0, a.useMemo)(() => {
                let { h: n, s: a, l: r } = l()((0, s.Hl)(e)).toHsl(),
                    i = l()({ h: n, s: a * t, l: r });
                return { hex: i.toHexString(), hsl: i.toHslString() };
            }, [e, t]);
        },
    },
);
