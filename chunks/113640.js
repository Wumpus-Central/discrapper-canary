var r = n(67867),
    i = n(718380),
    o = n(821819),
    a = n(982665),
    s = n(938988).onFreeze,
    l = Object.freeze;
r(
    {
        target: 'Object',
        stat: !0,
        forced: o(function () {
            l(1);
        }),
        sham: !i
    },
    {
        freeze: function (e) {
            return l && a(e) ? l(s(e)) : e;
        }
    }
);
