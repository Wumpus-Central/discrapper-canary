n.d(t, { Y: () => c });
var r = n(473749),
    i = n(442837),
    l = n(699516),
    a = n(594174),
    s = n(320582);
let o = [];
function c(e) {
    let { userId: t } = e,
        n = (0, i.e7)([l.Z, a.default], () => {
            var e;
            return l.Z.isFriend(t) || (null == (e = a.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        c = (0, s.ML)(t);
    return r.useMemo(
        () =>
            n
                ? o
                : c.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [c, n],
    );
}
