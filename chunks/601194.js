n.d(t, { Gm: () => o, yv: () => c });
var l = n(627968),
    i = n(64700),
    r = n(786300),
    a = n(195269);
let [s, o, u] = (0, r.A)();
function c(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (0, a.L)(),
        [r, o] = i.useState(null),
        [u, c] = i.useState(null),
        [d, p] = i.useState(null),
        m = i.useMemo(
            () => ({
                purchaseErrorBlockRef: n,
                bodyNode: r,
                setBodyNode: o,
                footerNode: u,
                setFooterNode: c,
                modalOverlayNode: d,
                setModalOverlayNode: p,
            }),
            [n, r, u, d],
        );
    return (0, l.jsx)(s, { value: m, children: t });
}
