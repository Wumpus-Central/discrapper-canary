n.d(t, {
    BH: () => o,
    Dp: () => a,
    Ig: () => s,
});
var r = n(663042),
    i = n(731965);
let a = "#5865F2",
    o = 74,
    s = (0, r.U)((e, t) => ({
        colors: [],
        chassisMixAmount: o,
        gradientAngle: 0,
        setColors: (t) => {
            (0, i.j)(() => {
                e({ colors: t });
            });
        },
        setChassisMixAmount: (t) => {
            (0, i.j)(() => {
                e({ chassisMixAmount: Math.round(t) });
            });
        },
        setGradientAngle: (t) => {
            (0, i.j)(() => {
                e({ gradientAngle: Math.round(t) });
            });
        },
        setAll: (t) => {
            let { colors: n, chassisMixAmount: r, gradientAngle: a } = t;
            (0, i.j)(() => {
                e({
                    colors: n,
                    chassisMixAmount: r,
                    gradientAngle: a,
                });
            });
        },
        isEditorActive: () => t().colors.length > 0,
    }));
