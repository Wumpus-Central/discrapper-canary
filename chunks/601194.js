n.d(t, { Gm: () => u, yv: () => o });
var l = n(477900),
    r = n(582128),
    i = n(786300),
    s = n(195269);
let [a, u, c] = (0, i.A)();
function o(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (0, s.L)(),
        [i, u] = r.useState(null),
        [c, o] = r.useState(null),
        [d, f] = r.useState(null),
        h = r.useMemo(
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
    return (0, l.jsx)(a, { value: h, children: t });
}
