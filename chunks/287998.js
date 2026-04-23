t.d(a, { b: () => o });
var r = t(99478),
    n = t(142922);
function i(e) {
    return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function l(e) {
    let a = e - 1911;
    return a > 0 ? ["minguo", a] : ["before_minguo", 1 - a];
}
class o extends n.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            [t, i] = l((0, n.LA)(a.era, a.year));
        return new (0, r.ng)(this, t, i, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(u(e));
    }
    getEras() {
        return ["before_minguo", "minguo"];
    }
    balanceDate(e) {
        let [a, t] = l(i(e));
        (e.era = a), (e.year = t);
    }
    isInverseEra(e) {
        return "before_minguo" === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(u(e));
    }
    getYearsInEra(e) {
        return "before_minguo" === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = "roc");
    }
}
function u(e) {
    let [a, t] = (0, n.f5)(i(e));
    return new (0, r.ng)(a, t, e.month, e.day);
}
