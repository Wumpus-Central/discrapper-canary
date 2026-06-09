n.d(t, { IJ: () => r, N$: () => l, yf: () => i });
var a,
    l =
        (((a = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (a.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (a.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
        (a.PREMIUM_SWITCH_PLAN = "PREMIUM_SWITCH_PLAN"),
        (a.LOADING = "LOADING"),
        a);
let r = new Set(["PREMIUM_DEFAULT", "PREMIUM_SWITCH_PLAN"]),
    i = (e) => {
        let {
            error: t,
            isGift: n,
            oneTimePurchaseNitroGiftInvoicePreview: a,
            trialInvoicePreview: l,
            proratedInvoicePreview: r,
            renewalInvoicePreview: i,
            planSwitchLoading: s,
        } = e;
        if (null != t) return null;
        if (s);
        else if (n && null != a) return { type: "PREMIUM_GIFT", invoicePreview: a };
        else if (null != l) return { type: "PREMIUM_WITH_TRIAL", invoicePreview: l, renewalInvoicePreview: i };
        else if (null != r && null != i)
            return { type: "PREMIUM_DEFAULT", invoicePreview: r, renewalInvoicePreview: i };
        return { type: "LOADING", invoicePreview: null };
    };
