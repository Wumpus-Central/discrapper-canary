var n = e(582128),
    o = e(3900);
e.d(
    t,
    {},
    {
        L: function () {
            let r = n.useRef(null),
                { purchaseError: t, setPurchaseError: e } = (0, o.t4)((r) => ({
                    purchaseError: r.purchaseError,
                    setPurchaseError: r.setPurchaseError,
                }));
            return (
                n.useEffect(() => {
                    null != t && null != r.current && r.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: e, purchaseErrorBlockRef: r }
            );
        },
    },
);
