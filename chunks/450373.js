r.d(t, { A: () => _ });
var n = r(64700),
    E = r(440745),
    l = r.n(E),
    s = r(317097),
    a = r(17928),
    o = r(775602);
let _ = (e) => {
    let t = (0, a.bG)([o.A], () => (o.A.desaturateUserColors ? o.A.saturation : 1));
    return (0, n.useMemo)(() => {
        let { h: r, s: n, l: E } = l()((0, s.Hl)(e)).toHsl(),
            a = l()({ h: r, s: n * t, l: E });
        return { hex: a.toHexString(), hsl: a.toHslString() };
    }, [e, t]);
};
