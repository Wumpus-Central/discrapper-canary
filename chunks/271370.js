var e = n(220159),
    o = n(178476),
    i = n(185698),
    u = n(565130),
    s = n(866686),
    c = n(861832),
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
