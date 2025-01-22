var i = r(67867),
    a = r(570596),
    o = r(730427),
    s = r(735471),
    l = r(548828),
    u = r(146321).Map;
i(
    {
        target: 'Map',
        stat: !0,
        forced: !0
    },
    {
        keyBy: function (e, n) {
            var r = new (s(this) ? this : u)();
            l(n);
            var i = l(r.set);
            return (
                o(e, function (e) {
                    a(i, r, n(e), e);
                }),
                r
            );
        }
    }
);
