t.d(n, { Y: () => c });
var i = t(192379),
    o = t(442837),
    l = t(699516),
    r = t(594174),
    s = t(320582);
let a = [];
function c(e) {
    let { userId: n } = e,
        t = (0, o.e7)([l.Z, r.default], () => {
            var e;
            return l.Z.isFriend(n) || (null == (e = r.default.getUser(n)) ? void 0 : e.isProvisional);
        }),
        c = (0, s.ML)(n);
    return i.useMemo(
        () =>
            t
                ? a
                : c.map((e) => {
                      let { applicationId: n } = e;
                      return n;
                  }),
        [c, t]
    );
}
