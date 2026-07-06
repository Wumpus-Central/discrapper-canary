n.d(t, { X: () => m, s: () => d });
var l = n(64700),
    i = n(17928),
    r = n(157559),
    a = n(97352),
    s = n(469778),
    o = n(428262),
    u = n(818348),
    c = n(375708);
function d(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        a = { closeModal: t, isGift: n },
        s = l.useRef(a);
    l.useEffect(() => {
        s.current = a;
    }),
        l.useEffect(() => {
            if (!i) return;
            let { closeModal: t, isGift: n } = s.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (r.A.show({
                    title: c.intl.formatToPlainString(c.t["6mIX6s"], { paymentGatewayName: u.qm[e.paymentGateway] }),
                    body: c.intl.format(c.t.EOa8ei, {
                        paymentGatewayName: u.qm[e.paymentGateway],
                        subscriptionManagementLink: (0, o.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                    }),
                    confirmText: c.intl.string(c.t.BddRzS),
                }),
                t());
        }, [e, i]);
}
let p = [];
function m(e, t) {
    let n = (0, i.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        r = (0, i.yK)([s.A], () => {
            let e = null != n ? s.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : p;
        }),
        u = l.useMemo(
            () =>
                r.filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [r],
        );
    return {
        hasEntitlements:
            !t && null != n && null != u && u.length >= o.Ay.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: u,
    };
}
