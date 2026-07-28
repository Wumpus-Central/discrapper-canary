n.d(t, { f: () => p, l: () => m });
var l = n(477900),
    i = n(582128),
    r = n(725836),
    a = n(364995),
    s = n(883645),
    o = n(427675),
    u = n(316915),
    c = n(584160),
    d = n(480642);
function p(e) {
    let { headerBadgeConfig: t } = e,
        { selectedSkuId: n, paymentSourceId: r } = (0, u.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
        })),
        p = (0, o.S3)(),
        m = (0, s.s2)(),
        { checkoutPaymentSources: C, storeCountry: h } = (0, a.t)(),
        E = i.useMemo(() => {
            if (null == r) return null;
            let e = C.find((e) => e.id === r);
            return null == e ? null : (e.relocationCountry ?? null);
        }, [C, r]),
        f = i.useMemo(
            () =>
                (0, c.u)({
                    step: m ?? void 0,
                    skuId: n ?? (null != p ? p.id : null),
                    storeCountryFromCheckoutContext: h,
                    relocationCountry: E,
                    ...t,
                }),
            [m, p, n, h, E, t],
        );
    return (0, l.jsx)(d.s3, { ...f });
}
function m() {
    let { setCheckoutHeaderElementNode: e } = (0, r.ck)();
    return (0, l.jsx)("div", { ref: e });
}
