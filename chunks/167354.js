n.d(t, { Z: () => a }), n(642613);
var i = n(73800),
    r = n(442837),
    s = n(78839),
    l = n(231338);
let a = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, r.e7)([s.ZP], () => s.ZP.getSubscriptions(!0)),
        a = i.useMemo(() => (null == n ? [] : Object.values(n).filter((e) => e.type === l.NY.PREMIUM && (null == t || !!t(e)) && !!(0, s.sE)(e))), [n, t]);
    return (
        a.sort((e, t) => {
            var n, i;
            let r = null != (n = e.paymentGateway) ? n : 0,
                s = null != (i = t.paymentGateway) ? i : 0;
            return r < s ? -1 : +(r > s);
        }),
        a
    );
};
