n.d(t, { F0: () => i, IK: () => a, OQ: () => c, Tr: () => s, mx: () => o, sw: () => u });
var l = n(64700),
    r = n(94420);
let u = () =>
        (0, r.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    i = (e, t) => {
        let n = (0, r.t4)((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        l.useEffect(() => {
            n(e, t);
        }, [e, t, n]);
    },
    a = () =>
        (0, r.t4)((e) => {
            let { renewalInvoicePreview: t } = e;
            return t;
        }),
    s = (e, t) => {
        let n = (0, r.t4)((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        l.useEffect(() => {
            n(e, t);
        }, [e, t, n]);
    },
    o = () =>
        (0, r.t4)((e) => {
            let { checkoutInvoiceError: t, renewalInvoiceError: n } = e;
            return t ?? n;
        }),
    c = (e) => {
        let {
                checkoutInvoicePreview: t,
                checkoutInvoiceError: n,
                renewalInvoicePreview: u,
                renewalInvoiceError: i,
            } = e,
            a = (0, r.t4)((e) => {
                let { setCheckoutInvoicePreview: t } = e;
                return t;
            }),
            s = (0, r.t4)((e) => {
                let { setRenewalInvoicePreview: t } = e;
                return t;
            });
        l.useEffect(() => {
            a(t, n), s(u, i);
        }, [a, t, n, s, u, i]);
        let o = l.useMemo(() => n ?? i, [n, i]);
        return {
            checkoutInvoicePreview: t,
            checkoutInvoiceError: n,
            renewalInvoicePreview: u,
            renewalInvoiceError: i,
            primaryInvoiceError: o,
        };
    };
