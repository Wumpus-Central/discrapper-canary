"use strict";
n.d(t, {
    Xm: () => w,
    v0: () => S,
    m_: () => T,
    N5: () => P,
    mk: () => C,
    uN: () => b,
    ro: () => g,
    Fe: () => R,
    c_: () => m,
    Tf: () => v,
    K7: () => y,
    i$: () => N,
    P6: () => U,
});
var i = n(536637),
    r = n.n(i),
    a = n(873298),
    s = n(228366);
n(321073);
var l = n(19575);
let o =
    null != window.DiscordNative
        ? function (e, t) {
              return l.Ay.getDiscordUtils()?.createDateFormatter?.(e, t);
          }
        : void 0;
var d = n(885386),
    c = n(773669),
    u = n(375708);
function _(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function E(e, t) {
    if ("function" == typeof t) {
        let n = r().localeData(),
            i = t.bind(n);
        return (t, n) => i({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function A(e, t, n) {
    return e < 12 ? (n ? "am" : "AM") : n ? "pm" : "PM";
}
let h = new (n(626584).A)("DateUtils"),
    I = Object.create(null);
function f() {
    let e = d.PZ.getSetting(),
        t = e !== a.PZ.AUTO;
    for (let n of Object.values(u.intl.formatConfig.time))
        null != n &&
            "hour" in n &&
            (t && e === a.PZ.H12
                ? (n.hourCycle = "h12")
                : t && e === a.PZ.H23
                  ? (n.hourCycle = "h23")
                  : delete n.hourCycle);
}
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (h.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let i = new Date(n),
        r = i.getTime();
    return t || (r -= 6e4 * i.getTimezoneOffset()), 864e5 * Math.floor(r / 864e5);
}
function T(e, t) {
    return Math.floor((p(e, !1) - p(t, !1)) / 864e5);
}
function m(e, t) {
    return (e.getTime() - t.getTime()) / 864e5;
}
function g(e, t) {
    return 864e5 >= Math.abs(e - t) && e.getDate() === t.getDate();
}
function S(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function N(e, t, n) {
    let i = O(e).locale(),
        s = `${i}:${t}:${n ?? d.PZ.getSetting()}`,
        l = I[s];
    return (
        null == l &&
            (l = I[s] =
                (function (e, t) {
                    var n;
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s =
                            t ??
                            (function () {
                                let {
                                    months: e,
                                    monthsShort: t,
                                    weekdays: n,
                                    weekdaysShort: i,
                                    weekdaysMin: a,
                                    meridiem: s = A,
                                    ordinal: l,
                                    longDateFormat: o,
                                    week: d = { dow: 0, doy: 6 },
                                } = r().localeData()._config;
                                return {
                                    months: E("month", e),
                                    monthsShort: E("month", t),
                                    weekdays: E("day", n),
                                    weekdaysShort: E("day", i),
                                    weekdaysMin: E("day", a),
                                    meridiem: s,
                                    ordinal: "string" == typeof l ? (e) => l.replace("%d", `${e}`) : l,
                                    longDateFormat: o,
                                    longFormatters: [],
                                    week: d,
                                };
                            })();
                    (void 0 !== t || i || 0) &&
                        (e = (n = e).replace(/L[L|T|S]{0,3}/g, (e, t) => {
                            if (/^LLLL/.test(e)) return s.longDateFormat.LLLL;
                            if (/^LLL/.test(e)) return s.longDateFormat.LLL + e.slice(3);
                            if (/^LL/.test(e)) return s.longDateFormat.LL + e.slice(2);
                            if (/^LTS/.test(e)) return s.longDateFormat.LTS + e.slice(3);
                            if (/^LT/.test(e)) return s.longDateFormat.LT + e.slice(2);
                            else if (/^L/.test(e) && "[" !== n[t - 1]) return s.longDateFormat.L + e.slice(1);
                            return e;
                        }));
                    let l = [],
                        h = {
                            month: !1,
                            dayOfYear: !1,
                            date: !1,
                            day: !1,
                            week: !1,
                            isoweek: !1,
                            year: !1,
                            hour: !1,
                            minutes: !1,
                            seconds: !1,
                            millis: !1,
                            offset: !1,
                        },
                        I = e;
                    function f(e) {
                        l.push("(" + e + ")");
                    }
                    function p(e) {
                        I = I.slice(e);
                    }
                    for (; I.length > 0; ) {
                        switch (I.charAt(0)) {
                            case "M":
                                if (((h.month = !0), /^MMMM/.test(I))) {
                                    f(`localeData.months(_month, "${e}")`), p(4);
                                    continue;
                                }
                                if (/^MMM/.test(I)) {
                                    f(`localeData.monthsShort(_month, "${e}")`), p(3);
                                    continue;
                                }
                                if (/^MM/.test(I)) {
                                    f('_month+1 < 10 ? "0" : ""'), f("_month+1"), p(2);
                                    continue;
                                }
                                if (/^Mo/.test(I)) {
                                    f('localeData.ordinal(_month, "M")'), p(2);
                                    continue;
                                }
                                f("_month + 1"), p(1);
                                continue;
                            case "Q":
                                if (((h.month = !0), /^Qo/.test(I))) {
                                    f('localeData.ordinal((_month + 1) / 3, "Q")'), p(2);
                                    continue;
                                }
                                f("Math.ceil((_month + 1) / 3)"), p(1);
                                continue;
                            case "D":
                                if (/^DDD/.test(I)) {
                                    if (((h.dayOfYear = !0), /^DDDD/.test(I))) {
                                        f('_doy < 100 ? "0" : ""'), f('_doy < 10 ? "0" : ""'), f("_doy"), p(4);
                                        continue;
                                    }
                                    if (/^DDDo/.test(I)) {
                                        f('localeData.ordinal(_doy, "DDD")'), p(4);
                                        continue;
                                    }
                                    f("_doy"), p(3);
                                    continue;
                                }
                                if (((h.date = !0), /^DD/.test(I))) {
                                    f('_date < 10 ? "0" : ""'), f("_date"), p(2);
                                    continue;
                                }
                                if (/^Do/.test(I)) {
                                    f('localeData.ordinal(_date, "D")'), p(2);
                                    continue;
                                }
                                f("_date"), p(1);
                                continue;
                            case "d":
                                if (((h.day = !0), /^dddd/.test(I))) {
                                    f(`localeData.weekdays(_day, "${e}")`), p(4);
                                    continue;
                                }
                                if (/^ddd/.test(I)) {
                                    f(`localeData.weekdaysShort(_day, "${e}")`), p(3);
                                    continue;
                                }
                                if (/^dd/.test(I)) {
                                    f(`localeData.weekdaysMin(_day, "${e}")`), p(2);
                                    continue;
                                }
                                if (/^do/.test(I)) {
                                    f('localeData.ordinal(_day, "d")'), p(2);
                                    continue;
                                }
                                f("_day"), p(1);
                                continue;
                            case "e":
                                (h.day = !0), f("(_day + 7 - " + +s.week.dow + ") % 7"), p(1);
                                continue;
                            case "E":
                                (h.day = !0), f("_day === 0 ? 7 : _day"), p(1);
                                continue;
                            case "w":
                                if (((h.week = !0), /^ww/.test(I))) {
                                    f('_week < 10 ? "0" : ""'), f("_week"), p(2);
                                    continue;
                                }
                                if (/^wo/.test(I)) {
                                    f('localeData.ordinal(_week, "w")'), p(2);
                                    continue;
                                }
                                f("_week"), p(1);
                                continue;
                            case "W":
                                if (((h.isoweek = !0), /^WW/.test(I))) {
                                    f('_i_week < 10 ? "0" : ""'), f("_i_week"), p(2);
                                    continue;
                                }
                                if (/^Wo/.test(I)) {
                                    f('localeData.ordinal(_i_week, "W")'), p(2);
                                    continue;
                                }
                                f("_i_week"), p(1);
                                continue;
                            case "Y":
                                if (((h.year = !0), /^YYYY/.test(I))) {
                                    f("_year"), p(4);
                                    continue;
                                }
                                if (/^YY/.test(I)) {
                                    f('(_year % 100) < 10 ? "0" : ""'), f("_year % 100"), p(2);
                                    continue;
                                }
                                f('_year < 9999 ? _year : "+" + _year'), p(1);
                                continue;
                            case "g":
                                if (((h.week = !0), /^gggg/.test(I))) {
                                    f("_weekYear"), p(4);
                                    continue;
                                }
                                if (/^gg/.test(I)) {
                                    f('(_weekYear % 100) < 10 ? "0" : ""'), f("_weekYear % 100"), p(2);
                                    continue;
                                }
                                break;
                            case "G":
                                if (((h.isoweek = !0), /^GGGG/.test(I))) {
                                    f("_i_weekYear"), p(4);
                                    continue;
                                }
                                if (/^GG/.test(I)) {
                                    f('(_i_weekYear % 100) < 10 ? "0" : ""'), f("_i_weekYear % 100"), p(2);
                                    continue;
                                }
                                break;
                            case "A":
                                (h.hour = !0), (h.minutes = !0), f("localeData.meridiem(_hour, _mins, false)"), p(1);
                                continue;
                            case "a":
                                (h.hour = !0), (h.minutes = !0), f("localeData.meridiem(_hour, _mins, true)"), p(1);
                                continue;
                            case "H":
                                if (((h.hour = !0), /^HH/.test(I))) {
                                    f('_hour < 10 ? "0" : ""'), f("_hour"), p(2);
                                    continue;
                                }
                                f("_hour"), p(1);
                                continue;
                            case "h":
                                if (((h.hour = !0), /^hh/.test(I))) {
                                    f('((_hour+11) % 12) < 9 ? "0" : ""'), f("((_hour+11) % 12) + 1"), p(2);
                                    continue;
                                }
                                f("((_hour+11) % 12) + 1"), p(1);
                                continue;
                            case "k":
                                if (((h.hour = !0), /^kk/.test(I))) {
                                    f('_hour > 0 && _hour < 10 ? "0" : ""'), f('_hour === 0 ? "24" : _hour'), p(2);
                                    continue;
                                }
                                f('_hour === 0 ? "24" : _hour'), p(1);
                                continue;
                            case "m":
                                if (((h.minutes = !0), /^mm/.test(I))) {
                                    f('_mins < 10 ? "0" : ""'), f("_mins"), p(2);
                                    continue;
                                }
                                f("_mins"), p(1);
                                continue;
                            case "s":
                                if (((h.seconds = !0), /^ss/.test(I))) {
                                    f('_secs < 10 ? "0" : ""'), f("_secs"), p(2);
                                    continue;
                                }
                                f("_secs"), p(1);
                                continue;
                            case "S":
                                if (((h.millis = !0), /^SSS/.test(I))) {
                                    f('_ms < 100 ? "0" : ""'), f('_ms < 10 ? "0" : ""'), f("_ms");
                                    let e = /^S{3,9}/.exec(I);
                                    if (null == e) throw Error("ms len regex failed");
                                    let t = e[0].length;
                                    t > 3 && f(`"${Array(t - 2).join("0")}"`), p(t);
                                    continue;
                                }
                                if (/^SS/.test(I)) {
                                    f('_ms < 100 ? "0" : ""'), f("Math.floor(_ms/10)"), p(2);
                                    continue;
                                }
                                f("Math.floor(_ms / 100)"), p(1);
                                continue;
                            case "Z":
                                if (((h.offset = !0), /^ZZ/.test(I))) {
                                    f('_offs >= 0 ? "+" : "-"'),
                                        f('_offH < 10 ? "0" : ""'),
                                        f("_offH"),
                                        f('_offM < 10 ? "0" : ""'),
                                        f("_offM"),
                                        p(2);
                                    continue;
                                }
                                f('_offs >= 0 ? "+" : "-"'),
                                    f('_offH < 10 ? "0" : ""'),
                                    f("_offH"),
                                    f('":"'),
                                    f('_offM < 10 ? "0" : ""'),
                                    f("_offM"),
                                    p(1);
                                continue;
                            case "X":
                                f("Math.floor(d / 1000)"), p(1);
                                continue;
                            case "x":
                                f("d.valueOf()"), p(1);
                                continue;
                            case "L":
                                let t = /^L(?:TS?|L*(?: LTS?)?)/.exec(I)?.[0] ?? "L";
                                s.longFormatters.push(
                                    (function (e) {
                                        let t, n, i, r;
                                        "LLLL" === e
                                            ? ((t = "full"), (n = "short"))
                                            : "LLL" === e
                                              ? ((t = "long"), (n = "short"))
                                              : "LL" === e
                                                ? (t = "long")
                                                : "L" === e
                                                  ? (t = "short")
                                                  : "LT" === e
                                                    ? (n = "short")
                                                    : "LTS" === e
                                                      ? (n = "medium")
                                                      : "L LT" === e
                                                        ? ((t = "short"), (n = "short"))
                                                        : ((t = "short"), (n = "medium"));
                                        let s = { dateStyle: t, timeStyle: n },
                                            l = d.PZ.getSetting();
                                        if (l !== a.PZ.AUTO)
                                            switch (l) {
                                                case a.PZ.H12:
                                                    s.hourCycle = "h12";
                                                    break;
                                                case a.PZ.H23:
                                                    s.hourCycle = "h23";
                                            }
                                        return null !=
                                            (r = (function (e, t) {
                                                if (null == o) return null;
                                                try {
                                                    let n = e === u.initialLocale,
                                                        i =
                                                            null != e &&
                                                            e.split("-")[0] === u.systemLocale?.split("-")[0],
                                                        r = o(n && i ? void 0 : e, t);
                                                    if (null == r) return null;
                                                    let a = null;
                                                    return function (n) {
                                                        try {
                                                            return r(n);
                                                        } catch (e) {}
                                                        return null == a && (a = _(e, t)), a(n);
                                                    };
                                                } catch (e) {
                                                    return null;
                                                }
                                            })((i = c.default.locale), s))
                                            ? r
                                            : _(i, s);
                                    })(t),
                                ),
                                    f(`localeData.longFormatters[${s.longFormatters.length - 1}](d)`),
                                    p(t.length);
                                continue;
                            case "[":
                                let n = I.indexOf("]");
                                if (-1 === n) {
                                    f('"["'), p(1);
                                    continue;
                                }
                                f(JSON.stringify(I.slice(1, n))), p(n + 1);
                                continue;
                        }
                        f(JSON.stringify(I.charAt(0))), p(1);
                    }
                    let T = "";
                    h.date && (T += "var _date = d.get" + (i ? "UTC" : "") + "Date();\n"),
                        h.month && (T += "var _month = d.get" + (i ? "UTC" : "") + "Month();\n"),
                        h.dayOfYear &&
                            (T +=
                                "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" +
                                (i ? "UTC" : "") +
                                "Month(0);\n_startOfYear.set" +
                                (i ? "UTC" : "") +
                                "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n"),
                        h.day && (T += "var _day = d.get" + (i ? "UTC" : "") + "Day();\n"),
                        h.year && (T += "var _year = d.get" + (i ? "UTC" : "") + "FullYear();\n"),
                        h.hour && (T += "var _hour = d.get" + (i ? "UTC" : "") + "Hours();\n"),
                        h.minutes && (T += "var _mins = d.get" + (i ? "UTC" : "") + "Minutes();\n"),
                        h.seconds && (T += "var _secs = d.get" + (i ? "UTC" : "") + "Seconds();\n"),
                        h.millis && (T += "var _ms = d.get" + (i ? "UTC" : "") + "Milliseconds();\n"),
                        h.offset &&
                            (i
                                ? (T += "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;")
                                : (T +=
                                      "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n")),
                        h.week &&
                            (T +=
                                "var _wend = " +
                                (s.week.doy - s.week.dow) +
                                ";\nvar _ddw = " +
                                +s.week.doy +
                                " - d.get" +
                                (i ? "UTC" : "") +
                                "Day();\nif(_ddw > _wend) _ddw -= 7;\nif(_ddw < _wend - 7) _ddw += 7;\nvar _d2 = new Date(d.valueOf());\n_d2.set" +
                                (i ? "UTC" : "") +
                                "Date(d.get" +
                                (i ? "UTC" : "") +
                                "Date() + _ddw);\nvar _soy2 = new Date(_d2.valueOf());\n_soy2.set" +
                                (i ? "UTC" : "") +
                                "Month(0);\n_soy2.set" +
                                (i ? "UTC" : "") +
                                "Date(1);\nvar _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;\nvar _week = Math.ceil(_doy2 / 7);\nvar _weekYear = _d2.get" +
                                (i ? "UTC" : "") +
                                "FullYear();\n"),
                        h.isoweek &&
                            (T +=
                                "var _i_wend = 3;\nvar _i_ddw = 4 - d.get" +
                                (i ? "UTC" : "") +
                                "Day();\nif(_i_ddw > _i_wend) _i_ddw -= 7;\nif(_i_ddw < _i_wend - 7) _i_ddw += 7;\nvar _i_d2 = new Date(d.valueOf());\n_i_d2.set" +
                                (i ? "UTC" : "") +
                                "Date(d.get" +
                                (i ? "UTC" : "") +
                                "Date() + _i_ddw);\nvar _i_soy2 = new Date(_i_d2.valueOf());\n_i_soy2.set" +
                                (i ? "UTC" : "") +
                                "Month(0);\n_i_soy2.set" +
                                (i ? "UTC" : "") +
                                "Date(1);\nvar _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;\nvar _i_week = Math.ceil(_i_doy2 / 7);\nvar _i_weekYear = _i_d2.get" +
                                (i ? "UTC" : "") +
                                "FullYear();\n");
                    let m = Function(
                        "d",
                        "localeData",
                        (T += `return (
"" +
${l.join(" +\n")}
);`),
                    );
                    return (e) => m(e, s);
                })(t)),
        l(L(e))
    );
}
function C(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 ? arguments[2] : void 0,
        a = r().localeData(),
        s = r()(),
        l = T(L(e), s.toDate());
    if (l < -1) return N(e, "L LT", i);
    if (l < 0) t = "lastDay";
    else if (l < 1) {
        if (n) return N(e, "LT", i);
        t = "sameDay";
    } else t = l < 2 ? "nextDay" : "sameElse";
    return N(e, a.calendar(t, O(e), s), i);
}
function R(e, t) {
    let n = r().localeData(),
        i = r()(),
        a = T(L(e), i.toDate());
    return 0 === a
        ? N(e, "LT", t)
        : -1 === a
          ? N(e, n.calendar("lastDay", O(e), i), t)
          : a > -7
            ? N(e, "dddd", t)
            : N(e, "L", t);
}
function O(e) {
    return r().isMoment(e) ? e : r()(e);
}
function L(e) {
    return r().isMoment(e) ? e.toDate() : e;
}
function y(e) {
    let t,
        n = r().localeData(),
        i = new Date(),
        a = T(e, i);
    return "sameElse" ==
        (t = a < -1 ? "sameElse" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : "sameElse")
        ? N(e, "LLL")
        : N(e, n.calendar(t, r()(e), r()(i)));
}
c.default.addChangeListener(function () {
    I = Object.create(null);
}),
    s.h.subscribe("USER_SETTINGS_PROTO_UPDATE", f),
    s.h.subscribe("CONNECTION_OPEN", f);
let D = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = { days: 0, hours: 0, minutes: 0, seconds: +!!n };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return i;
    let r = Number(t) - Number(e);
    return (
        D.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (i[t] = Math.floor(r / n)), (r -= i[t] * n);
        }),
        i
    );
}
function b(e, t) {
    return e.days > 0
        ? u.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? u.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : u.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function M() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function P() {
    let e = M(),
        t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    return (e.getDate() / t) * 100;
}
function U() {
    let e = M();
    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() - e.getDate();
}
function w(e) {
    return null == e
        ? ""
        : (function (e) {
              if (e.length >= 200) throw Error("Date string exceeds maximum length");
              return r()(e);
          })(e).format("YYYY-MM-DDTHH:mm");
}
