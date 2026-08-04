n.d(t, { A: () => o });
var a = n(582128),
    r = n(440745),
    l = n.n(r),
    s = n(317097),
    i = n(17928),
    d = n(775602);
let o = function (e) {
    let t = (0, i.bG)([d.Ay], () => (d.Ay.desaturateUserColors ? d.Ay.saturation : 1));
    return (0, a.useMemo)(() => {
        let { h: n, s: a, l: r } = l()((0, s.Hl)(e)).toHsl(),
            i = l()({ h: n, s: a * t, l: r });
        return { hex: i.toHexString(), hsl: i.toHslString() };
    }, [e, t]);
};
