var i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
    a = r(434586),
    o = r(320387),
    s = r(198811),
    l = r(170058),
    u = function (e, n) {
        if (null == e) throw TypeError('Cannot call method on ' + e);
        if ('string' != typeof n || ('number' !== n && 'string' !== n)) throw TypeError('hint must be "string" or "number"');
        var r,
            i,
            s,
            l = 'string' === n ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
        for (s = 0; s < l.length; ++s) if (o((r = e[l[s]])) && a((i = r.call(e)))) return i;
        throw TypeError('No default value');
    },
    c = function (e, n) {
        var r = e[n];
        if (null != r) {
            if (!o(r)) throw TypeError(r + ' returned for property ' + n + ' of object ' + e + ' is not a function');
            return r;
        }
    };
e.exports = function (e) {
    if (a(e)) return e;
    var n,
        r = 'default';
    if ((arguments.length > 1 && (arguments[1] === String ? (r = 'string') : arguments[1] === Number && (r = 'number')), i && (Symbol.toPrimitive ? (n = c(e, Symbol.toPrimitive)) : l(e) && (n = Symbol.prototype.valueOf)), void 0 !== n)) {
        var o = n.call(e, r);
        if (a(o)) return o;
        throw TypeError('unable to convert exotic object to primitive');
    }
    return 'default' === r && (s(e) || l(e)) && (r = 'string'), u(e, 'default' === r ? 'number' : r);
};
