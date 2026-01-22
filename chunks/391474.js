var r = n(834647),
    a = n(909797),
    o = n(486816),
    i = n(407057),
    s = n(740456).onFreeze,
    l = Object.freeze;
r(
    {
        target: "Object",
        stat: !0,
        forced: o(function () {
            l(1);
        }),
        sham: !a,
    },
    {
        freeze: function (e) {
            return l && i(e) ? l(s(e)) : e;
        },
    },
);
