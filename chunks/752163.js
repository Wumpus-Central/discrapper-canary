n.d(
    t,
    {},
    {
        D: function (e, t, n) {
            let i = e[t];
            return null == i ? (n ? `${e.any} (any)` : "100") : i.toString();
        },
        q: function (e, t) {
            let n = e[t];
            return null == n ? e.any : n;
        },
    },
);
