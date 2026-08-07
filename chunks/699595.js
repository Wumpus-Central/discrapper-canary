n.d(t, { W: () => o });
var l = n(582128),
    i = n(543767),
    r = n(511484),
    a = n(87725),
    s = n(463376);
function o(e) {
    let t,
        { priceOptions: n, trialId: o, metadata: u, discountInvoicePreview: c } = e,
        { isEligibleForDiscount: d, discountOffer: p } = (0, s.i)(),
        m = (0, r.YJ)(p),
        C = !0 === n.loaded,
        h = null != c,
        [f, E] = (0, i.YV)({
            items: null != m ? [{ planId: m, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: h || !d || null == m || !C,
            trialId: o,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: u,
        }),
        S = h ? c : f,
        A = l.useMemo(() => {
            let e = d ? (S ?? null) : null;
            return {
                discountOffer: p,
                applicablePlan: m,
                discountInvoicePreview: e,
                discountAmountOff: null != m ? (0, r.pg)(e, m) : null,
                discountInvoiceError: E,
            };
        }, [p, m, S, E, d]);
    return (
        (t = (0, a.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(A),
                () => {
                    t(r.TI);
                }
            ),
            [A, t],
        ),
        A
    );
}
