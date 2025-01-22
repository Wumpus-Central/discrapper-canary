var i = r(192379),
    a = r(979590),
    o = r.n(a),
    s = r(866442),
    l = r(442837),
    u = r(607070);
let c = (e) => {
    let n = (0, l.e7)([u.Z], () => (u.Z.desaturateUserColors ? u.Z.saturation : 1));
    return (0, i.useMemo)(() => {
        let { h: r, s: i, l: a } = o()((0, s.Rf)(e)).toHsl(),
            l = o()({
                h: r,
                s: i * n,
                l: a
            });
        return {
            hex: l.toHexString(),
            hsl: l.toHslString()
        };
    }, [e, n]);
};
n.Z = c;
