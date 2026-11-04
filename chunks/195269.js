var r = n(582128),
    i = n(516106);
n.d(
    e,
    {},
    {
        L: function () {
            let t = r.useRef(null),
                { purchaseError: e, setPurchaseError: n } = (0, i.t4)((t) => ({
                    purchaseError: t.purchaseError,
                    setPurchaseError: t.setPurchaseError,
                }));
            return (
                r.useEffect(() => {
                    null != e && null != t.current && t.current.scrollIntoView({ behavior: "smooth" });
                }, [e]),
                { purchaseError: e, setPurchaseError: n, purchaseErrorBlockRef: t }
            );
        },
    },
);
