n.d(t, { Z: () => r }), n(47120);
var i = n(192379);
function r() {
    let [e, t] = i.useState(null),
        n = i.useRef(null);
    return (
        i.useEffect(() => {
            null != e && null != n.current && n.current.scrollIntoView({ behavior: 'smooth' });
        }, [e]),
        {
            purchaseError: e,
            setPurchaseError: t,
            purchaseErrorBlockRef: n
        }
    );
}
