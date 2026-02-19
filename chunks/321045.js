"use strict";
n.d(t, { Mw: () => l, ub: () => c });
var r = n(661191),
    i = n(37411),
    s = n(985018);
let a = "992549565104128000",
    o = (e) => r.default.compare(a, e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = o(t);
            return (null == t || n) && e >= i.kl ? "50+" : e >= i.su ? "100k+" : `${e}`;
        }
    },
    u = (e, t, n) => {
        let r = l(e, n);
        return "0" === r ? s.intl.string(s.t.eXHkhl) : s.intl.formatToPlainString(t, { count: r });
    },
    c = (e, t) => u(e, s.t.rfAXDV, t);
