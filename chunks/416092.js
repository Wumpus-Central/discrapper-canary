var e = n(67867),
    o = n(96403),
    i = n(548828),
    u = n(463374),
    s = n(730427),
    c = n(146321),
    f = n(414629),
    a = c.Map,
    p = c.has,
    v = c.get,
    l = c.set,
    y = o([].push);
e(
    {
        target: 'Map',
        stat: !0,
        forced: f
    },
    {
        groupBy: function (t, r) {
            u(t), i(r);
            var n = new a(),
                e = 0;
            return (
                s(t, function (t) {
                    var o = r(t, e++);
                    p(n, o) ? y(v(n, o), t) : l(n, o, [t]);
                }),
                n
            );
        }
    }
);
