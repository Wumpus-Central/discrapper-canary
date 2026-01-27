n.d(t, {
    U: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(172218);
let l = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, r.useState)(1),
        l = (0, r.useMemo)(
            () => ({
                threshold: Array.from(
                    {
                        length: 101,
                    },
                    (e, t) => t / 100,
                ),
            }),
            [],
        );
    return {
        visibilityPercentageRef: (0, i.B)(
            (e) => {
                n(e.intersectionRatio);
            },
            l,
            e,
        ),
        visibilityPercentage: t,
    };
};
