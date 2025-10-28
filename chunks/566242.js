t.d(a, {
    Wt: () => l,
    Y0: () => d,
    zY: () => s,
});
var u = t(720479);
function n(e, a, t, u) {
    return e + 365 * a + Math.floor(a / 4) + 30 * (t - 1) + u - 1;
}
function r(e, a) {
    let t = Math.floor((4 * (a - e)) / 1461),
        u = 1 + Math.floor((a - n(e, t, 1, 1)) / 30),
        r = a + 1 - n(e, t, u, 1);
    return [t, u, r];
}
function i(e) {
    return Math.floor((e % 4) / 3);
}
function o(e, a) {
    return a % 13 != 0 ? 30 : i(e) + 5;
}
class l {
    fromJulianDay(e) {
        let [a, t, n] = r(1723856, e),
            i = "AM";
        return a <= 0 && ((i = "AA"), (a += 5500)), new (0, u.aw)(this, i, a, t, n);
    }
    toJulianDay(e) {
        let a = e.year;
        return "AA" === e.era && (a -= 5500), n(1723856, a, e.month, e.day);
    }
    getDaysInMonth(e) {
        return o(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + i(e.year);
    }
    getYearsInEra(e) {
        return "AA" === e.era ? 9999 : 9991;
    }
    getEras() {
        return ["AA", "AM"];
    }
    constructor() {
        this.identifier = "ethiopic";
    }
}
class s extends l {
    fromJulianDay(e) {
        let [a, t, n] = r(1723856, e);
        return (a += 5500), new (0, u.aw)(this, "AA", a, t, n);
    }
    getEras() {
        return ["AA"];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(...e) {
        super(...e), (this.identifier = "ethioaa");
    }
}
class d extends l {
    fromJulianDay(e) {
        let [a, t, n] = r(1824665, e),
            i = "CE";
        return a <= 0 && ((i = "BCE"), (a = 1 - a)), new (0, u.aw)(this, i, a, t, n);
    }
    toJulianDay(e) {
        let a = e.year;
        return "BCE" === e.era && (a = 1 - a), n(1824665, a, e.month, e.day);
    }
    getDaysInMonth(e) {
        let a = e.year;
        return "BCE" === e.era && (a = 1 - a), o(a, e.month);
    }
    isInverseEra(e) {
        return "BCE" === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = "BCE" === e.era ? "CE" : "BCE"), (e.year = 1 - e.year));
    }
    getEras() {
        return ["BCE", "CE"];
    }
    getYearsInEra(e) {
        return "BCE" === e.era ? 9999 : 9715;
    }
    constructor(...e) {
        super(...e), (this.identifier = "coptic");
    }
}
