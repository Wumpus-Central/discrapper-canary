let i, a, r;
n.d(t, { uq: () => m, ny: () => g, fY: () => u, vc: () => c });
var l,
    o = n(945810),
    s =
        (((l = {})[(l.NONE = 0)] = "NONE"),
        (l[(l.PHASE_ONE = 1)] = "PHASE_ONE"),
        (l[(l.PHASE_TWO = 2)] = "PHASE_TWO"),
        l);
(0, o.mj)({
    name: "2026-10-macaron",
    kind: "user",
    defaultConfig: { enabled: !1, phase: 0 },
    variations: { 0: { enabled: !1, phase: 0 }, 1: { enabled: !0, phase: 1 }, 2: { enabled: !0, phase: 2 } },
});
let d = { enabled: !1, phase: s.NONE },
    c = null != i ? i.useConfig : () => d,
    u = null != a ? a.useMacaronPerkCard : () => null,
    m = null != a ? a.useMacaronBentoBox : () => null,
    g = 221552 == n.j ? (null != r ? r : () => null) : null;
