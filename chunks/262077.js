n.d(t, { A: () => l }), n(638769);
var r = n(64700),
    i = n(311907),
    a = n(961350),
    s = n(166403),
    o = n(818348);
let l = function (e) {
    let { subscriptionFilter: t } = e,
        n = (0, i.bG)([s.A], () => s.A.getSubscriptions(!0)),
        l = r.useMemo(
            () =>
                null == n
                    ? []
                    : Object.values(n).filter(
                          (e) => e.type === o.rz.PREMIUM && e.userId === a.default.getId() && (null == t || !!t(e)),
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
