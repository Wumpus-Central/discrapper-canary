var n = r(98405),
    i = r(527160),
    s = r(914331),
    a = r(640883),
    o = r(992032),
    u = r(861567);
n(
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
            var e = i(this),
                r = s(e),
                n = arguments.length;
            if (n) {
                u(r + n);
                for (var h = r; h--; ) {
                    var c = h + n;
                    h in e ? (e[c] = e[h]) : o(e, c);
                }
                for (var f = 0; f < n; f++) e[f] = arguments[f];
            }
            return a(e, r + n);
        }
    }
);
