n.d(t, { Y: () => o });
var r = n(192379),
    l = n(442837),
    i = n(699516),
    s = n(594174),
    a = n(320582);
let c = [];
function o(e) {
    let { userId: t } = e,
        n = (0, l.e7)([i.Z, s.default], () => {
            var e;
            return i.Z.isFriend(t) || (null == (e = s.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        o = (0, a.ML)(t);
    return r.useMemo(
        () =>
            n
                ? c
                : o.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [o, n]
    );
}
