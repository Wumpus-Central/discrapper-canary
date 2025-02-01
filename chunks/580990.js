var i = n(67867),
    r = n(141603),
    a = n(538769),
    s = n(858698),
    o = n(293303),
    l = n(56684),
    u = o('symbol-to-string-registry');
i(
    {
        target: 'Symbol',
        stat: !0,
        forced: !l
    },
    {
        keyFor: function (e) {
            if (!a(e)) throw TypeError(s(e) + ' is not a symbol');
            if (r(u, e)) return u[e];
        }
    }
);
