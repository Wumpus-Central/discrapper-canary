n.d(t, { Z: () => s });
var r = n(647438),
    o = n(442837),
    i = n(726542),
    l = n(122021),
    a = n(621853);
let c = [];
function s(e) {
    let t = (0, l.Xj)({ forUserProfile: !0 }),
        n = (0, o.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () =>
            (null == n ? void 0 : n.connectedAccounts) == null
                ? c
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          r = i.Z.get(n);
                      return null != r && i.Z.isSupported(n) && t(r);
                  }),
        [null == n ? void 0 : n.connectedAccounts, t],
    );
}
