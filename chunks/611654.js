var r = n(67867),
    i = n(570596),
    o = n(548828),
    a = n(294377),
    s = n(653457),
    l = n(139545),
    c = n(730427),
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
                n = a('AggregateError'),
                r = s.f(t),
                u = r.resolve,
                f = r.reject,
                p = l(function () {
                    var r = o(t.resolve),
                        a = [],
                        s = 0,
                        l = 1,
                        p = !1;
                    c(e, function (e) {
                        var o = s++,
                            c = !1;
                        l++,
                            i(r, t, e).then(
                                function (e) {
                                    c || p || ((p = !0), u(e));
                                },
                                function (e) {
                                    !c && !p && ((c = !0), (a[o] = e), --l || f(new n(a, d)));
                                }
                            );
                    }),
                        --l || f(new n(a, d));
                });
            return p.error && f(p.value), r.promise;
        }
    }
);
