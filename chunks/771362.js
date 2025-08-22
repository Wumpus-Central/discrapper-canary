t.d(n, { Z: () => a });
var r = t(647438),
    l = t(442837),
    o = t(726542),
    i = t(122021),
    c = t(621853);
let s = [];
function a(e) {
    let n = (0, i.Xj)({ forUserProfile: !0 }),
        t = (0, l.e7)([c.Z], () => c.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? s
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          r = o.Z.get(t);
                      return null != r && o.Z.isSupported(t) && n(r);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n],
    );
}
