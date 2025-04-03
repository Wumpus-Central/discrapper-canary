n.d(t, { N: () => c }), n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(442837),
    i = n(607070),
    a = n(981631),
    s = n(762564);
let c = (e, t, n) => {
    var r, c;
    let u = (0, o.e7)([i.Z], () => i.Z.useReducedMotion),
        d = {
            '--custom-gradient-color-1': null != e ? e : a.p6O,
            '--custom-gradient-color-2': null != (r = null != t ? t : e) ? r : a.p6O,
            '--custom-gradient-color-3': null != (c = null != n ? n : e) ? c : a.p6O
        };
    return {
        text: {
            gradientClassName: s.gradientText,
            gradientStyle: d
        },
        glow: {
            gradientClassName: s.gradientGlow,
            gradientStyle: d
        },
        gradient: { gradientClassName: l()(null != n ? s.threeColorGradient : s.twoColorGradient, { [s.gradient]: !u }) }
    };
};
