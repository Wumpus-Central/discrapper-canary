n.d(t, { p: () => p });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(994143),
    s = n(465657),
    o = n(666646),
    u = n(87725),
    c = n(375708);
let d = (e) => {
    let { handlePaymentSourceAdd: t } = e;
    return (0, l.jsx)(a.RL, { handlePaymentSourceAdd: t });
};
class m {
    isGift;
    isFree;
    constructor({ isGift: e, isFree: t }) {
        (this.isGift = e), (this.isFree = t);
    }
    resolveDisabledPurchase(e, t) {
        let { isSelectedPaymentSourceDisabled: n, purchasePreviewError: l, invoicePreview: i } = t;
        return !!e.disablePurchase || !!n || null == i || null != l;
    }
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
    resolveReviewButtonLabel() {
        return this.isGift
            ? c.intl.string(c.t.ouo4FK)
            : this.isFree
              ? c.intl.string(c.t["302tKP"])
              : c.intl.string(c.t.ExD0Ng);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: this.resolveReviewButtonLabel(),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    };
}
function p(e) {
    let { isGift: t } = (0, u.t4)((e) => ({ isGift: e.isGift })),
        n = (0, o.sw)(),
        a = n?.total === 0,
        c = e.handleStepChange,
        p = i.useCallback(() => {
            if (t) return void c(r.pn.GIFT_CUSTOMIZATION);
        }, [c, t]),
        C = i.useMemo(() => new m({ isGift: t, isFree: a }), [t, a]);
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: p,
        renderStepBody: d,
        resolveInternalState: C.resolveInternalState,
        resolveTenantReviewButtonProps: C.resolveTenantReviewButtonProps,
    });
}
