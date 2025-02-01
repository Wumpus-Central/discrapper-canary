var i = n(67867),
    r = n(570596),
    a = n(548828),
    s = n(294377),
    o = n(653457),
    l = n(139545),
    u = n(730427),
    c = n(871785),
    d = 'No one promise resolved';
i(
    {
        target: 'Promise',
        stat: !0,
        forced: c
    },
    {
        any: function (e) {
            var t = this,
                n = s('AggregateError'),
                i = o.f(t),
                c = i.resolve,
                f = i.reject,
                _ = l(function () {
                    var i = a(t.resolve),
                        s = [],
                        o = 0,
                        l = 1,
                        _ = !1;
                    u(e, function (e) {
                        var a = o++,
                            u = !1;
                        l++,
                            r(i, t, e).then(
                                function (e) {
                                    u || _ || ((_ = !0), c(e));
                                },
                                function (e) {
                                    !u && !_ && ((u = !0), (s[a] = e), --l || f(new n(s, d)));
                                }
                            );
                    }),
                        --l || f(new n(s, d));
                });
            return _.error && f(_.value), i.promise;
        }
    }
);
