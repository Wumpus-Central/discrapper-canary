var r = n(220159),
    o = n(517522),
    a = n(795462),
    i = n(971428),
    s = n(691593),
    c = n(613694).Map;
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
