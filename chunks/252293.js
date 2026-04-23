n.d(t, { A: () => c });
var r = n(64700),
    a = n(635358),
    i = n(830382),
    o = n(845584),
    l = n(136857),
    s = n(354328),
    d = n(79387),
    u = n(67480);
function c(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: c,
            isGift: _,
            excludeSKUPurchasePreviews: p = !1,
            loadId: C,
            currency: h,
        } = e,
        E = (0, s.A)("shop_include_unpublished"),
        { previewErrorsById: m, setErrorById: A } = (function () {
            let [e, t] = r.useState({});
            return {
                previewErrorsById: e,
                setErrorById: r.useCallback(
                    (e, n) => {
                        t((t) => ({ ...t, [e]: n }));
                    },
                    [t],
                ),
            };
        })();
    r.useEffect(() => {
        for (let e of n) u.A.isFetching(e) || null != u.A.get(e) || (0, i.EX)(t, e, a.g.VARIANTS_GROUP, E);
    }, [t, n, E]);
    let I = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!p) {
                for (let e of n)
                    if (!d.A.isFetchingSKU(e)) {
                        let n = I.current ? c : null;
                        (0, i.QX)(t, e, n, { isGift: _, loadId: C, currency: h }).catch((t) => {
                            t instanceof o.Ey &&
                                (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                                A(e, t);
                        });
                    }
                I.current = !0;
            }
        }, [t, n, c, _, A, p, C, h]),
        { previewErrorsById: m }
    );
}
