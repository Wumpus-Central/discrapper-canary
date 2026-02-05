"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(635358),
    a = n(417597),
    s = n(830382),
    o = n(198982),
    l = n(136857),
    u = n(79387),
    c = n(67480),
    d = n(788868);
function _() {
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
function f(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: f,
            isGift: p,
            excludeSKUPurchasePreviews: h = !1,
            loadId: m,
        } = e,
        g = r.useMemo(() => n.filter((e) => !d.oz.includes(e)), [JSON.stringify(n)]),
        E = (0, a.bG)([c.A], () => g.every((e) => !c.A.isFetching(e) && null != c.A.get(e))),
        { previewErrorsById: A, setErrorById: I } = _(),
        T = (0, a.cf)([c.A], () => {
            let e = {};
            for (let t of g) e[t] = c.A.get(t) ?? void 0;
            return e;
        }, [g]);
    r.useEffect(() => {
        for (let e of g) c.A.isFetching(e) || null != c.A.get(e) || (0, s.EX)(t, e, i.g.VARIANTS_GROUP);
    }, [t, g]);
    let y = (0, a.cf)([u.A], () => {
            let e = {};
            for (let t of g) e[t] = u.A.getPricesForSku(t) ?? void 0;
            return e;
        }, [g]),
        S = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!h) {
                for (let e of g)
                    if (!u.A.isFetchingSKU(e)) {
                        let n = S.current ? f : null;
                        (0, s.QX)(t, e, n, { isGift: p, loadId: m }).catch((t) => {
                            t instanceof o.Ey &&
                                (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                                I(e, t);
                        });
                    }
                S.current = !0;
            }
        }, [t, g, f, p, I, h, m]),
        { hasFetchedSkus: E, skusById: T, skuPricePreviewsById: y, previewErrorsById: A }
    );
}
