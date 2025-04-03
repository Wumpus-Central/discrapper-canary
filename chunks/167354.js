n.d(t, { Z: () => l }), n(230036);
var r = n(192379),
    i = n(442837),
    s = n(78839),
    a = n(231338);
let l = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, i.e7)([s.ZP], () => s.ZP.getSubscriptions(!0)),
        l = r.useMemo(() => (null == n ? [] : Object.values(n).filter((e) => e.type === a.NY.PREMIUM && (null == t || !!t(e)) && !!(0, s.sE)(e))), [n, t]);
    return (
        l.sort((e, t) => {
            var n, r;
            let i = null != (n = e.paymentGateway) ? n : 0,
                s = null != (r = t.paymentGateway) ? r : 0;
            return i < s ? -1 : +(i > s);
        }),
        l
    );
};
