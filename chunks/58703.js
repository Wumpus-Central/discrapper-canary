"use strict";
n.d(t, {
    Xm: () => M,
    v0: () => S,
    m_: () => A,
    N5: () => P,
    mk: () => C,
    uN: () => b,
    ro: () => T,
    Fe: () => R,
    c_: () => I,
    Tf: () => L,
    K7: () => v,
    i$: () => N,
    P6: () => k,
});
var i = n(989349),
    r = n.n(i),
    s = n(873298),
    a = n(228366);
n(321073);
var o = n(19575);
let l =
    null != window.DiscordNative
        ? function (e, t) {
              return o.Ay.getDiscordUtils()?.createDateFormatter?.(e, t);
          }
        : void 0;
var d = n(253932),
    _ = n(773669),
    u = n(985018);
function c(e, t) {
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
function h(e, t, n) {
    return e < 12 ? (n ? "am" : "AM") : n ? "pm" : "PM";
}
let m = new (n(626584).A)("DateUtils"),
    f = Object.create(null);
function g() {
    let e = d.PZ.getSetting(),
        t = e !== s.PZ.AUTO;
    for (let n of Object.values(u.intl.formatConfig.time))
        null != n &&
            "hour" in n &&
            (t && e === s.PZ.H12
                ? (n.hourCycle = "h12")
                : t && e === s.PZ.H23
                  ? (n.hourCycle = "h23")
                  : delete n.hourCycle);
}
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (m.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let i = new Date(n),
        r = i.getTime();
    return t || (r -= 6e4 * i.getTimezoneOffset()), 864e5 * Math.floor(r / 864e5);
}
function A(e, t) {
    return Math.floor((p(e, !1) - p(t, !1)) / 864e5);
}
function I(e, t) {
    return (e.getTime() - t.getTime()) / 864e5;
}
function T(e, t) {
    return 864e5 >= Math.abs(e - t) && e.getDate() === t.getDate();
}
function S(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function N(e, t, n) {
    let i = O(e).locale(),
        a = `${i}:${t}:${n ?? d.PZ.getSetting()}`,
        o = f[a];
    return (
        null == o &&
            (o = f[a] =
                (function (e, t) {
                    var n;
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a =
                            t ??
                            (function () {
                                let {
                                    months: e,
                                    monthsShort: t,
                                    weekdays: n,
                                    weekdaysShort: i,
                                    weekdaysMin: s,
                                    meridiem: a = h,
                                    ordinal: o,
                                    longDateFormat: l,
                                    week: d = { dow: 0, doy: 6 },
                                } = r().localeData()._config;
                                return {
                                    months: E("month", e),
                                    monthsShort: E("month", t),
                                    weekdays: E("day", n),
                                    weekdaysShort: E("day", i),
                                    weekdaysMin: E("day", s),
                                    meridiem: a,
                                    ordinal: "string" == typeof o ? (e) => o.replace("%d", `${e}`) : o,
                                    longDateFormat: l,
                                    longFormatters: [],
                                    week: d,
                                };
                            })();
                    (void 0 !== t || i || 0) &&
                        (e = (n = e).replace(/L[L|T|S]{0,3}/g, (e, t) => {
                            if (/^LLLL/.test(e)) return a.longDateFormat.LLLL;
                            if (/^LLL/.test(e)) return a.longDateFormat.LLL + e.slice(3);
                            if (/^LL/.test(e)) return a.longDateFormat.LL + e.slice(2);
                            if (/^LTS/.test(e)) return a.longDateFormat.LTS + e.slice(3);
                            if (/^LT/.test(e)) return a.longDateFormat.LT + e.slice(2);
                            else if (/^L/.test(e) && "[" !== n[t - 1]) return a.longDateFormat.L + e.slice(1);
                            return e;
                        }));
                    let o = [],
                        m = {
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
                        f = e;
                    function g(e) {
                        o.push("(" + e + ")");
                    }
                    function p(e) {
                        f = f.slice(e);
                    }
                    for (; f.length > 0; ) {
                        switch (f.charAt(0)) {
                            case "M":
                                if (((m.month = !0), /^MMMM/.test(f))) {
                                    g(`localeData.months(_month, "${e}")`), p(4);
                                    continue;
                                }
                                if (/^MMM/.test(f)) {
                                    g(`localeData.monthsShort(_month, "${e}")`), p(3);
                                    continue;
                                }
                                if (/^MM/.test(f)) {
                                    g('_month+1 < 10 ? "0" : ""'), g("_month+1"), p(2);
                                    continue;
                                }
                                if (/^Mo/.test(f)) {
                                    g('localeData.ordinal(_month, "M")'), p(2);
                                    continue;
                                }
                                g("_month + 1"), p(1);
                                continue;
                            case "Q":
                                if (((m.month = !0), /^Qo/.test(f))) {
                                    g('localeData.ordinal((_month + 1) / 3, "Q")'), p(2);
                                    continue;
                                }
                                g("Math.ceil((_month + 1) / 3)"), p(1);
                                continue;
                            case "D":
                                if (/^DDD/.test(f)) {
                                    if (((m.dayOfYear = !0), /^DDDD/.test(f))) {
                                        g('_doy < 100 ? "0" : ""'), g('_doy < 10 ? "0" : ""'), g("_doy"), p(4);
                                        continue;
                                    }
                                    if (/^DDDo/.test(f)) {
                                        g('localeData.ordinal(_doy, "DDD")'), p(4);
                                        continue;
                                    }
                                    g("_doy"), p(3);
                                    continue;
                                }
                                if (((m.date = !0), /^DD/.test(f))) {
                                    g('_date < 10 ? "0" : ""'), g("_date"), p(2);
                                    continue;
                                }
                                if (/^Do/.test(f)) {
                                    g('localeData.ordinal(_date, "D")'), p(2);
                                    continue;
                                }
                                g("_date"), p(1);
                                continue;
                            case "d":
                                if (((m.day = !0), /^dddd/.test(f))) {
                                    g(`localeData.weekdays(_day, "${e}")`), p(4);
                                    continue;
                                }
                                if (/^ddd/.test(f)) {
                                    g(`localeData.weekdaysShort(_day, "${e}")`), p(3);
                                    continue;
                                }
                                if (/^dd/.test(f)) {
                                    g(`localeData.weekdaysMin(_day, "${e}")`), p(2);
                                    continue;
                                }
                                if (/^do/.test(f)) {
                                    g('localeData.ordinal(_day, "d")'), p(2);
                                    continue;
                                }
                                g("_day"), p(1);
                                continue;
                            case "e":
                                (m.day = !0), g("(_day + 7 - " + +a.week.dow + ") % 7"), p(1);
                                continue;
                            case "E":
                                (m.day = !0), g("_day === 0 ? 7 : _day"), p(1);
                                continue;
                            case "w":
                                if (((m.week = !0), /^ww/.test(f))) {
                                    g('_week < 10 ? "0" : ""'), g("_week"), p(2);
                                    continue;
                                }
                                if (/^wo/.test(f)) {
                                    g('localeData.ordinal(_week, "w")'), p(2);
                                    continue;
                                }
                                g("_week"), p(1);
                                continue;
                            case "W":
                                if (((m.isoweek = !0), /^WW/.test(f))) {
                                    g('_i_week < 10 ? "0" : ""'), g("_i_week"), p(2);
                                    continue;
                                }
                                if (/^Wo/.test(f)) {
                                    g('localeData.ordinal(_i_week, "W")'), p(2);
                                    continue;
                                }
                                g("_i_week"), p(1);
                                continue;
                            case "Y":
                                if (((m.year = !0), /^YYYY/.test(f))) {
                                    g("_year"), p(4);
                                    continue;
                                }
                                if (/^YY/.test(f)) {
                                    g('(_year % 100) < 10 ? "0" : ""'), g("_year % 100"), p(2);
                                    continue;
                                }
                                g('_year < 9999 ? _year : "+" + _year'), p(1);
                                continue;
                            case "g":
                                if (((m.week = !0), /^gggg/.test(f))) {
                                    g("_weekYear"), p(4);
                                    continue;
                                }
                                if (/^gg/.test(f)) {
                                    g('(_weekYear % 100) < 10 ? "0" : ""'), g("_weekYear % 100"), p(2);
                                    continue;
                                }
                                break;
                            case "G":
                                if (((m.isoweek = !0), /^GGGG/.test(f))) {
                                    g("_i_weekYear"), p(4);
                                    continue;
                                }
                                if (/^GG/.test(f)) {
                                    g('(_i_weekYear % 100) < 10 ? "0" : ""'), g("_i_weekYear % 100"), p(2);
                                    continue;
                                }
                                break;
                            case "A":
                                (m.hour = !0), (m.minutes = !0), g("localeData.meridiem(_hour, _mins, false)"), p(1);
                                continue;
                            case "a":
                                (m.hour = !0), (m.minutes = !0), g("localeData.meridiem(_hour, _mins, true)"), p(1);
                                continue;
                            case "H":
                                if (((m.hour = !0), /^HH/.test(f))) {
                                    g('_hour < 10 ? "0" : ""'), g("_hour"), p(2);
                                    continue;
                                }
                                g("_hour"), p(1);
                                continue;
                            case "h":
                                if (((m.hour = !0), /^hh/.test(f))) {
                                    g('((_hour+11) % 12) < 9 ? "0" : ""'), g("((_hour+11) % 12) + 1"), p(2);
                                    continue;
                                }
                                g("((_hour+11) % 12) + 1"), p(1);
                                continue;
                            case "k":
                                if (((m.hour = !0), /^kk/.test(f))) {
                                    g('_hour > 0 && _hour < 10 ? "0" : ""'), g('_hour === 0 ? "24" : _hour'), p(2);
                                    continue;
                                }
                                g('_hour === 0 ? "24" : _hour'), p(1);
                                continue;
                            case "m":
                                if (((m.minutes = !0), /^mm/.test(f))) {
                                    g('_mins < 10 ? "0" : ""'), g("_mins"), p(2);
                                    continue;
                                }
                                g("_mins"), p(1);
                                continue;
                            case "s":
                                if (((m.seconds = !0), /^ss/.test(f))) {
                                    g('_secs < 10 ? "0" : ""'), g("_secs"), p(2);
                                    continue;
                                }
                                g("_secs"), p(1);
                                continue;
                            case "S":
                                if (((m.millis = !0), /^SSS/.test(f))) {
                                    g('_ms < 100 ? "0" : ""'), g('_ms < 10 ? "0" : ""'), g("_ms");
                                    let e = /^S{3,9}/.exec(f);
                                    if (null == e) throw Error("ms len regex failed");
                                    let t = e[0].length;
                                    t > 3 && g(`"${Array(t - 2).join("0")}"`), p(t);
                                    continue;
                                }
                                if (/^SS/.test(f)) {
                                    g('_ms < 100 ? "0" : ""'), g("Math.floor(_ms/10)"), p(2);
                                    continue;
                                }
                                g("Math.floor(_ms / 100)"), p(1);
                                continue;
                            case "Z":
                                if (((m.offset = !0), /^ZZ/.test(f))) {
                                    g('_offs >= 0 ? "+" : "-"'),
                                        g('_offH < 10 ? "0" : ""'),
                                        g("_offH"),
                                        g('_offM < 10 ? "0" : ""'),
                                        g("_offM"),
                                        p(2);
                                    continue;
                                }
                                g('_offs >= 0 ? "+" : "-"'),
                                    g('_offH < 10 ? "0" : ""'),
                                    g("_offH"),
                                    g('":"'),
                                    g('_offM < 10 ? "0" : ""'),
                                    g("_offM"),
                                    p(1);
                                continue;
                            case "X":
                                g("Math.floor(d / 1000)"), p(1);
                                continue;
                            case "x":
                                g("d.valueOf()"), p(1);
                                continue;
                            case "L":
                                let t = /^L(?:TS?|L*(?: LTS?)?)/.exec(f)?.[0] ?? "L";
                                a.longFormatters.push(
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
                                        let a = { dateStyle: t, timeStyle: n },
                                            o = d.PZ.getSetting();
                                        return (
                                            o !== s.PZ.AUTO &&
                                                (o === s.PZ.H12
                                                    ? (a.hourCycle = "h12")
                                                    : o === s.PZ.H23 && (a.hourCycle = "h23")),
                                            null !=
                                            (r = (function (e, t) {
                                                if (null == l) return null;
                                                try {
                                                    let n = e === u.initialLocale,
                                                        i =
                                                            null != e &&
                                                            e.split("-")[0] === u.systemLocale?.split("-")[0],
                                                        r = l(n && i ? void 0 : e, t);
                                                    if (null == r) return null;
                                                    let s = null;
                                                    return function (n) {
                                                        try {
                                                            return r(n);
                                                        } catch (e) {}
                                                        return null == s && (s = c(e, t)), s(n);
                                                    };
                                                } catch (e) {
                                                    return null;
                                                }
                                            })((i = _.default.locale), a))
                                                ? r
                                                : c(i, a)
                                        );
                                    })(t),
                                ),
                                    g(`localeData.longFormatters[${a.longFormatters.length - 1}](d)`),
                                    p(t.length);
                                continue;
                            case "[":
                                let n = f.indexOf("]");
                                if (-1 === n) {
                                    g('"["'), p(1);
                                    continue;
                                }
                                g(JSON.stringify(f.slice(1, n))), p(n + 1);
                                continue;
                        }
                        g(JSON.stringify(f.charAt(0))), p(1);
                    }
                    let A = "";
                    m.date && (A += "var _date = d.get" + (i ? "UTC" : "") + "Date();\n"),
                        m.month && (A += "var _month = d.get" + (i ? "UTC" : "") + "Month();\n"),
                        m.dayOfYear &&
                            (A +=
                                "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" +
                                (i ? "UTC" : "") +
                                "Month(0);\n_startOfYear.set" +
                                (i ? "UTC" : "") +
                                "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n"),
                        m.day && (A += "var _day = d.get" + (i ? "UTC" : "") + "Day();\n"),
                        m.year && (A += "var _year = d.get" + (i ? "UTC" : "") + "FullYear();\n"),
                        m.hour && (A += "var _hour = d.get" + (i ? "UTC" : "") + "Hours();\n"),
                        m.minutes && (A += "var _mins = d.get" + (i ? "UTC" : "") + "Minutes();\n"),
                        m.seconds && (A += "var _secs = d.get" + (i ? "UTC" : "") + "Seconds();\n"),
                        m.millis && (A += "var _ms = d.get" + (i ? "UTC" : "") + "Milliseconds();\n"),
                        m.offset &&
                            (i
                                ? (A += "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;")
                                : (A +=
                                      "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n")),
                        m.week &&
                            (A +=
                                "var _wend = " +
                                (a.week.doy - a.week.dow) +
                                ";\nvar _ddw = " +
                                +a.week.doy +
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
                        m.isoweek &&
                            (A +=
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
                    let I = Function(
                        "d",
                        "localeData",
                        (A += `return (
"" +
${o.join(" +\n")}
);`),
                    );
                    return (e) => I(e, a);
                })(t)),
        o(y(e))
    );
}
function C(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 ? arguments[2] : void 0,
        s = r().localeData(),
        a = r()(),
        o = A(y(e), a.toDate());
    if (o < -1) return N(e, "L LT", i);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return N(e, "LT", i);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return N(e, s.calendar(t, O(e), a), i);
}
function R(e, t) {
    let n = r().localeData(),
        i = r()(),
        s = A(y(e), i.toDate());
    return 0 === s
        ? N(e, "LT", t)
        : -1 === s
          ? N(e, n.calendar("lastDay", O(e), i), t)
          : s > -7
            ? N(e, "dddd", t)
            : N(e, "L", t);
}
function O(e) {
    return r().isMoment(e) ? e : r()(e);
}
function y(e) {
    return r().isMoment(e) ? e.toDate() : e;
}
function v(e) {
    let t,
        n = r().localeData(),
        i = new Date(),
        s = A(e, i);
    return "sameElse" ==
        (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse")
        ? N(e, "LLL")
        : N(e, n.calendar(t, r()(e), r()(i)));
}
_.default.addChangeListener(function () {
    f = Object.create(null);
}),
    a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", g),
    a.h.subscribe("CONNECTION_OPEN", g);
let D = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function L(e, t) {
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
function w() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function P() {
    let e = w(),
        t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    return (e.getDate() / t) * 100;
}
function k() {
    let e = w();
    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() - e.getDate();
}
function M(e) {
    return null == e
        ? ""
        : (function (e) {
              if (e.length >= 200) throw Error("Date string exceeds maximum length");
              return r()(e);
          })(e).format("YYYY-MM-DDTHH:mm");
}
