t.d(a, { u: () => c });
var r = t(99478),
    n = t(142922);
let i = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1],
    ],
    o = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30],
    ],
    u = [1867, 1911, 1925, 1988, 2018],
    l = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function s(e) {
    let a = i.findIndex(
        ([a, t, r]) =>
            !!(e.year < a) || (e.year === a && !!(e.month < t)) || (e.year === a && e.month === t && !!(e.day < r)),
    );
    return -1 === a ? i.length - 1 : 0 === a ? 0 : a - 1;
}
function d(e) {
    let a = u[l.indexOf(e.era)];
    if (!a) throw Error("Unknown era: " + e.era);
    return new (0, r.ng)(e.year + a, e.month, e.day);
}
class c extends n.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = s(a);
        return new (0, r.ng)(this, l[t], a.year - u[t], a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(d(e));
    }
    balanceDate(e) {
        let a = d(e),
            t = s(a);
        l[t] !== e.era && ((e.era = l[t]), (e.year = a.year - u[t])), this.constrainDate(e);
    }
    constrainDate(e) {
        let a = l.indexOf(e.era),
            t = o[a];
        if (null != t) {
            let [r, n, i] = t,
                o = r - u[a];
            (e.year = Math.max(1, Math.min(o, e.year))),
                e.year === o && ((e.month = Math.min(n, e.month)), e.month === n && (e.day = Math.min(i, e.day)));
        }
        if (1 === e.year && a >= 0) {
            let [, t, r] = i[a];
            (e.month = Math.max(t, e.month)), e.month === t && (e.day = Math.max(r, e.day));
        }
    }
    getEras() {
        return l;
    }
    getYearsInEra(e) {
        let a = l.indexOf(e.era),
            t = i[a],
            r = i[a + 1];
        if (null == r) return 9999 - t[0] + 1;
        let n = r[0] - t[0];
        return (e.month < r[1] || (e.month === r[1] && e.day < r[2])) && n++, n;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(d(e));
    }
    getMinimumMonthInYear(e) {
        let a = m(e);
        return a ? a[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let a = m(e);
        return a && e.month === a[1] ? a[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = "japanese");
    }
}
function m(e) {
    if (1 === e.year) return i[l.indexOf(e.era)];
}
