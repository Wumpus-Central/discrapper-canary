r.d(t, { Y: () => c });
var n = r(73800),
    i = r(442837),
    a = r(699516),
    l = r(594174),
    s = r(320582);
let o = [];
function c(e) {
    let { userId: t } = e,
        r = (0, i.e7)([a.Z, l.default], () => {
            var e;
            return a.Z.isFriend(t) || (null == (e = l.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        c = (0, s.ML)(t);
    return n.useMemo(
        () =>
            r
                ? o
                : c.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [c, r],
    );
}
