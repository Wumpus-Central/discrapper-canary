var i = r(710659),
    a = r(812975),
    o = r(686942),
    s = function (e, n) {
        return -1 !== e.indexOf(n);
    },
    l = function (e) {
        return e.toString();
    },
    u = function (e, n, r) {
        return ''.concat(n, ' ').concat(r, ', ').concat(e);
    },
    c = (function () {
        function e(e, n, r, a) {
            if ((void 0 === n && (n = l), void 0 === r && (r = i.Z), void 0 === a && (a = u), (this.text = []), (this.language = r || i.Z), (this.gettext = n), (this.dateFormatter = a), (this.rrule = e), (this.options = e.options), (this.origOptions = e.origOptions), this.origOptions.bymonthday)) {
                var s = [].concat(this.options.bymonthday),
                    c = [].concat(this.options.bynmonthday);
                s.sort(function (e, n) {
                    return e - n;
                }),
                    c.sort(function (e, n) {
                        return n - e;
                    }),
                    (this.bymonthday = s.concat(c)),
                    !this.bymonthday.length && (this.bymonthday = null);
            }
            if ((0, o.EN)(this.origOptions.byweekday)) {
                var d = (0, o.kJ)(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                    f = String(d);
                this.byweekday = {
                    allWeeks: d.filter(function (e) {
                        return !e.n;
                    }),
                    someWeeks: d.filter(function (e) {
                        return !!e.n;
                    }),
                    isWeekdays: -1 !== f.indexOf('MO') && -1 !== f.indexOf('TU') && -1 !== f.indexOf('WE') && -1 !== f.indexOf('TH') && -1 !== f.indexOf('FR') && -1 === f.indexOf('SA') && -1 === f.indexOf('SU'),
                    isEveryDay: -1 !== f.indexOf('MO') && -1 !== f.indexOf('TU') && -1 !== f.indexOf('WE') && -1 !== f.indexOf('TH') && -1 !== f.indexOf('FR') && -1 !== f.indexOf('SA') && -1 !== f.indexOf('SU')
                };
                var p = function (e, n) {
                    return e.weekday - n.weekday;
                };
                this.byweekday.allWeeks.sort(p), this.byweekday.someWeeks.sort(p), !this.byweekday.allWeeks.length && (this.byweekday.allWeeks = null), !this.byweekday.someWeeks.length && (this.byweekday.someWeeks = null);
            } else this.byweekday = null;
        }
        return (
            (e.isFullyConvertible = function (n) {
                var r = !0;
                if (!(n.options.freq in e.IMPLEMENTED) || (n.origOptions.until && n.origOptions.count)) return !1;
                for (var i in n.origOptions) {
                    if (s(['dtstart', 'wkst', 'freq'], i)) return !0;
                    if (!s(e.IMPLEMENTED[n.options.freq], i)) return !1;
                }
                return r;
            }),
            (e.prototype.isFullyConvertible = function () {
                return e.isFullyConvertible(this.rrule);
            }),
            (e.prototype.toString = function () {
                var n = this.gettext;
                if (!(this.options.freq in e.IMPLEMENTED)) return n('RRule error: Unable to fully convert this rrule to text');
                if (((this.text = [n('every')]), this[a.Ci.FREQUENCIES[this.options.freq]](), this.options.until)) {
                    this.add(n('until'));
                    var r = this.options.until;
                    this.add(this.dateFormatter(r.getUTCFullYear(), this.language.monthNames[r.getUTCMonth()], r.getUTCDate()));
                } else
                    this.options.count &&
                        this.add(n('for'))
                            .add(this.options.count.toString())
                            .add(n(this.plural(this.options.count) ? 'times' : 'time'));
                return !this.isFullyConvertible() && this.add(n('(~ approximate)')), this.text.join('');
            }),
            (e.prototype.HOURLY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(e(this.plural(this.options.interval) ? 'hours' : 'hour'));
            }),
            (e.prototype.MINUTELY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(e(this.plural(this.options.interval) ? 'minutes' : 'minute'));
            }),
            (e.prototype.DAILY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(e(this.plural(this.options.interval) ? 'weekdays' : 'weekday')) : this.add(e(this.plural(this.options.interval) ? 'days' : 'day')), this.origOptions.bymonth && (this.add(e('in')), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour();
            }),
            (e.prototype.WEEKLY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()).add(e(this.plural(this.options.interval) ? 'weeks' : 'week')), this.byweekday && this.byweekday.isWeekdays ? (1 === this.options.interval ? this.add(e(this.plural(this.options.interval) ? 'weekdays' : 'weekday')) : this.add(e('on')).add(e('weekdays'))) : this.byweekday && this.byweekday.isEveryDay ? this.add(e(this.plural(this.options.interval) ? 'days' : 'day')) : (1 === this.options.interval && this.add(e('week')), this.origOptions.bymonth && (this.add(e('in')), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday());
            }),
            (e.prototype.MONTHLY = function () {
                var e = this.gettext;
                this.origOptions.bymonth ? (1 !== this.options.interval && (this.add(this.options.interval.toString()).add(e('months')), this.plural(this.options.interval) && this.add(e('in'))), this._bymonth()) : (1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(e(this.plural(this.options.interval) ? 'months' : 'month'))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(e('on')).add(e('weekdays')) : this.byweekday && this._byweekday();
            }),
            (e.prototype.YEARLY = function () {
                var e = this.gettext;
                this.origOptions.bymonth ? (1 !== this.options.interval && (this.add(this.options.interval.toString()), this.add(e('years'))), this._bymonth()) : (1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(e(this.plural(this.options.interval) ? 'years' : 'year'))),
                    this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(),
                    this.options.byyearday &&
                        this.add(e('on the'))
                            .add(this.list(this.options.byyearday, this.nth, e('and')))
                            .add(e('day')),
                    this.options.byweekno &&
                        this.add(e('in'))
                            .add(e(this.plural(this.options.byweekno.length) ? 'weeks' : 'week'))
                            .add(this.list(this.options.byweekno, void 0, e('and')));
            }),
            (e.prototype._bymonthday = function () {
                var e = this.gettext;
                this.byweekday && this.byweekday.allWeeks
                    ? this.add(e('on'))
                          .add(this.list(this.byweekday.allWeeks, this.weekdaytext, e('or')))
                          .add(e('the'))
                          .add(this.list(this.bymonthday, this.nth, e('or')))
                    : this.add(e('on the')).add(this.list(this.bymonthday, this.nth, e('and')));
            }),
            (e.prototype._byweekday = function () {
                var e = this.gettext;
                this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(e('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(e('and')), this.add(e('on the')).add(this.list(this.byweekday.someWeeks, this.weekdaytext, e('and'))));
            }),
            (e.prototype._byhour = function () {
                var e = this.gettext;
                this.add(e('at')).add(this.list(this.origOptions.byhour, void 0, e('and')));
            }),
            (e.prototype._bymonth = function () {
                this.add(this.list(this.options.bymonth, this.monthtext, this.gettext('and')));
            }),
            (e.prototype.nth = function (e) {
                e = parseInt(e.toString(), 10);
                var n,
                    r = this.gettext;
                if (-1 === e) return r('last');
                var i = Math.abs(e);
                switch (i) {
                    case 1:
                    case 21:
                    case 31:
                        n = i + r('st');
                        break;
                    case 2:
                    case 22:
                        n = i + r('nd');
                        break;
                    case 3:
                    case 23:
                        n = i + r('rd');
                        break;
                    default:
                        n = i + r('th');
                }
                return e < 0 ? n + ' ' + r('last') : n;
            }),
            (e.prototype.monthtext = function (e) {
                return this.language.monthNames[e - 1];
            }),
            (e.prototype.weekdaytext = function (e) {
                var n = (0, o.hj)(e) ? (e + 1) % 7 : e.getJsWeekday();
                return (e.n ? this.nth(e.n) + ' ' : '') + this.language.dayNames[n];
            }),
            (e.prototype.plural = function (e) {
                return e % 100 != 1;
            }),
            (e.prototype.add = function (e) {
                return this.text.push(' '), this.text.push(e), this;
            }),
            (e.prototype.list = function (e, n, r, i) {
                var a = this;
                void 0 === i && (i = ','), !(0, o.kJ)(e) && (e = [e]);
                var s = function (e, n, r) {
                    for (var i = '', a = 0; a < e.length; a++) 0 !== a && (a === e.length - 1 ? (i += ' ' + r + ' ') : (i += n + ' ')), (i += e[a]);
                    return i;
                };
                n =
                    n ||
                    function (e) {
                        return e.toString();
                    };
                var l = function (e) {
                    return n && n.call(a, e);
                };
                return r ? s(e.map(l), i, r) : e.map(l).join(i + ' ');
            }),
            e
        );
    })();
n.Z = c;
