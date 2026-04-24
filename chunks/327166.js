n.d(t, { D: () => o });
var i = n(17928),
    l = n(994500),
    s = n(800828),
    a = n(652215),
    r = n(985018);
function o(e) {
    return (0, i.bG)(
        [s.A, l.A],
        () =>
            l.A.getRelationshipType(e) === a.eA$.PENDING_INCOMING
                ? r.intl.string(r.t.wPI56w)
                : s.A.getGameRelationshipsForUser(e).length > 0
                  ? r.intl.string(r.t.LAcY7m)
                  : r.intl.string(r.t.w5uwoI),
        [e],
    );
}
