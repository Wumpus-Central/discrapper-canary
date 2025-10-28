t.d(a, { M: () => r });
var u = t(720479),
    n = t(274738);
class r extends n.IQ {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = (0, n.J4)(a.era, a.year);
        return new (0, u.aw)(this, t - -543, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(i(e));
    }
    getEras() {
        return ["BE"];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(i(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "buddhist");
    }
}
function i(e) {
    let [a, t] = (0, n.JD)(e.year + -543);
    return new (0, u.aw)(a, t, e.month, e.day);
}
