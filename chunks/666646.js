r.d(t, { F0: () => i, IK: () => u, OQ: () => c, Tr: () => s, mx: () => o, sw: () => l });
var n = r(64700),
    a = r(722847);
let l = () =>
        (0, a.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    i = (e, t) => {
        let r = (0, a.t4)((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        n.useEffect(() => {
            r(e, t);
        }, [e, t, r]);
    },
    u = () =>
        (0, a.t4)((e) => {
            let { renewalInvoicePreview: t } = e;
            return t;
        }),
    s = (e, t) => {
        let r = (0, a.t4)((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        n.useEffect(() => {
            r(e, t);
        }, [e, t, r]);
    },
    o = () =>
        (0, a.t4)((e) => {
            let { checkoutInvoiceError: t, renewalInvoiceError: r } = e;
            return t ?? r;
        }),
    c = (e) => {
        let {
                checkoutInvoicePreview: t,
                checkoutInvoiceError: r,
                renewalInvoicePreview: l,
                renewalInvoiceError: i,
            } = e,
            u = (0, a.t4)((e) => {
                let { setCheckoutInvoicePreview: t } = e;
                return t;
            }),
            s = (0, a.t4)((e) => {
                let { setRenewalInvoicePreview: t } = e;
                return t;
            });
        n.useEffect(() => {
            u(t, r), s(l, i);
        }, [u, t, r, s, l, i]);
        let o = n.useMemo(() => r ?? i, [r, i]);
        return {
            checkoutInvoicePreview: t,
            checkoutInvoiceError: r,
            renewalInvoicePreview: l,
            renewalInvoiceError: i,
            primaryInvoiceError: o,
        };
    };
