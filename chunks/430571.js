"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(508425),
    s = n(602853),
    a = n(827734);
function o(e) {
    let t = (0, s.r)(a.A.colors.TEXT_DEFAULT).int();
    return r.useMemo(() => {
        switch (e) {
            case i.z.GRADIENT:
            case i.z.GLOW:
                return [7183099, 6082490];
            case i.z.TOON:
                return [0xf42098];
            case i.z.NEON:
                return [6888941];
            case i.z.POP:
                return [1036166];
            case i.z.SOLID:
            default:
                return [t];
        }
    }, [t, e]);
}
