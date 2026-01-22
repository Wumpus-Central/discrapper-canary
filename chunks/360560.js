n.d(t, { A: () => a });
var r = n(580630),
    i = n(985018);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return i.intl.string(i.t.RWouSQ);
    if (e.premium && !n) return i.intl.string(i.t["QGUSz/"]);
    let a = e.getPrice(null, t);
    if (null != a)
        if (a.amount > 0) return (0, r.$g)(a.amount, a.currency);
        else return i.intl.string(i.t.QQsaCc);
    return i.intl.string(i.t.RWouSQ);
}
