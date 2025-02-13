var r = a(466293),
    n = a(467631),
    o = a(402428),
    _ = a(42848),
    i = 1 / 0,
    c = r ? r.prototype : void 0,
    s = c ? c.toString : void 0;
t.exports = function t(e) {
    if ('string' == typeof e) return e;
    if (o(e)) return n(e, t) + '';
    if (_(e)) return s ? s.call(e) : '';
    var a = e + '';
    return '0' == a && 1 / e == -i ? '-0' : a;
};
