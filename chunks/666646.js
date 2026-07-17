n.d(t, { F0: () => a, IK: () => s, OQ: () => c, Tr: () => o, mx: () => u, sw: () => r });
var l = n(64700),
    i = n(316915);
function r() {
    return (0, i.t4)((e) => {
        let { checkoutInvoicePreview: t } = e;
        return t;
    });
}
function a(e, t) {
    let n = (0, i.t4)((e) => {
        let { setCheckoutInvoicePreview: t } = e;
        return t;
    });
    l.useEffect(() => {
        n(e, t);
    }, [e, t, n]);
}
function s() {
    return (0, i.t4)((e) => {
        let { renewalInvoicePreview: t } = e;
        return t;
    });
}
function o(e, t) {
    let n = (0, i.t4)((e) => {
        let { setRenewalInvoicePreview: t } = e;
        return t;
    });
    l.useEffect(() => {
        n(e, t);
    }, [e, t, n]);
}
function u() {
    return (0, i.t4)((e) => {
        let { checkoutInvoiceError: t, renewalInvoiceError: n } = e;
        return t ?? n;
    });
}
function c(e) {
    let { checkoutInvoicePreview: t, checkoutInvoiceError: n, renewalInvoicePreview: r, renewalInvoiceError: a } = e,
        s = (0, i.t4)((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        }),
        o = (0, i.t4)((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
    l.useEffect(() => {
        s(t, n), o(r, a);
    }, [s, t, n, o, r, a]);
    let u = l.useMemo(() => n ?? a, [n, a]);
    return {
        checkoutInvoicePreview: t,
        checkoutInvoiceError: n,
        renewalInvoicePreview: r,
        renewalInvoiceError: a,
        primaryInvoiceError: u,
    };
}
