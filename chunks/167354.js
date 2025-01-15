var i = n(192379),
    r = n(442837),
    s = n(78839),
    a = n(231338);
t.Z = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, r.e7)([s.ZP], () => s.ZP.getSubscriptions(!0)),
        l = i.useMemo(() => (null == n ? [] : Object.values(n).filter((e) => !!(e.type === a.NY.PREMIUM && (null == t || t(e)) && (0, s.sE)(e)) || !1)), [n, t]);
    return (
        l.sort((e, t) => {
            var n, i;
            let r = null !== (n = e.paymentGateway) && void 0 !== n ? n : 0,
                s = null !== (i = t.paymentGateway) && void 0 !== i ? i : 0;
            return r < s ? -1 : r > s ? 1 : 0;
        }),
        l
    );
};
