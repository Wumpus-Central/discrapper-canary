t.d(a, { H: () => c });
var u = t(720479),
    n = t(745597);
let r = 765433;
function i(e) {
    return 7 > (0, n.w)(7 * e + 1, 19);
}
function o(e) {
    let a = Math.floor((235 * e - 234) / 19),
        t = 29 * a + Math.floor((12084 + 13753 * a) / 25920);
    return 3 > (0, n.w)(3 * (t + 1), 7) && (t += 1), t;
}
function l(e) {
    let a, t;
    return o(e) + ((a = o(e - 1)), (t = o(e)), o(e + 1) - t == 356 ? 2 : +(t - a == 382));
}
function s(e) {
    return l(e + 1) - l(e);
}
function d(e, a) {
    if ((a >= 6 && !i(e) && a++, 4 === a || 7 === a || 9 === a || 11 === a || 13 === a)) return 29;
    let t = (function (e) {
        let a = s(e);
        switch ((a > 380 && (a -= 30), a)) {
            case 353:
                return 0;
            case 354:
                return 1;
            case 355:
                return 2;
        }
    })(e);
    return 2 === a ? (2 === t ? 30 : 29) : 3 === a ? (0 === t ? 29 : 30) : 6 === a ? 30 * !!i(e) : 30;
}
class c {
    fromJulianDay(e) {
        let a = e - 347997,
            t = Math.floor((((25920 * a) / r) * 19 + 234) / 235) + 1,
            n = l(t),
            i = Math.floor(a - n);
        for (; i < 1; ) i = Math.floor(a - (n = l(--t)));
        let o = 1,
            s = 0;
        for (; s < i; ) (s += d(t, o)), o++;
        let c = i - (s -= d(t, --o));
        return new (0, u.aw)(this, t, o, c);
    }
    toJulianDay(e) {
        let a = l(e.year);
        for (let t = 1; t < e.month; t++) a += d(e.year, t);
        return a + e.day + 347997;
    }
    getDaysInMonth(e) {
        return d(e.year, e.month);
    }
    getMonthsInYear(e) {
        return i(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return s(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ["AM"];
    }
    balanceYearMonth(e, a) {
        a.year !== e.year &&
            (i(a.year) && !i(e.year) && a.month > 6 ? e.month-- : !i(a.year) && i(e.year) && a.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = "hebrew";
    }
}
