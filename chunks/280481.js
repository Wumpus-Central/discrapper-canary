var r = a(112493).IteratorPrototype,
    n = a(713411),
    _ = a(530575),
    o = a(25124),
    i = a(933121),
    c = function () {
        return this;
    };
t.exports = function (t, e, a, s) {
    var E = e + ' Iterator';
    return (t.prototype = n(r, { next: _(+!s, a) })), o(t, E, !1, !0), (i[E] = c), t;
};
