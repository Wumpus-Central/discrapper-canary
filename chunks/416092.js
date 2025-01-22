var i = r(67867),
    a = r(96403),
    o = r(548828),
    s = r(463374),
    l = r(730427),
    u = r(146321),
    c = r(414629),
    d = u.Map,
    f = u.has,
    p = u.get,
    h = u.set,
    _ = a([].push);
i(
    {
        target: 'Map',
        stat: !0,
        forced: c
    },
    {
        groupBy: function (e, n) {
            s(e), o(n);
            var r = new d(),
                i = 0;
            return (
                l(e, function (e) {
                    var a = n(e, i++);
                    f(r, a) ? _(p(r, a), e) : h(r, a, [e]);
                }),
                r
            );
        }
    }
);
