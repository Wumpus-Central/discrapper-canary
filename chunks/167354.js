n.d(t, { Z: () => a });
var i = n(192379),
    s = n(442837),
    l = n(78839),
    r = n(231338);
let a = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, s.e7)([l.ZP], () => l.ZP.getSubscriptions(!0)),
        a = i.useMemo(() => (null == n ? [] : Object.values(n).filter((e) => !!(e.type === r.NY.PREMIUM && (null == t || t(e)) && (0, l.sE)(e)))), [n, t]);
    return (
        a.sort((e, t) => {
            var n, i;
            let s = null !== (n = e.paymentGateway) && void 0 !== n ? n : 0,
                l = null !== (i = t.paymentGateway) && void 0 !== i ? i : 0;
            return s < l ? -1 : s > l ? 1 : 0;
        }),
        a
    );
};
