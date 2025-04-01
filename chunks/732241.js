n.d(t, { $: () => o }), n(192379);
var r = n(981631),
    l = n(377211);
let o = (e, t, n) => {
    var o, i;
    let a = {
        '--custom-gradient-color-1': null != e ? e : r.p6O,
        '--custom-gradient-color-2': null !== (o = null != t ? t : e) && void 0 !== o ? o : r.p6O,
        '--custom-gradient-color-3': null !== (i = null != n ? n : e) && void 0 !== i ? i : r.p6O
    };
    return {
        text: {
            gradientClassName: l.gradientText,
            gradientStyle: a
        },
        glow: {
            gradientClassName: l.gradientGlow,
            gradientStyle: a
        },
        gradient: { gradientClassName: null != n ? l.threeColorGradient : l.twoColorGradient }
    };
};
