"use strict";
var i = n(353841),
    r = n(788409)(),
    s = n(741623),
    a = {
        assert: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new s("`O` is not an object");
            if ("string" != typeof t) throw new s("`slot` must be a string");
            if ((r.assert(e), !a.has(e, t))) throw new s("`" + t + "` is not present on `O`");
        },
        get: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new s("`O` is not an object");
            if ("string" != typeof t) throw new s("`slot` must be a string");
            var n = r.get(e);
            return n && n["$" + t];
        },
        has: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new s("`O` is not an object");
            if ("string" != typeof t) throw new s("`slot` must be a string");
            var n = r.get(e);
            return !!n && i(n, "$" + t);
        },
        set: function (e, t, n) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new s("`O` is not an object");
            if ("string" != typeof t) throw new s("`slot` must be a string");
            var i = r.get(e);
            i || ((i = {}), r.set(e, i)), (i["$" + t] = n);
        },
    };
Object.freeze && Object.freeze(a), (e.exports = a);
