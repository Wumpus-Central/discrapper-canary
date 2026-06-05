"use strict";
n.d(t, {
    Xm: () => x,
    v0: () => S,
    m_: () => A,
    N5: () => M,
    mk: () => N,
    uN: () => L,
    ro: () => T,
    Fe: () => v,
    c_: () => I,
    Tf: () => D,
    K7: () => O,
    i$: () => y,
    P6: () => P,
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
var u = n(885386),
    c = n(773669),
    d = n(375708);
function _(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function h(e, t) {
    if ("function" == typeof t) {
        let n = r().localeData(),
            i = t.bind(n);
        return (t, n) => i({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function f(e, t, n) {
    return e < 12 ? (n ? "am" : "AM") : n ? "pm" : "PM";
}
let p = new (n(626584).A)("DateUtils"),
    E = Object.create(null);
function m() {
    let e = u.PZ.getSetting(),
        t = e !== s.PZ.AUTO;
    for (let n of Object.values(d.intl.formatConfig.time))
        null != n &&
            "hour" in n &&
            (t && e === s.PZ.H12
                ? (n.hourCycle = "h12")
                : t && e === s.PZ.H23
                  ? (n.hourCycle = "h23")
                  : delete n.hourCycle);
}
function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (p.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let i = new Date(n),
        r = i.getTime();
    return t || (r -= 6e4 * i.getTimezoneOffset()), 864e5 * Math.floor(r / 864e5);
}
function A(e, t) {
    return Math.floor((g(e, !1) - g(t, !1)) / 864e5);
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
function y(e, t, n) {
    let i = C(e).locale(),
        a = `${i}:${t}:${n ?? u.PZ.getSetting()}`,
        o = E[a];
    return (
        null == o &&
            (o = E[a] =
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
                                    meridiem: a = f,
                                    ordinal: o,
                                    longDateFormat: l,
                                    week: u = { dow: 0, doy: 6 },
                                } = r().localeData()._config;
                                return {
                                    months: h("month", e),
                                    monthsShort: h("month", t),
                                    weekdays: h("day", n),
                                    weekdaysShort: h("day", i),
                                    weekdaysMin: h("day", s),
                                    meridiem: a,
                                    ordinal: "string" == typeof o ? (e) => o.replace("%d", `${e}`) : o,
                                    longDateFormat: l,
                                    longFormatters: [],
                                    week: u,
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
                        p = {
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
                        E = e;
                    function m(e) {
                        o.push("(" + e + ")");
                    }
                    function g(e) {
                        E = E.slice(e);
                    }
                    for (; E.length > 0; ) {
                        switch (E.charAt(0)) {
                            case "M":
                                if (((p.month = !0), /^MMMM/.test(E))) {
                                    m(`localeData.months(_month, "${e}")`), g(4);
                                    continue;
                                }
                                if (/^MMM/.test(E)) {
                                    m(`localeData.monthsShort(_month, "${e}")`), g(3);
                                    continue;
                                }
                                if (/^MM/.test(E)) {
                                    m('_month+1 < 10 ? "0" : ""'), m("_month+1"), g(2);
                                    continue;
                                }
                                if (/^Mo/.test(E)) {
                                    m('localeData.ordinal(_month, "M")'), g(2);
                                    continue;
                                }
                                m("_month + 1"), g(1);
                                continue;
                            case "Q":
                                if (((p.month = !0), /^Qo/.test(E))) {
                                    m('localeData.ordinal((_month + 1) / 3, "Q")'), g(2);
                                    continue;
                                }
                                m("Math.ceil((_month + 1) / 3)"), g(1);
                                continue;
                            case "D":
                                if (/^DDD/.test(E)) {
                                    if (((p.dayOfYear = !0), /^DDDD/.test(E))) {
                                        m('_doy < 100 ? "0" : ""'), m('_doy < 10 ? "0" : ""'), m("_doy"), g(4);
                                        continue;
                                    }
                                    if (/^DDDo/.test(E)) {
                                        m('localeData.ordinal(_doy, "DDD")'), g(4);
                                        continue;
                                    }
                                    m("_doy"), g(3);
                                    continue;
                                }
                                if (((p.date = !0), /^DD/.test(E))) {
                                    m('_date < 10 ? "0" : ""'), m("_date"), g(2);
                                    continue;
                                }
                                if (/^Do/.test(E)) {
                                    m('localeData.ordinal(_date, "D")'), g(2);
                                    continue;
                                }
                                m("_date"), g(1);
                                continue;
                            case "d":
                                if (((p.day = !0), /^dddd/.test(E))) {
                                    m(`localeData.weekdays(_day, "${e}")`), g(4);
                                    continue;
                                }
                                if (/^ddd/.test(E)) {
                                    m(`localeData.weekdaysShort(_day, "${e}")`), g(3);
                                    continue;
                                }
                                if (/^dd/.test(E)) {
                                    m(`localeData.weekdaysMin(_day, "${e}")`), g(2);
                                    continue;
                                }
                                if (/^do/.test(E)) {
                                    m('localeData.ordinal(_day, "d")'), g(2);
                                    continue;
                                }
                                m("_day"), g(1);
                                continue;
                            case "e":
                                (p.day = !0), m("(_day + 7 - " + +a.week.dow + ") % 7"), g(1);
                                continue;
                            case "E":
                                (p.day = !0), m("_day === 0 ? 7 : _day"), g(1);
                                continue;
                            case "w":
                                if (((p.week = !0), /^ww/.test(E))) {
                                    m('_week < 10 ? "0" : ""'), m("_week"), g(2);
                                    continue;
                                }
                                if (/^wo/.test(E)) {
                                    m('localeData.ordinal(_week, "w")'), g(2);
                                    continue;
                                }
                                m("_week"), g(1);
                                continue;
                            case "W":
                                if (((p.isoweek = !0), /^WW/.test(E))) {
                                    m('_i_week < 10 ? "0" : ""'), m("_i_week"), g(2);
                                    continue;
                                }
                                if (/^Wo/.test(E)) {
                                    m('localeData.ordinal(_i_week, "W")'), g(2);
                                    continue;
                                }
                                m("_i_week"), g(1);
                                continue;
                            case "Y":
                                if (((p.year = !0), /^YYYY/.test(E))) {
                                    m("_year"), g(4);
                                    continue;
                                }
                                if (/^YY/.test(E)) {
                                    m('(_year % 100) < 10 ? "0" : ""'), m("_year % 100"), g(2);
                                    continue;
                                }
                                m('_year < 9999 ? _year : "+" + _year'), g(1);
                                continue;
                            case "g":
                                if (((p.week = !0), /^gggg/.test(E))) {
                                    m("_weekYear"), g(4);
                                    continue;
                                }
                                if (/^gg/.test(E)) {
                                    m('(_weekYear % 100) < 10 ? "0" : ""'), m("_weekYear % 100"), g(2);
                                    continue;
                                }
                                break;
                            case "G":
                                if (((p.isoweek = !0), /^GGGG/.test(E))) {
                                    m("_i_weekYear"), g(4);
                                    continue;
                                }
                                if (/^GG/.test(E)) {
                                    m('(_i_weekYear % 100) < 10 ? "0" : ""'), m("_i_weekYear % 100"), g(2);
                                    continue;
                                }
                                break;
                            case "A":
                                (p.hour = !0), (p.minutes = !0), m("localeData.meridiem(_hour, _mins, false)"), g(1);
                                continue;
                            case "a":
                                (p.hour = !0), (p.minutes = !0), m("localeData.meridiem(_hour, _mins, true)"), g(1);
                                continue;
                            case "H":
                                if (((p.hour = !0), /^HH/.test(E))) {
                                    m('_hour < 10 ? "0" : ""'), m("_hour"), g(2);
                                    continue;
                                }
                                m("_hour"), g(1);
                                continue;
                            case "h":
                                if (((p.hour = !0), /^hh/.test(E))) {
                                    m('((_hour+11) % 12) < 9 ? "0" : ""'), m("((_hour+11) % 12) + 1"), g(2);
                                    continue;
                                }
                                m("((_hour+11) % 12) + 1"), g(1);
                                continue;
                            case "k":
                                if (((p.hour = !0), /^kk/.test(E))) {
                                    m('_hour > 0 && _hour < 10 ? "0" : ""'), m('_hour === 0 ? "24" : _hour'), g(2);
                                    continue;
                                }
                                m('_hour === 0 ? "24" : _hour'), g(1);
                                continue;
                            case "m":
                                if (((p.minutes = !0), /^mm/.test(E))) {
                                    m('_mins < 10 ? "0" : ""'), m("_mins"), g(2);
                                    continue;
                                }
                                m("_mins"), g(1);
                                continue;
                            case "s":
                                if (((p.seconds = !0), /^ss/.test(E))) {
                                    m('_secs < 10 ? "0" : ""'), m("_secs"), g(2);
                                    continue;
                                }
                                m("_secs"), g(1);
                                continue;
                            case "S":
                                if (((p.millis = !0), /^SSS/.test(E))) {
                                    m('_ms < 100 ? "0" : ""'), m('_ms < 10 ? "0" : ""'), m("_ms");
                                    let e = /^S{3,9}/.exec(E);
                                    if (null == e) throw Error("ms len regex failed");
                                    let t = e[0].length;
                                    t > 3 && m(`"${Array(t - 2).join("0")}"`), g(t);
                                    continue;
                                }
                                if (/^SS/.test(E)) {
                                    m('_ms < 100 ? "0" : ""'), m("Math.floor(_ms/10)"), g(2);
                                    continue;
                                }
                                m("Math.floor(_ms / 100)"), g(1);
                                continue;
                            case "Z":
                                if (((p.offset = !0), /^ZZ/.test(E))) {
                                    m('_offs >= 0 ? "+" : "-"'),
                                        m('_offH < 10 ? "0" : ""'),
                                        m("_offH"),
                                        m('_offM < 10 ? "0" : ""'),
                                        m("_offM"),
                                        g(2);
                                    continue;
                                }
                                m('_offs >= 0 ? "+" : "-"'),
                                    m('_offH < 10 ? "0" : ""'),
                                    m("_offH"),
                                    m('":"'),
                                    m('_offM < 10 ? "0" : ""'),
                                    m("_offM"),
                                    g(1);
                                continue;
                            case "X":
                                m("Math.floor(d / 1000)"), g(1);
                                continue;
                            case "x":
                                m("d.valueOf()"), g(1);
                                continue;
                            case "L":
                                let t = /^L(?:TS?|L*(?: LTS?)?)/.exec(E)?.[0] ?? "L";
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
                                            o = u.PZ.getSetting();
                                        if (o !== s.PZ.AUTO)
                                            switch (o) {
                                                case s.PZ.H12:
                                                    a.hourCycle = "h12";
                                                    break;
                                                case s.PZ.H23:
                                                    a.hourCycle = "h23";
                                            }
                                        return null !=
                                            (r = (function (e, t) {
                                                if (null == l) return null;
                                                try {
                                                    let n = e === d.initialLocale,
                                                        i =
                                                            null != e &&
                                                            e.split("-")[0] === d.systemLocale?.split("-")[0],
                                                        r = l(n && i ? void 0 : e, t);
                                                    if (null == r) return null;
                                                    let s = null;
                                                    return function (n) {
                                                        try {
                                                            return r(n);
                                                        } catch (e) {}
                                                        return null == s && (s = _(e, t)), s(n);
                                                    };
                                                } catch (e) {
                                                    return null;
                                                }
                                            })((i = c.default.locale), a))
                                            ? r
                                            : _(i, a);
                                    })(t),
                                ),
                                    m(`localeData.longFormatters[${a.longFormatters.length - 1}](d)`),
                                    g(t.length);
                                continue;
                            case "[":
                                let n = E.indexOf("]");
                                if (-1 === n) {
                                    m('"["'), g(1);
                                    continue;
                                }
                                m(JSON.stringify(E.slice(1, n))), g(n + 1);
                                continue;
                        }
                        m(JSON.stringify(E.charAt(0))), g(1);
                    }
                    let A = "";
                    p.date && (A += "var _date = d.get" + (i ? "UTC" : "") + "Date();\n"),
                        p.month && (A += "var _month = d.get" + (i ? "UTC" : "") + "Month();\n"),
                        p.dayOfYear &&
                            (A +=
                                "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" +
                                (i ? "UTC" : "") +
                                "Month(0);\n_startOfYear.set" +
                                (i ? "UTC" : "") +
                                "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n"),
                        p.day && (A += "var _day = d.get" + (i ? "UTC" : "") + "Day();\n"),
                        p.year && (A += "var _year = d.get" + (i ? "UTC" : "") + "FullYear();\n"),
                        p.hour && (A += "var _hour = d.get" + (i ? "UTC" : "") + "Hours();\n"),
                        p.minutes && (A += "var _mins = d.get" + (i ? "UTC" : "") + "Minutes();\n"),
                        p.seconds && (A += "var _secs = d.get" + (i ? "UTC" : "") + "Seconds();\n"),
                        p.millis && (A += "var _ms = d.get" + (i ? "UTC" : "") + "Milliseconds();\n"),
                        p.offset &&
                            (i
                                ? (A += "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;")
                                : (A +=
                                      "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n")),
                        p.week &&
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
                        p.isoweek &&
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
        o(R(e))
    );
}
function N(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 ? arguments[2] : void 0,
        s = r().localeData(),
        a = r()(),
        o = A(R(e), a.toDate());
    if (o < -1) return y(e, "L LT", i);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return y(e, "LT", i);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return y(e, s.calendar(t, C(e), a), i);
}
function v(e, t) {
    let n = r().localeData(),
        i = r()(),
        s = A(R(e), i.toDate());
    return 0 === s
        ? y(e, "LT", t)
        : -1 === s
          ? y(e, n.calendar("lastDay", C(e), i), t)
          : s > -7
            ? y(e, "dddd", t)
            : y(e, "L", t);
}
function C(e) {
    return r().isMoment(e) ? e : r()(e);
}
function R(e) {
    return r().isMoment(e) ? e.toDate() : e;
}
function O(e) {
    let t,
        n = r().localeData(),
        i = new Date(),
        s = A(e, i);
    return "sameElse" ==
        (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse")
        ? y(e, "LLL")
        : y(e, n.calendar(t, r()(e), r()(i)));
}
c.default.addChangeListener(function () {
    E = Object.create(null);
}),
    a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", m),
    a.h.subscribe("CONNECTION_OPEN", m);
let b = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = { days: 0, hours: 0, minutes: 0, seconds: +!!n };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return i;
    let r = Number(t) - Number(e);
    return (
        b.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (i[t] = Math.floor(r / n)), (r -= i[t] * n);
        }),
        i
    );
}
function L(e, t) {
    return e.days > 0
        ? d.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? d.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : d.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function w() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function M() {
    let e = w(),
        t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    return (e.getDate() / t) * 100;
}
function P() {
    let e = w();
    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() - e.getDate();
}
function x(e) {
    return null == e
        ? ""
        : (function (e) {
              if (e.length >= 200) throw Error("Date string exceeds maximum length");
              return r()(e);
          })(e).format("YYYY-MM-DDTHH:mm");
}
