n.d(t, { W: () => o });
var l = n(64700),
    r = n(543767),
    i = n(410516),
    a = n(211159),
    s = n(463376);
let o = (e) => {
    let t,
        { priceOptions: n, trialId: o, metadata: u, discountInvoicePreview: c } = e,
        { isEligibleForDiscount: d, discountOffer: p } = (0, s.i)(),
        m = (0, i.YJ)(p),
        h = !0 === n.loaded,
        A = null != c,
        [E, C] = (0, r.YV)({
            items: null != m ? [{ planId: m, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: A || !d || null == m || !h,
            trialId: o,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: u,
        }),
        y = A ? c : E,
        _ = l.useMemo(() => {
            let e = d ? (y ?? null) : null;
            return {
                discountOffer: p,
                applicablePlan: m,
                discountInvoicePreview: e,
                discountAmountOff: null != m ? (0, i.pg)(e, m) : null,
                discountInvoiceError: C,
            };
        }, [p, m, y, C, d]);
    return (
        (t = (0, a.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(_),
                () => {
                    t(i.TI);
                }
            ),
            [_, t],
        ),
        _
    );
};
