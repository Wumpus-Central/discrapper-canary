"use strict";
n.d(t, { X: () => f, s: () => d });
var r = n(64700),
    i = n(311907),
    s = n(157559),
    a = n(97352),
    o = n(469778),
    l = n(927578),
    u = n(818348),
    c = n(985018);
function d(e, t, n) {
    let i = { closeModal: t, isGift: n },
        a = r.useRef(i);
    r.useEffect(() => {
        a.current = i;
    }),
        r.useEffect(() => {
            let { closeModal: t, isGift: n } = a.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (s.A.show({
                    title: c.intl.formatToPlainString(c.t["6mIX6s"], { paymentGatewayName: u.qm[e.paymentGateway] }),
                    body: c.intl.format(c.t.EOa8ei, {
                        paymentGatewayName: u.qm[e.paymentGateway],
                        subscriptionManagementLink: (0, l.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                    }),
                    confirmText: c.intl.string(c.t.BddRzS),
                }),
                t());
        }, [e]);
}
let _ = [];
function f(e, t) {
    let n = (0, i.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        s = (0, i.yK)([o.A], () => {
            let e = null != n ? o.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : _;
        }),
        u = r.useMemo(
            () =>
                s.filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [s],
        );
    return {
        hasEntitlements:
            !t && null != n && null != u && u.length >= l.Ay.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: u,
    };
}
