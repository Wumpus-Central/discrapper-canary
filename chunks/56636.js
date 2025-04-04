var e = n(220159),
    o = n(779688),
    i = n(326234);
e(
    {
        target: 'Set',
        proto: !0,
        real: !0,
        forced:
            !n(402160)('intersection', function (t) {
                return 2 === t.size && t.has(1) && t.has(2);
            }) ||
            o(function () {
                return '3,2' !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))));
            })
    },
    { intersection: i }
);
