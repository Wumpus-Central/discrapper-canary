var r = n(67867),
    o = n(570596),
    a = n(548828),
    i = n(653457),
    s = n(139545),
    c = n(730427);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(871785)
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
