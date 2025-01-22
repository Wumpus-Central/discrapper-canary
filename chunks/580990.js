var i = r(67867),
    a = r(141603),
    o = r(538769),
    s = r(858698),
    l = r(293303),
    u = r(56684),
    c = l('symbol-to-string-registry');
i(
    {
        target: 'Symbol',
        stat: !0,
        forced: !u
    },
    {
        keyFor: function (e) {
            if (!o(e)) throw TypeError(s(e) + ' is not a symbol');
            if (a(c, e)) return c[e];
        }
    }
);
