n.d(t, { Gm: () => u, yv: () => c });
var r = n(477900),
    l = n(582128),
    i = n(786300),
    s = n(195269);
let [a, u, o] = (0, i.A)();
function c(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (0, s.L)(),
        [i, u] = l.useState(null),
        [o, c] = l.useState(null),
        [d, f] = l.useState(null),
        h = l.useMemo(
            () => ({
                purchaseErrorBlockRef: n,
                bodyNode: i,
                setBodyNode: u,
                footerNode: o,
                setFooterNode: c,
                modalOverlayNode: d,
                setModalOverlayNode: f,
            }),
            [n, i, o, d],
        );
    return (0, r.jsx)(a, { value: h, children: t });
}
