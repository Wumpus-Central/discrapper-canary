"use strict";
n.d(t, {
    G3: () => tp,
    j: () => tS,
    IS: () => e1,
    Ze: () => e3,
    Ri: () => tu,
    z7: () => tI,
    p$: () => tE,
    er: () => th,
    zD: () => td,
    Xy: () => e2,
    sv: () => t_,
    CI: () => tl,
    N5: () => tc,
    jd: () => ti,
    CC: () => ts,
    Xx: () => tn,
    DS: () => tT,
    nG: () => tA,
    X7: () => tf,
}),
    n(321073);
var i,
    r,
    s = n(735438),
    a = n(989349),
    o = n.n(a),
    l = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    u = (function () {
        function e(e, t) {
            if (0 === t) throw Error("Can't create weekday with n == 0");
            (this.weekday = e), (this.n = t);
        }
        return (
            (e.fromStr = function (t) {
                return new e(l.indexOf(t));
            }),
            (e.prototype.nth = function (t) {
                return this.n === t ? this : new e(this.weekday, t);
            }),
            (e.prototype.equals = function (e) {
                return this.weekday === e.weekday && this.n === e.n;
            }),
            (e.prototype.toString = function () {
                var e = l[this.weekday];
                return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
            }),
            (e.prototype.getJsWeekday = function () {
                return 6 === this.weekday ? 0 : this.weekday + 1;
            }),
            e
        );
    })(),
    c = function (e) {
        return null != e;
    },
    d = function (e) {
        return "number" == typeof e;
    },
    _ = function (e) {
        return "string" == typeof e && l.includes(e);
    },
    f = Array.isArray,
    h = function (e, t) {
        void 0 === t && (t = e), 1 == arguments.length && ((t = e), (e = 0));
        for (var n = [], i = e; i < t; i++) n.push(i);
        return n;
    },
    p = function (e, t) {
        var n = 0,
            i = [];
        if (f(e)) for (; n < t; n++) i[n] = [].concat(e);
        else for (; n < t; n++) i[n] = e;
        return i;
    };
