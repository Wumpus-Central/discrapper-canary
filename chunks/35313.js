n.d(t, {
    f: function () {
        return s;
    }
});
var i = n(748780),
    r = n(442837),
    l = n(481060),
    a = n(607070);
function s() {
    let e = (0, r.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, l.useSpring)(
        {
            from: {
                opacity: e ? 1 : 0,
                transform: e ? 'scale(1)' : 'scale(1.2)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1)'
            },
            config: {
                easing: i.Z.Easing.quad,
                duration: e ? 0 : 200,
                clamp: !0
            }
        },
        'animate-always'
    );
}
