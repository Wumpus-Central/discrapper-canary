"use strict";
n.d(t, { c: () => l, g: () => o });
var r = n(56636),
    i = n(114922),
    s = n(391898),
    a = n(222367),
    o = (function () {
        function e(e, t, n, r) {
            (this.hour = e), (this.minute = t), (this.second = n), (this.millisecond = r || 0);
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
    l = (function (e) {
        function t(t, n, r, i, s, a, o) {
            var l = e.call(this, i, s, a, o) || this;
            return (l.year = t), (l.month = n), (l.day = r), l;
        }
        return (
            (0, r.C6)(t, e),
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
                return (0, a.VJ)(new Date(this.getTime()));
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
                        n = (0, s._D)(this.month, 12);
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
                    var r = (0, s.E5)(this.hour, 24),
                        i = r.div,
                        a = r.mod;
                    if ((i && ((this.hour = a), this.addDaily(i)), (0, s.Ie)(n) || (0, s.mK)(n, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, n, r) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var i = (0, s.E5)(this.minute, 60),
                        a = i.div,
                        o = i.mod;
                    if (
                        (a && ((this.minute = o), this.addHours(a, !1, n)),
                        ((0, s.Ie)(n) || (0, s.mK)(n, this.hour)) && ((0, s.Ie)(r) || (0, s.mK)(r, this.minute)))
                    )
                        break;
                }
            }),
            (t.prototype.addSeconds = function (e, t, n, r, i) {
                for (
                    t &&
                    (this.second += Math.floor((86399 - (3600 * this.hour + 60 * this.minute + this.second)) / e) * e);
                    ;
                ) {
                    this.second += e;
                    var a = (0, s.E5)(this.second, 60),
                        o = a.div,
                        l = a.mod;
                    if (
                        (o && ((this.second = l), this.addMinutes(o, !1, n, r)),
                        ((0, s.Ie)(n) || (0, s.mK)(n, this.hour)) &&
                            ((0, s.Ie)(r) || (0, s.mK)(r, this.minute)) &&
                            ((0, s.Ie)(i) || (0, s.mK)(i, this.second)))
                    )
                        break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = (0, a.kk)(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (
                                ((this.day -= e),
                                ++this.month,
                                13 === this.month && ((this.month = 1), ++this.year, this.year > a.KE))
                            )
                                return;
                            e = (0, a.kk)(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var n = e.freq,
                    r = e.interval,
                    s = e.wkst,
                    a = e.byhour,
                    o = e.byminute,
                    l = e.bysecond;
                switch (n) {
                    case i.j.YEARLY:
                        return this.addYears(r);
                    case i.j.MONTHLY:
                        return this.addMonths(r);
                    case i.j.WEEKLY:
                        return this.addWeekly(r, s);
                    case i.j.DAILY:
                        return this.addDaily(r);
                    case i.j.HOURLY:
                        return this.addHours(r, t, a);
                    case i.j.MINUTELY:
                        return this.addMinutes(r, t, a, o);
                    case i.j.SECONDLY:
                        return this.addSeconds(r, t, a, o, l);
                }
            }),
            t
        );
    })(o);
