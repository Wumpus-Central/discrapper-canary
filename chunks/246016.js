s.d(l, { Y: () => d });
var t = s(192379),
    i = s(442837),
    a = s(699516),
    n = s(594174),
    r = s(372460),
    c = s(320582);
let o = [];
function d(e) {
    let { userId: l, location: s } = e,
        d = (0, i.e7)([a.Z, n.default], () => {
            var e;
            return a.Z.isFriend(l) || (null === (e = n.default.getUser(l)) || void 0 === e ? void 0 : e.isProvisional);
        }),
        u = (0, c.ML)(l),
        m = (0, r.wn)({ location: s });
    return t.useMemo(
        () =>
            !m || d
                ? o
                : u.map((e) => {
                      let { applicationId: l } = e;
                      return l;
                  }),
        [u, d, m]
    );
}