function E(e, t, n) {
    void 0 === n && (n = " ");
    var i = String(e);
    return ((t |= 0), i.length > t)
        ? String(i)
        : ((t -= i.length) > n.length && (n += p(n, t / n.length)), n.slice(0, t) + String(i));
}
var m = function (e, t, n) {
        var i = e.split(t);
        return n ? i.slice(0, n).concat([i.slice(n).join(t)]) : i;
    },
    g = function (e, t) {
        var n = e % t;
        return n * t < 0 ? n + t : n;
    },
    A = function (e, t) {
        return { div: Math.floor(e / t), mod: g(e, t) };
    },
    I = function (e) {
        return !c(e) || 0 === e.length;
    },
    T = function (e) {
        return !I(e);
    },
    S = function (e, t) {
        return T(e) && -1 !== e.indexOf(t);
    },
    N = function (e, t, n, i, r, s) {
        return (
            void 0 === i && (i = 0),
            void 0 === r && (r = 0),
            void 0 === s && (s = 0),
            new Date(Date.UTC(e, t - 1, n, i, r, s))
        );
    },
    y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    C = N(1970, 1, 1),
    v = [6, 0, 1, 2, 3, 4, 5],
    O = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    R = function (e) {
        return e instanceof Date;
    },
    b = function (e) {
        return R(e) && !isNaN(e.getTime());
    },
    D = function (e) {
        return 60 * e.getTimezoneOffset() * 1e3;
    },
    L = function (e) {
        var t, n;
        return (t = e), (n = C), Math.round((t.getTime() - D(t) - (n.getTime() - D(n))) / 864e5);
    },
    w = function (e) {
        return new Date(C.getTime() + 864e5 * e);
    },
    M = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && O(e.getUTCFullYear()) ? 29 : y[t];
    },
    P = function (e) {
        return v[e.getUTCDay()];
    },
    x = function (e, t) {
        var n = N(e, t + 1, 1);
        return [P(n), M(n)];
    },
    U = function (e, t) {
        return (
            (t = t || e),
            new Date(
                Date.UTC(
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate(),
                    t.getHours(),
                    t.getMinutes(),
                    t.getSeconds(),
                    t.getMilliseconds(),
                ),
            )
        );
    },
    k = function (e) {
        return new Date(e.getTime());
    },
    G = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(k(e[n]));
        return t;
    },
    F = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    V = function (e, t) {
        void 0 === t && (t = !0);
        var n = new Date(e);
        return [
            E(n.getUTCFullYear().toString(), 4, "0"),
            E(n.getUTCMonth() + 1, 2, "0"),
            E(n.getUTCDate(), 2, "0"),
            "T",
            E(n.getUTCHours(), 2, "0"),
            E(n.getUTCMinutes(), 2, "0"),
            E(n.getUTCSeconds(), 2, "0"),
            t ? "Z" : "",
        ].join("");
    },
    B = function (e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!t) throw Error("Invalid UNTIL value: ".concat(e));
        return new Date(
            Date.UTC(
                parseInt(t[1], 10),
                parseInt(t[2], 10) - 1,
                parseInt(t[3], 10),
                parseInt(t[5], 10) || 0,
                parseInt(t[6], 10) || 0,
                parseInt(t[7], 10) || 0,
            ),
        );
    },
    H = function (e, t) {
        return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
    },
    j = function (e, t) {
        var n = new Date(H(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            i = new Date(H(e, null != t ? t : "UTC")).getTime() - n.getTime();
        return new Date(e.getTime() - i);
    },
    Y = (function () {
        function e(e, t) {
            (this.minDate = null),
                (this.maxDate = null),
                (this._result = []),
                (this.total = 0),
                (this.method = e),
                (this.args = t),
                "between" === e
                    ? ((this.maxDate = t.inc ? t.before : new Date(t.before.getTime() - 1)),
                      (this.minDate = t.inc ? t.after : new Date(t.after.getTime() + 1)))
                    : "before" === e
                      ? (this.maxDate = t.inc ? t.dt : new Date(t.dt.getTime() - 1))
                      : "after" === e && (this.minDate = t.inc ? t.dt : new Date(t.dt.getTime() + 1));
        }
        return (
            (e.prototype.accept = function (e) {
                ++this.total;
                var t = this.minDate && e < this.minDate,
                    n = this.maxDate && e > this.maxDate;
                if ("between" === this.method) {
                    if (t) return !0;
                    if (n) return !1;
                } else if ("before" === this.method) {
                    if (n) return !1;
                } else if ("after" === this.method) return !!t || (this.add(e), !1);
                return this.add(e);
            }),
            (e.prototype.add = function (e) {
                return this._result.push(e), !0;
            }),
            (e.prototype.getValue = function () {
                var e = this._result;
                switch (this.method) {
                    case "all":
                    case "between":
                        return e;
                    default:
                        return e.length ? e[e.length - 1] : null;
                }
            }),
            (e.prototype.clone = function () {
                return new e(this.method, this.args);
            }),
            e
        );
    })(),
    W = n(56636),
    K = (function (e) {
        function t(t, n, i) {
            var r = e.call(this, t, n) || this;
            return (r.iterator = i), r;
        }
        return (
            (0, W.C6)(t, e),
            (t.prototype.add = function (e) {
                return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
            }),
            t
        );
    })(Y);
let z = {
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    tokens: {
        SKIP: /^[ \r\n\t]+|^\.$/,
        number: /^[1-9][0-9]*/,
        numberAsText: /^(one|two|three)/i,
        every: /^every/i,
        "day(s)": /^days?/i,
        "weekday(s)": /^weekdays?/i,
        "week(s)": /^weeks?/i,
        "hour(s)": /^hours?/i,
        "minute(s)": /^minutes?/i,
        "month(s)": /^months?/i,
        "year(s)": /^years?/i,
        on: /^(on|in)/i,
        at: /^(at)/i,
        the: /^the/i,
        first: /^first/i,
        second: /^second/i,
        third: /^third/i,
        nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
        last: /^last/i,
        for: /^for/i,
        "time(s)": /^times?/i,
        until: /^(un)?til/i,
        monday: /^mo(n(day)?)?/i,
        tuesday: /^tu(e(s(day)?)?)?/i,
        wednesday: /^we(d(n(esday)?)?)?/i,
        thursday: /^th(u(r(sday)?)?)?/i,
        friday: /^fr(i(day)?)?/i,
        saturday: /^sa(t(urday)?)?/i,
        sunday: /^su(n(day)?)?/i,
        january: /^jan(uary)?/i,
        february: /^feb(ruary)?/i,
        march: /^mar(ch)?/i,
        april: /^apr(il)?/i,
        may: /^may/i,
        june: /^june?/i,
        july: /^july?/i,
        august: /^aug(ust)?/i,
        september: /^sep(t(ember)?)?/i,
        october: /^oct(ober)?/i,
        november: /^nov(ember)?/i,
        december: /^dec(ember)?/i,
        comma: /^(,\s*|(and|or)\s*)+/i,
    },
};
var $ = function (e, t) {
        return -1 !== e.indexOf(t);
    },
    q = function (e) {
        return e.toString();
    },
    Z = function (e, t, n) {
        return "".concat(t, " ").concat(n, ", ").concat(e);
    },
    X = (function () {
        function e(e, t, n, i) {
            if (
                (void 0 === t && (t = q),
                void 0 === n && (n = z),
                void 0 === i && (i = Z),
                (this.text = []),
                (this.language = n || z),
                (this.gettext = t),
                (this.dateFormatter = i),
                (this.rrule = e),
                (this.options = e.options),
                (this.origOptions = e.origOptions),
                this.origOptions.bymonthday)
            ) {
                var r = [].concat(this.options.bymonthday),
                    s = [].concat(this.options.bynmonthday);
                r.sort(function (e, t) {
                    return e - t;
                }),
                    s.sort(function (e, t) {
                        return t - e;
                    }),
                    (this.bymonthday = r.concat(s)),
                    this.bymonthday.length || (this.bymonthday = null);
            }
            if (c(this.origOptions.byweekday)) {
                var a = f(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                    o = String(a);
                this.byweekday = {
                    allWeeks: a.filter(function (e) {
                        return !e.n;
                    }),
                    someWeeks: a.filter(function (e) {
                        return !!e.n;
                    }),
                    isWeekdays:
                        -1 !== o.indexOf("MO") &&
                        -1 !== o.indexOf("TU") &&
                        -1 !== o.indexOf("WE") &&
                        -1 !== o.indexOf("TH") &&
                        -1 !== o.indexOf("FR") &&
                        -1 === o.indexOf("SA") &&
                        -1 === o.indexOf("SU"),
                    isEveryDay:
                        -1 !== o.indexOf("MO") &&
                        -1 !== o.indexOf("TU") &&
                        -1 !== o.indexOf("WE") &&
                        -1 !== o.indexOf("TH") &&
                        -1 !== o.indexOf("FR") &&
                        -1 !== o.indexOf("SA") &&
                        -1 !== o.indexOf("SU"),
                };
                var l = function (e, t) {
                    return e.weekday - t.weekday;
                };
                this.byweekday.allWeeks.sort(l),
                    this.byweekday.someWeeks.sort(l),
                    this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null),
                    this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
            } else this.byweekday = null;
        }
        return (
            (e.isFullyConvertible = function (t) {
                if (!(t.options.freq in e.IMPLEMENTED) || (t.origOptions.until && t.origOptions.count)) return !1;
                for (var n in t.origOptions) {
                    if ($(["dtstart", "wkst", "freq"], n)) break;
                    if (!$(e.IMPLEMENTED[t.options.freq], n)) return !1;
                }
                return !0;
            }),
            (e.prototype.isFullyConvertible = function () {
                return e.isFullyConvertible(this.rrule);
            }),
            (e.prototype.toString = function () {
                var t = this.gettext;
                if (!(this.options.freq in e.IMPLEMENTED))
                    return t("RRule error: Unable to fully convert this rrule to text");
                if (((this.text = [t("every")]), this[eG.FREQUENCIES[this.options.freq]](), this.options.until)) {
                    this.add(t("until"));
                    var n = this.options.until;
                    this.add(
                        this.dateFormatter(
                            n.getUTCFullYear(),
                            this.language.monthNames[n.getUTCMonth()],
                            n.getUTCDate(),
                        ),
                    );
                } else
                    this.options.count &&
                        this.add(t("for"))
                            .add(this.options.count.toString())
                            .add(t(this.plural(this.options.count) ? "times" : "time"));
                return this.isFullyConvertible() || this.add(t("(~ approximate)")), this.text.join("");
            }),
            (e.prototype.HOURLY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()),
                    this.add(e(this.plural(this.options.interval) ? "hours" : "hour"));
            }),
            (e.prototype.MINUTELY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()),
                    this.add(e(this.plural(this.options.interval) ? "minutes" : "minute"));
            }),
            (e.prototype.DAILY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()),
                    this.byweekday && this.byweekday.isWeekdays
                        ? this.add(e(this.plural(this.options.interval) ? "weekdays" : "weekday"))
                        : this.add(e(this.plural(this.options.interval) ? "days" : "day")),
                    this.origOptions.bymonth && (this.add(e("in")), this._bymonth()),
                    this.bymonthday
                        ? this._bymonthday()
                        : this.byweekday
                          ? this._byweekday()
                          : this.origOptions.byhour && this._byhour();
            }),
            (e.prototype.WEEKLY = function () {
                var e = this.gettext;
                1 !== this.options.interval &&
                    this.add(this.options.interval.toString()).add(
                        e(this.plural(this.options.interval) ? "weeks" : "week"),
                    ),
                    this.byweekday && this.byweekday.isWeekdays
                        ? 1 === this.options.interval
                            ? this.add(e(this.plural(this.options.interval) ? "weekdays" : "weekday"))
                            : this.add(e("on")).add(e("weekdays"))
                        : this.byweekday && this.byweekday.isEveryDay
                          ? this.add(e(this.plural(this.options.interval) ? "days" : "day"))
                          : (1 === this.options.interval && this.add(e("week")),
                            this.origOptions.bymonth && (this.add(e("in")), this._bymonth()),
                            this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday());
            }),
            (e.prototype.MONTHLY = function () {
                var e = this.gettext;
                this.origOptions.bymonth
                    ? (1 !== this.options.interval &&
                          (this.add(this.options.interval.toString()).add(e("months")),
                          this.plural(this.options.interval) && this.add(e("in"))),
                      this._bymonth())
                    : (1 !== this.options.interval && this.add(this.options.interval.toString()),
                      this.add(e(this.plural(this.options.interval) ? "months" : "month"))),
                    this.bymonthday
                        ? this._bymonthday()
                        : this.byweekday && this.byweekday.isWeekdays
                          ? this.add(e("on")).add(e("weekdays"))
                          : this.byweekday && this._byweekday();
            }),
            (e.prototype.YEARLY = function () {
                var e = this.gettext;
                this.origOptions.bymonth
                    ? (1 !== this.options.interval &&
                          (this.add(this.options.interval.toString()), this.add(e("years"))),
                      this._bymonth())
                    : (1 !== this.options.interval && this.add(this.options.interval.toString()),
                      this.add(e(this.plural(this.options.interval) ? "years" : "year"))),
                    this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(),
                    this.options.byyearday &&
                        this.add(e("on the"))
                            .add(this.list(this.options.byyearday, this.nth, e("and")))
                            .add(e("day")),
                    this.options.byweekno &&
                        this.add(e("in"))
                            .add(e(this.plural(this.options.byweekno.length) ? "weeks" : "week"))
                            .add(this.list(this.options.byweekno, void 0, e("and")));
            }),
            (e.prototype._bymonthday = function () {
                var e = this.gettext;
                this.byweekday && this.byweekday.allWeeks
                    ? this.add(e("on"))
                          .add(this.list(this.byweekday.allWeeks, this.weekdaytext, e("or")))
                          .add(e("the"))
                          .add(this.list(this.bymonthday, this.nth, e("or")))
                    : this.add(e("on the")).add(this.list(this.bymonthday, this.nth, e("and")));
            }),
            (e.prototype._byweekday = function () {
                var e = this.gettext;
                this.byweekday.allWeeks &&
                    !this.byweekday.isWeekdays &&
                    this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)),
                    this.byweekday.someWeeks &&
                        (this.byweekday.allWeeks && this.add(e("and")),
                        this.add(e("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, e("and"))));
            }),
            (e.prototype._byhour = function () {
                var e = this.gettext;
                this.add(e("at")).add(this.list(this.origOptions.byhour, void 0, e("and")));
            }),
            (e.prototype._bymonth = function () {
                this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
            }),
            (e.prototype.nth = function (e) {
                e = parseInt(e.toString(), 10);
                var t,
                    n = this.gettext;
                if (-1 === e) return n("last");
                var i = Math.abs(e);
                switch (i) {
                    case 1:
                    case 21:
                    case 31:
                        t = i + n("st");
                        break;
                    case 2:
                    case 22:
                        t = i + n("nd");
                        break;
                    case 3:
                    case 23:
                        t = i + n("rd");
                        break;
                    default:
                        t = i + n("th");
                }
                return e < 0 ? t + " " + n("last") : t;
            }),
            (e.prototype.monthtext = function (e) {
                return this.language.monthNames[e - 1];
            }),
            (e.prototype.weekdaytext = function (e) {
                var t = d(e) ? (e + 1) % 7 : e.getJsWeekday();
                return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
            }),
            (e.prototype.plural = function (e) {
                return e % 100 != 1;
            }),
            (e.prototype.add = function (e) {
                return this.text.push(" "), this.text.push(e), this;
            }),
            (e.prototype.list = function (e, t, n, i) {
                var r = this;
                void 0 === i && (i = ","),
                    f(e) || (e = [e]),
                    (t =
                        t ||
                        function (e) {
                            return e.toString();
                        });
                var s = function (e) {
                    return t && t.call(r, e);
                };
                if (!n) return e.map(s).join(i + " ");
                for (var a = e.map(s), o = i, l = "", u = 0; u < a.length; u++)
                    0 !== u && (u === a.length - 1 ? (l += " " + n + " ") : (l += o + " ")), (l += a[u]);
                return l;
            }),
            e
        );
    })(),
    Q = (function () {
        function e(e) {
            (this.done = !0), (this.rules = e);
        }
        return (
            (e.prototype.start = function (e) {
                return (this.text = e), (this.done = !1), this.nextSymbol();
            }),
            (e.prototype.isDone = function () {
                return this.done && null === this.symbol;
            }),
            (e.prototype.nextSymbol = function () {
                (this.symbol = null), (this.value = null);
                do {
                    if (this.done) return !1;
                    for (var e in ((t = null), this.rules)) {
                        var t,
                            n,
                            i = this.rules[e].exec(this.text);
                        i && (null === t || i[0].length > t[0].length) && ((t = i), (n = e));
                    }
                    if (
                        (null != t &&
                            ((this.text = this.text.substr(t[0].length)), "" === this.text && (this.done = !0)),
                        null == t)
                    ) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ("SKIP" === n);
                return (this.symbol = n), (this.value = t), !0;
            }),
            (e.prototype.accept = function (e) {
                if (this.symbol === e) {
                    if (this.value) {
                        var t = this.value;
                        return this.nextSymbol(), t;
                    }
                    return this.nextSymbol(), !0;
                }
                return !1;
            }),
            (e.prototype.acceptNumber = function () {
                return this.accept("number");
            }),
            (e.prototype.expect = function (e) {
                if (this.accept(e)) return !0;
                throw Error("expected " + e + " but found " + this.symbol);
            }),
            e
        );
    })();
function J(e, t) {
    void 0 === t && (t = z);
    var n = {},
        i = new Q(t.tokens);
    if (!i.start(e)) return null;
    return (
        (function () {
            i.expect("every");
            var e = i.acceptNumber();
            if ((e && (n.interval = parseInt(e[0], 10)), i.isDone())) throw Error("Unexpected end");
            switch (i.symbol) {
                case "day(s)":
                    (n.freq = eG.DAILY),
                        i.nextSymbol() &&
                            ((function () {
                                if (i.accept("at"))
                                    do {
                                        var e = i.acceptNumber();
                                        if (!e) throw Error("Unexpected symbol " + i.symbol + ", expected hour");
                                        for (n.byhour = [parseInt(e[0], 10)]; i.accept("comma"); ) {
                                            if (!(e = i.acceptNumber()))
                                                throw Error("Unexpected symbol " + i.symbol + "; expected hour");
                                            n.byhour.push(parseInt(e[0], 10));
                                        }
                                    } while (i.accept("comma") || i.accept("at"));
                            })(),
                            l());
                    break;
                case "weekday(s)":
                    (n.freq = eG.WEEKLY), (n.byweekday = [eG.MO, eG.TU, eG.WE, eG.TH, eG.FR]), i.nextSymbol(), l();
                    break;
                case "week(s)":
                    (n.freq = eG.WEEKLY), i.nextSymbol() && (r(), l());
                    break;
                case "hour(s)":
                    (n.freq = eG.HOURLY), i.nextSymbol() && (r(), l());
                    break;
                case "minute(s)":
                    (n.freq = eG.MINUTELY), i.nextSymbol() && (r(), l());
                    break;
                case "month(s)":
                    (n.freq = eG.MONTHLY), i.nextSymbol() && (r(), l());
                    break;
                case "year(s)":
                    (n.freq = eG.YEARLY), i.nextSymbol() && (r(), l());
                    break;
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    if (
                        ((n.freq = eG.WEEKLY),
                        (n.byweekday = [eG[i.symbol.substr(0, 2).toUpperCase()]]),
                        !i.nextSymbol())
                    )
                        return;
                    for (; i.accept("comma"); ) {
                        if (i.isDone()) throw Error("Unexpected end");
                        var t = a();
                        if (!t) throw Error("Unexpected symbol " + i.symbol + ", expected weekday");
                        n.byweekday.push(eG[t]), i.nextSymbol();
                    }
                    (function () {
                        i.accept("on"), i.accept("the");
                        var e = o();
                        if (e)
                            for (n.bymonthday = [e], i.nextSymbol(); i.accept("comma"); ) {
                                if (!(e = o())) throw Error("Unexpected symbol " + i.symbol + "; expected monthday");
                                n.bymonthday.push(e), i.nextSymbol();
                            }
                    })(),
                        l();
                    break;
                case "january":
                case "february":
                case "march":
                case "april":
                case "may":
                case "june":
                case "july":
                case "august":
                case "september":
                case "october":
                case "november":
                case "december":
                    if (((n.freq = eG.YEARLY), (n.bymonth = [s()]), !i.nextSymbol())) return;
                    for (; i.accept("comma"); ) {
                        if (i.isDone()) throw Error("Unexpected end");
                        var u = s();
                        if (!u) throw Error("Unexpected symbol " + i.symbol + ", expected month");
                        n.bymonth.push(u), i.nextSymbol();
                    }
                    r(), l();
                    break;
                default:
                    throw Error("Unknown symbol");
            }
        })(),
        n
    );
    function r() {
        var e = i.accept("on"),
            t = i.accept("the");
        if (e || t)
            do {
                var r = o(),
                    l = a(),
                    u = s();
                if (r)
                    l
                        ? (i.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(eG[l].nth(r)))
                        : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(r), i.accept("day(s)"));
                else if (l) i.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(eG[l]);
                else if ("weekday(s)" === i.symbol)
                    i.nextSymbol(), n.byweekday || (n.byweekday = [eG.MO, eG.TU, eG.WE, eG.TH, eG.FR]);
                else if ("week(s)" === i.symbol) {
                    i.nextSymbol();
                    var c = i.acceptNumber();
                    if (!c) throw Error("Unexpected symbol " + i.symbol + ", expected week number");
                    for (n.byweekno = [parseInt(c[0], 10)]; i.accept("comma"); ) {
                        if (!(c = i.acceptNumber()))
                            throw Error("Unexpected symbol " + i.symbol + "; expected monthday");
                        n.byweekno.push(parseInt(c[0], 10));
                    }
                } else {
                    if (!u) return;
                    i.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(u);
                }
            } while (i.accept("comma") || i.accept("the") || i.accept("on"));
    }
    function s() {
        switch (i.symbol) {
            case "january":
                return 1;
            case "february":
                return 2;
            case "march":
                return 3;
            case "april":
                return 4;
            case "may":
                return 5;
            case "june":
                return 6;
            case "july":
                return 7;
            case "august":
                return 8;
            case "september":
                return 9;
            case "october":
                return 10;
            case "november":
                return 11;
            case "december":
                return 12;
            default:
                return !1;
        }
    }
    function a() {
        switch (i.symbol) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                return i.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function o() {
        switch (i.symbol) {
            case "last":
                return i.nextSymbol(), -1;
            case "first":
                return i.nextSymbol(), 1;
            case "second":
                return i.nextSymbol(), i.accept("last") ? -2 : 2;
            case "third":
                return i.nextSymbol(), i.accept("last") ? -3 : 3;
            case "nth":
                var e = parseInt(i.value[1], 10);
                if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
                return i.nextSymbol(), i.accept("last") ? -e : e;
            default:
                return !1;
        }
    }
    function l() {
        if ("until" === i.symbol) {
            var e = Date.parse(i.text);
            if (!e) throw Error("Cannot parse until date:" + i.text);
            n.until = new Date(e);
        } else i.accept("for") && ((n.count = parseInt(i.value[0], 10)), i.expect("number"));
    }
}
function ee(e) {
    return e < r.HOURLY;
}
((i = r || (r = {}))[(i.YEARLY = 0)] = "YEARLY"),
    (i[(i.MONTHLY = 1)] = "MONTHLY"),
    (i[(i.WEEKLY = 2)] = "WEEKLY"),
    (i[(i.DAILY = 3)] = "DAILY"),
    (i[(i.HOURLY = 4)] = "HOURLY"),
    (i[(i.MINUTELY = 5)] = "MINUTELY"),
    (i[(i.SECONDLY = 6)] = "SECONDLY");
var et = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
(X.IMPLEMENTED = []),
    (X.IMPLEMENTED[r.HOURLY] = et),
    (X.IMPLEMENTED[r.MINUTELY] = et),
    (X.IMPLEMENTED[r.DAILY] = ["byhour"].concat(et)),
    (X.IMPLEMENTED[r.WEEKLY] = et),
    (X.IMPLEMENTED[r.MONTHLY] = et),
    (X.IMPLEMENTED[r.YEARLY] = ["byweekno", "byyearday"].concat(et));
var en = X.isFullyConvertible,
    ei = (function () {
        function e(e, t, n, i) {
            (this.hour = e), (this.minute = t), (this.second = n), (this.millisecond = i || 0);
        }
        return (
            (e.prototype.getHours = function () {
                return this.hour;
            }),
            (e.prototype.getMinutes = function () {
                return this.minute;
            }),
            (e.prototype.getSeconds = function () {
                return this.second;
            }),
            (e.prototype.getMilliseconds = function () {
                return this.millisecond;
            }),
            (e.prototype.getTime = function () {
                return (60 * this.hour * 60 + 60 * this.minute + this.second) * 1e3 + this.millisecond;
            }),
            e
        );
    })(),
    er = (function (e) {
        function t(t, n, i, r, s, a, o) {
            var l = e.call(this, r, s, a, o) || this;
            return (l.year = t), (l.month = n), (l.day = i), l;
        }
        return (
            (0, W.C6)(t, e),
            (t.fromDate = function (e) {
                return new this(
                    e.getUTCFullYear(),
                    e.getUTCMonth() + 1,
                    e.getUTCDate(),
                    e.getUTCHours(),
                    e.getUTCMinutes(),
                    e.getUTCSeconds(),
                    e.valueOf() % 1e3,
                );
            }),
            (t.prototype.getWeekday = function () {
                return P(new Date(this.getTime()));
            }),
            (t.prototype.getTime = function () {
                return new Date(
                    Date.UTC(
                        this.year,
                        this.month - 1,
                        this.day,
                        this.hour,
                        this.minute,
                        this.second,
                        this.millisecond,
                    ),
                ).getTime();
            }),
            (t.prototype.getDay = function () {
                return this.day;
            }),
            (t.prototype.getMonth = function () {
                return this.month;
            }),
            (t.prototype.getYear = function () {
                return this.year;
            }),
            (t.prototype.addYears = function (e) {
                this.year += e;
            }),
            (t.prototype.addMonths = function (e) {
                if (((this.month += e), this.month > 12)) {
                    var t = Math.floor(this.month / 12),
                        n = g(this.month, 12);
                    (this.month = n), (this.year += t), 0 === this.month && ((this.month = 12), --this.year);
                }
            }),
            (t.prototype.addWeekly = function (e, t) {
                t > this.getWeekday()
                    ? (this.day += -(this.getWeekday() + 1 + (6 - t)) + 7 * e)
                    : (this.day += -(this.getWeekday() - t) + 7 * e),
                    this.fixDay();
            }),
            (t.prototype.addDaily = function (e) {
                (this.day += e), this.fixDay();
            }),
            (t.prototype.addHours = function (e, t, n) {
                for (t && (this.hour += Math.floor((23 - this.hour) / e) * e); ; ) {
                    this.hour += e;
                    var i = A(this.hour, 24),
                        r = i.div,
                        s = i.mod;
                    if ((r && ((this.hour = s), this.addDaily(r)), I(n) || S(n, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, n, i) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var r = A(this.minute, 60),
                        s = r.div,
                        a = r.mod;
                    if (
                        (s && ((this.minute = a), this.addHours(s, !1, n)),
                        (I(n) || S(n, this.hour)) && (I(i) || S(i, this.minute)))
                    )
                        break;
                }
            }),
            (t.prototype.addSeconds = function (e, t, n, i, r) {
                for (
                    t &&
                    (this.second += Math.floor((86399 - (3600 * this.hour + 60 * this.minute + this.second)) / e) * e);
                    ;
                ) {
                    this.second += e;
                    var s = A(this.second, 60),
                        a = s.div,
                        o = s.mod;
                    if (
                        (a && ((this.second = o), this.addMinutes(a, !1, n, i)),
                        (I(n) || S(n, this.hour)) && (I(i) || S(i, this.minute)) && (I(r) || S(r, this.second)))
                    )
                        break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = x(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (
                                ((this.day -= e),
                                ++this.month,
                                13 === this.month && ((this.month = 1), ++this.year, this.year > 9999))
                            )
                                return;
                            e = x(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var n = e.freq,
                    i = e.interval,
                    s = e.wkst,
                    a = e.byhour,
                    o = e.byminute,
                    l = e.bysecond;
                switch (n) {
                    case r.YEARLY:
                        return this.addYears(i);
                    case r.MONTHLY:
                        return this.addMonths(i);
                    case r.WEEKLY:
                        return this.addWeekly(i, s);
                    case r.DAILY:
                        return this.addDaily(i);
                    case r.HOURLY:
                        return this.addHours(i, t, a);
                    case r.MINUTELY:
                        return this.addMinutes(i, t, a, o);
                    case r.SECONDLY:
                        return this.addSeconds(i, t, a, o, l);
                }
            }),
            t
        );
    })(ei);
function es(e) {
    for (var t = [], n = Object.keys(e), i = 0; i < n.length; i++) {
        var r = n[i];
        S(ek, r) || t.push(r), R(e[r]) && !b(e[r]) && t.push(r);
    }
    if (t.length) throw Error("Invalid options: " + t.join(", "));
    return (0, W.Cl)({}, e);
}
function ea(e) {
    var t = e
        .split("\n")
        .map(el)
        .filter(function (e) {
            return null !== e;
        });
    return (0, W.Cl)((0, W.Cl)({}, t[0]), t[1]);
}
function eo(e) {
    var t = {},
        n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!n) return t;
    var i = n[1],
        r = n[2];
    return i && (t.tzid = i), (t.dtstart = B(r)), t;
}
function el(e) {
    if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return eu(e);
    var n = t[1];
    switch (n.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return eu(e);
        case "DTSTART":
            return eo(e);
        default:
            throw Error("Unsupported RFC prop ".concat(n, " in ").concat(e));
    }
}
function eu(e) {
    var t = eo(e.replace(/^RRULE:/i, ""));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, "")
            .split(";")
            .forEach(function (n) {
                var i = n.split("="),
                    s = i[0],
                    a = i[1];
                switch (s.toUpperCase()) {
                    case "FREQ":
                        t.freq = r[a.toUpperCase()];
                        break;
                    case "WKST":
                        t.wkst = ex[a.toUpperCase()];
                        break;
                    case "COUNT":
                    case "INTERVAL":
                    case "BYSETPOS":
                    case "BYMONTH":
                    case "BYMONTHDAY":
                    case "BYYEARDAY":
                    case "BYWEEKNO":
                    case "BYHOUR":
                    case "BYMINUTE":
                    case "BYSECOND":
                        var o,
                            l = -1 !== (o = a).indexOf(",") ? o.split(",").map(ec) : ec(o);
                        t[s.toLowerCase()] = l;
                        break;
                    case "BYWEEKDAY":
                    case "BYDAY":
                        t.byweekday = a.split(",").map(function (e) {
                            if (2 === e.length) return ex[e];
                            var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                            if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
                            var n = Number(t[1]);
                            return new u(ex[t[2]].weekday, n);
                        });
                        break;
                    case "DTSTART":
                    case "TZID":
                        var c = eo(e);
                        (t.tzid = c.tzid), (t.dtstart = c.dtstart);
                        break;
                    case "UNTIL":
                        t.until = B(a);
                        break;
                    case "BYEASTER":
                        t.byeaster = Number(a);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + s + "'");
                }
            }),
        t
    );
}
function ec(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
var ed = (function () {
    function e(e, t) {
        if (isNaN(e.getTime())) throw RangeError("Invalid date passed to DateWithZone");
        (this.date = e), (this.tzid = t);
    }
    return (
        Object.defineProperty(e.prototype, "isUTC", {
            get: function () {
                return !this.tzid || "UTC" === this.tzid.toUpperCase();
            },
            enumerable: !1,
            configurable: !0,
        }),
        (e.prototype.toString = function () {
            var e = V(this.date.getTime(), this.isUTC);
            return this.isUTC ? ":".concat(e) : ";TZID=".concat(this.tzid, ":").concat(e);
        }),
        (e.prototype.getTime = function () {
            return this.date.getTime();
        }),
        (e.prototype.rezonedDate = function () {
            return this.isUTC ? this.date : j(this.date, this.tzid);
        }),
        e
    );
})();
function e_(e) {
    for (var t = [], n = "", i = Object.keys(e), r = Object.keys(eU), s = 0; s < i.length; s++)
        if ("tzid" !== i[s] && S(r, i[s])) {
            var a,
                o,
                l = i[s].toUpperCase(),
                _ = e[i[s]],
                h = "";
            if (!(!c(_) || (f(_) && !_.length))) {
                switch (l) {
                    case "FREQ":
                        h = eG.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        h = d(_) ? new u(_).toString() : _.toString();
                        break;
                    case "BYWEEKDAY":
                        (l = "BYDAY"),
                            (h = (f(_) ? _ : [_])
                                .map(function (e) {
                                    return e instanceof u ? e : f(e) ? new u(e[0], e[1]) : new u(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        (a = _), (o = e.tzid), (n = a ? "DTSTART" + new ed(new Date(a), o).toString() : "");
                        break;
                    case "UNTIL":
                        h = V(_, !e.tzid);
                        break;
                    default:
                        if (f(_)) {
                            for (var p = [], E = 0; E < _.length; E++) p[E] = String(_[E]);
                            h = p.toString();
                        } else h = String(_);
                }
                h && t.push([l, h]);
            }
        }
    var m = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return "".concat(t, "=").concat(n.toString());
            })
            .join(";"),
        g = "";
    return (
        "" !== m && (g = "RRULE:".concat(m)),
        [n, g]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}
var ef = (function () {
        function e() {
            (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
        }
        return (
            (e.prototype._cacheAdd = function (e, t, n) {
                t && (t = t instanceof Date ? k(t) : G(t)),
                    "all" === e ? (this.all = t) : ((n._value = t), this[e].push(n));
            }),
            (e.prototype._cacheGet = function (e, t) {
                var n = !1,
                    i = t ? Object.keys(t) : [],
                    r = this[e];
                if ("all" === e) n = this.all;
                else if (f(r))
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s];
                        if (
                            !(
                                i.length &&
                                (function (e) {
                                    for (var n = 0; n < i.length; n++) {
                                        var r = i[n];
                                        if (
                                            !(function (e, t) {
                                                return Array.isArray(e)
                                                    ? !!Array.isArray(t) &&
                                                          e.length === t.length &&
                                                          e.every(function (e, n) {
                                                              return e.getTime() === t[n].getTime();
                                                          })
                                                    : e instanceof Date
                                                      ? t instanceof Date && e.getTime() === t.getTime()
                                                      : e === t;
                                            })(t[r], e[r])
                                        )
                                            return !0;
                                    }
                                    return !1;
                                })(a)
                            )
                        ) {
                            n = a._value;
                            break;
                        }
                    }
                if (!n && this.all) {
                    for (var o = new Y(e, t), s = 0; s < this.all.length && o.accept(this.all[s]); s++);
                    (n = o.getValue()), this._cacheAdd(e, n, t);
                }
                return f(n) ? G(n) : n instanceof Date ? k(n) : n;
            }),
            e
        );
    })(),
    eh = (0, W.fX)(
        (0, W.fX)(
            (0, W.fX)(
                (0, W.fX)(
                    (0, W.fX)(
                        (0, W.fX)(
                            (0, W.fX)(
                                (0, W.fX)(
                                    (0, W.fX)(
                                        (0, W.fX)(
                                            (0, W.fX)(
                                                (0, W.fX)((0, W.fX)([], p(1, 31), !0), p(2, 28), !0),
                                                p(3, 31),
                                                !0,
                                            ),
                                            p(4, 30),
                                            !0,
                                        ),
                                        p(5, 31),
                                        !0,
                                    ),
                                    p(6, 30),
                                    !0,
                                ),
                                p(7, 31),
                                !0,
                            ),
                            p(8, 31),
                            !0,
                        ),
                        p(9, 30),
                        !0,
                    ),
                    p(10, 31),
                    !0,
                ),
                p(11, 30),
                !0,
            ),
            p(12, 31),
            !0,
        ),
        p(1, 7),
        !0,
    ),
    ep = (0, W.fX)(
        (0, W.fX)(
            (0, W.fX)(
                (0, W.fX)(
                    (0, W.fX)(
                        (0, W.fX)(
                            (0, W.fX)(
                                (0, W.fX)(
                                    (0, W.fX)(
                                        (0, W.fX)(
                                            (0, W.fX)(
                                                (0, W.fX)((0, W.fX)([], p(1, 31), !0), p(2, 29), !0),
                                                p(3, 31),
                                                !0,
                                            ),
                                            p(4, 30),
                                            !0,
                                        ),
                                        p(5, 31),
                                        !0,
                                    ),
                                    p(6, 30),
                                    !0,
                                ),
                                p(7, 31),
                                !0,
                            ),
                            p(8, 31),
                            !0,
                        ),
                        p(9, 30),
                        !0,
                    ),
                    p(10, 31),
                    !0,
                ),
                p(11, 30),
                !0,
            ),
            p(12, 31),
            !0,
        ),
        p(1, 7),
        !0,
    ),
    eE = h(1, 29),
    em = h(1, 30),
    eg = h(1, 31),
    eA = h(1, 32),
    eI = (0, W.fX)(
        (0, W.fX)(
            (0, W.fX)(
                (0, W.fX)(
                    (0, W.fX)(
                        (0, W.fX)(
                            (0, W.fX)(
                                (0, W.fX)(
                                    (0, W.fX)(
                                        (0, W.fX)((0, W.fX)((0, W.fX)((0, W.fX)([], eA, !0), em, !0), eA, !0), eg, !0),
                                        eA,
                                        !0,
                                    ),
                                    eg,
                                    !0,
                                ),
                                eA,
                                !0,
                            ),
                            eA,
                            !0,
                        ),
                        eg,
                        !0,
                    ),
                    eA,
                    !0,
                ),
                eg,
                !0,
            ),
            eA,
            !0,
        ),
        eA.slice(0, 7),
        !0,
    ),
    eT = (0, W.fX)(
        (0, W.fX)(
            (0, W.fX)(
                (0, W.fX)(
                    (0, W.fX)(
                        (0, W.fX)(
                            (0, W.fX)(
                                (0, W.fX)(
                                    (0, W.fX)(
                                        (0, W.fX)((0, W.fX)((0, W.fX)((0, W.fX)([], eA, !0), eE, !0), eA, !0), eg, !0),
                                        eA,
                                        !0,
                                    ),
                                    eg,
                                    !0,
                                ),
                                eA,
                                !0,
                            ),
                            eA,
                            !0,
                        ),
                        eg,
                        !0,
                    ),
                    eA,
                    !0,
                ),
                eg,
                !0,
            ),
            eA,
            !0,
        ),
        eA.slice(0, 7),
        !0,
    ),
    eS = h(-28, 0),
    eN = h(-29, 0),
    ey = h(-30, 0),
    eC = h(-31, 0),
    ev = (0, W.fX)(
        (0, W.fX)(
            (0, W.fX)(
                (0, W.fX)(
                    (0, W.fX)(
                        (0, W.fX)(
                            (0, W.fX)(
                                (0, W.fX)(
                                    (0, W.fX)(
                                        (0, W.fX)((0, W.fX)((0, W.fX)((0, W.fX)([], eC, !0), eN, !0), eC, !0), ey, !0),
                                        eC,
                                        !0,
                                    ),
                                    ey,
                                    !0,
                                ),
                                eC,
                                !0,
                            ),
                            eC,
                            !0,
                        ),
                        ey,
                        !0,
                    ),
                    eC,
                    !0,
                ),
                ey,
                !0,
            ),
            eC,
            !0,
        ),
        eC.slice(0, 7),
        !0,
    ),
    eO = (0, W.fX)(
        (0, W.fX)(
            (0, W.fX)(
                (0, W.fX)(
                    (0, W.fX)(
                        (0, W.fX)(
                            (0, W.fX)(
                                (0, W.fX)(
                                    (0, W.fX)(
                                        (0, W.fX)((0, W.fX)((0, W.fX)((0, W.fX)([], eC, !0), eS, !0), eC, !0), ey, !0),
                                        eC,
                                        !0,
                                    ),
                                    ey,
                                    !0,
                                ),
                                eC,
                                !0,
                            ),
                            eC,
                            !0,
                        ),
                        ey,
                        !0,
                    ),
                    eC,
                    !0,
                ),
                ey,
                !0,
            ),
            eC,
            !0,
        ),
        eC.slice(0, 7),
        !0,
    ),
    eR = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
    eb = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    eD = (function () {
        for (var e = [], t = 0; t < 55; t++) e = e.concat(h(7));
        return e;
    })(),
    eL = (function () {
        function e(e) {
            this.options = e;
        }
        return (
            (e.prototype.rebuild = function (e, t) {
                var n,
                    i,
                    r,
                    s,
                    a,
                    o,
                    l,
                    u,
                    d,
                    _,
                    f = this.options;
                if (
                    (e !== this.lastyear &&
                        (this.yearinfo = (function (e, t) {
                            var n,
                                i,
                                r,
                                s,
                                a,
                                o = N(e, 1, 1),
                                l = O(e) ? 366 : 365,
                                u = O(e + 1) ? 366 : 365,
                                c = L(o),
                                d = P(o),
                                _ = (0, W.Cl)(
                                    (0, W.Cl)(
                                        { yearlen: l, nextyearlen: u, yearordinal: c, yearweekday: d },
                                        ((i = O((n = e)) ? 366 : 365),
                                        (r = P(N(n, 1, 1))),
                                        365 === i
                                            ? {
                                                  mmask: eh,
                                                  mdaymask: eT,
                                                  nmdaymask: eO,
                                                  wdaymask: eD.slice(r),
                                                  mrange: eb,
                                              }
                                            : {
                                                  mmask: ep,
                                                  mdaymask: eI,
                                                  nmdaymask: ev,
                                                  wdaymask: eD.slice(r),
                                                  mrange: eR,
                                              }),
                                    ),
                                    { wnomask: null },
                                );
                            if (I(t.byweekno)) return _;
                            _.wnomask = p(0, l + 7);
                            var f = (s = g(7 - d + t.wkst, 7));
                            f >= 4 ? ((f = 0), (a = _.yearlen + g(d - t.wkst, 7))) : (a = l - f);
                            for (
                                var h = Math.floor(Math.floor(a / 7) + g(a, 7) / 4), E = 0;
                                E < t.byweekno.length;
                                E++
                            ) {
                                var m = t.byweekno[E];
                                if ((m < 0 && (m += h + 1), m > 0 && m <= h)) {
                                    var A = void 0;
                                    m > 1 ? ((A = f + (m - 1) * 7), f !== s && (A -= 7 - s)) : (A = f);
                                    for (var T = 0; T < 7 && ((_.wnomask[A] = 1), A++, _.wdaymask[A] !== t.wkst); T++);
                                }
                            }
                            if (S(t.byweekno, 1)) {
                                var A = f + 7 * h;
                                if ((f !== s && (A -= 7 - s), A < l))
                                    for (
                                        var E = 0;
                                        E < 7 && ((_.wnomask[A] = 1), (A += 1), _.wdaymask[A] !== t.wkst);
                                        E++
                                    );
                            }
                            if (f) {
                                var y = void 0;
                                if (S(t.byweekno, -1)) y = -1;
                                else {
                                    var C = P(N(e - 1, 1, 1)),
                                        v = g(7 - C.valueOf() + t.wkst, 7),
                                        R = O(e - 1) ? 366 : 365,
                                        b = void 0;
                                    v >= 4 ? ((v = 0), (b = R + g(C - t.wkst, 7))) : (b = l - f),
                                        (y = Math.floor(52 + g(b, 7) / 4));
                                }
                                if (S(t.byweekno, y)) for (var A = 0; A < f; A++) _.wnomask[A] = 1;
                            }
                            return _;
                        })(e, f)),
                    T(f.bynweekday) && (t !== this.lastmonth || e !== this.lastyear))
                ) {
                    var h = this.yearinfo,
                        E = h.yearlen,
                        m = h.mrange,
                        A = h.wdaymask;
                    this.monthinfo = (function (e, t, n, i, r, s) {
                        var a = { lastyear: e, lastmonth: t, nwdaymask: [] },
                            o = [];
                        if (s.freq === eG.YEARLY)
                            if (I(s.bymonth)) o = [[0, n]];
                            else
                                for (var l = 0; l < s.bymonth.length; l++)
                                    (t = s.bymonth[l]), o.push(i.slice(t - 1, t + 1));
                        else s.freq === eG.MONTHLY && (o = [i.slice(t - 1, t + 1)]);
                        if (I(o)) return a;
                        a.nwdaymask = p(0, n);
                        for (var l = 0; l < o.length; l++)
                            for (var u = o[l], c = u[0], d = u[1] - 1, _ = 0; _ < s.bynweekday.length; _++) {
                                var f = void 0,
                                    h = s.bynweekday[_],
                                    E = h[0],
                                    m = h[1];
                                m < 0
                                    ? ((f = d + (m + 1) * 7), (f -= g(r[f] - E, 7)))
                                    : ((f = c + (m - 1) * 7), (f += g(7 - r[f] + E, 7))),
                                    c <= f && f <= d && (a.nwdaymask[f] = 1);
                            }
                        return a;
                    })(e, t, E, m, A, f);
                }
                c(f.byeaster) &&
                    (this.eastermask =
                        (void 0 === (n = f.byeaster) && (n = 0),
                        (i = e % 19),
                        (r = Math.floor(e / 100)),
                        (s = e % 100),
                        (a = Math.floor(r / 4)),
                        (o = Math.floor((r + 8) / 25)),
                        (l = Math.floor((r - o + 1) / 3)),
                        (u = Math.floor(19 * i + r - a - l + 15) % 30),
                        (d = Math.floor(32 + (r % 4) * 2 + 2 * Math.floor(s / 4) - u - (s % 4)) % 7),
                        (_ = Math.floor((i + 11 * u + 22 * d) / 451)),
                        [
                            Math.ceil(
                                (Date.UTC(
                                    e,
                                    Math.floor((u + d - 7 * _ + 114) / 31) - 1,
                                    ((u + d - 7 * _ + 114) % 31) + 1 + n,
                                ) -
                                    Date.UTC(e, 0, 1)) /
                                    864e5,
                            ),
                        ]));
            }),
            Object.defineProperty(e.prototype, "lastyear", {
                get: function () {
                    return this.monthinfo ? this.monthinfo.lastyear : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "lastmonth", {
                get: function () {
                    return this.monthinfo ? this.monthinfo.lastmonth : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "yearlen", {
                get: function () {
                    return this.yearinfo.yearlen;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "yearordinal", {
                get: function () {
                    return this.yearinfo.yearordinal;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mrange", {
                get: function () {
                    return this.yearinfo.mrange;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "wdaymask", {
                get: function () {
                    return this.yearinfo.wdaymask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mmask", {
                get: function () {
                    return this.yearinfo.mmask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "wnomask", {
                get: function () {
                    return this.yearinfo.wnomask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nwdaymask", {
                get: function () {
                    return this.monthinfo ? this.monthinfo.nwdaymask : [];
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nextyearlen", {
                get: function () {
                    return this.yearinfo.nextyearlen;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mdaymask", {
                get: function () {
                    return this.yearinfo.mdaymask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nmdaymask", {
                get: function () {
                    return this.yearinfo.nmdaymask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ydayset = function () {
                return [h(this.yearlen), 0, this.yearlen];
            }),
            (e.prototype.mdayset = function (e, t) {
                for (var n = this.mrange[t - 1], i = this.mrange[t], r = p(null, this.yearlen), s = n; s < i; s++)
                    r[s] = s;
                return [r, n, i];
            }),
            (e.prototype.wdayset = function (e, t, n) {
                for (
                    var i = p(null, this.yearlen + 7), r = L(N(e, t, n)) - this.yearordinal, s = r, a = 0;
                    a < 7 && ((i[r] = r), ++r, this.wdaymask[r] !== this.options.wkst);
                    a++
                );
                return [i, s, r];
            }),
            (e.prototype.ddayset = function (e, t, n) {
                var i = p(null, this.yearlen),
                    r = L(N(e, t, n)) - this.yearordinal;
                return (i[r] = r), [i, r, r + 1];
            }),
            (e.prototype.htimeset = function (e, t, n, i) {
                var r = this,
                    s = [];
                return (
                    this.options.byminute.forEach(function (t) {
                        s = s.concat(r.mtimeset(e, t, n, i));
                    }),
                    F(s),
                    s
                );
            }),
            (e.prototype.mtimeset = function (e, t, n, i) {
                var r = this.options.bysecond.map(function (n) {
                    return new ei(e, t, n, i);
                });
                return F(r), r;
            }),
            (e.prototype.stimeset = function (e, t, n, i) {
                return [new ei(e, t, n, i)];
            }),
            (e.prototype.getdayset = function (e) {
                switch (e) {
                    case r.YEARLY:
                        return this.ydayset.bind(this);
                    case r.MONTHLY:
                        return this.mdayset.bind(this);
                    case r.WEEKLY:
                        return this.wdayset.bind(this);
                    case r.DAILY:
                    default:
                        return this.ddayset.bind(this);
                }
            }),
            (e.prototype.gettimeset = function (e) {
                switch (e) {
                    case r.HOURLY:
                        return this.htimeset.bind(this);
                    case r.MINUTELY:
                        return this.mtimeset.bind(this);
                    case r.SECONDLY:
                        return this.stimeset.bind(this);
                }
            }),
            e
        );
    })();
function ew(e, t) {
    var n = t.dtstart,
        i = t.freq,
        r = t.interval,
        s = t.until,
        a = t.bysetpos,
        o = t.count;
    if (0 === o || 0 === r) return eP(e);
    var l = er.fromDate(n),
        u = new eL(t);
    u.rebuild(l.year, l.month);
    for (
        var d = (function (e, t, n) {
            var i = n.freq,
                r = n.byhour,
                s = n.byminute,
                a = n.bysecond;
            if (ee(i)) {
                var o = n.dtstart.getTime() % 1e3;
                if (!ee(n.freq)) return [];
                var l = [];
                return (
                    n.byhour.forEach(function (e) {
                        n.byminute.forEach(function (t) {
                            n.bysecond.forEach(function (n) {
                                l.push(new ei(e, t, n, o));
                            });
                        });
                    }),
                    l
                );
            }
            return (i >= eG.HOURLY && T(r) && !S(r, t.hour)) ||
                (i >= eG.MINUTELY && T(s) && !S(s, t.minute)) ||
                (i >= eG.SECONDLY && T(a) && !S(a, t.second))
                ? []
                : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond);
        })(u, l, t);
        ;
    ) {
        var _ = u.getdayset(i)(l.year, l.month, l.day),
            f = _[0],
            h = _[1],
            p = _[2],
            E = (function (e, t, n, i, r) {
                for (var s = !1, a = t; a < n; a++) {
                    var o = e[a];
                    (s = (function (e, t, n) {
                        var i = n.bymonth,
                            r = n.byweekno,
                            s = n.byweekday,
                            a = n.byeaster,
                            o = n.bymonthday,
                            l = n.bynmonthday,
                            u = n.byyearday;
                        return (
                            (T(i) && !S(i, e.mmask[t])) ||
                            (T(r) && !e.wnomask[t]) ||
                            (T(s) && !S(s, e.wdaymask[t])) ||
                            (T(e.nwdaymask) && !e.nwdaymask[t]) ||
                            (null !== a && !S(e.eastermask, t)) ||
                            ((T(o) || T(l)) && !S(o, e.mdaymask[t]) && !S(l, e.nmdaymask[t])) ||
                            (T(u) &&
                                ((t < e.yearlen && !S(u, t + 1) && !S(u, -e.yearlen + t)) ||
                                    (t >= e.yearlen &&
                                        !S(u, t + 1 - e.yearlen) &&
                                        !S(u, -e.nextyearlen + t - e.yearlen))))
                        );
                    })(i, o, r)) && (e[o] = null);
                }
                return s;
            })(f, h, p, u, t);
        if (T(a))
            for (
                var m = (function (e, t, n, i, r, s) {
                        for (var a = [], o = 0; o < e.length; o++) {
                            var l = void 0,
                                u = void 0,
                                d = e[o];
                            d < 0
                                ? ((l = Math.floor(d / t.length)), (u = g(d, t.length)))
                                : ((l = Math.floor((d - 1) / t.length)), (u = g(d - 1, t.length)));
                            for (var _ = [], f = n; f < i; f++) {
                                var h = s[f];
                                c(h) && _.push(h);
                            }
                            var p = void 0;
                            p = l < 0 ? _.slice(l)[0] : _[l];
                            var E = t[u],
                                m = U(w(r.yearordinal + p), E);
                            S(a, m) || a.push(m);
                        }
                        return F(a), a;
                    })(a, d, h, p, u, f),
                    A = 0;
                A < m.length;
                A++
            ) {
                var I = m[A];
                if (s && I > s) return eP(e);
                if (I >= n) {
                    var N = eM(I, t);
                    if (!e.accept(N) || (o && !--o)) return eP(e);
                }
            }
        else
            for (var A = h; A < p; A++) {
                var y = f[A];
                if (c(y))
                    for (var C = w(u.yearordinal + y), v = 0; v < d.length; v++) {
                        var I = U(C, d[v]);
                        if (s && I > s) return eP(e);
                        if (I >= n) {
                            var N = eM(I, t);
                            if (!e.accept(N) || (o && !--o)) return eP(e);
                        }
                    }
            }
        if (0 === t.interval || (l.add(t, E), l.year > 9999)) return eP(e);
        ee(i) || (d = u.gettimeset(i)(l.hour, l.minute, l.second, 0)), u.rebuild(l.year, l.month);
    }
}
function eM(e, t) {
    return new ed(e, t.tzid).rezonedDate();
}
function eP(e) {
    return e.getValue();
}
var ex = { MO: new u(0), TU: new u(1), WE: new u(2), TH: new u(3), FR: new u(4), SA: new u(5), SU: new u(6) },
    eU = {
        freq: r.YEARLY,
        dtstart: null,
        interval: 1,
        wkst: ex.MO,
        count: null,
        until: null,
        tzid: null,
        bysetpos: null,
        bymonth: null,
        bymonthday: null,
        bynmonthday: null,
        byyearday: null,
        byweekno: null,
        byweekday: null,
        bynweekday: null,
        byhour: null,
        byminute: null,
        bysecond: null,
        byeaster: null,
    },
    ek = Object.keys(eU),
    eG = (function () {
        function e(e, t) {
            void 0 === e && (e = {}),
                void 0 === t && (t = !1),
                (this._cache = t ? null : new ef()),
                (this.origOptions = es(e));
            var n = (function (e) {
                var t = (0, W.Cl)((0, W.Cl)({}, eU), es(e));
                if ((c(t.byeaster) && (t.freq = eG.YEARLY), !(c(t.freq) && eG.FREQUENCIES[t.freq])))
                    throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
                if (
                    (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))),
                    c(t.wkst) ? d(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = eG.MO.weekday),
                    c(t.bysetpos))
                ) {
                    d(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
                    for (var n = 0; n < t.bysetpos.length; n++) {
                        var i = t.bysetpos[n];
                        if (0 === i || !(i >= -366 && i <= 366))
                            throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
                    }
                }
                if (
                    !(
                        t.byweekno ||
                        T(t.byweekno) ||
                        T(t.byyearday) ||
                        t.bymonthday ||
                        T(t.bymonthday) ||
                        c(t.byweekday) ||
                        c(t.byeaster)
                    )
                )
                    switch (t.freq) {
                        case eG.YEARLY:
                            t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1),
                                (t.bymonthday = t.dtstart.getUTCDate());
                            break;
                        case eG.MONTHLY:
                            t.bymonthday = t.dtstart.getUTCDate();
                            break;
                        case eG.WEEKLY:
                            t.byweekday = [P(t.dtstart)];
                    }
                if (
                    (c(t.bymonth) && !f(t.bymonth) && (t.bymonth = [t.bymonth]),
                    c(t.byyearday) && !f(t.byyearday) && d(t.byyearday) && (t.byyearday = [t.byyearday]),
                    c(t.bymonthday))
                )
                    if (f(t.bymonthday)) {
                        for (var r = [], s = [], n = 0; n < t.bymonthday.length; n++) {
                            var i = t.bymonthday[n];
                            i > 0 ? r.push(i) : i < 0 && s.push(i);
                        }
                        (t.bymonthday = r), (t.bynmonthday = s);
                    } else
                        t.bymonthday < 0
                            ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = []))
                            : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
                else (t.bymonthday = []), (t.bynmonthday = []);
                if ((c(t.byweekno) && !f(t.byweekno) && (t.byweekno = [t.byweekno]), c(t.byweekday)))
                    if (d(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
                    else if (_(t.byweekday)) (t.byweekday = [u.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
                    else if (t.byweekday instanceof u)
                        !t.byweekday.n || t.freq > eG.MONTHLY
                            ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null))
                            : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
                    else {
                        for (var a = [], o = [], n = 0; n < t.byweekday.length; n++) {
                            var l = t.byweekday[n];
                            if (d(l)) {
                                a.push(l);
                                continue;
                            }
                            if (_(l)) {
                                a.push(u.fromStr(l).weekday);
                                continue;
                            }
                            !l.n || t.freq > eG.MONTHLY ? a.push(l.weekday) : o.push([l.weekday, l.n]);
                        }
                        (t.byweekday = T(a) ? a : null), (t.bynweekday = T(o) ? o : null);
                    }
                else t.bynweekday = null;
                return (
                    c(t.byhour)
                        ? d(t.byhour) && (t.byhour = [t.byhour])
                        : (t.byhour = t.freq < eG.HOURLY ? [t.dtstart.getUTCHours()] : null),
                    c(t.byminute)
                        ? d(t.byminute) && (t.byminute = [t.byminute])
                        : (t.byminute = t.freq < eG.MINUTELY ? [t.dtstart.getUTCMinutes()] : null),
                    c(t.bysecond)
                        ? d(t.bysecond) && (t.bysecond = [t.bysecond])
                        : (t.bysecond = t.freq < eG.SECONDLY ? [t.dtstart.getUTCSeconds()] : null),
                    { parsedOptions: t }
                );
            })(e).parsedOptions;
            this.options = n;
        }
        return (
            (e.parseText = function (e, t) {
                return J(e, t);
            }),
            (e.fromText = function (e, t) {
                var n;
                return void 0 === (n = t) && (n = z), new eG(J(e, n) || void 0);
            }),
            (e.fromString = function (t) {
                return new e(e.parseString(t) || void 0);
            }),
            (e.prototype._iter = function (e) {
                return ew(e, this.options);
            }),
            (e.prototype._cacheGet = function (e, t) {
                return !!this._cache && this._cache._cacheGet(e, t);
            }),
            (e.prototype._cacheAdd = function (e, t, n) {
                if (this._cache) return this._cache._cacheAdd(e, t, n);
            }),
            (e.prototype.all = function (e) {
                if (e) return this._iter(new K("all", {}, e));
                var t = this._cacheGet("all");
                return !1 === t && ((t = this._iter(new Y("all", {}))), this._cacheAdd("all", t)), t;
            }),
            (e.prototype.between = function (e, t, n, i) {
                if ((void 0 === n && (n = !1), !b(e) || !b(t))) throw Error("Invalid date passed in to RRule.between");
                var r = { before: t, after: e, inc: n };
                if (i) return this._iter(new K("between", r, i));
                var s = this._cacheGet("between", r);
                return !1 === s && ((s = this._iter(new Y("between", r))), this._cacheAdd("between", s, r)), s;
            }),
            (e.prototype.before = function (e, t) {
                if ((void 0 === t && (t = !1), !b(e))) throw Error("Invalid date passed in to RRule.before");
                var n = { dt: e, inc: t },
                    i = this._cacheGet("before", n);
                return !1 === i && ((i = this._iter(new Y("before", n))), this._cacheAdd("before", i, n)), i;
            }),
            (e.prototype.after = function (e, t) {
                if ((void 0 === t && (t = !1), !b(e))) throw Error("Invalid date passed in to RRule.after");
                var n = { dt: e, inc: t },
                    i = this._cacheGet("after", n);
                return !1 === i && ((i = this._iter(new Y("after", n))), this._cacheAdd("after", i, n)), i;
            }),
            (e.prototype.count = function () {
                return this.all().length;
            }),
            (e.prototype.toString = function () {
                return e_(this.origOptions);
            }),
            (e.prototype.toText = function (e, t, n) {
                return new X(this, e, t, n).toString();
            }),
            (e.prototype.isFullyConvertibleToText = function () {
                return en(this);
            }),
            (e.prototype.clone = function () {
                return new e(this.origOptions);
            }),
            (e.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"]),
            (e.YEARLY = r.YEARLY),
            (e.MONTHLY = r.MONTHLY),
            (e.WEEKLY = r.WEEKLY),
            (e.DAILY = r.DAILY),
            (e.HOURLY = r.HOURLY),
            (e.MINUTELY = r.MINUTELY),
            (e.SECONDLY = r.SECONDLY),
            (e.MO = ex.MO),
            (e.TU = ex.TU),
            (e.WE = ex.WE),
            (e.TH = ex.TH),
            (e.FR = ex.FR),
            (e.SA = ex.SA),
            (e.SU = ex.SU),
            (e.parseString = ea),
            (e.optionsToString = e_),
            e
        );
    })(),
    eF = { dtstart: null, cache: !1, unfold: !1, forceset: !1, compatible: !1, tzid: null };
function eV(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var n,
                i,
                r,
                s,
                a,
                o,
                l,
                u =
                    ((n = []),
                    (i = []),
                    (r = []),
                    (s = []),
                    (o = (a = eo(e)).dtstart),
                    (l = a.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error("Invalid empty string");
                        if (!t) return e.split(/\s/);
                        for (var n = e.split("\n"), i = 0; i < n.length; ) {
                            var r = (n[i] = n[i].replace(/\s+$/g, ""));
                            r
                                ? i > 0 && " " === r[0]
                                    ? ((n[i - 1] += r.slice(1)), n.splice(i, 1))
                                    : (i += 1)
                                : n.splice(i, 1);
                        }
                        return n;
                    })(e, t.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                a = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(":")) return { name: "RRULE", value: e };
                                            var t = m(e, ":", 1);
                                            return { name: t[0], value: t[1] };
                                        })(e),
                                        n = t.name,
                                        i = t.value,
                                        r = n.split(";");
                                    if (!r) throw Error("empty property name");
                                    return { name: r[0].toUpperCase(), parms: r.slice(1), value: i };
                                })(e),
                                o = a.name,
                                u = a.parms,
                                c = a.value;
                            switch (o.toUpperCase()) {
                                case "RRULE":
                                    if (u.length) throw Error("unsupported RRULE parm: ".concat(u.join(",")));
                                    n.push(ea(e));
                                    break;
                                case "RDATE":
                                    var d = (null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [])[1];
                                    d && !l && (l = d), (i = i.concat(eH(c, u)));
                                    break;
                                case "EXRULE":
                                    if (u.length) throw Error("unsupported EXRULE parm: ".concat(u.join(",")));
                                    r.push(ea(c));
                                    break;
                                case "EXDATE":
                                    s = s.concat(eH(c, u));
                                    break;
                                case "DTSTART":
                                    break;
                                default:
                                    throw Error("unsupported property: " + o);
                            }
                        }
                    }),
                    { dtstart: o, tzid: l, rrulevals: n, rdatevals: i, exrulevals: r, exdatevals: s }),
                c = u.rrulevals,
                d = u.rdatevals,
                _ = u.exrulevals,
                f = u.exdatevals,
                h = u.dtstart,
                p = u.tzid,
                E = !1 === t.cache;
            if (
                (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
                t.forceset || c.length > 1 || d.length || _.length || f.length)
            ) {
                var g = new eY(E);
                return (
                    g.dtstart(h),
                    g.tzid(p || void 0),
                    c.forEach(function (e) {
                        g.rrule(new eG(eB(e, h, p), E));
                    }),
                    d.forEach(function (e) {
                        g.rdate(e);
                    }),
                    _.forEach(function (e) {
                        g.exrule(new eG(eB(e, h, p), E));
                    }),
                    f.forEach(function (e) {
                        g.exdate(e);
                    }),
                    t.compatible && t.dtstart && g.rdate(h),
                    g
                );
            }
            var A = c[0] || {};
            return new eG(eB(A, A.dtstart || t.dtstart || h, A.tzid || t.tzid || p), E);
        })(
            e,
            (function (e) {
                var t = [],
                    n = Object.keys(e),
                    i = Object.keys(eF);
                if (
                    (n.forEach(function (e) {
                        S(i, e) || t.push(e);
                    }),
                    t.length)
                )
                    throw Error("Invalid options: " + t.join(", "));
                return (0, W.Cl)((0, W.Cl)({}, eF), e);
            })(t),
        )
    );
}
function eB(e, t, n) {
    return (0, W.Cl)((0, W.Cl)({}, e), { dtstart: t, tzid: n });
}
function eH(e, t) {
    return (
        t.forEach(function (e) {
            if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
        }),
        e.split(",").map(function (e) {
            return B(e);
        })
    );
}
function ej(e) {
    var t = this;
    return function (n) {
        if ((void 0 !== n && (t["_".concat(e)] = n), void 0 !== t["_".concat(e)])) return t["_".concat(e)];
        for (var i = 0; i < t._rrule.length; i++) {
            var r = t._rrule[i].origOptions[e];
            if (r) return r;
        }
    };
}
var eY = (function (e) {
    function t(t) {
        void 0 === t && (t = !1);
        var n = e.call(this, {}, t) || this;
        return (
            (n.dtstart = ej.apply(n, ["dtstart"])),
            (n.tzid = ej.apply(n, ["tzid"])),
            (n._rrule = []),
            (n._rdate = []),
            (n._exrule = []),
            (n._exdate = []),
            n
        );
    }
    return (
        (0, W.C6)(t, e),
        (t.prototype._iter = function (e) {
            return (function (e, t, n, i, r, s) {
                var a = {},
                    o = e.accept;
                function l(e, t) {
                    n.forEach(function (n) {
                        n.between(e, t, !0).forEach(function (e) {
                            a[Number(e)] = !0;
                        });
                    });
                }
                r.forEach(function (e) {
                    a[Number(new ed(e, s).rezonedDate())] = !0;
                }),
                    (e.accept = function (e) {
                        var t = Number(e);
                        return isNaN(t)
                            ? o.call(this, e)
                            : !!a[t] || (l(new Date(t - 1), new Date(t + 1)), !!a[t]) || ((a[t] = !0), o.call(this, e));
                    }),
                    "between" === e.method &&
                        (l(e.args.after, e.args.before),
                        (e.accept = function (e) {
                            var t = Number(e);
                            return !!a[t] || ((a[t] = !0), o.call(this, e));
                        }));
                for (var u = 0; u < i.length; u++) {
                    var c = new ed(i[u], s).rezonedDate();
                    if (!e.accept(new Date(c.getTime()))) break;
                }
                t.forEach(function (t) {
                    ew(e, t.options);
                });
                var d = e._result;
                switch ((F(d), e.method)) {
                    case "all":
                    case "between":
                        return d;
                    case "before":
                        return (d.length && d[d.length - 1]) || null;
                    default:
                        return (d.length && d[0]) || null;
                }
            })(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
        }),
        (t.prototype.rrule = function (e) {
            eW(e, this._rrule);
        }),
        (t.prototype.exrule = function (e) {
            eW(e, this._exrule);
        }),
        (t.prototype.rdate = function (e) {
            eK(e, this._rdate);
        }),
        (t.prototype.exdate = function (e) {
            eK(e, this._exdate);
        }),
        (t.prototype.rrules = function () {
            return this._rrule.map(function (e) {
                return eV(e.toString());
            });
        }),
        (t.prototype.exrules = function () {
            return this._exrule.map(function (e) {
                return eV(e.toString());
            });
        }),
        (t.prototype.rdates = function () {
            return this._rdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (t.prototype.exdates = function () {
            return this._exdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (t.prototype.valueOf = function () {
            var e = [];
            return (
                !this._rrule.length && this._dtstart && (e = e.concat(e_({ dtstart: this._dtstart }))),
                this._rrule.forEach(function (t) {
                    e = e.concat(t.toString().split("\n"));
                }),
                this._exrule.forEach(function (t) {
                    e = e.concat(
                        t
                            .toString()
                            .split("\n")
                            .map(function (e) {
                                return e.replace(/^RRULE:/, "EXRULE:");
                            })
                            .filter(function (e) {
                                return !/^DTSTART/.test(e);
                            }),
                    );
                }),
                this._rdate.length && e.push(ez("RDATE", this._rdate, this.tzid())),
                this._exdate.length && e.push(ez("EXDATE", this._exdate, this.tzid())),
                e
            );
        }),
        (t.prototype.toString = function () {
            return this.valueOf().join("\n");
        }),
        (t.prototype.clone = function () {
            var e = new t(!!this._cache);
            return (
                this._rrule.forEach(function (t) {
                    return e.rrule(t.clone());
                }),
                this._exrule.forEach(function (t) {
                    return e.exrule(t.clone());
                }),
                this._rdate.forEach(function (t) {
                    return e.rdate(new Date(t.getTime()));
                }),
                this._exdate.forEach(function (t) {
                    return e.exdate(new Date(t.getTime()));
                }),
                e
            );
        }),
        t
    );
})(eG);
function eW(e, t) {
    if (!(e instanceof eG)) throw TypeError(String(e) + " is not RRule instance");
    S(t.map(String), String(e)) || t.push(e);
}
function eK(e, t) {
    if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
    S(t.map(Number), Number(e)) || (t.push(e), F(t));
}
function ez(e, t, n) {
    var i = !n || "UTC" === n.toUpperCase(),
        r = i ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(n, ":"),
        s = t
            .map(function (e) {
                return V(e.valueOf(), i);
            })
            .join(",");
    return "".concat(r).concat(s);
}
var e$ = n(287809),
    eq = n(58703),
    eZ = n(927813),
    eX = n(935208),
    eQ = n(604701),
    eJ = n(988794),
    e0 = n(375708);
let e1 = 365,
    e2 = 366,
    e3 = 4,
    e6 = [eG.MO.weekday, eG.TU.weekday, eG.WE.weekday, eG.TH.weekday, eG.FR.weekday],
    e4 = [eG.SU.weekday, eG.MO.weekday, eG.TU.weekday, eG.WE.weekday, eG.TH.weekday],
    e5 = [eG.TU.weekday, eG.WE.weekday, eG.TH.weekday, eG.FR.weekday, eG.SA.weekday],
    e7 = [eG.SA.weekday, eG.SU.weekday],
    e8 = [eG.FR.weekday, eG.SA.weekday],
    e9 = [eG.SU.weekday, eG.MO.weekday],
    te = [eG.SU.weekday, eG.MO.weekday, eG.TU.weekday, eG.WE.weekday, eG.TH.weekday, eG.FR.weekday, eG.SA.weekday],
    tt = new Set([0, 6]);
function tn(e) {
    let t = e.toDate(),
        n = Math.ceil(t.getDate() / 7),
        i = e.format("dddd"),
        r = [
            { id: "none", value: eQ.z.NONE, label: e0.intl.string(e0.t["0bK0B1"]) },
            { id: "weekly", value: eQ.z.WEEKLY, label: e0.intl.formatToPlainString(e0.t["B8/yfp"], { weekday: i }) },
            {
                id: "biweekly",
                value: eQ.z.BIWEEKLY,
                label: e0.intl.formatToPlainString(e0.t["z+aIuX"], { weekday: i }),
            },
            {
                id: "monthly",
                value: eQ.z.MONTHLY,
                label: e0.intl.formatToPlainString(e0.t.mjOEBk, { nth: n, weekday: i }),
            },
            {
                id: "yearly",
                value: eQ.z.YEARLY,
                label: e0.intl.formatToPlainString(e0.t["5DFcVl"], {
                    date: t.toLocaleString(e0.intl.currentLocale, { month: "short", day: "2-digit" }),
                }),
            },
        ];
    return (
        tt.has(t.getDay())
            ? e$.default.getCurrentUser()?.isStaff() &&
              r.push({ id: "weekendOnly", value: eQ.z.WEEKEND_ONLY, label: e0.intl.string(e0.t.hRpynV) })
            : r.push({ id: "weekdayOnly", value: eQ.z.WEEKDAY_ONLY, label: e0.intl.string(e0.t["jYR/MY"]) }),
        r
    );
}
let ti = () => {
        let e = o()().add(1, "hour"),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    tr = (e, t) => (0, eq.i$)(e, e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT");
function ts(e, t, n) {
    var i;
    let r;
    null == n && (n = o()());
    let s = o()(e),
        a = null != t && "" !== t ? o()(t) : void 0,
        l = null != t && s.isSame(a, "day");
    return {
        startDateTimeString:
            ((i = n),
            (r = (0, eq.m_)(s.toDate(), i.toDate())) > 1 || r < 0
                ? tr(s, i)
                : (0, eq.i$)(s, s.localeData().calendar(r < 1 ? "sameDay" : "nextDay", s, i))),
        endDateTimeString: null != a ? (l ? a.format("LT") : tr(a, n)) : void 0,
        currentOrPastEvent: s <= n,
        upcomingEvent: s <= o()().add(1, "hour"),
        withinStartWindow: s <= o()().add(15, "minute"),
        diffMinutes: s.diff(n, "minutes"),
    };
}
function ta(e) {
    return new u(te[e]);
}
function to(e, t) {
    let n;
    return null != e && ((n = { startDate: o()(e), endDate: void 0 }), null != t && (n.endDate = o()(t))), n;
}
function tl(e, t) {
    var n;
    let i = to((n = t).scheduled_start_time, n.scheduled_end_time),
        r = o()(eX.default.extractTimestamp(e)),
        s = i?.endDate != null ? r.clone().add(i.endDate.diff(i.startDate)) : void 0;
    return { startDate: r, endDate: s };
}
function tu(e, t) {
    if (null == t) return e;
    let n = t.scheduled_end_time ?? e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? o()(t.scheduled_start_time) : e.startDate,
        endDate: null != n ? o()(n) : void 0,
    };
}
function tc(e) {
    return to(e.scheduledStartTime, e.scheduledEndTime);
}
function td(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function t_(e, t) {
    return null == e || null == t ? null == e && null == t : td(e.startDate, t.startDate) && td(e.endDate, t.endDate);
}
function tf(e) {
    let t = null != e.byWeekday ? [...e.byWeekday] : null,
        n = e.byNWeekday?.map((e) => new u(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new eG({
            dtstart: i,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: t ?? n,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count,
        })
    );
}
function th(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = n > new Date() ? n : new Date(),
        s = new Date();
    s.setFullYear(s.getFullYear() + e3);
    let a = t.between(r, s, !0, (t, n) => n < e + 1);
    return i && a.length > 0 && n.getTime() === a[0].getTime() ? a.slice(1) : a.slice(0, e);
}
function tp(e) {
    if (null == e) return null;
    let t = null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
    return null != t
        ? eX.default.fromTimestamp(Math.floor(t.getTime() / eZ.A.Millis.SECOND) * eZ.A.Millis.SECOND)
        : null;
}
function tE(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        i = new Date(eX.default.extractTimestamp(t));
    if (
        n.getUTCHours() !== i.getUTCHours() ||
        n.getUTCMinutes() !== i.getUTCMinutes() ||
        n.getUTCSeconds() !== i.getUTCSeconds()
    )
        return !1;
    switch (e.frequency) {
        case eG.WEEKLY:
            return n.getUTCDay() === i.getUTCDay();
        case eG.YEARLY:
            return n.getUTCDate() === i.getUTCDate();
        default:
            return !0;
    }
}
function tm(e) {
    let t = ta(e.toDate().getDay()),
        n = ta(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? e5 : n.weekday - t.weekday < 0 ? e4 : e6;
}
function tg(e) {
    let t = ta(e.toDate().getDay()),
        n = ta(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? e9 : n.weekday - t.weekday < 0 ? e8 : e7;
}
function tA(e, t) {
    let n = (function (e, t) {
        let n = tm(t),
            i = tg(t),
            r = ta(t.toDate().getUTCDay()),
            s = Math.ceil(t.toDate().getUTCDate() / 7),
            a = t.toDate();
        switch ((a.setMilliseconds(0), e)) {
            case eQ.z.NONE:
                return null;
            case eQ.z.WEEKLY:
                return new eG({ dtstart: a, freq: eG.WEEKLY });
            case eQ.z.BIWEEKLY:
                return new eG({ dtstart: a, freq: eG.WEEKLY, interval: 2 });
            case eQ.z.MONTHLY:
                return new eG({ dtstart: a, freq: eG.MONTHLY, byweekday: [r.nth(s)] });
            case eQ.z.YEARLY:
                return new eG({ dtstart: a, freq: eG.YEARLY });
            case eQ.z.WEEKDAY_ONLY:
                return new eG({ dtstart: a, freq: eG.DAILY, byweekday: n });
            case eQ.z.WEEKEND_ONLY:
                return new eG({ dtstart: a, freq: eG.DAILY, byweekday: i });
        }
    })(e, t);
    if (null == n) return null;
    let {
            dtstart: i,
            until: r,
            freq: s,
            interval: a,
            byweekday: o,
            bynweekday: l,
            bymonth: u,
            bymonthday: c,
            byyearday: d,
            count: _,
        } = n.options,
        f = l?.map((e) => ({ n: e[1], day: e[0] }));
    return {
        start: i.toISOString(),
        end: r?.toISOString(),
        frequency: s,
        interval: a,
        byWeekday: o,
        byNWeekday: f,
        byMonth: u,
        byMonthDay: c,
        byYearDay: d,
        count: _,
    };
}
function tI(e, t) {
    if (null == t) return eQ.z.NONE;
    let n = tf(t);
    switch (n.options.freq) {
        case eG.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return eQ.z.NONE;
            return 1 === n.options.interval ? eQ.z.WEEKLY : eQ.z.BIWEEKLY;
        case eG.YEARLY:
            return eQ.z.YEARLY;
        case eG.MONTHLY:
            return eQ.z.MONTHLY;
        case eG.DAILY:
            if ((0, s.isEqual)(n.options.byweekday, tm(e))) return eQ.z.WEEKDAY_ONLY;
            if ((0, s.isEqual)(n.options.byweekday, tg(e))) return eQ.z.WEEKEND_ONLY;
            return eQ.z.NONE;
        default:
            return eQ.z.NONE;
    }
}
function tT(e, t) {
    return (
        e?.scheduled_start_time !== t.scheduledStartTime ||
        e.scheduled_end_time !== t.scheduledEndTime ||
        !(0, s.isEqual)(e.recurrence_rule, t.recurrenceRule)
    );
}
function tS(e, t, n) {
    return e?.is_canceled ? eJ.XG.CANCELED : t < n ? eJ.XG.COMPLETED : null != e ? eJ.XG.SCHEDULED : null;
}
