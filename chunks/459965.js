r.d(n, {
    H: function () {
        return h;
    },
    w: function () {
        return f;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(668781),
    s = r(509545),
    l = r(580130),
    u = r(74538),
    c = r(231338),
    d = r(388032);
function f(e, n, r) {
    let a = {
            closeModal: n,
            isGift: r
        },
        s = i.useRef(a);
    i.useEffect(() => {
        s.current = a;
    }),
        i.useEffect(() => {
            let { closeModal: n, isGift: r } = s.current;
            null != e &&
                e.isPurchasedExternally &&
                null != e.paymentGateway &&
                !r &&
                (o.Z.show({
                    title: d.intl.formatToPlainString(d.t['6mIX6u'], { paymentGatewayName: c.Vz[e.paymentGateway] }),
                    body: d.intl.format(d.t.EOa8en, {
                        paymentGatewayName: c.Vz[e.paymentGateway],
                        subscriptionManagementLink: (0, u.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                    }),
                    confirmText: d.intl.string(d.t.BddRzc)
                }),
                n());
        }, [e]);
}
let p = [];
function h(e, n) {
    let r = (0, a.e7)([s.Z], () => (null != e ? s.Z.get(e) : null)),
        o = (0, a.e7)([l.Z], () => {
            var e;
            return null != r && null !== (e = l.Z.getForSku(r.skuId)) && void 0 !== e ? e : p;
        }),
        c = i.useMemo(
            () =>
                Array.from(o).filter((e) => {
                    let { parentId: n, consumed: r } = e;
                    return null != n && !r;
                }),
            [o]
        );
    return {
        hasEntitlements: !n && null != r && null != c && c.length >= u.ZP.getIntervalMonths(r.interval, r.intervalCount),
        entitlements: c
    };
}
