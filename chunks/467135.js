n.d(t, {
    OT: () => a,
    kJ: () => s,
    ko: () => o,
});
var r = n(353640),
    i = n(121894);
let a = "#5865F2",
    s = 74,
    o = (0, r.v)((e, t) => ({
        colors: [],
        chassisMixAmount: s,
        gradientAngle: 0,
        setColors: (t) => {
            (0, i.r)(() => {
                e({ colors: t });
            });
        },
        setChassisMixAmount: (t) => {
            (0, i.r)(() => {
                e({ chassisMixAmount: Math.round(t) });
            });
        },
        setGradientAngle: (t) => {
            (0, i.r)(() => {
                e({ gradientAngle: Math.round(t) });
            });
        },
        setAll: (t) => {
            let { colors: n, chassisMixAmount: r, gradientAngle: a } = t;
            (0, i.r)(() => {
                e({
                    colors: n,
                    chassisMixAmount: r,
                    gradientAngle: a,
                });
            });
        },
        isEditorActive: () => t().colors.length > 0,
    }));
