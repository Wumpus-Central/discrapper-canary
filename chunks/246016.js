r.d(t, { Y: () => c });
var n = r(192379),
    i = r(442837),
    l = r(699516),
    a = r(594174),
    o = r(320582);
let s = [];
function c(e) {
    let { userId: t } = e,
        r = (0, i.e7)([l.Z, a.default], () => {
            var e;
            return l.Z.isFriend(t) || (null == (e = a.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        c = (0, o.ML)(t);
    return n.useMemo(
        () =>
            r
                ? s
                : c.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [c, r]
    );
}
