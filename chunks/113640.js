var r = n(67867),
    o = n(718380),
    a = n(821819),
    i = n(982665),
    s = n(938988).onFreeze,
    c = Object.freeze;
r(
    {
        target: 'Object',
        stat: !0,
        forced: a(function () {
            c(1);
        }),
        sham: !o
    },
    {
        freeze: function (e) {
            return c && i(e) ? c(s(e)) : e;
        }
    }
);
