t.d(l, {
    A: () => d,
});
var n = t(64700),
    i = t(311907),
    r = t(573648),
    s = t(681819),
    a = t(622543);
let o = [];

function d(e) {
    let l = (0, s.dq)({
            forUserProfile: !0,
        }),
        t = (0, i.bG)([a.A], () => a.A.getUserProfile(e));
    return (0, n.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? o
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          n = r.A.get(t);
                      return null != n && r.A.isSupported(t) && l(n);
                  }),
        [null == t ? void 0 : t.connectedAccounts, l],
    );
}
