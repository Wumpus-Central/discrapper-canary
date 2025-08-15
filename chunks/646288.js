n.d(t, { Z: () => l });
var r = n(937615),
    i = n(388032);
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return i.intl.string(i.t.RWouSU);
    if (e.premium && !n) return i.intl.string(i.t.QGUSz8);
    let l = e.getPrice(null, t);
    if (null != l)
        if (l.amount > 0) return (0, r.T4)(l.amount, l.currency);
        else return i.intl.string(i.t.QQsaCQ);
    return i.intl.string(i.t.RWouSU);
}
