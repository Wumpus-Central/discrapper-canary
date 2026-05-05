"use strict";
n.d(t, { F0: () => a, IK: () => o, OQ: () => c, Tr: () => l, mx: () => u, sw: () => s });
var i = n(64700),
    r = n(94420);
let s = () =>
        (0, r.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
    a = (e, t) => {
        let n = (0, r.t4)((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        });
        i.useEffect(() => {
            n(e, t);
        }, [e, t, n]);
    },
    o = () =>
        (0, r.t4)((e) => {
            let { renewalInvoicePreview: t } = e;
            return t;
        }),
    l = (e, t) => {
        let n = (0, r.t4)((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
        i.useEffect(() => {
            n(e, t);
        }, [e, t, n]);
    },
    u = () =>
        (0, r.t4)((e) => {
            let { checkoutInvoiceError: t, renewalInvoiceError: n } = e;
            return t ?? n;
        }),
    c = (e) => {
        let {
                checkoutInvoicePreview: t,
                checkoutInvoiceError: n,
                renewalInvoicePreview: s,
                renewalInvoiceError: a,
            } = e,
            o = (0, r.t4)((e) => {
                let { setCheckoutInvoicePreview: t } = e;
                return t;
            }),
            l = (0, r.t4)((e) => {
                let { setRenewalInvoicePreview: t } = e;
                return t;
            });
        i.useEffect(() => {
            o(t, n), l(s, a);
        }, [o, t, n, l, s, a]);
        let u = i.useMemo(() => n ?? a, [n, a]);
        return {
            checkoutInvoicePreview: t,
            checkoutInvoiceError: n,
            renewalInvoicePreview: s,
            renewalInvoiceError: a,
            primaryInvoiceError: u,
        };
    };
