r.d(n, { L: () => i });
var t = r(582128),
    l = r(263532);
function i() {
    let e = t.useRef(null),
        { purchaseError: n, setPurchaseError: r } = (0, l.t4)((e) => ({
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        }));
    return (
        t.useEffect(() => {
            null != n && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
        }, [n]),
        { purchaseError: n, setPurchaseError: r, purchaseErrorBlockRef: e }
    );
}
