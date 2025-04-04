var r = n(220159),
    o = n(517522),
    a = n(691593),
    i = n(602168),
    s = n(134546),
    c = n(795462);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(806414)
    },
    {
        all: function (e) {
            var t = this,
                n = i.f(t),
                r = n.resolve,
                l = n.reject,
                u = s(function () {
                    var n = a(t.resolve),
                        i = [],
                        s = 0,
                        u = 1;
                    c(e, function (e) {
                        var a = s++,
                            c = !1;
                        u++,
                            o(n, t, e).then(function (e) {
                                !c && ((c = !0), (i[a] = e), --u || r(i));
                            }, l);
                    }),
                        --u || r(i);
                });
            return u.error && l(u.value), n.promise;
        }
    }
);
