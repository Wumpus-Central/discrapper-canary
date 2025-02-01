var i = n(67867),
    r = n(570596),
    a = n(730427),
    s = n(735471),
    o = n(548828),
    l = n(146321).Map;
i(
    {
        target: 'Map',
        stat: !0,
        forced: !0
    },
    {
        keyBy: function (e, t) {
            var n = new (s(this) ? this : l)();
            o(t);
            var i = o(n.set);
            return (
                a(e, function (e) {
                    r(i, n, t(e), e);
                }),
                n
            );
        }
    }
);
