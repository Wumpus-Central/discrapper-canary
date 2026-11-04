n.d(
    t,
    {},
    {
        L: function (e, t) {
            return `${e}:${t}`;
        },
        u: function (e) {
            let t = e.split(":");
            if (2 !== t.length) return null;
            let [n, i] = t;
            return { applicationId: n, skuId: i };
        },
    },
);
