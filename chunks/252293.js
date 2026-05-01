n.d(t, { A: () => d });
var o = n(64700),
    r = n(635358),
    i = n(830382),
    a = n(845584),
    l = n(136857),
    s = n(354328),
    u = n(79387),
    _ = n(67480);
function d(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: d,
            isGift: C,
            excludeSKUPurchasePreviews: E = !1,
            loadId: p,
            currency: h,
        } = e,
        c = (0, s.A)("shop_include_unpublished"),
        { previewErrorsById: A, setErrorById: I } = (function () {
            let [e, t] = o.useState({});
            return {
                previewErrorsById: e,
                setErrorById: o.useCallback(
                    (e, n) => {
                        t((t) => ({ ...t, [e]: n }));
                    },
                    [t],
                ),
            };
        })();
    o.useEffect(() => {
        for (let e of n) _.A.isFetching(e) || null != _.A.get(e) || (0, i.EX)(t, e, r.g.VARIANTS_GROUP, c);
    }, [t, n, c]);
    let y = o.useRef(!1);
    return (
        o.useEffect(() => {
            if (!E) {
                for (let e of n)
                    if (!u.A.isFetchingSKU(e)) {
                        let n = y.current ? d : null;
                        (0, i.QX)(t, e, n, { isGift: C, loadId: p, currency: h }).catch((t) => {
                            t instanceof a.Ey &&
                                (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                                I(e, t);
                        });
                    }
                y.current = !0;
            }
        }, [t, n, d, C, I, E, p, h]),
        { previewErrorsById: A }
    );
}
