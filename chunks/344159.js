n.d(t, { X: () => f, s: () => d });
var l = n(64700),
    r = n(17928),
    u = n(157559),
    i = n(97352),
    a = n(469778),
    o = n(927578),
    s = n(818348),
    c = n(985018);
function d(e, t, n) {
    let r = { closeModal: t, isGift: n },
        i = l.useRef(r);
    l.useEffect(() => {
        i.current = r;
    }),
        l.useEffect(() => {
            let { closeModal: t, isGift: n } = i.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (u.A.show({
                    title: c.intl.formatToPlainString(c.t["6mIX6s"], { paymentGatewayName: s.qm[e.paymentGateway] }),
                    body: c.intl.format(c.t.EOa8ei, {
                        paymentGatewayName: s.qm[e.paymentGateway],
                        subscriptionManagementLink: (0, o.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                    }),
                    confirmText: c.intl.string(c.t.BddRzS),
                }),
                t());
        }, [e]);
}
let A = [];
function f(e, t) {
    let n = (0, r.bG)([i.A], () => (null != e ? i.A.get(e) : null)),
        u = (0, r.yK)([a.A], () => {
            let e = null != n ? a.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : A;
        }),
        s = l.useMemo(
            () =>
                u.filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [u],
        );
    return {
        hasEntitlements:
            !t && null != n && null != s && s.length >= o.Ay.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: s,
    };
}
