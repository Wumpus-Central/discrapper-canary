var r = n(834647),
    a = n(999843),
    o = n(280173),
    i = n(381568),
    s = TypeError;
r(
    {
        target: "Map",
        proto: !0,
        real: !0,
        forced: !0,
    },
    {
        reduce: function (e) {
            var t = o(this),
                n = arguments.length < 2,
                r = n ? void 0 : arguments[1];
            if (
                (a(e),
                i(t, function (a, o) {
                    n ? ((n = !1), (r = a)) : (r = e(r, a, o, t));
                }),
                n)
            )
                throw new s("Reduce of empty map with no initial value");
            return r;
        },
    },
);
