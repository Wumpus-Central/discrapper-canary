t.d(a, { K: () => i });
var r = t(99478),
    n = t(142922);
class i extends n.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = (0, n.LA)(a.era, a.year);
        return new (0, r.ng)(this, t - -543, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(l(e));
    }
    getEras() {
        return ["BE"];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(l(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "buddhist");
    }
}
function l(e) {
    let [a, t] = (0, n.f5)(e.year + -543);
    return new (0, r.ng)(a, t, e.month, e.day);
}
