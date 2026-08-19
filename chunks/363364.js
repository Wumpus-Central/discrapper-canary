"use strict";
var n = r(315646),
    o = r(741623),
    i = function (e, t, r) {
        for (var n, o = e; null != (n = o.next); o = n)
            if (n.key === t) return (o.next = n.next), r || ((n.next = e.next), (e.next = n)), n;
    },
    a = function (e, t) {
        if (e) {
            var r = i(e, t);
            return r && r.value;
        }
    },
    s = function (e, t, r) {
        var n = i(e, t);
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
    },
    l = function (e, t) {
        if (e) return i(e, t, !0);
    };
e.exports = function () {
    var e,
        t = {
            assert: function (e) {
                if (!t.has(e)) throw new o("Side channel does not contain " + n(e));
            },
            delete: function (t) {
                var r = e && e.next,
                    n = l(e, t);
                return n && r && r === n && (e = void 0), !!n;
            },
            get: function (t) {
                return a(e, t);
            },
            has: function (t) {
                var r;
                return !!(r = e) && !!i(r, t);
            },
            set: function (t, r) {
                e || (e = { next: void 0 }), s(e, t, r);
            },
        };
    return t;
};
