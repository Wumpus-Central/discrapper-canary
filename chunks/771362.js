t.d(n, { Z: () => a });
var o = t(192379),
    r = t(442837),
    i = t(726542),
    l = t(122021),
    s = t(621853);
let c = [];
function a(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }),
        t = (0, r.e7)([s.Z], () => s.Z.getUserProfile(e));
    return (0, o.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? c
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          o = i.Z.get(t);
                      return null != o && n(o);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n]
    );
}
