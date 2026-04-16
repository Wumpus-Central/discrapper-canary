"use strict";
n.d(t, { J: () => o, c: () => l });
var r = n(64700),
    i = n(155718),
    s = n(94420);
let a = (e, t) => {
        if (null == e) return null;
        let n = e.invoiceItems.find((e) => e.subscriptionPlanId === t);
        if (null == n) return null;
        let r = n.discounts.find((e) => e.type === i.iS.SUBSCRIPTION_PLAN);
        return null != r ? r.amount : null;
    },
    o = (e) => {
        let t = (0, s.t4)((e) => {
                let { discountInvoicePreview: t } = e;
                return t;
            }),
            n = r.useMemo(() => a(t, e), [t, e]);
        return { discountInvoicePreview: t, discountAmountOff: n };
    },
    l = (e, t) => {
        let n = (0, s.t4)((e) => {
            let { setDiscountInvoicePreview: t } = e;
            return t;
        });
        r.useEffect(
            () => (
                t ? n(e) : n(null),
                () => {
                    n(null);
                }
            ),
            [e, n, t],
        );
    };
