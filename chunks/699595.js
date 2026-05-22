n.d(t, { J: () => r, c: () => s });
var l = n(64700),
    a = n(155718),
    i = n(671744);
let r = (e) => {
        let t = (0, i.t4)((e) => {
                let { discountInvoicePreview: t } = e;
                return t;
            }),
            n = l.useMemo(() => {
                if (null == e) return null;
                if (null == t) return null;
                let n = t.invoiceItems.find((t) => t.subscriptionPlanId === e);
                if (null == n) return null;
                let l = n.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
                return null != l ? l.amount : null;
            }, [t, e]);
        return { discountInvoicePreview: t, discountAmountOff: n };
    },
    s = (e, t) => {
        let n = (0, i.t4)((e) => {
            let { setDiscountInvoicePreview: t } = e;
            return t;
        });
        l.useEffect(
            () => (
                t ? n(e) : n(null),
                () => {
                    n(null);
                }
            ),
            [e, n, t],
        );
    };
