"use strict";
var n = r(353841),
    i = r(788409)(),
    o = r(741623),
    a = {
        assert: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new o("`O` is not an object");
            if ("string" != typeof t) throw new o("`slot` must be a string");
            if ((i.assert(e), !a.has(e, t))) throw new o("`" + t + "` is not present on `O`");
        },
        get: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new o("`O` is not an object");
            if ("string" != typeof t) throw new o("`slot` must be a string");
            var r = i.get(e);
            return r && r["$" + t];
        },
        has: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new o("`O` is not an object");
            if ("string" != typeof t) throw new o("`slot` must be a string");
            var r = i.get(e);
            return !!r && n(r, "$" + t);
        },
        set: function (e, t, r) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new o("`O` is not an object");
            if ("string" != typeof t) throw new o("`slot` must be a string");
            var n = i.get(e);
            n || ((n = {}), i.set(e, n)), (n["$" + t] = r);
        },
    };
Object.freeze && Object.freeze(a), (e.exports = a);
