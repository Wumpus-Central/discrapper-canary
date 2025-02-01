var i = n(67867),
    r = n(294377),
    a = n(156741),
    s = n(420926),
    o = n(831496),
    l = n(28886),
    u = n(982665),
    c = n(224106),
    d = n(821819),
    f = r('Reflect', 'construct'),
    _ = Object.prototype,
    p = [].push,
    h = d(function () {
        function e() {}
        return !(f(function () {}, [], e) instanceof e);
    }),
    m = !d(function () {
        f(function () {});
    }),
    g = h || m;
i(
    {
        target: 'Reflect',
        stat: !0,
        forced: g,
        sham: g
    },
    {
        construct: function (e, t) {
            o(e), l(t);
            var n = arguments.length < 3 ? e : o(arguments[2]);
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
                var i = [null];
                return a(p, i, t), new (a(s, e, i))();
            }
            var r = n.prototype,
                d = c(u(r) ? r : _),
                g = a(e, d, t);
            return u(g) ? g : d;
        }
    }
);
