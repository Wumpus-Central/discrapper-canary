var r = n(834647),
    a = n(664886),
    o = n(554987),
    i = n(309270),
    s = n(999843),
    l = n(463843).Map;
r(
    {
        target: "Map",
        stat: !0,
        forced: !0,
    },
    {
        keyBy: function (e, t) {
            var n = new (i(this) ? this : l)();
            s(t);
            var r = s(n.set);
            return (
                o(e, function (e) {
                    a(r, n, t(e), e);
                }),
                n
            );
        },
    },
);
