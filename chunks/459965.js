n.d(t, {
    H: () => _,
    w: () => d
});
var r = n(192379),
    i = n(442837),
    a = n(668781),
    o = n(509545),
    s = n(580130),
    l = n(74538),
    c = n(231338),
    u = n(388032);
function d(e, t, n) {
    let i = {
            closeModal: t,
            isGift: n
        },
        o = r.useRef(i);
    r.useEffect(() => {
        o.current = i;
    }),
        r.useEffect(() => {
            let { closeModal: t, isGift: n } = o.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (a.Z.show({
                    title: u.NW.formatToPlainString(u.t['6mIX6u'], { paymentGatewayName: c.Vz[e.paymentGateway] }),
                    body: u.NW.format(u.t.EOa8en, {
                        paymentGatewayName: c.Vz[e.paymentGateway],
                        subscriptionManagementLink: (0, l.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                    }),
                    confirmText: u.NW.string(u.t.BddRzc)
                }),
                t());
        }, [e]);
}
let f = [];
function _(e, t) {
    let n = (0, i.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
        a = (0, i.e7)([s.Z], () => {
            var e;
            return null != n && null != (e = s.Z.getForSku(n.skuId)) ? e : f;
        }),
        c = r.useMemo(
            () =>
                Array.from(a).filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [a]
        );
    return {
        hasEntitlements: !t && null != n && null != c && c.length >= l.ZP.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: c
    };
}
