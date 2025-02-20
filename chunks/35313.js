n.d(t, { f: () => l });
var r = n(748780),
    i = n(442837),
    s = n(481060),
    a = n(607070);
function l() {
    let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, s.q_F)(
        {
            from: {
                opacity: +!!e,
                transform: e ? 'scale(1)' : 'scale(1.2)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1)'
            },
            config: {
                easing: r.Z.Easing.quad,
                duration: 200 * !e,
                clamp: !0
            }
        },
        'animate-always'
    );
}
