n.d(t, { D: () => o });
var a = n(17928),
    i = n(994500),
    l = n(800828),
    r = n(652215),
    s = n(985018);
function o(e) {
    return (0, a.bG)(
        [l.A, i.A],
        () =>
            i.A.getRelationshipType(e) === r.eA$.PENDING_INCOMING
                ? s.intl.string(s.t.wPI56w)
                : l.A.getGameRelationshipsForUser(e).length > 0
                  ? s.intl.string(s.t.LAcY7m)
                  : s.intl.string(s.t.w5uwoI),
        [e],
    );
}
