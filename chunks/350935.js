var r = n(220159),
    o = n(517522),
    a = n(691593),
    i = n(178476),
    s = n(602168),
    c = n(134546),
    l = n(795462),
    u = n(806414),
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
