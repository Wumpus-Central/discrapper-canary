var i = r(67867),
    a = r(570596),
    o = r(548828),
    s = r(294377),
    l = r(653457),
    u = r(139545),
    c = r(730427),
    d = r(871785),
    f = 'No one promise resolved';
i(
    {
        target: 'Promise',
        stat: !0,
        forced: d
    },
    {
        any: function (e) {
            var n = this,
                r = s('AggregateError'),
                i = l.f(n),
                d = i.resolve,
                p = i.reject,
                h = u(function () {
                    var i = o(n.resolve),
                        s = [],
                        l = 0,
                        u = 1,
                        h = !1;
                    c(e, function (e) {
                        var o = l++,
                            c = !1;
                        u++,
                            a(i, n, e).then(
                                function (e) {
                                    !c && !h && ((h = !0), d(e));
                                },
                                function (e) {
                                    !c && !h && ((c = !0), (s[o] = e), --u || p(new r(s, f)));
                                }
                            );
                    }),
                        --u || p(new r(s, f));
                });
            return h.error && p(h.value), i.promise;
        }
    }
);
