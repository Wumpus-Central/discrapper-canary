var u = n(582128),
    a = n(627784);
n.d(
    e,
    {},
    {
        A: function (t, e) {
            let [n, l] = u.useState(!1),
                [r, c] = u.useState(null);
            return [
                async function () {
                    (l(!0), c(null));
                    try {
                        let e = await t();
                        return (l(!1), c(null), e);
                    } catch (n) {
                        let t = new a.LG(n);
                        return (e?.(t), c(t), l(!1), null);
                    }
                },
                { loading: n, error: r },
            ];
        },
    },
);
