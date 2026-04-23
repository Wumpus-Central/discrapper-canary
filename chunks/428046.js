"use strict";
n.d(t, { A: () => u });
var r = n(746280),
    i = n(90727),
    s = n(391898),
    a = function (e, t) {
        return -1 !== e.indexOf(t);
    },
    o = function (e) {
        return e.toString();
    },
    l = function (e, t, n) {
        return "".concat(t, " ").concat(n, ", ").concat(e);
    };
let u = (function () {
    function e(e, t, n, i) {
        if (
            (void 0 === t && (t = o),
            void 0 === n && (n = r.A),
            void 0 === i && (i = l),
            (this.text = []),
            (this.language = n || r.A),
            (this.gettext = t),
            (this.dateFormatter = i),
            (this.rrule = e),
            (this.options = e.options),
            (this.origOptions = e.origOptions),
            this.origOptions.bymonthday)
        ) {
            var a = [].concat(this.options.bymonthday),
                u = [].concat(this.options.bynmonthday);
            a.sort(function (e, t) {
                return e - t;
            }),
                u.sort(function (e, t) {
                    return t - e;
                }),
                (this.bymonthday = a.concat(u)),
                this.bymonthday.length || (this.bymonthday = null);
        }
        if ((0, s.Wo)(this.origOptions.byweekday)) {
            var c = (0, s.cy)(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                d = String(c);
            this.byweekday = {
                allWeeks: c.filter(function (e) {
                    return !e.n;
                }),
                someWeeks: c.filter(function (e) {
                    return !!e.n;
                }),
                isWeekdays:
                    -1 !== d.indexOf("MO") &&
                    -1 !== d.indexOf("TU") &&
                    -1 !== d.indexOf("WE") &&
                    -1 !== d.indexOf("TH") &&
                    -1 !== d.indexOf("FR") &&
                    -1 === d.indexOf("SA") &&
                    -1 === d.indexOf("SU"),
                isEveryDay:
                    -1 !== d.indexOf("MO") &&
                    -1 !== d.indexOf("TU") &&
                    -1 !== d.indexOf("WE") &&
                    -1 !== d.indexOf("TH") &&
                    -1 !== d.indexOf("FR") &&
                    -1 !== d.indexOf("SA") &&
                    -1 !== d.indexOf("SU"),
            };
            var _ = function (e, t) {
                return e.weekday - t.weekday;
            };
            this.byweekday.allWeeks.sort(_),
                this.byweekday.someWeeks.sort(_),
                this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null),
                this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
        } else this.byweekday = null;
    }
    return (
        (e.isFullyConvertible = function (t) {
            if (!(t.options.freq in e.IMPLEMENTED) || (t.origOptions.until && t.origOptions.count)) return !1;
            for (var n in t.origOptions) {
                if (a(["dtstart", "wkst", "freq"], n)) break;
                if (!a(e.IMPLEMENTED[t.options.freq], n)) return !1;
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
            if (((this.text = [t("every")]), this[i.p3.FREQUENCIES[this.options.freq]](), this.options.until)) {
                this.add(t("until"));
                var n = this.options.until;
                this.add(
                    this.dateFormatter(n.getUTCFullYear(), this.language.monthNames[n.getUTCMonth()], n.getUTCDate()),
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
                ? (1 !== this.options.interval && (this.add(this.options.interval.toString()), this.add(e("years"))),
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
            var r = Math.abs(e);
            switch (r) {
                case 1:
                case 21:
                case 31:
                    t = r + n("st");
                    break;
                case 2:
                case 22:
                    t = r + n("nd");
                    break;
                case 3:
                case 23:
                    t = r + n("rd");
                    break;
                default:
                    t = r + n("th");
            }
            return e < 0 ? t + " " + n("last") : t;
        }),
        (e.prototype.monthtext = function (e) {
            return this.language.monthNames[e - 1];
        }),
        (e.prototype.weekdaytext = function (e) {
            var t = (0, s.Et)(e) ? (e + 1) % 7 : e.getJsWeekday();
            return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
        }),
        (e.prototype.plural = function (e) {
            return e % 100 != 1;
        }),
        (e.prototype.add = function (e) {
            return this.text.push(" "), this.text.push(e), this;
        }),
        (e.prototype.list = function (e, t, n, r) {
            var i = this;
            void 0 === r && (r = ","),
                (0, s.cy)(e) || (e = [e]),
                (t =
                    t ||
                    function (e) {
                        return e.toString();
                    });
            var a = function (e) {
                return t && t.call(i, e);
            };
            if (!n) return e.map(a).join(r + " ");
            for (var o = e.map(a), l = r, u = "", c = 0; c < o.length; c++)
                0 !== c && (c === o.length - 1 ? (u += " " + n + " ") : (u += l + " ")), (u += o[c]);
            return u;
        }),
        e
    );
})();
