n.d(t, { A: () => d });
var a = n(582128),
    l = n(440745),
    r = n.n(l),
    s = n(317097),
    i = n(17928),
    o = n(775602);
let d = function (e) {
    let t = (0, i.bG)([o.Ay], () => (o.Ay.desaturateUserColors ? o.Ay.saturation : 1));
    return (0, a.useMemo)(() => {
        let { h: n, s: a, l } = r()((0, s.Hl)(e)).toHsl(),
            i = r()({ h: n, s: a * t, l });
        return { hex: i.toHexString(), hsl: i.toHslString() };
    }, [e, t]);
};
