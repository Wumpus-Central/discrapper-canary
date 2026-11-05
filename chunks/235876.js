var e = i(196765),
    a = i(121894);
let r = (0, e.v)(() => ({}));
i.d(
    n,
    {},
    {
        Q: function (t, n, i) {
            let e = r.getState();
            (0, a.r)(() => {
                r.setState({ ...e, [t]: { ...e[t], [n]: i } });
            });
        },
        i: r,
    },
);
