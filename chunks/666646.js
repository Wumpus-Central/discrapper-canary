r.d(t, { F0: () => i, IK: () => s, OQ: () => o, Tr: () => a, mx: () => c, sw: () => l });
var n = r(64700),
    u = r(211159);
let l = () =>
        (0, u.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    i = (e, t) => {
        let r = (0, u.t4)((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        n.useEffect(() => {
            r(e, t);
        }, [e, t, r]);
    },
    s = () =>
        (0, u.t4)((e) => {
            let { renewalInvoicePreview: t } = e;
            return t;
        }),
    a = (e, t) => {
        let r = (0, u.t4)((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        n.useEffect(() => {
            r(e, t);
        }, [e, t, r]);
    },
    c = () =>
        (0, u.t4)((e) => {
            let { checkoutInvoiceError: t, renewalInvoiceError: r } = e;
            return t ?? r;
        }),
    o = (e) => {
        let {
                checkoutInvoicePreview: t,
                checkoutInvoiceError: r,
                renewalInvoicePreview: l,
                renewalInvoiceError: i,
            } = e,
            s = (0, u.t4)((e) => {
                let { setCheckoutInvoicePreview: t } = e;
                return t;
            }),
            a = (0, u.t4)((e) => {
                let { setRenewalInvoicePreview: t } = e;
                return t;
            });
        n.useEffect(() => {
            s(t, r), a(l, i);
        }, [s, t, r, a, l, i]);
        let c = n.useMemo(() => r ?? i, [r, i]);
        return {
            checkoutInvoicePreview: t,
            checkoutInvoiceError: r,
            renewalInvoicePreview: l,
            renewalInvoiceError: i,
            primaryInvoiceError: c,
        };
    };
