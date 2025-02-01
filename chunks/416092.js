var i = n(67867),
    r = n(96403),
    a = n(548828),
    s = n(463374),
    o = n(730427),
    l = n(146321),
    u = n(414629),
    c = l.Map,
    d = l.has,
    f = l.get,
    _ = l.set,
    p = r([].push);
i(
    {
        target: 'Map',
        stat: !0,
        forced: u
    },
    {
        groupBy: function (e, t) {
            s(e), a(t);
            var n = new c(),
                i = 0;
            return (
                o(e, function (e) {
                    var r = t(e, i++);
                    d(n, r) ? p(f(n, r), e) : _(n, r, [e]);
                }),
                n
            );
        }
    }
);
