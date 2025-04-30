n.d(t, { Z: () => c });
var r = n(73800),
    i = n(979590),
    a = n.n(i),
    o = n(866442),
    s = n(442837),
    l = n(607070);
let c = (e) => {
    let t = (0, s.e7)([l.Z], () => (l.Z.desaturateUserColors ? l.Z.saturation : 1));
    return (0, r.useMemo)(() => {
        let { h: n, s: r, l: i } = a()((0, o.Rf)(e)).toHsl(),
            s = a()({
                h: n,
                s: r * t,
                l: i
            });
        return {
            hex: s.toHexString(),
            hsl: s.toHslString()
        };
    }, [e, t]);
};
