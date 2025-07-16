(n.d(t, { E: () => s }), n(388685));
var i = n(73800),
    r = n(434650);
let s = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, i.useState)(1),
        s = (0, i.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, r.S)(
            (e) => {
                n(e.intersectionRatio);
            },
            s,
            e
        ),
        visibilityPercentage: t
    };
};
