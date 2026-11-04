let i = {};
n.d(
    t,
    {},
    {
        gq: function (e, t, n) {
            let r = `${e}:${t}`;
            i[r] = { ...i[r], ...n };
        },
        rQ: function (e) {
            for (let t in i) {
                let [n, r] = (function (e) {
                    let [t, n] = e.split(":");
                    return [t, n];
                })(t);
                e(n, r, i[t]);
            }
            i = {};
        },
        tM: function (e, t) {
            return i[`${e}:${t}`];
        },
    },
);
