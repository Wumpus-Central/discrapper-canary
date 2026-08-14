r.d(n, { Mw: () => e, ub: () => a });
var u = r(935208),
    i = r(37411),
    l = r(375708);
function e(t, n) {
    if (null == t || t < 0) return "0";
    {
        let r = u.default.compare("992549565104128000", n) > -1;
        return (null == n || r) && t >= i.kl ? "50+" : t >= i.su ? "100k+" : `${t}`;
    }
}
function a(t, n) {
    var r;
    let u;
    return (
        (r = l.t.rfAXDV),
        "0" === (u = e(t, n)) ? l.intl.string(l.t.eXHkhl) : l.intl.formatToPlainString(r, { count: u })
    );
}
