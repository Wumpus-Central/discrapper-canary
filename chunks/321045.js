"use strict";
n.d(t, { Mw: () => a, ub: () => s });
var i = n(661191),
    r = n(37411),
    l = n(985018);
let a = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = i.default.compare("992549565104128000", t) > -1;
            return (null == t || n) && e >= r.kl ? "50+" : e >= r.su ? "100k+" : `${e}`;
        }
    },
    s = (e, t) => {
        var n;
        let i;
        return (
            (n = l.t.rfAXDV),
            "0" === (i = a(e, t)) ? l.intl.string(l.t.eXHkhl) : l.intl.formatToPlainString(n, { count: i })
        );
    };
