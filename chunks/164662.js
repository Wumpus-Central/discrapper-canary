n.d(t, { E: () => o }), n(388685);
var r = n(473749),
    i = n(907331);
let a = 100,
    o = function () {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            [t, n] = (0, r.useState)(1),
            o = (0, r.useMemo)(() => ({ threshold: Array.from({ length: a + 1 }, (e, t) => t / a) }), []);
        return {
            visibilityPercentageRef: (0, i.S)(
                (e) => {
                    n(e.intersectionRatio);
                },
                o,
                e,
            ),
            visibilityPercentage: t,
        };
    };
