t.d(n, { Z: () => c });
var l = t(192379),
    r = t(442837),
    i = t(726542),
    s = t(122021),
    o = t(621853);
let a = [];
function c(e) {
    let n = (0, s.Xj)({ forUserProfile: !0 }),
        t = (0, r.e7)([o.Z], () => o.Z.getUserProfile(e));
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
