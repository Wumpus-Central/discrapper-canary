n.d(t, { A: () => u });
var i = n(582128),
    l = n(17928),
    r = n(573648),
    s = n(874490),
    a = n(321191);
let o = [];
function u(e) {
    let t = (0, s.dq)({ forUserProfile: !0 }),
        n = (0, l.bG)([a.A], () => a.A.getUserProfile(e));
    return (0, i.useMemo)(
        () =>
            n?.connectedAccounts == null
                ? o
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          i = r.A.get(n);
                      return null != i && r.A.isSupported(n) && t(i);
                  }),
        [n?.connectedAccounts, t],
    );
}
