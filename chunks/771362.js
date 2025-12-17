t.d(n, { Z: () => s });
var l = t(473749),
    i = t(442837),
    o = t(726542),
    r = t(122021),
    a = t(621853);
let c = [];
function s(e) {
    let n = (0, r.Xj)({ forUserProfile: !0 }),
        t = (0, i.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, l.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? c
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          l = o.Z.get(t);
                      return null != l && o.Z.isSupported(t) && n(l);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n],
    );
}
