t.d(n, { L: () => i });
var r = t(582128),
    l = t(721836);
function i() {
    let e = r.useRef(null),
        { purchaseError: n, setPurchaseError: t } = (0, l.t4)((e) => ({
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        }));
    return (
        r.useEffect(() => {
            null != n && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
        }, [n]),
        { purchaseError: n, setPurchaseError: t, purchaseErrorBlockRef: e }
    );
}
