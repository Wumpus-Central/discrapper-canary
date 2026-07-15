n.d(t, { A: () => o });
var a = n(64700),
    l = n(440745),
    r = n.n(l),
    s = n(317097),
    i = n(17928),
    d = n(775602);
let o = function (e) {
    let t = (0, i.bG)([d.Ay], () => (d.Ay.desaturateUserColors ? d.Ay.saturation : 1));
    return (0, a.useMemo)(() => {
        let { h: n, s: a, l } = r()((0, s.Hl)(e)).toHsl(),
            i = r()({ h: n, s: a * t, l });
        return { hex: i.toHexString(), hsl: i.toHslString() };
    }, [e, t]);
};
