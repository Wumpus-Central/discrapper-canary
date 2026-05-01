e.d(_, { A: () => n });
var t = e(64700),
    R = e(440745),
    A = e.n(R),
    r = e(317097),
    s = e(17928),
    T = e(775602);
let n = (E) => {
    let _ = (0, s.bG)([T.A], () => (T.A.desaturateUserColors ? T.A.saturation : 1));
    return (0, t.useMemo)(() => {
        let { h: e, s: t, l: R } = A()((0, r.Hl)(E)).toHsl(),
            s = A()({ h: e, s: t * _, l: R });
        return { hex: s.toHexString(), hsl: s.toHslString() };
    }, [E, _]);
};
