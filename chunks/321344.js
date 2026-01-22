var r = n(834647),
    a = n(308227),
    o = n(421236),
    i = n(596479),
    s = n(794938),
    l = n(999843),
    c = n(564904),
    u = a.Promise,
    d = !1;
r(
    {
        target: "Promise",
        stat: !0,
        forced:
            !u ||
            !u.try ||
            c(function () {
                u.try(function (e) {
                    d = 8 === e;
                }, 8);
            }).error ||
            !d,
    },
    {
        try: function (e) {
            var t = arguments.length > 1 ? i(arguments, 1) : [],
                n = s.f(this),
                r = c(function () {
                    return o(l(e), void 0, t);
                });
            return (r.error ? n.reject : n.resolve)(r.value), n.promise;
        },
    },
);
