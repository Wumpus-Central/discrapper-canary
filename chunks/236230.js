t.d(a, { p: () => l });
var r = t(99478),
    n = t(526531);
let i = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class l {
    fromJulianDay(e) {
        let a = e - 1948320,
            t = 1 + Math.floor((33 * a + 3) / 12053),
            n = a - (365 * (t - 1) + Math.floor((8 * t + 21) / 33)),
            l = n < 216 ? Math.floor(n / 31) : Math.floor((n - 6) / 30),
            o = n - i[l] + 1;
        return new (0, r.ng)(this, t, l + 1, o);
    }
    toJulianDay(e) {
        let a = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (a += i[e.month - 1]), (a += e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 || 8 > (0, n.z)(25 * e.year + 11, 33) ? 30 : 29;
    }
    getEras() {
        return ["AP"];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = "persian";
    }
}
