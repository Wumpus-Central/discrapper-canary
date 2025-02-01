var i = n(67867),
    r = n(294377),
    a = n(141603),
    s = n(342545),
    o = n(293303),
    l = n(56684),
    u = o('string-to-symbol-registry'),
    c = o('symbol-to-string-registry');
i(
    {
        target: 'Symbol',
        stat: !0,
        forced: !l
    },
    {
        for: function (e) {
            var t = s(e);
            if (a(u, t)) return u[t];
            var n = r('Symbol')(t);
            return (u[t] = n), (c[n] = t), n;
        }
    }
);
