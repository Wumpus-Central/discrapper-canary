n.d(t, { U: () => r });
var i = n(64700),
    s = n(172218);
let r = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, i.useState)(1),
        r = (0, i.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, s.B)(
            (e) => {
                n(e.intersectionRatio);
            },
            r,
            e,
        ),
        visibilityPercentage: t,
    };
};
