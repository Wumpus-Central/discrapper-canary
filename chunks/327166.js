n.d(i, { D: () => h });
var s = n(17928),
    e = n(994500),
    r = n(800828),
    p = n(652215),
    a = n(375708);
function h(t, i) {
    return (0, s.bG)(
        [r.A, e.A],
        () =>
            e.A.getRelationshipType(t) === p.eA$.PENDING_INCOMING
                ? a.intl.string(a.t.wPI56w)
                : r.A.getGameRelationshipsForUser(t).length > 0
                  ? a.intl.string(a.t.LAcY7m)
                  : (i ?? a.intl.string(a.t.w5uwoI)),
        [t, i],
    );
}
