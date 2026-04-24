var n = t(557939),
    o = t(250594),
    a = t(503199),
    i = t(496538),
    s = t(762503),
    u = t(732376);
n(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
            1 !== [].unshift(0) ||
            !(function () {
                try {
                    Object.defineProperty([], "length", { writable: !1 }).unshift();
                } catch (r) {
                    return r instanceof TypeError;
                }
            })(),
    },
    {
        unshift: function (r) {
            var e = o(this),
                t = a(e),
                n = arguments.length;
            if (n) {
                u(t + n);
                for (var l = t; l--; ) {
                    var d = l + n;
                    l in e ? (e[d] = e[l]) : s(e, d);
                }
                for (var c = 0; c < n; c++) e[c] = arguments[c];
            }
            return i(e, t + n);
        },
    },
);
