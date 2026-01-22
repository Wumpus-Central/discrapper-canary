n.d(t, {
    b: () => l,
});
var r = n(99478),
    i = n(142922);
let a = 1911;

function s(e) {
    return "minguo" === e.era ? e.year + a : 1 - e.year + a;
}

function o(e) {
    let t = e - a;
    return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
class l extends i.FG {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            [n, a] = o((0, i.LA)(t.era, t.year));
        return new (0, r.ng)(this, n, a, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(c(e));
    }
    getEras() {
        return ["before_minguo", "minguo"];
    }
    balanceDate(e) {
        let [t, n] = o(s(e));
        (e.era = t), (e.year = n);
    }
    isInverseEra(e) {
        return "before_minguo" === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(c(e));
    }
    getYearsInEra(e) {
        return "before_minguo" === e.era ? 9999 : 9999 - a;
    }
    constructor(...e) {
        super(...e), (this.identifier = "roc");
    }
}

function c(e) {
    let [t, n] = (0, i.f5)(s(e));
    return new (0, r.ng)(t, n, e.month, e.day);
}
