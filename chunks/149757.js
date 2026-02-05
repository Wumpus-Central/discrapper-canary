"use strict";
n.d(t, { I: () => y, N: () => T });
var r = n(788868),
    i = n(714206),
    a = n(151818),
    s = n(153578),
    o = n(971180),
    l = n(104876),
    u = n(803630),
    c = n(797898),
    d = n(112153),
    _ = n(122725),
    f = n(695351),
    p = n(460901),
    h = n(367056),
    m = n(395663),
    g = n(907990),
    E = n(164331),
    A = n(997734);
let I = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: { standard: i, ambient: _.A },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: { standard: d, ambient: f.A },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: { standard: o, ambient: p.A },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: { standard: u, ambient: h.A },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: { standard: a, ambient: m.A },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: { standard: s, ambient: g.A },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: { standard: c, ambient: E.A },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: { standard: l, ambient: A.A },
    },
    T = function (e) {
        let { ambient: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null != e ? y(e, { ambient: t }) : null;
    };
function y(e) {
    let { ambient: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = I[e];
    return t ? n.ambient : n.standard;
}
