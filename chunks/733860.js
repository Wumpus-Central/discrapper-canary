var e = r(147018),
    i = r(339718),
    o = r(49693),
    u = r(610148),
    a = r(708517),
    c = r(886960);
e(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            1 !== [].unshift(0) ||
            !(function () {
                try {
                    Object.defineProperty([], 'length', { writable: !1 }).unshift();
                } catch (n) {
                    return n instanceof TypeError;
                }
            })()
    },
    {
        unshift: function (n) {
            var t = i(this),
                r = o(t),
                e = arguments.length;
            if (e) {
                c(r + e);
                for (var s = r; s--; ) {
                    var f = s + e;
                    s in t ? (t[f] = t[s]) : a(t, f);
                }
                for (var l = 0; l < e; l++) t[l] = arguments[l];
            }
            return u(t, r + e);
        }
    }
);
