t.d(e, { A: () => s });
var _ = t(64700),
    a = t(440745),
    r = t.n(a),
    n = t(317097),
    R = t(17928),
    A = t(775602);
let s = (E) => {
    let e = (0, R.bG)([A.A], () => (A.A.desaturateUserColors ? A.A.saturation : 1));
    return (0, _.useMemo)(() => {
        let { h: t, s: _, l: a } = r()((0, n.Hl)(E)).toHsl(),
            R = r()({ h: t, s: _ * e, l: a });
        return { hex: R.toHexString(), hsl: R.toHslString() };
    }, [E, e]);
};
