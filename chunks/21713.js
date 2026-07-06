r.d(t, { Gm: () => l, yv: () => o });
var n = r(627968),
    u = r(64700),
    i = r(786300),
    c = r(650170);
let [s, l, a] = (0, i.A)();
function o(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: r } = (function () {
            let e = u.useRef(null),
                { purchaseError: t, setPurchaseError: r } = (0, c.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                u.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: r, purchaseErrorBlockRef: e }
            );
        })(),
        [i, l] = u.useState(null),
        [a, o] = u.useState(null),
        [d, f] = u.useState(null),
        p = u.useMemo(
            () => ({
                purchaseErrorBlockRef: r,
                bodyNode: i,
                setBodyNode: l,
                footerNode: a,
                setFooterNode: o,
                modalOverlayNode: d,
                setModalOverlayNode: f,
            }),
            [r, i, a, d],
        );
    return (0, n.jsx)(s, { value: p, children: t });
}
