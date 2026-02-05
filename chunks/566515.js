"use strict";
t.d(r, { A: () => o });
var a = Object.prototype.toString;
function l(e) {
    return "function" == typeof e || "[object Function]" === a.call(e);
}
function o(e, r) {
    var t,
        a,
        o = Array,
        s = Object(e);
    if (null == e) throw TypeError("Array.from requires an array-like object - not null or undefined");
    if (void 0 !== r && !l(r)) throw TypeError("Array.from: when provided, the second argument must be a function");
    for (
        var n = Math.min(
                Math.max(
                    isNaN((t = Number(s.length)))
                        ? 0
                        : 0 !== t && isFinite(t)
                          ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
                          : t,
                    0,
                ),
                0x1fffffffffffff,
            ),
            i = l(o) ? Object(new o(n)) : Array(n),
            u = 0;
        u < n;
    )
        (a = s[u]), r ? (i[u] = r(a, u)) : (i[u] = a), (u += 1);
    return (i.length = n), i;
}
