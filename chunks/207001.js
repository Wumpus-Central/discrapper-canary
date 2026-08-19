"use strict";
var n = r(969001),
    o = r(870064),
    i = r(741623),
    a = r(267768);
e.exports = function (e, t, r) {
    if (!e || ("object" != typeof e && "function" != typeof e)) throw new i("`obj` must be an object or a function`");
    if ("string" != typeof t && "symbol" != typeof t) throw new i("`property` must be a string or a symbol`");
    if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3])
        throw new i("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4])
        throw new i("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5])
        throw new i("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && "boolean" != typeof arguments[6])
        throw new i("`loose`, if provided, must be a boolean");
    var s = arguments.length > 3 ? arguments[3] : null,
        l = arguments.length > 4 ? arguments[4] : null,
        u = arguments.length > 5 ? arguments[5] : null,
        c = arguments.length > 6 && arguments[6],
        f = !!a && a(e, t);
    if (n)
        n(e, t, {
            configurable: null === u && f ? f.configurable : !u,
            enumerable: null === s && f ? f.enumerable : !s,
            value: r,
            writable: null === l && f ? f.writable : !l,
        });
    else if (!c && (s || l || u))
        throw new o(
            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
        );
    else e[t] = r;
};
