"use strict";
n.d(t, { _: () => _, J: () => c });
var i = n(64700),
    r = n(508425),
    s = n(559949),
    a = n(602853),
    o = n(661531),
    l = n(745699),
    u = n(375708);
let c = {
        [r.z.SOLID]: l.default.OpWJ3f,
        [r.z.GRADIENT]: l.default["i9e/u1"],
        [r.z.NEON]: l.default.x68b1F,
        [r.z.TOON]: l.default.otpeeM,
        [r.z.POP]: l.default.cjQOKb,
        [r.z.GUMMY]: l.default.x9Gtie,
        [r.z.PRISM]: l.default["/M7psm"],
    },
    d = {
        [r.z.SOLID]: 3,
        [r.z.GRADIENT]: 2.5,
        [r.z.GLOW]: 2.5,
        [r.z.PRISM]: 2.5,
        [r.z.NEON]: 3,
        [r.z.TOON]: 3,
        [r.z.POP]: 3,
    };
function _(e) {
    let t,
        n = ((t = (0, a.r)(o.A.colors.TEXT_DEFAULT).int()),
        i.useMemo(
            () => ({
                [r.z.SOLID]: [t],
                [r.z.GRADIENT]: [7183099, 6082490],
                [r.z.GLOW]: [7183099, 6082490],
                [r.z.GUMMY]: [7183099, 6082490, 16762e3, 0xe46ce2],
                [r.z.PRISM]: [0xf93722, 0xf5983c, 0xc6a615, 2417517, 1874155],
                [r.z.TOON]: [0xf42098],
                [r.z.NEON]: [6888941],
                [r.z.POP]: [1036166],
                [r.z.TEST_1]: [t],
                [r.z.TEST_2]: [t],
                [r.z.TEST_3]: [t],
                [r.z.TEST_4]: [t],
            }),
            [t],
        ))[e];
    return i.useMemo(
        () => ({
            name: u.intl.string(c[e] ?? l.default.OpWJ3f),
            defaultColors: n,
            previewStyles: { fontId: s.x.DEFAULT, effectId: e, colors: n },
            minContrastRatio: d[e] ?? 3,
        }),
        [e, n],
    );
}
