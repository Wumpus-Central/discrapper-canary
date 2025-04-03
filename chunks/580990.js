var e = n(67867),
    o = n(141603),
    i = n(538769),
    u = n(858698),
    s = n(293303),
    c = n(56684),
    f = s('symbol-to-string-registry');
e(
    {
        target: 'Symbol',
        stat: !0,
        forced: !c
    },
    {
        keyFor: function (t) {
            if (!i(t)) throw TypeError(u(t) + ' is not a symbol');
            if (o(f, t)) return f[t];
        }
    }
);
