n.d(t, {
    BH: () => a,
    Dp: () => o,
    Ig: () => s,
});
var r = n(97519),
    i = n(731965);
let o = "#5865F2",
    a = 74,
    s = (0, r.U)((e) => ({
        colors: [],
        chassisMixAmount: a,
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
            let { colors: n, chassisMixAmount: r, gradientAngle: o } = t;
            (0, i.j)(() => {
                e({
                    colors: n,
                    chassisMixAmount: r,
                    gradientAngle: o,
                });
            });
        },
    }));
