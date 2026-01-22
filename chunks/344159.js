n.d(t, {
    X: () => p,
    s: () => d,
});
var r = n(64700),
    i = n(311907),
    a = n(157559),
    s = n(97352),
    o = n(469778),
    l = n(927578),
    c = n(818348),
    u = n(985018);
function d(e, t, n) {
    let i = {
            closeModal: t,
            isGift: n,
        },
        s = r.useRef(i);
    r.useEffect(() => {
        s.current = i;
    }),
        r.useEffect(() => {
            let { closeModal: t, isGift: n } = s.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (a.A.show({
                    title: u.intl.formatToPlainString(u.t["6mIX6s"], { paymentGatewayName: c.qm[e.paymentGateway] }),
                    body: u.intl.format(u.t.EOa8ei, {
                        paymentGatewayName: c.qm[e.paymentGateway],
                        subscriptionManagementLink: (0, l.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                    }),
                    confirmText: u.intl.string(u.t.BddRzS),
                }),
                t());
        }, [e]);
}
let f = [];
function p(e, t) {
    let n = (0, i.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
        a = (0, i.yK)([o.A], () => {
            let e = null != n ? o.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : f;
        }),
        c = r.useMemo(
            () =>
                a.filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [a],
        );
    return {
        hasEntitlements:
            !t && null != n && null != c && c.length >= l.Ay.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: c,
    };
}
