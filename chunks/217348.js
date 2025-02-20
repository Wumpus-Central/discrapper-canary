n.d(t, {
    Df: () => l,
    S6: () => c,
    Xy: () => s,
    ZT: () => i,
    dE: () => o,
    is: () => a,
    qo: () => u,
    yl: () => d
});
var r = n(239189),
    i = function () {},
    o = function (e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        });
    },
    a = {
        arr: Array.isArray,
        obj: function (e) {
            return !!e && 'Object' === e.constructor.name;
        },
        fun: function (e) {
            return 'function' == typeof e;
        },
        str: function (e) {
            return 'string' == typeof e;
        },
        num: function (e) {
            return 'number' == typeof e;
        },
        und: function (e) {
            return void 0 === e;
        }
    };
function s(e, t) {
    if (a.arr(e)) {
        if (!a.arr(t) || e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var l = function (e) {
        return a.str(e) && ('#' == e[0] || /\d/.test(e) || !!(r.colorNames && r.colorNames[e]));
    },
    c = function (e, t, n) {
        a.fun(e.forEach)
            ? e.forEach(t, n)
            : Object.keys(e).forEach(function (r) {
                  return t.call(n, e[r], r);
              });
    },
    u = function (e) {
        return a.und(e) ? [] : a.arr(e) ? e : [e];
    };
function d(e, t) {
    if (e.size) {
        var n = Array.from(e);
        e.clear(), c(n, t);
    }
}
