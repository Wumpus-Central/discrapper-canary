var i = n(67867),
    r = n(570596),
    a = n(548828),
    s = n(653457),
    o = n(139545),
    l = n(730427);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: n(871785)
    },
    {
        all: function (e) {
            var t = this,
                n = s.f(t),
                i = n.resolve,
                u = n.reject,
                c = o(function () {
                    var n = a(t.resolve),
                        s = [],
                        o = 0,
                        c = 1;
                    l(e, function (e) {
                        var a = o++,
                            l = !1;
                        c++,
                            r(n, t, e).then(function (e) {
                                !l && ((l = !0), (s[a] = e), --c || i(s));
                            }, u);
                    }),
                        --c || i(s);
                });
            return c.error && u(c.value), n.promise;
        }
    }
);
