n.d(t, { L: () => i });
var l = n(582128),
    r = n(206441);
function i() {
    let e = l.useRef(null),
        { purchaseError: t, setPurchaseError: n } = (0, r.t4)((e) => ({
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        }));
    return (
        l.useEffect(() => {
            null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
        }, [t]),
        { purchaseError: t, setPurchaseError: n, purchaseErrorBlockRef: e }
    );
}
