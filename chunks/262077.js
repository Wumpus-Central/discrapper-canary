i.d(t, { A: () => o });
var n = i(64700),
    s = i(17928),
    l = i(495544),
    r = i(166403),
    a = i(818348);
let o = function (e) {
    let { subscriptionFilter: t } = e,
        i = (0, s.bG)([r.A], () => r.A.getSubscriptions(!0)),
        o = n.useMemo(
            () =>
                null == i
                    ? []
                    : Object.values(i).filter(
                          (e) => e.type === a.rz.PREMIUM && e.userId === l.default.getId() && (null == t || !!t(e)),
                      ),
            [i, t],
        );
    return (
        o.sort((e, t) => {
            let i = e.paymentGateway ?? 0,
                n = t.paymentGateway ?? 0;
            return i < n ? -1 : +(i > n);
        }),
        o
    );
};
