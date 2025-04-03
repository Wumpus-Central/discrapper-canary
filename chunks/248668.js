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
        race: function (e) {
            var t = this,
                n = i.f(t),
                r = n.reject,
                l = s(function () {
                    var i = a(t.resolve);
                    c(e, function (e) {
                        o(i, t, e).then(n.resolve, r);
                    });
                });
            return l.error && r(l.value), n.promise;
        }
    }
);
