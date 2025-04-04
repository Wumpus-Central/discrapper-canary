var r = n(98405),
    i = n(527160),
    o = n(914331),
    a = n(640883),
    s = n(992032),
    l = n(861567),
    c = 1 !== [].unshift(0),
    u = function () {
        try {
            Object.defineProperty([], 'length', { writable: !1 }).unshift();
        } catch (e) {
            return e instanceof TypeError;
        }
    };
r(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: c || !u()
    },
    {
        unshift: function (e) {
            var t = i(this),
                n = o(t),
                r = arguments.length;
            if (r) {
                l(n + r);
                for (var c = n; c--; ) {
                    var u = c + r;
                    c in t ? (t[u] = t[c]) : s(t, u);
                }
                for (var d = 0; d < r; d++) t[d] = arguments[d];
            }
            return a(t, n + r);
        }
    }
);
