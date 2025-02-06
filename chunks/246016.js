n.d(t, { Y: () => c });
var i = n(192379),
    l = n(442837),
    a = n(699516),
    r = n(372460),
    s = n(320582);
let o = [];
function c(e) {
    let { userId: t, location: n } = e,
        c = (0, l.e7)([a.Z], () => a.Z.isFriend(t)),
        d = (0, s.ML)(t),
        u = (0, r.wn)({ location: n });
    return i.useMemo(
        () =>
            !u || c
                ? o
                : d.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [d, c, u]
    );
}
