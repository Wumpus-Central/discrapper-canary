var r = n(67867),
    i = n(294377),
    o = n(156741),
    a = n(420926),
    s = n(831496),
    l = n(28886),
    c = n(982665),
    u = n(224106),
    d = n(821819),
    f = i('Reflect', 'construct'),
    p = Object.prototype,
    _ = [].push,
    h = d(function () {
        function e() {}
        return !(f(function () {}, [], e) instanceof e);
    }),
    m = !d(function () {
        f(function () {});
    }),
    g = h || m;
r(
    {
        target: 'Reflect',
        stat: !0,
        forced: g,
        sham: g
    },
    {
        construct: function (e, t) {
            s(e), l(t);
            var n = arguments.length < 3 ? e : s(arguments[2]);
            if (m && !h) return f(e, t, n);
            if (e === n) {
                switch (t.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                }
                var r = [null];
                return o(_, r, t), new (o(a, e, r))();
            }
            var i = n.prototype,
                d = u(c(i) ? i : p),
                g = o(e, d, t);
            return c(g) ? g : d;
        }
    }
);
