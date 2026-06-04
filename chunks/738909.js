r.d(t, { Gm: () => i, yv: () => c });
var n = r(627968),
    l = r(64700),
    u = r(571878);
let [a, i, s] = (0, r(786300).A)();
function c(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: r } = (function () {
            let e = l.useRef(null),
                { purchaseError: t, setPurchaseError: r } = (0, u.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                l.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: r, purchaseErrorBlockRef: e }
            );
        })(),
        [i, s] = l.useState(null),
        [c, o] = l.useState(null),
        [d, p] = l.useState(null),
        f = l.useMemo(
            () => ({
                purchaseErrorBlockRef: r,
                bodyNode: i,
                setBodyNode: s,
                footerNode: c,
                setFooterNode: o,
                modalOverlayNode: d,
                setModalOverlayNode: p,
            }),
            [r, i, c, d],
        );
    return (0, n.jsx)(a, { value: f, children: t });
}
