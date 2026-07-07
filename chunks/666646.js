r.d(t, { F0: () => c, IK: () => s, OQ: () => o, Tr: () => l, mx: () => a, sw: () => i });
var n = r(64700),
    u = r(6938);
function i() {
    return (0, u.t4)((e) => {
        let { checkoutInvoicePreview: t } = e;
        return t;
    });
}
function c(e, t) {
    let r = (0, u.t4)((e) => {
        let { setCheckoutInvoicePreview: t } = e;
        return t;
    });
    n.useEffect(() => {
        r(e, t);
    }, [e, t, r]);
}
function s() {
    return (0, u.t4)((e) => {
        let { renewalInvoicePreview: t } = e;
        return t;
    });
}
function l(e, t) {
    let r = (0, u.t4)((e) => {
        let { setRenewalInvoicePreview: t } = e;
        return t;
    });
    n.useEffect(() => {
        r(e, t);
    }, [e, t, r]);
}
function a() {
    return (0, u.t4)((e) => {
        let { checkoutInvoiceError: t, renewalInvoiceError: r } = e;
        return t ?? r;
    });
}
function o(e) {
    let { checkoutInvoicePreview: t, checkoutInvoiceError: r, renewalInvoicePreview: i, renewalInvoiceError: c } = e,
        s = (0, u.t4)((e) => {
            let { setCheckoutInvoicePreview: t } = e;
            return t;
        }),
        l = (0, u.t4)((e) => {
            let { setRenewalInvoicePreview: t } = e;
            return t;
        });
    n.useEffect(() => {
        s(t, r), l(i, c);
    }, [s, t, r, l, i, c]);
    let a = n.useMemo(() => r ?? c, [r, c]);
    return {
        checkoutInvoicePreview: t,
        checkoutInvoiceError: r,
        renewalInvoicePreview: i,
        renewalInvoiceError: c,
        primaryInvoiceError: a,
    };
}
