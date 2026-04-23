t.d(n, { A: () => d });
var l = t(64700),
    i = t(17928),
    r = t(573648),
    a = t(681819),
    s = t(841595);
let o = [];
function d(e) {
    let n = (0, a.dq)({ forUserProfile: !0 }),
        t = (0, i.bG)([s.A], () => s.A.getUserProfile(e));
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
