var r = n(582128),
    o = n(316363);
n.d(
    e,
    {},
    {
        L: function () {
            let t = r.useRef(null),
                { purchaseError: e, setPurchaseError: n } = (0, o.t4)((t) => ({
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
