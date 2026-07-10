"use strict";
n.d(t, { Mw: () => s, ub: () => l });
var i = n(935208),
    r = n(37411),
    a = n(375708);
function s(e, t) {
    if (null == e || e < 0) return "0";
    {
        let n = i.default.compare("992549565104128000", t) > -1;
        return (null == t || n) && e >= r.kl ? "50+" : e >= r.su ? "100k+" : `${e}`;
    }
}
function l(e, t) {
    var n;
    let i;
    return (
        (n = a.t.rfAXDV),
        "0" === (i = s(e, t)) ? a.intl.string(a.t.eXHkhl) : a.intl.formatToPlainString(n, { count: i })
    );
}
