var r = n(220159),
    o = n(424353),
    a = n(498996),
    i = n(689933),
    s = n(602168),
    c = n(691593),
    l = n(134546),
    u = o.Promise,
    d = !1;
r(
    {
        target: 'Promise',
        stat: !0,
        forced:
            !u ||
            !u.try ||
            l(function () {
                u.try(function (e) {
                    d = 8 === e;
                }, 8);
            }).error ||
            !d
    },
    {
        try: function (e) {
            var t = arguments.length > 1 ? i(arguments, 1) : [],
                n = s.f(this),
                r = l(function () {
                    return a(c(e), void 0, t);
                });
            return (r.error ? n.reject : n.resolve)(r.value), n.promise;
        }
    }
);
