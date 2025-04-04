var r = n(220159),
    o = n(178476),
    a = n(253462),
    i = n(57100),
    s = n(296004).CONSTRUCTOR,
    c = n(933958),
    l = o('Promise'),
    u = a && !s;
r(
    {
        target: 'Promise',
        stat: !0,
        forced: a || s
    },
    {
        resolve: function (e) {
            return c(u && this === l ? i : this, e);
        }
    }
);
