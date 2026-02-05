"use strict";
n.d(t, { K: () => s });
var r = n(99478),
    i = n(142922);
let a = -543;
class s extends i.FG {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = (0, i.LA)(t.era, t.year);
        return new (0, r.ng)(this, n - a, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(o(e));
    }
    getEras() {
        return ["BE"];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(o(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "buddhist");
    }
}
function o(e) {
    let [t, n] = (0, i.f5)(e.year + a);
    return new (0, r.ng)(t, n, e.month, e.day);
}
