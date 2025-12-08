n.d(t, { R: () => d });
var r = n(473749),
    i = n(522942),
    a = n(342905),
    o = n(271631),
    s = n(905170),
    l = n(388032);
let c = {
        [i.m.SOLID]: s.default.OpWJ3f,
        [i.m.GRADIENT]: s.default["i9e/u1"],
        [i.m.GLOW]: s.default["Ra3/93"],
        [i.m.NEON]: s.default.x68b1F,
        [i.m.TOON]: s.default.otpeeM,
        [i.m.POP]: s.default.cjQOKb,
    },
    u = {
        [i.m.SOLID]: 3,
        [i.m.GRADIENT]: 2.5,
        [i.m.GLOW]: 2.5,
        [i.m.NEON]: 3,
        [i.m.TOON]: 3,
        [i.m.POP]: 3,
    };
function d(e) {
    let t = (0, o.Z)(e);
    return r.useMemo(() => {
        var n, r;
        return {
            name: l.intl.string(null != (n = c[e]) ? n : s.default.OpWJ3f),
            defaultColors: t,
            previewStyles: {
                fontId: a.C.DEFAULT,
                effectId: e,
                colors: t,
            },
            minContrastRatio: null != (r = u[e]) ? r : 3,
        };
    }, [e, t]);
}
