r.d(n, {
    r: function () {
        return l;
    }
});
var i = r(927521),
    a = r(926726);
let o = 1948320,
    s = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class l {
    fromJulianDay(e) {
        let n = e - o,
            r = 1 + Math.floor((33 * n + 3) / 12053),
            a = n - (365 * (r - 1) + Math.floor((8 * r + 21) / 33)),
            l = a < 216 ? Math.floor(a / 31) : Math.floor((a - 6) / 30),
            u = a - s[l] + 1;
        return new i.aw(this, r, l + 1, u);
    }
    toJulianDay(e) {
        let n = o - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (n += s[e.month - 1] + e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 ? 30 : 8 > (0, a.wQ)(25 * e.year + 11, 33) ? 30 : 29;
    }
    getEras() {
        return ['AP'];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = 'persian';
    }
}
