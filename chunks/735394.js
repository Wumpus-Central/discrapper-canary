"use strict";
n.d(t, { A: () => f });
var r = n(136601),
    i = n(44134),
    s = n(216803),
    a = n(655909),
    o = n(564804),
    l = n(544195),
    u = n(792828);
function d(e, t) {
    var n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        i = Math.floor(r / 60),
        s = r % 60;
    return 0 === s ? n + String(i) : n + String(i) + (t || "") + (0, l.A)(s, 2);
}
function c(e, t) {
    return e % 60 == 0 ? (e > 0 ? "-" : "+") + (0, l.A)(Math.abs(e) / 60, 2) : _(e, t);
}
function _(e, t) {
    var n = Math.abs(e);
    return (e > 0 ? "-" : "+") + (0, l.A)(Math.floor(n / 60), 2) + (t || "") + (0, l.A)(n % 60, 2);
}
let f = {
    G: function (e, t, n) {
        var r = +(e.getUTCFullYear() > 0);
        switch (t) {
            case "G":
            case "GG":
            case "GGG":
                return n.era(r, { width: "abbreviated" });
            case "GGGGG":
                return n.era(r, { width: "narrow" });
            default:
                return n.era(r, { width: "wide" });
        }
    },
    y: function (e, t, n) {
        if ("yo" === t) {
            var r = e.getUTCFullYear();
            return n.ordinalNumber(r > 0 ? r : 1 - r, { unit: "year" });
        }
        return u.A.y(e, t);
    },
    Y: function (e, t, n, r) {
        var i = (0, o.A)(e, r),
            s = i > 0 ? i : 1 - i;
        if ("YY" === t) {
            var a = s % 100;
            return (0, l.A)(a, 2);
        }
        return "Yo" === t ? n.ordinalNumber(s, { unit: "year" }) : (0, l.A)(s, t.length);
    },
    R: function (e, t) {
        var n = (0, s.A)(e);
        return (0, l.A)(n, t.length);
    },
    u: function (e, t) {
        var n = e.getUTCFullYear();
        return (0, l.A)(n, t.length);
    },
    Q: function (e, t, n) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case "Q":
                return String(r);
            case "QQ":
                return (0, l.A)(r, 2);
            case "Qo":
                return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
                return n.quarter(r, { width: "abbreviated", context: "formatting" });
            case "QQQQQ":
                return n.quarter(r, { width: "narrow", context: "formatting" });
            default:
                return n.quarter(r, { width: "wide", context: "formatting" });
        }
    },
    q: function (e, t, n) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case "q":
                return String(r);
            case "qq":
                return (0, l.A)(r, 2);
            case "qo":
                return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
                return n.quarter(r, { width: "abbreviated", context: "standalone" });
            case "qqqqq":
                return n.quarter(r, { width: "narrow", context: "standalone" });
            default:
                return n.quarter(r, { width: "wide", context: "standalone" });
        }
    },
    M: function (e, t, n) {
        var r = e.getUTCMonth();
        switch (t) {
            case "M":
            case "MM":
                return u.A.M(e, t);
            case "Mo":
                return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
                return n.month(r, { width: "abbreviated", context: "formatting" });
            case "MMMMM":
                return n.month(r, { width: "narrow", context: "formatting" });
            default:
                return n.month(r, { width: "wide", context: "formatting" });
        }
    },
    L: function (e, t, n) {
        var r = e.getUTCMonth();
        switch (t) {
            case "L":
                return String(r + 1);
            case "LL":
                return (0, l.A)(r + 1, 2);
            case "Lo":
                return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
                return n.month(r, { width: "abbreviated", context: "standalone" });
            case "LLLLL":
                return n.month(r, { width: "narrow", context: "standalone" });
            default:
                return n.month(r, { width: "wide", context: "standalone" });
        }
    },
    w: function (e, t, n, r) {
        var i = (0, a.A)(e, r);
        return "wo" === t ? n.ordinalNumber(i, { unit: "week" }) : (0, l.A)(i, t.length);
    },
    I: function (e, t, n) {
        var r = (0, i.A)(e);
        return "Io" === t ? n.ordinalNumber(r, { unit: "week" }) : (0, l.A)(r, t.length);
    },
    d: function (e, t, n) {
        return "do" === t ? n.ordinalNumber(e.getUTCDate(), { unit: "date" }) : u.A.d(e, t);
    },
    D: function (e, t, n) {
        var i = (0, r.A)(e);
        return "Do" === t ? n.ordinalNumber(i, { unit: "dayOfYear" }) : (0, l.A)(i, t.length);
    },
    E: function (e, t, n) {
        var r = e.getUTCDay();
        switch (t) {
            case "E":
            case "EE":
            case "EEE":
                return n.day(r, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
                return n.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
                return n.day(r, { width: "short", context: "formatting" });
            default:
                return n.day(r, { width: "wide", context: "formatting" });
        }
    },
    e: function (e, t, n, r) {
        var i = e.getUTCDay(),
            s = (i - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "e":
                return String(s);
            case "ee":
                return (0, l.A)(s, 2);
            case "eo":
                return n.ordinalNumber(s, { unit: "day" });
            case "eee":
                return n.day(i, { width: "abbreviated", context: "formatting" });
            case "eeeee":
                return n.day(i, { width: "narrow", context: "formatting" });
            case "eeeeee":
                return n.day(i, { width: "short", context: "formatting" });
            default:
                return n.day(i, { width: "wide", context: "formatting" });
        }
    },
    c: function (e, t, n, r) {
        var i = e.getUTCDay(),
            s = (i - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "c":
                return String(s);
            case "cc":
                return (0, l.A)(s, t.length);
            case "co":
                return n.ordinalNumber(s, { unit: "day" });
            case "ccc":
                return n.day(i, { width: "abbreviated", context: "standalone" });
            case "ccccc":
                return n.day(i, { width: "narrow", context: "standalone" });
            case "cccccc":
                return n.day(i, { width: "short", context: "standalone" });
            default:
                return n.day(i, { width: "wide", context: "standalone" });
        }
    },
    i: function (e, t, n) {
        var r = e.getUTCDay(),
            i = 0 === r ? 7 : r;
        switch (t) {
            case "i":
                return String(i);
            case "ii":
                return (0, l.A)(i, t.length);
            case "io":
                return n.ordinalNumber(i, { unit: "day" });
            case "iii":
                return n.day(r, { width: "abbreviated", context: "formatting" });
            case "iiiii":
                return n.day(r, { width: "narrow", context: "formatting" });
            case "iiiiii":
                return n.day(r, { width: "short", context: "formatting" });
            default:
                return n.day(r, { width: "wide", context: "formatting" });
        }
    },
    a: function (e, t, n) {
        var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
            case "a":
            case "aa":
                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
            case "aaa":
                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
            case "aaaaa":
                return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
    },
    b: function (e, t, n) {
        var r,
            i = e.getUTCHours();
        switch (((r = 12 === i ? "noon" : 0 === i ? "midnight" : i / 12 >= 1 ? "pm" : "am"), t)) {
            case "b":
            case "bb":
                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
            case "bbb":
                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
            case "bbbbb":
                return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
    },
    B: function (e, t, n) {
        var r,
            i = e.getUTCHours();
        switch (((r = i >= 17 ? "evening" : i >= 12 ? "afternoon" : i >= 4 ? "morning" : "night"), t)) {
            case "B":
            case "BB":
            case "BBB":
                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
            case "BBBBB":
                return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
    },
    h: function (e, t, n) {
        if ("ho" === t) {
            var r = e.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
        }
        return u.A.h(e, t);
    },
    H: function (e, t, n) {
        return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" }) : u.A.H(e, t);
    },
    K: function (e, t, n) {
        var r = e.getUTCHours() % 12;
        return "Ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : (0, l.A)(r, t.length);
    },
    k: function (e, t, n) {
        var r = e.getUTCHours();
        return (0 === r && (r = 24), "ko" === t) ? n.ordinalNumber(r, { unit: "hour" }) : (0, l.A)(r, t.length);
    },
    m: function (e, t, n) {
        return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" }) : u.A.m(e, t);
    },
    s: function (e, t, n) {
        return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" }) : u.A.s(e, t);
    },
    S: function (e, t) {
        return u.A.S(e, t);
    },
    X: function (e, t, n, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        if (0 === i) return "Z";
        switch (t) {
            case "X":
                return c(i);
            case "XXXX":
            case "XX":
                return _(i);
            default:
                return _(i, ":");
        }
    },
    x: function (e, t, n, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "x":
                return c(i);
            case "xxxx":
            case "xx":
                return _(i);
            default:
                return _(i, ":");
        }
    },
    O: function (e, t, n, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + d(i, ":");
            default:
                return "GMT" + _(i, ":");
        }
    },
    z: function (e, t, n, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + d(i, ":");
            default:
                return "GMT" + _(i, ":");
        }
    },
    t: function (e, t, n, r) {
        var i = Math.floor((r._originalDate || e).getTime() / 1e3);
        return (0, l.A)(i, t.length);
    },
    T: function (e, t, n, r) {
        var i = (r._originalDate || e).getTime();
        return (0, l.A)(i, t.length);
    },
};
