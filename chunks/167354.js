var i = n(192379),
    s = n(442837),
    r = n(78839),
    a = n(231338);
t.Z = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, s.e7)([r.ZP], () => r.ZP.getSubscriptions(!0)),
        l = i.useMemo(() => (null == n ? [] : Object.values(n).filter((e) => !!(e.type === a.NY.PREMIUM && (null == t || t(e)) && (0, r.sE)(e)) || !1)), [n, t]);
    return (
        l.sort((e, t) => {
            var n, i;
            let s = null !== (n = e.paymentGateway) && void 0 !== n ? n : 0,
                r = null !== (i = t.paymentGateway) && void 0 !== i ? i : 0;
            return s < r ? -1 : s > r ? 1 : 0;
        }),
        l
    );
};
