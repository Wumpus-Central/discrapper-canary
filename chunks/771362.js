n.d(t, { Z: () => s });
var r = n(192379),
    o = n(442837),
    l = n(726542),
    i = n(122021),
    c = n(621853);
let u = [];
function s(e) {
    let t = (0, i.Xj)({ forUserProfile: !0 }),
        n = (0, o.e7)([c.Z], () => c.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () =>
            (null == n ? void 0 : n.connectedAccounts) == null
                ? u
                : n.connectedAccounts.filter((e) => {
                      let { type: n } = e,
                          r = l.Z.get(n);
                      return null != r && t(r);
                  }),
        [null == n ? void 0 : n.connectedAccounts, t]
    );
}
