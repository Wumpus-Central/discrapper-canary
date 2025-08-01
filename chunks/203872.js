n.d(t, { J: () => u });
var o = n(73800),
    r = n(522942),
    l = n(342905),
    i = n(242824),
    s = n(660662),
    a = n(698282),
    c = n(388032);
let d = {
    [r.m.SOLID]: a.default.OpWJ3d,
    [r.m.GRADIENT]: a.default['i9e/u7'],
    [r.m.GLOW]: a.default['Ra3/9/'],
    [r.m.NEON]: a.default.x68b1N,
    [r.m.TOON]: a.default.otpeeH,
    [r.m.POP]: a.default.cjQOKS
};
function u() {
    let e = (0, i.P)();
    return o.useMemo(() => {
        let t = {};
        return (
            s.mH.forEach((n) => {
                t[n] = {
                    name: c.intl.string(d[n]),
                    defaultColors: e[n],
                    previewStyles: {
                        fontId: l.C.DEFAULT,
                        effectId: n,
                        colors: e[n]
                    }
                };
            }),
            t
        );
    }, [e]);
}
