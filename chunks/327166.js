n.d(e, { D: () => s });
var i = n(17928),
    l = n(994500),
    d = n(800828),
    r = n(652215),
    a = n(375708);
function s(t, e) {
    return (0, i.bG)(
        [d.A, l.A],
        () =>
            l.A.getRelationshipType(t) === r.eA$.PENDING_INCOMING
                ? a.intl.string(a.t.wPI56w)
                : d.A.getGameRelationshipsForUser(t).length > 0
                  ? a.intl.string(a.t.LAcY7m)
                  : (e ?? a.intl.string(a.t.w5uwoI)),
        [t, e],
    );
}
