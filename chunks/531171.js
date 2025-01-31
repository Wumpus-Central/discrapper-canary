n.d(t, { p: () => d });
var i = n(146150),
    r = n(812975),
    a = n(695170),
    s = n(686942),
    o = n(809111),
    l = n(805802),
    u = n(981196);
function c(e) {
    var t = this;
    return function (n) {
        if ((void 0 !== n && (t['_'.concat(e)] = n), void 0 !== t['_'.concat(e)])) return t['_'.concat(e)];
        for (var i = 0; i < t._rrule.length; i++) {
            var r = t._rrule[i].origOptions[e];
            if (r) return r;
        }
    };
}
var d = (function (e) {
    function t(t) {
        void 0 === t && (t = !1);
        var n = e.call(this, {}, t) || this;
        return (n.dtstart = c.apply(n, ['dtstart'])), (n.tzid = c.apply(n, ['tzid'])), (n._rrule = []), (n._rdate = []), (n._exrule = []), (n._exdate = []), n;
    }
    return (
        (0, i.ZT)(t, e),
        (t.prototype._iter = function (e) {
            return (0, o.X)(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
        }),
        (t.prototype.rrule = function (e) {
            f(e, this._rrule);
        }),
        (t.prototype.exrule = function (e) {
            f(e, this._exrule);
        }),
        (t.prototype.rdate = function (e) {
            _(e, this._rdate);
        }),
        (t.prototype.exdate = function (e) {
            _(e, this._exdate);
        }),
        (t.prototype.rrules = function () {
            return this._rrule.map(function (e) {
                return (0, l.S)(e.toString());
            });
        }),
        (t.prototype.exrules = function () {
            return this._exrule.map(function (e) {
                return (0, l.S)(e.toString());
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
                !this._rrule.length && this._dtstart && (e = e.concat((0, u.N)({ dtstart: this._dtstart }))),
                this._rrule.forEach(function (t) {
                    e = e.concat(t.toString().split('\n'));
                }),
                this._exrule.forEach(function (t) {
                    e = e.concat(
                        t
                            .toString()
                            .split('\n')
                            .map(function (e) {
                                return e.replace(/^RRULE:/, 'EXRULE:');
                            })
                            .filter(function (e) {
                                return !/^DTSTART/.test(e);
                            })
                    );
                }),
                this._rdate.length && e.push(p('RDATE', this._rdate, this.tzid())),
                this._exdate.length && e.push(p('EXDATE', this._exdate, this.tzid())),
                e
            );
        }),
        (t.prototype.toString = function () {
            return this.valueOf().join('\n');
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
})(r.Ci);
function f(e, t) {
    if (!(e instanceof r.Ci)) throw TypeError(String(e) + ' is not RRule instance');
    (0, s.q9)(t.map(String), String(e)) || t.push(e);
}
function _(e, t) {
    if (!(e instanceof Date)) throw TypeError(String(e) + ' is not Date instance');
    (0, s.q9)(t.map(Number), Number(e)) || (t.push(e), (0, a.DY)(t));
}
function p(e, t, n) {
    var i = !n || 'UTC' === n.toUpperCase(),
        r = i ? ''.concat(e, ':') : ''.concat(e, ';TZID=').concat(n, ':'),
        s = t
            .map(function (e) {
                return (0, a.Od)(e.valueOf(), i);
            })
            .join(',');
    return ''.concat(r).concat(s);
}
