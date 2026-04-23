"use strict";
n.d(t, { I: () => D, N: () => b });
var r = n(788868),
    i = n(714206),
    s = n(151818),
    a = n(153578),
    o = n(971180),
    l = n(104876),
    u = n(803630),
    c = n(797898),
    d = n(112153),
    _ = n(122725),
    f = n(82084),
    p = n(695351),
    h = n(430893),
    E = n(460901),
    m = n(267383),
    g = n(367056),
    A = n(700272),
    I = n(395663),
    T = n(244117),
    S = n(907990),
    y = n(764354),
    N = n(164331),
    v = n(878321),
    C = n(997734),
    O = n(758546);
let R = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: { standard: i, ambient: _.A, ambientLarge: f.A },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: { standard: d, ambient: p.A, ambientLarge: h.A },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: { standard: o, ambient: E.A, ambientLarge: m.A },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: { standard: u, ambient: g.A, ambientLarge: A.A },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: { standard: s, ambient: I.A, ambientLarge: T.A },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: { standard: a, ambient: S.A, ambientLarge: y.A },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: { standard: c, ambient: N.A, ambientLarge: v.A },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: { standard: l, ambient: C.A, ambientLarge: O.A },
    },
    b = (e) => (null != e ? R[e] : null);
function D(e) {
    return R[e];
}
