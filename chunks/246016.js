n.d(t, { Y: () => c });
var r = n(192379),
    i = n(442837),
    l = n(699516),
    o = n(594174),
    a = n(320582);
let s = [];
function c(e) {
    let { userId: t } = e,
        n = (0, i.e7)([l.Z, o.default], () => {
            var e;
            return l.Z.isFriend(t) || (null == (e = o.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        c = (0, a.ML)(t);
    return r.useMemo(
        () =>
            n
                ? s
                : c.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [c, n]
    );
}
