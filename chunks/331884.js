var r = n(284009),
    i = n.n(r),
    l = n(855986),
    s = n(287809);
n.d(
    t,
    {},
    {
        i: function () {
            let e = (0, l.bG)([s.default], () => s.default.getCurrentUser());
            return (i()(null != e, "user has to be signed in before accessing shop"), e);
        },
        o: function () {
            return (0, l.bG)([s.default], () => s.default.getCurrentUser());
        },
    },
);
