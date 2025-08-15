n.d(t, { Z: () => s });
var r = n(73800),
    i = n(442837),
    l = n(726542),
    o = n(122021),
    a = n(621853);
let c = [];
function s(e) {
    let t = (0, o.Xj)({ forUserProfile: !0 }),
        n = (0, i.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () =>
            (null == n ? void 0 : n.connectedAccounts) == null
                ? c
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          r = l.Z.get(n);
                      return null != r && l.Z.isSupported(n) && t(r);
                  }),
        [null == n ? void 0 : n.connectedAccounts, t],
    );
}
