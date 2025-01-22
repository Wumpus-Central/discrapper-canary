var i = r(67867),
    a = r(294377),
    o = r(141603),
    s = r(342545),
    l = r(293303),
    u = r(56684),
    c = l('string-to-symbol-registry'),
    d = l('symbol-to-string-registry');
i(
    {
        target: 'Symbol',
        stat: !0,
        forced: !u
    },
    {
        for: function (e) {
            var n = s(e);
            if (o(c, n)) return c[n];
            var r = a('Symbol')(n);
            return (c[n] = r), (d[r] = n), r;
        }
    }
);
