n.d(t, { U: () => r });
var a = n(64700),
    i = n(172218);
let r = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, a.useState)(1),
        r = (0, a.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, i.B)(
            (e) => {
                n(e.intersectionRatio);
            },
            r,
            e,
        ),
        visibilityPercentage: t,
    };
};
