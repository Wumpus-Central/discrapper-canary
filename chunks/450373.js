"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(440745),
    a = n.n(r),
    s = n(317097),
    l = n(17928),
    o = n(775602);
let d = function (e) {
    let t = (0, l.bG)([o.Ay], () => (o.Ay.desaturateUserColors ? o.Ay.saturation : 1));
    return (0, i.useMemo)(() => {
        let { h: n, s: i, l: r } = a()((0, s.Hl)(e)).toHsl(),
            l = a()({ h: n, s: i * t, l: r });
        return { hex: l.toHexString(), hsl: l.toHslString() };
    }, [e, t]);
};
