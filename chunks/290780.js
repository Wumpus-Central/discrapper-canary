var e = r(98405),
    a = r(527160),
    u = r(914331),
    i = r(640883),
    o = r(992032),
    f = r(861567);
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
            var n = a(this),
                r = u(n),
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
