n.d(t, { f: () => d, l: () => m });
var l = n(477900),
    i = n(582128),
    r = n(725836),
    a = n(883645),
    s = n(427675),
    o = n(721836),
    u = n(584160),
    c = n(169797);
function d(e) {
    let { headerBadgeConfig: t } = e,
        {
            selectedSkuId: n,
            paymentSourceId: r,
            checkoutPaymentSources: d,
            checkoutStoreCountry: m,
        } = (0, o.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        p = (0, s.S3)(),
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
                    skuId: n ?? (null != p ? p.id : null),
                    storeCountryFromCheckoutContext: m,
                    relocationCountry: h,
                    ...t,
                }),
            [C, p, n, m, h, t],
        );
    return (0, l.jsx)(c.s3, { ...f });
}
function m() {
    let { setCheckoutHeaderElementNode: e } = (0, r.ck)();
    return (0, l.jsx)("div", { ref: e });
}
