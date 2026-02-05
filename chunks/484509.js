n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    l = n(573648),
    a = n(681819),
    r = n(622543);
let d = [];
function o(e) {
    let t = (0, a.dq)({ forUserProfile: !0 }),
        n = (0, s.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, i.useMemo)(
        () =>
            n?.connectedAccounts == null
                ? d
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          i = l.A.get(n);
                      return null != i && l.A.isSupported(n) && t(i);
                  }),
        [n?.connectedAccounts, t],
    );
}
