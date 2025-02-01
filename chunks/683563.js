var i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
    r = n(434586),
    a = n(320387),
    s = n(198811),
    o = n(170058),
    l = function (e, t) {
        if (null == e) throw TypeError('Cannot call method on ' + e);
        if ('string' != typeof t || ('number' !== t && 'string' !== t)) throw TypeError('hint must be "string" or "number"');
        var n,
            i,
            s,
            o = 'string' === t ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
        for (s = 0; s < o.length; ++s) if (a((n = e[o[s]])) && r((i = n.call(e)))) return i;
        throw TypeError('No default value');
    },
    u = function (e, t) {
        var n = e[t];
        if (null != n) {
            if (!a(n)) throw TypeError(n + ' returned for property ' + t + ' of object ' + e + ' is not a function');
            return n;
        }
    };
e.exports = function (e) {
    if (r(e)) return e;
    var t,
        n = 'default';
    if ((arguments.length > 1 && (arguments[1] === String ? (n = 'string') : arguments[1] === Number && (n = 'number')), i && (Symbol.toPrimitive ? (t = u(e, Symbol.toPrimitive)) : o(e) && (t = Symbol.prototype.valueOf)), void 0 !== t)) {
        var a = t.call(e, n);
        if (r(a)) return a;
        throw TypeError('unable to convert exotic object to primitive');
    }
    return 'default' === n && (s(e) || o(e)) && (n = 'string'), l(e, 'default' === n ? 'number' : n);
};
