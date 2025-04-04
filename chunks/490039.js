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
