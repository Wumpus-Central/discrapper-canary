t.d(n, { A: () => d });
var l = t(582128),
    i = t(17928),
    r = t(573648),
    s = t(874490),
    a = t(321191);
let o = [];
function d(e) {
    let n = (0, s.dq)({ forUserProfile: !0 }),
        t = (0, i.bG)([a.A], () => a.A.getUserProfile(e));
    return (0, l.useMemo)(
        () =>
            t?.connectedAccounts == null
                ? o
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          l = r.A.get(t);
                      return null != l && r.A.isSupported(t) && n(l);
                  }),
        [t?.connectedAccounts, n],
    );
}
