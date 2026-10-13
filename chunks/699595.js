n.d(t, { W: () => u });
var l = n(582128),
    i = n(543767),
    r = n(424776),
    a = n(511484),
    s = n(504560),
    o = n(463376);
function u(e) {
    let t,
        { priceOptions: n, trialId: u, metadata: c, discountInvoicePreview: d } = e,
        { isEligibleForDiscount: p, discountOffer: m } = (0, o.i)(),
        C = (0, a.YJ)(m),
        h = !0 === n.loaded,
        f = null != d,
        [S, E] = (0, i.YV)({
            items: null != C ? [{ planId: C, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: f || !p || null == C || !h,
            trialId: u,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: c,
        }),
        y = f ? d : S,
        A = l.useMemo(() => {
            let e = p ? (y ?? null) : null;
            return {
                discountOffer: m,
                applicablePlan: C,
                discountInvoicePreview: e,
                discountAmountOff: null != C ? (0, a.pg)(e, C) : null,
                discountInvoiceError: E,
            };
        }, [m, C, y, E, p]);
    return (
        (t = (0, s.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(A),
                () => {
                    t(r.T);
                }
            ),
            [A, t],
        ),
        A
    );
}
