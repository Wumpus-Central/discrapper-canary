n.d(t, { A: () => s });
var r = n(746280),
    i = n(90727),
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
                    for (var r in ((e = null), this.rules)) {
                        var i = (n = this.rules[r]).exec(this.text);
                        i && (null === e || i[0].length > e[0].length) && ((e = i), (t = r));
                    }
                    if (
                        (null != e &&
                            ((this.text = this.text.substr(e[0].length)), "" === this.text && (this.done = !0)),
                        null == e)
                    ) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ("SKIP" === t);
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
                return this.accept("number");
            }),
            (e.prototype.expect = function (e) {
                if (this.accept(e)) return !0;
                throw Error("expected " + e + " but found " + this.symbol);
            }),
            e
        );
    })();
function s(e, t) {
    void 0 === t && (t = r.A);
    var n = {},
        s = new a(t.tokens);
    if (!s.start(e)) return null;
    return o(), n;
    function o() {
        s.expect("every");
        var e = s.acceptNumber();
        if ((e && (n.interval = parseInt(e[0], 10)), s.isDone())) throw Error("Unexpected end");
        switch (s.symbol) {
            case "day(s)":
                (n.freq = i.p3.DAILY), s.nextSymbol() && (c(), _());
                break;
            case "weekday(s)":
                (n.freq = i.p3.WEEKLY),
                    (n.byweekday = [i.p3.MO, i.p3.TU, i.p3.WE, i.p3.TH, i.p3.FR]),
                    s.nextSymbol(),
                    _();
                break;
            case "week(s)":
                (n.freq = i.p3.WEEKLY), s.nextSymbol() && (l(), _());
                break;
            case "hour(s)":
                (n.freq = i.p3.HOURLY), s.nextSymbol() && (l(), _());
                break;
            case "minute(s)":
                (n.freq = i.p3.MINUTELY), s.nextSymbol() && (l(), _());
                break;
            case "month(s)":
                (n.freq = i.p3.MONTHLY), s.nextSymbol() && (l(), _());
                break;
            case "year(s)":
                (n.freq = i.p3.YEARLY), s.nextSymbol() && (l(), _());
                break;
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                n.freq = i.p3.WEEKLY;
                var t = s.symbol.substr(0, 2).toUpperCase();
                if (((n.byweekday = [i.p3[t]]), !s.nextSymbol())) return;
                for (; s.accept("comma"); ) {
                    if (s.isDone()) throw Error("Unexpected end");
                    var r = d();
                    if (!r) throw Error("Unexpected symbol " + s.symbol + ", expected weekday");
                    n.byweekday.push(i.p3[r]), s.nextSymbol();
                }
                p(), _();
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
                if (((n.freq = i.p3.YEARLY), (n.bymonth = [u()]), !s.nextSymbol())) return;
                for (; s.accept("comma"); ) {
                    if (s.isDone()) throw Error("Unexpected end");
                    var a = u();
                    if (!a) throw Error("Unexpected symbol " + s.symbol + ", expected month");
                    n.bymonth.push(a), s.nextSymbol();
                }
                l(), _();
                break;
            default:
                throw Error("Unknown symbol");
        }
    }
    function l() {
        var e = s.accept("on"),
            t = s.accept("the");
        if (e || t)
            do {
                var r = f(),
                    a = d(),
                    o = u();
                if (r)
                    a
                        ? (s.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.p3[a].nth(r)))
                        : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(r), s.accept("day(s)"));
                else if (a) s.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.p3[a]);
                else if ("weekday(s)" === s.symbol)
                    s.nextSymbol(), n.byweekday || (n.byweekday = [i.p3.MO, i.p3.TU, i.p3.WE, i.p3.TH, i.p3.FR]);
                else if ("week(s)" === s.symbol) {
                    s.nextSymbol();
                    var l = s.acceptNumber();
                    if (!l) throw Error("Unexpected symbol " + s.symbol + ", expected week number");
                    for (n.byweekno = [parseInt(l[0], 10)]; s.accept("comma"); ) {
                        if (!(l = s.acceptNumber()))
                            throw Error("Unexpected symbol " + s.symbol + "; expected monthday");
                        n.byweekno.push(parseInt(l[0], 10));
                    }
                } else {
                    if (!o) return;
                    s.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(o);
                }
            } while (s.accept("comma") || s.accept("the") || s.accept("on"));
    }
    function c() {
        if (s.accept("at"))
            do {
                var e = s.acceptNumber();
                if (!e) throw Error("Unexpected symbol " + s.symbol + ", expected hour");
                for (n.byhour = [parseInt(e[0], 10)]; s.accept("comma"); ) {
                    if (!(e = s.acceptNumber())) throw Error("Unexpected symbol " + s.symbol + "; expected hour");
                    n.byhour.push(parseInt(e[0], 10));
                }
            } while (s.accept("comma") || s.accept("at"));
    }
    function u() {
        switch (s.symbol) {
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
    function d() {
        switch (s.symbol) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                return s.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function f() {
        switch (s.symbol) {
            case "last":
                return s.nextSymbol(), -1;
            case "first":
                return s.nextSymbol(), 1;
            case "second":
                return s.nextSymbol(), s.accept("last") ? -2 : 2;
            case "third":
                return s.nextSymbol(), s.accept("last") ? -3 : 3;
            case "nth":
                var e = parseInt(s.value[1], 10);
                if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
                return s.nextSymbol(), s.accept("last") ? -e : e;
            default:
                return !1;
        }
    }
    function p() {
        s.accept("on"), s.accept("the");
        var e = f();
        if (e)
            for (n.bymonthday = [e], s.nextSymbol(); s.accept("comma"); ) {
                if (!(e = f())) throw Error("Unexpected symbol " + s.symbol + "; expected monthday");
                n.bymonthday.push(e), s.nextSymbol();
            }
    }
    function _() {
        if ("until" === s.symbol) {
            var e = Date.parse(s.text);
            if (!e) throw Error("Cannot parse until date:" + s.text);
            n.until = new Date(e);
        } else s.accept("for") && ((n.count = parseInt(s.value[0], 10)), s.expect("number"));
    }
}
