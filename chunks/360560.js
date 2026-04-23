n.d(t, { A: () => a });
var i = n(580630),
    l = n(985018);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return l.intl.string(l.t.RWouSQ);
    if (e.premium && !n) return l.intl.string(l.t["QGUSz/"]);
    let a = e.getPrice(null, t);
    if (null != a)
        if (a.amount > 0) return (0, i.$g)(a.amount, a.currency);
        else return l.intl.string(l.t.QQsaCc);
    return l.intl.string(l.t.RWouSQ);
}
