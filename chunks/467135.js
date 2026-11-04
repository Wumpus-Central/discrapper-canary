var i = n(196765),
    r = n(121894);
let a = (0, i.v)((e, t) => ({
    colors: [],
    chassisMixAmount: 74,
    gradientAngle: 0,
    setColors: (t) => {
        (0, r.r)(() => {
            e({ colors: t });
        });
    },
    setChassisMixAmount: (t) => {
        (0, r.r)(() => {
            e({ chassisMixAmount: Math.round(t) });
        });
    },
    setGradientAngle: (t) => {
        (0, r.r)(() => {
            e({ gradientAngle: Math.round(t) });
        });
    },
    setAll: (t) => {
        let { colors: n, chassisMixAmount: i, gradientAngle: a } = t;
        (0, r.r)(() => {
            e({ colors: n, chassisMixAmount: i, gradientAngle: a });
        });
    },
    isEditorActive: () => t().colors.length > 0,
}));
n.d(t, {}, { O: "#5865F2", k: a });
