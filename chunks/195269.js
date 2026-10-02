t.d(e, { L: () => s });
var n = t(582128),
    o = t(661899);
function s() {
    let r = n.useRef(null),
        { purchaseError: e, setPurchaseError: t } = (0, o.t4)((r) => ({
            purchaseError: r.purchaseError,
            setPurchaseError: r.setPurchaseError,
        }));
    return (
        n.useEffect(() => {
            null != e && null != r.current && r.current.scrollIntoView({ behavior: "smooth" });
        }, [e]),
        { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: r }
    );
}
