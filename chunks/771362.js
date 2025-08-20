t.d(n, { Z: () => s });
var r = t(647438),
    o = t(442837),
    l = t(726542),
    i = t(122021),
    c = t(621853);
let a = [];
function s(e) {
    let n = (0, i.Xj)({ forUserProfile: !0 }),
        t = (0, o.e7)([c.Z], () => c.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? a
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          r = l.Z.get(t);
                      return null != r && l.Z.isSupported(t) && n(r);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n],
    );
}
