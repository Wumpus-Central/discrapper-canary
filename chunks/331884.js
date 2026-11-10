var r = n(284009),
    i = n.n(r),
    s = n(855986),
    a = n(287809);
n.d(
    t,
    {},
    {
        i: function () {
            let e = (0, s.bG)([a.default], () => a.default.getCurrentUser());
            return (i()(null != e, "user has to be signed in before accessing shop"), e);
        },
        o: function () {
            return (0, s.bG)([a.default], () => a.default.getCurrentUser());
        },
    },
);
