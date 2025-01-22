var i = r(67867),
    a = r(570596),
    o = r(548828),
    s = r(653457),
    l = r(139545),
    u = r(730427);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: r(871785)
    },
    {
        race: function (e) {
            var n = this,
                r = s.f(n),
                i = r.reject,
                c = l(function () {
                    var s = o(n.resolve);
                    u(e, function (e) {
                        a(s, n, e).then(r.resolve, i);
                    });
                });
            return c.error && i(c.value), r.promise;
        }
    }
);
