n.d(t, { Z: () => s });
var i = n(710659),
    r = n(812975),
    a = (function () {
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
                        t,
                        n = void 0;
                    for (var i in ((e = null), this.rules)) {
                        var r = (n = this.rules[i]).exec(this.text);
                        r && (null === e || r[0].length > e[0].length) && ((e = r), (t = i));
                    }
                    if ((null != e && ((this.text = this.text.substr(e[0].length)), '' === this.text && (this.done = !0)), null == e)) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ('SKIP' === t);
                return (this.symbol = t), (this.value = e), !0;
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
                return this.accept('number');
            }),
            (e.prototype.expect = function (e) {
                if (this.accept(e)) return !0;
                throw Error('expected ' + e + ' but found ' + this.symbol);
            }),
            e
        );
    })();
function s(e, t) {
    void 0 === t && (t = i.Z);
    var n = {},
        s = new a(t.tokens);
    if (!s.start(e)) return null;
    return o(), n;
    function o() {
        s.expect('every');
        var e = s.acceptNumber();
        if ((e && (n.interval = parseInt(e[0], 10)), s.isDone())) throw Error('Unexpected end');
        switch (s.symbol) {
            case 'day(s)':
                (n.freq = r.Ci.DAILY), s.nextSymbol() && (u(), p());
                break;
            case 'weekday(s)':
                (n.freq = r.Ci.WEEKLY), (n.byweekday = [r.Ci.MO, r.Ci.TU, r.Ci.WE, r.Ci.TH, r.Ci.FR]), s.nextSymbol(), p();
                break;
            case 'week(s)':
                (n.freq = r.Ci.WEEKLY), s.nextSymbol() && (l(), p());
                break;
            case 'hour(s)':
                (n.freq = r.Ci.HOURLY), s.nextSymbol() && (l(), p());
                break;
            case 'minute(s)':
                (n.freq = r.Ci.MINUTELY), s.nextSymbol() && (l(), p());
                break;
            case 'month(s)':
                (n.freq = r.Ci.MONTHLY), s.nextSymbol() && (l(), p());
                break;
            case 'year(s)':
                (n.freq = r.Ci.YEARLY), s.nextSymbol() && (l(), p());
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                n.freq = r.Ci.WEEKLY;
                var t = s.symbol.substr(0, 2).toUpperCase();
                if (((n.byweekday = [r.Ci[t]]), !s.nextSymbol())) return;
                for (; s.accept('comma'); ) {
                    if (s.isDone()) throw Error('Unexpected end');
                    var i = d();
                    if (!i) throw Error('Unexpected symbol ' + s.symbol + ', expected weekday');
                    n.byweekday.push(r.Ci[i]), s.nextSymbol();
                }
                _(), p();
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
                if (((n.freq = r.Ci.YEARLY), (n.bymonth = [c()]), !s.nextSymbol())) return;
                for (; s.accept('comma'); ) {
                    if (s.isDone()) throw Error('Unexpected end');
                    var a = c();
                    if (!a) throw Error('Unexpected symbol ' + s.symbol + ', expected month');
                    n.bymonth.push(a), s.nextSymbol();
                }
                l(), p();
                break;
            default:
                throw Error('Unknown symbol');
        }
    }
    function l() {
        var e = s.accept('on'),
            t = s.accept('the');
        if (e || t)
            do {
                var i = f(),
                    a = d(),
                    o = c();
                if (i) a ? (s.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(r.Ci[a].nth(i))) : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(i), s.accept('day(s)'));
                else if (a) s.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(r.Ci[a]);
                else if ('weekday(s)' === s.symbol) s.nextSymbol(), n.byweekday || (n.byweekday = [r.Ci.MO, r.Ci.TU, r.Ci.WE, r.Ci.TH, r.Ci.FR]);
                else if ('week(s)' === s.symbol) {
                    s.nextSymbol();
                    var l = s.acceptNumber();
                    if (!l) throw Error('Unexpected symbol ' + s.symbol + ', expected week number');
                    for (n.byweekno = [parseInt(l[0], 10)]; s.accept('comma'); ) {
                        if (!(l = s.acceptNumber())) throw Error('Unexpected symbol ' + s.symbol + '; expected monthday');
                        n.byweekno.push(parseInt(l[0], 10));
                    }
                } else {
                    if (!o) return;
                    s.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(o);
                }
            } while (s.accept('comma') || s.accept('the') || s.accept('on'));
    }
    function u() {
        if (s.accept('at'))
            do {
                var e = s.acceptNumber();
                if (!e) throw Error('Unexpected symbol ' + s.symbol + ', expected hour');
                for (n.byhour = [parseInt(e[0], 10)]; s.accept('comma'); ) {
                    if (!(e = s.acceptNumber())) throw Error('Unexpected symbol ' + s.symbol + '; expected hour');
                    n.byhour.push(parseInt(e[0], 10));
                }
            } while (s.accept('comma') || s.accept('at'));
    }
    function c() {
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
    function d() {
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
    function f() {
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
    function _() {
        s.accept('on'), s.accept('the');
        var e = f();
        if (e)
            for (n.bymonthday = [e], s.nextSymbol(); s.accept('comma'); ) {
                if (!(e = f())) throw Error('Unexpected symbol ' + s.symbol + '; expected monthday');
                n.bymonthday.push(e), s.nextSymbol();
            }
    }
    function p() {
        if ('until' === s.symbol) {
            var e = Date.parse(s.text);
            if (!e) throw Error('Cannot parse until date:' + s.text);
            n.until = new Date(e);
        } else s.accept('for') && ((n.count = parseInt(s.value[0], 10)), s.expect('number'));
    }
}
