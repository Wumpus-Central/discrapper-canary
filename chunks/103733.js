i.d(t, { U: () => n });
var s = i(64700),
    a = i(172218);
let n = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, s.useState)(1),
        n = (0, s.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, a.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            n,
            e,
        ),
        visibilityPercentage: t,
    };
};
