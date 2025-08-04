n.d(t, { J: () => u });
var r = n(73800),
    o = n(522942),
    l = n(342905),
    i = n(242824),
    s = n(660662),
    a = n(698282),
    c = n(388032);
let d = {
    [o.m.SOLID]: a.default.OpWJ3d,
    [o.m.GRADIENT]: a.default['i9e/u7'],
    [o.m.GLOW]: a.default['Ra3/9/'],
    [o.m.NEON]: a.default.x68b1N,
    [o.m.TOON]: a.default.otpeeH,
    [o.m.POP]: a.default.cjQOKS
};
function u() {
    let e = (0, i.P)();
    return r.useMemo(() => {
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
