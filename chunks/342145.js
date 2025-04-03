var r = n(67867),
    o = n(570596),
    a = n(730427),
    i = n(735471),
    s = n(548828),
    c = n(146321).Map;
r(
    {
        target: 'Map',
        stat: !0,
        forced: !0
    },
    {
        keyBy: function (e, t) {
            var n = new (i(this) ? this : c)();
            s(t);
            var r = s(n.set);
            return (
                a(e, function (e) {
                    o(r, n, t(e), e);
                }),
                n
            );
        }
    }
);
