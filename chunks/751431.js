var r = n(67867),
    i = n(294377),
    o = n(141603),
    a = n(342545),
    s = n(293303),
    l = n(56684),
    c = s('string-to-symbol-registry'),
    u = s('symbol-to-string-registry');
r(
    {
        target: 'Symbol',
        stat: !0,
        forced: !l
    },
    {
        for: function (e) {
            var t = a(e);
            if (o(c, t)) return c[t];
            var n = i('Symbol')(t);
            return (c[t] = n), (u[n] = t), n;
        }
    }
);
