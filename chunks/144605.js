var i = r(67867),
    a = r(294377),
    o = r(156741),
    s = r(420926),
    l = r(831496),
    u = r(28886),
    c = r(982665),
    d = r(224106),
    f = r(821819),
    p = a('Reflect', 'construct'),
    h = Object.prototype,
    _ = [].push,
    m = f(function () {
        function e() {}
        return !(p(function () {}, [], e) instanceof e);
    }),
    g = !f(function () {
        p(function () {});
    }),
    E = m || g;
i(
    {
        target: 'Reflect',
        stat: !0,
        forced: E,
        sham: E
    },
    {
        construct: function (e, n) {
            l(e), u(n);
            var r = arguments.length < 3 ? e : l(arguments[2]);
            if (g && !m) return p(e, n, r);
            if (e === r) {
                switch (n.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(n[0]);
                    case 2:
                        return new e(n[0], n[1]);
                    case 3:
                        return new e(n[0], n[1], n[2]);
                    case 4:
                        return new e(n[0], n[1], n[2], n[3]);
                }
                var i = [null];
                return o(_, i, n), new (o(s, e, i))();
            }
            var a = r.prototype,
                f = d(c(a) ? a : h),
                E = o(e, f, n);
            return c(E) ? E : f;
        }
    }
);
