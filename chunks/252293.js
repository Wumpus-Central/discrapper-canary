"use strict";
n.d(t, { A: () => p });
var r = n(64700),
    i = n(635358),
    s = n(417597),
    a = n(830382),
    o = n(198982),
    l = n(136857),
    u = n(354328),
    c = n(79387),
    d = n(67480),
    _ = n(788868);
function f() {
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
function p(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: p,
            isGift: h,
            excludeSKUPurchasePreviews: m = !1,
            loadId: E,
        } = e,
        g = r.useMemo(() => n.filter((e) => !_.oz.includes(e)), [JSON.stringify(n)]),
        A = (0, u.A)("shop_include_unpublished"),
        I = (0, s.bG)([d.A], () => g.every((e) => !d.A.isFetching(e) && null != d.A.get(e))),
        { previewErrorsById: T, setErrorById: S } = f(),
        y = (0, s.cf)([d.A], () => {
            let e = {};
            for (let t of g) e[t] = d.A.get(t) ?? void 0;
            return e;
        }, [g]);
    r.useEffect(() => {
        for (let e of g) d.A.isFetching(e) || null != d.A.get(e) || (0, a.EX)(t, e, i.g.VARIANTS_GROUP, A);
    }, [t, g, A]);
    let v = (0, s.cf)([c.A], () => {
            let e = {};
            for (let t of g) e[t] = c.A.getPricesForSku(t) ?? void 0;
            return e;
        }, [g]),
        N = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!m) {
                for (let e of g)
                    if (!c.A.isFetchingSKU(e)) {
                        let n = N.current ? p : null;
                        (0, a.QX)(t, e, n, { isGift: h, loadId: E }).catch((t) => {
                            t instanceof o.Ey &&
                                (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                                S(e, t);
                        });
                    }
                N.current = !0;
            }
        }, [t, g, p, h, S, m, E]),
        { hasFetchedSkus: I, skusById: y, skuPricePreviewsById: v, previewErrorsById: T }
    );
}
