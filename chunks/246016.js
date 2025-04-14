r.d(t, { Y: () => o });
var n = r(192379),
    l = r(442837),
    s = r(699516),
    i = r(594174),
    a = r(320582);
let c = [];
function o(e) {
    let { userId: t } = e,
        r = (0, l.e7)([s.Z, i.default], () => {
            var e;
            return s.Z.isFriend(t) || (null == (e = i.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        o = (0, a.ML)(t);
    return n.useMemo(
        () =>
            r
                ? c
                : o.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [o, r]
    );
}
