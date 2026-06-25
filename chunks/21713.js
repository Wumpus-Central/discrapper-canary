"use strict";
n.d(t, { Gm: () => l, yv: () => c });
var i = n(627968),
    r = n(64700),
    s = n(786300),
    a = n(46332);
let [o, l, u] = (0, s.A)();
function c(e) {
    let { children: t } = e,
        { purchaseErrorBlockRef: n } = (function () {
            let e = r.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, a.t4)((e) => ({
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
        [s, l] = r.useState(null),
        [u, c] = r.useState(null),
        [d, _] = r.useState(null),
        h = r.useMemo(
            () => ({
                purchaseErrorBlockRef: n,
                bodyNode: s,
                setBodyNode: l,
                footerNode: u,
                setFooterNode: c,
                modalOverlayNode: d,
                setModalOverlayNode: _,
            }),
            [n, s, u, d],
        );
    return (0, i.jsx)(o, { value: h, children: t });
}
