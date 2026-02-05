"use strict";
n.d(t, { p: () => o });
var r = n(99478),
    i = n(526531);
let a = 1948320,
    s = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class o {
    fromJulianDay(e) {
        let t = e - a,
            n = 1 + Math.floor((33 * t + 3) / 12053),
            i = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)),
            o = i < 216 ? Math.floor(i / 31) : Math.floor((i - 6) / 30),
            l = i - s[o] + 1;
        return new (0, r.ng)(this, n, o + 1, l);
    }
    toJulianDay(e) {
        let t = a - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (t += s[e.month - 1]), (t += e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 || 8 > (0, i.z)(25 * e.year + 11, 33) ? 30 : 29;
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
