"use strict";
n.d(t, { _: () => _, J: () => c });
var i = n(64700),
    r = n(508425),
    s = n(559949),
    a = n(602853),
    o = n(661531),
    l = n(864386),
    u = n(375708);
let c = {
        [r.z.SOLID]: l.default.OpWJ3f,
        [r.z.GRADIENT]: l.default["i9e/u1"],
        [r.z.NEON]: l.default.x68b1F,
        [r.z.TOON]: l.default.otpeeM,
        [r.z.POP]: l.default.cjQOKb,
    },
    d = { [r.z.SOLID]: 3, [r.z.GRADIENT]: 2.5, [r.z.GLOW]: 2.5, [r.z.NEON]: 3, [r.z.TOON]: 3, [r.z.POP]: 3 };
function _(e) {
    let t,
        n =
            ((t = (0, a.r)(o.A.colors.TEXT_DEFAULT).int()),
            i.useMemo(() => {
                switch (e) {
                    case r.z.GRADIENT:
                    case r.z.GLOW:
                        return [7183099, 6082490];
                    case r.z.TOON:
                        return [0xf42098];
                    case r.z.NEON:
                        return [6888941];
                    case r.z.POP:
                        return [1036166];
                    case r.z.SOLID:
                    default:
                        return [t];
                }
            }, [t, e]));
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
