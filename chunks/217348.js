r.d(n, {
    Df: function () {
        return u;
    },
    S6: function () {
        return c;
    },
    Xy: function () {
        return l;
    },
    ZT: function () {
        return a;
    },
    dE: function () {
        return o;
    },
    is: function () {
        return s;
    },
    qo: function () {
        return d;
    },
    yl: function () {
        return f;
    }
});
var i = r(239189),
    a = function () {},
    o = function (e, n, r) {
        return Object.defineProperty(e, n, {
            value: r,
            writable: !0,
            configurable: !0
        });
    },
    s = {
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
function l(e, n) {
    if (s.arr(e)) {
        if (!s.arr(n) || e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r] !== n[r]) return !1;
        return !0;
    }
    return e === n;
}
var u = function (e) {
        return s.str(e) && ('#' == e[0] || /\d/.test(e) || !!(i.colorNames && i.colorNames[e]));
    },
    c = function (e, n, r) {
        s.fun(e.forEach)
            ? e.forEach(n, r)
            : Object.keys(e).forEach(function (i) {
                  return n.call(r, e[i], i);
              });
    },
    d = function (e) {
        return s.und(e) ? [] : s.arr(e) ? e : [e];
    };
function f(e, n) {
    if (e.size) {
        var r = Array.from(e);
        e.clear(), c(r, n);
    }
}
