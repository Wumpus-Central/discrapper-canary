var e = r(98405),
    i = r(527160),
    o = r(914331),
    u = r(640883),
    c = r(992032),
    a = r(861567);
e(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
            1 !== [].unshift(0) ||
            !(function () {
                try {
                    Object.defineProperty([], "length", { writable: !1 }).unshift();
                } catch (t) {
                    return t instanceof TypeError;
                }
            })(),
    },
    {
        unshift: function (t) {
            var n = i(this),
                r = o(n),
                e = arguments.length;
            if (e) {
                a(r + e);
                for (var s = r; s--; ) {
                    var f = s + e;
                    s in n ? (n[f] = n[s]) : c(n, f);
                }
                for (var l = 0; l < e; l++) n[l] = arguments[l];
            }
            return u(n, r + e);
        },
    },
);
