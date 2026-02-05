n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    r = n(961350),
    a = n(166403),
    l = n(818348);
let o = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, s.bG)([a.A], () => a.A.getSubscriptions(!0)),
        o = i.useMemo(
            () =>
                null == n
                    ? []
                    : Object.values(n).filter(
                          (e) => e.type === l.rz.PREMIUM && e.userId === r.default.getId() && (null == t || !!t(e)),
                      ),
            [n, t],
        );
    return (
        o.sort((e, t) => {
            let n = e.paymentGateway ?? 0,
                i = t.paymentGateway ?? 0;
            return n < i ? -1 : +(n > i);
        }),
        o
    );
};
