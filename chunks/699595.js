n.d(t, { W: () => o });
var l = n(582128),
    i = n(543767),
    r = n(511484),
    a = n(721836),
    s = n(463376);
function o(e) {
    let t,
        { priceOptions: n, trialId: o, metadata: u, discountInvoicePreview: c } = e,
        { isEligibleForDiscount: d, discountOffer: m } = (0, s.i)(),
        p = (0, r.YJ)(m),
        h = !0 === n.loaded,
        C = null != c,
        [f, E] = (0, i.YV)({
            items: null != p ? [{ planId: p, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: C || !d || null == p || !h,
            trialId: o,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: u,
        }),
        S = C ? c : f,
        y = l.useMemo(() => {
            let e = d ? (S ?? null) : null;
            return {
                discountOffer: m,
                applicablePlan: p,
                discountInvoicePreview: e,
                discountAmountOff: null != p ? (0, r.pg)(e, p) : null,
                discountInvoiceError: E,
            };
        }, [m, p, S, E, d]);
    return (
        (t = (0, a.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(y),
                () => {
                    t(r.TI);
                }
            ),
            [y, t],
        ),
        y
    );
}
