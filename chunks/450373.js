"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(440745),
    s = n.n(i),
    a = n(317097),
    o = n(311907),
    l = n(775602);
let u = (e) => {
    let t = (0, o.bG)([l.A], () => (l.A.desaturateUserColors ? l.A.saturation : 1));
    return (0, r.useMemo)(() => {
        let { h: n, s: r, l: i } = s()((0, a.Hl)(e)).toHsl(),
            o = s()({ h: n, s: r * t, l: i });
        return { hex: o.toHexString(), hsl: o.toHslString() };
    }, [e, t]);
};
