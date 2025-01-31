n.d(t, { Z: () => a });
var i = n(937615),
    l = n(388032);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return l.intl.string(l.t.RWouSU);
    if (e.premium && !n) return l.intl.string(l.t.QGUSz8);
    let a = e.getPrice(null, t);
    return null != a ? (a.amount > 0 ? (0, i.T4)(a.amount, a.currency) : l.intl.string(l.t.QQsaCQ)) : l.intl.string(l.t.RWouSU);
}
