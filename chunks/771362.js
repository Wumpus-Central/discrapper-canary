t.d(n, { Z: () => c });
var l = t(647438),
    i = t(442837),
    r = t(726542),
    o = t(122021),
    s = t(621853);
let a = [];
function c(e) {
    let n = (0, o.Xj)({ forUserProfile: !0 }),
        t = (0, i.e7)([s.Z], () => s.Z.getUserProfile(e));
    return (0, l.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? a
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          l = r.Z.get(t);
                      return null != l && r.Z.isSupported(t) && n(l);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n],
    );
}
