n.d(t, {
    H: () => _,
    w: () => d
});
var i = n(192379),
    r = n(442837),
    a = n(668781),
    s = n(509545),
    o = n(580130),
    l = n(74538),
    u = n(231338),
    c = n(388032);
function d(e, t, n) {
    let r = {
            closeModal: t,
            isGift: n
        },
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
                (a.Z.show({
                    title: c.intl.formatToPlainString(c.t['6mIX6u'], { paymentGatewayName: u.Vz[e.paymentGateway] }),
                    body: c.intl.format(c.t.EOa8en, {
                        paymentGatewayName: u.Vz[e.paymentGateway],
                        subscriptionManagementLink: (0, l.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                    }),
                    confirmText: c.intl.string(c.t.BddRzc)
                }),
                t());
        }, [e]);
}
let f = [];
function _(e, t) {
    let n = (0, r.e7)([s.Z], () => (null != e ? s.Z.get(e) : null)),
        a = (0, r.e7)([o.Z], () => {
            var e;
            return null != n && null !== (e = o.Z.getForSku(n.skuId)) && void 0 !== e ? e : f;
        }),
        u = i.useMemo(
            () =>
                Array.from(a).filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [a]
        );
    return {
        hasEntitlements: !t && null != n && null != u && u.length >= l.ZP.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: u
    };
}
