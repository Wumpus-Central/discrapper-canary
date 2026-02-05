t.d(n, { A: () => d });
var i = t(64700),
    l = t(198982);
function d(e, n) {
    let [t, d] = i.useState(!1),
        [r, s] = i.useState(null);
    return [
        async () => {
            d(!0), s(null);
            try {
                let n = await e();
                return d(!1), s(null), n;
            } catch (t) {
                let e = new l.LG(t);
                return n?.(e), s(e), d(!1), null;
            }
        },
        { loading: t, error: r },
    ];
}
