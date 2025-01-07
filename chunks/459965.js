n.d(t, {
    H: function () {
        return b;
    },
    w: function () {
        return f;
    }
});
var r = n(192379),
    u = n(442837),
    a = n(668781),
    l = n(509545),
    i = n(580130),
    d = n(74538),
    c = n(231338),
    s = n(388032);
function f(e, t, n) {
    let u = {
            closeModal: t,
            isGift: n
        },
        l = r.useRef(u);
    r.useEffect(() => {
        l.current = u;
    }),
        r.useEffect(() => {
            let { closeModal: t, isGift: n } = l.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !n &&
                (a.Z.show({
                    title: s.intl.formatToPlainString(s.t['6mIX6u'], { paymentGatewayName: c.Vz[e.paymentGateway] }),
                    body: s.intl.format(s.t.EOa8en, {
                        paymentGatewayName: c.Vz[e.paymentGateway],
                        subscriptionManagementLink: (0, d.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                    }),
                    confirmText: s.intl.string(s.t.BddRzc)
                }),
                t());
        }, [e]);
}
let h = [];
function b(e, t) {
    let n = (0, u.e7)([l.Z], () => (null != e ? l.Z.get(e) : null)),
        a = (0, u.e7)([i.Z], () => {
            var e;
            return null != n && null !== (e = i.Z.getForSku(n.skuId)) && void 0 !== e ? e : h;
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
        hasEntitlements: !t && null != n && null != c && c.length >= d.ZP.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: c
    };
}
