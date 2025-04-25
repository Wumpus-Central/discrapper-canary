n.d(t, { Z: () => s });
var r = n(192379),
    o = n(442837),
    l = n(726542),
    i = n(122021),
    u = n(621853);
let c = [];
function s(e) {
    let t = (0, i.Xj)({ forUserProfile: !0 }),
        n = (0, o.e7)([u.Z], () => u.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () =>
            (null == n ? void 0 : n.connectedAccounts) == null
                ? c
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          r = l.Z.get(n);
                      return null != r && t(r);
                  }),
        [null == n ? void 0 : n.connectedAccounts, t]
    );
}
