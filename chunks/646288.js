n.d(t, { Z: () => a });
var r = n(937615),
    i = n(388032);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return i.NW.string(i.t.RWouSU);
    if (e.premium && !n) return i.NW.string(i.t.QGUSz8);
    let a = e.getPrice(null, t);
    return null != a ? (a.amount > 0 ? (0, r.T4)(a.amount, a.currency) : i.NW.string(i.t.QQsaCQ)) : i.NW.string(i.t.RWouSU);
}
