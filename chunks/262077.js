n.d(t, { A: () => o });
var i = n(582128),
    l = n(17928),
    s = n(280450),
    r = n(166403),
    a = n(818348);
let o = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, l.bG)([r.A], () => r.A.getSubscriptions(!0)),
        o = i.useMemo(
            () =>
                null == n
                    ? []
                    : Object.values(n).filter(
                          (e) => e.type === a.rz.PREMIUM && e.userId === s.default.getId() && (null == t || !!t(e)),
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
