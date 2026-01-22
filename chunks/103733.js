n.d(t, { U: () => s }), n(896048);
var r = n(64700),
    i = n(172218);
let a = 100,
    s = function () {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            [t, n] = (0, r.useState)(1),
            s = (0, r.useMemo)(() => ({ threshold: Array.from({ length: a + 1 }, (e, t) => t / a) }), []);
        return {
            visibilityPercentageRef: (0, i.B)(
                (e) => {
                    n(e.intersectionRatio);
                },
                s,
                e,
            ),
            visibilityPercentage: t,
        };
    };
