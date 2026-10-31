n.d(t, { W: () => u });
var l = n(582128),
    i = n(543767),
    r = n(424776),
    a = n(511484),
    s = n(281044),
    o = n(463376);
function u(e) {
    let t,
        { priceOptions: n, trialId: u, metadata: c, discountInvoicePreview: d } = e,
        { isEligibleForDiscount: m, discountOffer: p } = (0, o.i)(),
        C = (0, a.YJ)(p),
        h = !0 === n.loaded,
        f = null != d,
        [E, S] = (0, i.YV)({
            items: null != C ? [{ planId: C, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: f || !m || null == C || !h,
            trialId: u,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: c,
        }),
        g = f ? d : E,
        I = l.useMemo(() => {
            let e = m ? (g ?? null) : null;
            return {
                discountOffer: p,
                applicablePlan: C,
                discountInvoicePreview: e,
                discountAmountOff: null != C ? (0, a.pg)(e, C) : null,
                discountInvoiceError: S,
            };
        }, [p, C, g, S, m]);
    return (
        (t = (0, s.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(I),
                () => {
                    t(r.T);
                }
            ),
            [I, t],
        ),
        I
    );
}
