n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = t?.replace(/-/g, "_")?.toUpperCase();
            if (null != n && n in e) return e[n];
        },
    },
);
