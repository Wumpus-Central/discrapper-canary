"use strict";
n.d(t, { p: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(465657),
    a = n(650170),
    o = n(166532),
    l = n(999968),
    u = n(375708);
let c = (e, t) => {
    let { handlePaymentSourceAdd: n } = e;
    return (0, i.jsx)(l.Ay, { handlePaymentSourceAdd: n, ...t });
};
class d {
    isGift;
    constructor({ isGift: e }) {
        this.isGift = e;
    }
    resolveDisabledPurchase(e, t) {
        let { isSelectedPaymentSourceDisabled: n, purchasePreviewError: i, invoicePreview: r } = t;
        return !!e.disablePurchase || !!n || null == r || null != i;
    }
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
    resolveReviewButtonLabel() {
        return this.isGift ? u.intl.string(u.t.ouo4FK) : u.intl.string(u.t.ExD0Ng);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i } = e;
        return {
            variant: "active",
            text: this.resolveReviewButtonLabel(),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: i,
        };
    };
}
function _(e) {
    let { isGift: t } = (0, a.t4)((e) => ({ isGift: e.isGift })),
        n = e.handleStepChange,
        l = r.useCallback(() => {
            if (t) return void n(o.pn.GIFT_CUSTOMIZATION);
        }, [n, t]),
        u = r.useMemo(() => new d({ isGift: t }), [t]);
    return (0, i.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: l,
        renderStepBody: c,
        resolveInternalState: u.resolveInternalState,
        resolveTenantReviewButtonProps: u.resolveTenantReviewButtonProps,
    });
}
