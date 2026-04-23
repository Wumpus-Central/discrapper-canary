"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(635358),
    s = n(830382),
    a = n(198982),
    o = n(136857),
    l = n(354328),
    u = n(79387),
    c = n(67480);
function d(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: d,
            isGift: _,
            excludeSKUPurchasePreviews: f = !1,
            loadId: p,
            currency: h,
        } = e,
        E = (0, l.A)("shop_include_unpublished"),
        { previewErrorsById: m, setErrorById: g } = (function () {
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
        for (let e of n) c.A.isFetching(e) || null != c.A.get(e) || (0, s.EX)(t, e, i.g.VARIANTS_GROUP, E);
    }, [t, n, E]);
    let A = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!f) {
                for (let e of n)
                    if (!u.A.isFetchingSKU(e)) {
                        let n = A.current ? d : null;
                        (0, s.QX)(t, e, n, { isGift: _, loadId: p, currency: h }).catch((t) => {
                            t instanceof a.Ey &&
                                (t.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === o.tG.INVALID_BILLING_ADDRESS) &&
                                g(e, t);
                        });
                    }
                A.current = !0;
            }
        }, [t, n, d, _, g, f, p, h]),
        { previewErrorsById: m }
    );
}
