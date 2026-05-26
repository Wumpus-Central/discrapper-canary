t.d(a, { A: () => r });
var s = t(64700),
    c = t(440745),
    d = t.n(c),
    n = t(317097),
    E = t(17928),
    _ = t(775602);
let r = (e) => {
    let a = (0, E.bG)([_.A], () => (_.A.desaturateUserColors ? _.A.saturation : 1));
    return (0, s.useMemo)(() => {
        let { h: t, s, l: c } = d()((0, n.Hl)(e)).toHsl(),
            E = d()({ h: t, s: s * a, l: c });
        return { hex: E.toHexString(), hsl: E.toHslString() };
    }, [e, a]);
};
