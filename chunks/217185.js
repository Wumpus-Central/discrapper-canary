var r = n(466293),
    i = n(467631),
    o = n(402428),
    a = n(42848),
    s = 1 / 0,
    l = r ? r.prototype : void 0,
    c = l ? l.toString : void 0;
function u(e) {
    if ('string' == typeof e) return e;
    if (o(e)) return i(e, u) + '';
    if (a(e)) return c ? c.call(e) : '';
    var t = e + '';
    return '0' == t && 1 / e == -s ? '-0' : t;
}
e.exports = u;
