var e = n(67867),
    o = n(294377),
    i = n(141603),
    u = n(342545),
    s = n(293303),
    c = n(56684),
    f = s('string-to-symbol-registry'),
    a = s('symbol-to-string-registry');
e(
    {
        target: 'Symbol',
        stat: !0,
        forced: !c
    },
    {
        for: function (t) {
            var r = u(t);
            if (i(f, r)) return f[r];
            var n = o('Symbol')(r);
            return (f[r] = n), (a[n] = r), n;
        }
    }
);
