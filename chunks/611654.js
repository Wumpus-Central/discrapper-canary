var r = n(67867),
    o = n(570596),
    a = n(548828),
    i = n(294377),
    s = n(653457),
    c = n(139545),
    l = n(730427),
    u = n(871785),
    d = 'No one promise resolved';
r(
    {
        target: 'Promise',
        stat: !0,
        forced: u
    },
    {
        any: function (e) {
            var t = this,
                n = i('AggregateError'),
                r = s.f(t),
                u = r.resolve,
                p = r.reject,
                h = c(function () {
                    var r = a(t.resolve),
                        i = [],
                        s = 0,
                        c = 1,
                        h = !1;
                    l(e, function (e) {
                        var a = s++,
                            l = !1;
                        c++,
                            o(r, t, e).then(
                                function (e) {
                                    l || h || ((h = !0), u(e));
                                },
                                function (e) {
                                    !l && !h && ((l = !0), (i[a] = e), --c || p(new n(i, d)));
                                }
                            );
                    }),
                        --c || p(new n(i, d));
                });
            return h.error && p(h.value), r.promise;
        }
    }
);
