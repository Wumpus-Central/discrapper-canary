n.d(t, { N: () => u, P: () => c });
var i = n(64700),
    s = n(86379),
    l = n(35587),
    a = n(677402),
    r = n(368631),
    o = n(682262),
    d = n(654487);
function c() {
    let e = (0, l.IO)().length,
        t = (0, o.b_)(),
        n = (0, s.Hp)(),
        c = (0, a.H)({ location: d.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY });
    return i.useMemo(
        () => (0, r.zj)({ unseenGiftCount: e, isOverlaySupported: t, paymentsBlocked: n, isEligibleForQuests: c }),
        [c, t, n, e],
    );
}
function u(e) {
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
