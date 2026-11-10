var i = n(374994),
    r = n(462887);
n(385803);
var a = n(185928),
    s = n(818348);
function l(e) {
    return (0, r.M)(e) ? s.NJ.DARK : s.NJ.LIGHT;
}
function o(e) {
    return null != e && e.colors.length > 0;
}
n.d(
    t,
    {},
    {
        FK: function (e) {
            let { angle: t, colors: n } = e;
            return `linear-gradient(${t}deg, ${n
                .map((e) => {
                    let { token: t, stop: n } = e;
                    return `${(0, i.nt)(t, { saturation: 1 })} ${n}%`;
                })
                .join(", ")})`;
        },
        GX: function (e, t) {
            return o(t) ? l(e) : e;
        },
        PC: function (e) {
            return l(a.dP[e]);
        },
        Zu: l,
        lo: o,
    },
);
