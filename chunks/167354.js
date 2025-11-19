n.d(t, { Z: () => l }), n(642613);
var r = n(473749),
    i = n(442837),
    a = n(314897),
    o = n(78839),
    s = n(231338);
let l = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.getSubscriptions(!0)),
        l = r.useMemo(
            () =>
                null == n
                    ? []
                    : Object.values(n).filter(
                          (e) => e.type === s.NY.PREMIUM && e.userId === a.default.getId() && (null == t || !!t(e)),
                      ),
            [n, t],
        );
    return (
        l.sort((e, t) => {
            var n, r;
            let i = null != (n = e.paymentGateway) ? n : 0,
                a = null != (r = t.paymentGateway) ? r : 0;
            return i < a ? -1 : +(i > a);
        }),
        l
    );
};
