var r = n(67867),
    o = n(294377),
    a = n(156741),
    i = n(420926),
    s = n(831496),
    c = n(28886),
    l = n(982665),
    u = n(224106),
    d = n(821819),
    p = o('Reflect', 'construct'),
    h = Object.prototype,
    f = [].push,
    m = d(function () {
        function e() {}
        return !(p(function () {}, [], e) instanceof e);
    }),
    y = !d(function () {
        p(function () {});
    }),
    v = m || y;
r(
    {
        target: 'Reflect',
        stat: !0,
        forced: v,
        sham: v
    },
    {
        construct: function (e, t) {
            s(e), c(t);
            var n = arguments.length < 3 ? e : s(arguments[2]);
            if (y && !m) return p(e, t, n);
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
                return a(f, r, t), new (a(i, e, r))();
            }
            var o = n.prototype,
                d = u(l(o) ? o : h),
                v = a(e, d, t);
            return l(v) ? v : d;
        }
    }
);
