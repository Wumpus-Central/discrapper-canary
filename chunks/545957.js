n.d(t, { Z: () => s });
var r = n(442837),
    i = n(199902),
    a = n(699516),
    o = n(981631);
function s(e) {
    let t = (0, r.e7)([a.Z], () => (null != e ? a.Z.getRelationshipType(e) : o.OGo.NONE)),
        n = (0, r.e7)([i.Z], () => (null == e ? null : i.Z.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === o.OGo.BLOCKED ? null : n;
}
