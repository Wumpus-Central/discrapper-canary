"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(635358),
    s = n(830382),
    a = n(198982),
    o = n(136857),
    l = n(354328),
    u = n(79387),
    c = n(67480);
function d() {
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
}
function _(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: _,
            isGift: f,
            excludeSKUPurchasePreviews: p = !1,
            loadId: h,
            currency: m,
        } = e,
        E = (0, l.A)("shop_include_unpublished"),
        { previewErrorsById: g, setErrorById: A } = d();
    r.useEffect(() => {
        for (let e of n) c.A.isFetching(e) || null != c.A.get(e) || (0, s.EX)(t, e, i.g.VARIANTS_GROUP, E);
    }, [t, n, E]);
    let I = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!p) {
                for (let e of n)
                    if (!u.A.isFetchingSKU(e)) {
                        let n = I.current ? _ : null;
                        (0, s.QX)(t, e, n, { isGift: f, loadId: h, currency: m }).catch((t) => {
                            t instanceof a.Ey &&
                                (t.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === o.tG.INVALID_BILLING_ADDRESS) &&
                                A(e, t);
                        });
                    }
                I.current = !0;
            }
        }, [t, n, _, f, A, p, h, m]),
        { previewErrorsById: g }
    );
}
