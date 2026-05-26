"use strict";
n.d(t, { Mw: () => a, ub: () => o });
var i = n(935208),
    r = n(37411),
    s = n(375708);
let a = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = i.default.compare("992549565104128000", t) > -1;
            return (null == t || n) && e >= r.kl ? "50+" : e >= r.su ? "100k+" : `${e}`;
        }
    },
    o = (e, t) => {
        var n;
        let i;
        return (
            (n = s.t.rfAXDV),
            "0" === (i = a(e, t)) ? s.intl.string(s.t.eXHkhl) : s.intl.formatToPlainString(n, { count: i })
        );
    };
