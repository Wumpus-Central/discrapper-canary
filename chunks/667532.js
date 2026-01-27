var r = n(557939),
    i = n(250594),
    a = n(503199),
    o = n(496538),
    s = n(762503),
    l = n(732376),
    c = 1 !== [].unshift(0),
    u = function () {
        try {
            Object.defineProperty([], "length", {
                writable: !1,
            }).unshift();
        } catch (e) {
            return e instanceof TypeError;
        }
    };
r(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced: c || !u(),
    },
    {
        unshift: function (e) {
            var t = i(this),
                n = a(t),
                r = arguments.length;
            if (r) {
                l(n + r);
                for (var c = n; c--; ) {
                    var u = c + r;
                    c in t ? (t[u] = t[c]) : s(t, u);
                }
                for (var d = 0; d < r; d++) t[d] = arguments[d];
            }
            return o(t, n + r);
        },
    },
);
