u.d(e, { A: () => l });
var n = u(64700),
    a = u(845584);
function l(t, e) {
    let [u, l] = n.useState(!1),
        [r, s] = n.useState(null);
    return [
        async () => {
            l(!0), s(null);
            try {
                let e = await t();
                return l(!1), s(null), e;
            } catch (u) {
                let t = new a.LG(u);
                return e?.(t), s(t), l(!1), null;
            }
        },
        { loading: u, error: r },
    ];
}
