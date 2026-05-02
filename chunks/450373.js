"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(440745),
    s = n.n(r),
    a = n(317097),
    o = n(17928),
    l = n(775602);
let u = (e) => {
    let t = (0, o.bG)([l.A], () => (l.A.desaturateUserColors ? l.A.saturation : 1));
    return (0, i.useMemo)(() => {
        let { h: n, s: i, l: r } = s()((0, a.Hl)(e)).toHsl(),
            o = s()({ h: n, s: i * t, l: r });
        return { hex: o.toHexString(), hsl: o.toHslString() };
    }, [e, t]);
};
