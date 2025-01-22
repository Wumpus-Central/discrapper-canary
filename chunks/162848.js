r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(710659),
    a = r(812975),
    o = (function () {
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
                    var e,
                        n,
                        r = void 0;
                    for (var i in ((e = null), this.rules)) {
                        var a = (r = this.rules[i]).exec(this.text);
                        a && (null === e || a[0].length > e[0].length) && ((e = a), (n = i));
                    }
                    if ((null != e && ((this.text = this.text.substr(e[0].length)), '' === this.text && (this.done = !0)), null == e)) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ('SKIP' === n);
                return (this.symbol = n), (this.value = e), !0;
            }),
            (e.prototype.accept = function (e) {
                if (this.symbol === e) {
                    if (this.value) {
                        var n = this.value;
                        return this.nextSymbol(), n;
                    }
                    return this.nextSymbol(), !0;
                }
                return !1;
            }),
            (e.prototype.acceptNumber = function () {
                return this.accept('number');
            }),
            (e.prototype.expect = function (e) {
                if (this.accept(e)) return !0;
                throw Error('expected ' + e + ' but found ' + this.symbol);
            }),
            e
        );
    })();
function s(e, n) {
    void 0 === n && (n = i.Z);
    var r = {},
        s = new o(n.tokens);
    if (!s.start(e)) return null;
    return l(), r;
    function l() {
        s.expect('every');
        var e = s.acceptNumber();
        if ((e && (r.interval = parseInt(e[0], 10)), s.isDone())) throw Error('Unexpected end');
        switch (s.symbol) {
            case 'day(s)':
                (r.freq = a.Ci.DAILY), s.nextSymbol() && (c(), _());
                break;
            case 'weekday(s)':
                (r.freq = a.Ci.WEEKLY), (r.byweekday = [a.Ci.MO, a.Ci.TU, a.Ci.WE, a.Ci.TH, a.Ci.FR]), s.nextSymbol(), _();
                break;
            case 'week(s)':
                (r.freq = a.Ci.WEEKLY), s.nextSymbol() && (u(), _());
                break;
            case 'hour(s)':
                (r.freq = a.Ci.HOURLY), s.nextSymbol() && (u(), _());
                break;
            case 'minute(s)':
                (r.freq = a.Ci.MINUTELY), s.nextSymbol() && (u(), _());
                break;
            case 'month(s)':
                (r.freq = a.Ci.MONTHLY), s.nextSymbol() && (u(), _());
                break;
            case 'year(s)':
                (r.freq = a.Ci.YEARLY), s.nextSymbol() && (u(), _());
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                r.freq = a.Ci.WEEKLY;
                var n = s.symbol.substr(0, 2).toUpperCase();
                if (((r.byweekday = [a.Ci[n]]), !s.nextSymbol())) return;
                for (; s.accept('comma'); ) {
                    if (s.isDone()) throw Error('Unexpected end');
                    var i = f();
                    if (!i) throw Error('Unexpected symbol ' + s.symbol + ', expected weekday');
                    r.byweekday.push(a.Ci[i]), s.nextSymbol();
                }
                h(), _();
                break;
            case 'january':
            case 'february':
            case 'march':
            case 'april':
            case 'may':
            case 'june':
            case 'july':
            case 'august':
            case 'september':
            case 'october':
            case 'november':
            case 'december':
                if (((r.freq = a.Ci.YEARLY), (r.bymonth = [d()]), !s.nextSymbol())) return;
                for (; s.accept('comma'); ) {
                    if (s.isDone()) throw Error('Unexpected end');
                    var o = d();
                    if (!o) throw Error('Unexpected symbol ' + s.symbol + ', expected month');
                    r.bymonth.push(o), s.nextSymbol();
                }
                u(), _();
                break;
            default:
                throw Error('Unknown symbol');
        }
    }
    function u() {
        var e = s.accept('on'),
            n = s.accept('the');
        if (e || n)
            do {
                var i = p(),
                    o = f(),
                    l = d();
                if (i) o ? (s.nextSymbol(), !r.byweekday && (r.byweekday = []), r.byweekday.push(a.Ci[o].nth(i))) : (!r.bymonthday && (r.bymonthday = []), r.bymonthday.push(i), s.accept('day(s)'));
                else if (o) s.nextSymbol(), !r.byweekday && (r.byweekday = []), r.byweekday.push(a.Ci[o]);
                else if ('weekday(s)' === s.symbol) s.nextSymbol(), !r.byweekday && (r.byweekday = [a.Ci.MO, a.Ci.TU, a.Ci.WE, a.Ci.TH, a.Ci.FR]);
                else if ('week(s)' === s.symbol) {
                    s.nextSymbol();
                    var u = s.acceptNumber();
                    if (!u) throw Error('Unexpected symbol ' + s.symbol + ', expected week number');
                    for (r.byweekno = [parseInt(u[0], 10)]; s.accept('comma'); ) {
                        if (!(u = s.acceptNumber())) throw Error('Unexpected symbol ' + s.symbol + '; expected monthday');
                        r.byweekno.push(parseInt(u[0], 10));
                    }
                } else {
                    if (!l) return;
                    s.nextSymbol(), !r.bymonth && (r.bymonth = []), r.bymonth.push(l);
                }
            } while (s.accept('comma') || s.accept('the') || s.accept('on'));
    }
    function c() {
        if (s.accept('at'))
            do {
                var e = s.acceptNumber();
                if (!e) throw Error('Unexpected symbol ' + s.symbol + ', expected hour');
                for (r.byhour = [parseInt(e[0], 10)]; s.accept('comma'); ) {
                    if (!(e = s.acceptNumber())) throw Error('Unexpected symbol ' + s.symbol + '; expected hour');
                    r.byhour.push(parseInt(e[0], 10));
                }
            } while (s.accept('comma') || s.accept('at'));
    }
    function d() {
        switch (s.symbol) {
            case 'january':
                return 1;
            case 'february':
                return 2;
            case 'march':
                return 3;
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'june':
                return 6;
            case 'july':
                return 7;
            case 'august':
                return 8;
            case 'september':
                return 9;
            case 'october':
                return 10;
            case 'november':
                return 11;
            case 'december':
                return 12;
            default:
                return !1;
        }
    }
    function f() {
        switch (s.symbol) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return s.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function p() {
        switch (s.symbol) {
            case 'last':
                return s.nextSymbol(), -1;
            case 'first':
                return s.nextSymbol(), 1;
            case 'second':
                return s.nextSymbol(), s.accept('last') ? -2 : 2;
            case 'third':
                return s.nextSymbol(), s.accept('last') ? -3 : 3;
            case 'nth':
                var e = parseInt(s.value[1], 10);
                if (e < -366 || e > 366) throw Error('Nth out of range: ' + e);
                return s.nextSymbol(), s.accept('last') ? -e : e;
            default:
                return !1;
        }
    }
    function h() {
        s.accept('on'), s.accept('the');
        var e = p();
        if (e)
            for (r.bymonthday = [e], s.nextSymbol(); s.accept('comma'); ) {
                if (!(e = p())) throw Error('Unexpected symbol ' + s.symbol + '; expected monthday');
                r.bymonthday.push(e), s.nextSymbol();
            }
    }
    function _() {
        if ('until' === s.symbol) {
            var e = Date.parse(s.text);
            if (!e) throw Error('Cannot parse until date:' + s.text);
            r.until = new Date(e);
        } else s.accept('for') && ((r.count = parseInt(s.value[0], 10)), s.expect('number'));
    }
}
