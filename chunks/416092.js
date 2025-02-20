var r = n(67867),
    i = n(96403),
    o = n(548828),
    a = n(463374),
    s = n(730427),
    l = n(146321),
    c = n(414629),
    u = l.Map,
    d = l.has,
    f = l.get,
    p = l.set,
    _ = i([].push);
r(
    {
        target: 'Map',
        stat: !0,
        forced: c
    },
    {
        groupBy: function (e, t) {
            a(e), o(t);
            var n = new u(),
                r = 0;
            return (
                s(e, function (e) {
                    var i = t(e, r++);
                    d(n, i) ? _(f(n, i), e) : p(n, i, [e]);
                }),
                n
            );
        }
    }
);
