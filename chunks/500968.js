"use strict";
var n = e(999843),
    o = e(155084),
    s = e(664886),
    i = e(918078),
    u = e(287752),
    c = "Invalid size",
    a = RangeError,
    f = TypeError,
    p = Math.max,
    l = function (t, r) {
        (this.set = t), (this.size = p(r, 0)), (this.has = n(t.has)), (this.keys = n(t.keys));
    };
(l.prototype = {
    getIterator: function () {
        return u(o(s(this.keys, this.set)));
    },
    includes: function (t) {
        return s(this.has, this.set, t);
    },
}),
    (t.exports = function (t) {
        o(t);
        var r = +t.size;
        if (r != r) throw new f(c);
        var e = i(r);
        if (e < 0) throw new a(c);
        return new l(t, e);
    });
