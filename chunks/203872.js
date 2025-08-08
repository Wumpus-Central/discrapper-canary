n.d(t, { J: () => f });
var r = n(73800),
    i = n(522942),
    o = n(342905),
    a = n(242824),
    s = n(660662),
    l = n(698282),
    c = n(388032);
let u = {
        [i.m.SOLID]: l.default.OpWJ3d,
        [i.m.GRADIENT]: l.default["i9e/u7"],
        [i.m.GLOW]: l.default["Ra3/9/"],
        [i.m.NEON]: l.default.x68b1N,
        [i.m.TOON]: l.default.otpeeH,
        [i.m.POP]: l.default.cjQOKS,
    },
    d = {
        [i.m.SOLID]: 3,
        [i.m.GRADIENT]: 2.5,
        [i.m.GLOW]: 2.5,
        [i.m.NEON]: 3,
        [i.m.TOON]: 3,
        [i.m.POP]: 2.5,
    };
function f() {
    let e = (0, a.P)();
    return r.useMemo(() => {
        let t = {};
        return (
            s.mH.forEach((n) => {
                t[n] = {
                    name: c.intl.string(u[n]),
                    defaultColors: e[n],
                    previewStyles: {
                        fontId: o.C.DEFAULT,
                        effectId: n,
                        colors: e[n],
                    },
                    minContrastRatio: d[n],
                };
            }),
            t
        );
    }, [e]);
}
