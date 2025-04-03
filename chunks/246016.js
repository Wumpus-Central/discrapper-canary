r.d(t, { Y: () => u });
var n = r(192379),
    l = r(442837),
    s = r(699516),
    i = r(594174),
    a = r(372460),
    c = r(320582);
let o = [];
function u(e) {
    let { userId: t, location: r } = e,
        u = (0, l.e7)([s.Z, i.default], () => {
            var e;
            return s.Z.isFriend(t) || (null == (e = i.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        d = (0, c.ML)(t),
        m = (0, a.wn)({ location: r });
    return n.useMemo(
        () =>
            !m || u
                ? o
                : d.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [d, u, m]
    );
}
