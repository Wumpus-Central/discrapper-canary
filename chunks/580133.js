n.d(t, { f: () => d, l: () => p });
var l = n(477900),
    i = n(582128),
    r = n(725836),
    a = n(883645),
    s = n(427675),
    o = n(87725),
    u = n(584160),
    c = n(480642);
function d(e) {
    let { headerBadgeConfig: t } = e,
        {
            selectedSkuId: n,
            paymentSourceId: r,
            checkoutPaymentSources: d,
            checkoutStoreCountry: p,
        } = (0, o.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        m = (0, s.S3)(),
        C = (0, a.s2)(),
        h = i.useMemo(() => {
            if (null == r) return null;
            let e = d.find((e) => e.id === r);
            return null == e ? null : (e.relocationCountry ?? null);
        }, [d, r]),
        f = i.useMemo(
            () =>
                (0, u.u)({
                    step: C ?? void 0,
                    skuId: n ?? (null != m ? m.id : null),
                    storeCountryFromCheckoutContext: p,
                    relocationCountry: h,
                    ...t,
                }),
            [C, m, n, p, h, t],
        );
    return (0, l.jsx)(c.s3, { ...f });
}
function p() {
    let { setCheckoutHeaderElementNode: e } = (0, r.ck)();
    return (0, l.jsx)("div", { ref: e });
}
