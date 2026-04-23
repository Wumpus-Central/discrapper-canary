n.d(t, { U: () => i });
var r = n(64700),
    a = n(172218);
let i = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, r.useState)(1),
        i = (0, r.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, a.B)(
            (e) => {
                n(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
};
