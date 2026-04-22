a.d(t, { D: () => o });
var n = a(311907),
    i = a(994500),
    l = a(800828),
    r = a(652215),
    d = a(985018);
function o(e) {
    return (0, n.bG)(
        [l.A, i.A],
        () =>
            i.A.getRelationshipType(e) === r.eA$.PENDING_INCOMING
                ? d.intl.string(d.t.wPI56w)
                : l.A.getGameRelationshipsForUser(e).length > 0
                  ? d.intl.string(d.t.LAcY7m)
                  : d.intl.string(d.t.w5uwoI),
        [e],
    );
}
