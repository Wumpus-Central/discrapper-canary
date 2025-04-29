t.d(n, { Z: () => d });
var l = t(192379),
    r = t(442837),
    i = t(726542),
    o = t(122021),
    s = t(621853);
let a = [];
function d(e) {
    let n = (0, o.Xj)({ forUserProfile: !0 }),
        t = (0, r.e7)([s.Z], () => s.Z.getUserProfile(e));
    return (0, l.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? a
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          l = i.Z.get(t);
                      return null != l && n(l);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n]
    );
}
