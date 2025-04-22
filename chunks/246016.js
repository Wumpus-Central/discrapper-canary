n.d(t, { Y: () => o });
var r = n(192379),
    l = n(442837),
    s = n(699516),
    i = n(594174),
    a = n(320582);
let c = [];
function o(e) {
    let { userId: t } = e,
        n = (0, l.e7)([s.Z, i.default], () => {
            var e;
            return s.Z.isFriend(t) || (null == (e = i.default.getUser(t)) ? void 0 : e.isProvisional);
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
