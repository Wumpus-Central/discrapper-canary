"use strict";
n.d(t, { c: () => l, g: () => o });
var r = n(56636),
    i = n(114922),
    a = n(391898),
    s = n(222367),
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
        function t(t, n, r, i, a, s, o) {
            var l = e.call(this, i, a, s, o) || this;
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
                return (0, s.VJ)(new Date(this.getTime()));
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
                        n = (0, a._D)(this.month, 12);
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
                    var r = (0, a.E5)(this.hour, 24),
                        i = r.div,
                        s = r.mod;
                    if ((i && ((this.hour = s), this.addDaily(i)), (0, a.Ie)(n) || (0, a.mK)(n, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, n, r) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var i = (0, a.E5)(this.minute, 60),
                        s = i.div,
                        o = i.mod;
                    if (
                        (s && ((this.minute = o), this.addHours(s, !1, n)),
                        ((0, a.Ie)(n) || (0, a.mK)(n, this.hour)) && ((0, a.Ie)(r) || (0, a.mK)(r, this.minute)))
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
                    var s = (0, a.E5)(this.second, 60),
                        o = s.div,
                        l = s.mod;
                    if (
                        (o && ((this.second = l), this.addMinutes(o, !1, n, r)),
                        ((0, a.Ie)(n) || (0, a.mK)(n, this.hour)) &&
                            ((0, a.Ie)(r) || (0, a.mK)(r, this.minute)) &&
                            ((0, a.Ie)(i) || (0, a.mK)(i, this.second)))
                    )
                        break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = (0, s.kk)(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (
                                ((this.day -= e),
                                ++this.month,
                                13 === this.month && ((this.month = 1), ++this.year, this.year > s.KE))
                            )
                                return;
                            e = (0, s.kk)(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var n = e.freq,
                    r = e.interval,
                    a = e.wkst,
                    s = e.byhour,
                    o = e.byminute,
                    l = e.bysecond;
                switch (n) {
                    case i.j.YEARLY:
                        return this.addYears(r);
                    case i.j.MONTHLY:
                        return this.addMonths(r);
                    case i.j.WEEKLY:
                        return this.addWeekly(r, a);
                    case i.j.DAILY:
                        return this.addDaily(r);
                    case i.j.HOURLY:
                        return this.addHours(r, t, s);
                    case i.j.MINUTELY:
                        return this.addMinutes(r, t, s, o);
                    case i.j.SECONDLY:
                        return this.addSeconds(r, t, s, o, l);
                }
            }),
            t
        );
    })(o);
