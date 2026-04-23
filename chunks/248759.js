t.d(a, { Y: () => c });
var r = t(99478),
    n = t(526531);
let i = 765433;
function l(e) {
    return 7 > (0, n.z)(7 * e + 1, 19);
}
function o(e) {
    let a = Math.floor((235 * e - 234) / 19),
        t = 29 * a + Math.floor((12084 + 13753 * a) / 25920);
    return 3 > (0, n.z)(3 * (t + 1), 7) && (t += 1), t;
}
function u(e) {
    let a, t;
    return o(e) + ((a = o(e - 1)), (t = o(e)), o(e + 1) - t == 356 ? 2 : +(t - a == 382));
}
function s(e) {
    return u(e + 1) - u(e);
}
function d(e, a) {
    if ((a >= 6 && !l(e) && a++, 4 === a || 7 === a || 9 === a || 11 === a || 13 === a)) return 29;
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
    return 2 === a ? (2 === t ? 30 : 29) : 3 === a ? (0 === t ? 29 : 30) : 6 === a ? 30 * !!l(e) : 30;
}
class c {
    fromJulianDay(e) {
        let a = e - 347997,
            t = Math.floor((((25920 * a) / i) * 19 + 234) / 235) + 1,
            n = u(t),
            l = Math.floor(a - n);
        for (; l < 1; ) l = Math.floor(a - (n = u(--t)));
        let o = 1,
            s = 0;
        for (; s < l; ) (s += d(t, o)), o++;
        let c = l - (s -= d(t, --o));
        return new (0, r.ng)(this, t, o, c);
    }
    toJulianDay(e) {
        let a = u(e.year);
        for (let t = 1; t < e.month; t++) a += d(e.year, t);
        return a + e.day + 347997;
    }
    getDaysInMonth(e) {
        return d(e.year, e.month);
    }
    getMonthsInYear(e) {
        return l(e.year) ? 13 : 12;
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
            (l(a.year) && !l(e.year) && a.month > 6 ? e.month-- : !l(a.year) && l(e.year) && a.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = "hebrew";
    }
}
