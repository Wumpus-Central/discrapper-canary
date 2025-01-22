r.d(n, {
    p: function () {
        return f;
    }
});
var i = r(146150),
    a = r(812975),
    o = r(695170),
    s = r(686942),
    l = r(809111),
    u = r(805802),
    c = r(981196);
function d(e) {
    var n = this;
    return function (r) {
        if ((void 0 !== r && (n['_'.concat(e)] = r), void 0 !== n['_'.concat(e)])) return n['_'.concat(e)];
        for (var i = 0; i < n._rrule.length; i++) {
            var a = n._rrule[i].origOptions[e];
            if (a) return a;
        }
    };
}
var f = (function (e) {
    function n(n) {
        void 0 === n && (n = !1);
        var r = e.call(this, {}, n) || this;
        return (r.dtstart = d.apply(r, ['dtstart'])), (r.tzid = d.apply(r, ['tzid'])), (r._rrule = []), (r._rdate = []), (r._exrule = []), (r._exdate = []), r;
    }
    return (
        (0, i.ZT)(n, e),
        (n.prototype._iter = function (e) {
            return (0, l.X)(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
        }),
        (n.prototype.rrule = function (e) {
            p(e, this._rrule);
        }),
        (n.prototype.exrule = function (e) {
            p(e, this._exrule);
        }),
        (n.prototype.rdate = function (e) {
            h(e, this._rdate);
        }),
        (n.prototype.exdate = function (e) {
            h(e, this._exdate);
        }),
        (n.prototype.rrules = function () {
            return this._rrule.map(function (e) {
                return (0, u.S)(e.toString());
            });
        }),
        (n.prototype.exrules = function () {
            return this._exrule.map(function (e) {
                return (0, u.S)(e.toString());
            });
        }),
        (n.prototype.rdates = function () {
            return this._rdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (n.prototype.exdates = function () {
            return this._exdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (n.prototype.valueOf = function () {
            var e = [];
            return (
                !this._rrule.length && this._dtstart && (e = e.concat((0, c.N)({ dtstart: this._dtstart }))),
                this._rrule.forEach(function (n) {
                    e = e.concat(n.toString().split('\n'));
                }),
                this._exrule.forEach(function (n) {
                    e = e.concat(
                        n
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
                this._rdate.length && e.push(_('RDATE', this._rdate, this.tzid())),
                this._exdate.length && e.push(_('EXDATE', this._exdate, this.tzid())),
                e
            );
        }),
        (n.prototype.toString = function () {
            return this.valueOf().join('\n');
        }),
        (n.prototype.clone = function () {
            var e = new n(!!this._cache);
            return (
                this._rrule.forEach(function (n) {
                    return e.rrule(n.clone());
                }),
                this._exrule.forEach(function (n) {
                    return e.exrule(n.clone());
                }),
                this._rdate.forEach(function (n) {
                    return e.rdate(new Date(n.getTime()));
                }),
                this._exdate.forEach(function (n) {
                    return e.exdate(new Date(n.getTime()));
                }),
                e
            );
        }),
        n
    );
})(a.Ci);
function p(e, n) {
    if (!(e instanceof a.Ci)) throw TypeError(String(e) + ' is not RRule instance');
    !(0, s.q9)(n.map(String), String(e)) && n.push(e);
}
function h(e, n) {
    if (!(e instanceof Date)) throw TypeError(String(e) + ' is not Date instance');
    !(0, s.q9)(n.map(Number), Number(e)) && (n.push(e), (0, o.DY)(n));
}
function _(e, n, r) {
    var i = !r || 'UTC' === r.toUpperCase(),
        a = i ? ''.concat(e, ':') : ''.concat(e, ';TZID=').concat(r, ':'),
        s = n
            .map(function (e) {
                return (0, o.Od)(e.valueOf(), i);
            })
            .join(',');
    return ''.concat(a).concat(s);
}
