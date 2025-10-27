n.d(t, { M: () => o });
var r = n(720479),
    i = n(274738);
let a = -543;
class o extends i.IQ {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = (0, i.J4)(t.era, t.year);
        return new (0, r.aw)(this, n - a, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(s(e));
    }
    getEras() {
        return ["BE"];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(s(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "buddhist");
    }
}
function s(e) {
    let [t, n] = (0, i.JD)(e.year + a);
    return new (0, r.aw)(t, n, e.month, e.day);
}
