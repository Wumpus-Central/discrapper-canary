n.d(t, { Z: () => a });
var r = n(710659),
    i = n(812975),
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
                        t,
                        n = void 0;
                    for (var r in ((e = null), this.rules)) {
                        var i = (n = this.rules[r]).exec(this.text);
                        i && (null === e || i[0].length > e[0].length) && ((e = i), (t = r));
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
function a(e, t) {
    void 0 === t && (t = r.Z);
    var n = {},
        a = new o(t.tokens);
    if (!a.start(e)) return null;
    return s(), n;
    function s() {
        a.expect('every');
        var e = a.acceptNumber();
        if ((e && (n.interval = parseInt(e[0], 10)), a.isDone())) throw Error('Unexpected end');
        switch (a.symbol) {
            case 'day(s)':
                (n.freq = i.Ci.DAILY), a.nextSymbol() && (c(), p());
                break;
            case 'weekday(s)':
                (n.freq = i.Ci.WEEKLY), (n.byweekday = [i.Ci.MO, i.Ci.TU, i.Ci.WE, i.Ci.TH, i.Ci.FR]), a.nextSymbol(), p();
                break;
            case 'week(s)':
                (n.freq = i.Ci.WEEKLY), a.nextSymbol() && (l(), p());
                break;
            case 'hour(s)':
                (n.freq = i.Ci.HOURLY), a.nextSymbol() && (l(), p());
                break;
            case 'minute(s)':
                (n.freq = i.Ci.MINUTELY), a.nextSymbol() && (l(), p());
                break;
            case 'month(s)':
                (n.freq = i.Ci.MONTHLY), a.nextSymbol() && (l(), p());
                break;
            case 'year(s)':
                (n.freq = i.Ci.YEARLY), a.nextSymbol() && (l(), p());
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                n.freq = i.Ci.WEEKLY;
                var t = a.symbol.substr(0, 2).toUpperCase();
                if (((n.byweekday = [i.Ci[t]]), !a.nextSymbol())) return;
                for (; a.accept('comma'); ) {
                    if (a.isDone()) throw Error('Unexpected end');
                    var r = d();
                    if (!r) throw Error('Unexpected symbol ' + a.symbol + ', expected weekday');
                    n.byweekday.push(i.Ci[r]), a.nextSymbol();
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
                if (((n.freq = i.Ci.YEARLY), (n.bymonth = [u()]), !a.nextSymbol())) return;
                for (; a.accept('comma'); ) {
                    if (a.isDone()) throw Error('Unexpected end');
                    var o = u();
                    if (!o) throw Error('Unexpected symbol ' + a.symbol + ', expected month');
                    n.bymonth.push(o), a.nextSymbol();
                }
                l(), p();
                break;
            default:
                throw Error('Unknown symbol');
        }
    }
    function l() {
        var e = a.accept('on'),
            t = a.accept('the');
        if (e || t)
            do {
                var r = f(),
                    o = d(),
                    s = u();
                if (r) o ? (a.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.Ci[o].nth(r))) : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(r), a.accept('day(s)'));
                else if (o) a.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.Ci[o]);
                else if ('weekday(s)' === a.symbol) a.nextSymbol(), n.byweekday || (n.byweekday = [i.Ci.MO, i.Ci.TU, i.Ci.WE, i.Ci.TH, i.Ci.FR]);
                else if ('week(s)' === a.symbol) {
                    a.nextSymbol();
                    var l = a.acceptNumber();
                    if (!l) throw Error('Unexpected symbol ' + a.symbol + ', expected week number');
                    for (n.byweekno = [parseInt(l[0], 10)]; a.accept('comma'); ) {
                        if (!(l = a.acceptNumber())) throw Error('Unexpected symbol ' + a.symbol + '; expected monthday');
                        n.byweekno.push(parseInt(l[0], 10));
                    }
                } else {
                    if (!s) return;
                    a.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(s);
                }
            } while (a.accept('comma') || a.accept('the') || a.accept('on'));
    }
    function c() {
        if (a.accept('at'))
            do {
                var e = a.acceptNumber();
                if (!e) throw Error('Unexpected symbol ' + a.symbol + ', expected hour');
                for (n.byhour = [parseInt(e[0], 10)]; a.accept('comma'); ) {
                    if (!(e = a.acceptNumber())) throw Error('Unexpected symbol ' + a.symbol + '; expected hour');
                    n.byhour.push(parseInt(e[0], 10));
                }
            } while (a.accept('comma') || a.accept('at'));
    }
    function u() {
        switch (a.symbol) {
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
        switch (a.symbol) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return a.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function f() {
        switch (a.symbol) {
            case 'last':
                return a.nextSymbol(), -1;
            case 'first':
                return a.nextSymbol(), 1;
            case 'second':
                return a.nextSymbol(), a.accept('last') ? -2 : 2;
            case 'third':
                return a.nextSymbol(), a.accept('last') ? -3 : 3;
            case 'nth':
                var e = parseInt(a.value[1], 10);
                if (e < -366 || e > 366) throw Error('Nth out of range: ' + e);
                return a.nextSymbol(), a.accept('last') ? -e : e;
            default:
                return !1;
        }
    }
    function _() {
        a.accept('on'), a.accept('the');
        var e = f();
        if (e)
            for (n.bymonthday = [e], a.nextSymbol(); a.accept('comma'); ) {
                if (!(e = f())) throw Error('Unexpected symbol ' + a.symbol + '; expected monthday');
                n.bymonthday.push(e), a.nextSymbol();
            }
    }
    function p() {
        if ('until' === a.symbol) {
            var e = Date.parse(a.text);
            if (!e) throw Error('Cannot parse until date:' + a.text);
            n.until = new Date(e);
        } else a.accept('for') && ((n.count = parseInt(a.value[0], 10)), a.expect('number'));
    }
}
