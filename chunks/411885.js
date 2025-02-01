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
        allSettled: function (e) {
            var t = this,
                n = s.f(t),
                i = n.resolve,
                u = n.reject,
                c = o(function () {
                    var n = a(t.resolve),
                        s = [],
                        o = 0,
                        u = 1;
                    l(e, function (e) {
                        var a = o++,
                            l = !1;
                        u++,
                            r(n, t, e).then(
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (s[a] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --u || i(s));
                                },
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (s[a] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --u || i(s));
                                }
                            );
                    }),
                        --u || i(s);
                });
            return c.error && u(c.value), n.promise;
        }
    }
);
