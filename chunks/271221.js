var e = n(691593),
    o = n(921413),
    i = n(517522),
    u = n(505072),
    s = n(899781),
    c = 'Invalid size',
    f = RangeError,
    a = TypeError,
    p = Math.max,
    l = function (t, r) {
        (this.set = t), (this.size = p(r, 0)), (this.has = e(t.has)), (this.keys = e(t.keys));
    };
(l.prototype = {
    getIterator: function () {
        return s(o(i(this.keys, this.set)));
    },
    includes: function (t) {
        return i(this.has, this.set, t);
    }
}),
    (t.exports = function (t) {
        o(t);
        var r = +t.size;
        if (r != r) throw new a(c);
        var n = u(r);
        if (n < 0) throw new f(c);
        return new l(t, n);
    });
