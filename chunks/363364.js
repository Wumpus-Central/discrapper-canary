"use strict";
var r = n(315646),
    i = n(741623),
    s = function (e, t, n) {
        for (var r, i = e; null != (r = i.next); i = r)
            if (r.key === t) return (i.next = r.next), n || ((r.next = e.next), (e.next = r)), r;
    },
    a = function (e, t) {
        if (e) {
            var n = s(e, t);
            return n && n.value;
        }
    },
    o = function (e, t, n) {
        var r = s(e, t);
        r ? (r.value = n) : (e.next = { key: t, next: e.next, value: n });
    },
    l = function (e, t) {
        if (e) return s(e, t, !0);
    };
e.exports = function () {
    var e,
        t = {
            assert: function (e) {
                if (!t.has(e)) throw new i("Side channel does not contain " + r(e));
            },
            delete: function (t) {
                var n = e && e.next,
                    r = l(e, t);
                return r && n && n === r && (e = void 0), !!r;
            },
            get: function (t) {
                return a(e, t);
            },
            has: function (t) {
                var n;
                return !!(n = e) && !!s(n, t);
            },
            set: function (t, n) {
                e || (e = { next: void 0 }), o(e, t, n);
            },
        };
    return t;
};
