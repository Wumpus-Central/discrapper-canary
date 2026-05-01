"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(635358),
    s = n(830382),
    a = n(845584),
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
            loadId: h,
            currency: p,
        } = e,
        E = (0, l.A)("shop_include_unpublished"),
        { previewErrorsById: m, setErrorById: g } = (function () {
            let [e, t] = i.useState({});
            return {
                previewErrorsById: e,
                setErrorById: i.useCallback(
                    (e, n) => {
                        t((t) => ({ ...t, [e]: n }));
                    },
                    [t],
                ),
            };
        })();
    i.useEffect(() => {
        for (let e of n) c.A.isFetching(e) || null != c.A.get(e) || (0, s.EX)(t, e, r.g.VARIANTS_GROUP, E);
    }, [t, n, E]);
    let A = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (!f) {
                for (let e of n)
                    if (!u.A.isFetchingSKU(e)) {
                        let n = A.current ? d : null;
                        (0, s.QX)(t, e, n, { isGift: _, loadId: h, currency: p }).catch((t) => {
                            t instanceof a.Ey &&
                                (t.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === o.tG.INVALID_BILLING_ADDRESS) &&
                                g(e, t);
                        });
                    }
                A.current = !0;
            }
        }, [t, n, d, _, g, f, h, p]),
        { previewErrorsById: m }
    );
}
