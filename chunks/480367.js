"use strict";
n.d(t, { D: () => d });
var r = n(56636),
    i = n(90727),
    s = n(222367),
    a = n(391898),
    o = n(211169),
    l = n(201348),
    u = n(727049);
function c(e) {
    var t = this;
    return function (n) {
        if ((void 0 !== n && (t["_".concat(e)] = n), void 0 !== t["_".concat(e)])) return t["_".concat(e)];
        for (var r = 0; r < t._rrule.length; r++) {
            var i = t._rrule[r].origOptions[e];
            if (i) return i;
        }
    };
}
var d = (function (e) {
    function t(t) {
        void 0 === t && (t = !1);
        var n = e.call(this, {}, t) || this;
        return (
            (n.dtstart = c.apply(n, ["dtstart"])),
            (n.tzid = c.apply(n, ["tzid"])),
            (n._rrule = []),
            (n._rdate = []),
            (n._exrule = []),
            (n._exdate = []),
            n
        );
    }
    return (
        (0, r.C6)(t, e),
        (t.prototype._iter = function (e) {
            return (0, o.V)(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
        }),
        (t.prototype.rrule = function (e) {
            _(e, this._rrule);
        }),
        (t.prototype.exrule = function (e) {
            _(e, this._exrule);
        }),
        (t.prototype.rdate = function (e) {
            f(e, this._rdate);
        }),
        (t.prototype.exdate = function (e) {
            f(e, this._exdate);
        }),
        (t.prototype.rrules = function () {
            return this._rrule.map(function (e) {
                return (0, l.Y)(e.toString());
            });
        }),
        (t.prototype.exrules = function () {
            return this._exrule.map(function (e) {
                return (0, l.Y)(e.toString());
            });
        }),
        (t.prototype.rdates = function () {
            return this._rdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (t.prototype.exdates = function () {
            return this._exdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (t.prototype.valueOf = function () {
            var e = [];
            return (
                !this._rrule.length && this._dtstart && (e = e.concat((0, u.F)({ dtstart: this._dtstart }))),
                this._rrule.forEach(function (t) {
                    e = e.concat(t.toString().split("\n"));
                }),
                this._exrule.forEach(function (t) {
                    e = e.concat(
                        t
                            .toString()
                            .split("\n")
                            .map(function (e) {
                                return e.replace(/^RRULE:/, "EXRULE:");
                            })
                            .filter(function (e) {
                                return !/^DTSTART/.test(e);
                            }),
                    );
                }),
                this._rdate.length && e.push(p("RDATE", this._rdate, this.tzid())),
                this._exdate.length && e.push(p("EXDATE", this._exdate, this.tzid())),
                e
            );
        }),
        (t.prototype.toString = function () {
            return this.valueOf().join("\n");
        }),
        (t.prototype.clone = function () {
            var e = new t(!!this._cache);
            return (
                this._rrule.forEach(function (t) {
                    return e.rrule(t.clone());
                }),
                this._exrule.forEach(function (t) {
                    return e.exrule(t.clone());
                }),
                this._rdate.forEach(function (t) {
                    return e.rdate(new Date(t.getTime()));
                }),
                this._exdate.forEach(function (t) {
                    return e.exdate(new Date(t.getTime()));
                }),
                e
            );
        }),
        t
    );
})(i.p3);
function _(e, t) {
    if (!(e instanceof i.p3)) throw TypeError(String(e) + " is not RRule instance");
    (0, a.mK)(t.map(String), String(e)) || t.push(e);
}
function f(e, t) {
    if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
    (0, a.mK)(t.map(Number), Number(e)) || (t.push(e), (0, s.di)(t));
}
function p(e, t, n) {
    var r = !n || "UTC" === n.toUpperCase(),
        i = r ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(n, ":"),
        a = t
            .map(function (e) {
                return (0, s.w)(e.valueOf(), r);
            })
            .join(",");
    return "".concat(i).concat(a);
}
