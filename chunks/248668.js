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
        race: function (e) {
            var t = this,
                n = s.f(t),
                i = n.reject,
                u = o(function () {
                    var s = a(t.resolve);
                    l(e, function (e) {
                        r(s, t, e).then(n.resolve, i);
                    });
                });
            return u.error && i(u.value), n.promise;
        }
    }
);
