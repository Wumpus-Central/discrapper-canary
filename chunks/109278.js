var r = n(220159),
    o = n(178476),
    a = n(498996),
    i = n(462587),
    s = n(280405),
    c = n(921413),
    l = n(829575),
    u = n(425184),
    d = n(779688),
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
