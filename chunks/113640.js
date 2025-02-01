var i = n(67867),
    r = n(718380),
    a = n(821819),
    s = n(982665),
    o = n(938988).onFreeze,
    l = Object.freeze;
i(
    {
        target: 'Object',
        stat: !0,
        forced: a(function () {
            l(1);
        }),
        sham: !r
    },
    {
        freeze: function (e) {
            return l && s(e) ? l(o(e)) : e;
        }
    }
);
