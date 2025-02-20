var r = n(67867),
    i = n(570596),
    o = n(548828),
    a = n(653457),
    s = n(139545),
    l = n(730427);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(871785)
    },
    {
        race: function (e) {
            var t = this,
                n = a.f(t),
                r = n.reject,
                c = s(function () {
                    var a = o(t.resolve);
                    l(e, function (e) {
                        i(a, t, e).then(n.resolve, r);
                    });
                });
            return c.error && r(c.value), n.promise;
        }
    }
);
