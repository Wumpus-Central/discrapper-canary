n.d(t, { Gm: () => u, yv: () => o });
var r = n(477900),
    l = n(582128),
    i = n(786300),
    s = n(195269);
let [a, u, c] = (0, i.A)();
function o(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (0, s.L)(),
        [i, u] = l.useState(null),
        [c, o] = l.useState(null),
        [d, f] = l.useState(null),
        h = l.useMemo(
            () => ({
                purchaseErrorBlockRef: n,
                bodyNode: i,
                setBodyNode: u,
                footerNode: c,
                setFooterNode: o,
                modalOverlayNode: d,
                setModalOverlayNode: f,
            }),
            [n, i, c, d],
        );
    return (0, r.jsx)(a, { value: h, children: t });
}
