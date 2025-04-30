n.d(t, { Z: () => s });
var r = n(442837),
    i = n(199902),
    o = n(699516),
    a = n(981631);
function s(e) {
    let t = (0, r.e7)([o.Z], () => (null != e ? o.Z.getRelationshipType(e) : a.OGo.NONE)),
        n = (0, r.e7)([i.Z], () => (null == e ? null : i.Z.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === a.OGo.BLOCKED ? null : n;
}
