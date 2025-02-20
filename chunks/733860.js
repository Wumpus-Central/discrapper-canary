var e = r(147018),
    u = r(339718),
    a = r(49693),
    i = r(610148),
    o = r(708517),
    f = r(886960);
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
                } catch (t) {
                    return t instanceof TypeError;
                }
            })()
    },
    {
        unshift: function (t) {
            var n = u(this),
                r = a(n),
                e = arguments.length;
            if (e) {
                f(r + e);
                for (var c = r; c--; ) {
                    var s = c + e;
                    c in n ? (n[s] = n[c]) : o(n, s);
                }
                for (var l = 0; l < e; l++) n[l] = arguments[l];
            }
            return i(n, r + e);
        }
    }
);
