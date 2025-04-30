var r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
    i = n(733),
    a = n(320387),
    o = n(387584),
    s = n(830690),
    l = function (e, t) {
        if (null == e) throw TypeError('Cannot call method on ' + e);
        if ('string' != typeof t || ('number' !== t && 'string' !== t)) throw TypeError('hint must be "string" or "number"');
        var n,
            r,
            o,
            s = 'string' === t ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
        for (o = 0; o < s.length; ++o) if (a((n = e[s[o]])) && i((r = n.call(e)))) return r;
        throw TypeError('No default value');
    },
    c = function (e, t) {
        var n = e[t];
        if (null != n) {
            if (!a(n)) throw TypeError(n + ' returned for property ' + String(t) + ' of object ' + e + ' is not a function');
            return n;
        }
    };
e.exports = function (e) {
    if (i(e)) return e;
    var t,
        n = 'default';
    if ((arguments.length > 1 && (arguments[1] === String ? (n = 'string') : arguments[1] === Number && (n = 'number')), r && (Symbol.toPrimitive ? (t = c(e, Symbol.toPrimitive)) : s(e) && (t = Symbol.prototype.valueOf)), void 0 !== t)) {
        var a = t.call(e, n);
        if (i(a)) return a;
        throw TypeError('unable to convert exotic object to primitive');
    }
    return 'default' === n && (o(e) || s(e)) && (n = 'string'), l(e, 'default' === n ? 'number' : n);
};
