"use strict";
n.d(t, { A: () => a });
var r = n(746280),
    i = n(90727),
    s = (function () {
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
                            r = this.rules[e].exec(this.text);
                        r && (null === t || r[0].length > t[0].length) && ((t = r), (n = e));
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
function a(e, t) {
    void 0 === t && (t = r.A);
    var n = {},
        a = new s(t.tokens);
    if (!a.start(e)) return null;
    return (
        (function () {
            a.expect("every");
            var e = a.acceptNumber();
            if ((e && (n.interval = parseInt(e[0], 10)), a.isDone())) throw Error("Unexpected end");
            switch (a.symbol) {
                case "day(s)":
                    (n.freq = i.p3.DAILY),
                        a.nextSymbol() &&
                            ((function () {
                                if (a.accept("at"))
                                    do {
                                        var e = a.acceptNumber();
                                        if (!e) throw Error("Unexpected symbol " + a.symbol + ", expected hour");
                                        for (n.byhour = [parseInt(e[0], 10)]; a.accept("comma"); ) {
                                            if (!(e = a.acceptNumber()))
                                                throw Error("Unexpected symbol " + a.symbol + "; expected hour");
                                            n.byhour.push(parseInt(e[0], 10));
                                        }
                                    } while (a.accept("comma") || a.accept("at"));
                            })(),
                            c());
                    break;
                case "weekday(s)":
                    (n.freq = i.p3.WEEKLY),
                        (n.byweekday = [i.p3.MO, i.p3.TU, i.p3.WE, i.p3.TH, i.p3.FR]),
                        a.nextSymbol(),
                        c();
                    break;
                case "week(s)":
                    (n.freq = i.p3.WEEKLY), a.nextSymbol() && (o(), c());
                    break;
                case "hour(s)":
                    (n.freq = i.p3.HOURLY), a.nextSymbol() && (o(), c());
                    break;
                case "minute(s)":
                    (n.freq = i.p3.MINUTELY), a.nextSymbol() && (o(), c());
                    break;
                case "month(s)":
                    (n.freq = i.p3.MONTHLY), a.nextSymbol() && (o(), c());
                    break;
                case "year(s)":
                    (n.freq = i.p3.YEARLY), a.nextSymbol() && (o(), c());
                    break;
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    n.freq = i.p3.WEEKLY;
                    var t = a.symbol.substr(0, 2).toUpperCase();
                    if (((n.byweekday = [i.p3[t]]), !a.nextSymbol())) return;
                    for (; a.accept("comma"); ) {
                        if (a.isDone()) throw Error("Unexpected end");
                        var r = u();
                        if (!r) throw Error("Unexpected symbol " + a.symbol + ", expected weekday");
                        n.byweekday.push(i.p3[r]), a.nextSymbol();
                    }
                    (function () {
                        a.accept("on"), a.accept("the");
                        var e = d();
                        if (e)
                            for (n.bymonthday = [e], a.nextSymbol(); a.accept("comma"); ) {
                                if (!(e = d())) throw Error("Unexpected symbol " + a.symbol + "; expected monthday");
                                n.bymonthday.push(e), a.nextSymbol();
                            }
                    })(),
                        c();
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
                    if (((n.freq = i.p3.YEARLY), (n.bymonth = [l()]), !a.nextSymbol())) return;
                    for (; a.accept("comma"); ) {
                        if (a.isDone()) throw Error("Unexpected end");
                        var s = l();
                        if (!s) throw Error("Unexpected symbol " + a.symbol + ", expected month");
                        n.bymonth.push(s), a.nextSymbol();
                    }
                    o(), c();
                    break;
                default:
                    throw Error("Unknown symbol");
            }
        })(),
        n
    );
    function o() {
        var e = a.accept("on"),
            t = a.accept("the");
        if (e || t)
            do {
                var r = d(),
                    s = u(),
                    o = l();
                if (r)
                    s
                        ? (a.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.p3[s].nth(r)))
                        : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(r), a.accept("day(s)"));
                else if (s) a.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.p3[s]);
                else if ("weekday(s)" === a.symbol)
                    a.nextSymbol(), n.byweekday || (n.byweekday = [i.p3.MO, i.p3.TU, i.p3.WE, i.p3.TH, i.p3.FR]);
                else if ("week(s)" === a.symbol) {
                    a.nextSymbol();
                    var c = a.acceptNumber();
                    if (!c) throw Error("Unexpected symbol " + a.symbol + ", expected week number");
                    for (n.byweekno = [parseInt(c[0], 10)]; a.accept("comma"); ) {
                        if (!(c = a.acceptNumber()))
                            throw Error("Unexpected symbol " + a.symbol + "; expected monthday");
                        n.byweekno.push(parseInt(c[0], 10));
                    }
                } else {
                    if (!o) return;
                    a.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(o);
                }
            } while (a.accept("comma") || a.accept("the") || a.accept("on"));
    }
    function l() {
        switch (a.symbol) {
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
    function u() {
        switch (a.symbol) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                return a.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function d() {
        switch (a.symbol) {
            case "last":
                return a.nextSymbol(), -1;
            case "first":
                return a.nextSymbol(), 1;
            case "second":
                return a.nextSymbol(), a.accept("last") ? -2 : 2;
            case "third":
                return a.nextSymbol(), a.accept("last") ? -3 : 3;
            case "nth":
                var e = parseInt(a.value[1], 10);
                if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
                return a.nextSymbol(), a.accept("last") ? -e : e;
            default:
                return !1;
        }
    }
    function c() {
        if ("until" === a.symbol) {
            var e = Date.parse(a.text);
            if (!e) throw Error("Cannot parse until date:" + a.text);
            n.until = new Date(e);
        } else a.accept("for") && ((n.count = parseInt(a.value[0], 10)), a.expect("number"));
    }
}
