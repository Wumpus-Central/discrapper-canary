var e = n(220159),
    o = n(764908),
    i = n(691593),
    u = n(717130),
    s = n(795462),
    c = n(613694),
    f = n(253462),
    a = n(779688),
    p = c.Map,
    l = c.has,
    v = c.get,
    y = c.set,
    h = o([].push),
    x =
        f ||
        a(function () {
            return (
                1 !==
                p
                    .groupBy('ab', function (t) {
                        return t;
                    })
                    .get('a').length
            );
        });
e(
    {
        target: 'Map',
        stat: !0,
        forced: f || x
    },
    {
        groupBy: function (t, r) {
            u(t), i(r);
            var n = new p(),
                e = 0;
            return (
                s(t, function (t) {
                    var o = r(t, e++);
                    l(n, o) ? h(v(n, o), t) : y(n, o, [t]);
                }),
                n
            );
        }
    }
);
