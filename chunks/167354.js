(n.d(t, { Z: () => o }), n(642613));
var i = n(73800),
    r = n(442837),
    s = n(314897),
    l = n(78839),
    a = n(231338);
let o = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, r.e7)([l.Z], () => l.Z.getSubscriptions(!0)),
        o = i.useMemo(() => (null == n ? [] : Object.values(n).filter((e) => e.type === a.NY.PREMIUM && e.userId === s.default.getId() && (null == t || !!t(e)))), [n, t]);
    return (
        o.sort((e, t) => {
            var n, i;
            let r = null != (n = e.paymentGateway) ? n : 0,
                s = null != (i = t.paymentGateway) ? i : 0;
            return r < s ? -1 : +(r > s);
        }),
        o
    );
};
