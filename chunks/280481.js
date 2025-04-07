var n = e(112493).IteratorPrototype,
    o = e(713411),
    i = e(530575),
    a = e(25124),
    s = e(933121),
    u = function () {
        return this;
    };
t.exports = function (t, r, e, c) {
    var f = r + ' Iterator';
    return (t.prototype = o(n, { next: i(+!c, e) })), a(t, f, !1, !0), (s[f] = u), t;
};
