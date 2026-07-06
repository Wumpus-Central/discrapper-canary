n.d(t, { W: () => o });
var l = n(64700),
    i = n(543767),
    r = n(410516),
    a = n(650170),
    s = n(463376);
function o(e) {
    let t,
        { priceOptions: n, trialId: o, metadata: u, discountInvoicePreview: c } = e,
        { isEligibleForDiscount: d, discountOffer: p } = (0, s.i)(),
        m = (0, r.YJ)(p),
        h = !0 === n.loaded,
        C = null != c,
        [E, A] = (0, i.YV)({
            items: null != m ? [{ planId: m, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: C || !d || null == m || !h,
            trialId: o,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: u,
        }),
        f = C ? c : E,
        S = l.useMemo(() => {
            let e = d ? (f ?? null) : null;
            return {
                discountOffer: p,
                applicablePlan: m,
                discountInvoicePreview: e,
                discountAmountOff: null != m ? (0, r.pg)(e, m) : null,
                discountInvoiceError: A,
            };
        }, [p, m, f, A, d]);
    return (
        (t = (0, a.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(S),
                () => {
                    t(r.TI);
                }
            ),
            [S, t],
        ),
        S
    );
}
