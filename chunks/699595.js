n.d(t, { W: () => u });
var l = n(582128),
    i = n(543767),
    r = n(424776),
    a = n(511484),
    s = n(123816),
    o = n(463376);
function u(e) {
    let t,
        { priceOptions: n, trialId: u, metadata: c, discountInvoicePreview: d } = e,
        { isEligibleForDiscount: p, discountOffer: m } = (0, o.i)(),
        h = (0, a.YJ)(m),
        C = !0 === n.loaded,
        f = null != d,
        [S, E] = (0, i.YV)({
            items: null != h ? [{ planId: h, quantity: 1 }] : [],
            renewal: !1,
            preventFetch: f || !p || null == h || !C,
            trialId: u,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: c,
        }),
        I = f ? d : S,
        g = l.useMemo(() => {
            let e = p ? (I ?? null) : null;
            return {
                discountOffer: m,
                applicablePlan: h,
                discountInvoicePreview: e,
                discountAmountOff: null != h ? (0, a.pg)(e, h) : null,
                discountInvoiceError: E,
            };
        }, [m, h, I, E, p]);
    return (
        (t = (0, s.t4)((e) => {
            let { setPremiumDiscountInfo: t } = e;
            return t;
        })),
        l.useEffect(
            () => (
                t(g),
                () => {
                    t(r.T);
                }
            ),
            [g, t],
        ),
        g
    );
}
