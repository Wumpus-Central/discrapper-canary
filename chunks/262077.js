n.d(t, { A: () => c });
var i = n(64700),
    s = n(17928),
    a = n(495544),
    r = n(166403),
    l = n(818348);
let c = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, s.bG)([r.A], () => r.A.getSubscriptions(!0)),
        c = i.useMemo(
            () =>
                null == n
                    ? []
                    : Object.values(n).filter(
                          (e) => e.type === l.rz.PREMIUM && e.userId === a.default.getId() && (null == t || !!t(e)),
                      ),
            [n, t],
        );
    return (
        c.sort((e, t) => {
            let n = e.paymentGateway ?? 0,
                i = t.paymentGateway ?? 0;
            return n < i ? -1 : +(n > i);
        }),
        c
    );
};
