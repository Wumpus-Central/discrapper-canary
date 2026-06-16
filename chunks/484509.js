n.d(l, { A: () => d });
var t = n(64700),
    i = n(17928),
    r = n(573648),
    a = n(874490),
    s = n(841595);
let o = [];
function d(e) {
    let l = (0, a.dq)({ forUserProfile: !0 }),
        n = (0, i.bG)([s.A], () => s.A.getUserProfile(e));
    return (0, t.useMemo)(
        () =>
            n?.connectedAccounts == null
                ? o
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          t = r.A.get(n);
                      return null != t && r.A.isSupported(n) && l(t);
                  }),
        [n?.connectedAccounts, l],
    );
}
