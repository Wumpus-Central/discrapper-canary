s.d(l, { Y: () => o });
var t = s(192379),
    i = s(442837),
    a = s(699516),
    n = s(372460),
    r = s(320582);
let c = [];
function o(e) {
    let { userId: l, location: s } = e,
        o = (0, i.e7)([a.Z], () => a.Z.isFriend(l)),
        d = (0, r.ML)(l),
        u = (0, n.wn)({ location: s });
    return t.useMemo(
        () =>
            !u || o
                ? c
                : d.map((e) => {
                      let { applicationId: l } = e;
                      return l;
                  }),
        [d, o, u]
    );
}
