"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(635358),
    s = n(830382),
    a = n(198982),
    o = n(136857),
    l = n(354328),
    u = n(79387),
    d = n(67480);
function c(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: c,
            isGift: _,
            excludeSKUPurchasePreviews: f = !1,
            loadId: E,
            currency: h,
        } = e,
        p = (0, l.A)("shop_include_unpublished"),
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
        for (let e of n) d.A.isFetching(e) || null != d.A.get(e) || (0, s.EX)(t, e, i.g.VARIANTS_GROUP, p);
    }, [t, n, p]);
    let A = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!f) {
                for (let e of n)
                    if (!u.A.isFetchingSKU(e)) {
                        let n = A.current ? c : null;
                        (0, s.QX)(t, e, n, { isGift: _, loadId: E, currency: h }).catch((t) => {
                            t instanceof a.Ey &&
                                (t.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === o.tG.INVALID_BILLING_ADDRESS) &&
                                g(e, t);
                        });
                    }
                A.current = !0;
            }
        }, [t, n, c, _, g, f, E, h]),
        { previewErrorsById: m }
    );
}
