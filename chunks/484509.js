var i = n(582128),
    l = n(855986),
    r = n(573648),
    s = n(643068),
    a = n(851767);
let o = [];
n.d(
    t,
    {},
    {
        A: function (e) {
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
        },
    },
);
