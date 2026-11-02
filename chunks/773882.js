n.d(t, { p: () => d });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(270927),
    s = n(448910),
    o = n(69882),
    u = n(281044),
    c = n(105292);
function d(e) {
    let {
            isGift: t,
            invoicePreview: n,
            isCheckoutDataLoading: d,
        } = (0, u.t4)((e) => ({
            isGift: e.isGift,
            invoicePreview: e.checkoutInvoicePreview,
            isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
        })),
        m = n?.total === 0,
        p = e.handleStepChange,
        C = e.handlePaymentSourceAdd,
        h = i.useCallback(() => {
            if (t) return void p(r.pn.GIFT_CUSTOMIZATION);
        }, [p, t]),
        f = i.useCallback(
            () =>
                d ? (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(a.RL, { handlePaymentSourceAdd: C }),
            [d, C],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    let { isGift: t, isFree: n } = e,
                        l = c.intl.string(c.t.ExD0Ng);
                    return (
                        t ? (l = c.intl.string(c.t.ouo4FK)) : n && (l = c.intl.string(c.t["302tKP"])),
                        { variant: "active", text: l, dataTestId: "purchase" }
                    );
                })({ isGift: t, isFree: m }),
            [t, m],
        ),
        S = i.useMemo(() => ({ tenantProvidedReviewButtonProps: E, onBack: h, backButtonEligible: t }), [h, E, t]);
    return (0, l.jsx)(s.Y, { ...e, renderStepBody: f, tenantCheckoutFooterProps: S });
}
