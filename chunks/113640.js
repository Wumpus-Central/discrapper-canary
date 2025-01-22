var i = r(67867),
    a = r(718380),
    o = r(821819),
    s = r(982665),
    l = r(938988).onFreeze,
    u = Object.freeze;
i(
    {
        target: 'Object',
        stat: !0,
        forced: o(function () {
            u(1);
        }),
        sham: !a
    },
    {
        freeze: function (e) {
            return u && s(e) ? u(l(e)) : e;
        }
    }
);
