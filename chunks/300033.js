r.d(n, {
    R: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(607070);
function c(e) {
    let { animationData: n, className: r } = e,
        [i, c] = (0, o.useState)(0),
        d = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    return (
        (0, o.useEffect)(() => {
            let e = i + 1;
            e < n.length && n[e]();
        }, [i, n]),
        (0, a.jsx)(l.LottieAnimation, {
            importData: n[i],
            className: r,
            shouldAnimate: !d,
            versionKey: i,
            onComplete: () => {
                i < n.length - 1 && c(i + 1);
            },
            loop: i === n.length - 1
        })
    );
}
