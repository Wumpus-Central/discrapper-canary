n.d(t, { n: () => l });
var r = n(442837),
    i = n(699516),
    a = n(91896),
    o = n(981631),
    s = n(388032);
function l(e) {
    return (0, r.e7)(
        [a.Z, i.Z],
        () =>
            i.Z.getRelationshipType(e) === o.OGo.PENDING_INCOMING
                ? s.intl.string(s.t.wPI56w)
                : a.Z.getGameRelationshipsForUser(e).length > 0
                  ? s.intl.string(s.t.LAcY7m)
                  : s.intl.string(s.t.w5uwoI),
        [e],
    );
}
