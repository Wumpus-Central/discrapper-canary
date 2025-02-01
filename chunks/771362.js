i.d(n, { Z: () => d });
var t = i(192379),
    l = i(442837),
    o = i(726542),
    s = i(122021),
    r = i(621853);
let a = [];
function d(e) {
    let n = (0, s.Xj)({ forUserProfile: !0 }),
        i = (0, l.e7)([r.Z], () => r.Z.getUserProfile(e));
    return (0, t.useMemo)(
        () =>
            (null == i ? void 0 : i.connectedAccounts) == null
                ? a
                : i.connectedAccounts.filter((e) => {
                      let { type: i } = e,
                          t = o.Z.get(i);
                      return null != t && n(t);
                  }),
        [null == i ? void 0 : i.connectedAccounts, n]
    );
}
