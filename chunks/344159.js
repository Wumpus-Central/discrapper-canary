n.d(t, { X: () => m, s: () => d });
var l = n(64700),
    i = n(311907),
    a = n(157559),
    r = n(97352),
    s = n(469778),
    o = n(927578),
    u = n(818348),
    c = n(985018);
function d(e, t, n) {
    let i = { closeModal: t, isGift: n },
        r = l.useRef(i);
    l.useEffect(() => {
        r.current = i;
    }),
        l.useEffect(() => {
            let { closeModal: t, isGift: n } = r.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (a.A.show({
                    title: c.intl.formatToPlainString(c.t["6mIX6s"], { paymentGatewayName: u.qm[e.paymentGateway] }),
                    body: c.intl.format(c.t.EOa8ei, {
                        paymentGatewayName: u.qm[e.paymentGateway],
                        subscriptionManagementLink: (0, o.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                    }),
                    confirmText: c.intl.string(c.t.BddRzS),
                }),
                t());
        }, [e]);
}
let p = [];
function m(e, t) {
    let n = (0, i.bG)([r.A], () => (null != e ? r.A.get(e) : null)),
        a = (0, i.yK)([s.A], () => {
            let e = null != n ? s.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : p;
        }),
        u = l.useMemo(
            () =>
                a.filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [a],
        );
    return {
        hasEntitlements:
            !t && null != n && null != u && u.length >= o.Ay.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: u,
    };
}
