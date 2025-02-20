var r = n(67867),
    i = n(570596),
    o = n(548828),
    a = n(653457),
    s = n(139545),
    l = n(730427);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(871785)
    },
    {
        all: function (e) {
            var t = this,
                n = a.f(t),
                r = n.resolve,
                c = n.reject,
                u = s(function () {
                    var n = o(t.resolve),
                        a = [],
                        s = 0,
                        u = 1;
                    l(e, function (e) {
                        var o = s++,
                            l = !1;
                        u++,
                            i(n, t, e).then(function (e) {
                                !l && ((l = !0), (a[o] = e), --u || r(a));
                            }, c);
                    }),
                        --u || r(a);
                });
            return u.error && c(u.value), n.promise;
        }
    }
);
