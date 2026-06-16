"use strict";
n.d(t, { Gm: () => o, yv: () => u });
var i = n(627968),
    r = n(64700),
    s = n(211159);
let [a, o, l] = (0, n(786300).A)();
function u(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (function () {
            let e = r.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, s.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                r.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: n, purchaseErrorBlockRef: e }
            );
        })(),
        [o, l] = r.useState(null),
        [u, c] = r.useState(null),
        [d, _] = r.useState(null),
        h = r.useMemo(
            () => ({
                purchaseErrorBlockRef: n,
                bodyNode: o,
                setBodyNode: l,
                footerNode: u,
                setFooterNode: c,
                modalOverlayNode: d,
                setModalOverlayNode: _,
            }),
            [n, o, u, d],
        );
    return (0, i.jsx)(a, { value: h, children: t });
}
