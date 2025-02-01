n.d(t, { Z: () => u });
var i = n(192379),
    r = n(979590),
    a = n.n(r),
    s = n(866442),
    o = n(442837),
    l = n(607070);
let u = (e) => {
    let t = (0, o.e7)([l.Z], () => (l.Z.desaturateUserColors ? l.Z.saturation : 1));
    return (0, i.useMemo)(() => {
        let { h: n, s: i, l: r } = a()((0, s.Rf)(e)).toHsl(),
            o = a()({
                h: n,
                s: i * t,
                l: r
            });
        return {
            hex: o.toHexString(),
            hsl: o.toHslString()
        };
    }, [e, t]);
};
