"use strict";
var n = r(353841),
    o = r(788409)(),
    i = r(741623),
    a = {
        assert: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            if ((o.assert(e), !a.has(e, t))) throw new i("`" + t + "` is not present on `O`");
        },
        get: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            var r = o.get(e);
            return r && r["$" + t];
        },
        has: function (e, t) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            var r = o.get(e);
            return !!r && n(r, "$" + t);
        },
        set: function (e, t, r) {
            if (!e || ("object" != typeof e && "function" != typeof e)) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            var n = o.get(e);
            n || ((n = {}), o.set(e, n)), (n["$" + t] = r);
        },
    };
Object.freeze && Object.freeze(a), (e.exports = a);
