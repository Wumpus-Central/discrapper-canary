n.d(t, { A: () => i }), n(896048);
var l = n(64700),
    a = n(198982);
function i(e, t) {
    let [n, i] = l.useState(!1),
        [c, r] = l.useState(null);
    return [
        async () => {
            i(!0), r(null);
            try {
                let t = await e();
                return i(!1), r(null), t;
            } catch (n) {
                let e = new a.LG(n);
                return null == t || t(e), r(e), i(!1), null;
            }
        },
        {
            loading: n,
            error: c,
        },
    ];
}
