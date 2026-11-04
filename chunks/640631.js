var i = n(284009),
    r = n.n(i),
    a = n(811091);
n.d(
    t,
    {},
    {
        D: function (e) {
            r()(
                e.length <= 2 || a.default.compare(e[0].id, e[e.length - 1].id) >= 0,
                "messages must be sorted in descending order.",
            );
        },
    },
);
