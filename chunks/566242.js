n.d(t, {
    Wt: () => d,
    Y0: () => p,
    zY: () => f,
});
var r = n(720479);
let i = 1723856,
    a = 1824665,
    o = 5500;
function s(e, t, n, r) {
    return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function l(e, t) {
    let n = Math.floor((4 * (t - e)) / 1461),
        r = 1 + Math.floor((t - s(e, n, 1, 1)) / 30),
        i = t + 1 - s(e, n, r, 1);
    return [n, r, i];
}
function c(e) {
    return Math.floor((e % 4) / 3);
}
function u(e, t) {
    return t % 13 != 0 ? 30 : c(e) + 5;
}
class d {
    fromJulianDay(e) {
        let [t, n, a] = l(i, e),
            s = "AM";
        return t <= 0 && ((s = "AA"), (t += o)), new (0, r.aw)(this, s, t, n, a);
    }
    toJulianDay(e) {
        let t = e.year;
        return "AA" === e.era && (t -= o), s(i, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        return u(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + c(e.year);
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
class f extends d {
    fromJulianDay(e) {
        let [t, n, a] = l(i, e);
        return (t += o), new (0, r.aw)(this, "AA", t, n, a);
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
class p extends d {
    fromJulianDay(e) {
        let [t, n, i] = l(a, e),
            o = "CE";
        return t <= 0 && ((o = "BCE"), (t = 1 - t)), new (0, r.aw)(this, o, t, n, i);
    }
    toJulianDay(e) {
        let t = e.year;
        return "BCE" === e.era && (t = 1 - t), s(a, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = e.year;
        return "BCE" === e.era && (t = 1 - t), u(t, e.month);
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
