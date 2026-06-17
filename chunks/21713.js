"use strict";
n.d(t, { Gm: () => o, yv: () => c });
var l = n(627968),
    i = n(64700),
    r = n(786300),
    s = n(211159);
let [a, o, u] = (0, r.A)();
function c(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (function () {
            let e = i.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, s.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                i.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: n, purchaseErrorBlockRef: e }
            );
        })(),
        [r, o] = i.useState(null),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        h = i.useMemo(
            () => ({
                purchaseErrorBlockRef: n,
                bodyNode: r,
                setBodyNode: o,
                footerNode: u,
                setFooterNode: c,
                modalOverlayNode: d,
                setModalOverlayNode: m,
            }),
            [n, r, u, d],
        );
    return (0, l.jsx)(a, { value: h, children: t });
}
