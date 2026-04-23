n.d(t, { X: () => h, s: () => d });
var i = n(64700),
    r = n(17928),
    l = n(157559),
    s = n(97352),
    a = n(469778),
    u = n(927578),
    o = n(818348),
    c = n(985018);
function d(e, t, n) {
    let r = { closeModal: t, isGift: n },
        s = i.useRef(r);
    i.useEffect(() => {
        s.current = r;
    }),
        i.useEffect(() => {
            let { closeModal: t, isGift: n } = s.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (l.A.show({
                    title: c.intl.formatToPlainString(c.t["6mIX6s"], { paymentGatewayName: o.qm[e.paymentGateway] }),
                    body: c.intl.format(c.t.EOa8ei, {
                        paymentGatewayName: o.qm[e.paymentGateway],
                        subscriptionManagementLink: (0, u.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                    }),
                    confirmText: c.intl.string(c.t.BddRzS),
                }),
                t());
        }, [e]);
}
let p = [];
function h(e, t) {
    let n = (0, r.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
        l = (0, r.yK)([a.A], () => {
            let e = null != n ? a.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : p;
        }),
        o = i.useMemo(
            () =>
                l.filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [l],
        );
    return {
        hasEntitlements:
            !t && null != n && null != o && o.length >= u.Ay.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: o,
    };
}
