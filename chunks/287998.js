t.d(a, { b: () => u });
var r = t(99478),
    n = t(142922);
function i(e) {
    return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function o(e) {
    let a = e - 1911;
    return a > 0 ? ["minguo", a] : ["before_minguo", 1 - a];
}
class u extends n.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            [t, i] = o((0, n.LA)(a.era, a.year));
        return new (0, r.ng)(this, t, i, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(l(e));
    }
    getEras() {
        return ["before_minguo", "minguo"];
    }
    balanceDate(e) {
        let [a, t] = o(i(e));
        (e.era = a), (e.year = t);
    }
    isInverseEra(e) {
        return "before_minguo" === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(l(e));
    }
    getYearsInEra(e) {
        return "before_minguo" === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = "roc");
    }
}
function l(e) {
    let [a, t] = (0, n.f5)(i(e));
    return new (0, r.ng)(a, t, e.month, e.day);
}
