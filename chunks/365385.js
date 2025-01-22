var i = r(67867),
    a = r(570596),
    o = r(548828),
    s = r(653457),
    l = r(139545),
    u = r(730427);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: r(871785)
    },
    {
        all: function (e) {
            var n = this,
                r = s.f(n),
                i = r.resolve,
                c = r.reject,
                d = l(function () {
                    var r = o(n.resolve),
                        s = [],
                        l = 0,
                        d = 1;
                    u(e, function (e) {
                        var o = l++,
                            u = !1;
                        d++,
                            a(r, n, e).then(function (e) {
                                !u && ((u = !0), (s[o] = e), --d || i(s));
                            }, c);
                    }),
                        --d || i(s);
                });
            return d.error && c(d.value), r.promise;
        }
    }
);
