n.d(t, {
    u: () => d,
});
var r = n(99478),
    i = n(142922);
let a = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1],
    ],
    s = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30],
    ],
    o = [1867, 1911, 1925, 1988, 2018],
    l = ["meiji", "taisho", "showa", "heisei", "reiwa"];

function c(e) {
    let t = a.findIndex(
        ([t, n, r]) =>
            !!(e.year < t) || (e.year === t && !!(e.month < n)) || (e.year === t && e.month === n && !!(e.day < r)),
    );
    return -1 === t ? a.length - 1 : 0 === t ? 0 : t - 1;
}

function u(e) {
    let t = o[l.indexOf(e.era)];
    if (!t) throw Error("Unknown era: " + e.era);
    return new (0, r.ng)(e.year + t, e.month, e.day);
}
class d extends i.FG {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = c(t);
        return new (0, r.ng)(this, l[n], t.year - o[n], t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(u(e));
    }
    balanceDate(e) {
        let t = u(e),
            n = c(t);
        l[n] !== e.era && ((e.era = l[n]), (e.year = t.year - o[n])), this.constrainDate(e);
    }
    constrainDate(e) {
        let t = l.indexOf(e.era),
            n = s[t];
        if (null != n) {
            let [r, i, a] = n,
                s = r - o[t];
            (e.year = Math.max(1, Math.min(s, e.year))),
                e.year === s && ((e.month = Math.min(i, e.month)), e.month === i && (e.day = Math.min(a, e.day)));
        }
        if (1 === e.year && t >= 0) {
            let [, n, r] = a[t];
            (e.month = Math.max(n, e.month)), e.month === n && (e.day = Math.max(r, e.day));
        }
    }
    getEras() {
        return l;
    }
    getYearsInEra(e) {
        let t = l.indexOf(e.era),
            n = a[t],
            r = a[t + 1];
        if (null == r) return 9999 - n[0] + 1;
        let i = r[0] - n[0];
        return (e.month < r[1] || (e.month === r[1] && e.day < r[2])) && i++, i;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(u(e));
    }
    getMinimumMonthInYear(e) {
        let t = f(e);
        return t ? t[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let t = f(e);
        return t && e.month === t[1] ? t[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = "japanese");
    }
}

function f(e) {
    if (1 === e.year) return a[l.indexOf(e.era)];
}
