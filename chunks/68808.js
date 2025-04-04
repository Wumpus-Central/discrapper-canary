n.d(t, {
    o: () => l,
    q: () => s
});
var r = n(146150),
    i = n(707908),
    o = n(686942),
    a = n(695170),
    s = (function () {
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
                return (60 * this.hour * 60 + 60 * this.minute + this.second) * 1000 + this.millisecond;
            }),
            e
        );
    })(),
    l = (function (e) {
        function t(t, n, r, i, o, a, s) {
            var l = e.call(this, i, o, a, s) || this;
            return (l.year = t), (l.month = n), (l.day = r), l;
        }
        return (
            (0, r.ZT)(t, e),
            (t.fromDate = function (e) {
                return new this(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.valueOf() % 1000);
            }),
            (t.prototype.getWeekday = function () {
                return (0, a.FO)(new Date(this.getTime()));
            }),
            (t.prototype.getTime = function () {
                return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
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
                        n = (0, o.Vy)(this.month, 12);
                    (this.month = n), (this.year += t), 0 === this.month && ((this.month = 12), --this.year);
                }
            }),
            (t.prototype.addWeekly = function (e, t) {
                t > this.getWeekday() ? (this.day += -(this.getWeekday() + 1 + (6 - t)) + 7 * e) : (this.day += -(this.getWeekday() - t) + 7 * e), this.fixDay();
            }),
            (t.prototype.addDaily = function (e) {
                (this.day += e), this.fixDay();
            }),
            (t.prototype.addHours = function (e, t, n) {
                for (t && (this.hour += Math.floor((23 - this.hour) / e) * e); ; ) {
                    this.hour += e;
                    var r = (0, o.qq)(this.hour, 24),
                        i = r.div,
                        a = r.mod;
                    if ((i && ((this.hour = a), this.addDaily(i)), (0, o.cS)(n) || (0, o.q9)(n, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, n, r) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var i = (0, o.qq)(this.minute, 60),
                        a = i.div,
                        s = i.mod;
                    if ((a && ((this.minute = s), this.addHours(a, !1, n)), ((0, o.cS)(n) || (0, o.q9)(n, this.hour)) && ((0, o.cS)(r) || (0, o.q9)(r, this.minute)))) break;
                }
            }),
            (t.prototype.addSeconds = function (e, t, n, r, i) {
                for (t && (this.second += Math.floor((86399 - (3600 * this.hour + 60 * this.minute + this.second)) / e) * e); ; ) {
                    this.second += e;
                    var a = (0, o.qq)(this.second, 60),
                        s = a.div,
                        l = a.mod;
                    if ((s && ((this.second = l), this.addMinutes(s, !1, n, r)), ((0, o.cS)(n) || (0, o.q9)(n, this.hour)) && ((0, o.cS)(r) || (0, o.q9)(r, this.minute)) && ((0, o.cS)(i) || (0, o.q9)(i, this.second)))) break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = (0, a.wz)(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (((this.day -= e), ++this.month, 13 === this.month && ((this.month = 1), ++this.year, this.year > a.VQ))) return;
                            e = (0, a.wz)(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var n = e.freq,
                    r = e.interval,
                    o = e.wkst,
                    a = e.byhour,
                    s = e.byminute,
                    l = e.bysecond;
                switch (n) {
                    case i.D.YEARLY:
                        return this.addYears(r);
                    case i.D.MONTHLY:
                        return this.addMonths(r);
                    case i.D.WEEKLY:
                        return this.addWeekly(r, o);
                    case i.D.DAILY:
                        return this.addDaily(r);
                    case i.D.HOURLY:
                        return this.addHours(r, t, a);
                    case i.D.MINUTELY:
                        return this.addMinutes(r, t, a, s);
                    case i.D.SECONDLY:
                        return this.addSeconds(r, t, a, s, l);
                }
            }),
            t
        );
    })(s);
