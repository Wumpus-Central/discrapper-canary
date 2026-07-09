n.d(t, { A: () => o });
var a = n(64700),
    r = n(440745),
    l = n.n(r),
    i = n(317097),
    s = n(17928),
    d = n(775602);
let o = function (e) {
    let t = (0, s.bG)([d.Ay], () => (d.Ay.desaturateUserColors ? d.Ay.saturation : 1));
    return (0, a.useMemo)(() => {
        let { h: n, s: a, l: r } = l()((0, i.Hl)(e)).toHsl(),
            s = l()({ h: n, s: a * t, l: r });
        return { hex: s.toHexString(), hsl: s.toHslString() };
    }, [e, t]);
};
