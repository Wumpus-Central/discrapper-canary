n.d(t, { f: () => E, l: () => C });
var l = n(627968),
    r = n(64700),
    i = n(615310),
    o = n(725836),
    s = n(364995),
    a = n(427675),
    u = n(6938),
    c = n(584160),
    d = n(169797);
function E(e) {
    let { headerBadgeConfig: t } = e,
        { selectedSkuId: n, paymentSourceId: o } = (0, u.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
        })),
        E = (0, a.S3)(),
        C = (0, i.bB)(),
        { checkoutPaymentSources: h, storeCountry: _ } = (0, s.t)(),
        S = r.useMemo(() => {
            if (null == o) return null;
            let e = h.find((e) => e.id === o);
            return null == e ? null : (e.relocationCountry ?? null);
        }, [h, o]),
        m = r.useMemo(
            () =>
                (0, c.u)({
                    step: C ?? void 0,
                    skuId: n ?? (null != E ? E.id : null),
                    storeCountryFromCheckoutContext: _,
                    relocationCountry: S,
                    ...t,
                }),
            [C, E, n, _, S, t],
        );
    return (0, l.jsx)(d.s3, { ...m });
}
function C() {
    let { setCheckoutHeaderElementNode: e } = (0, o.ck)();
    return (0, l.jsx)("div", { ref: e });
}
