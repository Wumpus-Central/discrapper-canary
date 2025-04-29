n.d(t, { Z: () => a });
var l = n(192379),
    r = n(442837),
    i = n(726542),
    s = n(122021),
    o = n(621853);
let c = [];
function a(e) {
    let t = (0, s.Xj)({ forUserProfile: !0 }),
        n = (0, r.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, l.useMemo)(
        () =>
            (null == n ? void 0 : n.connectedAccounts) == null
                ? c
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          l = i.Z.get(n);
                      return null != l && t(l);
                  }),
        [null == n ? void 0 : n.connectedAccounts, t]
    );
}
