var r = n(220159),
    o = n(642280),
    a = n(779688),
    i = n(829575),
    s = n(54978).onFreeze,
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
