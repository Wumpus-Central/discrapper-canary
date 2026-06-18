n.d(e, { A: () => l });
var u = n(64700),
    a = n(913122);
function l(t, e) {
    let [n, l] = u.useState(!1),
        [r, c] = u.useState(null);
    return [
        async function () {
            l(!0), c(null);
            try {
                let e = await t();
                return l(!1), c(null), e;
            } catch (n) {
                let t = new a.LG(n);
                return e?.(t), c(t), l(!1), null;
            }
        },
        { loading: n, error: r },
    ];
}
