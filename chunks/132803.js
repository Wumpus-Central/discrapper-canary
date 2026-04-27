"use strict";
r.d(t, { $7: () => u, $r: () => l, OX: () => a, __: () => c, bX: () => d, is: () => o, lQ: () => s, n4: () => i });
var n = r(672722),
    s = function () {},
    a = function (e, t, r) {
        return Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 });
    },
    o = {
        arr: Array.isArray,
        obj: function (e) {
            return !!e && "Object" === e.constructor.name;
        },
        fun: function (e) {
            return "function" == typeof e;
        },
        str: function (e) {
            return "string" == typeof e;
        },
        num: function (e) {
            return "number" == typeof e;
        },
        und: function (e) {
            return void 0 === e;
        },
    };
function i(e, t) {
    if (o.arr(e)) {
        if (!o.arr(t) || e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
    }
    return e === t;
}
var u = function (e) {
        return o.str(e) && ("#" == e[0] || /\d/.test(e) || !!(n.colorNames && n.colorNames[e]));
    },
    c = function (e, t, r) {
        o.fun(e.forEach)
            ? e.forEach(t, r)
            : Object.keys(e).forEach(function (n) {
                  return t.call(r, e[n], n);
              });
    },
    l = function (e) {
        return o.und(e) ? [] : o.arr(e) ? e : [e];
    };
function d(e, t) {
    if (e.size) {
        var r = Array.from(e);
        e.clear(), c(r, t);
    }
}
