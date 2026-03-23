n.d(t, { N: () => c, P: () => d });
var i = n(64700),
    s = n(86379),
    l = n(35587),
    a = n(971276),
    r = n(368631),
    o = n(682262);
function d() {
    let e = (0, l.IO)().length,
        t = (0, o.b_)(),
        n = (0, s.Hp)(),
        d = (0, a.s)();
    return i.useMemo(
        () => (0, r.zj)({ unseenGiftCount: e, isOverlaySupported: t, paymentsBlocked: n, isEligibleForQuests: d }),
        [d, t, n, e],
    );
}
function c(e) {
    return Array.from(
        new Map(
            Object.entries(e).filter((e) => {
                let [t, n] = e;
                return (
                    null != n.searchableTitles &&
                    (null == n.predicate || n.predicate()) &&
                    (null == n.unsearchable || !1 === n.unsearchable)
                );
            }),
        ).entries(),
    ).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
