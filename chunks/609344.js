var e = n(220159),
    o = n(185698),
    i = n(839593),
    u = n(684022),
    s = n(866686),
    c = n(861832),
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
