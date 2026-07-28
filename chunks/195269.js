n.d(t, { L: () => i });
var r = n(582128),
    l = n(316915);
function i() {
    let e = r.useRef(null),
        { purchaseError: t, setPurchaseError: n } = (0, l.t4)((e) => ({
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        }));
    return (
        r.useEffect(() => {
            null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
        }, [t]),
        { purchaseError: t, setPurchaseError: n, purchaseErrorBlockRef: e }
    );
}
